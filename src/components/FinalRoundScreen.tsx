"use client";

import { useEffect, useState } from "react";
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
import { saveTodaysDailyResult, saveArchiveResult } from "@/lib/daily-result";
import { clearTodaysProgress } from "@/lib/daily-progress";
import { recordTodaysDailyPlayed, getCurrentStreak } from "@/lib/daily-streak";
import type { DailyLeaderboard } from "@/lib/daily-leaderboard";
import TodaysStatsPanel from "./TodaysStatsPanel";
import ScoreGauge from "./ScoreGauge";
import StreakBadge from "./StreakBadge";
import ReminderPrompt from "./ReminderPrompt";
import BadgeBurst from "./BadgeBurst";
import JourneyTimeline from "./journey/JourneyTimeline";
import { computeXpGain, type XpGain } from "@/lib/journey";
import { awardTodaysXp, getJourney, markJourneySeen } from "@/lib/journey-progress";

// The final-score rank, shown once at the end of the game — a coarser,
// higher-stakes tier list than the per-round scoreFeedback in HistoryGuessPoc.
function finalRank(totalScore: number, maxTotalScore: number, t: UiStrings) {
  const tier = rankTier(totalScore, maxTotalScore);
  return { icon: RANK_ICON_COMPONENTS[tier], label: t[RANK_LABEL_KEYS[tier]] };
}

// Timing (seconds) for the final-score reveal sequence: "Final score" shows
// alone while the gauge fills to the player's share of the max score, then
// the badge bursts open and grows in, then the score and rank text fade in
// once the badge has landed.
const GAUGE_FILL_DELAY = 0.5;
const GAUGE_FILL_DURATION = 1.2;
const BADGE_BURST_DELAY = GAUGE_FILL_DELAY + GAUGE_FILL_DURATION + 0.05;
const BADGE_POP_DELAY = BADGE_BURST_DELAY + 0.25;
const TEXT_REVEAL_DELAY = BADGE_POP_DELAY + 0.3;

type Props = {
  mode: GameMode;
  // Which past day's pack this archive run replayed, to mark it as played.
  archiveDate?: string;
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
  // Preview-only overrides for the journey screen (screenshots from
  // /dev-results): XP before today's game, streak including today.
  previewXp?: number;
  previewStreak?: number;
};

