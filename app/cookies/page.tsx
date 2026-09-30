import { Footer, Header, MobileActions } from '@/components/hotel-site'

export default function CookiesPage() {
  return <><Header/><main className="bg-ivory px-5 pb-24 pt-36 text-charcoal lg:px-8"><div className="mx-auto max-w-3xl"><p className="eyebrow">Legal</p><h1 className="mt-4 font-serif text-5xl">Cookie Policy</h1><div className="prose mt-12 max-w-none"><h2>What are Cookies?</h2><p>Cookies are small text files stored on your computer or mobile device to track how you interact with our website.</p><h2>How We Use Cookies</h2><p>We use Essential Cookies to make our reservation engine work, and Analytics Cookies to understand which hotel pages are most popular.</p><h2>Controlling Cookies</h2><p>You can disable cookies through your browser settings or change your preferences via the on-screen banner at any time.</p></div></div></main><Footer/><MobileActions/></>
}
