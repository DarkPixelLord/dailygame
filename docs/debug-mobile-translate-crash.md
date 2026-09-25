# Debug log: mobile crash on round transitions ("manche suivante")

**Status:** Fixed 2026-09-25.
**Symptom:** on some mobile browsers, tapping "manche suivante" (or "Valider") crashed the tab outright — "Impossible de charger cette page" (Android Chrome) — making the game unplayable past round 1. 100% reproducible on affected devices/browsers.

Kept as a reference for the debugging path, not just the fix — several plausible-looking leads turned out to be wrong, and the method that finally worked (remote DevTools debugging) is worth reaching for earlier next time a crash like this shows up.

## Devices/browsers affected

| Device / browser | Crashed? |
|---|---|
| Chrome Android (tester's phone) | Yes, every time |
| iPhone 12 (browser unknown), reported by a tester the day before | Yes, every time |
| Samsung Internet (same phone, same deployed code) | No |
| Chrome on PC | No |

The Samsung-Internet-vs-Chrome-Android split on the *same phone, same deployed code* was the key fact that ruled out "this is today's regression" and pointed at something browser-specific rather than app-logic-specific.

## False leads (tried and ruled out, in order)

1. **Touch gesture interrupting the camera animation.** `MapLibrePin.tsx`'s `fitBounds`/`flyTo` calls on round transition seemed like a natural suspect — a drag/pinch starting mid-animation cancels it in MapLibre. Added a `runProtectedCameraMove` helper that disables `dragPan`/`touchZoomRotate`/etc. for the ~800ms of the animation, re-enabling on `moveend`. Didn't fix the crash — and more importantly, a tester's iPhone 12 crash report predated this code entirely (it happened on a build with *no* interaction-handler logic near the transition at all), which killed this theory outright.
2. **Animation duration itself.** Swapped `duration: 800` for `duration: 0` (instant jump, no animation) as a diagnostic. Still crashed identically. Ruled out the camera animation as the trigger.
3. **Map container resize during the transition.** The clue banner (multi-line) and the result banner (one short name) have different natural heights, so submitting/advancing resizes the map's flex container, which the component's `ResizeObserver` picks up and turns into a `map.resize()` call — right as `fitBounds`/`flyTo` fires. Gave both banners a fixed, equal height as a diagnostic. Still crashed. Ruled out resize-during-animation.

Both (1) and (3) were reverted after being ruled out — see git history around 2026-09-25 if you want the exact diffs, they're not worth resurrecting.

## What actually found it: remote debugging

Static reading of the code had run out of road — two reasonable hypotheses, both wrong, meant further guessing had a low hit rate. Switched to inspecting the crash live via Chrome DevTools remote debugging (phone connected over USB, PC's `chrome://inspect#devices`).

**Getting the USB connection to work was most of the actual effort**, on a Samsung phone from Windows:
- Standard steps (enable Developer Options, enable USB debugging, accept the "allow debugging" popup) didn't work — no popup ever appeared, `chrome://inspect` stayed stuck on `Offline — Pending authentication`.
- Ruled out, in order: USB mode set to charge-only (switched to MTP/file transfer — necessary but not sufficient), Samsung's "Auto Blocker" (wasn't even on), a pending system update (installed it, restarted — no change), revoking+re-granting USB debugging authorization, a different cable/port, restarting Chrome's USB discovery, installing the official Samsung USB driver for Windows (Device Manager showed zero change afterward — the phone only ever appeared as a generic "Portable Device / MTP", never as an ADB interface).
- **What worked:** installing Android `platform-tools` directly and running `adb devices` from the command line (bypassing Chrome's bundled ADB entirely). The very first `adb devices` run is what finally triggered the "allow USB debugging" popup on the phone — Chrome's own inspect page had never been able to trigger it on its own. Once authorized there (`adb devices` showing the serial as `device`, not `unauthorized`/`offline`), `chrome://inspect#devices` immediately picked up the same authorized session and could inspect the tab normally.
- Lesson for next time: if `chrome://inspect` alone won't get past "Pending authentication" on a Samsung phone, don't keep troubleshooting through the Chrome UI — install `platform-tools` and run `adb devices` directly. It re-triggers the device-side auth popup in a way Chrome's own flow sometimes doesn't.

## Root cause

Once the console was visible, the actual error was immediate and unambiguous:

```
Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
```

This is the classic signature of **something outside React mutating the DOM that React also manages** — most commonly a browser extension or, as here, **automatic page translation** (Chrome Translate / Safari's on-device translation). Translate rewrites live text nodes in place; when React's next reconciliation pass (triggered by the round-transition state update) tries to remove/replace a node it still thinks is in its original position, the DOM has already been restructured underneath it, and `removeChild` throws — crashing the tab.

The tell had actually shown up earlier and was dismissed as cosmetic: on Chrome Android, the "Valider" button was rendering as "Validateur" — the source string is definitely `"Valider"` (checked `src/lib/i18n.ts`), so something was rewriting it live. That *was* the translation engine, caught in the act, days before the actual root cause was found.

**Why translation was firing automatically at all:** `src/app/layout.tsx` declared `<html lang="en">` unconditionally, regardless of which language the game was actually rendering (`LanguageProvider` swaps all UI strings client-side via `lib/i18n.ts` but never touched the `<html lang>` attribute). A page whose declared language doesn't match its actual content is exactly the signal browsers use to auto-offer/auto-trigger translation. Playing the game in French, under a page still declared as English, was enough to trigger it on browsers/OSes with more aggressive auto-translate defaults (Chrome Android, iOS Safari) but not others (Samsung Internet's translate engine, or its trigger heuristics, apparently didn't fire the same way).

## Fix

Two changes, both still in place:

1. **`src/components/LanguageProvider.tsx`** — syncs `document.documentElement.lang` to the actual selected language on mount and on every change:
   ```ts
   useEffect(() => {
     document.documentElement.lang = lang;
   }, [lang]);
   ```
2. **`src/app/layout.tsx`** — belt-and-suspenders: explicitly tells browsers not to translate the page at all, since the game already ships its own EN/FR switcher and has no use for browser-level translation:
   - `translate="no"` attribute + `notranslate` class on `<html>`
   - `<meta name="google" content="notranslate">` (via the `metadata.other` field)

The `notranslate` directives are the actual fix for the crash (they stop translation from touching the DOM at all, regardless of any future `lang` mismatch); the `lang` sync is good practice on its own (accessibility, correct hyphenation/spellcheck/voice-reader behavior) and removes the original triggering condition.

## If something like this comes up again

- `Uncaught NotFoundError: Failed to execute 'removeChild'/'insertBefore' on 'Node'` in a React app, especially one that only reproduces on specific mobile browsers/OSes and not others → suspect an external DOM mutator before anything else: browser translate, a browser extension, or (on desktop) accessibility/reader-mode tooling. Don't spend time on animation timing or layout/resize theories first — check for translation/extension interference early, it's cheap to rule in or out.
- A page whose `<html lang>` doesn't match its actual rendered language is a real trigger for automatic translation on some browsers, not just a cosmetic/SEO nitpick.
- When static reading of the code runs out of leads, remote-debug sooner rather than trying a third or fourth blind hypothesis — the actual console error ended the guessing immediately once visible.
- For USB debugging on a Samsung phone from Windows that's stuck on "Pending authentication": skip more Chrome-side troubleshooting and go straight to `adb devices` from a command line with `platform-tools` installed.
