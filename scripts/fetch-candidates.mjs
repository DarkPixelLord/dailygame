#!/usr/bin/env node
// Sourcing step for the v2 event pipeline (docs/event-writing-guide-v2.md).
// Zero LLM calls, zero tokens — pure data fetch from Wikidata + Wikipedia's
// public pageview/summary APIs. Produces data/candidates.json: a pool of
// historical events that are structurally usable (a real point on a map, a
// date), pre-filtered for real-world fame, and already carrying the raw
// factual summary a later drafting pass needs — a single, complete,
// ready-to-draft dataset. No separate step fetches text later for whichever
// candidates get picked; every candidate stored here already has everything
// needed to draft it. This script never writes clue text itself.
//
// Why pageviews, not just Wikidata sitelinks: sitelinks (how many language
// Wikipedias cover a topic) looked like a good "known to a general audience"
// proxy but calibration showed it isn't, for battles especially — military-
// history enthusiasts translate obscure battles into 25+ languages ("Battle
// of Idistaviso", "Battle of Kircholm") just as thoroughly as Waterloo or
// Hastings. Average monthly pageviews on English Wikipedia (actual reader
// interest) separated them clearly in testing: ~2,000/month for the obscure
// ones vs. 70,000-120,000/month for the famous ones. Sitelinks are still
// used as a light pre-filter to keep the SPARQL result set to real articles,
// not to decide fame.
//
// Usage:
//   node scripts/fetch-candidates.mjs [--limit 150] [--min-sitelinks 25]
//
// Queries QLever's Wikidata mirror (qlever.cs.uni-freiburg.de), not the
// official query.wikidata.org endpoint: the official one proved unreliable
// under this script's query shapes — 25-65s response times, intermittent
// 502/504/timeouts, sometimes on the exact same query that had just
// succeeded seconds earlier. QLever mirrors the same data with a different,
// faster engine (sub-second to a few seconds for the same queries in
// testing) but needs standard PREFIX declarations (no implicit wd:/wdt:) and
// has no wikibase:sitelinks or SERVICE wikibase:label — sitelinks-equivalent
// is computed here as COUNT(DISTINCT ?wiki) of language-Wikipedia links, and
// labels come from a plain rdfs:label with a language filter.
//
// --min-sitelinks is now mostly a notability floor rather than a query-cost
// lever (QLever handles the full unfiltered classes fast enough that cost
// isn't the binding constraint the way it was on the official endpoint).
//
// --limit caps how many NEW candidates get a pageview lookup this run (each
// one is an extra HTTP call) — cached results from previous runs are kept
// and re-scored candidates are never re-fetched. Safe to re-run repeatedly
// to grow the pool over time.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const REJECTED_PATH = path.join(ROOT, "data", "rejected.json");
const ACTIVE_EVENTS_PATH = path.join(ROOT, "src", "lib", "poc-events.ts");

const USER_AGENT = "dailygame-content-pipeline/0.1 (local script, no contact configured)";

// Wikidata classes for events that plausibly pin to one real point on a map.
// Two-level taxonomy, agreed on after brainstorming past the original 6 flat
// categories: a handful of human-readable TOP_CATEGORIES (for reporting/
// display) made of finer SUBCATEGORIES (the actual round-robin unit — see
// buildBalancedBatch). Round-robin runs on the ~10 subcategories directly,
// flat, rather than a nested 3-level structure — simpler to implement and it
// already solves the real complaint (batches were dominated by battles and
// repeat Olympic editions because the old round-robin balanced only 6 wide
// buckets, one of which — "conflict" — was itself several different shapes
// of story lumped together).
//
// Deliberately excluded here (discussed and rejected or not yet solvable):
// "œuvre artistique majeure" (a specific artwork — painting-class queries
// time out, same problem human/Q5 had before being scoped by occupation —
// needs the same fix, not done yet) and space/spaceflight (no reliable
// single point: the mission itself spans launch site, orbit and landing).
// Adding a class here is cheap once one of those gets solved — see
// docs/event-writing-guide-v2.md for the full taxonomy.
const TOP_CATEGORIES = {
  conflict_politics_society: "Conflits, Politiques & Sociétés",
  arts_culture: "Arts et Culture",
  science_infrastructure: "Sciences, Inventions & Infrastructures",
};

// One pool file per top category, not one combined data/candidates.json —
// split once the pool reached 853 items, ready for the drafting pass to
// start (a single reader/writer script never needed the split before now;
// see AGENTS.md-adjacent project memory for why the drafting step is the
// next phase). Keyed by the same TOP_CATEGORIES keys, not the French labels,
// so filenames stay stable if a label is ever reworded.
const CATEGORY_FILES = Object.fromEntries(
  Object.keys(TOP_CATEGORIES).map((key) => [key, path.join(ROOT, "data", `candidates-${key}.json`)])
);

