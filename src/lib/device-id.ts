// Anonymous per-browser id, used only to dedupe daily score submissions
// (one row per device per day) — no account, no PII.
const STORAGE_KEY = "dailygame:device-id";

export function getDeviceId(): string {
  if (typeof window === "undefined") return "";
  const existing = window.localStorage.getItem(STORAGE_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  window.localStorage.setItem(STORAGE_KEY, id);
  return id;
}
