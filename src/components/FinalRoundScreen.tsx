"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChronologicalOrder from "./ChronologicalOrder";
import LaurelIcon from "./LaurelIcon";
import { useLanguage } from "./LanguageProvider";
import type { UiStrings } from "@/lib/i18n";
import type { GameMode } from "@/lib/poc-events";
import { MAX_LOCATION_POINTS, MAX_ORDER_POINTS, rankTier, type RankTier } from "@/lib/scoring";
import { RANK_ICON_COMPONENTS, RANK_LABEL_KEYS } from "@/lib/rank-icons";
import type { OrderableEvent } from "@/lib/game-types";
import { PRIMARY_BUTTON, PANEL, GAME_TITLE } from "@/lib/theme";
import { getDeviceId } from "@/lib/device-id";
import { saveTodaysDailyResult } from "@/lib/daily-result";
import { clearTodaysProgress } from "@/lib/daily-progress";
import { recordTodaysDailyPlayed, getCurrentStreak } from "@/lib/daily-streak";
import TodaysStatsPanel from "./TodaysStatsPanel";
import StreakBadge from "./StreakBadge";

// The final-score rank, shown once at the end of the game — a coarser,
// higher-stakes tier list than the per-round scoreFeedback in HistoryGuessPoc.
function finalRank(totalScore: number, maxTotalScore: number, t: UiStrings) {
  const tier = rankTier(totalScore, maxTotalScore);
  return { icon: RANK_ICON_COMPONENTS[tier], label: t[RANK_LABEL_KEYS[tier]] };
}

// Timing (seconds) for the final-score reveal sequence: a short beat of
// anticipation, then the badge bursts open and grows in, then the score and
// rank text fade in once the badge has landed.
const BADGE_BURST_DELAY = 0.3;
const BADGE_POP_DELAY = 0.55;
const TEXT_REVEAL_DELAY = 1.3;
const BADGE_BURST_COUNT = 36;

type BurstParticle = {
  angle: number;
  distance: number;
  size: number;
  duration: number;
  delayJitter: number;
  upwardDrift: number;
};

// Randomized per-particle flight paths for the badge-reveal burst — varied
// angle/distance/speed/size so the burst reads as chaotic sparks rather than
// a uniform, synchronized ring, with an added upward drift so the sparks
// trend skyward like a firework instead of spreading evenly in all directions.
function buildBurstParticles(count: number): BurstParticle[] {
  return Array.from({ length: count }, () => ({
    angle: Math.random() * 2 * Math.PI,
    distance: 55 + Math.random() * 85,
    size: 2.5 + Math.random() * 4,
    duration: 0.35 + Math.random() * 0.3,
    delayJitter: Math.random() * 0.2,
    upwardDrift: 20 + Math.random() * 35,
  }));
}

type Props = {
  mode: GameMode;
  // Score accumulated from the 5 map rounds, before the ordering round adds
  // its own points.
  initialScore: number;
  events: OrderableEvent[];
  onPlayAgain: () => void;
  // Dev-only escape hatch, used by both /dev-results (preset score previews)
  // and HomeClient (every local `next dev` play): renders the real screen
  // (label, stats panel) but skips every write — no api/finish row, no
  // api/track-play row, no localStorage "already played today" flag — so it
  // never counts as a real play or gets capped by the daily limit.
  previewOnly?: boolean;
};

