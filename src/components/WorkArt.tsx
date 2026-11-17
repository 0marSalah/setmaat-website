/** Freewallet: an identity card with the feather, a verified check, and a key. */
export function WalletArt() {
  return (
    <svg viewBox="0 0 360 260">
      <rect x="40" y="40" width="250" height="160" rx="18" fill="#14162B" />
      <rect x="70" y="20" width="250" height="160" rx="18" fill="#F4EEE2" stroke="#14162B" strokeWidth="3" />
      <rect x="92" y="44" width="52" height="40" rx="6" fill="#D9A521" />
      <path d="M100 56h36M100 64h36M100 72h36" stroke="#14162B" strokeWidth="2" />
      <rect x="92" y="108" width="140" height="10" fill="#23408E" />
      <rect x="92" y="128" width="96" height="10" fill="#137F7B" />
      <path d="M282 46 C 296 58, 298 84, 284 102 C 272 88, 270 64, 282 46 Z" fill="#D9A521" />
      <path d="M282 52 L284 102" stroke="#14162B" strokeWidth="2" />
      <circle cx="292" cy="150" r="16" fill="#14162B" />
      <path
        d="M285 150l5 5 9-10"
        stroke="#D9A521"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g>
        <rect x="210" y="196" width="120" height="44" rx="22" fill="#D9A521" stroke="#14162B" strokeWidth="3" />
        <circle cx="234" cy="218" r="9" fill="#14162B" />
        <path d="M252 212h56M252 224h36" stroke="#14162B" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

/** PWS Spaces: a storage block linked to two portable copies. */
export function SpacesArt() {
  return (
    <svg viewBox="0 0 360 260">
      <path d="M180 30 L320 100 L180 170 L40 100 Z" fill="#F4EEE2" stroke="#14162B" strokeWidth="3" />
      <path d="M40 100 L40 150 L180 220 L180 170 Z" fill="#D9A521" stroke="#14162B" strokeWidth="3" />
      <path d="M320 100 L320 150 L180 220 L180 170 Z" fill="#23408E" stroke="#14162B" strokeWidth="3" />
      <path d="M110 100 L180 65 L250 100 L180 135 Z" fill="#14162B" />
      <path d="M150 100 L180 85 L210 100 L180 115 Z" fill="#D9A521" />
      <g stroke="#F4EEE2" strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" fill="none">
        <path d="M40 140 C 0 150, 0 210, 40 230" />
        <path d="M320 140 C 360 150, 360 210, 320 230" />
      </g>
      <rect x="18" y="222" width="44" height="28" fill="#F4EEE2" stroke="#14162B" strokeWidth="3" />
      <rect x="298" y="222" width="44" height="28" fill="#F4EEE2" stroke="#14162B" strokeWidth="3" />
    </svg>
  )
}
