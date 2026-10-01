#!/usr/bin/env node
// Scores the two blind pin passes of the stripped-text gate (see "Easy
// localization gate" in .claude/skills/generate-clues/SKILL.md) against each
// clue's real lat/lng, with the game's own locationPoints().
//
// Usage: node scripts/score-pins.mjs pins.json
// pins.json: { "<event id>": [[latA, lngA] | null, [latB, lngB] | null], ... }
// (null = the pass answered "aucune", scored 0).
//
// An easy clue PASSES only if BOTH passes score >= 450/700 (roughly within
// 800 km): one lucky pass isn't enough, a split means the lever is fragile.

import { readFileSync } from "node:fs";
import { locationPoints } from "../src/lib/scoring.ts";
import { readPool } from "./lib/read-pool.mjs";

const EASY_THRESHOLD = 450;

function haversineKm([lat1, lon1], [lat2, lon2]) {
  const toRad = (d) => (d * Math.PI) / 180;
  const a = Math.sin(toRad(lat2 - lat1) / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(toRad(lon2 - lon1) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(a));
}

const pins = JSON.parse(readFileSync(process.argv[2], "utf8"));
const pool = readPool();
let failures = 0;
for (const [id, passes] of Object.entries(pins)) {
  const e = pool.get(id);
  if (!e) { console.log(`?? ${id} not in pool`); failures++; continue; }
  const points = passes.map((p) => (p ? locationPoints(haversineKm([e.lat, e.lng], p)) : 0));
  const pass = Math.min(...points) >= EASY_THRESHOLD;
  if (!pass) failures++;
  console.log(`${pass ? "PASS" : "FAIL"}  ${id.padEnd(36)} ${points.join(" / ")}`);
}
console.log(`\n${Object.keys(pins).length - failures} pass, ${failures} fail (threshold ${EASY_THRESHOLD} on both passes)`);
process.exit(failures ? 1 : 0);
