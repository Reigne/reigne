import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const galleryItems = [
  { tag: 'Branding', title: 'Logo & Identity System', height: 300, gradient: 'linear-gradient(145deg,rgba(255,122,42,0.22) 0%,rgba(11,11,18,0.95) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="32" rx="6" stroke="rgba(255,122,42,0.4)" strokeWidth="1.5"/><circle cx="24" cy="24" r="8" stroke="rgba(255,174,92,0.5)" strokeWidth="1.5"/><line x1="8" y1="24" x2="40" y2="24" stroke="rgba(255,122,42,0.2)" strokeWidth="1"/></svg> },
  { tag: 'Social Media', title: 'Social Media Kit', height: 210, gradient: 'linear-gradient(135deg,rgba(106,163,255,0.18) 0%,rgba(11,11,18,0.97) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="4" stroke="rgba(106,163,255,0.4)" strokeWidth="1.5"/><rect x="12" y="16" width="10" height="10" rx="2" fill="rgba(106,163,255,0.15)" stroke="rgba(106,163,255,0.3)" strokeWidth="1"/><line x1="26" y1="18" x2="36" y2="18" stroke="rgba(106,163,255,0.25)" strokeWidth="1.5"/><line x1="26" y1="22" x2="34" y2="22" stroke="rgba(106,163,255,0.15)" strokeWidth="1.5"/></svg> },
  { tag: 'Print', title: 'Poster Design', height: 340, gradient: 'linear-gradient(160deg,rgba(255,122,184,0.16) 0%,rgba(7,7,10,0.98) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="10" y="6" width="28" height="36" rx="3" stroke="rgba(255,122,184,0.4)" strokeWidth="1.5"/><line x1="15" y1="16" x2="33" y2="16" stroke="rgba(255,122,184,0.3)" strokeWidth="2"/><line x1="15" y1="22" x2="30" y2="22" stroke="rgba(255,122,184,0.2)" strokeWidth="1.5"/><line x1="15" y1="27" x2="28" y2="27" stroke="rgba(255,122,184,0.15)" strokeWidth="1.5"/></svg> },
  { tag: 'Guidelines', title: 'Brand Guidelines', height: 250, gradient: 'linear-gradient(135deg,rgba(158,227,125,0.14) 0%,rgba(11,11,18,0.97) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="14" stroke="rgba(158,227,125,0.35)" strokeWidth="1.5"/><circle cx="24" cy="24" r="8" stroke="rgba(158,227,125,0.25)" strokeWidth="1"/><line x1="24" y1="10" x2="24" y2="38" stroke="rgba(158,227,125,0.15)" strokeWidth="1"/><line x1="10" y1="24" x2="38" y2="24" stroke="rgba(158,227,125,0.15)" strokeWidth="1"/></svg> },
  { tag: 'UI / UX', title: 'Interface Mockup', height: 220, gradient: 'linear-gradient(135deg,rgba(247,196,107,0.16) 0%,rgba(11,11,18,0.97) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="8" width="36" height="32" rx="5" stroke="rgba(247,196,107,0.35)" strokeWidth="1.5"/><rect x="10" y="12" width="28" height="16" rx="3" fill="rgba(247,196,107,0.06)" stroke="rgba(247,196,107,0.2)" strokeWidth="1"/><line x1="10" y1="33" x2="22" y2="33" stroke="rgba(247,196,107,0.2)" strokeWidth="1.5"/></svg> },
  { tag: 'Typography', title: 'Type Exploration', height: 310, gradient: 'linear-gradient(145deg,rgba(255,122,42,0.1) 0%,rgba(106,163,255,0.12) 60%,rgba(11,11,18,0.98) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><text x="8" y="30" fontSize="20" fontFamily="monospace" fill="rgba(255,122,42,0.45)" fontWeight="700">Aa</text><line x1="8" y1="36" x2="40" y2="36" stroke="rgba(255,122,42,0.2)" strokeWidth="1.5"/></svg> },
  { tag: 'Motion', title: 'Motion Thumbnail Design', height: 230, gradient: 'linear-gradient(135deg,rgba(255,122,42,0.18) 0%,rgba(158,227,125,0.1) 60%,rgba(11,11,18,0.98) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><polygon points="24,8 40,36 8,36" stroke="rgba(255,122,42,0.35)" strokeWidth="1.5" fill="rgba(255,122,42,0.06)"/></svg> },
  { tag: 'Editorial', title: 'Editorial Layout', height: 290, gradient: 'linear-gradient(155deg,rgba(106,163,255,0.14) 0%,rgba(255,122,184,0.1) 55%,rgba(11,11,18,0.98) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="32" height="24" rx="3" stroke="rgba(106,163,255,0.35)" strokeWidth="1.5"/><line x1="8" y1="20" x2="40" y2="20" stroke="rgba(106,163,255,0.2)" strokeWidth="1"/><line x1="18" y1="12" x2="18" y2="36" stroke="rgba(106,163,255,0.15)" strokeWidth="1"/></svg> },
  { tag: 'Identity', title: 'Visual Identity System', height: 240, gradient: 'linear-gradient(135deg,rgba(247,196,107,0.14) 0%,rgba(255,122,42,0.1) 60%,rgba(11,11,18,0.98) 100%)', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="10" y="10" width="28" height="28" rx="14" stroke="rgba(247,196,107,0.35)" strokeWidth="1.5"/><rect x="18" y="18" width="12" height="12" rx="6" fill="rgba(247,196,107,0.12)" stroke="rgba(247,196,107,0.3)" strokeWidth="1"/></svg> },
]

export default function Gallery() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="wrap bay" id="design">
      <SectionHeader
        eyebrow="Graphic Design"
        title={<>Visuals that <span className="accent">speak.</span></>}
        copy="Brand identities, social kits, posters, and visual systems — built with intention."
      />

      <div className="gallery-wrap">
        <div className="gallery-masonry">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <div
                className="gi-thumb"
                style={{ height: item.height, background: item.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {item.icon}
              </div>
              <div className="gi-overlay">
                <div className="gi-tag">{item.tag}</div>
                <div className="gi-title">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {!expanded && (
            <motion.div
              className="gallery-fade"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button className="gallery-show-more" onClick={() => setExpanded(true)}>
                <span>Show more work</span>
                <svg className="gsm-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
