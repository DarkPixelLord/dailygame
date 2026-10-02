// Local record of "I already played today's daily challenge", keyed by UTC
// date so it matches the server-side dedupe in api/finish (device_id +
// played_at) and the seed date in pickDailyEvents. This is what lets the
// landing page skip straight to the result screen instead of letting the
// same browser replay the daily challenge (and its now-known answers) for a
// better score.
const STORAGE_PREFIX = "dailygame:daily-result:";

function todayKey(): string {
  return STORAGE_PREFIX + new Date().toISOString().slice(0, 10);
}

export type StoredDailyResult = { score: number };

export function getTodaysDailyResult(): StoredDailyResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(todayKey());
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredDailyResult>;
    return typeof parsed.score === "number" ? { score: parsed.score } : null;
  } catch {
    return null;
  }
}

export function saveTodaysDailyResult(score: number): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(todayKey(), JSON.stringify({ score } satisfies StoredDailyResult));
  } catch {
    // localStorage unavailable — the client-side replay lock is a nice-to-have,
    // not a security boundary, so silently skip it rather than blocking play.
  }
}

// Best score from replaying a past day's pack in archive mode, kept apart
// from the daily key so a replay never looks like the live play.
const ARCHIVE_PREFIX = "dailygame:archive-result:";

function readScore(key: string): number | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredDailyResult>;
    return typeof parsed.score === "number" ? parsed.score : null;
  } catch {
    return null;
  }
}

export function saveArchiveResult(date: string, score: number): void {
  if (typeof window === "undefined") return;
  const best = readScore(ARCHIVE_PREFIX + date);
  if (best !== null && best >= score) return;
  try {
    window.localStorage.setItem(ARCHIVE_PREFIX + date, JSON.stringify({ score } satisfies StoredDailyResult));
  } catch {
    // localStorage unavailable — the archive "played" marker is cosmetic.
  }
}

// What the archive list shows next to a past day: the score from playing it
// live that day, or else the best archive replay.
export function getPastResult(date: string): { score: number; live: boolean } | null {
  if (typeof window === "undefined") return null;
  const live = readScore(STORAGE_PREFIX + date);
  if (live !== null) return { score: live, live: true };
  const archive = readScore(ARCHIVE_PREFIX + date);
  return archive !== null ? { score: archive, live: false } : null;
}
