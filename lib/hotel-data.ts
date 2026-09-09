export const hotel = {
  name: 'Cloud Four Hotel Limited',
  shortName: 'Cloud Four',
  address: '54 Makinde Street, Mafoluku Oshodi, Lagos 102214, Lagos, Nigeria',
  phones: ['+234 911 915 8748', '+234 923 397 5383'],
  email: '[EMAIL ADDRESS — EDITABLE]',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud4-zoxoMm4e5mU35xnQCROERiXdQ9MmnT.jpg',
  domain: 'https://cloudfourhotelandlounge.com',
}

export const images = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',
  intro: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
  lounge: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85',
  bedroom: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85',
  bedroomTwo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
  bathroom: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
  loungeTwo: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=85',
  seating: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
  detail: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=85',
}

export const rooms = [
  { title: '[Room Type — Editable]', description: 'Comfortable accommodation for your stay.', image: images.bedroom, price: '[PRICE — EDITABLE]', amenities: ['[Amenity — Editable]', '[Amenity — Editable]', '[Amenity — Editable]', '[Amenity — Editable]'] },
  { title: '[Room Type — Editable]', description: 'An inviting space designed for relaxation.', image: images.bedroomTwo, price: '[PRICE — EDITABLE]', amenities: ['[Amenity — Editable]', '[Amenity — Editable]', '[Amenity — Editable]', '[Amenity — Editable]'] },
  { title: '[Room Type — Editable]', description: 'An elevated option for guests seeking additional comfort.', image: images.bathroom, price: '[PRICE — EDITABLE]', amenities: ['[Amenity — Editable]', '[Amenity — Editable]', '[Amenity — Editable]', '[Amenity — Editable]'] },
]

export const menu = [
  { title: 'Cocktails', items: ['[Menu item — EDITABLE]', '[Menu item — EDITABLE]', '[Menu item — EDITABLE]'] },
  { title: 'Mocktails', items: ['[Menu item — EDITABLE]', '[Menu item — EDITABLE]', '[Menu item — EDITABLE]'] },
  { title: 'Soft Drinks', items: ['[Menu item — EDITABLE]', '[Menu item — EDITABLE]', '[Menu item — EDITABLE]'] },
  { title: 'Refreshments', items: ['[Menu item — EDITABLE]', '[Menu item — EDITABLE]', '[Menu item — EDITABLE]'] },
]

export const socials = [
  { label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }, { label: 'TikTok', href: '#' },
]

export const phoneHref = (phone: string) => `tel:${phone.replace(/\D/g, '')}`
export const reserveHref = '#reservation'
