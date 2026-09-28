// Builds the FINAL daily-challenge packs from the finished, drafted pool
// (src/lib/poc-events.ts) — as opposed to build-daily-packs.mjs, which plans
// candidate *drafting* batches from data/candidates-*.json before writing.
// Output feeds pickDailyEvents() directly (see src/lib/poc-events.ts):
// one pack = one day, cycling through all packs before any repeat.
//
// Usage: node scripts/build-final-daily-packs.mjs [--seed N] [--out path]

import { readFileSync, writeFileSync } from "node:fs";

function parseArgs(argv) {
  const out = { seed: 42, out: "data/daily-packs-plan.json" };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--seed") out.seed = Number(argv[++i]);
    if (argv[i] === "--out") out.out = argv[++i];
  }
  return out;
}

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

// data/event-subtopics.json is an audit artifact (id -> subcategory),
// recovered by joining poc-events.ts back to data/candidates-*.json via
// wikipediaTitle — see scripts note in that file. A handful of ids (drafted
// before the field existed, or through another path) have no subcategory;
// those just never trigger the same-subtopic constraint below.
function loadSubtopics() {
  try {
    const parsed = JSON.parse(readFileSync("data/event-subtopics.json", "utf8"));
    return parsed.subtopics ?? {};
  } catch {
    return {};
  }
}

// Extract structured fields per entry via regex, without parsing the TS AST
// or touching clue/name/explanation text.
function loadClues(subtopics) {
  const src = readFileSync("src/lib/poc-events.ts", "utf8");
  const idRe = /id:\s*"([^"]+)"/g;
  const anchors = [];
  let m;
  while ((m = idRe.exec(src))) anchors.push({ id: m[1], start: m.index });

  const clues = [];
  for (let i = 0; i < anchors.length; i++) {
    const start = anchors[i].start;
    const end = i + 1 < anchors.length ? anchors[i + 1].start : src.length;
    const block = src.slice(start, end);
    const difficulty = block.match(/difficulty:\s*"(\w+)"/)?.[1];
    const category = block.match(/category:\s*"(\w+)"/)?.[1];
    const year = Number(block.match(/year:\s*(-?\d+)/)?.[1]);
    const lat = Number(block.match(/lat:\s*(-?[\d.]+)/)?.[1]);
    const lng = Number(block.match(/lng:\s*(-?[\d.]+)/)?.[1]);
    if (!difficulty || !category) continue; // skip legacy/incomplete entries
    const subcategory = subtopics[anchors[i].id];
    clues.push({ id: anchors[i].id, difficulty, category, subcategory, year, lat, lng });
  }
  return clues;
}

const CATS = ["conflict_politics_society", "arts_culture", "science_infrastructure"];

// Group by category, seeded-shuffle within each category, then round-robin
// interleave across categories. Slicing this queue sequentially gives each
// pack a naturally varied category mix without per-pack optimization.
//
// KNOWN GAP: the 3 CATS are broad (e.g. science_infrastructure covers both
// natural disasters and unrelated science/infra events), and easy/medium/hard
// are interleaved into separate queues sliced independently per pack — so a
// pack can still land 2-3 same-subtopic events (e.g. two earthquakes + a
// volcanic eruption, all tagged science_infrastructure) even though category
// spread looks fine. Observed in production packs, not yet fixed. Would need
// a finer subtopic tag (or a same-pack similarity check) at pack-build time,
// on top of the pool-level diversity rules in event-writing-guide-v2.md.
function categoryInterleaved(items, rng) {
  const byCategory = {};
  for (const cat of CATS) byCategory[cat] = [];
  for (const it of items) byCategory[cat_or_other(it, byCategory)].push(it);
  function cat_or_other(it) {
    return CATS.includes(it.category) ? it.category : CATS[0];
  }
  for (const cat of CATS) byCategory[cat] = shuffle(byCategory[cat], rng);

  const queues = CATS.map((cat) => byCategory[cat]);
  const out = [];
  let remaining = items.length;
  let cursor = 0;
  while (remaining > 0) {
    const q = queues[cursor % queues.length];
    if (q.length > 0) {
      out.push(q.shift());
      remaining--;
    }
    cursor++;
  }
  return out;
}

// Final round = ordering the pack chronologically, so two items too close in
// time (e.g. 1945/1946/1948 in one pack) make it a coin toss. Neighbours in
// the sorted pack need BOTH an age ratio >= DATE_RATIO (age = years before
// CURRENT_YEAR, so the required gap grows for older events, matching how
// players perceive distant history) AND an absolute gap >= DATE_MIN_GAP (the
// ratio alone lets 2016/2022 through). 1.5 / 30 was the strictest setting
// that still reached 0 close pairs in simulation (2026-09-28).
const CURRENT_YEAR = 2026;
const DATE_RATIO = 1.5;
const DATE_MIN_GAP = 30;

function tooClose(y1, y2) {
  const a1 = Math.max(CURRENT_YEAR - y1, 1);
  const a2 = Math.max(CURRENT_YEAR - y2, 1);
  return Math.abs(y1 - y2) < DATE_MIN_GAP || Math.max(a1, a2) / Math.min(a1, a2) < DATE_RATIO;
}

