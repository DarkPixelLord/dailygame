import { POC_EVENTS } from "./poc-events";
import { POC_EVENTS_FR } from "./poc-events-fr";
import { LEGACY_EVENTS } from "./legacy-events";
import { LEGACY_EVENTS_FR } from "./legacy-events-fr";

// Local-only toggle: set NEXT_PUBLIC_EVENT_POOL=v2 in .env.local (gitignored,
// never deployed) to test the in-progress v2 corpus during development.
// Unset serves the frozen v1 corpus, which is what's live in production.
// NEXT_PUBLIC_ prefix is required since this is also read from client
// components (dev-order, dev-results).
const useV2 = process.env.NEXT_PUBLIC_EVENT_POOL === "v2";

export const ACTIVE_EVENTS = useV2 ? POC_EVENTS : LEGACY_EVENTS;
export const ACTIVE_EVENTS_FR = useV2 ? POC_EVENTS_FR : LEGACY_EVENTS_FR;
