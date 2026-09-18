// Tracks recently-seen event ids in Free mode so back-to-back games don't
// immediately repeat the same events. Daily mode doesn't use this — its
// selection is deterministic by date, not by play history.
const STORAGE_KEY = "laurus:recent-free-events";
// Covers roughly the last 4 free games (5 rounds each) before an event can
// resurface.
const RECENT_LIMIT = 20;

export function getRecentEventIds(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function addRecentEventIds(ids: string[]): void {
  try {
    const merged = [...ids, ...getRecentEventIds()].slice(0, RECENT_LIMIT);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // localStorage unavailable (private mode, quota) — repeats just won't be prevented
  }
}