const SUBCATEGORIES = {
  war: { top: "conflict_politics_society", qids: ["Q178561" /* battle */, "Q188055" /* siege */] },
  rupture: {
    top: "conflict_politics_society",
    qids: ["Q45382" /* coup d'état */, "Q3882219" /* assassination */, "Q10931" /* revolution */],
  },
  treaty: { top: "conflict_politics_society", qids: ["Q131569" /* treaty */] },
  beliefs: { top: "conflict_politics_society", qids: ["Q51645" /* ecumenical council */] },
  economy: { top: "conflict_politics_society", qids: ["Q273182" /* gold rush */, "Q1020018" /* stock market crash */] },
  // "major_artist" isn't class-based like the others — see fetchPersonCandidates.
  civil_engineering: { top: "science_infrastructure", qids: ["Q4989906" /* monument */] },
  natural_hazard: {
    top: "science_infrastructure",
    qids: ["Q7944" /* earthquake */, "Q7692360" /* volcanic eruption */, "Q8070" /* tsunami */],
  },
  archaeological_site: {
    top: "science_infrastructure",
    // Dated by creation (P571), not discovery (P575): the historical fact is
    // usually the site itself (when it was built), not when modern
    // archaeologists happened to find it. Exception — cases where the
    // discovery event is itself the historic moment (e.g. the Rosetta Stone,
    // found 1799, unlocking hieroglyph decipherment) — are out of scope for
    // this class query and handled as HAND_CURATED instead.
    qids: ["Q839954" /* archaeological site */],
  },
  // "pioneer" isn't class-based like the others — see fetchPersonCandidates.
  world_gathering: { top: "arts_culture", qids: ["Q172754" /* world's fair */] },
};

const TYPE_TO_SUBCATEGORY = new Map(
  Object.entries(SUBCATEGORIES).flatMap(([sub, { qids }]) => qids.map((qid) => [qid, sub]))
);

// A direct P625 on the event item itself turned out to be the wrong bar:
// most WikiProject communities only ever geotag the *location* (P276) of an
// event, never the event node — verified empirically across ~39 candidate
// classes with sitelinks>=25: requiring direct P625 alone left treaty at 31
// usable items and revolution at 4, while falling back to the location's own
// coordinate raised them to 107 and 17. P131 (administrative entity) was
// tried too but dropped: it added almost nothing beyond P276, and its one
// real hit (Oregon Treaty -> Washington, D.C.) reproduced the exact
// "negotiating capital, not the actual place" failure already documented
// below for territorial transfers.
//
// The location fallback still needs a floor: P276 for a diffuse, multi-city
// event (a revolution, a coup, a protest movement) is very often set to the
// country or empire as a whole (French Revolution -> France, Russian
// Revolution of 1905 -> Russia, Young Turk Revolution -> Ottoman Empire) —
// checked directly against real data, not assumed. A country-sized pin is
// useless for a coordinate-guessing game, so any location typed as one of
// these broad classes is rejected and treated as if no fallback existed.
const COARSE_LOCATION_TYPES = [
  "Q6256" /* country */,
  "Q3624078" /* sovereign state */,
  "Q3024240" /* historical country */,
  "Q48349" /* empire */,
  "Q1250464" /* realm */,
  "Q3336843" /* constituent country of the United Kingdom */,
];

const EASY_PAGEVIEWS = 50_000; // monthly average, English Wikipedia
const MEDIUM_PAGEVIEWS = 5_000;
const HARD_PAGEVIEWS_FLOOR = 1_000; // below this: rejected as too obscure

// A high pageview count only measures current attention, not whether a
// political_rupture event is "settled" enough to write about neutrally (see
// the guide's "lean toward settled, non-controversial events" rule) — a
// coup or assassination from the last few years can still be legally or
// politically live. Flagged, not dropped: still worth having in the pool,
// just never drafted without an explicit human look first.
const RECENT_SENSITIVE_YEARS = 5;

// Wikidata's coordinate for a treaty/purchase often defaults to the
// negotiating capital, not a point connected to the actual story — and for
// a territorial sale, the territory itself is usually far too large to pin
// (see the Alaska Purchase case: Wikidata pointed at Washington D.C., but
// the game needed the Sitka transfer ceremony instead, found only by
// searching the full article). Catching that by re-investigating every
// candidate by hand doesn't scale, so this is a cheap keyword pre-filter at
// sourcing time instead: flag it here, once, before any drafting effort is
// spent on it.
const TERRITORIAL_TRANSFER_RE = /purchase|cession|ceded|annexation/i;

// Trailing-12-months pageviews cannot separate "enduringly historically
// significant" from "currently trending in the news cycle" for anything
// younger than this — for a one-month-old event, the entire measurement
// window IS the initial spike. Rejected outright (not flagged), across every
// category, regardless of how uncontroversial the topic is: it's not that
// recent events are banned, it's that this fame signal isn't trustworthy yet
// for them. Re-run the script after enough time has passed and a genuinely
// major recent event will re-qualify once its pageviews have settled.
const MIN_EVENT_AGE_YEARS = 2;

// world_gathering is structurally different from every other subcategory: a
// battle/treaty/earthquake is inherently "already history," so its pageviews
// can only reflect historical/educational interest — but a festival can be a
// living, currently-running institution (Coachella, Tomorrowland, Burning
// Man), and high pageviews there just as often means "popular right now" as
// "historically significant." No zero-token signal distinguishes those two
// cleanly, so age is used as a blunt but effective proxy: 50 years excludes
// current pop culture mechanically, without needing a human veto on every
// candidate. Doesn't fully solve it (Glastonbury clears 50 years without
// being especially historic) but removes the worst, high-volume failure mode.
const SUBCATEGORY_MIN_AGE_YEARS = { world_gathering: 50 };

function parseArgs(argv) {
  const args = { limit: 150, minSitelinks: 25, subcategory: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--limit") args.limit = Number(argv[++i]);
    if (argv[i] === "--min-sitelinks") args.minSitelinks = Number(argv[++i]);
    // Restricts which subcategory the --limit budget is spent scoring this
    // run (pageviews + summary — the expensive network step), so the pool
    // can be grown one subcategory at a time instead of always splitting
    // --limit across all of them via the round-robin batch. Does NOT change
    // what fetchCandidateList/fetchPersonCandidates fetch — every subcategory
    // is still queried every run, this only filters what gets scored.
    if (argv[i] === "--subcategory") args.subcategory = argv[++i];
  }
  return args;
}

