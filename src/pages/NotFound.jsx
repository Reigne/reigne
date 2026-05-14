import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function NotFound() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 24px',
      position: 'relative',
    }}>

      {/* Background image with zoom-out entrance */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: -86,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/backgrounds/background1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      />

      {/* Darkening overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -86,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(7,7,10,0.55) 0%, rgba(7,7,10,0.4) 50%, rgba(7,7,10,0.92) 100%)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          x: '-50%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,122,42,0.10) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.p
        {...fadeUp(0.05)}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--orange-2)',
          marginBottom: 24,
        }}
      >
        404 — Page not found
      </motion.p>

      <motion.h1
        {...fadeUp(0.15)}
        style={{ fontSize: 'clamp(72px, 16vw, 160px)', lineHeight: 0.9, margin: '0 0 32px', fontWeight: 800 }}
      >
        Lost.
      </motion.h1>

      <motion.p
        {...fadeUp(0.25)}
        style={{ color: 'rgba(244, 238, 222, 0.45)', maxWidth: 380, lineHeight: 1.65, marginBottom: 44 }}
      >
        This page doesn't exist — or it moved. Head back and let's build something that does.
      </motion.p>

      <motion.div {...fadeUp(0.35)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">
          Back to home <span className="arrow">→</span>
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          Start a build <span className="arrow">↗</span>
        </Link>
      </motion.div>
    </section>
  )
}
