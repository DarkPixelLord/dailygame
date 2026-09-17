// "Arcade Bold" shared style tokens: deep ink navy, electric amber accent,
// angular shapes with chunky 3D-press buttons.

export const PRIMARY_BUTTON =
  "rounded-md border-b-4 border-amber-700 bg-amber-400 px-5 py-2.5 font-extrabold uppercase tracking-wide text-slate-900 shadow-lg shadow-black/30 transition active:translate-y-1 active:border-b-0 disabled:opacity-40 disabled:active:translate-y-0 disabled:active:border-b-4 hover:bg-amber-300";

// Same shape as PRIMARY_BUTTON, but orange/red for the one-time "continue
// to the final round" moment — meant to read as higher-stakes than a
// regular "next round" press.
export const FINAL_ROUND_BUTTON =
  "rounded-md border-b-4 border-red-700 bg-orange-500 px-5 py-2.5 font-extrabold uppercase tracking-wide text-white shadow-lg shadow-orange-900/50 transition active:translate-y-1 active:border-b-0 disabled:opacity-40 disabled:active:translate-y-0 disabled:active:border-b-4 hover:bg-orange-400";

export const GHOST_BUTTON =
  "rounded-md border-2 border-amber-400/40 px-3 py-1 font-bold text-amber-300 transition hover:bg-amber-400/10 disabled:opacity-30";

export const PANEL = "rounded-md border-2 border-white/10 bg-white/5 shadow-lg shadow-black/20";

export const PIN_GUESS_COLOR = "#ffb020";
export const PIN_ANSWER_COLOR = "#ff3b5c";
