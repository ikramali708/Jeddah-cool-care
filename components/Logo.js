// Premium emblem: deep-navy badge, glacier-gradient ring and a precision-cut snowflake.
export default function Logo({ size = 40, id = "jcc" }) {
  const arm = (
    <g id={`${id}-arm`}>
      <path d="M32 32V10.5" />
      <path d="M32 24.5l-5.2-5.2M32 24.5l5.2-5.2" />
      <path d="M32 17.8l-3.4-3.4M32 17.8l3.4-3.4" />
    </g>
  );
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#12426e" />
          <stop offset="1" stopColor="#041528" />
        </linearGradient>
        <linearGradient id={`${id}-ring`} x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#a5f3fc" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id={`${id}-ice`} x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ecfeff" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="32" cy="30" r="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.28" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="1.5" y="1.5" width="61" height="61" rx="18" fill={`url(#${id}-bg)`} />
      <rect x="1.5" y="1.5" width="61" height="61" rx="18" fill={`url(#${id}-glow)`} />
      <rect x="2.5" y="2.5" width="59" height="59" rx="17" fill="none" stroke={`url(#${id}-ring)`} strokeWidth="1.6" />
      <circle cx="32" cy="32" r="25" fill="none" stroke="#22d3ee" strokeOpacity="0.18" strokeWidth="0.8" />
      <g stroke={`url(#${id}-ice)`} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {arm}
        {[60, 120, 180, 240, 300].map((a) => (
          <use key={a} href={`#${id}-arm`} transform={`rotate(${a} 32 32)`} />
        ))}
      </g>
      <path d="M32 27.6l4.4 4.4-4.4 4.4-4.4-4.4z" fill="#0b2a4a" stroke={`url(#${id}-ring)`} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
