import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import DecoCode from '../decorations/DecoCode'
import DecoCreative from '../decorations/DecoCreative'
import DecoFlow from '../decorations/DecoFlow'
import DecoUI from '../decorations/DecoUI'

const cards = [
  { num: '01 — Development', title: 'Development', copy: 'Modern websites, SaaS platforms, dashboards, APIs, and scalable systems.', Deco: DecoCode },
  { num: '02 — Creative', title: 'Creative', copy: 'Video editing, creative direction, ad creatives, branding, and visual storytelling.', Deco: DecoCreative },
  { num: '03 — Automation', title: 'Automation', copy: 'n8n workflows, Supabase systems, CRM integrations, APIs, and backend automations.', Deco: DecoFlow },
  { num: '04 — Experience Design', title: 'Experience Design', copy: 'Creating interfaces that feel smooth, premium, and memorable.', Deco: DecoUI },
]

export default function Identity() {
  return (
    <section className="wrap bay" id="identity">
      <SectionHeader
        eyebrow="Identity"
        title={<>More than just <span className="accent">code.</span></>}
        copy="I combine development, design, content creation, and automation to build digital experiences that look good, perform well, and actually connect with people."
      />
      <div className="id-grid">
        {cards.map(({ num, title, copy, Deco }, i) => (
          <motion.article
            key={num}
            className="id-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="id-deco"><Deco /></div>
            <div className="id-card-content">
              <span className="id-num">{num}</span>
              <h3 className="id-title">{title}</h3>
              <p className="id-copy">{copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
