"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import FlameIcon from "../FlameIcon";
import { MAX_STREAK_PCT, MILESTONES, pctInSegment, segmentIndex, type Milestone, type XpGain } from "@/lib/journey";
import { MilestoneDisc, MilestoneIcon, PAWN_DURATION, Pawn, labelTone, type NodeState } from "./JourneyParts";

type Stage = "animating" | "reveal" | "settled";

// The pawn climbs within the segment it started in; when it crosses a
// milestone it fills that segment, pauses on the reveal, then carries on
// from the new segment's start.
function usePawnClimb(prevXp: number, newXp: number, delay: number) {
  const prevSeg = segmentIndex(prevXp);
  const newSeg = segmentIndex(newXp);
  const crossed = newSeg > prevSeg;
  const [stage, setStage] = useState<Stage>("animating");

  useEffect(() => {
    const id = setTimeout(() => setStage(crossed ? "reveal" : "settled"), (delay + PAWN_DURATION + 0.1) * 1000);
    return () => clearTimeout(id);
  }, [crossed, delay]);

  const afterCrossing = crossed && stage !== "animating";
  return {
    stage,
    dismissReveal: () => setStage("settled"),
    seg: afterCrossing ? newSeg : prevSeg,
    from: afterCrossing ? 0 : pctInSegment(prevXp, prevSeg),
    to: afterCrossing ? pctInSegment(newXp, newSeg) : crossed ? 100 : pctInSegment(newXp, prevSeg),
    animDelay: afterCrossing ? 0.2 : delay,
    reached: MILESTONES[newSeg],
  };
}

function useCountUp(target: number, delay: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, target, { delay, duration: PAWN_DURATION, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [target, delay]);
  return value;
}

// Vertical slice of the timeline: one milestone below the current one (for
// context), the current one, and the next two above as goals.
const ROW = 42;
const SLICE_LINE_X = 36;

function TimelineSlice({ seg, from, to, animDelay }: { seg: number; from: number; to: number; animDelay: number }) {
  const { lang } = useLanguage();
  const first = Math.max(0, seg - 1);
  const nodes = MILESTONES.slice(first, seg + 3);
  const height = (nodes.length - 1) * ROW + 28;
  const bottomOf = (k: number) => height - 14 - k * ROW;
  const curK = seg - first;
  const climbTop = (pct: number) => bottomOf(curK) - (pct / 100) * ROW;
  const climb = { delay: animDelay, duration: PAWN_DURATION, ease: "easeInOut" } as const;

  return (
    <div className="relative shrink-0" style={{ height, width: 190 }}>
      <div className="absolute w-0.5 bg-white/15" style={{ left: SLICE_LINE_X - 1, top: 14, bottom: 14 }} />
      <motion.div
        key={`fill-${seg}`}
        className="absolute w-0.5 bg-amber-400/70"
        style={{ left: SLICE_LINE_X - 1 }}
        initial={{ top: climbTop(from), height: height - 14 - climbTop(from) }}
        animate={{ top: climbTop(to), height: height - 14 - climbTop(to) }}
        transition={climb}
      />
      {nodes.map((m, k) => {
        const state: NodeState = k < curK ? "passed" : k === curK ? "current" : "future";
        return (
          <div
            key={m.xp}
            className="absolute z-10 flex items-center gap-2"
            style={{ top: bottomOf(k), left: SLICE_LINE_X - 14, transform: "translateY(-50%)" }}
          >
            <MilestoneDisc milestone={m} state={state} size="h-7 w-7" iconSize="h-4 w-4" />
            <span className={`text-[11px] leading-tight ${labelTone(state)}`}>{m.label[lang]}</span>
          </div>
        );
      })}
      <motion.div
        key={`pawn-${seg}`}
        className="absolute left-0 z-[5]"
        style={{ y: "-50%" }}
        initial={{ top: climbTop(from) }}
        animate={{ top: climbTop(to) }}
        transition={climb}
      >
        <Pawn size="h-5 w-5" connector={SLICE_LINE_X - 20} />
      </motion.div>
    </div>
  );
}

