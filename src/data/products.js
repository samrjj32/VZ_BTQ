import saree1 from '../assets/product-saree-1.jpg'
import saree2 from '../assets/product-saree-2.jpg'
import saree3 from '../assets/product-saree-3.jpg'

// Add new products by appending another object to this array.
// `images[0]` is used as the card thumbnail on the listing page.
export const products = [
  {
    id: 'premium-cotton-set-saree-02',
    name: 'Premium Cotton Set Saree (with Brocade Blouse)',
    brand: 'Vismayaa Boutique',
    price: 2294,
    mrp: 2699,
    description:
      'A classic cream and gold Kerala-style set saree woven in premium cotton, paired with a matching brocade blouse piece. Featuring a rich temple-inspired gold border and floral motifs across the pallu, this saree is perfect for festive occasions, poojas, and traditional celebrations.',
    highlights: [
      'Premium cotton fabric with gold zari border',
      'Matching brocade blouse piece included',
      'Traditional Kerala kasavu-style weave',
      'Ideal for festivals, poojas & weddings',
    ],
    images: [saree1, saree3, saree2],
    inStock: true,
    stockLeft: 4,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}
