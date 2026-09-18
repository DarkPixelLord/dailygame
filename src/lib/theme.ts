// "Arcade Bold" shared style tokens: deep ink navy, electric amber accent,
// angular shapes with chunky 3D-press buttons.

export const PRIMARY_BUTTON =
  "rounded-md border-b-4 border-amber-700 bg-amber-400 px-5 py-2.5 font-extrabold uppercase tracking-wide text-slate-900 shadow-lg shadow-black/30 transition active:translate-y-1 active:border-b-0 disabled:opacity-40 disabled:active:translate-y-0 disabled:active:border-b-4 hover:bg-amber-300";

// Same shape as PRIMARY_BUTTON, but orange/red for the one-time "continue
// to the final round" moment — meant to read as higher-stakes than a
// regular "next round" press.
export const FINAL_ROUND_BUTTON =
  "rounded-md border-b-4 border-red-700 bg-orange-500 px-5 py-2.5 font-extrabold uppercase tracking-wide text-white shadow-lg shadow-orange-900/50 transition active:translate-y-1 active:border-b-0 disabled:opacity-40 disabled:active:translate-y-0 disabled:active:border-b-4 hover:bg-orange-400";

// Same shape as PRIMARY_BUTTON, but blue for "share" actions — a distinct
// hue from the amber/orange gameplay buttons so it reads as a secondary,
// non-gameplay action.
export const SHARE_BUTTON =
  "rounded-md border-b-4 border-blue-700 bg-blue-500 px-5 py-2.5 font-extrabold uppercase tracking-wide text-white shadow-lg shadow-blue-900/40 transition active:translate-y-1 active:border-b-0 disabled:opacity-40 disabled:active:translate-y-0 disabled:active:border-b-4 hover:bg-blue-400";

// Same shape as the "done" screen's inline share button — an outlined
// counterpart to PRIMARY_BUTTON for a secondary full-width action (e.g. the
// landing page's "free mode" button next to the daily challenge).
export const SECONDARY_BUTTON =
  "rounded-md border-2 border-amber-400/50 px-5 py-2.5 font-extrabold uppercase tracking-wide text-amber-300 transition hover:bg-amber-400/10 disabled:opacity-40";

export const GHOST_BUTTON =
  "rounded-md border-2 border-amber-400/40 px-3 py-1 font-bold text-amber-300 transition hover:bg-amber-400/10 disabled:opacity-30";

export const PANEL = "rounded-md border-2 border-white/10 bg-white/5 shadow-lg shadow-black/20";

// Wordmark treatment for "Laurus" wherever it appears (landing + in-game
// header) — Cinzel (Roman inscriptional serif) in amber, standing apart from
// the arcade-bold sans used everywhere else.
export const GAME_TITLE = "font-title font-black uppercase tracking-wide text-amber-400";

export const PIN_GUESS_COLOR = "#ffb020";
// emerald-400 — matches the reveal banner's border/text color so the answer
// pin and guess-to-answer line read as "correct" rather than "error".
export const PIN_ANSWER_COLOR = "#34d399";
