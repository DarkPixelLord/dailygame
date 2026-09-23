"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { GameMode } from "@/lib/poc-events";
import { getTodaysDailyResult } from "@/lib/daily-result";

// Both read localStorage (language, and inside the game, MapLibre touches
// `window`), so neither can be server-rendered.
const LandingClient = dynamic(() => import("@/components/LandingClient"), { ssr: false });
const HistoryGuessPoc = dynamic(() => import("@/components/HistoryGuessPoc"), { ssr: false });
const DailyResultScreen = dynamic(() => import("@/components/DailyResultScreen"), { ssr: false });

export default function HomeClient() {
  const [mode, setMode] = useState<GameMode | null>(null);
  // Set when the player picks "daily" but this device already has a score
  // recorded for today — skips straight to the result instead of letting
  // them replay a challenge whose answers they've already seen.
  const [dailyResultScore, setDailyResultScore] = useState<number | null>(null);

  function start(nextMode: GameMode) {
    if (nextMode === "daily") {
      const existing = getTodaysDailyResult();
      if (existing) {
        setDailyResultScore(existing.score);
        return;
      }
    }
    setMode(nextMode);
  }

  if (dailyResultScore !== null) {
    return <DailyResultScreen score={dailyResultScore} onBack={() => setDailyResultScore(null)} />;
  }

  if (!mode) {
    return <LandingClient onStart={start} />;
  }

  return <HistoryGuessPoc mode={mode} onPlayAgain={() => setMode(null)} />;
}
