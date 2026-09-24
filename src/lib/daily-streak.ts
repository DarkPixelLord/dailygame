// Consecutive-day streak for the daily challenge, tracked client-side only
// (no leaderboard/account involved, so no need for a Supabase table — see
// daily-result.ts / daily-progress.ts for the same reasoning). Day boundary
// is UTC, matching pickDailyEvents' seed date.
const STORAGE_KEY = "dailygame:daily-streak";

type StoredStreak = { lastPlayedDate: string; streak: number };

function dateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function todayKey(): string {
  return dateKey(new Date());
}

function yesterdayKey(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return dateKey(d);
}

function readStored(): StoredStreak | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredStreak>;
    return typeof parsed.lastPlayedDate === "string" && typeof parsed.streak === "number"
      ? { lastPlayedDate: parsed.lastPlayedDate, streak: parsed.streak }
      : null;
  } catch {
    return null;
  }
}

// The streak as it stands right now — 0 once a day has been skipped, even
// though storage itself is only overwritten the next time a daily is
// completed (see recordTodaysDailyPlayed).
export function getCurrentStreak(): number {
  const stored = readStored();
  if (!stored) return 0;
  if (stored.lastPlayedDate === todayKey() || stored.lastPlayedDate === yesterdayKey()) return stored.streak;
  return 0;
}

// Call once, right when today's daily-challenge score locks in.
export function recordTodaysDailyPlayed(): void {
  if (typeof window === "undefined") return;
  const today = todayKey();
  const stored = readStored();
  const streak = stored?.lastPlayedDate === today ? stored.streak : stored?.lastPlayedDate === yesterdayKey() ? stored.streak + 1 : 1;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lastPlayedDate: today, streak } satisfies StoredStreak));
  } catch {
    // localStorage unavailable — streak is cosmetic, not required to play.
  }
}
