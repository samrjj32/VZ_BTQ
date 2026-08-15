import logoMark from '../assets/logo-mark-transparent.png'
import { STORE, buildWhatsAppLink } from '../config.js'

export default function Footer() {
  const contactLink = buildWhatsAppLink(`Hi ${STORE.name}, I'd like to know more about your collection.`)

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src={logoMark} alt="" className="footer__logo" />
          <p className="footer__name">{STORE.name}</p>
          <p className="footer__tagline">{STORE.tagline}</p>
        </div>

        <div className="footer__col">
          <h4>Shop</h4>
          <a href="/#collection">Our Collection</a>
          <a href={contactLink} target="_blank" rel="noopener noreferrer">
            Order on WhatsApp
          </a>
        </div>

        <div className="footer__col">
          <h4>About</h4>
          <a href="/#craft">Our Craft</a>
          <span>{STORE.location}</span>
        </div>

        <div className="footer__col">
          <h4>Get in Touch</h4>
          <a href={contactLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          {STORE.instagram && (
            <a href={STORE.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          {STORE.email && <a href={`mailto:${STORE.email}`}>{STORE.email}</a>}
        </div>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} {STORE.name}. All rights reserved.
      </p>
    </footer>
  )
}