function closePairs(items) {
  const years = items.map((it) => it.year).sort((a, b) => a - b);
  let n = 0;
  for (let i = 1; i < years.length; i++) if (tooClose(years[i - 1], years[i])) n++;
  return n;
}

// Category coverage and subcategory uniqueness stay hard rules; date spread is
// soft. Weighting hard violations far above close pairs means a swap can only
// improve dates without ever breaking (or worsening) a hard rule.
function packCost(items) {
  const missingCats = CATS.length - new Set(items.map((it) => it.category)).size;
  const subs = items.filter((it) => it.subcategory).map((it) => it.subcategory);
  const subCollisions = subs.length - new Set(subs).size;
  return (missingCats + subCollisions) * 1000 + closePairs(items);
}

// Hill-climbs by swapping same-difficulty items between two packs, or between
// a pack and the leftover queues, keeping any swap that doesn't raise cost.
// Never adds or drops a pack: the difficulty mix of every pack is unchanged.
function optimizeDateSpread(packItems, leftovers, rng, iterations = 300000) {
  const slots = { easy: [], medium: [], hard: [] };
  packItems.forEach((items, p) => items.forEach((it, i) => slots[it.difficulty].push({ p, i })));
  for (const d of Object.keys(slots)) leftovers[d].forEach((_, i) => slots[d].push({ p: -1, i }));
  const get = (d, s) => (s.p < 0 ? leftovers[d][s.i] : packItems[s.p][s.i]);
  const set = (d, s, v) => {
    if (s.p < 0) leftovers[d][s.i] = v;
    else packItems[s.p][s.i] = v;
  };
  const cost = (p) => (p < 0 ? 0 : packCost(packItems[p]));
  const diffs = Object.keys(slots).filter((d) => slots[d].length > 1);
  for (let k = 0; k < iterations; k++) {
    const d = diffs[Math.floor(rng() * diffs.length)];
    const s1 = slots[d][Math.floor(rng() * slots[d].length)];
    const s2 = slots[d][Math.floor(rng() * slots[d].length)];
    if (s1.p === s2.p) continue;
    const before = cost(s1.p) + cost(s2.p);
    const v1 = get(d, s1);
    set(d, s1, get(d, s2));
    set(d, s2, v1);
    if (cost(s1.p) + cost(s2.p) > before) {
      set(d, s2, get(d, s1));
      set(d, s1, v1);
    }
  }
}

function buildPacks(clues, rng) {
  const byDifficulty = { easy: [], medium: [], hard: [] };
  for (const c of clues) byDifficulty[c.difficulty]?.push(c);

  const easyQ = categoryInterleaved(byDifficulty.easy, rng);
  const mediumQ = categoryInterleaved(byDifficulty.medium, rng);
  const hardQ = categoryInterleaved(byDifficulty.hard, rng);

  // Solve for max packs under composition rule (2-3 easy / 1-2 medium / max 1
  // hard) given current pool sizes, mixing pack "type A" (3E/1M/1H) and
  // "type B" (2E/2M/1H) — see docs/difficulty-calibration-protocol.md.
  // For a given total n, prefer as much type A as the pool can support
  // (a from n down to 0) and only fall back to type B for whatever n can't
  // be covered by type A alone — type B no longer wins by default just
  // because it was checked first. This still maximizes total pack count
  // (the outer loop is unchanged), it only changes which mix is picked
  // among the ties.
  const E = easyQ.length;
  const M = mediumQ.length;
  const H = hardQ.length;
  let best = { n: 0, a: 0, b: 0 };
  const maxN = Math.floor((E + M + H) / 5);
  for (let n = maxN; n >= 0; n--) {
    let found = false;
    for (let a = n; a >= 0; a--) {
      const b = n - a;
      const e = 3 * a + 2 * b;
      const m = a + 2 * b;
      const h = a + b;
      if (e <= E && m <= M && h <= H) {
        best = { n, a, b };
        found = true;
        break;
      }
    }
    if (found) break;
  }

  // Interleave A/B pack types so the day-to-day feel is consistent, not
  // "all heavy-hard packs first, then all balanced ones".
  const types = [];
  let a = best.a;
  let b = best.b;
  while (a > 0 || b > 0) {
    if (a >= b && a > 0) {
      types.push("A");
      a--;
    } else if (b > 0) {
      types.push("B");
      b--;
    }
  }

  // Scans `queue` for `count` items whose subcategory isn't already in
  // `usedSubcats` for this pack, removing matches in place (so a skipped
  // item just waits for a later pack, nothing is lost — the queues still
  // partition the pool exactly once each). Items with no known subcategory
  // never collide. Falls back to force-taking from the front if the queue
  // runs out of non-colliding options, so every pack still gets exactly
  // `count` items — collisionStats tracks how often that happened.
  function takeAvoidingSubcategory(queue, count, usedSubcats, collisionStats) {
    const picked = [];
    let i = 0;
    while (picked.length < count && i < queue.length) {
      const item = queue[i];
      if (item.subcategory && usedSubcats.has(item.subcategory)) {
        i++;
        continue;
      }
      picked.push(item);
      queue.splice(i, 1);
      if (item.subcategory) usedSubcats.add(item.subcategory);
    }
    while (picked.length < count && queue.length > 0) {
      const item = queue.shift();
      picked.push(item);
      if (item.subcategory) usedSubcats.add(item.subcategory);
      collisionStats.forced++;
    }
    return picked;
  }

  const collisionStats = { forced: 0 };
  const packItems = types.map((type) => {
    const [eCount, mCount, hCount] = type === "A" ? [3, 1, 1] : [2, 2, 1];
    const usedSubcats = new Set();
    return [
      ...takeAvoidingSubcategory(easyQ, eCount, usedSubcats, collisionStats),
      ...takeAvoidingSubcategory(mediumQ, mCount, usedSubcats, collisionStats),
      ...takeAvoidingSubcategory(hardQ, hCount, usedSubcats, collisionStats),
    ];
  });
  optimizeDateSpread(packItems, { easy: easyQ, medium: mediumQ, hard: hardQ }, rng);

  const packs = [];
  for (let i = 0; i < types.length; i++) {
    const items = packItems[i];
    const eCount = items.filter((it) => it.difficulty === "easy").length;
    const mCount = items.filter((it) => it.difficulty === "medium").length;
    const hCount = items.filter((it) => it.difficulty === "hard").length;
    const categoryCounts = {};
    for (const it of items) categoryCounts[it.category] = (categoryCounts[it.category] || 0) + 1;
    const subcategoryCounts = {};
    for (const it of items) if (it.subcategory) subcategoryCounts[it.subcategory] = (subcategoryCounts[it.subcategory] || 0) + 1;
    packs.push({
      packIndex: i,
      type: types[i],
      ids: items.map((it) => it.id),
      difficultyCounts: { easy: eCount, medium: mCount, hard: hCount },
      categoriesCovered: Object.keys(categoryCounts).length,
      categoryCounts,
      subcategoryCounts,
      closeDatePairs: closePairs(items),
    });
  }

  const leftover = {
    easy: easyQ.length,
    medium: mediumQ.length,
    hard: hardQ.length,
  };

  return { packs, leftover, collisionStats };
}

