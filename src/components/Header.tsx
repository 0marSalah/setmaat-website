import { useEffect, useRef, useState } from 'react'
import { Logo } from './Logo.tsx'
import './Header.css'

const NAV_LINKS = [
  { href: '#programs', label: 'Programs' },
  { href: '#name', label: 'Why SetMaat' },
  { href: '#work', label: 'Our work' },
  { href: '#members', label: 'Members' },
]

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      {open ? (
        <path d="M3 3 L15 15 M15 3 L3 15" stroke="currentColor" strokeWidth="2" />
      ) : (
        <path d="M1 4 H17 M1 9 H17 M1 14 H17" stroke="currentColor" strokeWidth="2" />
      )}
    </svg>
  )
}

export function Header() {
  // The menu toggle is only visible on narrow screens; on wide screens the nav is always shown.
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site">
      <div className="wrap nav" data-menu-open={menuOpen}>
        <a className="brand" href="#top" aria-label="SetMaat home" onClick={closeMenu}>
          <Logo height={32} />
          <span>SetMaat</span>
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
