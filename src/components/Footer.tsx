import { useState } from 'react'
import { Frieze } from './Frieze.tsx'
import { Logo } from './Logo.tsx'
import './Footer.css'

function Newsletter() {
  const [message, setMessage] = useState('')

  return (
    <div className="foot-news">
      <span className="foot-news-title">Monthly letter: releases, standards news, learning circles.</span>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          // Not connected yet: send the address to your newsletter provider here.
          setMessage("Thanks! Sign-ups open soon, so your address wasn't saved yet.")
        }}
      >
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
        <button type="submit">Subscribe</button>
      </form>
      <p className="thanks" aria-live="polite">
        {message}
      </p>
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Frieze thin />
      <div className="wrap">
        <div className="foot-cols">
          <Newsletter />
        </div>
        <div className="foot-mark" aria-hidden="true">
          <Logo height={120} tone="dark" className="foot-logo" />
          <div className="wordmark nm">SetMaat</div>
        </div>
      </div>
    </footer>
  )
}
