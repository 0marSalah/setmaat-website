type LogoProps = {
  /** Rendered height in px; the width follows the artwork's 74:72 proportions. */
  height: number
  /** Use "dark" on dark backgrounds: the blue base lines switch to papyrus so they stay visible. */
  tone?: 'light' | 'dark'
  className?: string
}

// The artwork is drawn on a 100 x 100 grid; this crops it to the lotus and base lines, with no background.
const VIEWBOX = { x: 13, y: 15, width: 74, height: 72 }

/**
 * The SetMaat lotus mark, standalone (no background tile).
 * Same artwork as public/favicon.svg; keep the two in sync if the mark changes.
 * Decorative here, so hidden from screen readers (the surrounding link or text names it).
 */
export function Logo({ height, tone = 'light', className }: LogoProps) {
  const width = +((height * VIEWBOX.width) / VIEWBOX.height).toFixed(2)
  return (
    <svg
      width={width}
      height={height}
      viewBox={`${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.width} ${VIEWBOX.height}`}
      aria-hidden="true"
      className={className}
    >
      <g fill="#1FA3A0">
        <path d="M50,70 C34.07,67.93 20.05,57.78 13.1,43.29 C29.04,45.36 43.06,55.51 50,70Z" />
        <path d="M50,70 C56.94,55.51 70.96,45.36 86.9,43.29 C79.95,57.78 65.93,67.93 50,70Z" />
      </g>
      <g fill="#F2B630">
        <path d="M50,70 C36.93,60.99 29.92,45.22 32,26.9 C42.08,37.89 50.5,55.06 50,70Z" />
        <path d="M50,70 C63.07,60.99 70.08,45.22 68,26.9 C57.92,37.89 49.5,55.06 50,70Z" />
      </g>
      <path d="M50,70 C39.93,51.58 39.93,33.42 50,15 C60.07,33.42 60.07,51.58 50,70Z" fill="#E8663D" />
      <g fill={tone === 'dark' ? '#F4EEE2' : '#23408E'}>
        <rect x="18" y="75" width="64" height="4" />
        <rect x="30" y="83" width="40" height="4" />
      </g>
    </svg>
  )
}
