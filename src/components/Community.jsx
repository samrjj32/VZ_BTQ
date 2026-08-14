import saree004 from '../sarees/004.png'
import saree007 from '../sarees/007.png'
import saree010 from '../sarees/010.png'
import saree012 from '../sarees/012.png'
import saree013 from '../sarees/013.png'
import { STORE, INSTAGRAM_HANDLE, buildWhatsAppLink } from '../config.js'

const gallery = [saree004, saree007, saree010, saree012, saree013, saree004]

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
