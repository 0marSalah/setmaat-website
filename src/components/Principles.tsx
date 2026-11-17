import { PRINCIPLES } from '../data/principles.ts'
import './Principles.css'

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M9 1 L11 7 L17 9 L11 11 L9 17 L7 11 L1 9 L7 7 Z" fill="#14162B" />
    </svg>
  )
}

export function Principles() {
  return (
    <section className="strip" aria-label="Our principles">
      <ul>
        {PRINCIPLES.map((principle) => (
          <li key={principle}>
            <Star />
            {principle}
          </li>
        ))}
      </ul>
    </section>
  )
}
