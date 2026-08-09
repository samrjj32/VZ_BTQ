import saree3 from '../assets/product-saree-3.jpg'

export default function FeatureBanner() {
  return (
    <section className="feature-banner" style={{ backgroundImage: `url(${saree3})` }}>
      <div className="feature-banner__scrim" />
      <div className="feature-banner__content">
        <h2>Sculpting Elegance</h2>
        <p>Where every drape carries the artistry of tradition</p>
        <a href="#collection" className="feature-banner__cta">
          Explore Collection
        </a>
      </div>
    </section>
  )
}
