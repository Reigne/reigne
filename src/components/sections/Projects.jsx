import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import MockGateway from '../mocks/MockGateway'
import MockInbox from '../mocks/MockInbox'
import MockBuilder from '../mocks/MockBuilder'
import MockSchool from '../mocks/MockSchool'
import { projects } from '../../data/projects'

const mockMap = { gateway: MockGateway, inbox: MockInbox, builder: MockBuilder, school: MockSchool }

const DEFAULT_SHOWN = 4

function ScreenshotMock({ src, alt, url }) {
  return (
    <div className="mock" style={{ background: 'rgba(12,12,18,0.92)', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--line-2)', width: '100%' }}>
      <div className="mock-bar">
        <div className="dots">
          <span className="r" /><span className="y" /><span className="g" />
        </div>
        <div className="url">{url || 'capstone-solutions.com'}</div>
      </div>
      <img src={src} alt={alt} style={{ width: '100%', display: 'block', maxHeight: 320, objectFit: 'cover', objectPosition: 'top' }} />
    </div>
  )
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false)

  const visible = expanded ? projects : projects.slice(0, DEFAULT_SHOWN)
  const hidden = projects.length - DEFAULT_SHOWN

  return (
    <section className="wrap bay" id="work">
      <SectionHeader
        eyebrow="Selected Work"
        title={<>Production <span className="accent">systems,</span> not portfolio fluff.</>}
        copy="Every project below was built to ship — solving real problems for real users, with real data flowing through."
      />
      <div className="proj-stack">
        <AnimatePresence initial={false}>
          {visible.map((p, i) => {
            const Mock = mockMap[p.mock]
            return (
              <motion.article
                key={p.id}
                className={`project${p.flip ? ' flip' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: expanded && i >= DEFAULT_SHOWN ? (i - DEFAULT_SHOWN) * 0.1 : 0.1 }}
              >
                <div className="proj-info">
                  <div className="proj-meta">
                    <span className="num">{p.num}</span>
                    <span>{p.category}</span>
                  </div>
                  <h3 className="proj-name">{p.name}</h3>
                  <p className="proj-tagline">{p.tagline}</p>
                  <p className="proj-desc">{p.desc}</p>
                  <ul className="proj-features">
                    {p.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <div className="proj-why">
                    <strong>Why it matters →</strong> {p.why}
                  </div>
                </div>
                <div className="proj-visual">
                  {p.screenshot
                    ? <ScreenshotMock src={p.screenshot} alt={p.name} url={p.url} />
                    : <Mock />
                  }
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.button
              key="more"
              className="gallery-show-more"
              onClick={() => setExpanded(true)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <span>Show {hidden} more project{hidden !== 1 ? 's' : ''}</span>
              <svg className="gsm-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          ) : (
            <motion.button
              key="less"
              className="gallery-show-more"
              onClick={() => setExpanded(false)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
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
    </section>
  )
}
