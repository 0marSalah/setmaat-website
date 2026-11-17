type LogoProps = {
  size: number
  className?: string
}

/** The SetMaat mark: a balance scale with the feather of Maat. Decorative, so hidden from screen readers. */
export function Logo({ size, className }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true" className={className}>
      <rect width="34" height="34" fill="#23408E" />
      <rect x="4" y="10.5" width="26" height="2" fill="#F4EEE2" />
      <path d="M7 12.5 L4 20 M7 12.5 L10 20 M27 12.5 L24 20 M27 12.5 L30 20" stroke="#F4EEE2" strokeWidth="1" />
      <path d="M3 20 H11 A4 3.2 0 0 1 3 20 Z" fill="#F4EEE2" />
      <path d="M23 20 H31 A4 3.2 0 0 1 23 20 Z" fill="#F4EEE2" />
      <path d="M17 4.5 C 21.6 8, 22.2 17, 17.4 26 C 13.4 18.5, 13.2 10, 17 4.5 Z" fill="#D9A521" />
      <path d="M17 7.5 L17.4 28" stroke="#14162B" strokeWidth="1.2" />
      <rect x="12.5" y="27.5" width="9.5" height="2.2" fill="#D9A521" />
    </svg>
  )
}
