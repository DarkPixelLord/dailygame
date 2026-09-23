# Difficulty calibration protocol

**Status: active, our standing method.** Use this whenever a change to the
difficulty rules in `docs/event-writing-guide-v2.md` ("Writing to a target
difficulty") needs validating before being adopted — a new tier definition,
a new geographic lever, a new sourcing rule. Don't ship a difficulty-rule
change on judgment alone; run it through this first.

## Why this replaced eyeballing

The old approach estimated difficulty from Wikidata pageviews alone, before
any clue was written. That measures how much an article gets *read*, not
whether a Western-pop-culture player would recognize it or could localize
it on a map — the actual thing being scored. Judgment-only review of a
drafted clue has the same blind spot: a writer's sense of "this reads easy"
doesn't predict where a real player's guess actually lands in km, or how
many points that guess is worth under the real scoring curve. Both get
replaced by a blind test scored against the game's real formula.

## The protocol

1. **Draft one throwaway example per tier being tested** (easy/medium/hard),
   applying the tier's current writing rules. Use fresh topics each round —
   don't reuse a topic once its answer has been seen.
2. **Write it in the tester's fluent language.** Testing in a second
   language confounds difficulty-of-content with difficulty-of-reading —
   we learned this the hard way (an English clue tested by a French
   speaker understated how well a rule actually worked).
3. **Check the mechanical constraints** the real lint enforces: ≤160
   characters, no em dash, no date/year/era, no banned vocabulary outside
   what the tier under test explicitly allows.
4. **Present the clue alone** — no name, no explanation, no hint about
   which tier it's targeting or what region it's from. Get back: a
   pinned location (country/region is enough) and a rough year guess.
5. **Score it for real.** Don't eyeball "close" or "far" — look up the
   event's actual lat/lng and year, compute the great-circle distance to
   the guess, and run it through the actual `locationPoints()` formula in
   `src/lib/scoring.ts` (`scripts/score-guess.mjs` does this in one call —
   see below). Report the real point value, out of `MAX_LOCATION_POINTS`
   (700).
6. **Read the result against what the tier is supposed to do**, not just
   pass/fail:
   - Easy should land at or near full points even off by a city.
   - Medium should land a meaningfully-reduced but non-trivial score from
     honest reasoning off the clue's one geographic descriptor.
   - Hard is allowed to score near zero for a player unfamiliar with the
     topic — that's not a failure, as long as the fact itself was real,
     plainly stated, and checkable (a hard clue must still be uniquely
     solvable by someone who *does* know the topic).
7. **Feed anything surprising back into the guide.** This protocol exists
   to catch exactly this kind of thing — recipe corrections and mechanical
   findings we've hit so far:
   - Stacking *identity* markers doesn't help localization — only
     *geographic* markers do (this is why the easy/medium recipes split
     the identity and geography levers apart).
   - A generic terrain word alone barely narrows anything; only a real
     named place or a distinctive terrain×climate/quantified combo does.
   - A named geographic feature only works as a clue if it's actually
     visible as a label on the game's own map — check before relying on
     one (see the map's `waterway_line_label` / `water_name_*` layers in
     `src/components/MapLibrePin.tsx`).
   - The scoring curve is more forgiving of a wrong guess in a
     geographically dense region (e.g. Europe) than an equally-wrong guess
     in a sparse one (e.g. Arctic Canada, Siberia) — a hard clue's real
     difficulty depends partly on *where* the topic is, not just how
     obscure it is. Still an open hypothesis, only tested on a handful of
     examples — worth more data before treating it as a firm rule.
   - Double-check which specific historical episode a clue's fact actually
     describes when a topic has more than one candidate moment (e.g. a
     failed attempt vs. the eventual success) — this is a factual-accuracy
     bug, independent of difficulty tier, that a blind test can surface.

## Reusable scoring script

`node scripts/score-guess.mjs <realLat> <realLng> <guessLat> <guessLng>`
prints the great-circle distance and the exact point value from
`src/lib/scoring.ts`'s formula, so a calibration round doesn't need its own
ad hoc distance/score calculation each time.
