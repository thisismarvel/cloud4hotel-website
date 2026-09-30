import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  metadataBase: new URL('https://cloudfourhotelandlounge.com'),
  title: { default: 'Cloud Four Hotel Limited | Hotel & Lounge in Oshodi, Lagos', template: '%s | Cloud Four Hotel Limited' },
  description: 'Discover Cloud Four Hotel Limited in Mafoluku, Oshodi, Lagos — comfortable accommodation and a stylish lounge experience.',
  generator: 'v0.app',
  icons: { icon: '/icon.png', shortcut: '/icon.png', apple: '/icon.png' },
  openGraph: { type: 'website', siteName: 'Cloud Four Hotel Limited', title: 'Cloud Four Hotel Limited', description: 'Stay comfortably. Relax beautifully.', url: 'https://cloudfourhotelandlounge.com' },
}
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#080808' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-charcoal"><body className="antialiased">{children}<CookieBanner />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
