// Builds a plan of balanced 5-item daily packs from the candidate pools.
// Soft-constraint greedy selection instead of a fixed 3-easy/1-medium/1-hard
// quota, because the easy tier is scarce pool-wide (see docs/event-writing-guide-v2.md
// discussion) — a hard quota caps total packs far below what the pool could
// otherwise support. Output is a *plan* (candidate ids grouped by day), not
// finished game content: clue/name/explanation still need to be drafted per
// pack through the normal writing process before merging into poc-events.ts.
//
// Usage: node scripts/build-daily-packs.mjs [--seed N] [--out path]

import { readFileSync, writeFileSync } from "node:fs";

const CATEGORY_FILES = {
  arts: "data/candidates-arts_culture.json",
  conflict: "data/candidates-conflict_politics_society.json",
  science: "data/candidates-science_infrastructure.json",
};

const DIFFICULTY_VALUE = { easy: 1, medium: 2, hard: 3 };
const MAX_HARD_PER_PACK = 2;
const MIN_PAIR_DISTANCE_KM = 1500; // soft target, relaxed when the pool can't support it
const GEO_CANDIDATE_SAMPLE = 6; // how many random candidates to compare per slot when optimizing dispersion

function parseArgs(argv) {
  const out = { seed: 42, out: "data/daily-packs-plan.json" };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--seed") out.seed = Number(argv[++i]);
    if (argv[i] === "--out") out.out = argv[++i];
  }
  return out;
}

// Small deterministic PRNG so runs are reproducible given the same seed.
function mulberry32(seed) {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function haversineKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function minDistanceToPack(item, pack) {
  if (pack.length === 0) return Infinity;
  return Math.min(...pack.map((p) => haversineKm(item, p)));
}

function loadUsedWikipediaTitles() {
  // Reuse the same detection the merged game files already carry:
  // any wikipediaTitle already present in src/lib/poc-events.ts must not be reselected.
  const src = readFileSync("src/lib/poc-events.ts", "utf8");
  const titles = new Set();
  const re = /wikipediaTitle:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) titles.add(m[1]);
  return titles;
}

function loadPool() {
  const used = loadUsedWikipediaTitles();
  const pool = [];
  for (const [cat, path] of Object.entries(CATEGORY_FILES)) {
    const items = JSON.parse(readFileSync(path, "utf8"));
    for (const it of items) {
      if (it.needsReview) continue;
      if (used.has(it.wikipediaTitle)) continue;
      if (!DIFFICULTY_VALUE[it.difficulty]) continue;
      pool.push({
        wikidataId: it.wikidataId,
        label: it.label,
        wikipediaTitle: it.wikipediaTitle,
        cat,
        subcategory: it.subcategory,
        difficulty: it.difficulty,
        diffValue: DIFFICULTY_VALUE[it.difficulty],
        lat: it.lat,
        lng: it.lng,
        year: it.year,
        sitelinks: it.sitelinks,
        avgMonthlyPageviews: it.avgMonthlyPageviews,
      });
    }
  }
  return pool;
}

const CATS = ["arts", "conflict", "science"];
const DIFFS = ["easy", "medium", "hard"];

