"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { GameMode } from "@/lib/poc-events";
import { getTodaysDailyResult } from "@/lib/daily-result";
import { getTodaysProgress, type StoredDailyProgress } from "@/lib/daily-progress";
import { ROUNDS_PER_GAME } from "@/lib/scoring";

// Both read localStorage (language, and inside the game, MapLibre touches
// `window`), so neither can be server-rendered.
const LandingClient = dynamic(() => import("@/components/LandingClient"), { ssr: false });
const HistoryGuessPoc = dynamic(() => import("@/components/HistoryGuessPoc"), { ssr: false });
const DailyResultScreen = dynamic(() => import("@/components/DailyResultScreen"), { ssr: false });
const FinalRoundScreen = dynamic(() => import("@/components/FinalRoundScreen"), { ssr: false });

// Inlined to `false` in a production build (dead-code-eliminated from there
// on), so everything gated on it below is a local-dev-only affordance.
const IS_DEV = process.env.NODE_ENV === "development";

// Dev-only escape hatch: `?testIds=id1,id2` plays a real round-by-round game
// with those exact events (see api/session) instead of the landing screen —
// for smoke-testing an event right after editing it, without waiting for it
// to come up in daily/archive rotation. Both LandingClient and
// HistoryGuessPoc are dynamic(ssr:false) above, so reading `window` here
// during the initial render can't cause a hydration mismatch — neither
// branch renders anything on the server either way.
function readTestIds(): string[] | undefined {
  if (!IS_DEV || typeof window === "undefined") return undefined;
  const raw = new URLSearchParams(window.location.search).get("testIds");
  if (!raw) return undefined;
  const ids = raw
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  return ids.length ? ids : undefined;
}

export default function HomeClient() {
  const [testIds] = useState(readTestIds);
  const [mode, setMode] = useState<GameMode | null>(() => (testIds ? "daily" : null));
  // Set when the player picks "daily" but this device already has a score
  // recorded for today — skips straight to the result instead of letting
  // them replay a challenge whose answers they've already seen. Never
  // triggers in dev: local testing shouldn't be capped by, or write to, the
  // real daily-result/streak/leaderboard state (see the `previewOnly` prop
  // below).
  const [dailyResultScore, setDailyResultScore] = useState<number | null>(null);
  // A saved-but-unfinished daily run for today, if any — lets the player
  // pick back up where they left off instead of restarting from round 1.
  const [dailyProgress, setDailyProgress] = useState<StoredDailyProgress | null>(null);
  // Which past day's pack to replay, for mode "archive".
  const [archiveDate, setArchiveDate] = useState<string | undefined>(undefined);

  function start(nextMode: GameMode, nextArchiveDate?: string) {
    if (nextMode === "daily" && !IS_DEV) {
      const existing = getTodaysDailyResult();
      if (existing) {
        setDailyResultScore(existing.score);
        return;
      }
      setDailyProgress(getTodaysProgress());
    } else {
      setDailyProgress(null);
    }
    setArchiveDate(nextMode === "archive" ? nextArchiveDate : undefined);
    setMode(nextMode);
  }

  function playAgain() {
    setDailyProgress(null);
    setMode(null);
  }

  if (dailyResultScore !== null) {
    return <DailyResultScreen score={dailyResultScore} onBack={() => setDailyResultScore(null)} />;
  }

  if (!mode) {
    return <LandingClient onStart={start} />;
  }

  if (dailyProgress && dailyProgress.round >= ROUNDS_PER_GAME) {
    return (
      <FinalRoundScreen
        mode="daily"
        initialScore={dailyProgress.totalScore}
        events={dailyProgress.revealedEvents}
        onPlayAgain={playAgain}
      />
    );
  }

  return (
    <HistoryGuessPoc
      mode={mode}
      archiveDate={archiveDate}
      testIds={testIds}
      previewOnly={IS_DEV}
      onPlayAgain={playAgain}
      initialRound={dailyProgress?.round}
      initialScore={dailyProgress?.totalScore}
      initialRevealedEvents={dailyProgress?.revealedEvents}
    />
  );
}
