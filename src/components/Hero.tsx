import { BalanceScale } from './BalanceScale.tsx'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <h1>
            <span className="line">
              Own your <span className="gold">identity.</span>
            </span>{' '}
            <span className="line">Own your data.</span>
          </h1>
          <p className="hero-lede">
            SetMaat is a non-profit cooperative from Cairo building open-source tools for digital identity and
            personal data: a wallet for your credentials and keys, and storage you control, all on open standards.
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
