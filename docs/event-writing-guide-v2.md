# Writing game events: clue, name, explanation (v2)

**Status: active, in progress.** This supersedes `docs/event-writing-guide-v1.md`
for all new content. v1 is frozen and only describes the 234 entries archived
in `src/lib/legacy-events.ts` / `legacy-events-fr.ts` — those are no longer
served by the game and are not touched by this guide. New entries go in
`src/lib/poc-events.ts` / `poc-events-fr.ts`, which start empty. **Duplicating
a legacy event's topic in the new pool is fine** — the two pools are never
merged, so there's no id collision risk and no need to check the new pool
against the legacy one for repeats.

## Why v1 was retired

Two problems kept recurring: clues too vague or too obscure for the intended
general audience, and a content process (one interactive writing session per
batch, one verification sub-agent per clue) that cost more tokens than it
needed to. v1's rules for *what makes a good clue* (vocabulary, phrasing,
structure) held up and are carried over unchanged below. What's changing is
*how a topic gets chosen* and *how many separate model calls it takes to
produce and check a batch*.

## Sourcing: notability decided upstream, not by self-judgment

v1 asked the writer to personally judge "is this broadly known enough,"
which is exactly the kind of self-review that misses obscure/anecdotal
topics — a writer's sense of what's famous is skewed by what they personally
know. v2's plan: a separate, deterministic script (not yet built —
`scripts/fetch-candidates.mjs`) queries Wikidata for events that have a
coordinate, a date, and a high sitelink count (the number of language
Wikipedias that cover it — an objective, external proxy for "known to a
general audience," not a model's guess). That produces a pre-vetted
candidate pool to draft from, instead of drafting from free recall.

**Until that script exists**, fall back to v1's manual bar: an event needs
real, lasting historical significance a general audience would recognize
once explained, not a fact that's technically real but obscure or of narrow
academic interest. If you had to dig past the event's own Wikipedia summary
to establish why it matters, it's too niche.

## Writing to a target difficulty, not inheriting one

Difficulty used to be treated as something sourcing measured (Wikidata
sitelinks, then pageviews) and the writer just inherited as an absolute
value. That's unreliable for what actually matters here: pageviews measure
how much an article gets *read*, not whether the fact is one a general
Western-pop-culture audience would recognize. A heavily-visited niche topic
isn't "easy," and a moderately-visited but iconic one can be (see
`feedback_fame_vs_impact` — pageviews ≠ historical significance).

Testing showed the current pool skews too hard overall — more than one or
two hard clues in a run of five starts losing players. **The fix isn't
"write hard clues more obliquely" (that makes hard worse); it's shifting
the whole pool's center of gravity toward easy.** Popularity stays useful,
but only as one input to *build* each tier, combined with how the clue is
written — never treated alone as the difficulty.

Every entry in `poc-events.ts` sets `difficulty: "easy" | "medium" | "hard"`,
checked by `npm run lint:events`. Run `npm run stats:pool` (writes
`docs/pool-stats.md`) before picking a batch and write to whichever tier
the pool needs — **easy is the default target** (see the pool-wide ratio
below), not an equal three-way split.

Across all three tiers, **phrasing stays equally plain and direct** — never
make a clue harder to parse to manufacture "hard." What actually moves a
clue between tiers is (1) how well-known the source topic already is, and
(2) how much *geographic* help the clue gives — not how many identifying
facts it stacks. This matters because the game tests localization, not
recognition: a fact that helps a player recognize *what* the event is
(a famous name, a cultural association) doesn't automatically help them
place *where* it is on the map, which is the thing actually being scored.
Generic geography words used in isolation ("a mountain," "a peninsula")
don't discriminate either — the world has too many of both. Directness of
phrasing is not a difficulty knob anywhere; it's a fixed requirement.

**Easy (the majority target, ~50% of the pool)**
- Sourcing ingredient: prefer candidates that are already broadly
  recognizable (high sitelinks/pageviews in `data/candidates-*.json`) —
  popularity is a genuine asset here, not just a floor.
- Writing ingredient, identity: one singular marker, stated plainly — lean
  on the "sheer global fame" exception (below) rather than stacking extra
  identity facts, which help recognition but not localization.
