// Single place to update store-wide settings.

// WhatsApp number in international format, no symbols (e.g. "919876543210").
// TODO: replace with the real business WhatsApp number.
export const WHATSAPP_NUMBER = '910000000000'

export const INSTAGRAM_HANDLE = 'vismayaa_boutique'

export const STORE = {
  name: 'Vismayaa Boutique',
  tagline: 'Handloom sarees, woven with tradition',
  instagram: `https://instagram.com/${INSTAGRAM_HANDLE}`,
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
