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

// Extract structured fields per entry via regex, without parsing the TS AST
// or touching clue/name/explanation text.
function loadClues() {
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
    clues.push({ id: anchors[i].id, difficulty, category, year, lat, lng });
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

function buildPacks(clues, rng) {
  const byDifficulty = { easy: [], medium: [], hard: [] };
  for (const c of clues) byDifficulty[c.difficulty]?.push(c);

  const easyQ = categoryInterleaved(byDifficulty.easy, rng);
  const mediumQ = categoryInterleaved(byDifficulty.medium, rng);
  const hardQ = categoryInterleaved(byDifficulty.hard, rng);

  // Solve for max packs under composition rule (2-3 easy / 1-2 medium / max 1
  // hard) given current pool sizes, alternating pack "type A" (3E/1M/1H) and
  // "type B" (2E/2M/1H) — see docs/difficulty-calibration-protocol.md.
  const E = easyQ.length;
  const M = mediumQ.length;
  const H = hardQ.length;
  let best = { n: 0, a: 0, b: 0 };
  const maxN = Math.floor((E + M + H) / 5);
  for (let n = maxN; n >= 0; n--) {
    let found = false;
    for (let a = 0; a <= n; a++) {
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

  const packs = [];
  let ei = 0;
  let mi = 0;
  let hi = 0;
  for (let i = 0; i < types.length; i++) {
    const [eCount, mCount, hCount] = types[i] === "A" ? [3, 1, 1] : [2, 2, 1];
    const items = [
      ...easyQ.slice(ei, ei + eCount),
      ...mediumQ.slice(mi, mi + mCount),
      ...hardQ.slice(hi, hi + hCount),
    ];
    ei += eCount;
    mi += mCount;
    hi += hCount;
    const categoryCounts = {};
    for (const it of items) categoryCounts[it.category] = (categoryCounts[it.category] || 0) + 1;
    packs.push({
      packIndex: i,
      type: types[i],
      ids: items.map((it) => it.id),
      difficultyCounts: { easy: eCount, medium: mCount, hard: hCount },
      categoriesCovered: Object.keys(categoryCounts).length,
      categoryCounts,
    });
  }

  const leftover = {
    easy: easyQ.length - ei,
    medium: mediumQ.length - mi,
    hard: hardQ.length - hi,
  };

  return { packs, leftover };
}

const args = parseArgs(process.argv.slice(2));
const rng = mulberry32(args.seed);
const clues = loadClues();
const { packs, leftover } = buildPacks(clues, rng);

const summary = {
  totalCluesInPool: clues.length,
  totalPacks: packs.length,
  packsWithAllThreeCategories: packs.filter((p) => p.categoriesCovered === 3).length,
  leftoverUnused: leftover,
};

const output = {
  generatedAt: new Date().toISOString(),
  seed: args.seed,
  note: "Consumed directly by pickDailyEvents() in src/lib/poc-events.ts. One pack = one calendar day, packs cycle in a seeded-shuffled order per full pass so no pack repeats until every pack has been played.",
  summary,
  packs,
};

writeFileSync(args.out, JSON.stringify(output, null, 2));

console.log(`Clues in pool: ${clues.length}`);
console.log(`Packs built: ${packs.length} (types: ${packs.filter(p=>p.type==="A").length}xA[3E/1M/1H], ${packs.filter(p=>p.type==="B").length}xB[2E/2M/1H])`);
console.log(`Leftover unused: ${JSON.stringify(leftover)}`);
console.log(`Packs with all 3 categories: ${summary.packsWithAllThreeCategories}/${packs.length}`);
console.log(`Written to ${args.out}`);
