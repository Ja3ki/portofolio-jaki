import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 16,
          fontSize: 30,
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