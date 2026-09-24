import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { UI_STRINGS } from "@/lib/i18n";
import { MAX_LOCATION_POINTS, MAX_ORDER_POINTS, ROUNDS_PER_GAME, rankTier } from "@/lib/scoring";
import { RANK_LABEL_KEYS } from "@/lib/rank-icons";
import { parseShareParam } from "@/lib/share-params";

// fs access for the rank PNGs below needs the Node runtime (the edge
// runtime has no filesystem).
export const runtime = "nodejs";

export const alt = "Laurus — Final Score";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MAX_TOTAL_SCORE = ROUNDS_PER_GAME * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;

// Pre-rasterized PNGs (public/og/rank-*.png) rather than inline <svg><path>
// markup — satori's own SVG path rendering has been unreliable for these
// multi-subpath icons on some link-preview crawlers/devices.
async function rankIconDataUri(tier: string): Promise<string> {
  const file = await readFile(path.join(process.cwd(), "public", "og", `rank-${tier}.png`));
  return `data:image/png;base64,${file.toString("base64")}`;
}

// Same path as FlameIcon.tsx, inlined for satori (see rankIconDataUri above
// for why the rank icons went the PNG route instead — this one's a single
// path, simple enough to render directly).
const FLAME_ICON_PATH =
  "M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.545 3.75 3.75 0 0 1 3.255 3.717Z";

export default async function Image({ params }: { params: Promise<{ score: string }> }) {
  const { score: rawScore } = await params;
  const { score, streak } = parseShareParam(rawScore);
  const tier = rankTier(score, MAX_TOTAL_SCORE);
  const label = UI_STRINGS.en[RANK_LABEL_KEYS[tier]];
  const iconSrc = await rankIconDataUri(tier);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0f1f",
          backgroundImage: "linear-gradient(135deg, #0a0f1f 0%, #131a33 55%, #0a0f1f 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconSrc} width={130} height={130} alt="" />
        <div style={{ display: "flex", fontSize: 110, fontWeight: 900, color: "#ffffff", marginTop: 10 }}>
          {score} <span style={{ color: "#fbbf24", marginLeft: 20 }}>pts</span>
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#fbbf24", marginTop: 6, letterSpacing: 4 }}>
          {label.toUpperCase()}
        </div>
        {streak > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
            <svg width={28} height={28} viewBox="0 0 24 24" fill="#fbbf24">
              <path fillRule="evenodd" clipRule="evenodd" d={FLAME_ICON_PATH} />
            </svg>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 800, color: "#fbbf24" }}>{streak} day streak</div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            color: "#ffffffb3",
            marginTop: 24,
            maxWidth: 880,
            textAlign: "center",
          }}
        >
          Guess where five real historical events happened, then put them in order in the final round.
        </div>
      </div>
    ),
    { ...size },
  );
}
