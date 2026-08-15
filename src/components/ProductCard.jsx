import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <div className={`card__image-wrap${!product.inStock ? ' card__image-wrap--sold-out' : ''}`}>
        <img src={product.images[0]} alt={product.name} className="card__image" loading="lazy" />
        {product.serial && <span className="card__serial">#{product.serial}</span>}
        {!product.inStock && <span className="card__sold-out-badge">Sold Out</span>}
      </div>
      <div className="card__body">
        <p className="card__brand">{product.brand}</p>
        <h3 className="card__name">{product.name}</h3>
        <div className="card__price">
          <span className="card__price-now">₹{product.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </Link>
  )
}
