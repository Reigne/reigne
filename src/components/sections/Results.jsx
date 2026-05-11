import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

function CountUp({ target, suffix, duration = 1600 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      const start = performance.now()
      const animate = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(target % 1 === 0 ? Math.round(eased * target) : (eased * target).toFixed(1))
        if (p < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      obs.unobserve(el)
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

const cells = [
  { num: 10, suffix: '+', label: 'Production Systems Built' },
  { num: 1000, suffix: '+', label: 'Automated Leads Processed' },
  { text: 'Global', label: 'Clients & Collaborations' },
  { text: 'Hybrid', label: 'Creative + Technical' },
]

export default function Results() {
  return (
    <section className="wrap bay" id="results">
      <SectionHeader
        eyebrow="Track Record"
        title={<>Built to be <span className="accent">remembered.</span></>}
      />
      <div className="results-layout">
        <motion.div
          className="result-hero"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rh-top-bar" />
          <div className="rh-glow" />
          <div className="result-hero-num"><CountUp target={1} suffix="M+" /></div>
          <div className="result-hero-label">Combined Content Views</div>
          <p className="result-hero-sub">Across content systems, short-form edits, and digital campaigns — numbers that move the needle.</p>
        </motion.div>

        {cells.map((c, i) => (
          <motion.div
            key={i}
            className="result-cell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="rc-dot" />
            <div className={`result-num${c.text ? ' text-val' : ''}`}>
              {c.text ? c.text : <CountUp target={c.num} suffix={c.suffix} />}
            </div>
            <div className="result-lbl">{c.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
