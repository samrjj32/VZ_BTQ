import { useEffect, useState } from 'react'
import logoMark from '../assets/logo-mark-transparent.png'

const MIN_DURATION = 2200

export default function Preloader() {
  const [hiding, setHiding] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const start = Date.now()

    function finish() {
      const elapsed = Date.now() - start
      setTimeout(() => setHiding(true), Math.max(0, MIN_DURATION - elapsed))
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish)
      return () => window.removeEventListener('load', finish)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [done])

  if (done) return null

  return (
    <div
      className={`preloader ${hiding ? 'preloader--hidden' : ''}`}
      onTransitionEnd={() => hiding && setDone(true)}
      aria-hidden={hiding}
    >
      <div className="preloader__spinner">
        <img src={logoMark} alt="Vismayaa Boutique" className="preloader__logo" />
      </div>
    </div>
  )
}
