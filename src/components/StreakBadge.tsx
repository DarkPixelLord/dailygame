"use client";

import FlameIcon from "./FlameIcon";
import { useLanguage } from "./LanguageProvider";

type Props = { streak: number; className?: string };

// Small flame + day-count pill, shown wherever the player's current daily
// streak should surface (including "0", so a lapsed/not-yet-started streak
// still reads as a nudge rather than disappearing — see daily-streak.ts for
// how it lapses).
export default function StreakBadge({ streak, className = "" }: Props) {
  const { t } = useLanguage();

  return (
    <span title={`${streak} ${t.dayStreak}`} className={`flex items-center gap-1 font-bold text-amber-300 ${className}`}>
      <FlameIcon className="h-3.5 w-3.5" />
      {streak}
    </span>
  );
}
