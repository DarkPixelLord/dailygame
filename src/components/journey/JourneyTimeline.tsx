"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import FlameIcon from "../FlameIcon";
import { PRIMARY_BUTTON } from "@/lib/theme";
import {
  ERA_LABELS,
  MAX_STREAK_PCT,
  MILESTONES,
  pctInSegment,
  segmentIndex,
  type EraKey,
  type XpGain,
} from "@/lib/journey";
import { MilestoneDisc, MilestoneReveal, PAWN_DURATION, Pawn, labelTone, type NodeState } from "./JourneyParts";

const ROW = 72;
const ERA_GAP = 40;
const TOP_PAD = 28;
const LINE_X = 72;
const PAWN_LEFT = 12;
const PAWN_SIZE = 32;
const CLIMB_DELAY = 0.4;

// Walk from the future (top) down to the start, adding extra room under the
// first milestone of each era for its title. Static, so computed once.
function computeLayout() {
  const isEraStart = (i: number) => MILESTONES[i].era !== MILESTONES[i - 1]?.era;
  const nodeYs: number[] = [];
  const eraTitles: { y: number; era: EraKey }[] = [];
  let y = TOP_PAD;
  for (let i = MILESTONES.length - 1; i >= 0; i--) {
    nodeYs[i] = y;
    const gap = ROW + (isEraStart(i) ? ERA_GAP : 0);
    if (isEraStart(i)) eraTitles.push({ y: y + gap / 2, era: MILESTONES[i].era });
    y += gap;
  }
  return { nodeYs, eraTitles, height: y };
}

const LAYOUT = computeLayout();

function yForXp(xp: number): number {
  const seg = segmentIndex(xp);
  const above = LAYOUT.nodeYs[seg + 1] ?? LAYOUT.nodeYs[seg];
  return LAYOUT.nodeYs[seg] - (LAYOUT.nodeYs[seg] - above) * (pctInSegment(xp, seg) / 100);
}

