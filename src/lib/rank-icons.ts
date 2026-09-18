import type { ComponentType } from "react";
import LaurelIcon from "@/components/LaurelIcon";
import ArrowedIcon from "@/components/ArrowedIcon";
import BarbuteIcon from "@/components/BarbuteIcon";
import RobeIcon from "@/components/RobeIcon";
import BookmarkIcon from "@/components/BookmarkIcon";
import FortressIcon from "@/components/FortressIcon";
import type { UiStrings } from "./i18n";
import type { RankTier } from "./scoring";

// Shared between the in-game final round screen and the plain (non-OG)
// share-link page — both render real React/SVG, unlike opengraph-image.tsx
// which runs through satori and needs its own inlined path constants.
export const RANK_ICON_COMPONENTS: Record<RankTier, ComponentType<{ className?: string }>> = {
  novice: ArrowedIcon,
  amateur: BarbuteIcon,
  scholar: RobeIcon,
  historian: BookmarkIcon,
  expert: FortressIcon,
  master: LaurelIcon,
};

export const RANK_LABEL_KEYS = {
  novice: "rankNovice",
  amateur: "rankAmateur",
  scholar: "rankScholar",
  historian: "rankHistorian",
  expert: "rankExpert",
  master: "rankMaster",
} as const satisfies Record<RankTier, keyof UiStrings>;
