import DevResultsClient from "./DevResultsClient";

function parseCount(raw: string | undefined): number | undefined {
  const n = Number(raw);
  return raw !== undefined && Number.isFinite(n) && n >= 0 ? n : undefined;
}

// Dev-only sandbox that renders the real final-round screen (FinalRoundScreen)
// pixel-for-pixel, with a floating overlay to jump the starting score into
// each finalRank tier without having to play all 5 map rounds first.
// Screenshot params: `?shot` hides the overlay, `?xp=N` sets the journey XP
// before today's game, `?streak=N` the streak including today.
export default async function DevResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ shot?: string; xp?: string; streak?: string }>;
}) {
  const { shot, xp, streak } = await searchParams;
  return (
    <DevResultsClient
      hideOverlay={shot !== undefined}
      previewXp={parseCount(xp)}
      previewStreak={parseCount(streak)}
    />
  );
}
