"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LaurelIcon from "./LaurelIcon";
import { useLanguage } from "./LanguageProvider";
import { MAX_LOCATION_POINTS, MAX_ORDER_POINTS, ROUNDS_PER_GAME, rankTier, type RankTier } from "@/lib/scoring";
import { RANK_ICON_COMPONENTS, RANK_LABEL_KEYS } from "@/lib/rank-icons";
import { PRIMARY_BUTTON, PANEL, GAME_TITLE, SHARE_BUTTON } from "@/lib/theme";
import TodaysStatsPanel from "./TodaysStatsPanel";

const MAX_TOTAL_SCORE = ROUNDS_PER_GAME * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;

type Props = {
  score: number;
  onBack: () => void;
};

// Shown instead of the game when this device already has a score recorded
// for today's daily challenge (see getTodaysDailyResult in daily-result.ts)
// — replaces letting the player start the round again, which would let them
// replay a challenge whose answers they've already seen.
export default function DailyResultScreen({ score, onBack }: Props) {
  const { t } = useLanguage();
  const [linkCopied, setLinkCopied] = useState(false);
  const [tierPercentages, setTierPercentages] = useState<Record<RankTier, number> | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setTierPercentages(data.percentages ?? null))
      .catch(() => {
        // Stats are a nice-to-have here too — silently skip on failure.
      });
  }, []);

  const tier = rankTier(score, MAX_TOTAL_SCORE);
  const RankIcon = RANK_ICON_COMPONENTS[tier];
  const rankLabel = t[RANK_LABEL_KEYS[tier]];

  async function share() {
    const url = `${window.location.origin}/share/${score}`;
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
            {tierPercentages && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="pointer-events-auto"
              >
                <TodaysStatsPanel tierPercentages={tierPercentages} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex h-dvh w-full max-w-md flex-col items-center justify-center gap-4 overflow-hidden px-3 py-2 sm:px-4 sm:py-6">
        <h1 className={`flex items-center gap-1.5 text-base sm:gap-2 sm:text-2xl ${GAME_TITLE}`}>
          <LaurelIcon className="h-5 w-5 shrink-0 text-amber-400 sm:h-7 sm:w-7" />
          {t.gameTitle}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={PANEL + " flex w-full flex-col items-stretch gap-3 px-4 py-3 sm:gap-4 sm:py-6"}
        >
          <p className="text-center text-xs font-semibold text-white/60 sm:text-sm">{t.alreadyPlayedToday}</p>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border-2 border-amber-400/40 bg-black/30 sm:h-20 sm:w-20">
              <RankIcon className="icon-glow h-10 w-10 text-amber-300 sm:h-14 sm:w-14" />
            </div>
            <div className="flex flex-col items-start text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-white sm:text-sm">{t.finalScore}</p>
              <div className="my-1 h-px w-32 bg-gradient-to-r from-amber-400 to-transparent sm:w-40" />
              <p className="text-2xl font-black text-amber-400 sm:text-4xl">
                {score} <span className="text-base font-bold text-white/50 sm:text-lg">/ {MAX_TOTAL_SCORE}</span>
              </p>
              <span className="text-xs font-extrabold uppercase tracking-wide text-amber-300 sm:text-sm">
                {rankLabel}
              </span>
            </div>
          </div>

          <div className="flex w-full gap-2">
            <button type="button" onClick={onBack} className={PRIMARY_BUTTON + " flex-1"}>
              {t.back}
            </button>
            <button type="button" onClick={share} className={SHARE_BUTTON + " flex-1"}>
              {linkCopied ? t.linkCopied : t.share}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
