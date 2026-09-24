"use client";

import { useState } from "react";
import FinalRoundScreen from "@/components/FinalRoundScreen";
import { pickRandomEvents } from "@/lib/poc-events";
import { ACTIVE_EVENTS as POC_EVENTS } from "@/lib/event-pool";
import { GHOST_BUTTON } from "@/lib/theme";

// Starting score (i.e. the 5 map rounds' total, before the ordering round
// adds its own points) for each finalRank tier. Exact landing tier also
// depends on how the ordering round itself goes — this just gets you in
// the neighborhood without having to actually play 5 map rounds first.
const PRESETS = [
  { label: "Novice", initialScore: 0 },
  { label: "Amateur", initialScore: 800 },
  { label: "Scholar", initialScore: 1800 },
  { label: "Historian", initialScore: 2800 },
  { label: "Expert", initialScore: 3600 },
  { label: "Master", initialScore: 4200 },
];

export default function DevResultsClient() {
  const [presetIndex, setPresetIndex] = useState(0);
  const [events, setEvents] = useState(() => pickRandomEvents(POC_EVENTS, 5));
  const [key, setKey] = useState(0);

  function reroll(nextPresetIndex: number) {
    setPresetIndex(nextPresetIndex);
    setEvents(pickRandomEvents(POC_EVENTS, 5));
    setKey((k) => k + 1);
  }

  return (
    <div className="relative h-dvh w-full">
      <FinalRoundScreen
        key={key}
        mode="daily"
        previewOnly
        initialScore={PRESETS[presetIndex].initialScore}
        events={events}
        onPlayAgain={() => reroll(presetIndex)}
      />

      {/* Dev-only overlay, floats over the real screen without affecting its
          layout — this is meant to look exactly like the shipped final round. */}
      <div className="pointer-events-none fixed inset-x-0 bottom-2 z-50 flex justify-center">
        <div className="pointer-events-auto flex max-w-[calc(100vw-1rem)] flex-wrap justify-center gap-1 rounded-md border border-white/10 bg-black/70 p-1 backdrop-blur-sm">
          {PRESETS.map((p, i) => (
            <button
              key={p.label}
              type="button"
              onClick={() => reroll(i)}
              className={`${GHOST_BUTTON} !px-2 !py-0.5 !text-[10px] ${i === presetIndex ? "bg-amber-400/15" : ""}`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
