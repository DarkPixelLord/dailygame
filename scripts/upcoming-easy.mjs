#!/usr/bin/env node
// Lists the easy clues of the next N packs that will actually be served, so
// rewrites can target what players see first. api/session serves "the first
// pack in data/daily-packs-plan.json with no already-served clue", so this
// reads the served ids from Supabase (read-only select on daily_packs) and
// replays that rule.
//
// Usage: node --env-file=.env.local scripts/upcoming-easy.mjs [packs=14] [out.json]
// Prints the FR clues numbered for the stripped-text gate, and writes
// {day, id, subcategory, lat, lng, clueEn, clueFr}[] to out.json if given.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { readPool } from "./lib/read-pool.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const [packCount = "14", outPath] = process.argv.slice(2);

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY;
if (!url || !key) {
  console.error("Missing Supabase env vars — run with: node --env-file=.env.local scripts/upcoming-easy.mjs");
  process.exit(1);
}

const { data, error } = await createClient(url, key).from("daily_packs").select("event_ids");
if (error) throw new Error(error.message);
const served = new Set(data.flatMap((r) => r.event_ids));

const plan = JSON.parse(readFileSync(path.join(ROOT, "data", "daily-packs-plan.json"), "utf8"));
const fresh = plan.packs.filter((p) => p.ids.every((id) => !served.has(id))).slice(0, Number(packCount));
const pool = readPool();

const rows = [];
fresh.forEach((pack, i) =>
  pack.ids.forEach((id) => {
    const e = pool.get(id);
    if (e?.difficulty === "easy") rows.push({ day: i + 1, id, subcategory: e.subcategory, lat: e.lat, lng: e.lng, clueEn: e.clueEn, clueFr: e.clueFr });
  })
);

console.log(`${served.size} served ids; next ${fresh.length} fresh packs hold ${rows.length} easy clues (day 1 = next unserved day).\n`);
rows.forEach((r, i) => console.log(`${i + 1}. ${r.clueFr}`));
if (outPath) writeFileSync(outPath, JSON.stringify(rows, null, 1));
