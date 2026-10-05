import { ImageResponse } from "next/og";
import { LAUREL_PATH } from "@/lib/laurel-path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0f1f",
          borderRadius: 6,
        }}
      >
        <svg viewBox="0 0 512 512" width="26" height="26" fill="#fbbf24" style={{ display: "flex" }}>
          <path d={LAUREL_PATH} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
