import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const contacts = [
  { label: 'Email', value: 'elijareigne@gmail.com', href: 'mailto:elijareigne@gmail.com' },
  { label: 'Twitter / X', value: '@codebyreigne', href: 'https://x.com/codebyreigne' },
  { label: 'GitHub', value: 'github.com/reigne', href: 'https://github.com/Reigne' },
  { label: 'LinkedIn', value: 'in/elijareigne', href: 'https://www.linkedin.com/in/elijareigne/' },
]

export default function FinalCTA() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Parallax: "REIGNE" watermark drifts upward slightly as you scroll through
  const bgTextY = useTransform(scrollYProgress, [0, 1], ['6%', '-10%'])

  return (
    <div ref={sectionRef} className="outro-wrap">

      {/* Animated ambient glow — slow orange pulse */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          x: '-50%',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,122,42,0.14) 0%, rgba(255,174,92,0.06) 40%, transparent 68%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.14, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Parallax watermark — inlined so Framer can compose the transform */}
      <motion.span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-0.21em',
          left: '50%',
          x: '-50%',
          y: bgTextY,
          fontSize: '22vw',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          fontStyle: 'italic',
          color: 'rgba(255, 255, 255, 0.035)',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)',
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        REIGNE
      </motion.span>

      <section className="wrap bay" id="contact">
        <motion.div
          className="final-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Headline — accent pushed to block so it sits tighter below */}
          <h2 style={{ marginBottom: 32 }}>
            Let&apos;s build something{' '}
            <span className="accent" style={{ display: 'block', marginTop: '-0.06em' }}>
              people remember.
            </span>
          </h2>

          {/* Shorter, more confident copy */}
          <p style={{ marginBottom: 44 }}>
            Built for brands that want to stand out — not blend in.
            <br />
            Design-driven systems with real technical depth.
          </p>

          <div className="final-actions">
            <Link to="/contact" className="btn btn-primary">
              Start a build <span className="arrow">→</span>
            </Link>
            <a href="#work" className="btn btn-secondary">
              See more work <span className="arrow">↗</span>
            </a>
          </div>

          <p className="final-budget-note">
            Have a budget in mind? Feel free to send it over.
          </p>

          {/* Proof line — subtle authority signal */}
          <p style={{
            marginTop: 20,
            marginBottom: 0,
            color: 'rgba(244, 238, 222, 0.28)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            React · Motion · Automation · Design
          </p>

          {/* Contact cards — staggered in */}
          <div className="contact-grid">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                className="contact-item"
                href={c.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <div className="contact-lbl">{c.label}</div>
                <div className="contact-val">{c.value} <span className="arrow">↗</span></div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
