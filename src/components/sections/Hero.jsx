import { motion } from 'framer-motion'
import { marqueeItems } from '../../data/marquee'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section className="wrap hero">
      <motion.p
        className="hero-kicker"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Fullstack developer / creative systems
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ELIJA REIGNE
      </motion.h1>

      <motion.p
        className="hero-sub"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        I build sharp websites, automation systems, and digital experiences with a creative eye and a production mindset.
      </motion.p>

      <motion.div
        className="hero-actions"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="#work" className="btn btn-primary">View work <span className="arrow">→</span></a>
        <a href="#contact" className="btn btn-secondary">Contact <span className="arrow">↗</span></a>
      </motion.div>

      <motion.p
        className="hero-meta"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Available for select freelance work · Philippines
      </motion.p>

      <div className="hero-stack">
        {/* <span className="hs-label">Tech Stack</span> */}
        <div className="hs-track-wrap">
          <div className="hs-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="hs-item">
                <span className="hs-dot" style={{ background: item.color, border: item.border }} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
