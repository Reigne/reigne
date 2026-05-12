import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { marqueeItems } from '../../data/marquee'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

export default function Hero() {
  const trackWrapRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: false })
  const [isDragging, setIsDragging] = useState(false)
  const repeatedItems = useMemo(
    () => [...marqueeItems, ...marqueeItems, ...marqueeItems],
    []
  )

  const getSegmentWidth = () => {
    const el = trackWrapRef.current
    if (!el) return 0
    return el.scrollWidth / 3
  }

  const normalizeInfiniteScroll = () => {
    const el = trackWrapRef.current
    if (!el) return
    const segment = getSegmentWidth()
    if (!segment) return

    if (el.scrollLeft < segment * 0.5) {
      el.scrollLeft += segment
    } else if (el.scrollLeft > segment * 1.5) {
      el.scrollLeft -= segment
    }
  }

  useEffect(() => {
    const el = trackWrapRef.current
    if (!el) return

    const setMiddleStart = () => {
      const segment = getSegmentWidth()
      if (segment) el.scrollLeft = segment
    }

    setMiddleStart()
    window.addEventListener('resize', setMiddleStart)
    return () => window.removeEventListener('resize', setMiddleStart)
  }, [])

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    const el = trackWrapRef.current
    if (!el) return

    dragRef.current.active = true
    dragRef.current.startX = e.clientX
    dragRef.current.startScroll = el.scrollLeft
    dragRef.current.moved = false
    setIsDragging(true)
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!dragRef.current.active) return
    const el = trackWrapRef.current
    if (!el) return

    const dx = e.clientX - dragRef.current.startX
    if (Math.abs(dx) > 3) dragRef.current.moved = true
    el.scrollLeft = dragRef.current.startScroll - dx
    normalizeInfiniteScroll()
  }

  const endDrag = (e) => {
    if (!dragRef.current.active) return
    dragRef.current.active = false
    setIsDragging(false)
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  const onClickCapture = (e) => {
    if (!dragRef.current.moved) return
    e.preventDefault()
    e.stopPropagation()
    dragRef.current.moved = false
  }

  return (
    <section className="wrap hero" id="hero">
      <motion.p
        className="hero-kicker"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Fullstack developer / creative systems
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ELIJA REIGNE
      </motion.h1>

      <motion.p
        className="hero-sub"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        I build sharp websites, automation systems, and digital experiences with a creative eye and a production mindset.
      </motion.p>

      <motion.div
        className="hero-actions"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="#work" className="btn btn-primary">View work <span className="arrow">→</span></a>
        <a href="#contact" className="btn btn-secondary">Contact <span className="arrow">↗</span></a>
      </motion.div>

      <motion.p
        className="hero-meta"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Available for select freelance work · Philippines
      </motion.p>

      <div className="hero-stack">
        {/* <span className="hs-label">Tech Stack</span> */}
        <div
          ref={trackWrapRef}
          className={`hs-track-wrap${isDragging ? ' is-dragging' : ''}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onScroll={normalizeInfiniteScroll}
          onClickCapture={onClickCapture}
        >
          <div className="hs-track">
            {repeatedItems.map((item, i) => (
              <span key={i} className="hs-item">
                <span className="hs-dot" style={{ background: item.color, border: item.border }} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
