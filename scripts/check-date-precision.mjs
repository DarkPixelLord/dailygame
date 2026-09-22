#!/usr/bin/env node
// Read-only diagnostic for the v2 event pipeline (see fetch-candidates.mjs).
// Reports the Wikidata time-precision distribution of the CURRENT
// data/candidates.json pool — never writes candidates.json, never touches
// the sourcing script. Answers one question cheaply before deciding whether
// a precision filter is even worth building: how much of the pool already
// has a day-precision date vs. a coarser (month/year/decade/century) one
// that only looks precise because it got truncated to a year number.
//
// wdt: properties on Wikidata are "truthy" simplified values with no
// precision metadata, which is why fetch-candidates.mjs's DATE_CHAIN can't
// see this itself — precision only exists on the full statement/value node
// (p:/psv:/wikibase:timePrecision), a different RDF shape from the rest of
// that script's queries.
//
// Usage:
//   node scripts/check-date-precision.mjs

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
// Split from a single data/candidates.json into one file per top category
// once the pool reached 853 items (see fetch-candidates.mjs's CATEGORY_FILES) —
// read all three and merge, same as fetch-candidates.mjs's loadExistingCandidates.
const CATEGORY_KEYS = ["conflict_politics_society", "arts_culture", "science_infrastructure"];
const CANDIDATE_PATHS = CATEGORY_KEYS.map((key) => path.join(ROOT, "data", `candidates-${key}.json`));
const USER_AGENT = "dailygame-content-pipeline/0.1 (local script, no contact configured)";
const QLEVER_ENDPOINT = "https://qlever.cs.uni-freiburg.de/api/wikidata";

// Same priority order as fetch-candidates.mjs's DATE_CHAIN (P580 > P585 >
// P571 > P575) — must match it, otherwise this reports the precision of a
// property that isn't the one that actually produced the stored date. Only
// applies to class-based subcategories; person-based ones (major_artist,
// pioneer — see fetchPersonCandidates) are dated by birth (P569) instead,
// checked separately below since it's never part of that COALESCE chain.
const DATE_PROPS_IN_PRIORITY_ORDER = ["P580", "P585", "P571", "P575"];
const BIRTH_DATE_PROP = "P569";
const PERSON_SUBCATEGORIES = new Set(["major_artist", "pioneer"]);

// https://www.wikidata.org/wiki/Help:Dates#Precision
const PRECISION_LABELS = {
  11: "DAY",
  10: "MONTH",
  9: "YEAR",
  8: "DECADE",
  7: "CENTURY",
  6: "MILLENNIUM",
};

async function runSparql(query) {
  const url = new URL(QLEVER_ENDPOINT);
  url.searchParams.set("query", query);
  const res = await fetch(url, { headers: { Accept: "application/sparql-results+json", "User-Agent": USER_AGENT } });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`QLever query failed: ${res.status} ${body.slice(0, 300)}`);
  }
  return res.json();
}

function buildQuery(ids) {
  const values = ids.map((id) => `wd:${id}`).join(" ");
  const branches = [...DATE_PROPS_IN_PRIORITY_ORDER, BIRTH_DATE_PROP].map(
    (prop) => `
    {
      ?item p:${prop} ?statement .
      ?statement psv:${prop} ?value .
      ?value wikibase:timePrecision ?precision .
      BIND("${prop}" AS ?prop)
    }`
  ).join(" UNION ");

  return `
    PREFIX wd: <http://www.wikidata.org/entity/>
    PREFIX p: <http://www.wikidata.org/prop/>
    PREFIX psv: <http://www.wikidata.org/prop/statement/value/>
    PREFIX wikibase: <http://wikiba.se/ontology#>
    SELECT ?item ?prop ?precision WHERE {
      VALUES ?item { ${values} }
      ${branches}
    }
  `;
}

async function fetchPrecisionByItem(ids) {
  // Batched, not one query per item. 150 hit QLever's per-query memory cap
  // (5 UNION branches x VALUES list is heavier than fetch-candidates.mjs's
  // queries) with a 500 "Tried to allocate 67 MB, but only 51.5 MB were
  // available" — 30 stays comfortably under it.
  const BATCH_SIZE = 30;
  const byItem = new Map(); // wikidataId -> { P580: precision, P585: precision, ... }
  for (let i = 0; i < ids.length; i += BATCH_SIZE) {
    const batchIds = ids.slice(i, i + BATCH_SIZE);
    const data = await runSparql(buildQuery(batchIds));
    for (const row of data.results.bindings) {
      const wikidataId = row.item.value.split("/").pop();
      if (!byItem.has(wikidataId)) byItem.set(wikidataId, {});
      byItem.get(wikidataId)[row.prop.value] = Number(row.precision.value);
    }
    console.log(`  ...checked precision for ${Math.min(i + BATCH_SIZE, ids.length)}/${ids.length}`);
  }
  return byItem;
}

function resolvePrecision(propsForItem, subcategory) {
  if (!propsForItem) return null;
  if (PERSON_SUBCATEGORIES.has(subcategory)) return propsForItem[BIRTH_DATE_PROP] ?? null;
  for (const prop of DATE_PROPS_IN_PRIORITY_ORDER) {
    if (propsForItem[prop] != null) return propsForItem[prop];
  }
  return null;
}

async function main() {
  const candidates = CANDIDATE_PATHS.filter(existsSync).flatMap((p) => JSON.parse(readFileSync(p, "utf8")));
  console.log(`check-date-precision: checking ${candidates.length} candidates against QLever...`);

  const precisionByItem = await fetchPrecisionByItem(candidates.map((c) => c.wikidataId));

  const overall = {};
  const bySubcategory = {};
  const unresolved = [];
  for (const c of candidates) {
    const precision = resolvePrecision(precisionByItem.get(c.wikidataId), c.subcategory);
    const label = precision == null ? "UNKNOWN" : PRECISION_LABELS[precision] ?? `OTHER(${precision})`;
    overall[label] = (overall[label] ?? 0) + 1;
    if (!bySubcategory[c.subcategory]) bySubcategory[c.subcategory] = {};
    bySubcategory[c.subcategory][label] = (bySubcategory[c.subcategory][label] ?? 0) + 1;
    if (label !== "DAY") unresolved.push({ wikidataId: c.wikidataId, label: c.label, subcategory: c.subcategory, precision: label });
  }

  console.log("\ncheck-date-precision: overall distribution:");
  console.table(overall);
  console.log("\ncheck-date-precision: by subcategory:");
  console.table(bySubcategory);

  if (unresolved.length > 0) {
    console.log(`\ncheck-date-precision: ${unresolved.length}/${candidates.length} candidates are NOT day-precision:`);
    console.table(unresolved.slice(0, 50));
    if (unresolved.length > 50) console.log(`  ...and ${unresolved.length - 50} more.`);
  }
}

main().catch((err) => {
  console.error("check-date-precision: failed —", err.message);
  process.exit(1);
});
