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

7. **Fix targeted failures, not the whole batch.** Anything the subagent
   couldn't solve or misread goes back to step 4 for a rewrite of that one
   entry, noting the specific ambiguity. Re-run step 6 only on the fixed
   entries if you're unsure, not the full batch again.

8. **Draft the French versions**, same batch, matching `id`s, following the
   same mechanical rules (the FR banned-word list differs from EN — see
   `scripts/lint-events.mjs`). Then merge both languages into
   `src/lib/poc-events.ts` and `poc-events-fr.ts`, and run the real
   `npm run lint:events` — it must report 0 violations before you're done.

9. **Report and stop.** Run `npm run stats:pool` again, tell the user the
   before/after gap and what was added. **Do not run
   `scripts/build-final-daily-packs.mjs` or touch
   `data/daily-packs-plan.json`** — regenerating the live pack plan is a
   separate, explicit step the user confirms themselves, same as every
   other session that has touched it.

## Why staged, not live

`data/daily_packs` rows in Supabase freeze whichever pack a calendar day
already served, keyed by event id — but a half-finished batch sitting in
`poc-events.ts` with no matching FR entry fails `lint:events` for every
other entry too, and `build-final-daily-packs.mjs` reads the live pool
directly. Keeping the batch staged until it's fully validated means the live
files are never in a broken state, even if a drafting run gets interrupted.