const args = parseArgs(process.argv.slice(2));
const rng = mulberry32(args.seed);
const subtopics = loadSubtopics();
// Packs already served are pinned in Supabase under their date (archive and
// today replay from there, never from this plan), so their clues must be left
// out: api/session skips any pack containing a served id, which would waste
// the other four clues of that pack.
async function loadServedIds() {
  process.loadEnvFile(".env.local");
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  const res = await fetch(`${url}/rest/v1/daily_packs?select=event_ids`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!res.ok) throw new Error(`Supabase daily_packs read failed: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  return new Set(rows.flatMap((r) => r.event_ids));
}

const servedIds = await loadServedIds();
const clues = loadClues(subtopics).filter((c) => !servedIds.has(c.id));
const { packs, leftover, collisionStats } = buildPacks(clues, rng);

const packsWithSubcategoryCollision = packs.filter((p) =>
  Object.values(p.subcategoryCounts).some((n) => n > 1),
).length;

const summary = {
  totalCluesInPool: clues.length,
  totalPacks: packs.length,
  packsWithAllThreeCategories: packs.filter((p) => p.categoriesCovered === 3).length,
  leftoverUnused: leftover,
  packsWithSubcategoryCollision,
  forcedSubcategoryCollisions: collisionStats.forced,
  excludedServedClues: servedIds.size,
  packsWithCloseDates: packs.filter((p) => p.closeDatePairs > 0).length,
};

const output = {
  generatedAt: new Date().toISOString(),
  seed: args.seed,
  note: "Served by api/session in plan order: each new day gets the first pack with no already-served clue. pickDailyEvents() in src/lib/poc-events.ts only uses it as an offline fallback.",
  summary,
  packs,
};

writeFileSync(args.out, JSON.stringify(output, null, 2));

console.log(`Clues in pool: ${clues.length}`);
console.log(`Packs built: ${packs.length} (types: ${packs.filter(p=>p.type==="A").length}xA[3E/1M/1H], ${packs.filter(p=>p.type==="B").length}xB[2E/2M/1H])`);
console.log(`Leftover unused: ${JSON.stringify(leftover)}`);
console.log(`Served clues excluded: ${servedIds.size}`);
console.log(`Packs with close dates: ${summary.packsWithCloseDates}/${packs.length}`);
console.log(`Packs with all 3 categories: ${summary.packsWithAllThreeCategories}/${packs.length}`);
console.log(`Subtopics loaded for: ${Object.keys(subtopics).length} ids`);
console.log(`Packs with a same-subcategory collision: ${packsWithSubcategoryCollision}/${packs.length}`);
console.log(`Forced collisions (no non-colliding option left): ${collisionStats.forced}`);
console.log(`Written to ${args.out}`);
