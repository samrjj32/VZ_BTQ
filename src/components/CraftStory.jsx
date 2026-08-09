import saree2 from '../assets/product-saree-2.jpg'
import { STORE, buildWhatsAppLink } from '../config.js'

export default function CraftStory() {
  return (
    <section id="craft" className="craft">
      <div className="craft__image">
        <img src={saree2} alt="Handwoven saree detail" loading="lazy" />
      </div>
      <div className="craft__text">
        <h2 className="section-title section-title--left">
          Woven Using Pure, Traditional Fibers
        </h2>
        <p>
          Every saree at {STORE.name} is handpicked for its craftsmanship — premium
          cotton, gold zari borders, and traditional kasavu-style weaves rooted in
          heritage. Each piece is chosen to bring authentic, timeless elegance to your
          wardrobe.
        </p>
        <a
          href={buildWhatsAppLink(`Hi ${STORE.name}, I'd love to know more about your sarees.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="craft__cta"
        >
          Chat With Us →
        </a>
      </div>
    </section>
  )
}
