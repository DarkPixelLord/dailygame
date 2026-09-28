"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import { ERA_LABELS, MILESTONES, pctInSegment, segmentIndex, type EraKey } from "@/lib/journey";
import { MilestoneDisc, PAWN_DURATION, Pawn, labelTone, type NodeState } from "./JourneyParts";

const ROW = 72;
const ERA_GAP = 40;
const TOP_PAD = 28;
const LINE_X = 72;
const PAWN_LEFT = 12;
const PAWN_SIZE = 32;

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

type Props = {
  // The pawn climbs from `prevXp` to `newXp` on open (same value = no climb),
  // so progress the player hasn't watched yet replays here.
  prevXp: number;
  newXp: number;
  onClose: () => void;
};

// Full-screen timeline: future at the top, past at the bottom, scrolled to
// the pawn on open. Upcoming milestones stay hidden ("???", no icon).
export default function JourneyTimeline({ prevXp, newXp, onClose }: Props) {
  const { lang, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const reachedSeg = segmentIndex(newXp);
  const baseY = LAYOUT.nodeYs[0];
  const climb = { delay: 0.4, duration: PAWN_DURATION, ease: "easeInOut" } as const;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = yForXp(prevXp) - el.clientHeight / 2;
    // Only on open: the pawn then climbs within view.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div className="fixed inset-0 z-[60] flex flex-col bg-stone-950" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mx-auto flex w-full max-w-md items-center justify-between px-4 py-3">
        <span className="text-sm font-black uppercase tracking-widest text-amber-300">{t.journeyTitle}</span>
        <button type="button" onClick={onClose} className="text-sm font-bold text-white/60">
          {t.close} ✕
        </button>
      </div>
      <div ref={scrollRef} className="themed-scroll flex-1 overflow-y-auto">
        <div className="relative mx-auto w-full max-w-md" style={{ height: LAYOUT.height }}>
          <div className="absolute w-0.5 bg-white/10" style={{ left: LINE_X - 1, top: TOP_PAD, height: baseY - TOP_PAD }} />
          <motion.div
            className="absolute w-0.5 bg-amber-400/60"
            style={{ left: LINE_X - 1 }}
            initial={{ top: yForXp(prevXp), height: baseY - yForXp(prevXp) }}
            animate={{ top: yForXp(newXp), height: baseY - yForXp(newXp) }}
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
                <MilestoneDisc milestone={m} state={state} size="h-10 w-10" iconSize="h-6 w-6" />
                <div className="flex flex-col">
                  <span className={`text-sm font-bold ${labelTone(state)}`}>{state === "future" ? "???" : m.label[lang]}</span>
                  <span className={`text-[11px] ${state === "current" ? "text-amber-300/70" : "text-white/40"}`}>{m.date[lang]}</span>
                </div>
              </div>
            );
          })}
          <motion.div
            className="absolute z-[5]"
            style={{ left: PAWN_LEFT, y: "-50%" }}
            initial={{ top: yForXp(prevXp) }}
            animate={{ top: yForXp(newXp) }}
            transition={climb}
          >
            <Pawn size="h-8 w-8" connector={LINE_X - PAWN_LEFT - PAWN_SIZE} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
