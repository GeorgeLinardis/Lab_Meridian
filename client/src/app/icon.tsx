import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const { width, height } = size;
  return new ImageResponse(
    <div
      style={{
        width,
        height,
        borderRadius: 8,
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
        <path d="M2,26 L2,8 L16,20 L30,8 L30,26 Z" fill="#1a1a1a" />
        <path d="M10,26 A6,6 0 0,1 22,26 Z" fill="white" />
        <line
          x1="2"
          y1="26"
          x2="30"
          y2="26"
          stroke="#1a1a1a"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </svg>
    </div>,
    { ...size },
  );
}
