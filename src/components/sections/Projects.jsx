import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import MockGateway from '../mocks/MockGateway'
import MockInbox from '../mocks/MockInbox'
import MockBuilder from '../mocks/MockBuilder'
import MockSchool from '../mocks/MockSchool'
import { projects } from '../../data/projects'

const mockMap = { gateway: MockGateway, inbox: MockInbox, builder: MockBuilder, school: MockSchool }

export default function Projects() {
  return (
    <section className="wrap bay" id="work">
      <SectionHeader
        eyebrow="Selected Work"
        title={<>Production <span className="accent">systems,</span> not portfolio fluff.</>}
        copy="Every project below was built to ship — solving real problems for real users, with real data flowing through."
      />
      <div className="proj-stack">
        {projects.map((p, i) => {
          const Mock = mockMap[p.mock]
          return (
            <motion.article
              key={p.id}
              className={`project${p.flip ? ' flip' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
                <Mock />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