export default function FinalRoundScreen({ mode, initialScore, events, onPlayAgain, previewOnly = false }: Props) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<"ordering" | "done">("ordering");
  const [totalScore, setTotalScore] = useState(initialScore);
  const [linkCopied, setLinkCopied] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [tierPercentages, setTierPercentages] = useState<Record<RankTier, number> | null>(null);
  const [streak, setStreak] = useState(0);

  const maxTotalScore = events.length * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;
  const rank = phase === "done" ? finalRank(totalScore, maxTotalScore, t) : null;

  // Daily-challenge scores go through api/finish (one row per device/day,
  // feeds the today's-stats breakdown below). Archive runs aren't part of
  // that leaderboard — they're just logged as activity via api/track-play,
  // for the admin dashboard's "Archive" tab.
  useEffect(() => {
    if (phase !== "done") return;
    const deviceId = getDeviceId();
    if (mode === "daily") {
      const recordResult = previewOnly
        ? Promise.resolve()
        : fetch("/api/finish", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ score: totalScore, deviceId, mode }),
          }).then(() => {
            saveTodaysDailyResult(totalScore);
            clearTodaysProgress();
            recordTodaysDailyPlayed();
            setStreak(getCurrentStreak());
          });
      recordResult
        .then(() => fetch("/api/stats"))
        .then((res) => res.json())
        .then((data) => setTierPercentages(data.percentages ?? null))
        .catch(() => {
          // Stats are a nice-to-have on the results screen — silently skip
          // the breakdown rather than blocking or erroring the final screen.
        });
    } else if (!previewOnly) {
      fetch("/api/track-play", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score: totalScore, deviceId, mode }),
      }).catch(() => {
        // Activity tracking is a nice-to-have — never block the results screen on it.
      });
    }
    // Runs once, right when the final score locks in.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);
  // Re-rolled only when the reveal actually happens, so the burst doesn't
  // reshuffle mid-animation on unrelated re-renders (e.g. the share button).
  const burstParticles = useMemo(() => buildBurstParticles(BADGE_BURST_COUNT), [phase]);

  async function share() {
    const streakParam = streak > 0 ? `?streak=${streak}` : "";
    const url = `${window.location.origin}/share/${totalScore}${streakParam}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: t.gameTitle, text: t.landingIntro, url });
      } catch {
        // user cancelled the share sheet — nothing to do
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing we can do without a visible fallback UI
    }
  }

  return (
    <div className="final-spotlight flex h-dvh w-full flex-col items-center">
      <div className="pointer-events-none fixed inset-x-0 top-3 z-40 flex justify-center sm:top-4">
        <div className="flex w-full max-w-md justify-end px-3 sm:px-4">
          <AnimatePresence>
            {phase === "done" && tierPercentages && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: TEXT_REVEAL_DELAY + 0.6, duration: 0.3 }}
                className="pointer-events-auto flex items-center gap-2"
              >
                <StreakBadge streak={streak} className="text-[10px] sm:text-xs" />
                <TodaysStatsPanel tierPercentages={tierPercentages} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex h-dvh w-full max-w-md flex-col gap-2 overflow-hidden px-3 py-2 sm:gap-4 sm:px-4 sm:py-6">
        <header className="flex w-full shrink-0 items-center justify-between gap-2">
          <div className="flex flex-col">
            <button
              type="button"
              onClick={onPlayAgain}
              className={`flex items-center gap-1.5 text-base sm:gap-2 sm:text-2xl ${GAME_TITLE}`}
            >
              <LaurelIcon className="h-5 w-5 shrink-0 text-amber-400 sm:h-7 sm:w-7" />
              {t.gameTitle}
            </button>
            <span className="text-[10px] font-bold uppercase tracking-wide text-white/40 sm:text-xs">
              {mode === "daily" ? t.dailyChallenge : t.archiveMode}
            </span>
          </div>
          <AnimatePresence>
            {!orderSubmitted && (
              <motion.span
                key="score-badge"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-md border-2 border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-xs font-bold text-amber-300 sm:px-3 sm:py-1 sm:text-sm"
              >
                {totalScore} {t.pts}
              </motion.span>
            )}
          </AnimatePresence>
        </header>

        <ChronologicalOrder
          events={events}
          onSubmit={() => setOrderSubmitted(true)}
          onComplete={(orderScore) => {
            setTotalScore((s) => s + orderScore);
            setPhase("done");
          }}
        />

        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={PANEL + " flex shrink-0 flex-col items-stretch gap-3 px-4 py-3 sm:gap-4 sm:py-6"}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {rank?.icon && (
                <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(251,191,36,0.9) 0%, rgba(251,191,36,0) 70%)",
                    }}
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{ scale: 2.4, opacity: [0, 1, 0] }}
                    transition={{ delay: BADGE_BURST_DELAY, duration: 1, ease: "easeOut", times: [0, 0.15, 1] }}
                  />
                  {burstParticles.map((p, i) => (
                    <motion.span
                      key={i}
                      className="pointer-events-none absolute left-1/2 top-1/2 rounded-full bg-amber-300"
                      style={{ width: p.size, height: p.size }}
                      initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 1 }}
                      animate={{
                        x: `calc(-50% + ${Math.cos(p.angle) * p.distance}px)`,
                        y: `calc(-50% + ${Math.sin(p.angle) * p.distance - p.upwardDrift}px)`,
                        opacity: [0, 1, 0],
                        scale: 0,
                      }}
                      transition={{
                        delay: BADGE_BURST_DELAY + p.delayJitter,
                        duration: p.duration,
                        ease: "easeOut",
                        times: [0, 0.2, 1],
                      }}
                    />
                  ))}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-lg border-2 border-amber-400/40 bg-black/30"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: BADGE_POP_DELAY, type: "spring", stiffness: 140, damping: 14 }}
                  >
                    <rank.icon className="icon-glow h-10 w-10 text-amber-300 sm:h-14 sm:w-14" />
                  </motion.div>
                </div>
              )}
              <motion.div
                className="flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: TEXT_REVEAL_DELAY, duration: 0.45, ease: "easeOut" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
                  {t.finalScore}
                </p>
                <div className="my-1 h-px w-32 bg-gradient-to-r from-amber-400 to-transparent sm:w-40" />
                <p className="text-2xl font-black text-amber-400 sm:text-4xl">
                  {totalScore} <span className="text-base font-bold text-white/50 sm:text-lg">/ {maxTotalScore}</span>
                </p>
                {rank && (
                  <span className="text-xs font-extrabold uppercase tracking-wide text-amber-300 sm:text-sm">
                    {rank.label}
                  </span>
                )}
              </motion.div>
            </div>
            <div className="flex w-full gap-2">
              <button type="button" onClick={onPlayAgain} className={PRIMARY_BUTTON + " flex-1"}>
                {t.playAgain}
              </button>
              {mode === "daily" && (
                <button
                  type="button"
                  onClick={share}
                  className="flex-1 rounded-md border-2 border-amber-400/50 px-5 py-2.5 font-extrabold uppercase tracking-wide text-amber-300 transition hover:bg-amber-400/10"
                >
                  {linkCopied ? t.linkCopied : t.share}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