function buildPacks(pool, rng) {
  const remaining = shuffle(pool, rng);
  // Bucket per (category, difficulty) so a "missing category" pull can go
  // straight to that category's stock instead of hoping a random sample
  // from a combined pool happens to contain it.
  const buckets = {};
  for (const cat of CATS) buckets[cat] = { easy: [], medium: [], hard: [] };
  for (const it of remaining) buckets[it.cat][it.difficulty].push(it);

  const totalUsable = pool.length;
  const totalPacks = Math.floor(totalUsable / 5);
  const totalEasy = CATS.reduce((s, c) => s + buckets[c].easy.length, 0);

  // Spread easy items evenly across the whole run of packs instead of
  // front-loading them, so the pool doesn't run dry in the first N days.
  const easySlotPacks = new Set();
  for (let i = 0; i < totalEasy && i < totalPacks; i++) {
    const idx = Math.floor((i * totalPacks) / totalEasy);
    easySlotPacks.add(idx);
  }

  const packs = [];
  const skippedNotes = [];

  function remainingCount(diffs) {
    let n = 0;
    for (const cat of CATS) for (const d of diffs) n += buckets[cat][d].length;
    return n;
  }

  // Pick the best available item across the given (cat, diff) combinations,
  // weighting the random sample by how much stock each combo still has so
  // no single difficulty tier gets starved or over-consumed early — that
  // starvation is what caused whole packs to fall back to all-hard before.
  function pickWeighted(diffs, pack, catsUsed, preferCats) {
    const combos = [];
    for (const cat of CATS) {
      if (preferCats && !preferCats.includes(cat)) continue;
      for (const d of diffs) {
        if (buckets[cat][d].length > 0) combos.push({ cat, d, weight: buckets[cat][d].length });
      }
    }
    if (combos.length === 0) return null;
    const totalWeight = combos.reduce((s, c) => s + c.weight, 0);
    let r = rng() * totalWeight;
    let chosen = combos[combos.length - 1];
    for (const c of combos) {
      if (r < c.weight) { chosen = c; break; }
      r -= c.weight;
    }
    const bucket = buckets[chosen.cat][chosen.d];
    const sampleSize = Math.min(GEO_CANDIDATE_SAMPLE, bucket.length);
    const sampleIdxs = new Set();
    while (sampleIdxs.size < sampleSize) sampleIdxs.add(Math.floor(rng() * bucket.length));
    let best = null;
    let bestDist = -Infinity;
    for (const idx of sampleIdxs) {
      const dist = minDistanceToPack(bucket[idx], pack);
      if (dist > bestDist) { bestDist = dist; best = idx; }
    }
    return bucket.splice(best, 1)[0];
  }

  for (let dayIndex = 0; dayIndex < totalPacks; dayIndex++) {
    const pack = [];
    const catsUsed = new Set();
    let hardCount = 0;

    if (easySlotPacks.has(dayIndex) && remainingCount(["easy"]) > 0) {
      const item = pickWeighted(["easy"], pack, catsUsed);
      if (item) {
        pack.push(item);
        catsUsed.add(item.cat);
      }
    }

    while (pack.length < 5) {
      const slotsLeft = 5 - pack.length;
      const missingCats = CATS.filter((c) => !catsUsed.has(c));
      const mustCoverCat = missingCats.length > 0 && missingCats.length >= slotsLeft;
      const allowedDiffs = hardCount >= MAX_HARD_PER_PACK ? ["easy", "medium"] : DIFFS;

      let item = mustCoverCat
        ? pickWeighted(allowedDiffs, pack, catsUsed, missingCats) || pickWeighted(DIFFS, pack, catsUsed, missingCats)
        : pickWeighted(allowedDiffs, pack, catsUsed);

      if (!item) item = pickWeighted(DIFFS, pack, catsUsed); // last resort, breaks hard cap only if truly nothing else left

      if (!item) break; // truly out of items
      pack.push(item);
      catsUsed.add(item.cat);
      if (item.difficulty === "hard") hardCount++;
    }

    if (pack.length < 5) {
      skippedNotes.push(`day ${dayIndex}: only ${pack.length}/5 items available, pool exhausted`);
      break;
    }

    const avgDiff = pack.reduce((s, i) => s + i.diffValue, 0) / pack.length;
    let minPairDist = Infinity;
    for (let i = 0; i < pack.length; i++) {
      for (let j = i + 1; j < pack.length; j++) {
        minPairDist = Math.min(minPairDist, haversineKm(pack[i], pack[j]));
      }
    }

    packs.push({
      dayIndex,
      items: pack.map((i) => ({
        wikidataId: i.wikidataId,
        label: i.label,
        wikipediaTitle: i.wikipediaTitle,
        category: i.cat,
        subcategory: i.subcategory,
        difficulty: i.difficulty,
      })),
      stats: {
        avgDifficulty: Number(avgDiff.toFixed(2)),
        hardCount,
        categoriesCovered: catsUsed.size,
        minPairDistanceKm: Number.isFinite(minPairDist) ? Math.round(minPairDist) : null,
      },
    });
  }

  const leftover = remainingCount(DIFFS);
  return { packs, skippedNotes, leftover };
}

function summarize(packs) {
  const n = packs.length;
  const allThreeCats = packs.filter((p) => p.stats.categoriesCovered === 3).length;
  const avgDiffOverall = packs.reduce((s, p) => s + p.stats.avgDifficulty, 0) / n;
  const closePairs = packs.filter((p) => p.stats.minPairDistanceKm !== null && p.stats.minPairDistanceKm < MIN_PAIR_DISTANCE_KM).length;
  const hardHistogram = {};
  for (const p of packs) hardHistogram[p.stats.hardCount] = (hardHistogram[p.stats.hardCount] || 0) + 1;
  return { totalPacks: n, packsWithAllThreeCategories: allThreeCats, avgDifficultyAcrossPacks: Number(avgDiffOverall.toFixed(2)), packsBelowGeoTarget: closePairs, hardCountHistogram: hardHistogram };
}

const args = parseArgs(process.argv.slice(2));
const rng = mulberry32(args.seed);
const pool = loadPool();
const { packs, skippedNotes, leftover } = buildPacks(pool, rng);
const summary = summarize(packs);

writeFileSync(args.out, JSON.stringify({ generatedAt: new Date().toISOString(), seed: args.seed, summary, packs }, null, 2));

console.log(`Pool usable: ${pool.length}`);
console.log(`Packs built: ${packs.length}`);
console.log(`Leftover items (not enough to fill another pack): ${leftover}`);
if (skippedNotes.length) console.log(skippedNotes.join("\n"));
console.log("Summary:", JSON.stringify(summary, null, 2));
console.log(`Written to ${args.out}`);
