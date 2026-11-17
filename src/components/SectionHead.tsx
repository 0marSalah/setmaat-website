import type { ReactNode } from 'react'

type SectionHeadProps = {
  title: ReactNode
  eyebrow?: string
  children: ReactNode
}

/** Section heading row: the title (with an optional eyebrow above it) on the left, a short description on the right. */
export function SectionHead({ title, eyebrow, children }: SectionHeadProps) {
  return (
    <div className="section-head">
      {eyebrow ? (
        <div className="section-title">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
      ) : (
        <h2>{title}</h2>
      )}
      <p>{children}</p>
    </div>
  )
}
