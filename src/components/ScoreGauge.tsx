"use client";

import { motion } from "framer-motion";

type Props = {
  // Fraction of the max score reached, 0 to 1.
  ratio: number;
  // When set, the bar fills from empty after `delay` over `duration` seconds
  // (the end-of-game reveal); otherwise it renders already filled.
  animate?: { delay: number; duration: number };
};

// Thin amber bar under "Final score" showing how much of the max score the
// player reached. The faint track stays visible so a low score still reads
// as a mostly-empty gauge rather than a stray short line.
export default function ScoreGauge({ ratio, animate }: Props) {
  const width = `${Math.min(Math.max(ratio, 0), 1) * 100}%`;
  return (
    <div className="my-1.5 h-1 w-32 overflow-hidden rounded-full bg-white/10 sm:w-40">
      <motion.div
        className="h-full rounded-full bg-amber-400"
        initial={{ width: animate ? "0%" : width }}
        animate={{ width }}
        transition={animate ? { delay: animate.delay, duration: animate.duration, ease: "easeOut" } : undefined}
      />
    </div>
  );
}
