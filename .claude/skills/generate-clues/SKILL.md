---
name: generate-clues
description: Runs dailygame's end-to-end clue pipeline (check pool balance, top up the Wikidata candidate pool, plan a batch, draft EN+FR clues, lint, blind-verify via a separate subagent, merge). Use when the user asks to generate, draft, or write new clues/events for the daily game, or invokes /generate-clues.
---

# Generate clues

Orchestrates the pipeline documented in `docs/event-writing-guide-v2.md` —
this skill sequences existing tools and applies that guide's rules, it does
not replace it. Read that doc (and `docs/difficulty-calibration-protocol.md`
if a recipe seems off) before drafting; don't re-derive the writing rules
from memory.

**Never write directly into `src/lib/poc-events.ts` / `poc-events-fr.ts`
during drafting.** Stage the batch in a scratchpad file first, validate it
there, and only merge into the live files at the very end (step 8). This
project's live pool feeds already-served daily packs — see "Why staged, not
live" below.

Arg: an entry count (e.g. `/generate-clues 10`), default 5 if omitted. A
second arg can force a tier (`/generate-clues 6 easy`).

## Workflow

1. **Decide the tier split.** Run `npm run stats:pool` (writes
   `docs/pool-stats.md`) and read the gap table. Split the requested count
   across easy/medium/hard mirroring the pool-wide 60/20/20 target (= the 3/1/1 pack mix), unless
   the user forced a tier — see "Process: batch" step 0 in the writing
   guide. Don't put more than ~20% hard in one batch regardless of gap.

2. **Check the candidate pool has enough unused material.** Run
   `node scripts/build-daily-packs.mjs` and read its "Pool usable: N" line —
   this already excludes every `wikipediaTitle` already present in
   `poc-events.ts`. If N looks thin for the tier split you need (rule of
   thumb: less than 3x the batch size), run
   `node scripts/fetch-candidates.mjs` first (zero LLM tokens, queries
   Wikidata directly) and re-run the pool check.

3. **Pick the batch.** From `data/candidate-packs-plan.json` (written by
   step 2) or directly from `data/candidates-*.json` (filtering out ids
   whose `wikipediaTitle` is already in `poc-events.ts`), select entries
   matching the tier split. Apply the diversity rules in the writing guide:
   spread locations, don't over-draw the same conflict/city/narrative
   template, and **watch the `subcategory` mix** — don't pick several
   `natural_hazard` (or any single subcategory) entries in one batch, since
   that's what causes forced collisions later in `build-final-daily-packs.mjs`.

4. **Draft the whole batch in English, in one pass**, into a scratch file
   (e.g. `/tmp` or the session scratchpad — never the live pool), following
   the writing guide's vocabulary rules, difficulty recipes, and the
   singular-marker rule. For every person-subject entry, apply "Person
   entries: decide the pin before you write toward it" — check whether the
   achievement has a better, more precise location than the birthplace
   before defaulting `pinIsBirthplace: true`. Set every required field:
   `id`, `name`, `pinIsBirthplace`, `difficulty`, `category`,
   `subcategory`, `clue`, `explanation`, `year`, `lat`, `lng`,
   `wikipediaTitle`. Copy `subcategory` verbatim from the source candidate
   in `data/candidates-*.json`: it's what keeps two same-kind events out of
   one daily pack, and lint fails without it.

5. **Mechanically self-check before merging anything.** `npm run
   lint:events` only passes once EN and FR ids match 1:1, so it can't run
   cleanly yet — instead verify the staged EN draft by hand against the
   mechanical rules (≤160 char clue, ≤48 char name, no em dash, no date/era,
   no banned vocabulary, no unvetted capitalized word) before moving on.

