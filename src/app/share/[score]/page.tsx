import Link from "next/link";
import LaurelIcon from "@/components/LaurelIcon";
import { PRIMARY_BUTTON } from "@/lib/theme";

// Standalone landing for a shared score link: gives link-preview scrapers
// (Telegram, Discord, ...) a real page with a score-specific opengraph-image
// (see the sibling opengraph-image.tsx), and gives a human who clicks the
// link somewhere to land before starting their own game.
export default async function SharePage({ params }: { params: Promise<{ score: string }> }) {
  const { score } = await params;

  return (
    <div className="flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-4 py-10 text-center">
      <LaurelIcon className="h-16 w-16 text-amber-400" />
      <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Final score</p>
      <p className="text-5xl font-black">
        {score} <span className="text-lg font-bold text-white/50">pts</span>
      </p>
      <p className="text-white/70">
        Guess where five real historical events happened, then put them in order in the final round.
      </p>
      <Link href="/" className={PRIMARY_BUTTON + " px-10"}>
        Play History Guess
      </Link>
    </div>
  );
}
