import { PROGRAMS } from '../data/programs.ts'
import { SectionHead } from './SectionHead.tsx'
import './Programs.css'

export function Programs() {
  return (
    <section className="section" id="programs">
      <div className="wrap">
        <SectionHead title="What we do">
          Three programs, chosen and funded by members. Everything we make is released openly.
        </SectionHead>
        <div className="programs">
          {PROGRAMS.map((program, i) => (
            <a key={program.title} className="program" href={program.href}>
              <span className="num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <span className="more">{program.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
