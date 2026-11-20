import { BalanceScale } from './BalanceScale.tsx'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <h1>
            <span className="line">The Agentic Digital</span>{' '}
            <span className="line">
              <span className="gold">Backpack</span> Platform.
            </span>
          </h1>
          <p className="hero-lede">
            Everything your AI needs to know about you, carried by you. Notes, memories, records and archives in
            one open, encrypted store, where you decide which apps and agents can reach in. Built for small,
            local, fit-for-purpose AI by SetMaat, a non-profit cooperative from Cairo.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#work">
              See our work
            </a>
            <a className="btn btn-ghost" href="#name">
              Why “SetMaat”?
            </a>
          </div>
        </div>
        <figure className="hero-art">
          <div className="stars" aria-hidden="true" />
          <BalanceScale />
          <figcaption>
            <strong>Set + Maat</strong>
            In ancient Egypt, Maat stood for truth, fairness and order, drawn as a single feather. SetMaat means
            “setting Maat in place”. Today the scale tips toward the platforms that hold our data. We build tools
            that set it right.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