- Writing ingredient, geography: this is the real easy lever, but it's
  narrower than "any proper noun." **Never state directly, at any tier
  including easy: the country's own name or nationality/culture adjective**
  ("Egypt"/"Egyptian", "France"/"French") — **and never a city, town, or
  village name either** ("Munich", "New York", "the village of Schengen")
  — a city-level proper noun pins the answer almost as precisely as the
  country name would, sometimes more precisely, so it's excluded for the
  same reason.
  What IS allowed: a real named natural or large-scale feature — a river,
  mountain range, sea, desert, island, peninsula — but only if it **spans a
  large distance or multiple countries**, not a single point. The test:
  does knowing this name still leave meaningful uncertainty about exactly
  where the pin is, or does it (like a city) point at essentially one
  place? "Along the Nile" (six countries, ~6,650 km) leaves real
  uncertainty. "On the Tiber" or "at the foot of Corcovado" doesn't — both
  are, in general knowledge, synonymous with one specific city (Rome, Rio),
  so they fail the test exactly like naming the city would; treat them the
  same way. When no genuine large-scale feature exists for a topic, drop
  the geographic proper noun entirely and lean on the "sheer global fame"
  exception (below) or a generic cultural allusion ("a city famous for its
  canals") instead of reaching for a city name as a shortcut.

**Medium**
- Sourcing ingredient: any popularity band works; the topic doesn't need to
  be as universally famous as an easy pick.
- Writing ingredient, identity: one singular marker, stated as plainly and
  directly as an easy clue would state it — no stacking, no obliqueness.
- Writing ingredient, geography: one *distinctive* geographic descriptor
  that isn't a proper noun — cross a terrain word with a climate/scale
  qualifier ("a volcanic island in a warm sea," not just "an island"), or
  use a real quantified/superlative physical fact ("a seismically active
  mountain range"). A bare terrain noun alone doesn't count; it needs to
  actually narrow the plausible region the way a real fact would.

**Hard (the minority tier, ~20% of the pool)**
- Sourcing ingredient: this is the only difficulty lever here — pull from
  lower-popularity candidates rather than writing more obscurely.
- Writing ingredient: same clarity bar as medium on both identity and
  geography — one plain singular marker, geography decorative only, no
  proper nouns, no distinctive climate/terrain combo either. The difficulty
  comes entirely from the subject being less broadly known.
- Never manufacture "hard" through vagueness or oblique phrasing. A vague
  clue fails blind verification outright (the reader can't identify
  anything); a hard clue must still be uniquely solvable, just for a
  subject fewer players already recognize. Don't use this tier as cover for
  a banned-vocabulary or geography-leak shortcut "because it's hard
  anyway" — every rule below still applies (except the geographic
  proper-noun ban lift, which is easy-only).

**Pool-wide ratio target: 50% easy / 30% medium / 20% hard**, not an even
three-way split — testing showed the pool ran too hard overall. `npm run
stats:pool` (writes `docs/pool-stats.md`) tracks the gap to target and
tells you which tier to write next. This feeds directly into how daily
5-card packs get assembled: **2-3 easy / 1-2 medium / max 1 hard per
pack** (soft targets, not a rigid quota — see
`scripts/build-daily-packs.mjs`'s existing soft-constraint approach for the
candidate-pool equivalent). These targets are a starting point, not fixed —
adjust both together if playtesting says otherwise.

Recipe changes get validated with a blind-guess test before being adopted —
see `docs/difficulty-calibration-protocol.md` for that process.

## Process: batch, not one-agent-per-event

Goal: minimize the number of separate model invocations per batch, since
each fresh agent call pays a fixed context/instruction overhead regardless
of how small its actual job is.

0. Pick (or, once it exists, pull from the Wikidata candidate pool) a batch
   of topics, checking spread/repetition against the **new pool only** (see
   Diversity rules below) — not against the legacy corpus. **Each batch
   mirrors the 50/30/20 ratio internally** (e.g. 5 easy / 3 medium / 2 hard
   for a 10-entry batch), rather than one tier per batch — this way every
   tier has enough entries to test/play with after just one batch, instead
   of medium/hard staying at zero until their turn comes up. Check
   `docs/pool-stats.md` (`npm run stats:pool`) beforehand to confirm the
   pool-wide gap is still closing in proportion, and rebalance a batch's
   split only if one tier has drifted noticeably ahead of the others.
1. **One drafting pass, whole batch at once.** Write `clue`/`name`/`explanation`
   for every event in the batch in a single response, applying the
   vocabulary and singular-marker rules below, written to the batch's
   chosen difficulty tier. Set `category` too (one of
   `conflict_politics_society` / `arts_culture` / `science_infrastructure`,
   matching `TOP_CATEGORIES` in `scripts/fetch-candidates.mjs`) — not yet
   used by any pack-assembly logic, but required by lint so nothing needs
   retagging once that logic exists.
2. **Deterministic lint**, unchanged: `npm run lint:events`.
3. **One blind-verification pass, whole batch at once**, not one sub-agent
   per clue. A single fresh, independent read gets the full list of new
   clues (no names/answers) and guesses each one individually. Any clue that
   isn't uniquely identified goes back to step 1 with the specific ambiguity
   noted, for a targeted rewrite — not a full batch redo.
4. Confirm no `explanation` just restates its `clue`'s distinguishing
   phrase.
5. Merge entries that pass 2-4.

## Vocabulary rules (for `clue` only — `explanation` is post-guess and can
name anything)

