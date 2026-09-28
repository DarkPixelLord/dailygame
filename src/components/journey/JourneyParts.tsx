import type { Milestone } from "@/lib/journey";

// Duration (seconds) of the pawn's climb, shared by the result-screen popup
// and the full timeline so both feel the same.
export const PAWN_DURATION = 1.2;

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

// Passed milestones in white, only the current one in yellow, future ones
// with their icon hidden until reached.
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
        ? "border-white/40 text-white"
        : "border-white/10 text-white/40";
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full border-2 bg-stone-900 ${size} ${tone}`}>
      {state !== "future" && <MilestoneIcon name={milestone.icon} className={iconSize} />}
    </span>
  );
}

export function labelTone(state: NodeState): string {
  return state === "current" ? "font-bold text-amber-300" : state === "passed" ? "text-white" : "text-white/30";
}
