import ProductCard from './ProductCard.jsx'
import { products } from '../data/products.js'
import { STORE, buildWhatsAppLink } from '../config.js'

export default function BestSellers() {
  return (
    <section className="best-sellers">
      <div className="best-sellers__header">
        <div>
          <h2 className="section-title section-title--left">Best Selling For Women</h2>
          <p className="best-sellers__desc">
            Drape in elegance: discover our best-selling handloom sarees. Embrace the
            allure of new arrivals, a blend of tradition and contemporary style.
          </p>
          <a
            href={buildWhatsAppLink(`Hi ${STORE.name}, could you show me more of your collection?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="best-sellers__more"
          >
            See more →
          </a>
        </div>
      </div>

      <div className="best-sellers__track">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