**Banned:** nationality/ethnicity/culture/region words (Roman, British,
Ottoman, Byzantine, Asian, Parisian, ...), proper geographic names that
pinpoint a region (the Baltic, the Andes, the Sahara, the Nile, ...), and
ruler titles tied to one specific culture (tsar, caliph, shogun, pharaoh —
use "a ruler", "a monarch", "a religious and political leader" instead).

**A hardcoded word list will always miss some of these — don't trust it
alone.** The reliable defense is `npm run lint:events`'s capitalized-word
check: any capitalized word in a clue other than its first word is flagged
as a likely-unvetted proper noun. When it flags something, either rewrite
the clue to drop the proper noun, or — only after confirming by hand that it
doesn't reveal location — add it to `CAPITALIZED_WORD_EXCEPTIONS` in
`scripts/lint-events.mjs`.

**Allowed and encouraged:** generic physical-geography vocabulary that sets
a scene without pinpointing a country — ocean, sea, strait, bay, forest,
plain, mountain, desert, island, peninsula, river, valley. Also allowed:
non-calendar numbers/durations (a 53-day siege, three days, 28 years).

**Also banned everywhere (`clue` and `explanation`):** dates, years,
decades, centuries, "BCE"/"CE" (the final round is a chronological-ordering
game, so the reveal screen can't already give away the year).

**Implicit temporal hints in `explanation` are banned too, even without a
literal date — not mechanically catchable, needs a manual pass.** A fact
can pin the era just as precisely as a date: a named technology ("wireless
communication", "electric timing"), a defunct political entity or bloc
("the Soviet Union", "Czechoslovakia", "the Cold War"), or a style/movement
tied to one period ("Art Deco"). Even though `explanation` is shown after
the player has already guessed, the player carries that era knowledge into
the later chronological-ordering round, so it still leaks. Prefer a vaguer
paraphrase that keeps the interesting fact without the era-pinning word
("a rival global power" instead of "the Soviet Union", "a communications
antenna" instead of "wireless communication").

**`name` has its own, stricter rule: no dates, ever, and keep it short.**
It's also the label on every card in the final round's reorder list — a
date there would spoil that round, and it's a short, punchy noun phrase
(title-style), not a full sentence. `npm run lint:events` enforces both the
date ban and a 48-character cap on `name`.

## Geographic leaks through logical elimination, not just banned words

A clue can leak the location without any banned word, if the *fact itself*
eliminates almost every possibility by deduction ("ending a world war"
narrows it to a handful of signing sites, since there have only been two
world wars). Not mechanically catchable — for every qualifying word or
number in a clue, ask "does this rule out almost everything except the real
answer, even without naming a place?" If it does and adds nothing the
reader needs, cut it.

## Some subjects don't belong on a map

If the reader already knew the answer, would they intuitively know where to
put the pin, or would they have to think about which incidental
building/city happened to host it? If the second, don't use it as a
map+guess event, no matter how well-documented the fact is.

## Geographic detail must be functional, not decorative

A scene-setting detail only earns its place if it actually did something in
the story — caused the tactic, explains why the location was chosen,
changed the outcome. If deleting it wouldn't make the story stop making
sense, it's decorative, not a singular marker.

## The culturally-coded detail must be universally legible, not just true

A single well-chosen word can rescue an otherwise generic clue by pointing
at one place through near-universal cultural association ("obsessed with
dancing at balls" → the Congress of Vienna waltz → Vienna). This only works
if the association is close to universal, not something only a
history-literate writer would catch. Ask: would a blind reader actually
land on the place, or only someone who already knows the anecdote?

## The point-subject rule: fixing which pin is "the" answer

Some events touch more than one geographic point. Before writing the clue,
decide which point is *the* answer the game expects, make that point the
grammatical subject of the sentence, and make sure `lat`/`lng` match that
same point, not a different place mentioned elsewhere in the clue.

**Treaties and territorial transfers are the recurring failure case.**
Wikidata's coordinate for this kind of event often defaults to wherever the
paper was signed (a negotiating capital), which can be a huge distance from
the place a player would actually associate with the event, and sometimes
too diffuse to pin at all (a whole purchased territory has no single point).
The Alaska Purchase is the concrete example: Wikidata's coordinate was
Washington D.C. (the treaty signing), but the game needs a point *and*
Alaska itself is far too large to be "the" pin — the fix was the physical
handover ceremony at Sitka (flag lowered/raised, a specific date, a specific
building), a real, precise, checkable point the lead Wikipedia summary
didn't mention but a search of the full article for "ceremony"/"transfer"
turned up. When a diplomacy-category candidate's stored coordinate is a
capital city that has nothing else to do with the story, check the full
source article for an actual handover/signing-site scene before defaulting
to the treaty's negotiating city.

## Person entries: the clue must signal it wants the birthplace

For a person-subject entry, `lat`/`lng`/`year` point at where and when they
were *born* — not where they worked, made their famous discovery, died, or
any other place tied to them. The game shows only the clue text; there's no
separate "guess the birthplace" instruction anywhere in the UI. So if the
clue doesn't say so, the player has no way to know the pin isn't, say, where
the person did the thing the clue just described. A clue that's all career
facts ("this artist turned soup cans into fine art...") lets a player
correctly identify the person and still guess the wrong point on the map.

**Fix: open with an explicit birth verb** ("Born in ...", "Né(e) dans...",
"naît"/"naquit" à la rigueur), paired with a vague, non-eliminating
physical-geography or generic-setting descriptor (a small village, a river
town, a coastal city, a noble family) — never a proper noun or the words
banned above. The rest of the clue is free to carry whatever distinctive
fact identifies the person; the birth clause's only job is telling the
player *what they're being asked to point at*, not helping them find it.

This is mechanically enforced: every entry in `poc-events.ts` sets
`pinIsBirthplace: true | false`, and whenever it's `true`,
`scripts/lint-events.mjs` requires the clue (in **both** `poc-events.ts` and
`poc-events-fr.ts`) to contain a birth-signal word ("born" / "né"/"née"/
"naît"/"naquit"). Set this field for every new person entry — the lint fails
loudly if you forget it or forget the birth-signal word in either language.

## Diversity rules (apply across the new pool only)

Judgment calls, checked by eye against `src/lib/poc-events.ts` — not against
`legacy-events.ts`, which is out of scope now.

- **Spread locations reasonably**, don't default to Europe out of habit.
- **Don't over-draw from the same conflicts** (a *war*, not just a specific
  battle, once it starts recurring in the new pool).
- **Don't over-draw the same narrative template** ("a public figure is shot
  in a crowd," "an army outnumbered 10-to-1 still wins," ...). Individually
  fine, risky in volume — skim the new pool for how many entries already
  open the same way before finalizing a batch.
- **Don't over-draw from the same cities.**
- **Deep-time/prehistoric events are in scope**, if they pin to one exact,
  identifiable physical location with real coordinates — not a vague era or
  region.
- **Recent events (post-2000) are in scope too.** Same bar as anywhere else:
  broadly known, not obscure, not invented/embellished, settled rather than
  still-unfolding or contentious.

## House style

- **No em dashes, ever.** Use a comma, semicolon, or period instead.
- **Keep `clue` short — this is a mobile game.** Hard limit: 160 characters.
  Say the singular marker in one clean clause.
- **Don't invent or embellish facts.** Every distinctive detail must be
  real and checkable. Not yet covered by an automated check — needs a
  fact-focused review pass.

`npm run lint:events` enforces the em-dash and length rules (plus the
vocabulary/date rules above) mechanically.

## The singular-marker rule must be legible in the text itself

A fact can be genuinely rare while reading as ordinary on the page — the
clue has to make its rarity *legible*, not just state it. "Heard thousands
of km away" reads as generic disaster flavor; "erupts in what's still the
loudest sound ever recorded" states the same fact but frames it as the
superlative it actually is.

Every clue needs at least one genuinely distinctive fact — an unusual
method, an unusual object/technology, a rare/specific consequence, a
distinctive quantifiable detail, or a memorable idiosyncratic circumstance.

**Exception: sheer global fame can substitute for a distinctive detail** (a
president shot in a car is, structurally, a generic scene — but famous
enough to identify uniquely on its own). Resolved by the blind-verification
step: if an independent read of the bare clue lands on the right answer
without hesitation, the fame carried it; if it doesn't, treat it like any
other too-vague clue and add a distinguishing detail.

## Known limitation

Blind verification relies on the verifier's own knowledge of history, so
it's not a mathematical guarantee. It's still dramatically more reliable
than self-review, because it's an independent, falsifiable test rather than
a judgment call made by whoever just wrote the text.
