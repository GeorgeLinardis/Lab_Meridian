import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const { width, height } = size;
  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          borderRadius: 8,
          background: "#0F172A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
          {/* Outer glow arc */}
          <path d="M5,22 A11,11 0 0,1 27,22" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Sun */}
          <path d="M8,22 A8,8 0 0,1 24,22 Z" fill="#F59E0B"/>
          {/* Horizon */}
          <line x1="2" y1="22" x2="30" y2="22" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    { ...size },
  );
}