export default function FinalRoundScreen({
  mode,
  archiveDate,
  initialScore,
  events,
  onPlayAgain,
  previewOnly = false,
  previewXp,
  previewStreak,
}: Props) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<"ordering" | "done">("ordering");
  const [totalScore, setTotalScore] = useState(initialScore);
  const [linkCopied, setLinkCopied] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [tierPercentages, setTierPercentages] = useState<Record<RankTier, number> | null>(null);
  const [leaderboard, setLeaderboard] = useState<DailyLeaderboard | null>(null);
  const [streak, setStreak] = useState(0);
  const [journeyAward, setJourneyAward] = useState<{ prevXp: number; newXp: number; gain: XpGain } | null>(null);
  const [journeyOpen, setJourneyOpen] = useState(false);
  // After the first viewing, reopening the journey skips the climb.
  const [journeyWatched, setJourneyWatched] = useState(false);

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
      // Local result/streak bookkeeping happens as soon as the round ends,
      // independent of the network — the player has already seen their
      // score, so a dropped request shouldn't cost them their streak (this
      // used to run inside api/finish's .then(), which silently skipped it
      // on any network failure, more common on mobile than desktop).
      if (!previewOnly) {
        saveTodaysDailyResult(totalScore);
        clearTodaysProgress();
        recordTodaysDailyPlayed();
        const currentStreak = getCurrentStreak();
        const award = awardTodaysXp(computeXpGain(totalScore / maxTotalScore, currentStreak));
        // Deferred a tick so setState isn't called synchronously in the
        // effect body (react-hooks/set-state-in-effect) — still runs
        // immediately, just outside this render's commit.
        Promise.resolve().then(() => {
          setStreak(currentStreak);
          setJourneyAward(award);
        });
      } else {
        // Dev preview: show the journey screen as if today counted (streak
        // including today), without writing anything.
        const previewedStreak = previewStreak ?? getCurrentStreak() + 1;
        const gain = computeXpGain(totalScore / maxTotalScore, previewedStreak);
        const xp = previewXp ?? getJourney().xp;
        Promise.resolve().then(() => {
          if (previewStreak !== undefined) setStreak(previewStreak);
          setJourneyAward({ prevXp: xp, newXp: xp + gain.total, gain });
        });
      }

      const finished = previewOnly
        ? Promise.resolve()
        : fetch("/api/finish", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ score: totalScore, deviceId, mode }),
          }).catch(() => {
            // The server row (today's-stats breakdown, admin dashboard) is a
            // nice-to-have — the player's own result and streak are already
            // saved locally above.
          });

      finished
        .then(() => fetch(`/api/stats?score=${totalScore}&deviceId=${encodeURIComponent(deviceId)}`))
        .then((res) => res.json())
        .then((data) => {
          setTierPercentages(data.percentages ?? null);
          setLeaderboard(data.leaderboard ?? null);
        })
        .catch(() => {
          // Stats are a nice-to-have on the results screen — silently skip
          // the breakdown rather than blocking or erroring the final screen.
        });
    } else if (!previewOnly) {
      if (archiveDate) saveArchiveResult(archiveDate, totalScore);
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

  async function share() {
    const scoreSegment = streak > 0 ? `${totalScore}-${streak}` : totalScore;
    const url = `${window.location.origin}/share/${scoreSegment}`;
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

        <div className="flex min-h-0 w-full flex-1 flex-col">
          <ChronologicalOrder
            events={events}
            onSubmit={() => setOrderSubmitted(true)}
            onComplete={(orderScore) => {
              setTotalScore((s) => s + orderScore);
              setPhase("done");
            }}
          />
        </div>
        {/* The daily result's exit: "Continue" opens the journey, whose own
            button then goes home (its close button comes back here). */}
        {journeyAward && journeyOpen && (
          <JourneyTimeline
            prevXp={journeyWatched ? journeyAward.newXp : journeyAward.prevXp}
            newXp={journeyAward.newXp}
            gain={journeyAward.gain}
            exitLabel={t.backToHome}
            onExit={onPlayAgain}
            onClose={() => {
              setJourneyOpen(false);
              setJourneyWatched(true);
            }}
            onSeen={() => {
              if (!previewOnly) markJourneySeen(journeyAward.newXp);
            }}
          />
        )}

        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={PANEL + " relative flex shrink-0 flex-col items-stretch gap-3 px-4 py-3 sm:gap-4 sm:py-6"}
          >
            {tierPercentages && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: TEXT_REVEAL_DELAY, duration: 0.45 }}
                className="absolute right-2 top-2 z-10"
              >
                <TodaysStatsPanel tierPercentages={tierPercentages} leaderboard={leaderboard} />
              </motion.div>
            )}
            <div className="flex items-center gap-3 sm:gap-4">
              {rank?.icon && (
                <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                  <BadgeBurst delay={BADGE_BURST_DELAY} />
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
              <div className="flex flex-col items-start text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
                  {t.finalScore}
                </p>
                <ScoreGauge
                  ratio={totalScore / maxTotalScore}
                  animate={{ delay: GAUGE_FILL_DELAY, duration: GAUGE_FILL_DURATION }}
                />
                <motion.div
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: TEXT_REVEAL_DELAY, duration: 0.45, ease: "easeOut" }}
                >
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
            </div>
            <div className="flex w-full gap-2">
              {mode === "daily" ? (
                <button
                  type="button"
                  onClick={() => (journeyAward ? setJourneyOpen(true) : onPlayAgain())}
                  className={PRIMARY_BUTTON + " flex-1"}
                >
                  {t.continue}
                </button>
              ) : (
                <button type="button" onClick={onPlayAgain} className={PRIMARY_BUTTON + " flex-1"}>
                  {t.home}
                </button>
              )}
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
            {mode === "daily" && <ReminderPrompt />}
          </motion.div>
        )}
      </div>
    </div>
  );
}
