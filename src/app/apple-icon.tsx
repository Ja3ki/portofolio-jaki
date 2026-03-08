import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          color: "#ffffff",
          borderRadius: 40,
          fontSize: 86,
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
        }}
      >
        F
      </div>
    ),
    size
  );
}