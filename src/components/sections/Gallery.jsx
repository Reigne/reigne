import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { GALLERY_ITEMS, DEFAULT_COUNT } from '../../data/gallery'

const LOAD_MORE = 10
const ROW_HEIGHT = 320

function clampedHeight(count) {
  return Math.ceil(count / 3) * ROW_HEIGHT
}

const FADE_MASK = 'linear-gradient(to bottom, black 0%, black 55%, transparent 95%)'

export default function Gallery() {
  const [count, setCount] = useState(DEFAULT_COUNT)

  const allShown = count >= GALLERY_ITEMS.length

  const showMore = () => setCount(prev => Math.min(prev + LOAD_MORE, GALLERY_ITEMS.length))
  const showLess = () => setCount(DEFAULT_COUNT)

  return (
    <section className="wrap bay" id="design">
      <SectionHeader
        eyebrow="Graphic Design"
        title={<>Visuals that <span className="accent">speak.</span></>}
        copy="Brand identities, social kits, posters, and visual systems — built with intention."
      />

      <div className="gallery-wrap">
        {/* Clip wrapper — mask fades images out at the bottom instead of overlaying black */}
        <motion.div
          style={{
            overflow: 'hidden',
            maskImage: allShown ? 'none' : FADE_MASK,
            WebkitMaskImage: allShown ? 'none' : FADE_MASK,
          }}
          animate={{ maxHeight: allShown ? 99999 : clampedHeight(count) }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="gallery-masonry">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={item.src}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <div className="gi-thumb">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div className="gi-overlay">
                  <div className="gi-tag">{item.tag}</div>
                  <div className="gi-title">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Button sits outside the clip/mask */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
          <AnimatePresence mode="wait">
            {!allShown ? (
              <motion.button
                key="more"
                className="gallery-show-more"
                onClick={showMore}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
              >
                <span>Show more work</span>
                <svg className="gsm-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            ) : (
              <motion.button
                key="less"
                className="gallery-show-more"
                onClick={showLess}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ rotate: '180deg' }}>
                  <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Show less</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
