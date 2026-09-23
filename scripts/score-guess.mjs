#!/usr/bin/env node
// Part of the difficulty calibration protocol (docs/difficulty-calibration-protocol.md):
// scores a blind-test guess against the REAL scoring formula in
// src/lib/scoring.ts, instead of each calibration round reimplementing its
// own distance/points math ad hoc.
//
// Usage: node scripts/score-guess.mjs <realLat> <realLng> <guessLat> <guessLng>

import { locationPoints, MAX_LOCATION_POINTS } from "../src/lib/scoring.ts";

const [realLat, realLng, guessLat, guessLng] = process.argv.slice(2).map(Number);
if ([realLat, realLng, guessLat, guessLng].some((n) => Number.isNaN(n))) {
  console.error("Usage: node scripts/score-guess.mjs <realLat> <realLng> <guessLat> <guessLng>");
  process.exit(1);
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

const distance = haversineKm(realLat, realLng, guessLat, guessLng);
const points = locationPoints(distance);

console.log(`distance: ${distance.toFixed(0)} km`);
console.log(`points: ${points} / ${MAX_LOCATION_POINTS} (${((100 * points) / MAX_LOCATION_POINTS).toFixed(0)}%)`);
