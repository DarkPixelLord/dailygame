export type Lang = "en" | "fr";

export type UiStrings = {
  gameTitle: string;
  landingIntro: string;
  start: string;
  dailyChallenge: string;
  archiveMode: string;
  archivePickDate: string;
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
  scoreExcellent: string;
  scorePerfect: string;
  finalRoundTitle: string;
  finalRoundSubtitle: string;
  mostRecentLabel: string;
  oldestLabel: string;
  submitOrder: string;
  inTheRightSpot: string;
  inTheRightSpotPlural: string;
  oneSpotOff: string;
  misplaced: string;
  finalScore: string;
  continue: string;
  home: string;
  backToHome: string;
  share: string;
  linkCopied: string;
  mapAttribution: string;
  couldntLoadMap: string;
  couldntLoadGame: string;
  couldntSubmitGuess: string;
  retry: string;
  mapAttributionLabel: string;
  learnMore: string;
  close: string;
  rankNovice: string;
  rankAmateur: string;
  rankScholar: string;
  rankHistorian: string;
  rankExpert: string;
  rankMaster: string;
  todaysAchievements: string;
  todaysTopScores: string;
  you: string;
  todaysStatsButton: string;
  alreadyPlayedToday: string;
  back: string;
  dayStreak: string;
  journeyTitle: string;
  journeyGamePlayed: string;
  journeyScore: string;
  journeyStreak: string;
  journeyTomorrow: string;
  journeyMax: string;
  journeyNewMilestone: string;
  journeyXpToGo: string;
};

export const UI_STRINGS: Record<Lang, UiStrings> = {
  en: {
    gameTitle: "Laurus",
    landingIntro: "Guess where five real historical events took place, then put them in chronological order.",
    start: "Start",
    dailyChallenge: "Daily challenge",
    archiveMode: "Archive",
    archivePickDate: "Pick a past challenge",
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
    scoreExcellent: "Excellent!",
    scorePerfect: "Perfect!",
    finalRoundTitle: "Final round!",
    finalRoundSubtitle: "Put them in chronological order",
    mostRecentLabel: "Most recent",
    oldestLabel: "Oldest",
    submitOrder: "Submit order",
    inTheRightSpot: "right",
    inTheRightSpotPlural: "right",
    oneSpotOff: "close",
    misplaced: "wrong",
    finalScore: "Final score",
    continue: "Continue",
    home: "Home",
    backToHome: "Back to home",
    share: "Share",
    linkCopied: "Link copied!",
    mapAttribution: "© OpenStreetMap contributors, © OpenMapTiles, © OpenFreeMap",
    couldntLoadMap: "Couldn't load the map.",
    couldntLoadGame: "Couldn't load the game.",
    couldntSubmitGuess: "Couldn't submit your guess. Try again.",
    retry: "Retry",
    mapAttributionLabel: "Map attribution",
    learnMore: "Learn more",
    close: "Close",
    rankNovice: "Novice",
    rankAmateur: "Amateur",
    rankScholar: "Scholar",
    rankHistorian: "Historian",
    rankExpert: "Expert",
    rankMaster: "Master",
    todaysAchievements: "Today's achievements",
    todaysTopScores: "Today's top 5",
    you: "you",
    todaysStatsButton: "Today's stats",
    alreadyPlayedToday: "You've already played today's challenge. Come back tomorrow for a new one!",
    back: "Back",
    dayStreak: "day streak",
    journeyTitle: "Your journey",
    journeyGamePlayed: "Game played:",
    journeyScore: "Score:",
    journeyStreak: "Streak +{pct}%:",
    journeyTomorrow: "Tomorrow: streak bonus",
    journeyMax: "max",
    journeyNewMilestone: "New milestone reached",
    journeyXpToGo: "{xp} XP to go",
  },
  fr: {
    gameTitle: "Laurus",
    landingIntro: "Devine où se sont déroulés cinq événements historiques réels, puis remets-les dans l'ordre chronologique.",
    start: "Commencer",
    dailyChallenge: "Défi du jour",
    archiveMode: "Archive",
    archivePickDate: "Choisir un défi passé",
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
    scoreGreat: "Bien joué !",
    scoreExcellent: "Excellent !",
    scorePerfect: "Parfait !",
    finalRoundTitle: "Manche finale !",
    finalRoundSubtitle: "Remets-les dans l'ordre chronologique",
    mostRecentLabel: "Plus récent",
    oldestLabel: "Plus ancien",
    submitOrder: "Valider l'ordre",
    inTheRightSpot: "juste",
    inTheRightSpotPlural: "justes",
    oneSpotOff: "presque",
    misplaced: "faux",
    finalScore: "Score final",
    continue: "Continuer",
    home: "Accueil",
    backToHome: "Retour à l'accueil",
    share: "Partager",
    linkCopied: "Lien copié !",
    mapAttribution: "© contributeurs OpenStreetMap, © OpenMapTiles, © OpenFreeMap",
    couldntLoadMap: "Impossible de charger la carte.",
    couldntLoadGame: "Impossible de charger la partie.",
    couldntSubmitGuess: "Impossible d'envoyer ta réponse. Réessaie.",
    retry: "Réessayer",
    mapAttributionLabel: "Attribution de la carte",
    learnMore: "En savoir plus",
    close: "Fermer",
    rankNovice: "Néophyte",
    rankAmateur: "Amateur",
    rankScholar: "Érudit",
    rankHistorian: "Historien",
    rankExpert: "Expert",
    rankMaster: "Maître",
    todaysAchievements: "Succès du jour",
    todaysTopScores: "Top 5 du jour",
    you: "toi",
    todaysStatsButton: "Stat du jour",
    alreadyPlayedToday: "Tu as déjà joué au défi du jour. Reviens demain pour un nouveau !",
    back: "Retour",
    dayStreak: "jours de suite",
    journeyTitle: "Ton parcours",
    journeyGamePlayed: "Partie jouée :",
    journeyScore: "Score :",
    journeyStreak: "Série +{pct}% :",
    journeyTomorrow: "Demain : bonus série",
    journeyMax: "max",
    journeyNewMilestone: "Nouveau palier atteint",
    journeyXpToGo: "Encore {xp} XP",
  },
};
