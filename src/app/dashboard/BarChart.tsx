// Plain CSS bar chart — the dashboard only needs 2-3 simple time series, so
// pulling in a charting library (recharts, chart.js...) for that would be
// more dependency than the job needs.
type Point = { label: string; value: number };

export default function BarChart({ points, formatValue }: { points: Point[]; formatValue?: (v: number) => string }) {
  const max = Math.max(1, ...points.map((p) => p.value));

  return (
    <div className="flex h-32 items-end gap-1">
      {points.map((p) => (
        <div key={p.label} className="group relative flex flex-1 flex-col items-center justify-end">
          <span className="mb-1 text-[9px] font-bold text-amber-300 opacity-0 transition group-hover:opacity-100">
            {formatValue ? formatValue(p.value) : p.value}
          </span>
          <div
            className="w-full rounded-t-sm bg-amber-400/70 transition group-hover:bg-amber-300"
            style={{ height: `${(p.value / max) * 100}%`, minHeight: p.value > 0 ? "2px" : 0 }}
          />
          <span className="mt-1 rotate-45 whitespace-nowrap text-[8px] text-white/40 origin-top-left">
            {p.label.slice(5)}
          </span>
        </div>
      ))}
    </div>
  );
}
