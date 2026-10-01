#!/usr/bin/env node
// Reports the ACTIVE v2 pool's difficulty mix, straight from the authored
// `difficulty` field in src/lib/poc-events.ts (not the candidate pool's
// pageview-based tag, which is a notability floor, not a difficulty — see
// "Writing to a target difficulty" in docs/event-writing-guide-v2.md).
//
// Usage: node scripts/pool-stats.mjs           (prints to stdout)
//        node scripts/pool-stats.mjs --write    (also refreshes docs/pool-stats.md)

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EN_PATH = path.join(__dirname, "..", "src", "lib", "poc-events.ts");
const OUT_PATH = path.join(__dirname, "..", "docs", "pool-stats.md");

const DIFFS = ["easy", "medium", "hard"];

function extractField(block, field) {
  const re = new RegExp(`${field}:\\s*\\n?\\s*"((?:\\\\.|[^"\\\\])*)"`);
  const m = block.match(re);
  return m ? m[1] : null;
}

function loadEntries() {
  const content = readFileSync(EN_PATH, "utf8");
  const idRe = /id:\s*"([a-zA-Z0-9_]+)"/g;
  const matches = [...content.matchAll(idRe)];
  const entries = [];
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : content.length;
    const block = content.slice(start, end);
    entries.push({
      id: matches[i][1],
      difficulty: extractField(block, "difficulty"),
    });
  }
  return entries;
}

// Pool-wide targets — see "Writing to a target difficulty" in
// docs/event-writing-guide-v2.md and docs/difficulty-calibration-protocol.md.
// Not an even three-way split: testing (blind-guess scoring against the real
// scoring.ts formula) showed the pool runs too hard overall, so easy is the
// deliberate majority target. Mirrors the 5-card pack composition exactly
// (3 easy / 1 medium / 1 hard, enforced by build-final-daily-packs.mjs), so
// writing at this ratio means no tier piles up unused or runs out first.
// Change both together if the pack mix ever changes.
const TARGET_SHARE = { easy: 0.6, medium: 0.2, hard: 0.2 };

function main() {
  const entries = loadEntries();
  const total = entries.length;
  const counts = { easy: 0, medium: 0, hard: 0, untagged: 0 };
  for (const e of entries) {
    if (DIFFS.includes(e.difficulty)) counts[e.difficulty]++;
    else counts.untagged++;
  }

  const pct = (n) => (total === 0 ? "0" : ((100 * n) / total).toFixed(0));

  const lines = [];
  lines.push(`# Pool stats`);
  lines.push("");
  lines.push(`Generated ${new Date().toISOString().slice(0, 10)} from \`src/lib/poc-events.ts\` (${total} entries). Regenerate with \`npm run stats:pool\` after any writing batch.`);
  lines.push("");
  lines.push(`**${total} clues total** — ${counts.easy} easy / ${counts.medium} medium / ${counts.hard} hard` + (counts.untagged ? ` / ${counts.untagged} untagged` : "") + ".");
  lines.push("");
  lines.push("| Difficulty | Count | Share | Target | Gap |");
  lines.push("| --- | --- | --- | --- | --- |");
  for (const d of DIFFS) {
    const targetCount = Math.round(total * TARGET_SHARE[d]);
    const gap = targetCount - counts[d];
    const gapLabel = gap > 0 ? `need ~${gap} more` : "at/above target";
    lines.push(`| ${d} | ${counts[d]} | ${pct(counts[d])}% | ${Math.round(TARGET_SHARE[d] * 100)}% | ${gapLabel} |`);
  }
  if (counts.untagged) {
    lines.push(`| untagged | ${counts.untagged} | ${pct(counts.untagged)}% | — | — |`);
  }
  lines.push("");
  const furthestBelow = DIFFS.map((d) => ({ d, gap: TARGET_SHARE[d] - (total === 0 ? 0 : counts[d] / total) })).sort((a, b) => b.gap - a.gap)[0];
  if (furthestBelow.gap > 0.02) {
    lines.push(`⚠️ **${furthestBelow.d}** is furthest below its target — next batch should run the ${furthestBelow.d} recipe (see "Writing to a target difficulty" in docs/event-writing-guide-v2.md).`);
  } else {
    lines.push(`Mix is within target range (60% easy / 20% medium / 20% hard).`);
  }
  lines.push("");
  lines.push(`Pack composition (5 cards): 3 easy / 1 medium / 1 hard — enforced by scripts/build-final-daily-packs.mjs.`);
  lines.push("");

  const report = lines.join("\n");
  console.log(report);

  if (process.argv.includes("--write")) {
    writeFileSync(OUT_PATH, report);
    console.error(`\nWrote ${OUT_PATH}`);
  }
}

main();
