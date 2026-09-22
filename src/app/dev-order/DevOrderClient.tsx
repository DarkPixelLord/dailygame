"use client";

import { useState } from "react";
import ChronologicalOrder from "@/components/ChronologicalOrder";
import { pickRandomEvents } from "@/lib/poc-events";
// Temporarily serving the frozen v1 corpus while v2 is in progress — see
// legacy-events.ts. Swap back to poc-events.ts once v2 ships.
import { LEGACY_EVENTS as POC_EVENTS } from "@/lib/legacy-events";
import { PRIMARY_BUTTON, GHOST_BUTTON } from "@/lib/theme";

// The 5 events with the longest `name` strings (checked across both EN and
// FR) — useful for regression-testing that event names never get clipped
// in the final-round cards, without hunting for them via random samples.
const LONGEST_NAME_IDS = ["magellancircumnavigation", "darwinorigin", "transatlanticcable", "franzferdinand", "poliovaccine"];

function eventsById(ids: string[]) {
  return ids.map((id) => POC_EVENTS.find((e) => e.id === id)!);
}

export default function DevOrderClient() {
  const [events, setEvents] = useState(() => pickRandomEvents(POC_EVENTS, 5));
  const [key, setKey] = useState(0);

  return (
    <div className="flex h-full w-full max-w-md flex-col items-center gap-2">
      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => {
            setEvents(pickRandomEvents(POC_EVENTS, 5));
            setKey((k) => k + 1);
          }}
          className={PRIMARY_BUTTON}
        >
          New sample
        </button>
        <button
          type="button"
          onClick={() => {
            setEvents(eventsById(LONGEST_NAME_IDS));
            setKey((k) => k + 1);
          }}
          className={GHOST_BUTTON}
        >
          Longest titles
        </button>
      </div>
      <ChronologicalOrder key={key} events={events} onComplete={() => {}} />
    </div>
  );
}
