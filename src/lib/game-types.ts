// Shapes exchanged with the game API routes. Deliberately excludes
// HistoricalEvent's lat/lng/name/explanation until a round is actually
// guessed — see src/app/api/session and src/app/api/guess.

// What the client knows about a round before guessing: enough to show the
// clue, nothing that would let it locate or identify the event.
export type EventPrompt = {
  id: string;
  clue: string;
};

// What the server reveals once a guess for that round has been scored.
export type EventReveal = {
  name: string;
  explanation: string;
  year: number;
  lat: number;
  lng: number;
};

export type GuessResult = {
  distance: number;
  points: number;
  reveal: EventReveal;
};

// What the final chronological-order round needs — built up client-side
// from each round's EventReveal as the game is played.
export type OrderableEvent = {
  id: string;
  name: string;
  year: number;
};
