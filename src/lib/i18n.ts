export type Lang = "en" | "fr";

export type UiStrings = {
  gameTitle: string;
  landingIntro: string;
  start: string;
  dailyChallenge: string;
  freeMode: string;
  round: string;
  pts: string;
  clickMapToPlaceYourPin: string;
  submitGuess: string;
  nextRound: string;
  continueToFinalRound: string;
  distance: string;
  scoreOops: string;
  scoreMeh: string;
  scoreGood: string;
  scoreGreat: string;
  scorePerfect: string;
  finalRoundTitle: string;
  finalRoundSubtitle: string;
  mostRecentLabel: string;
  oldestLabel: string;
  submitOrder: string;
  inTheRightSpot: string;
  finalScore: string;
  playAgain: string;
  share: string;
  linkCopied: string;
  mapAttribution: string;
  couldntLoadMap: string;
  retry: string;
  mapAttributionLabel: string;
  learnMore: string;
  close: string;
};

export const UI_STRINGS: Record<Lang, UiStrings> = {
  en: {
    gameTitle: "Laurus",
    landingIntro:
      "Guess where five real historical events happened, then put them in order in the final round.",
    start: "Start",
    dailyChallenge: "Daily challenge",
    freeMode: "Free mode",
    round: "Round",
    pts: "pts",
    clickMapToPlaceYourPin: "Click the map to locate this event",
    submitGuess: "Submit guess",
    nextRound: "Next round",
    continueToFinalRound: "Continue to final round",
    distance: "Distance",
    scoreOops: "Oops!",
    scoreMeh: "So-so...",
    scoreGood: "Not bad!",
    scoreGreat: "Great!",
    scorePerfect: "Perfect!",
    finalRoundTitle: "Final round!",
    finalRoundSubtitle: "Put them in chronological order",
    mostRecentLabel: "Most recent",
    oldestLabel: "Oldest",
    submitOrder: "Submit order",
    inTheRightSpot: "in the right spot",
    finalScore: "Final score",
    playAgain: "Play again",
    share: "Share",
    linkCopied: "Link copied!",
    mapAttribution: "© OpenStreetMap contributors, © OpenMapTiles, © OpenFreeMap",
    couldntLoadMap: "Couldn't load the map.",
    retry: "Retry",
    mapAttributionLabel: "Map attribution",
    learnMore: "Learn more",
    close: "Close",
  },
  fr: {
    gameTitle: "Laurus",
    landingIntro:
      "Devine où se sont déroulés cinq événements historiques réels, puis remets-les dans l'ordre lors de la manche finale.",
    start: "Commencer",
    dailyChallenge: "Défi du jour",
    freeMode: "Mode libre",
    round: "Manche",
    pts: "pts",
    clickMapToPlaceYourPin: "Clique sur la carte pour localiser cet événement",
    submitGuess: "Valider",
    nextRound: "Manche suivante",
    continueToFinalRound: "Passer à la manche finale",
    distance: "Distance",
    scoreOops: "Oups !",
    scoreMeh: "Bof...",
    scoreGood: "Pas mal !",
    scoreGreat: "Excellent !",
    scorePerfect: "Parfait !",
    finalRoundTitle: "Manche finale !",
    finalRoundSubtitle: "Remets-les dans l'ordre chronologique",
    mostRecentLabel: "Plus récent",
    oldestLabel: "Plus ancien",
    submitOrder: "Valider l'ordre",
    inTheRightSpot: "bien placés",
    finalScore: "Score final",
    playAgain: "Rejouer",
    share: "Partager",
    linkCopied: "Lien copié !",
    mapAttribution: "© contributeurs OpenStreetMap, © OpenMapTiles, © OpenFreeMap",
    couldntLoadMap: "Impossible de charger la carte.",
    retry: "Réessayer",
    mapAttributionLabel: "Attribution de la carte",
    learnMore: "En savoir plus",
    close: "Fermer",
  },
};
