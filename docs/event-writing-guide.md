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
