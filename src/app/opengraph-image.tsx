import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #171717 45%, #262626 100%)",
          color: "#ffffff",
          padding: "56px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            alignItems: "center",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "999px",
            padding: "10px 18px",
            fontSize: 24,
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>

          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            {profile.headline}
          </div>

          <div
            style={{
              marginTop: 10,
              maxWidth: 920,
              fontSize: 24,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            {profile.content.en.heroSummary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.68)",
          }}
        >
          <div>{profile.siteUrl.replace(/^https?:\/\//, "")}</div>
          <div>{profile.location}</div>
        </div>
      </div>
    ),
    size
  );
}