function loadExistingCandidates() {
  const all = [];
  for (const filePath of Object.values(CATEGORY_FILES)) {
    if (existsSync(filePath)) all.push(...JSON.parse(readFileSync(filePath, "utf8")));
  }
  return all;
}

// Candidates removed from candidates.json by hand (bad coordinate, not a
// real point, duplicate topic...) have no other record of that decision —
// the next run sees them as "new" again and silently re-fetches them,
// undoing the fix. "Way of Saint James" and "Arab Spring" both came back
// this way after being manually removed earlier. This file is the permanent
// memory of that decision: anything listed here is skipped forever, by
// wikidataId, regardless of how many times the underlying query would
// otherwise re-surface it.
function loadRejectedIds() {
  if (!existsSync(REJECTED_PATH)) return new Set();
  const rejected = JSON.parse(readFileSync(REJECTED_PATH, "utf8"));
  return new Set(rejected.map((r) => r.wikidataId));
}

function loadUsedWikipediaTitles() {
  // Only excludes topics already drafted into the ACTIVE new pool — the
  // legacy corpus is explicitly allowed to overlap (see event-writing-guide-v2.md).
  if (!existsSync(ACTIVE_EVENTS_PATH)) return new Set();
  const content = readFileSync(ACTIVE_EVENTS_PATH, "utf8");
  const titles = [...content.matchAll(/wikipediaTitle:\s*"([^"]+)"/g)].map((m) => m[1]);
  return new Set(titles);
}

const DATE_CHAIN = `
      # Prefer P580 (start time) over P585 (point in time): multi-day events
      # (protests, sieges, revolutions) often carry a P585 that's stale or
      # simply wrong (e.g. Euromaidan's P585 says 2010, four years off from
      # its own P580/P582 range of 2013-2014) while P580 is accurate. Single-
      # day events rarely have P580 at all, so they fall through to P585.
      OPTIONAL { ?item wdt:P580 ?date }
      OPTIONAL { ?item wdt:P585 ?pointDate . BIND(COALESCE(?date, ?pointDate) AS ?date) }
      # P571 (inception/construction date) before P575 (discovery/rediscovery
      # date): for an archaeological site, the historical fact worth telling
      # is normally when it was built, not when modern archaeologists
      # happened to find it. Landmarks (monuments, buildings) also use P571
      # as their only date property, so this doubles as their fallback too.
      OPTIONAL { ?item wdt:P571 ?inceptionDate . BIND(COALESCE(?date, ?inceptionDate) AS ?date) }
      # Falls back to discovery date only when no creation date is known at
      # all (common for prehistoric/undated sites) — better than no date.
      OPTIONAL { ?item wdt:P575 ?discoveryDate . BIND(COALESCE(?date, ?discoveryDate) AS ?date) }
`;

// QLever's Wikidata mirror — see the file header for why this replaced the
// official query.wikidata.org endpoint. Needs explicit PREFIX declarations
// (no implicit wd:/wdt:) and has neither wikibase:sitelinks nor SERVICE
// wikibase:label; both are worked around per-query below.
const QLEVER_ENDPOINT = "https://qlever.cs.uni-freiburg.de/api/wikidata";
const SPARQL_PREFIXES = `
  PREFIX wd: <http://www.wikidata.org/entity/>
  PREFIX wdt: <http://www.wikidata.org/prop/direct/>
  PREFIX schema: <http://schema.org/>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
`;

async function runSparql(query) {
  const url = new URL(QLEVER_ENDPOINT);
  url.searchParams.set("query", SPARQL_PREFIXES + query);
  const res = await fetchWithRetry(url, { Accept: "application/sparql-results+json", "User-Agent": USER_AGENT });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`QLever query failed: ${res.status} ${body.slice(0, 300)}`);
  }
  return res.json();
}

// Funnel instrumentation only — never changes which candidates survive.
// Every counter here is purely additive reporting so a future "why is
// {subcategory} thin?" question can be answered by reading a log instead of
// re-deriving it by hand from data/candidates.json.
function bump(map, key, field) {
  if (!map[key]) map[key] = {};
  map[key][field] = (map[key][field] ?? 0) + 1;
}

