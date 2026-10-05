import { ImageResponse } from "next/og";
import { LAUREL_PATH } from "./laurel-path";

export const APP_ICON_BACKGROUND = "#0a0f1f";

// Home-screen icon (PWA manifest + apple-touch-icon). Full-bleed square, no
// rounded corners: the OS applies its own mask. The wreath stays inside the
// central ~60% so it survives Android's circular "maskable" crop.
export function renderAppIcon(size: number) {
  const wreath = Math.round(size * 0.6);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: APP_ICON_BACKGROUND,
        }}
      >
        <svg viewBox="0 0 512 512" width={wreath} height={wreath} fill="#fbbf24" style={{ display: "flex" }}>
          <path d={LAUREL_PATH} />
        </svg>
      </div>
    ),
    { width: size, height: size },
  );
}
