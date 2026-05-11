import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { timeline } from '../../data/timeline'

export default function Timeline() {
  return (
    <section className="wrap bay" id="timeline">
      <SectionHeader
        eyebrow="Journey"
        title={<>The <span className="accent">trajectory</span> so far.</>}
      />
      <div className="timeline">
        {timeline.map((item, i) => (
          <motion.div
            key={item.id}
            className="tl-item"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="tl-year">{item.year}</span>
            <h3 className="tl-role">{item.role}</h3>
            <p className="tl-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
