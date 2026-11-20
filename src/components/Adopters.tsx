import { ADOPTERS } from '../data/adopters.ts'
import { SectionHead } from './SectionHead.tsx'
import './Adopters.css'

/** Shows "interopalliance.org" for "https://interopalliance.org/", and keeps a path like "ci.computer/memory". */
function displayUrl(href: string) {
  return href.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

export function Adopters() {
  return (
    <section className="section" id="adopters">
      <div className="wrap">
        <SectionHead eyebrow="In use" title="Who is using our tech">
          Organizations and projects building on the backpack's components today.
        </SectionHead>
        <ul className="adopters">
          {ADOPTERS.map((adopter) => (
            <li key={adopter.name} className="adopter">
              <h3>{adopter.name}</h3>
              {adopter.description ? <p>{adopter.description}</p> : null}
              <div className="adopter-urls">
                {adopter.hrefs.map((href) => (
                  <a key={href} href={href}>
                    {displayUrl(href)}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
