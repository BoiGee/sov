import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#150a0a",
          color: "#f7efe2",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "2px solid #c9a227",
            background: "rgba(201,162,39,0.1)",
            color: "#c9a227",
            fontSize: 40,
            fontFamily: "serif",
            marginBottom: 32,
          }}
        >
          SV
        </div>
        <div style={{ display: "flex", fontSize: 56, fontFamily: "serif" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c7b6a8", marginTop: 16 }}>
          Steady counsel, clearly communicated.
        </div>
      </div>
    ),
    { ...size }
  );
}
