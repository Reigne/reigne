import { motion } from 'framer-motion'

const tags = [
  'AI workflow systems',
  'Automation infrastructure',
  'Creative-tech branding',
  'SaaS platforms',
  'Modern UI systems',
  'Interactive digital experiences',
]

export default function CurrentlyBuilding() {
  return (
    <section className="wrap bay" id="now">
      <motion.div
        className="building"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="building-head">
          <span className="blink" />
          Currently Exploring · Live Workbench
        </div>
        <div className="building-list">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
