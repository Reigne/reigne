import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PROJECT_TYPES = [
  'Website / Landing Page',
  'SaaS Platform',
  'Automation System',
  'Creative / Branding',
  'Full-Stack App',
  'Other',
]

const SOCIAL_LINKS = [
  { label: 'Email', val: 'elijareigne@gmail.com', href: 'mailto:elijareigne@gmail.com' },
  { label: 'Twitter / X', val: '@codebyreigne', href: 'https://x.com/codebyreigne' },
  { label: 'GitHub', val: 'github.com/Reigne', href: 'https://github.com/Reigne' },
  { label: 'LinkedIn', val: 'in/elijareigne', href: 'https://www.linkedin.com/in/elijareigne/' },
]

const STACK = ['React', 'Motion', 'Node.js', 'Supabase', 'Automation', 'Figma']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))
  const setType = (type) => setForm(prev => ({ ...prev, type }))
  const primaryContact = SOCIAL_LINKS[0]
  const secondaryLinks = SOCIAL_LINKS.slice(1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    // Wire up to Formspree / EmailJS / your API here
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="wrap">

        {/* Header */}
        <motion.div className="sec-head" {...fadeUp(0.1)}>
          <div className="contact-ambient" aria-hidden="true">
            <span className="contact-light-beam" />
          </div>
          <span className="sec-eyebrow">Contact</span>
          <h1 className="sec-title">
            Let&apos;s build something <span className="accent">together.</span>
          </h1>
          <p className="sec-copy">
            Have a project in mind? Send the shape of it over and I&apos;ll help turn the first idea into something people can actually use.
          </p>
          <div className="contact-stack-line" aria-label="Technologies I build with">
            {STACK.map((item, index) => (
              <span key={item}>
                {item}
                {index < STACK.length - 1 && <b aria-hidden="true">/</b>}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="contact-layout">

          {/* Form */}
          <motion.div className="contact-form-card" {...fadeUp(0.2)}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="success-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>
                    Message sent.
                  </h3>
                  <p style={{ margin: 0, color: 'var(--faint)', fontSize: 14, maxWidth: 320 }}>
                    Thanks for reaching out. I&apos;ll be in touch within 24 hours.
                  </p>
                  <button
                    className="btn btn-secondary"
                    style={{ marginTop: 8 }}
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', type: '', message: '' }) }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="form-stack"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Name + Email */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Elija Reigne"
                        value={form.name}
                        onChange={set('name')}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={set('email')}
                        required
                      />
                    </div>
                  </div>

                  {/* Project type */}
                  <div className="form-group">
                    <label className="form-label">Project Type <span style={{ color: 'var(--mute)', fontWeight: 400 }}>(optional)</span></label>
                    <div className="form-types">
                      {PROJECT_TYPES.map(type => (
                        <button
                          key={type}
                          type="button"
                          className={`form-type-btn${form.type === type ? ' selected' : ''}`}
                          onClick={() => setType(form.type === type ? '' : type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      rows={5}
                      placeholder="Tell me about your project - what you're building, what you need, and any relevant timeline..."
                      value={form.message}
                      onChange={set('message')}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="btn btn-primary contact-submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <LoadingSpinner /> Sending...
                      </>
                    ) : (
                      <>Send message <span className="arrow" aria-hidden="true">&rarr;</span></>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sidebar */}
          <motion.div className="contact-sidebar" {...fadeUp(0.3)}>

            <div className="contact-info-column">
              <div className="info-section availability-section">
                <div className="side-card-title">Availability</div>
                <div className="availability-line">
                  <span className="avail-dot" />
                  <span>Available for selected projects</span>
                </div>
                <p>
                  Based in the Philippines, building worldwide. Usually replies within a few hours.
                </p>
                <div className="build-note">
                  <span>Building with</span>
                  <strong>{STACK.join(', ')}</strong>
                </div>
              </div>

              <div className="info-section direct-section">
                <div className="side-card-title">Reach out directly</div>
                <motion.a
                  href={primaryContact.href}
                  className="side-link primary-contact"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                >
                  <div>
                    <div className="sl-label">{primaryContact.label}</div>
                    <div className="sl-val">{primaryContact.val}</div>
                  </div>
                  <span className="sl-arrow" aria-hidden="true">&rarr;</span>
                </motion.a>
                <div className="side-links">
                  {secondaryLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="side-link secondary-contact"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.42 + i * 0.07 }}
                    >
                      <div>
                        <div className="sl-label">{link.label}</div>
                        <div className="sl-val">{link.val}</div>
                      </div>
                      <span className="sl-arrow" aria-hidden="true">↗</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="info-section human-note">
                <p>
                  Best projects start as a clear direction, a strange little idea, or a problem that keeps asking to be designed better.
                </p>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <svg
      width="14" height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{ animation: 'spin 0.7s linear infinite' }}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  )
}
