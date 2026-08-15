import { useEffect, useState } from 'react'
import heroImage1 from '../sarees/011.png'
import heroImage2 from '../sarees/001.png'
import heroImage3 from '../sarees/008.png'
import heroImage4 from '../sarees/013.png'
import heroImage5 from '../sarees/018.png'
import { STORE, buildWhatsAppLink } from '../config.js'

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5]
const HERO_ROTATE_MS = 5500

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroImages.length)
    }, HERO_ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      {heroImages.map((img, i) => (
        <div
          key={img}
          className={`hero__bg ${i === activeIndex ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${img})`, animationDelay: `-${i * 6}s` }}
        />
      ))}
      <div className="hero__scrim" />
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-rule" />
            Signature Collection
          </p>
          <h1 className="hero__title">Timeless Elegance</h1>
          <p className="hero__sub">
            Handpicked handloom sarees, woven with tradition. Browse the collection and
            order directly on WhatsApp.
          </p>
          <div className="hero__cta-group">
            <a href="#collection" className="hero__cta">
              Shop Now
            </a>
            <a
              href={buildWhatsAppLink(`Hi ${STORE.name}, I'd like to know more about your sarees.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta hero__cta--ghost"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <a href="#collection" className="hero__scroll-cue" aria-label="Scroll to collection">
        <span />
      </a>
    </section>
  )
}
