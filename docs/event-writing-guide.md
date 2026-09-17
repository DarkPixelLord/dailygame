# Writing game events: clue, name, explanation

This game shows the player a `clue` and asks them to place a map pin at the
real-world location. Only after they submit a guess do they see `name` and
`explanation`. Later, in the final round, they must reorder that session's
events chronologically from memory alone.

Two failure modes have shown up repeatedly while writing these events, and
both are cheap to reintroduce by accident in future batches:

1. **The clue is too vague** — it describes a pattern common to several real
   historical events, so guessing the location becomes a coin flip instead
   of a deduction (e.g. "a numerically inferior army encircles and destroys
   a larger one in open country" fits Cannae, Agincourt, Gaugamela...).
2. **The clue leaks the map answer** — a nationality, ethnicity, region, or
   culture-specific ruler title (Ottoman, Byzantine, tsar, caliph, shogun,
   pharaoh...) hands the player the location directly.

A third, smaller issue: **explanation restating the clue almost verbatim**
feels repetitive to the player — it should confirm the answer and add new
information, not just repeat the distinguishing detail already given away
in the clue.

None of these are reliably caught by the same pass that writes the content
— self-review has an obvious confirmation bias (a writer rarely doubts their
own phrasing). The process below splits writing and verification across
different, less biased checks.

## Vocabulary rules (for `clue` only — `explanation` is post-guess and can
name anything)

**Banned:** nationality/ethnicity/culture/region words (Roman, British,
Ottoman, Byzantine, Asian, Parisian, ...), proper geographic names that
pinpoint a region (the Baltic, the Andes, the Sahara, the Nile, ...), and
ruler titles tied to one specific culture (tsar, caliph, shogun, pharaoh —
use "a ruler", "a monarch", "a religious and political leader" instead).

**A hardcoded word list will always miss some of these — don't trust it
alone.** "The Volga" and "the Hall of Mirrors" both slipped through the word
list because nobody thought to add "Volga" or "mirrors" to it ahead of time;
there are hundreds of named rivers, mountains, seas, and landmarks that
could each individually leak a location, and enumerating all of them is
whack-a-mole. The reliable defense is `npm run lint:events`'s capitalized-
word check: any capitalized word in a clue other than its first word is
flagged as a likely-unvetted proper noun, because virtually every
place/landmark/dynasty name is capitalized while the allowed generic
geography vocabulary (ocean, forest, plain...) isn't. When it flags
something, either rewrite the clue to drop the proper noun, or — only after
confirming by hand that it doesn't reveal location — add it to
`CAPITALIZED_WORD_EXCEPTIONS` in `scripts/lint-events.mjs` (e.g. "Nazi",
"Jewish", "Holocaust" describe identity/history, not place, so they're
already vetted and listed there).

**Allowed and encouraged:** generic physical-geography vocabulary that sets
a scene without pinpointing a country — ocean, sea, strait, bay, forest,
plain, mountain, desert, island, peninsula, river, valley. Also allowed:
non-calendar numbers/durations (a 53-day siege, three days, 28 years) —
they don't reveal chronological order.

**Also banned everywhere (`clue` and `explanation`):** dates, years,
decades, centuries, "BCE"/"CE" (the final round is a chronological-ordering
game — the whole point breaks if the reveal screen already told the player
the year).

