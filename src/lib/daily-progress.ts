// Local, resumable snapshot of an unfinished daily-challenge run, keyed by
// UTC date like daily-result.ts. Lets a player close the tab/browser mid-game
// and pick back up later the same day; once the date rolls over, todayKey()
// points at a different key so yesterday's unfinished run is simply never
// looked up again (and the new day's pack is unaffected by it).
import type { OrderableEvent } from "./game-types";

const STORAGE_PREFIX = "dailygame:daily-progress:";

function todayKey(): string {
  return STORAGE_PREFIX + new Date().toISOString().slice(0, 10);
}

export type StoredDailyProgress = {
  // Index of the round about to be played next. Equal to ROUNDS_PER_GAME
  // once all map rounds are done and only the chronological-ordering round
  // is left.
  round: number;
  totalScore: number;
  revealedEvents: OrderableEvent[];
};

export function getTodaysProgress(): StoredDailyProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(todayKey());
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredDailyProgress>;
    if (typeof parsed.round !== "number" || typeof parsed.totalScore !== "number" || !Array.isArray(parsed.revealedEvents)) {
      return null;
    }
    return { round: parsed.round, totalScore: parsed.totalScore, revealedEvents: parsed.revealedEvents };
  } catch {
    return null;
  }
}

export function saveTodaysProgress(progress: StoredDailyProgress): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(todayKey(), JSON.stringify(progress));
  } catch {
    // localStorage unavailable — resume is a nice-to-have, not required to play.
  }
}

export function clearTodaysProgress(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(todayKey());
  } catch {
    // ignore
  }
}
