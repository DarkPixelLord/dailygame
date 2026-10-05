import { ImageResponse } from "next/og";
import { LAUREL_PATH } from "@/lib/laurel-path";

export const alt = "Laurus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        <svg viewBox="0 0 512 512" width="150" height="150" fill="#fbbf24" style={{ display: "flex" }}>
          <path d={LAUREL_PATH} />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: -3,
            textTransform: "uppercase",
            marginTop: 10,
          }}
        >
          Laurus
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 700,
            color: "#fbbf24",
            marginTop: 24,
          }}
        >
          Guess where. Order the past.
        </div>
      </div>
    ),
    { ...size },
  );
}
