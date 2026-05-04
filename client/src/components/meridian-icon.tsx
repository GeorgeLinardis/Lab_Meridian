const MeridianIcon = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
  );
};

export default MeridianIcon;
