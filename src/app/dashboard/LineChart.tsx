// Plain SVG line chart — same "no charting library" reasoning as the bar
// chart it replaces (see git history): the dashboard only needs 2-3 simple
// time series, and a library would be more dependency than the job needs.
// Unlike bars, a line stays legible as the point count grows (no per-bar
// width to shrink), and the y-axis + a static label on the latest point mean
// the shape and the current number are both readable without hovering —
// hover-only values were the actual complaint against the old bar chart.
type Point = { label: string; value: number };

const WIDTH = 600;
const HEIGHT = 170;
const PAD_LEFT = 34;
const PAD_RIGHT = 10;
const PAD_TOP = 20;
const PAD_BOTTOM = 22;
// Aim for roughly this many x-axis labels regardless of how many points
// there are — the old chart's per-point diagonal labels became unreadable
// as the history window filled up.
const TARGET_X_LABELS = 6;

function niceTicks(max: number, targetCount = 4): number[] {
  if (max <= 0) return [0];
  const roughStep = max / targetCount;
  const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
  const normalized = roughStep / magnitude;
  const step = (normalized >= 5 ? 5 : normalized >= 2 ? 2 : 1) * magnitude;
  const ticks: number[] = [];
  for (let v = 0; v <= max + step * 0.001; v += step) ticks.push(Math.round(v));
  // A step under 1 (small max, e.g. a handful of plays) rounds several ticks
  // to the same integer — collapse those before they become duplicate keys.
  return [...new Set(ticks)];
}

function formatShortDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00.000Z`);
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", timeZone: "UTC" }).format(date);
}

export default function LineChart({ points, formatValue }: { points: Point[]; formatValue?: (v: number) => string }) {
  const fmt = formatValue ?? ((v: number) => String(v));

  if (points.length === 0) {
    return <p className="text-sm text-white/40">Aucune donnée.</p>;
  }

  const max = Math.max(1, ...points.map((p) => p.value));
  const ticks = niceTicks(max);
  const axisMax = ticks[ticks.length - 1] || max || 1;

  const innerW = WIDTH - PAD_LEFT - PAD_RIGHT;
  const innerH = HEIGHT - PAD_TOP - PAD_BOTTOM;
  const stepX = points.length > 1 ? innerW / (points.length - 1) : 0;

  const coords = points.map((p, i) => ({
    ...p,
    x: PAD_LEFT + (points.length > 1 ? i * stepX : innerW / 2),
    y: PAD_TOP + innerH - (p.value / axisMax) * innerH,
  }));

  const path = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
  const labelEvery = Math.max(1, Math.ceil(coords.length / TARGET_X_LABELS));
  const lastIndex = coords.length - 1;

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label="Graphique en courbe">
      {ticks.map((t) => {
        const y = PAD_TOP + innerH - (t / axisMax) * innerH;
        return (
          <g key={t}>
            <line x1={PAD_LEFT} x2={WIDTH - PAD_RIGHT} y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
            <text x={PAD_LEFT - 6} y={y} textAnchor="end" dominantBaseline="middle" fontSize={9} className="fill-white/40">
              {fmt(t)}
            </text>
          </g>
        );
      })}

      {coords.map((c, i) =>
        i % labelEvery === 0 || i === lastIndex ? (
          <text key={c.label} x={c.x} y={HEIGHT - 6} textAnchor="middle" fontSize={9} className="fill-white/40">
            {formatShortDate(c.label)}
          </text>
        ) : null,
      )}

      <path d={path} fill="none" stroke="#fbbf24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

      {coords.map((c, i) => (
        <g key={c.label} className="group">
          {/* Hit target wider than the visible marker, so hover works without pixel-perfect aim. */}
          <circle cx={c.x} cy={c.y} r={10} fill="transparent" />
          <circle
            cx={c.x}
            cy={c.y}
            r={3}
            className={i === lastIndex ? "fill-amber-400" : "fill-amber-400 opacity-0 transition group-hover:opacity-100"}
          />
          <text
            x={c.x}
            y={c.y - 10}
            textAnchor={i === 0 ? "start" : i === lastIndex ? "end" : "middle"}
            fontSize={10}
            fontWeight="bold"
            className={
              i === lastIndex ? "fill-amber-300" : "fill-amber-300 opacity-0 transition group-hover:opacity-100"
            }
          >
            {fmt(c.value)}
          </text>
        </g>
      ))}
    </svg>
  );
}
