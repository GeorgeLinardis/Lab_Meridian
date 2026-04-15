import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0F172A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Rotated diamond split into two triangles */}
        <div style={{ position: "relative", width: 18, height: 18, display: "flex" }}>
          {/* Top-left triangle */}
          <div
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "9px 9px 0 0",
              borderColor: "#22C55E transparent transparent transparent",
            }}
          />
          {/* Bottom-right triangle */}
          <div
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "0 0 9px 9px",
              borderColor: "transparent transparent #15803D transparent",
              top: 9,
              left: 9,
            }}
          />
          {/* Top-right triangle (accent) */}
          <div
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "0 9px 9px 0",
              borderColor: "transparent #166534 transparent transparent",
            }}
          />
          {/* Bottom-left triangle (accent) */}
          <div
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "9px 0 0 9px",
              borderColor: "transparent transparent transparent #14532D",
              top: 9,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
