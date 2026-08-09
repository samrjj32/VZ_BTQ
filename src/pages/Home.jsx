import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import BestSellers from '../components/BestSellers.jsx'
import CraftStory from '../components/CraftStory.jsx'
import FeatureBanner from '../components/FeatureBanner.jsx'
import Community from '../components/Community.jsx'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Hero />
      <section id="collection" className="collection">
        <BestSellers />
      </section>
      <CraftStory />
      <FeatureBanner />
      <Community />
    </>
  )
}
