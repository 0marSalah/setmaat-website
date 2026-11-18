import { BalanceScale } from './BalanceScale.tsx'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <h1>
            <span className="line">
              AI in <span className="gold">balance.</span>
            </span>{' '}
            <span className="line">Owned by all of us.</span>
          </h1>
          <p className="hero-lede">
            SetMaat is a non-profit AI cooperative from Cairo. Engineers, researchers and learners build open AI
            tools for everyone: fairly, in the open, and for the people they serve.
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
            “setting Maat in place”: when the scale tips, we set it right.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
