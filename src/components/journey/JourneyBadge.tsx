"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import FlameIcon from "../FlameIcon";
import JourneyTimeline from "./JourneyTimeline";
import { getJourney, markJourneySeen } from "@/lib/journey-progress";

type Props = { streak: number; className?: string };

// Landing-page entry point to the journey: the streak (including "0", as a
// nudge) and a "Your journey" label in one tappable pill that opens the full
// timeline. Any climb the player hasn't watched yet replays on open.
export default function JourneyBadge({ streak, className = "" }: Props) {
  const { t } = useLanguage();
  const [journey, setJourney] = useState<{ xp: number; seenXp: number } | null>(null);

  function open() {
    setJourney(getJourney());
  }

  function close() {
    if (journey) markJourneySeen(journey.xp);
    setJourney(null);
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        title={`${streak} ${t.dayStreak}`}
        className={`flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-black/30 px-2.5 py-1 font-bold transition hover:border-amber-400/70 hover:bg-amber-400/10 ${className}`}
      >
        <FlameIcon className="h-3.5 w-3.5" />
        <span className="text-amber-300">{streak}</span>
        <span className="h-3 w-px bg-white/20" />
        <span className="text-white/80">{t.journeyTitle}</span>
        <span className="text-amber-300" aria-hidden>
          ›
        </span>
      </button>
      <AnimatePresence>
        {journey && <JourneyTimeline prevXp={journey.seenXp} newXp={journey.xp} onClose={close} />}
      </AnimatePresence>
    </>
  );
}
