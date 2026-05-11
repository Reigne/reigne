import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const steps = [
  { num: '01 — Research', name: 'Understand the landscape.', desc: 'Decoding trends, competitors, and user behavior before a single line of code or pixel gets shipped.' },
  { num: '02 — Strategy', name: 'Architect for engagement.', desc: 'Structuring systems, content, and flows around the outcomes that actually move the needle.' },
  { num: '03 — Design', name: 'Craft the surface.', desc: 'Clean, cinematic, modern interfaces — built around clarity, motion, and a strong point of view.' },
  { num: '04 — Development', name: 'Build the engine.', desc: 'Scalable frontend and backend systems written to be readable, fast, and unsurprising under load.' },
  { num: '05 — Optimization', name: 'Refine after launch.', desc: "Tuning UX, automation, and performance once real users are in the system — that's when the work actually starts." },
]

export default function Process() {
  return (
    <section className="wrap bay" id="process">
      <SectionHeader
        eyebrow="Creative Process"
        title={<>From concept to <span className="accent">execution.</span></>}
      />
      <div className="process-list">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="process-row"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <span className="process-num">{s.num}</span>
            <h3 className="process-name">{s.name}</h3>
            <p className="process-desc">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
