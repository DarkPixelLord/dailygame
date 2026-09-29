"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import BadgeBurst from "../BadgeBurst";
import type { Milestone } from "@/lib/journey";

// Duration (seconds) of the pawn's climb along the timeline.
export const PAWN_DURATION = 1.2;

// How long (ms) the "new milestone" card stays up unless tapped away.
const REVEAL_DURATION = 3500;

// Flat single-color icon: the SVG is used as a mask over `currentColor`, so
// it takes the text color like the inlined rank icons do.
export function MilestoneIcon({ name, className = "" }: { name: string; className?: string }) {
  const url = `url(/icons/milestones/${name}.svg)`;
  return (
    <span
      className={`inline-block bg-current ${className}`}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

// The pawn walks in its own lane left of the line, climbing continuously
// between milestones, with a dotted connector pointing at its exact spot on
// the line. Milestone discs are opaque and sit above both the line and the
// connector, so neither shows through the icons.
export function Pawn({ size, connector }: { size: string; connector: number }) {
  return (
    <div className="flex items-center">
      <MilestoneIcon name="walk" className={`icon-glow block text-amber-300 ${size}`} />
      <span className="border-t-2 border-dotted border-amber-300/80" style={{ width: connector }} />
    </div>
  );
}

export type NodeState = "passed" | "current" | "future";

// Passed milestones in light yellow, only the current one in bright yellow (with the rank
// badge's pulsing glow), future ones with their icon hidden until reached.
// The glow sits on a wrapper: on the masked icon itself the mask would clip
// the drop-shadow away.
export function MilestoneDisc({
  milestone,
  state,
  size,
  iconSize,
}: {
  milestone: Milestone;
  state: NodeState;
  size: string;
  iconSize: string;
}) {
  const tone =
    state === "current"
      ? "border-amber-400 text-amber-300"
      : state === "passed"
        ? "border-amber-200/40 text-amber-200"
        : "border-white/10 text-white/40";
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full border-2 bg-stone-900 ${size} ${tone}`}>
      {state !== "future" && (
        <span className={`flex ${state === "current" ? "icon-glow" : ""}`}>
          <MilestoneIcon name={milestone.icon} className={iconSize} />
        </span>
      )}
    </span>
  );
}

// Full-screen "new milestone reached" card, with the rank badge's firework
// burst behind the icon. Goes away on tap or after REVEAL_DURATION.
export function MilestoneReveal({
  show,
  milestone,
  onDone,
}: {
  show: boolean;
  milestone: Milestone;
  onDone: () => void;
}) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!show) return;
    const id = setTimeout(onDone, REVEAL_DURATION);
    return () => clearTimeout(id);
  }, [show, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onDone}
        >
          <motion.div
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-amber-400/50 bg-stone-900 px-8 py-6 text-center"
            initial={{ scale: 0.5, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 14 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">{t.journeyNewMilestone}</span>
            <span className="relative flex h-16 w-16 items-center justify-center">
              <BadgeBurst delay={0.2} />
              <motion.span
                className="icon-glow relative flex text-amber-300"
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
              >
                <MilestoneIcon name={milestone.icon} className="h-16 w-16" />
              </motion.span>
            </span>
            <span className="text-lg font-black text-white">{milestone.label[lang]}</span>
            <span className="text-xs text-white/50">{milestone.date[lang]}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function labelTone(state: NodeState): string {
  return state === "current" ? "font-bold text-amber-300" : state === "passed" ? "text-amber-200" : "text-white/30";
}