6. **Blind-verify via a genuinely separate subagent.** Spawn an `Agent` call
   (subagent_type: general-purpose) with **only the batch's `clue` text**,
   no `name`/`explanation`/`id`/answers, and this instruction: reason from
   the clue text alone, do not use any search or web tool, guess each
   clue's identity and a rough map location, and flag any clue that isn't
   uniquely solvable. This must not be the same context that wrote the
   clues — that would just be re-reading your own writing, not a real test
   (see `docs/difficulty-calibration-protocol.md` for why self-review
   doesn't catch this).

   Step 6 only checks **uniqueness**. It says nothing about difficulty: an
   encyclopedic model "solves" almost everything, including clues a real
   player scores ~0 on. Difficulty is checked separately, by the easy
   localization gate below (step 8).

7. **Fix targeted failures, not the whole batch.** Anything the subagent
   couldn't solve or misread goes back to step 4 for a rewrite of that one
   entry, noting the specific ambiguity. Re-run step 6 only on the fixed
   entries if you're unsure, not the full batch again.

8. **Draft the French versions**, same batch, matching `id`s, following the
   same mechanical rules (the FR banned-word list differs from EN — see
   `scripts/lint-events.mjs`). Then run the **easy localization gate**
   (section below) on every `easy` entry's FR clue; a failing easy is
   rewritten with a stronger geographic lever and re-gated, or downgraded
   to medium only if the tier mix allows it. Then merge both languages into
   `src/lib/poc-events.ts` and `poc-events-fr.ts`, and run the real
   `npm run lint:events` — it must report 0 violations before you're done.

9. **Report and stop.** Run `npm run stats:pool` again, tell the user the
   before/after gap and what was added. **Do not run
   `scripts/build-final-daily-packs.mjs` or touch
   `data/daily-packs-plan.json`** — regenerating the live pack plan is a
   separate, explicit step the user confirms themselves, same as every
   other session that has touched it.

## Easy localization gate

The game scores *localization*, not recognition. A human anchor test
(2026-10-01, 10 clues) scored 3% on clues every model verifier "solved":
knowing it's RFK doesn't tell you it's Los Angeles. An easy clue must put a
player who does **not** know the event in the right region, through
geography written in the text (a large river, range, sea, island, region, or
a world-famous landmark allusion), never through memory of the event.

A model can't pretend not to know an event, so the gate removes the event
first. Three separate Haiku agents (`model: "haiku"`, no tools), FR clues:

1. **Stripper** (one agent, whole list). Prompt: keep EVERYTHING that
   describes a place, even indirectly (rivers, seas, lakes, ranges, islands,
   relief, climate, geographic proper nouns, "capital", "port", "coast",
   geographic superlatives like "the world's highest peaks", indirect
   references like "the country that will create the Nobel prizes", cardinal
   points); delete everything that identifies the event or person (actions,
   jobs, works, discoveries, kinship, names, dates, numbers, prizes,
   non-geographic superlatives); add no place name; write "(rien)" if
   nothing is left. Output `numéro | texte épuré`.
2. **Two pin passes** (two agents, list order reversed in the second). They
   see ONLY the stripped texts, never the originals. Prompt: always place
   your best pin at the most likely spot, even if vague; answer "aucune"
   only if there is strictly no place hint. Output
   `numéro | latitude | longitude`.
3. Put the pins in a JSON `{id: [[latA,lngA] | null, [latB,lngB] | null]}`
   and run `node scripts/score-pins.mjs pins.json`. An easy clue passes
   only if **both** passes score ≥ 450/700 (≈ within 800 km); a split
   between passes means the lever is fragile.

This matched the human on 9 of 10 anchor clues (the miss was a clue that
needed a reasoning step the human skipped). Keep feeding new human anchors
(5 random clues, 3/1/1, played blind, scored with `scripts/score-guess.mjs`)
into `docs/difficulty-calibration-protocol.md` to keep the threshold honest.

**Pitfalls seen while building it:** a stripper told to drop "superlatives"
and "indirect country references" deletes real levers ("les plus hauts
sommets du monde", "au pays des Nobel"); pin agents told to answer "aucune"
when vaguer than a country refuse region-level levers (Rhine, Caribbean)
that a human would still score on. Both prompts above already avoid this.

## Rewriting existing easy clues ahead of serving

Most easy clues written before the gate existed fail it (on 2026-10-01, 33
of the next 42 served easy clues failed, mostly person entries opening
"Born in a river city / a rural manor"). Fix them in serving order:

1. `node --env-file=.env.local scripts/upcoming-easy.mjs 14 upcoming.json`
   lists the easy clues of the next 14 packs that will actually be served
   (day 1 = next unserved day; already-served days are frozen in Supabase
   and never change). Skip days already rewritten.
2. Run the gate on them. For each failure, rewrite EN + FR adding a real
   geographic lever (river, range, sea, island, region, landmark allusion)
   without naming the country or city; the identity facts stay, so the
   player still has to recognize the subject for full points. Keep ≤160
   chars in both languages. If the stored pin is a vague centroid (e.g. a
   country's middle), fix `lat`/`lng` to the real point.
3. Re-gate the rewrites; when all pass, write
   `{id: {en, fr, lat?, lng?}}` to a JSON and run
   `node scripts/apply-clue-rewrites.mjs rewrites.json`, then
   `npm run lint:events` (new proper nouns go into
   `EASY_PROPER_NOUN_EXCEPTIONS` with a comment on why each leaves real
   uncertainty).
4. Deploy (`vercel --prod`) before the first rewritten day is served; a
   clue's text is read at play time, so no pack-plan regeneration is needed.
   Ask the user before deploying.

Only one session at a time should edit `poc-events.ts` / `poc-events-fr.ts`.

## Why staged, not live

`data/daily_packs` rows in Supabase freeze whichever pack a calendar day
already served, keyed by event id — but a half-finished batch sitting in
`poc-events.ts` with no matching FR entry fails `lint:events` for every
other entry too, and `build-final-daily-packs.mjs` reads the live pool
directly. Keeping the batch staged until it's fully validated means the live
files are never in a broken state, even if a drafting run gets interrupted.
