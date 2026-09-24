import Link from "next/link";
import { UI_STRINGS } from "@/lib/i18n";
import { MAX_LOCATION_POINTS, MAX_ORDER_POINTS, ROUNDS_PER_GAME, rankTier } from "@/lib/scoring";
import { RANK_ICON_COMPONENTS, RANK_LABEL_KEYS } from "@/lib/rank-icons";
import { PRIMARY_BUTTON } from "@/lib/theme";
import { parseShareParam } from "@/lib/share-params";
import FlameIcon from "@/components/FlameIcon";

const MAX_TOTAL_SCORE = ROUNDS_PER_GAME * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;

// Standalone landing for a shared score link: gives link-preview scrapers
// (Telegram, Discord, ...) a real page with a score-specific opengraph-image
// (see the sibling opengraph-image.tsx), and gives a human who clicks the
// link somewhere to land before starting their own game. English-only — the
// score URL carries no lang, and this page isn't wired to LanguageProvider.
export default async function SharePage({ params }: { params: Promise<{ score: string }> }) {
  const { score: rawScore } = await params;
  const { score, streak } = parseShareParam(rawScore);
  const tier = rankTier(score, MAX_TOTAL_SCORE);
  const RankIcon = RANK_ICON_COMPONENTS[tier];

  return (
    <div className="flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-4 py-10 text-center">
      <RankIcon className="h-16 w-16 text-amber-400" />
      <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Final score</p>
      <p className="text-5xl font-black">
        {score} <span className="text-lg font-bold text-white/50">pts</span>
      </p>
      <p className="text-lg font-extrabold uppercase tracking-wide text-amber-300">{UI_STRINGS.en[RANK_LABEL_KEYS[tier]]}</p>
      {streak > 0 && (
        <p className="flex items-center gap-1 font-bold text-amber-300">
          <FlameIcon className="h-4 w-4" />
          {streak} day streak
        </p>
      )}
      <p className="text-white/70">
        Guess where five real historical events happened, then put them in order in the final round.
      </p>
      <Link href="/" className={PRIMARY_BUTTON + " px-10"}>
        Play Laurus
      </Link>
    </div>
  );
}
