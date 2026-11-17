import './WhySetMaat.css'

export function WhySetMaat() {
  return (
    <section className="name" id="name" aria-labelledby="name-title">
      <div className="wrap">
        <div className="dict">
          <span className="word" id="name-title">
            SetMaat
          </span>
          <span className="pron">/ set · maat / &nbsp;noun</span>
          <ol>
            <li>
              <b>Set</b>: to put something in its place.
            </li>
            <li>
              <b>Maat</b>: the ancient Egyptian idea of truth, fairness and order, drawn as a single feather.
            </li>
          </ol>
        </div>
        <div className="name-text">
          <p className="eyebrow">Why we exist</p>
          <p className="statement">
            AI is becoming the infrastructure of everyday life. It's <mark>too important to be owned by a few</mark>.
            So we build it the way Maat asks: fairly, in the open, and in balance with the people it serves.
          </p>
          <p className="small">
            SetMaat means “setting balance in place.” No investors pull the scale one way, and any surplus goes back
            into the work.
          </p>
        </div>
      </div>
    </section>
  )
}
