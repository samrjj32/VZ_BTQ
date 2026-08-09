import saree1 from '../assets/product-saree-1.jpg'
import saree2 from '../assets/product-saree-2.jpg'
import saree3 from '../assets/product-saree-3.jpg'
import { STORE, INSTAGRAM_HANDLE, buildWhatsAppLink } from '../config.js'

const gallery = [saree1, saree2, saree3, saree2, saree3, saree1]

export default function Community() {
  return (
    <section className="community">
      <div className="community__text">
        <h2 className="section-title section-title--left">
          Stay in the Loop on WhatsApp
        </h2>
        <p>
          Be the first to know about new arrivals, festive collections, and special
          offers — straight from us to your WhatsApp, no spam, no inbox clutter.
        </p>
        <a
          href={buildWhatsAppLink(`Hi ${STORE.name}, please add me to your updates list.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="community__cta"
        >
          Get Updates on WhatsApp
        </a>
        <a
          href={STORE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="community__insta"
        >
          Follow us @{INSTAGRAM_HANDLE} on Instagram
        </a>
      </div>
      <div className="community__gallery">
        {gallery.map((img, i) => (
          <img key={i} src={img} alt="" loading="lazy" />
        ))}
      </div>
    </section>
  )
}