async function fetchCandidateList(minSitelinks) {
  const directQids = [...TYPE_TO_SUBCATEGORY.keys()].map((qid) => `wd:${qid}`).join(" ");
  const coarseTypes = COARSE_LOCATION_TYPES.map((qid) => `wd:${qid}`).join(" ");

  // Sitelinks isn't a real property on QLever's mirror — it's computed here
  // as COUNT(DISTINCT ?wiki), the number of different language Wikipedias
  // linking to the item, which is exactly what wikibase:sitelinks meant on
  // the official endpoint. Done as an inner subquery with its own GROUP
  // BY/HAVING so the (comparatively expensive) aggregation runs over a
  // pre-filtered set, before the outer query joins back for label/date/coord
  // — verified against known results (Stalingrad, Waterloo, Pearl Harbor...
  // came back in the same order with the same counts as the official
  // endpoint gave). No longer requires P625 here (see COARSE_LOCATION_TYPES
  // above) — a coordinate is resolved afterward, direct or via fallback, not
  // required just to be counted as notable.
  const directQuery = `
    SELECT ?item ?itemLabel ?itemDescription ?type ?directCoord ?locCoord ?locCoarse ?sitelinks ?article ?date WHERE {
      {
        SELECT ?item ?type (COUNT(DISTINCT ?wiki) AS ?sitelinks) WHERE {
          VALUES ?type { ${directQids} }
          ?item wdt:P31 ?type .
          ?art0 schema:about ?item ; schema:isPartOf ?wiki .
        }
        GROUP BY ?item ?type
        HAVING (COUNT(DISTINCT ?wiki) >= ${minSitelinks})
      }
      OPTIONAL { ?item wdt:P625 ?directCoord }
      OPTIONAL {
        ?item wdt:P276 ?loc . ?loc wdt:P625 ?locCoord .
        BIND(IF(EXISTS { ?loc wdt:P31 ?ct . VALUES ?ct { ${coarseTypes} } }, 1, 0) AS ?locCoarse)
      }
      ?item rdfs:label ?itemLabel . FILTER(LANG(?itemLabel) = "en")
      OPTIONAL { ?item schema:description ?itemDescription . FILTER(LANG(?itemDescription) = "en") }
${DATE_CHAIN}
      ?article schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> .
    }
    ORDER BY DESC(?sitelinks)
    LIMIT 2000
  `;
  // NB this LIMIT 2000 is shared across every class-based subcategory in one
  // combined query, ordered by sitelinks — a subcategory whose items simply
  // have fewer high-sitelinks members than "war" (battle/siege routinely
  // gets translated into 25+ languages, see the file header) can be crowded
  // out of the top 2000 entirely before this function ever sees it. The
  // `funnel.raw` counts logged below only cover what made it past this
  // LIMIT; a subcategory reported thin here may really be thin, or may just
  // be losing to battles at the SPARQL level. Not fixed yet — flagging it so
  // it's not mistaken for "Wikidata doesn't have enough treaties."

  const data = await runSparql(directQuery);

  // Group rows by item first: P276 is multi-valued, so an item with several
  // locations (one precise, one a whole country) comes back as multiple
  // rows, and the best one has to be picked across all of them rather than
  // assumed to be the first row seen.
  const byItem = new Map();
  for (const row of data.results.bindings) {
    const wikidataId = row.item.value.split("/").pop();
    if (!byItem.has(wikidataId)) byItem.set(wikidataId, []);
    byItem.get(wikidataId).push(row);
  }

  const funnel = {}; // subcategory -> { raw, noCoord }
  const out = [];
  for (const [wikidataId, rows] of byItem) {
    const first = rows[0];
    const title = decodeURIComponent(first.article.value.split("/").pop());
    const typeQid = first.type.value.split("/").pop();
    const subcategory = TYPE_TO_SUBCATEGORY.get(typeQid) ?? "other";
    bump(funnel, subcategory, "raw");

    // Direct P625 wins whenever it exists; otherwise fall back to the first
    // location coordinate that isn't a country/empire-scale place (see
    // COARSE_LOCATION_TYPES for why that floor exists).
    let coord = rows.find((r) => r.directCoord?.value)?.directCoord?.value;
    let coordSource = coord ? "direct" : null;
    if (!coord) {
      const viaLocation = rows.find((r) => r.locCoord?.value && r.locCoarse?.value !== "1");
      coord = viaLocation?.locCoord?.value;
      coordSource = coord ? "location" : null;
    }
    if (!coord) {
      bump(funnel, subcategory, "noCoord");
      continue;
    }

    out.push({
      wikidataId,
      label: first.itemLabel?.value ?? title.replace(/_/g, " "),
      description: first.itemDescription?.value ?? null,
      subcategory,
      category: TOP_CATEGORIES[SUBCATEGORIES[subcategory]?.top] ?? "other",
      wikipediaTitle: title,
      coord, // "Point(lng lat)"
      coordSource, // "direct" | "location" — location-derived candidates are worth a second look before drafting
      sitelinks: Number(first.sitelinks.value),
      date: first.date?.value ?? null,
    });
  }
  return { candidates: out, funnel };
}

function parsePoint(pointLiteral) {
  // QLever's wktLiteral is "POINT(...)" (uppercase); the official Wikidata
  // endpoint used "Point(...)". Case-insensitive so either works.
  const m = pointLiteral.match(/point\(([-\d.]+) ([-\d.]+)\)/i);
  if (!m) return null;
  return { lng: Number(m[1]), lat: Number(m[2]) };
}

// "major_artist" doesn't fit the instance-of-class-with-coordinate shape
// every other subcategory uses — the subject is a person, dated and located
// by their birth (P569/P19), not by P31. An unrestricted query over Q5
// ("human") timed out on the public endpoint; restricting to a handful of
// creative occupations up front keeps the candidate set small enough to
// query directly, and was verified against real data (Mozart, Beethoven,
// Da Vinci, Michael Jackson, Chaplin all resolved correctly and fast).
// "singer" and "actor" were both dropped: neither has reliable historical
// weight on its own (singer skewed toward contemporary pop stars; actor has
// no equivalent of "wrote a canonical novel" or "composed a symphony" — being
// in films doesn't imply lasting cultural significance the way authorship of
// a work does). Verified zero volume loss on the existing pool: every current
// major_artist entry already qualifies via composer/painter/writer too.
const ARTIST_OCCUPATIONS = ["Q36834" /* composer */, "Q1028181" /* painter */, "Q36180" /* writer */];

