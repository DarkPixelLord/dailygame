// The [score] route segment optionally carries a streak suffix ("4328-5"),
// rather than a real sub-route or query string — opengraph-image.tsx (a
// Next.js metadata route handler) only ever receives `params`, never
// `searchParams`, and a `[score]/[streak]` split can't co-locate with
// opengraph-image.tsx under an optional catch-all (Turbopack rejects it:
// "catch all segment must be the last segment").
export function parseShareParam(raw: string): { score: number; streak: number } {
  const match = /^(\d+)(?:-(\d+))?$/.exec(raw);
  return { score: Number(match?.[1] ?? raw), streak: Number(match?.[2] ?? 0) };
}
