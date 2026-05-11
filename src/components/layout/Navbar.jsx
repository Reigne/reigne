import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work',    href: '/#work',     id: 'work'      },
  { label: 'Process', href: '/#process',  id: 'process'   },
  { label: 'Stack',   href: '/#stack',    id: 'stack'     },
  { label: 'Journey', href: '/#timeline', id: 'timeline'  },
  { label: 'Contact', href: '/#contact',  id: 'contact'   },
]

export default function Navbar() {
  const [active, setActive]   = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

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

  useEffect(() => {
    const onKey    = (e) => { if (e.key === 'Escape') close() }
    const onResize = () => { if (window.innerWidth > 820) close() }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <div className="wrap nav-shell">
        <nav className="nav">
          <Link to="/" className="brand" onClick={close}>
            <img className="brand-mark" src="/reigne-logo.png" alt="Elija Reigne logo" />
            Reigne.
          </Link>

          {/* Desktop links */}
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

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.svg
              width="18" height="18" viewBox="0 0 18 18" fill="none"
              animate={menuOpen ? 'open' : 'closed'}
            >
              <motion.line
                x1="2" y1="4.5" x2="16" y2="4.5"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                variants={{ closed: { rotate: 0, y: 0, opacity: 1 }, open: { rotate: 45, y: 4.5, opacity: 1 } }}
                style={{ originX: '9px', originY: '4.5px' }}
              />
              <motion.line
                x1="2" y1="9" x2="16" y2="9"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              />
              <motion.line
                x1="2" y1="13.5" x2="16" y2="13.5"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                variants={{ closed: { rotate: 0, y: 0, opacity: 1 }, open: { rotate: -45, y: -4.5, opacity: 1 } }}
                style={{ originX: '9px', originY: '13.5px' }}
              />
            </motion.svg>
          </button>

          <Link to="/contact" className="nav-cta" onClick={close}>
            <span>Start a build</span>
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />
            <motion.nav
              className="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className="mobile-link"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.04 }}
                  onClick={close}
                >
                  <span className="mobile-link-dot" style={{
                    background: active === link.id ? 'var(--orange)' : 'var(--line-2)',
                    boxShadow: active === link.id ? '0 0 7px var(--orange)' : 'none',
                  }} />
                  {link.label}
                </motion.a>
              ))}

              <div className="mobile-menu-divider" />

              <Link to="/contact" className="btn btn-primary mobile-menu-cta" onClick={close}>
                Start a build <span className="arrow">→</span>
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
