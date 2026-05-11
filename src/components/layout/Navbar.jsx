import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Work',    href: '/#work',     id: 'work'      },
  { label: 'Process', href: '/#process',  id: 'process'   },
  { label: 'Stack',   href: '/#stack',    id: 'stack'     },
  { label: 'Journey', href: '/#timeline', id: 'timeline'  },
  { label: 'Contact', href: '/#contact',  id: 'contact'   },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navLinks
      .map(l => document.getElementById(l.id))
      .filter(Boolean)

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0, rootMargin: '-20% 0px -70% 0px' }
    )

    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="wrap nav-shell">
      <nav className="nav">
        <Link to="/" className="brand">
          <img className="brand-mark" src="/reigne-logo.png" alt="Elija Reigne logo" />
          Reigne.
        </Link>

        <div className="nav-links">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              <span style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: 'var(--orange)',
                boxShadow: active === link.id ? '0 0 7px var(--orange)' : 'none',
                opacity: active === link.id ? 1 : 0,
                transform: active === link.id ? 'scale(1)' : 'scale(0.4)',
                transition: 'opacity 220ms ease, transform 220ms ease, box-shadow 220ms ease',
                flexShrink: 0,
              }} />
              {link.label}
            </a>
          ))}
        </div>

        <a href="/#contact" className="nav-cta"><span>Start a build</span></a>
      </nav>
    </div>
  )
}
