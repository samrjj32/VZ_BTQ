import { Link } from 'react-router-dom'
import logoMark from '../assets/logo-mark-transparent.png'
import { STORE, buildWhatsAppLink, buildInstagramDMLink } from '../config.js'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          <img src={logoMark} alt="" className="header__logo" />
          <span className="header__name">
            Vismayaa
            <small>Boutique</small>
          </span>
        </Link>

        <nav className="header__nav">
          <Link to="/">Home</Link>
          <a href="/#collection">Shop</a>
          <a href="/#craft">Our Craft</a>
        </nav>

        <div className="header__actions">
          <a
            href={buildInstagramDMLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="header__icon-btn"
            aria-label="Message us on Instagram"
          >
            <InstagramIcon />
          </a>

          <a
            href={buildWhatsAppLink(`Hi ${STORE.name}, I'd like to know more about your collection.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="header__whatsapp"
          >
            <WhatsAppIcon />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.65 4.6 1.87 6.57L4 29l7.6-1.83a11.98 11.98 0 0 0 4.42.84h.01c6.62 0 12.02-5.4 12.02-12.02C28.04 8.4 22.65 3 16.02 3Zm0 21.86h-.01a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-4.5 1.08 1.2-4.38-.24-.45a9.86 9.86 0 0 1-1.5-5.29c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.45 9.63-9.35 9.63Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}
