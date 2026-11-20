import './WhySetMaat.css'

export function WhySetMaat() {
  return (
    <section className="name" id="name" aria-labelledby="name-title">
      <div className="wrap">
        <div className="name-text">
          <p className="eyebrow" id="name-title">
            Why we exist
          </p>
          <p className="statement">
            Every team building small, local AI ends up rebuilding the same thing: somewhere safe to keep a
            person's context, and a way to decide who can read it. <mark>We build that backpack once, in the open</mark>,
            so people can see what's in it and how it's used, choose who and what gets access, and carry it
            between tools instead of being locked into one.
          </p>
        </div>
      </div>
    </section>
  )
}
