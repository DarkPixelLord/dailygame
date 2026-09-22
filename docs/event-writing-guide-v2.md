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

## Process: batch, not one-agent-per-event

Goal: minimize the number of separate model invocations per batch, since
each fresh agent call pays a fixed context/instruction overhead regardless
of how small its actual job is.

0. Pick (or, once it exists, pull from the Wikidata candidate pool) a batch
   of topics, checking spread/repetition against the **new pool only** (see
   Diversity rules below) — not against the legacy corpus.
1. **One drafting pass, whole batch at once.** Write `clue`/`name`/`explanation`
   for every event in the batch in a single response, applying the
   vocabulary and singular-marker rules below.
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
