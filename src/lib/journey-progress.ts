// Journey XP, tracked client-side only like the streak (see daily-streak.ts
// for the reasoning). `seenXp` is the position the player last watched the
// pawn reach, so a climb they missed (popup closed early) replays once on
// the landing page's timeline. Day boundary is UTC, matching the streak.
import type { XpGain } from "./journey";

const STORAGE_KEY = "dailygame:journey";

type StoredJourney = { xp: number; seenXp: number; awardedDate: string | null; lastGain: XpGain | null };

const EMPTY: StoredJourney = { xp: 0, seenXp: 0, awardedDate: null, lastGain: null };

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function read(): StoredJourney {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<StoredJourney>;
    return {
      xp: typeof parsed.xp === "number" ? parsed.xp : 0,
      seenXp: typeof parsed.seenXp === "number" ? parsed.seenXp : 0,
      awardedDate: typeof parsed.awardedDate === "string" ? parsed.awardedDate : null,
      lastGain: parsed.lastGain ?? null,
    };
  } catch {
    return EMPTY;
  }
}

function write(journey: StoredJourney): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(journey));
  } catch {
    // localStorage unavailable — the journey is cosmetic, not required to play.
  }
}

export function getJourney(): { xp: number; seenXp: number } {
  const { xp, seenXp } = read();
  return { xp, seenXp: Math.min(seenXp, xp) };
}

// Call once, right when today's daily-challenge score locks in. Idempotent
// per UTC day: a second call (e.g. a remount) returns the same award instead
// of paying out twice.
export function awardTodaysXp(gain: XpGain): { prevXp: number; newXp: number; gain: XpGain } {
  const stored = read();
  if (stored.awardedDate === todayKey() && stored.lastGain) {
    return { prevXp: stored.xp - stored.lastGain.total, newXp: stored.xp, gain: stored.lastGain };
  }
  const newXp = stored.xp + gain.total;
  write({ ...stored, xp: newXp, awardedDate: todayKey(), lastGain: gain });
  return { prevXp: stored.xp, newXp, gain };
}

export function markJourneySeen(xp: number): void {
  const stored = read();
  if (stored.seenXp >= xp) return;
  write({ ...stored, seenXp: xp });
}
