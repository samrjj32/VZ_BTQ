import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getProductById } from '../data/products.js'
import { STORE, buildWhatsAppLink, buildInstagramDMLink } from '../config.js'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  const [activeImage, setActiveImage] = useState(0)
  const [copied, setCopied] = useState(false)
  const quantity = 1

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) return <Navigate to="/" replace />

  const photoUrl = `${window.location.origin}${product.images[activeImage]}`

  const message = [
    `Hi ${STORE.name}, I'd like to order:`,
    `• ${product.name}`,
    product.serial ? `• Product code: #${product.serial}` : null,
    `• Quantity: ${quantity}`,
    `• Price: ₹${product.price.toLocaleString('en-IN')}`,
    `• Photo: ${photoUrl}`,
  ]
    .filter(Boolean)
    .join('\n')

  const handleInstagramClick = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 5000)
    } catch {
      // Clipboard API unavailable — visitor can still type the order manually.
    }
  }

  return (
    <section className="detail">
      <Link to="/" className="detail__back">
        ← Back to collection
      </Link>

      <div className="detail__layout">
        <div className="detail__gallery">
          <div className="detail__thumbs">
            {product.images.map((img, i) => (
              <button
                key={img}
                type="button"
                className={`detail__thumb ${i === activeImage ? 'is-active' : ''}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={img} alt={`${product.name} thumbnail ${i + 1}`} />
              </button>
            ))}
          </div>
          <div className="detail__main-image">
            <img src={product.images[activeImage]} alt={product.name} />
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__brand">{product.brand}</p>
          {product.serial && <p className="detail__serial">Product #{product.serial}</p>}
          <h1 className="detail__title">{product.name}</h1>

          <div className="detail__price">
            <span className="detail__price-now">₹{product.price.toLocaleString('en-IN')}</span>
          </div>

          <p className="detail__description">{product.description}</p>

          {product.highlights?.length > 0 && (
            <ul className="detail__highlights">
              {product.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          <div className="detail__qty">
            <span className="detail__qty-label">Quantity</span>
            <div className="detail__qty-stepper">
              <button type="button" className="detail__qty-btn" disabled aria-label="Decrease quantity">
                −
              </button>
              <span className="detail__qty-value">{quantity}</span>
              <button type="button" className="detail__qty-btn" disabled aria-label="Increase quantity">
                +
              </button>
            </div>
          </div>

          <div className="detail__actions">
            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="detail__order-btn detail__order-btn--whatsapp"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </a>

            <a
              href={buildInstagramDMLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="detail__order-btn detail__order-btn--instagram"
              onClick={handleInstagramClick}
            >
              <InstagramIcon />
              Order on Instagram
            </a>
          </div>

          {copied && (
            <p className="detail__copied-note">
              Order details copied — paste them into the chat that just opened.
            </p>
          )}

          <p className="detail__note">
            We don't process payments online. Tap a button above to send your order
            details straight to us — we'll confirm price, size &amp; delivery there.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.65 4.6 1.87 6.57L4 29l7.6-1.83a11.98 11.98 0 0 0 4.42.84h.01c6.62 0 12.02-5.4 12.02-12.02C28.04 8.4 22.65 3 16.02 3Zm0 21.86h-.01a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-4.5 1.08 1.2-4.38-.24-.45a9.86 9.86 0 0 1-1.5-5.29c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.45 9.63-9.35 9.63Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
