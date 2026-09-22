import type { HistoricalEvent } from "./poc-events";
// Temporarily serving the frozen v1 corpus while the v2 pool is still in
// progress — see legacy-events-fr.ts. Swap back to poc-events-fr.ts once v2 ships.
import { LEGACY_EVENTS_FR as POC_EVENTS_FR } from "./legacy-events-fr";
import type { Lang } from "./i18n";

export type LocalizedEvent = {
  name: string;
  clue: string;
  explanation: string;
};

export function localizeEvent(event: HistoricalEvent, lang: Lang): LocalizedEvent {
  if (lang === "fr") {
    const fr = POC_EVENTS_FR[event.id];
    if (fr) return fr;
  }
  return { name: event.name, clue: event.clue, explanation: event.explanation };
}
