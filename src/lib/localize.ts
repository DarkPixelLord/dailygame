import type { HistoricalEvent } from "./poc-events";
import { POC_EVENTS_FR } from "./poc-events-fr";
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
