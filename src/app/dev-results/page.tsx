import DevResultsClient from "./DevResultsClient";

// Dev-only sandbox that renders the real final-round screen (FinalRoundScreen)
// pixel-for-pixel, with a floating overlay to jump the starting score into
// each finalRank tier without having to play all 5 map rounds first.
export default function DevResultsPage() {
  return <DevResultsClient />;
}
