import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <Link to={`/product/${product.id}`} className="card">
      <div className="card__image-wrap">
        <img src={product.images[0]} alt={product.name} className="card__image" loading="lazy" />
        {discount > 0 && <span className="card__badge">-{discount}%</span>}
      </div>
      <div className="card__body">
        <p className="card__brand">{product.brand}</p>
        <h3 className="card__name">{product.name}</h3>
        <div className="card__price">
          <span className="card__price-now">₹{product.price.toLocaleString('en-IN')}</span>
          {product.mrp > product.price && (
            <span className="card__price-mrp">₹{product.mrp.toLocaleString('en-IN')}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
