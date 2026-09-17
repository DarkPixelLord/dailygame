export type Lang = "en" | "fr";

export type UiStrings = {
  gameTitle: string;
  landingIntro: string;
  start: string;
  round: string;
  pts: string;
  clickMapToPlaceYourPin: string;
  submitGuess: string;
  nextRound: string;
  continueToFinalRound: string;
  distance: string;
  finalRoundTitle: string;
  finalRoundSubtitle: string;
  mostRecentLabel: string;
  oldestLabel: string;
  submitOrder: string;
  inTheRightSpot: string;
  finalScore: string;
  playAgain: string;
  scrollToZoomHint: string;
  mapAttribution: string;
  couldntLoadMap: string;
  retry: string;
  mapAttributionLabel: string;
  learnMore: string;
  close: string;
};

export const UI_STRINGS: Record<Lang, UiStrings> = {
  en: {
    gameTitle: "History Guess",
    landingIntro:
      "Guess where and when five real historical events happened, then put them in order in the final round.",
    start: "Start",
    round: "Round",
    pts: "pts",
    clickMapToPlaceYourPin: "Click the map to locate this event",
    submitGuess: "Submit guess",
    nextRound: "Next round",
    continueToFinalRound: "Continue to final round",
    distance: "Distance",
    finalRoundTitle: "Final round!",
    finalRoundSubtitle: "Put them in chronological order",
    mostRecentLabel: "Most recent",
    oldestLabel: "Oldest",
    submitOrder: "Submit order",
    inTheRightSpot: "in the right spot",
    finalScore: "Final score",
    playAgain: "Play again",
    scrollToZoomHint: "Scroll to zoom · drag to pan · click to place your pin",
    mapAttribution: "© OpenStreetMap contributors, © OpenMapTiles, © OpenFreeMap",
    couldntLoadMap: "Couldn't load the map.",
    retry: "Retry",
    mapAttributionLabel: "Map attribution",
    learnMore: "Learn more",
    close: "Close",
  },
  fr: {
    gameTitle: "History Guess",
    landingIntro:
      "Devine où et quand se sont déroulés cinq événements historiques réels, puis remets-les dans l'ordre lors de la manche finale.",
    start: "Commencer",
    round: "Manche",
    pts: "pts",
    clickMapToPlaceYourPin: "Clique sur la carte pour localiser cet événement",
    submitGuess: "Valider",
    nextRound: "Manche suivante",
    continueToFinalRound: "Passer à la manche finale",
    distance: "Distance",
    finalRoundTitle: "Manche finale !",
    finalRoundSubtitle: "Remets-les dans l'ordre chronologique",
    mostRecentLabel: "Plus récent",
    oldestLabel: "Plus ancien",
    submitOrder: "Valider l'ordre",
    inTheRightSpot: "bien placés",
    finalScore: "Score final",
    playAgain: "Rejouer",
    scrollToZoomHint: "Molette pour zoomer · glisser pour déplacer · cliquer pour placer ton pin",
    mapAttribution: "© contributeurs OpenStreetMap, © OpenMapTiles, © OpenFreeMap",
    couldntLoadMap: "Impossible de charger la carte.",
    retry: "Réessayer",
    mapAttributionLabel: "Attribution de la carte",
    learnMore: "En savoir plus",
    close: "Fermer",
  },
};