// A second occupation that means the person's real-world fame is NOT as an
// artist, even though they also hold one of the ARTIST_OCCUPATIONS above —
// verified against two real cases in the pool: Bhumibol Adulyadej (composer
// + monarch, world-famous as King of Thailand, not for his jazz) and Pelé
// (actor + footballer, world-famous as a footballer). A blanket "excludes
// anyone with ANY P39 position held" was tried first and rejected: it also
// excluded Bach, Vivaldi, Handel, Haydn, Dvořák, Puccini and Verdi, whose own
// P39 is a legitimate court/church music appointment (Kapellmeister etc.),
// not a second unrelated career.
const NON_ARTIST_FAME_OCCUPATIONS = [
  "Q116" /* monarch */,
  "Q82955" /* politician */,
  "Q2066131" /* athlete */,
  "Q937857" /* association football player */,
  // Dropping "singer" from ARTIST_OCCUPATIONS wasn't enough on its own:
  // Britney Spears still qualified via a secondary "actress" tag (minor
  // acting credits) despite being famous as a singer, not an actress. A
  // singer tag disqualifies regardless of what else the person also holds.
  "Q177220" /* singer */,
];

// "pioneer": scientists/inventors and explorers merged into one subcategory
// (both are, structurally, "someone who was first" — a discovery or a
// territory) — same birth-date/birthplace shape as major_artist. Unlike
// major_athlete, fame here reliably tracks real historical impact: someone
// doesn't become known as a "physicist" or "explorer" without a specific,
// checkable discovery/voyage behind it, the way an athlete can be famous for
// sustained excellence with no single distinguishing achievement. Verified
// with real queries: physicist returned Da Vinci, Galileo, Edison, Tesla,
// Copernicus, Gauss, Planck; explorer returned Columbus, Magellan, Cook,
// Vasco da Gama, Amundsen — both lists genuinely historical, not just famous.
const PIONEER_OCCUPATIONS = [
  "Q169470" /* physicist */,
  "Q593644" /* chemist */,
  "Q170790" /* mathematician */,
  "Q205375" /* inventor */,
  "Q11063" /* astronomer */,
  "Q11900058" /* explorer */,
];

// Verified cases needing exclusion: Angela Merkel (physicist by training,
// world-famous as German chancellor) and Theodore Roosevelt/Ulysses S. Grant
// (explorer-tagged for minor expeditions, world-famous as US presidents).
const NON_PIONEER_FAME_OCCUPATIONS = ["Q116" /* monarch */, "Q82955" /* politician */];

// One query per occupation, not a single VALUES-list query across all of
// them: "writer" and "actor" alone are large enough classes that combining
// them with the others made this query 502 (too expensive) on the public
// endpoint, whereas a single occupation (verified with "composer") ran fast.
// More round trips, but each one stays cheap. Shared by major_artist and
// pioneer — same shape (person dated/located by birth, not P31), just a
// different occupation list, subcategory and exclusion list.
async function fetchPersonCandidates(occupations, excludedOccupations, subcategory, category, minSitelinks) {
  const out = [];
  const seen = new Set();
  for (const occ of occupations) {
    const query = `
      SELECT ?item ?itemLabel ?itemDescription ?coord ?sitelinks ?article ?birthDate WHERE {
        {
          SELECT ?item (COUNT(DISTINCT ?wiki) AS ?sitelinks) WHERE {
            ?item wdt:P106 wd:${occ} .
            FILTER NOT EXISTS {
              ?item wdt:P106 ?otherOcc .
              VALUES ?otherOcc { ${excludedOccupations.map((q) => `wd:${q}`).join(" ")} }
            }
            ?art0 schema:about ?item ; schema:isPartOf ?wiki .
          }
          GROUP BY ?item
          HAVING (COUNT(DISTINCT ?wiki) >= ${minSitelinks})
        }
        ?item wdt:P569 ?birthDate ;
              wdt:P19 ?place .
        ?place wdt:P625 ?coord .
        ?item rdfs:label ?itemLabel . FILTER(LANG(?itemLabel) = "en")
        OPTIONAL { ?item schema:description ?itemDescription . FILTER(LANG(?itemDescription) = "en") }
        ?article schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> .
      }
      ORDER BY DESC(?sitelinks)
      LIMIT 300
    `;
    const data = await runSparql(query);

    for (const row of data.results.bindings) {
      const wikidataId = row.item.value.split("/").pop();
      if (seen.has(wikidataId)) continue;
      seen.add(wikidataId);
      const title = decodeURIComponent(row.article.value.split("/").pop());
      out.push({
        wikidataId,
        label: row.itemLabel?.value ?? title.replace(/_/g, " "),
        description: row.itemDescription?.value ?? null,
        subcategory,
        category,
        wikipediaTitle: title,
        coord: row.coord.value,
        sitelinks: Number(row.sitelinks.value),
        date: row.birthDate.value,
      });
    }
    await sleep(150); // one query per occupation now — stay polite between them
  }
  return out;
}

// A handful of world-famous cultural traditions don't share one clean
// Wikidata class the way battles or treaties do (Oktoberfest is a "folk
// festival," Venice's Carnival is a "carnival," each a near-singleton type
// with no other comparably famous member) — verified individually instead
// of queried generically. Extend by hand as more are checked; see
// docs/event-writing-guide-v2.md.
const HAND_CURATED = [
  {
    wikidataId: "Q102400",
    label: "Oktoberfest",
    description: "world's largest beer festival, held annually in Munich",
    subcategory: "world_gathering",
    category: TOP_CATEGORIES.arts_culture,
    wikipediaTitle: "Oktoberfest",
    coord: "Point(11.549167 48.131389)",
    sitelinks: 100, // placeholder, comfortably above any minSitelinks used
    date: "1810-10-17T00:00:00Z",
  },
  {
    wikidataId: "Q42369",
    label: "Cannes Film Festival",
    description: "annual film festival held in Cannes, France",
    subcategory: "world_gathering",
    category: TOP_CATEGORIES.arts_culture,
    wikipediaTitle: "Cannes Film Festival",
    coord: "Point(7.018055555555556 43.55083333333333)",
    sitelinks: 100,
    date: "1946-01-01T00:00:00Z",
  },
  {
    wikidataId: "Q164815",
    label: "Woodstock",
    description: "1969 music festival in New York, United States",
    subcategory: "world_gathering",
    category: TOP_CATEGORIES.arts_culture,
    wikipediaTitle: "Woodstock",
    coord: "Point(-74.88 41.7)",
    sitelinks: 100,
    date: "1969-08-15T00:00:00Z",
  },
];

