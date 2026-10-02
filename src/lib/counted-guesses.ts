// Event ids this browser has already contributed a guess for, so clue stats
// only count a player's first attempt at a clue (a replay in archive already
// knows the answer). Kept client-side so the server stores per-clue counters
// only, never one row per guess.
const STORAGE_KEY = "dailygame:counted-guesses";

function read(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function isGuessCounted(eventId: string): boolean {
  return read().includes(eventId);
}

export function markGuessCounted(eventId: string): void {
  try {
    const ids = read();
    if (!ids.includes(eventId)) window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids, eventId]));
  } catch {
    // localStorage unavailable: worst case this device's replays get counted too.
  }
}