function useCountUp(target: number, delay: number, enabled: boolean) {
  const [value, setValue] = useState(enabled ? 0 : target);
  useEffect(() => {
    if (!enabled) return;
    const controls = animate(0, target, { delay, duration: PAWN_DURATION, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [target, delay, enabled]);
  return value;
}

// Today's XP, counted up in step with the pawn's climb (shown as-is when
// there's no climb to play), with its breakdown and tomorrow's streak bonus.
function XpSummary({ gain, animated }: { gain: XpGain; animated: boolean }) {
  const { t } = useLanguage();
  const shown = useCountUp(gain.total, CLIMB_DELAY, animated);
  return (
    <div className="mx-auto flex w-full max-w-md items-center gap-4 px-4 pb-3">
      <span className="text-3xl font-black text-amber-300">+{shown} XP</span>
      <div className="flex flex-col">
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
    </div>
  );
}

// Ring around the next milestone, filling clockwise as the pawn closes in on
// it, so "almost there" reads at a glance. A full ring means the milestone
// unlocks. Starts at 3 o'clock, not 12: the timeline line runs through the
// top and bottom of the disc and would hide a small remaining gap there.
// Below 100% the fill is scaled down to at most 90%, so a nearly-there ring
// still shows a clear gap instead of looking closed but locked.
const RING_MAX_OPEN = 0.9;
const ringFill = (pct: number) => (pct >= 100 ? 1 : (pct / 100) * RING_MAX_OPEN);

function ProgressRing({ from, to, delay }: { from: number; to: number; delay: number }) {
  return (
    <svg className="pointer-events-none absolute -inset-1" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="22" fill="none" strokeWidth="3" className="stroke-white/10" />
      <motion.circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        className="stroke-amber-400"
        initial={{ pathLength: ringFill(from) }}
        animate={{ pathLength: ringFill(to) }}
        transition={{ delay, duration: PAWN_DURATION, ease: "easeInOut" }}
      />
    </svg>
  );
}

// climbing: pawn walks up, stopping on the milestone if it crosses one.
// reveal: "new milestone" card. continuing: pawn walks the rest of its XP.
type Stage = "climbing" | "reveal" | "continuing" | "settled";

const CONTINUE_DELAY = 0.2;

type Props = {
  // The pawn climbs from `prevXp` to `newXp` on open (same value = no climb),
  // so progress the player hasn't watched yet replays here.
  prevXp: number;
  newXp: number;
  // End-of-game mode: today's XP breakdown on top and a full-width exit
  // button at the bottom (the daily result's way home), while the header's
  // close button just goes back to the result.
  gain?: XpGain;
  exitLabel?: string;
  onExit?: () => void;
  onClose: () => void;
  // Called once the climb (and any milestone reveal) has played out.
  onSeen?: () => void;
};

// Full-screen timeline: future at the top, past at the bottom, scrolled to
// the pawn on open. Upcoming milestones stay hidden ("???", no icon) until
// the pawn reaches them, which is the reveal's payoff.
export default function JourneyTimeline({ prevXp, newXp, gain, exitLabel, onExit, onClose, onSeen }: Props) {
  const { lang, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevSeg = segmentIndex(prevXp);
  const newSeg = segmentIndex(newXp);
  const crossed = newSeg > prevSeg;
  const [stage, setStage] = useState<Stage>(prevXp === newXp ? "settled" : "climbing");
  // Milestones light up only once the pawn has arrived.
  const reachedSeg = stage === "climbing" ? prevSeg : newSeg;
  // Where the pawn (and the filled line) currently heads: first the crossed
  // milestone, where it pauses for the reveal, then its final spot.
  const pawnY =
    stage === "climbing" || stage === "reveal" ? yForXp(crossed ? MILESTONES[newSeg].xp : newXp) : yForXp(newXp);
  const baseY = LAYOUT.nodeYs[0];
  const climb = {
    delay: stage === "climbing" ? CLIMB_DELAY : CONTINUE_DELAY,
    duration: PAWN_DURATION,
    ease: "easeInOut",
  } as const;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = yForXp(prevXp) - el.clientHeight / 2;
    // Only on open: the pawn then climbs within view.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (stage === "climbing") {
      const id = setTimeout(() => setStage(crossed ? "reveal" : "settled"), (CLIMB_DELAY + PAWN_DURATION) * 1000);
      return () => clearTimeout(id);
    }
    if (stage === "continuing") {
      const id = setTimeout(() => setStage("settled"), (CONTINUE_DELAY + PAWN_DURATION) * 1000);
      return () => clearTimeout(id);
    }
  }, [stage, crossed]);

  // Stable, so the reveal's auto-dismiss timer isn't restarted by re-renders.
  const endReveal = useCallback(() => setStage("continuing"), []);

  useEffect(() => {
    if (stage === "settled") onSeen?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return (
    <motion.div className="fixed inset-0 z-[60] flex flex-col final-spotlight" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mx-auto flex w-full max-w-md items-center justify-between px-4 py-3">
        <span className="text-sm font-black uppercase tracking-widest text-amber-300">{t.journeyTitle}</span>
        <button type="button" onClick={onClose} className="text-sm font-bold text-white/60">
          {t.close} ✕
        </button>
      </div>
      {gain && <XpSummary gain={gain} animated={prevXp !== newXp} />}
      <div ref={scrollRef} className="themed-scroll flex-1 overflow-y-auto">
        <div className="relative mx-auto w-full max-w-md" style={{ height: LAYOUT.height }}>
          <div className="absolute w-0.5 bg-white/10" style={{ left: LINE_X - 1, top: TOP_PAD, height: baseY - TOP_PAD }} />
          <motion.div
            className="absolute w-0.5 bg-amber-400/60"
            style={{ left: LINE_X - 1 }}
            initial={{ top: yForXp(prevXp), height: baseY - yForXp(prevXp) }}
            animate={{ top: pawnY, height: baseY - pawnY }}
            transition={climb}
          />
          {LAYOUT.eraTitles.map((title) => (
            <div
              key={title.era}
              className="absolute right-4 z-10 flex items-center gap-2"
              style={{ top: title.y, left: LINE_X + 32, transform: "translateY(-50%)" }}
            >
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-300/70">{ERA_LABELS[title.era][lang]}</span>
              <span className="h-px flex-1 bg-amber-300/20" />
            </div>
          ))}
          {MILESTONES.map((m, i) => {
            const state: NodeState = i === reachedSeg ? "current" : i < reachedSeg ? "passed" : "future";
            return (
              <div
                key={m.icon + i}
                className="absolute right-4 z-10 flex items-center gap-3"
                style={{ top: LAYOUT.nodeYs[i], left: LINE_X - 20, transform: "translateY(-50%)" }}
              >
                {/* Keyed by state so a milestone the pawn just reached pops in. */}
                <motion.span
                  key={state}
                  className="relative flex"
                  initial={crossed && i === newSeg && state === "current" ? { scale: 0.4 } : false}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 12 }}
                >
                  <MilestoneDisc milestone={m} state={state} size="h-10 w-10" iconSize="h-6 w-6" />
                  {i === reachedSeg + 1 && (
                    <ProgressRing
                      {...(stage === "climbing"
                        ? {
                            from: pctInSegment(prevXp, prevSeg),
                            to: crossed ? 100 : pctInSegment(newXp, prevSeg),
                            delay: CLIMB_DELAY,
                          }
                        : crossed
                          ? // New ring starts empty during the reveal, fills as the pawn carries on.
                            { from: 0, to: stage === "reveal" ? 0 : pctInSegment(newXp, newSeg), delay: CONTINUE_DELAY }
                          : { from: pctInSegment(newXp, newSeg), to: pctInSegment(newXp, newSeg), delay: 0 })}
                    />
                  )}
                </motion.span>
                <div className="flex flex-col">
                  <span className={`text-sm font-bold ${labelTone(state)}`}>{state === "future" ? "???" : m.label[lang]}</span>
                  <span className={`text-[11px] ${state === "current" ? "text-amber-300/70" : state === "passed" ? "text-amber-200/50" : "text-white/40"}`}>{m.date[lang]}</span>
                  {i === reachedSeg + 1 && stage === "settled" && (
                    <span className="text-[11px] font-bold text-amber-400">
                      {t.journeyXpToGo.replace("{xp}", String(m.xp - newXp))}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          <motion.div
            className="absolute z-[5]"
            style={{ left: PAWN_LEFT, y: "-50%" }}
            initial={{ top: yForXp(prevXp) }}
            animate={{ top: pawnY }}
            transition={climb}
          >
            <Pawn size="h-8 w-8" connector={LINE_X - PAWN_LEFT - PAWN_SIZE} />
          </motion.div>
        </div>
      </div>
      {onExit && (
        <div className="mx-auto w-full max-w-md px-4 py-3">
          <button type="button" onClick={onExit} className={PRIMARY_BUTTON + " w-full"}>
            {exitLabel ?? t.close}
          </button>
        </div>
      )}
      <MilestoneReveal show={stage === "reveal"} milestone={MILESTONES[newSeg]} onDone={endReveal} />
    </motion.div>
  );
}
