# Audit: birthplace pin vs. real-fact-elsewhere

Manual read-through of all 70 `pinIsBirthplace: true` events in `src/lib/poc-events.ts`
(2026-09-25). Two passes:

1. **Text-only pass**: does the *current* clue/explanation already describe a more
   notable, precisely locatable fact than the birthplace?
2. **Expanded pass**: does a real, verifiable, well-known precise location exist for
   the person's signature achievement, even if it isn't written into the entry yet?
   (Caught misses like Darwin/Galápagos and Edison/Menlo Park that pass 1 missed,
   simply because those facts aren't in the pool text today.)

`major_artist` (40 events) and `pioneer` (30 events) together are exactly the 70
`pinIsBirthplace: true` events — no overlap with any other subcategory. Pioneers
(explorers/inventors/scientists) skew heavily toward "went somewhere and did X" — very
pinnable. Artists (painters/writers/composers) are usually famous for a body of work or
a style, not a place — pinnable only when a specific building/museum/dramatic incident
is attached. That split shows in the results below.

Every candidate still needs a human decision, and every new fact (pass 2) needs
verification before it goes in a clue — "don't invent or embellish facts" is a hard
house rule. Nothing has been changed in the pool.

## Strong candidates

| id | subcategory | Birthplace framing today | Real-fact location | Source of the fact |
| --- | --- | --- | --- | --- |
| `edmund_hillary_birth` | pioneer | Auckland | Mount Everest summit | Already in the text |
| `steve_jobs` | pioneer | San Francisco | Apple's garage, Los Altos | Already in the text |
| `columbus_birth` | pioneer | Mediterranean port | First landfall island (San Salvador/Bahamas) | Already in the text |
| `amundsen_birth` | pioneer | Norwegian coastal town | The South Pole | Already in the text (caveat: a pole has little surrounding map texture) |
| `james_cook` | pioneer | Yorkshire farming village | Hawaii (first European recorded to reach) | Already in the text |
| `vasco_da_gama` | pioneer | Small Portuguese coastal town | Calicut, India (first direct sea route) | Already in the text |
| `vitus_bering` | pioneer | Danish coastal town | Bering Island (where he died, bears his name) | Already in the text |
| `martin_luther` | major_artist | Eisleben mining town | Wittenberg (Castle Church door) | Already in the text |
| `van_gogh_birth` | major_artist | Dutch village parsonage | Saint-Rémy-de-Provence asylum (Starry Night) | Already in the text |
| `michelangelo_birth` | major_artist | Small Tuscan village | Sistine Chapel / Vatican | Already in the text |
| `darwin_birth` | pioneer | Shrewsbury | Galápagos Islands | Needs adding — not in current text, but the single most famous association with his voyage |
| `edison_birth` | pioneer | Milan, Ohio | Menlo Park, NJ ("Wizard of Menlo Park") | Needs adding |
| `alexander_graham_bell` | pioneer | Edinburgh | His Boston lab, site of the first phone call | Needs adding |
| `robert_bunsen` | pioneer | Göttingen | Heidelberg, where he actually did the spectroscopy discovery | Needs adding (note: born Göttingen, worked Heidelberg — genuinely different city) |
| `masaccio_birth` | major_artist | San Giovanni Valdarno | Brancacci Chapel, Florence (his famous frescoes) | Needs adding |
| `bach_birth` | major_artist | Eisenach | St. Thomas Church, Leipzig (27 years, buried there) | Needs adding |
| `andy_warhol` | major_artist | Pittsburgh | The Factory, New York | Needs adding |

## Medium candidates — decided 2026-09-25

| id | subcategory | Note | Decision |
| --- | --- | --- | --- |
| `disney_birth` | pioneer | Disneyland, Anaheim — the original park, a specific and famous site | **Converted** — drafted in `data/birth-to-fact-conversions-DRAFT.ts`/`.fr.ts` |
| `fyodor_dostoyevsky` | major_artist | Siberian labor camp (Omsk) — dramatic, precise, darker tone | **Converted** — pinned to the Omsk katorga, not the mock-execution site |
| `wernher_von_braun` | pioneer | Peenemünde (V-2 site) — Nazi weapons-program location, needs careful framing | **Converted** — pinned to Peenemünde, framed around the V-2 becoming the first human-made object to reach space, explanation states the civilian death toll plainly |
| `pasteur_birth` | pioneer | Institut Pasteur, Paris | **Converted** |
| `copernicus_birth` | pioneer | Frombork, where he worked and is buried | **Converted** |
| `buddha_birth` | major_artist | Enlightenment site (Bodh Gaya) vs. birthplace (Lumbini) — genuine toss-up | Kept on birthplace |
| `agatha_christie` | major_artist | Harrogate hotel — a curiosity, not really an "achievement" | Kept on birthplace |
| `wilde_birth` | major_artist | Reading Gaol — real and precise, but a tonal call | Kept on birthplace |
| `marco_polo` | pioneer | Destination is really a whole journey/court (Khanbaliq) — less pin-precise | Kept on birthplace |
| `leonardo_da_vinci_birth` | major_artist | Mona Lisa hangs in the Louvre — a display location today, not where the notable thing happened | Kept on birthplace |
| `nikola_tesla_birth` | pioneer | Wardenclyffe Tower is real, but converting means rewriting the whole narrative away from the AC/DC feud, not just a repin | Kept on birthplace, revisit separately if wanted |
| `charles_dickens` | major_artist | London blacking factory — real, different city, but thin gain for a bleak note | Kept on birthplace |

## Reviewed, staying on birthplace (41)

No single precise location beats the birthplace — either the achievement is a body of
work/theory/style with no location, a journey spanning many places, or the notable
location is effectively the same city as the birthplace already (e.g. `niels_bohr`,
`jorge_luis_borges_birth`, `franz_kafka`, `archimedes`, `tolstoy_birth`, `dali_birth`,
`garcia_marquez`):

`mozart_birth`, `shakespeare_birth`, `confucius_birth`, `basho_birth`,
`cervantes_birth`, `newton_birth`, `ibn_battuta_birth`, `du_fu_birth`,
`abu_nuwas_birth`, `la_fontaine_birth`, `bunin_birth`, `beethoven_birth`,
`andersen_birth`, `chaplin_birth`, `nobel_birth`, `tolstoy_birth`, `hokusai_birth`,
`dali_birth`, `jorge_luis_borges_birth`, `john_nash`, `jane_austen`, `franz_kafka`,
`frederic_chopin`, `charles_augustin_de_coulomb`, `maurice_maeterlinck`,
`carl_sagan`, `haruki_murakami`, `hedy_lamarr`, `john_von_neumann`,
`edgar_allan_poe`, `karl_landsteiner`, `lope_de_vega`, `ada_lovelace`, `niels_bohr`,
`mark_twain`, `theophile_gautier`, `archimedes`, `ernest_hemingway`,
`gabriel_garcia_marquez`, `niels_henrik_abel`, `bartolome_esteban_murillo`.

## Summary

- 70 `pinIsBirthplace: true` events reviewed, both passes, all 29 candidates triaged.
- **22 approved for conversion**: all 17 strong candidates, plus 5 of the 12 medium
  candidates (`disney_birth`, `fyodor_dostoyevsky`, `wernher_von_braun`,
  `pasteur_birth`, `copernicus_birth`).
- **48 kept on birthplace**: the original 41, plus 7 medium candidates where the tonal
  or precision trade-off didn't clear the bar (`buddha_birth`, `agatha_christie`,
  `wilde_birth`, `marco_polo`, `leonardo_da_vinci_birth`, `nikola_tesla_birth`,
  `charles_dickens`).
- All 22 conversions are fully drafted (EN + FR, clue + explanation, new pin/year/
  difficulty) in `data/birth-to-fact-conversions-DRAFT.ts` and `.fr.ts`, and every
  clue passes the real `lint-events.mjs` mechanical rules (verified via a standalone
  script running the same checks — 0 violations across both languages).
- Nothing has been merged into `poc-events.ts` / `poc-events-fr.ts` yet, and the live
  pack plan is untouched. Difficulty values on the 5 newly-converted medium candidates
  are provisional eyeball estimates — recalibrate via `scripts/score-guess.mjs` before
  or after merging, per the project's standing difficulty-calibration method.
- Next step: merge the 22 into the real pool files, then rerun
  `build-final-daily-packs.mjs` (already updated with the subcategory-collision fix)
  to regenerate the pack plan.
