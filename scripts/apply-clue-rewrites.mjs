#!/usr/bin/env node
// Applies validated clue rewrites to the live pool files in place.
//
// Usage: node scripts/apply-clue-rewrites.mjs rewrites.json
// rewrites.json: { "<event id>": { "en": "...", "fr": "...", "lat"?: n, "lng"?: n } }
// Only `clue` (both languages) and optionally lat/lng change; run
// `npm run lint:events` afterward.

import { readFileSync, writeFileSync } from "node:fs";
import { EN_PATH, FR_PATH } from "./lib/read-pool.mjs";

const rewrites = JSON.parse(readFileSync(process.argv[2], "utf8"));
let en = readFileSync(EN_PATH, "utf8");
let fr = readFileSync(FR_PATH, "utf8");

function replaceField(text, start, key, value) {
  const end = text.indexOf("\n  },", start);
  const block = text.slice(start, end);
  const re = new RegExp(`(\\n    ${key}: )(?:"(?:[^"\\\\]|\\\\.)*"|-?[\\d.]+)`);
  if (!re.test(block)) throw new Error(`field "${key}" not found near offset ${start}`);
  const replaced = block.replace(re, (_, prefix) => prefix + (typeof value === "number" ? value : JSON.stringify(value)));
  return text.slice(0, start) + replaced + text.slice(end);
}

for (const [id, r] of Object.entries(rewrites)) {
  const s = en.indexOf(`    id: ${JSON.stringify(id)},`);
  if (s < 0) throw new Error("not in poc-events.ts: " + id);
  if (r.en) en = replaceField(en, s, "clue", r.en);
  if (r.lat !== undefined) en = replaceField(en, s, "lat", r.lat);
  if (r.lng !== undefined) en = replaceField(en, s, "lng", r.lng);
  const f = fr.indexOf(`\n  ${id}: {`);
  if (f < 0) throw new Error("not in poc-events-fr.ts: " + id);
  if (r.fr) fr = replaceField(fr, f, "clue", r.fr);
}

writeFileSync(EN_PATH, en);
writeFileSync(FR_PATH, fr);
console.log(`applied ${Object.keys(rewrites).length} rewrite(s) — now run npm run lint:events`);