// Retries on 429/5xx with backoff, so a rate-limited burst gets treated as
// "try again," not silently misread as "this candidate has no data" and
// dropped — that conflation is exactly what made an earlier full run look
// like almost everything was too obscure, when the API was just throttling.
// Node's fetch has no default timeout — a connection that stalls (accepted
// but never responds) hangs forever instead of ever reaching the retry logic
// below. This cost real wall-clock time during testing: a run sat on
// "querying Wikidata..." for 8+ minutes with nothing to show for it. Every
// attempt gets its own AbortController-based deadline so a stall fails fast
// and actually gets retried, instead of blocking indefinitely.
async function fetchWithRetry(url, headers, maxAttempts = 4, timeoutMs = 60_000) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let res;
    try {
      res = await fetch(url, { headers, signal: controller.signal });
    } catch (err) {
      if (attempt === maxAttempts) throw new Error(`request timed out/failed after ${maxAttempts} attempts: ${err.message}`);
      await sleep(500 * 2 ** attempt);
      continue;
    } finally {
      clearTimeout(timer);
    }
    if (res.ok) return res;
    if (res.status === 404) return res; // genuinely no data, not a throttle
    if (attempt === maxAttempts) return res;
    const retryAfter = Number(res.headers.get("retry-after"));
    const backoffMs = Number.isFinite(retryAfter) ? retryAfter * 1000 : 500 * 2 ** attempt;
    await sleep(backoffMs);
  }
}

async function fetchAvgMonthlyPageviews(title) {
  // Trailing ~12 full months, English Wikipedia, human traffic only.
  const end = new Date();
  end.setUTCDate(1); // last full month, not the current partial one
  const endStr = end.toISOString().slice(0, 7).replace("-", "") + "0100";
  const start = new Date(end);
  start.setUTCMonth(start.getUTCMonth() - 12);
  const startStr = start.toISOString().slice(0, 7).replace("-", "") + "0100";

  const url =
    `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/` +
    `${encodeURIComponent(title)}/monthly/${startStr}/${endStr}`;
  const res = await fetchWithRetry(url, { "User-Agent": USER_AGENT });
  if (!res.ok) return null; // no data (article too new/renamed) or throttled past retries
  const data = await res.json();
  const items = data.items ?? [];
  if (items.length === 0) return null;
  return Math.round(items.reduce((sum, i) => sum + i.views, 0) / items.length);
}

// For major_artist/pioneer, pageviews measure fame of the PERSON, not of the
// specific fact being tested (their birthplace) — a globally famous singer's
// birthplace is still obscure trivia to almost everyone (verified case:
// Britney Spears scored "easy" on pageviews, but nobody actually knows she
// was born in Kentwood, Louisiana). Never "easy" for these two.
const PERSON_SUBCATEGORIES = new Set(["major_artist", "pioneer"]);

function difficultyFromPageviews(avgViews, subcategory) {
  if (avgViews >= EASY_PAGEVIEWS) return PERSON_SUBCATEGORIES.has(subcategory) ? "medium" : "easy";
  if (avgViews >= MEDIUM_PAGEVIEWS) return "medium";
  if (avgViews >= HARD_PAGEVIEWS_FLOOR) return "hard";
  return null; // too obscure, reject
}

// Fetches the plain-text lead-paragraph summary — the raw factual material
// the drafting pass will turn into a clue. Fetched here, for every candidate
// that survives the difficulty filter, so data/candidates.json is always a
// complete, ready-to-draft dataset with no separate "go fetch the text for
// whichever ones you pick" step to remember or get out of sync.
async function fetchSummary(title) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetchWithRetry(url, { "User-Agent": USER_AGENT, Accept: "application/json" });
  if (!res.ok) return null;
  const data = await res.json();
  return data.extract ?? null;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Round-robins across SUBCATEGORIES — war, coup/revolution, treaty, religion,
// economy, archaeology, major_artist, monument, natural hazard, world
// gathering, pioneer, each its own queue — rather than the wider top
// categories. Balancing only 3-4 wide buckets still let one dominate a
// batch (a run of 10 could be "war, war, rupture, war, war,
// natural_hazard..." because "conflict" alone covered battle AND siege with
// far more Wikidata coverage than everything else combined). Flat round-robin
// over the fine subcategories caps every distinct shape of story at roughly
// the same share.
function buildBalancedBatch(candidates, limit) {
  const queues = new Map();
  for (const c of candidates) {
    if (!queues.has(c.subcategory)) queues.set(c.subcategory, []);
    queues.get(c.subcategory).push(c);
  }
  const batch = [];
  let tookAny = true;
  while (batch.length < limit && tookAny) {
    tookAny = false;
    for (const queue of queues.values()) {
      if (batch.length >= limit) break;
      const next = queue.shift();
      if (next) {
        batch.push(next);
        tookAny = true;
      }
    }
  }
  return batch;
}

