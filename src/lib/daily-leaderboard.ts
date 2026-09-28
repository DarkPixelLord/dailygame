export type LeaderboardEntry = { rank: number; score: number; isPlayer: boolean };

export type DailyLeaderboard = {
  top: LeaderboardEntry[];
  // Set only when the player's score falls outside `top` — shown below it,
  // with its rank, so the player always sees where they stand.
  player: LeaderboardEntry | null;
};

const TOP_SIZE = 5;

// Today's top scores plus the player's own standing. The player's score is
// injected from the request rather than read back from daily_scores (their
// stored row, if any, is dropped from `otherScores` by the caller), so it
// also works in dev preview mode, where nothing gets written.
//
// Ties share a rank and skip the following ones (4200, 4000, 4000, 3900 →
// 1, 2, 2, 4). A player tied with others is listed first among them, so a tie
// for 5th still puts them in the top list.
export function buildDailyLeaderboard(otherScores: number[], playerScore: number | null): DailyLeaderboard {
  const entries: Omit<LeaderboardEntry, "rank">[] = otherScores.map((score) => ({ score, isPlayer: false }));
  if (playerScore !== null) entries.push({ score: playerScore, isPlayer: true });
  entries.sort((a, b) => b.score - a.score || Number(b.isPlayer) - Number(a.isPlayer));

  let rank = 0;
  const ranked: LeaderboardEntry[] = entries.map((entry, i) => {
    if (i === 0 || entry.score !== entries[i - 1].score) rank = i + 1;
    return { ...entry, rank };
  });

  const top = ranked.slice(0, TOP_SIZE);
  const playerEntry = ranked.find((entry) => entry.isPlayer) ?? null;
  return { top, player: playerEntry && !top.includes(playerEntry) ? playerEntry : null };
}
