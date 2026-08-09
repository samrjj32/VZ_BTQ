import saree1 from '../assets/product-saree-1.jpg'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${saree1})` }}>
      <div className="hero__scrim" />
      <div className="hero__inner">
        <p className="hero__eyebrow">Signature Collection</p>
        <h1 className="hero__title">Timeless Elegance</h1>
        <p className="hero__sub">
          Handpicked handloom sarees, woven with tradition. Browse the collection and
          order directly on WhatsApp.
        </p>
        <a href="#collection" className="hero__cta">
          Shop Now
        </a>
      </div>
    </section>
  )
}
