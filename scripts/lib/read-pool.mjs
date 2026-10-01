// Minimal parser for src/lib/poc-events.ts + poc-events-fr.ts, shared by the
// clue-gate scripts. Not a TS parser: it relies on the files' fixed
// one-field-per-line layout (the same assumption scripts/lint-events.mjs makes).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
export const EN_PATH = path.join(ROOT, "src", "lib", "poc-events.ts");
export const FR_PATH = path.join(ROOT, "src", "lib", "poc-events-fr.ts");

export function field(block, key) {
  const i = block.indexOf("\n    " + key + ":");
  if (i < 0) return null;
  const rest = block.slice(i + key.length + 6).trimStart();
  if (rest.startsWith('"')) {
    let j = 1;
    while (j < rest.length && !(rest[j] === '"' && rest[j - 1] !== "\\")) j++;
    return JSON.parse(rest.slice(0, j + 1));
  }
  const num = rest.match(/^-?[\d.]+/);
  return num ? Number(num[0]) : null;
}

// Map id -> {difficulty, subcategory, name, lat, lng, clueEn, clueFr}.
export function readPool() {
  const en = readFileSync(EN_PATH, "utf8");
  const fr = readFileSync(FR_PATH, "utf8");
  const pool = new Map();
  for (const block of en.split("\n  {").slice(1)) {
    const id = field(block, "id");
    if (!id) continue;
    const f = fr.indexOf("\n  " + id + ": {");
    pool.set(id, {
      difficulty: field(block, "difficulty"),
      subcategory: field(block, "subcategory"),
      name: field(block, "name"),
      lat: field(block, "lat"),
      lng: field(block, "lng"),
      clueEn: field(block, "clue"),
      clueFr: f < 0 ? null : field(fr.slice(f, fr.indexOf("\n  },", f)), "clue"),
    });
  }
  return pool;
}
