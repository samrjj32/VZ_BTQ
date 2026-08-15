// Single place to update store-wide settings.

// WhatsApp number in international format, no symbols (e.g. "919876543210").
export const WHATSAPP_NUMBER = '917012327899'

export const INSTAGRAM_HANDLE = 'vismayaa_boutique'

export const EMAIL = 'vismayaaboutique@gmail.com'

export const STORE = {
  name: 'Vismayaa Boutique',
  tagline: 'Handloom sarees, woven with tradition',
  instagram: `https://instagram.com/${INSTAGRAM_HANDLE}`,
  email: EMAIL,
  location: 'India',
}

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

// Opens a direct Instagram DM thread with the boutique (falls back to the
// profile if the visitor doesn't have Instagram installed).
export function buildInstagramDMLink() {
  return `https://ig.me/m/${INSTAGRAM_HANDLE}`
}
