import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <div className="card__image-wrap">
        <img src={product.images[0]} alt={product.name} className="card__image" loading="lazy" />
      </div>
      <div className="card__body">
        <p className="card__brand">{product.brand}</p>
        <h3 className="card__name">{product.name}</h3>
      </div>
    </Link>
  )
}
