const MeridianIcon = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer glow arc */}
      <path d="M5,22 A11,11 0 0,1 27,22" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Sun */}
      <path d="M8,22 A8,8 0 0,1 24,22 Z" fill="#F59E0B"/>
      {/* Horizon */}
      <line x1="2" y1="22" x2="30" y2="22" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default MeridianIcon;
