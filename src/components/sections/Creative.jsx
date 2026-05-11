import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const disciplines = [
  {
    title: 'Video & Cinematic',
    desc: 'Editing, motion, and visual storytelling for brands and creators — from raw footage to finished feel.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  },
  {
    title: 'Brand & Visual',
    desc: 'Identity systems, ad creatives, art direction, and campaign visuals with a consistent point of view.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    title: 'Music & Sound',
    desc: 'Composition, mood-setting, and audio that completes the atmosphere of a digital experience.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Digital Aesthetics',
    desc: 'Texture, typography, color theory — the craft of how interfaces look and how they make people feel.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
]

export default function Creative() {
  return (
    <section className="wrap bay" id="creative">
      <motion.div
        className="creative-split"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="cs-photo">
          <img src="/images/reigne.png" alt="Elija Reigne" />
          <div className="cs-photo-badge">
            <span className="pb-name">Elija Reigne</span>
            <span className="pb-role">Creative Systems Builder</span>
          </div>
        </div>

        <div className="cs-content">
          <div className="cs-head">
            <SectionHeader
              eyebrow="The Other Half"
              title={<>Creativity drives <span className="accent">everything</span> I build.</>}
            />
            <p className="cs-copy">Outside dev, I&apos;m deep in creative work. I believe the best digital experiences happen when technical execution and creativity work together — the code is the engine; the feel is the point.</p>
          </div>

          <div className="cs-disciplines">
            {disciplines.map((d, i) => (
              <motion.div
                key={d.title}
                className="disc-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="disc-icon">{d.icon}</div>
                <div>
                  <h4 className="disc-title">{d.title}</h4>
                  <p className="disc-desc">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
