import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="wrap bay" id="testimonials">
      <SectionHeader
        eyebrow="Word From The Room"
        title={<>What people say after <span className="accent">working</span> with me.</>}
      />
      <div className="test-grid">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.id}
            className="test"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="test-stars">★ ★ ★ ★ ★</div>
            <p className="test-quote">{t.quote}</p>
            <div className="test-author">
              <div className="test-avatar">{t.initials}</div>
              <div>
                <p className="test-name">{t.name}</p>
                <p className="test-role">{t.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