**`name` has its own, stricter rule: no dates, ever, and keep it short.**
`name` isn't only shown on the post-guess reveal — it's also the label
printed on every card in the final round's reorder list, which is the exact
puzzle a date would spoil. It also renders inside a fixed-height card, so an
overly long `name` gets visually truncated. Keep it a short, punchy noun
phrase (title-style), not a full sentence — "Founding of the People's
Republic of China", not "...declared on such and such a date". `npm run
lint:events` enforces both the date ban and a 48-character cap on `name`.

## Diversity rules (apply across a batch, and against the existing corpus)

These are judgment calls, not mechanically enforced — check them by eye
against `src/lib/poc-events.ts` before finalizing a new batch, the same way
you'd sanity-check any other cross-cutting property lint can't see.

- **Spread locations reasonably, don't default to Europe out of habit.**
  Some regions genuinely have more well-documented, globally-recognized
  history than others (Europe, more of it survives in writing; Oceania,
  less), so an exact even split across continents isn't the goal and
  forcing one would mean padding with obscure filler just to hit a quota,
  which conflicts with the "broadly known" rule below. The actual failure
  mode to avoid is reaching for Europe reflexively because it's the first
  thing that comes to mind, when a comparably famous, comparably solid
  event from elsewhere exists. When drafting, deliberately ask "is there an
  equally well-known event covering this same kind of moment (battle,
  discovery, disaster...) somewhere I haven't used yet?" before defaulting
  to a European one.
- **Stick to broadly known history.** An event needs real, lasting
  historical significance that a general audience would recognize once
  explained, not a fact that's technically real but obscure or of narrow
  academic interest. If you had to dig past the event's own Wikipedia
  summary to establish why it matters, it's probably too niche for this
  game.
- **Don't over-draw from the same conflicts.** WWI and WWII are already
  heavily represented in the corpus (around a sixth of all entries, between
  the two) — new batches shouldn't add another Somme- or Pearl-Harbor-
  adjacent entry unless it covers a genuinely distinct angle (a different
  theater, a different kind of event, not just another battle). The same
  applies to any other conflict once it starts recurring — treat repetition
  of a *war*, not just a *specific battle*, as the thing to avoid.
- **Don't over-draw from the same cities.** Paris and Rome are already the
  most repeated map pins in the corpus (Paris-area events include the
  Bastille, Louis XVI's execution, the 1871 siege, the Eiffel Tower, and the
  Louisiana Purchase signing; Rome-area events include the Great Fire, the
  Caesar assassination, and the 410 sack) — avoid adding to either unless
  the new event is a clearly better fit there than anywhere else. Before
  finalizing a batch, skim the existing `lat`/`lng` values for other
  clusters (Berlin, Delhi, London, Beijing... already show up twice each)
  and route new entries elsewhere when a comparable event exists in a less
  crowded location.
- **Deep-time/prehistoric events are in scope, if they pin to an exact
  spot.** Things like the Chicxulub impact crater, a specific decorated
  cave (Lascaux, Chauvet...), or a specific early city/settlement site are
  fair game and a good way to add both time-period and geographic variety.
  The hard requirement: the event must correspond to one identifiable
  physical location with real coordinates, not a vague era or region
  ("the Ice Age," "early humans in Africa"). If you can't point to the
  actual crater, cave, or site on a map, it doesn't qualify as a map+guess
  event, no matter how famous the underlying fact is. Note this also means
  `year` will be a very large negative number for these — flag that to
  whoever owns the reorder-round/timeline UI before merging the first one,
  since nothing in the corpus has tested that range yet.
- **Recent events (post-2000) are in scope too, and currently missing.**
  The corpus has zero entries after 1990 — it's easy to default to "history"
  meaning "at least a few decades old," but a sufficiently famous,
  sufficiently settled 21st-century event (a launch, a disaster, a
  discovery, a fall of a regime...) is just as valid a map+date puzzle.
  Technological "firsts" are a good source here (first successful reusable
  rocket landing, first cloned/gene-edited milestone, first smartphone
  unveiling...) — same pattern as the Wright Flyer or Bell's first call
  already in the corpus, just moved into the 21st century. They still need
  to pin to one specific place and moment (a launch pad, a lab, a stage at
  a specific event), not a diffuse trend like "the internet becoming
  widespread" that has no single location. Same bar applies as anywhere
  else: broadly known, not obscure, not invented/embellished. Lean toward
  events where the facts are already settled and non-controversial rather
  than still-unfolding or politically contentious ones, since those are
  harder to write a neutral, checkable singular marker for.

## House style

- **No em dashes, ever.** Use a comma, semicolon, or period instead.
- **Keep `clue` short — this is a mobile game.** Hard limit: 160 characters.
  Say the singular marker in one clean clause, don't stack two or three
  qualifying clauses onto one sentence.
- **Don't invent or embellish facts.** Every distinctive detail used as a
  singular marker must be real and checkable (a real quote, a real
  documented number, a real documented consequence) — not a plausible-
  sounding dramatization of a real anecdote (e.g. a famous quip about a
  event being "consumed by parties" is real; turning it into "spent as
  much time partying as negotiating" invents a precision nobody measured).
  This isn't yet covered by any automated check — a human or a
  fact-focused review pass has to catch it.

`npm run lint:events` enforces the em-dash and length rules (plus the
vocabulary/date rules above) mechanically.

## The singular-marker rule must be legible in the text itself

A fact can be genuinely rare in reality while reading as ordinary on the
page — the clue has to say enough for the reader to recognize it as
extraordinary, not just state it as a plain fact. "Heard thousands of km
away" is real and (unbeknownst to most readers) essentially a world record
for Krakatoa, but written that way it reads as generic disaster flavor a
reader could just as easily attribute to Tambora or any other huge
eruption. "Erupts in what's still the loudest sound ever recorded" states
the same underlying fact but frames it as the superlative it actually is,
which is what actually rules out the lookalike. When drafting or reviewing
a singular marker, don't just ask "is this fact rare" — ask "does the
sentence make its rarity legible to a reader who doesn't already know
that."

Every clue needs at least one genuinely distinctive fact pulled from that
event's real history — an unusual method, an unusual object/technology
involved, a rare/specific consequence, a distinctive quantifiable detail, or
a memorable idiosyncratic circumstance. "Independence preserved against a
colonial invader in the mountains" is not distinctive on its own (it also
loosely fits Afghanistan, Nepal...); "the defending army outnumbered the
invaders and forced the invader to sign a treaty recognizing full
sovereignty" (Adwa) is.

## The process for any new batch of events

0. **Check corpus balance first.** Before drafting, skim
   `src/lib/poc-events.ts` for continent spread, repeated conflicts, and
   repeated city pins (see Diversity rules above), and pick the new batch's
   topics to correct existing gaps rather than reinforce them.
1. **Draft.** Write `clue`, `name`, `explanation` for each new event,
   applying the vocabulary rules and the singular-marker rule above. Ground
   every distinctive detail in real, checkable history — don't invent facts.
2. **Deterministic lint.** Run `npm run lint:events`. This catches, with no
   judgment calls, any date/era leak or banned geography/culture word in the
   clue. Fix everything it flags before moving on. It will not catch
   vagueness — that's step 3.
3. **Blind verification.** For each new clue, get an independent read on
   whether it's actually solvable. Concretely: spawn a fresh agent (or ask a
   person with broad history knowledge) and give it *only* the clue text —
   never the name, explanation, or answer. Ask it to name the single
   historical event it thinks this describes, using general knowledge, and
   to name any other event that would also plausibly fit.
   - If it names the intended event uniquely → the clue passes.
   - If it hesitates between two or more candidates, or names the wrong
     event → the clue is too vague. Go back to the singular-marker step and
     strengthen or replace the distinguishing detail (pull another real fact
     from the event's history) until a blind read resolves it uniquely.
   This is the step that actually catches ambiguity, because it measures
   whether the clue works rather than asking the writer to introspect on
   their own text.
4. **Clue/explanation redundancy check.** Confirm `explanation` doesn't just
   restate the clue's distinguishing phrase — it should confirm the answer
   and add a *different* fact or detail.
5. Only entries that pass steps 2–4 get merged. Nothing needs to come back
   to the project owner for review unless the blind-verification step
   couldn't resolve it after a couple of revision attempts.

## Known limitation

Step 3 relies on the verifier's own knowledge of history, so it isn't a
mathematical guarantee — it can occasionally clear a clue that a very
specialized human reviewer would still contest, or fail one over its own
knowledge gap. It is nonetheless dramatically more reliable than
self-review, because it's an independent, falsifiable test ("does an
uninvolved reader actually land on the right answer?") instead of a
judgment call made by whoever just wrote the text.