function MilestoneReveal({ show, milestone, onDone }: { show: boolean; milestone: Milestone; onDone: () => void }) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!show) return;
    const id = setTimeout(onDone, 3500);
    return () => clearTimeout(id);
  }, [show, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[55] flex items-center justify-center bg-black/60 backdrop-blur-sm"
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
            <motion.span
              className="icon-glow text-amber-300"
              initial={{ rotate: -20, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
            >
              <MilestoneIcon name={milestone.icon} className="h-16 w-16" />
            </motion.span>
            <span className="text-lg font-black text-white">{milestone.label[lang]}</span>
            <span className="text-xs text-white/50">{milestone.date[lang]}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type Props = {
  prevXp: number;
  newXp: number;
  gain: XpGain;
  // Seconds before the popup slides in and the pawn starts climbing.
  delay: number;
  onOpenTimeline: () => void;
  onClose: () => void;
  // Called once the climb (and any milestone reveal) has played out.
  onSeen: () => void;
};

// Shown over the ordered items once the daily result is revealed (never
// inside the score panel: there's no room for it on mobile). Must be
// rendered inside a `relative` container covering that area.
export default function JourneyPopup({ prevXp, newXp, gain, delay, onOpenTimeline, onClose, onSeen }: Props) {
  const { t } = useLanguage();
  const pawn = usePawnClimb(prevXp, newXp, delay);
  const shown = useCountUp(gain.total, delay);

  useEffect(() => {
    if (pawn.stage === "settled") onSeen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pawn.stage]);

  return (
    <>
      <motion.div
        className="absolute inset-0 z-30 bg-black/55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ delay: Math.max(delay - 0.4, 0), duration: 0.3 }}
        onClick={onClose}
      />
      <motion.div
        className="absolute inset-x-0 bottom-1 z-30 flex flex-col gap-2 rounded-lg border-2 border-amber-400/40 bg-stone-900/95 px-3 pb-3 pt-2 shadow-xl shadow-black/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30, transition: { duration: 0.2 } }}
        transition={{ delay: Math.max(delay - 0.4, 0), duration: 0.35, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-black uppercase tracking-widest text-amber-300">{t.journeyTitle}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs font-black text-white/70"
          >
            ✕
          </button>
        </div>
        <button type="button" onClick={onOpenTimeline} className="flex w-full gap-3 text-left">
          <TimelineSlice seg={pawn.seg} from={pawn.from} to={pawn.to} animDelay={pawn.animDelay} />
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
            <span className="text-2xl font-black text-amber-300">+{shown} XP</span>
            <ul className="text-[11px] leading-snug text-white/60">
              <li>
                {t.journeyGamePlayed} +{gain.base}
              </li>
              <li>
                {t.journeyScore} +{gain.scoreBonus}
              </li>
              {gain.streakPct > 0 && (
                <li className="flex items-center gap-1 text-amber-300">
                  <FlameIcon className="h-3 w-3" />
                  {t.journeyStreak.replace("{pct}", String(gain.streakPct))} +{gain.streakBonus}
                </li>
              )}
            </ul>
            <p className="text-[10px] text-white/50">
              {t.journeyTomorrow} <span className="font-bold text-amber-300">+{gain.tomorrowPct}%</span>
              {gain.tomorrowPct === MAX_STREAK_PCT && ` (${t.journeyMax})`}
            </p>
          </div>
        </button>
        <button type="button" onClick={onOpenTimeline} className="self-end text-[10px] font-bold text-white/50 underline">
          {t.journeySeeAll}
        </button>
      </motion.div>
      <MilestoneReveal show={pawn.stage === "reveal"} milestone={pawn.reached} onDone={pawn.dismissReveal} />
    </>
  );
}
