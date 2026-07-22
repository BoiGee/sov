import { ImageResponse } from "next/og";

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
          background: "#0f1a24",
          color: "#b8935a",
          fontSize: 18,
          fontFamily: "serif",
          borderRadius: 4,
        }}
      >
        SV
      </div>
    ),
    { ...size }
  );
}
