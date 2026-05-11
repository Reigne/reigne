import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { stack } from '../../data/stack'

export default function Stack() {
  return (
    <section className="wrap bay" id="stack">
      <SectionHeader
        eyebrow="Tooling"
        title={<>The <span className="accent">stack</span> behind the work.</>}
        copy="Tools chosen for fit, not fashion. Each category has a job; each job ships in production."
      />
      <div className="stack-grid">
        {stack.map((col, i) => (
          <motion.div
            key={col.cat}
            className="stack-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="stack-cat">{col.cat}</div>
            <ul className="stack-list">
              {col.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
