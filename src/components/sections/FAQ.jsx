import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const faqItems = [
  {
    q: 'Are you open to different budgets?',
    a: 'Yes.\n\nEvery project is different, and I am flexible depending on the scope, timeline, and goals.\n\nIf you already have a budget range in mind, feel free to send it over.',
  },
  {
    q: 'Do you work with fixed rates?',
    a: 'Some projects fit fixed pricing, while others are structured around scope and complexity.\n\nIt depends on what we are building together.',
  },
  {
    q: 'How fast can we start?',
    a: 'Usually pretty quickly.\n\nOnce we align on the scope, direction, and goals, I like moving into execution fast.',
  },
  {
    q: 'What kind of projects do you enjoy building?',
    a: 'Modern websites, automation systems, SaaS products, creative tools, and visually driven digital experiences.\n\nEspecially projects that feel ambitious, unconventional, or story-focused.',
  },
  {
    q: 'Do you work on one-off projects?',
    a: 'Yes - although I especially enjoy long-term collaborations where strategy, systems, and creative direction can evolve over time.',
  },
  {
    q: 'Why combine creativity and development?',
    a: 'Because the best digital experiences do not just work - they leave an impression.\n\nI care about both the systems behind a product and how people emotionally experience it.',
  },
  {
    q: 'What matters most when building a product?',
    a: "Clarity.\nPerformance.\nEmotion.\n\nA product should not just function properly - it should feel memorable.",
  },
  {
    q: 'Are you more creative or technical?',
    a: 'Both.\n\nI enjoy designing visual experiences just as much as building the systems behind them.\n\nThat combination shapes how I approach every project.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="wrap bay" id="faq">
      <SectionHeader
        eyebrow="Things Worth Knowing"
        title={<>Before we <span className="accent">build.</span></>}
        copy="A few clear notes on how I work, what I value, and how projects are approached."
      />

      <div className="faq-layout">
        <div className="faq-list">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.article
                key={item.q}
                className={`faq-item${isOpen ? ' open' : ''}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle" aria-hidden="true">{isOpen ? '-' : '+'}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <p className="faq-answer">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
