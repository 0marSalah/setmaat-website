/** Animated hero illustration: the feather of Maat against a group of members. The beam tips, then settles level. */
export function BalanceScale() {
  return (
    <svg
      className="scale"
      viewBox="0 0 460 380"
      role="img"
      aria-label="A balance scale with the feather of Maat on one side and a group of people on the other. It tips, then settles level."
    >
      {/* pillar */}
      <rect x="221" y="110" width="18" height="214" fill="#D9A521" />
      <rect x="176" y="322" width="108" height="20" fill="#D9A521" />
      <rect x="154" y="342" width="152" height="16" fill="#F4EEE2" />
      <circle cx="230" cy="100" r="15" fill="#F4EEE2" />
      <g className="beam">
        <rect x="70" y="104" width="320" height="12" fill="#F4EEE2" />
        <circle cx="80" cy="110" r="8" fill="#D9A521" />
        <circle cx="380" cy="110" r="8" fill="#D9A521" />
        <g className="pan-l">
          <path d="M80 110 L40 216 M80 110 L120 216" stroke="#F4EEE2" strokeWidth="2" />
          <path d="M28 216 H132 Q128 246 80 246 Q32 246 28 216 Z" fill="#D9A521" />
          {/* feather of Maat */}
          <path d="M80 128 C 104 146, 106 184, 82 214 C 64 192, 62 156, 80 128 Z" fill="#F4EEE2" />
          <path d="M80 136 L82 216" stroke="#23408E" strokeWidth="2.4" />
          <path
            d="M81 152 L94 147 M81 166 L97 161 M82 180 L96 176 M82 194 L92 192 M81 159 L68 154 M81 173 L66 169 M82 187 L69 185"
            stroke="#23408E"
            strokeWidth="1.6"
          />
        </g>
        <g className="pan-r">
          <path d="M380 110 L340 216 M380 110 L420 216" stroke="#F4EEE2" strokeWidth="2" />
          <path d="M328 216 H432 Q428 246 380 246 Q332 246 328 216 Z" fill="#D9A521" />
          {/* members: a group of equal dots */}
          <g fill="#F4EEE2">
            <circle cx="354" cy="206" r="7" />
            <circle cx="370" cy="206" r="7" />
            <circle cx="386" cy="206" r="7" />
            <circle cx="402" cy="206" r="7" />
            <circle cx="362" cy="192" r="7" />
            <circle cx="378" cy="192" r="7" />
            <circle cx="394" cy="192" r="7" />
            <circle cx="370" cy="178" r="7" />
            <circle cx="386" cy="178" r="7" />
            <circle cx="378" cy="164" r="7" fill="#D9A521" />
          </g>
        </g>
      </g>
    </svg>
  )
}