async function main() {
  const { limit, minSitelinks, subcategory } = parseArgs(process.argv.slice(2));
  const existing = loadExistingCandidates();
  const existingById = new Map(existing.map((c) => [c.wikidataId, c]));
  const usedTitles = loadUsedWikipediaTitles();
  const rejectedIds = loadRejectedIds();

  console.log(`fetch-candidates: querying Wikidata (min sitelinks ${minSitelinks})...`);
  // Sequential, not parallel: two simultaneous queries against the same
  // public endpoint is a plausible contributor to the 429 hit during testing.
  const { candidates: classBased, funnel: sourceFunnel } = await fetchCandidateList(minSitelinks);
  const personMinSitelinks = Math.max(minSitelinks, 80); // birthplace-of-a-person needs a much higher bar than an event class to stay "grand public"; 80 is the threshold verified fast+working per-occupation
  const artists = await fetchPersonCandidates(
    ARTIST_OCCUPATIONS,
    NON_ARTIST_FAME_OCCUPATIONS,
    "major_artist",
    TOP_CATEGORIES.arts_culture,
    personMinSitelinks
  );
  const pioneers = await fetchPersonCandidates(
    PIONEER_OCCUPATIONS,
    NON_PIONEER_FAME_OCCUPATIONS,
    "pioneer",
    TOP_CATEGORIES.science_infrastructure,
    personMinSitelinks
  );
  // major_athlete was tried as an automated occupation-based query (like
  // major_artist) and abandoned: unlike a battle or a treaty, an athlete's
  // fame doesn't reliably correlate with historical/cultural impact — Steffi
  // Graf clears any notability or retirement-age bar just as easily as
  // Jesse Owens (1936, defying Nazi racial ideology) or Muhammad Ali (civil
  // rights), with no zero-token signal to tell "very accomplished" from
  // "historically significant" apart. Handled as HAND_CURATED one-offs
  // instead, each verified individually — see docs/event-writing-guide-v2.md.
  const fetched = [...classBased, ...artists, ...pioneers, ...HAND_CURATED];
  console.log(
    `fetch-candidates: ${fetched.length} raw candidates from Wikidata ` +
      `(${classBased.length} class-based, ${artists.length} artists, ${pioneers.length} pioneers, ${HAND_CURATED.length} hand-curated).`
  );

  const toScore = fetched.filter(
    (c) => !existingById.has(c.wikidataId) && !usedTitles.has(c.wikipediaTitle) && !rejectedIds.has(c.wikidataId)
  );

  const validSubcategories = new Set([...Object.keys(SUBCATEGORIES), "major_artist", "pioneer"]);
  if (subcategory && !validSubcategories.has(subcategory)) {
    throw new Error(`--subcategory "${subcategory}" is not a known subcategory (${[...validSubcategories].join(", ")})`);
  }
  const toScoreForBatch = subcategory ? toScore.filter((c) => c.subcategory === subcategory) : toScore;
  const batch = buildBalancedBatch(toScoreForBatch, limit);
  console.log(
    `fetch-candidates: ${toScore.length} new/unscored` +
      (subcategory ? ` (${toScoreForBatch.length} in --subcategory ${subcategory})` : "") +
      `, scoring pageviews for ${batch.length} of them (--limit ${limit})...`
  );

  // Rest of the funnel: how many fetched candidates were already accounted
  // for (in the pool, drafted, or manually rejected) vs. genuinely new, and
  // of the new ones, how many this run's --limit left unscored for next
  // time. Neither bucket is a "loss" — just visibility into where the
  // --limit budget goes, per subcategory.
  for (const c of fetched) {
    if (existingById.has(c.wikidataId) || usedTitles.has(c.wikipediaTitle) || rejectedIds.has(c.wikidataId)) {
      bump(sourceFunnel, c.subcategory, "alreadyKnown");
    }
  }
  const batchIds = new Set(batch.map((c) => c.wikidataId));
  for (const c of toScore) bump(sourceFunnel, c.subcategory, batchIds.has(c.wikidataId) ? "queuedThisRun" : "deferredNextRun");

  const scored = [];
  const currentYear = new Date().getUTCFullYear();
  for (const [i, c] of batch.entries()) {
    const point = parsePoint(c.coord);
    if (!point) {
      bump(sourceFunnel, c.subcategory, "droppedNoParsablePoint");
      continue;
    }
    // Wikidata dates use astronomical year numbering (year 0 exists: 1 BC =
    // 0, 2 BC = -1, 44 BC = -43) — off by one from how everyone actually
    // says historical BC years ("44 BC", not "43 BC"). Converted here to the
    // "historical" convention the game displays (44 BC stored as -44) by
    // shifting every non-positive astronomical year down by one.
    let year = c.date ? Number(c.date.slice(0, c.date.startsWith("-") ? 5 : 4)) : null;
    if (year != null && year <= 0) year -= 1;
    if (year == null) {
      bump(sourceFunnel, c.subcategory, "droppedNoDate");
      continue; // no usable date on Wikidata — needed for the chronological reorder round
    }
    const minAge = SUBCATEGORY_MIN_AGE_YEARS[c.subcategory] ?? MIN_EVENT_AGE_YEARS;
    if (currentYear - year < minAge) {
      bump(sourceFunnel, c.subcategory, "droppedTooRecent");
      continue; // too recent to trust the fame signal
    }

    const avgMonthlyPageviews = await fetchAvgMonthlyPageviews(c.wikipediaTitle);
    if (avgMonthlyPageviews == null) {
      bump(sourceFunnel, c.subcategory, "droppedNoPageviewData");
      continue;
    }
    const difficulty = difficultyFromPageviews(avgMonthlyPageviews, c.subcategory);
    if (!difficulty) {
      bump(sourceFunnel, c.subcategory, "droppedTooObscure");
      continue; // too obscure — dropped, not stored
    }

    const summary = await fetchSummary(c.wikipediaTitle);
    if (!summary) {
      bump(sourceFunnel, c.subcategory, "droppedNoSummary");
      continue; // no usable text to draft from — dropped, not stored
    }
    bump(sourceFunnel, c.subcategory, "accepted");

    const reviewReasons = [];
    if (c.subcategory === "rupture" && year != null && currentYear - year < RECENT_SENSITIVE_YEARS) {
      reviewReasons.push("recent coup/assassination/revolution — verify settled/non-controversial before drafting");
    }
    if (c.subcategory === "treaty" && TERRITORIAL_TRANSFER_RE.test(c.label + " " + (c.description ?? ""))) {
      reviewReasons.push(
        "territorial transfer — the stored coordinate may be the negotiating capital, not a point connected to the story; check the full article for an actual handover/ceremony site (see event-writing-guide-v2.md)"
      );
    }
    if (c.coordSource === "location") {
      reviewReasons.push(
        "coordinate resolved from the event's location (P276), not a coordinate on the event itself — usually correct but worth a quick sanity check before drafting"
      );
    }
    const needsReview = reviewReasons.length > 0 ? reviewReasons.join("; ") : null;

    scored.push({
      wikidataId: c.wikidataId,
      label: c.label,
      description: c.description,
      summary,
      subcategory: c.subcategory,
      category: c.category,
      wikipediaTitle: c.wikipediaTitle,
      lat: point.lat,
      lng: point.lng,
      year,
      sitelinks: c.sitelinks,
      avgMonthlyPageviews,
      difficulty,
      needsReview,
    });

    if ((i + 1) % 20 === 0) console.log(`  ...scored ${i + 1}/${batch.length}`);
    await sleep(150); // two API calls per candidate now — stay polite to shared public APIs
  }

  const merged = [...existing, ...scored].sort((a, b) => b.avgMonthlyPageviews - a.avgMonthlyPageviews);
  mkdirSync(path.join(ROOT, "data"), { recursive: true });

  // Split across the per-category files, not one combined write — every
  // candidate's `category` must resolve to a known TOP_CATEGORIES label to
  // land somewhere; anything that doesn't (shouldn't happen — every
  // subcategory maps to a TOP_CATEGORIES entry, see SUBCATEGORIES/HAND_CURATED)
  // is never silently dropped, it's written to candidates-other.json instead
  // so a bug here is loud, not a quiet data loss.
  const labelToKey = new Map(Object.entries(TOP_CATEGORIES).map(([key, label]) => [label, key]));
  const byFile = new Map(Object.keys(TOP_CATEGORIES).map((key) => [key, []]));
  const uncategorized = [];
  for (const c of merged) {
    const key = labelToKey.get(c.category);
    if (key) byFile.get(key).push(c);
    else uncategorized.push(c);
  }
  for (const [key, list] of byFile) {
    writeFileSync(CATEGORY_FILES[key], JSON.stringify(list, null, 2) + "\n", "utf8");
  }
  if (uncategorized.length > 0) {
    const otherPath = path.join(ROOT, "data", "candidates-other.json");
    writeFileSync(otherPath, JSON.stringify(uncategorized, null, 2) + "\n", "utf8");
    console.log(`  ⚠ ${uncategorized.length} candidate(s) had an unrecognized category — see data/candidates-other.json`);
  }

  const byDifficulty = { easy: 0, medium: 0, hard: 0 };
  for (const c of merged) byDifficulty[c.difficulty]++;
  const bySubcategory = {};
  for (const c of merged) bySubcategory[c.subcategory] = (bySubcategory[c.subcategory] ?? 0) + 1;
  const byCategory = {};
  for (const c of merged) byCategory[c.category] = (byCategory[c.category] ?? 0) + 1;
  console.log(
    `fetch-candidates: wrote ${merged.length} total candidates across data/candidates-{${Object.keys(TOP_CATEGORIES).join(",")}}.json ` +
      `(${scored.length} new this run; ${toScore.length - batch.length} left unscored for next run).`
  );
  console.log(`  by difficulty: easy=${byDifficulty.easy} medium=${byDifficulty.medium} hard=${byDifficulty.hard}`);
  console.log(`  by subcategory: ${Object.entries(bySubcategory).map(([k, v]) => `${k}=${v}`).join(" ")}`);
  console.log(`  by top category: ${Object.entries(byCategory).map(([k, v]) => `${k}=${v}`).join(" ")}`);
  const flagged = merged.filter((c) => c.needsReview).length;
  if (flagged > 0) console.log(`  ⚠ ${flagged} candidate(s) flagged needsReview`);

  // Full funnel, per subcategory, for answering "where does this subcategory
  // lose items" without re-deriving it by hand. `raw`/`noCoord` only exist
  // for class-based subcategories (major_artist/pioneer require a
  // coordinate in the SPARQL query itself, so they never lose candidates at
  // that step — see fetchPersonCandidates). Read alongside the LIMIT 2000
  // caveat on fetchCandidateList: a class-based subcategory reported thin at
  // `raw` may be losing to "war" at the SPARQL level, not actually scarce.
  console.log("fetch-candidates: funnel by subcategory (this run):");
  console.table(sourceFunnel);
}

main().catch((err) => {
  console.error("fetch-candidates: failed —", err.message);
  process.exit(1);
});
