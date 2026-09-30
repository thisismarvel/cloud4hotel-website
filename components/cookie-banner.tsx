'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(document.cookie.indexOf('cloud4-cookie-choice=') === -1) }, [])
  if (!visible) return null
  const choose = (value: string) => { document.cookie = `cloud4-cookie-choice=${value}; max-age=31536000; path=/; SameSite=Lax`; setVisible(false) }
  return <aside className="fixed inset-x-4 bottom-20 z-[60] rounded-sm border border-gold/40 bg-charcoal p-5 text-ivory shadow-2xl md:inset-x-auto md:bottom-6 md:right-6 md:max-w-md" role="dialog" aria-label="Cookie preferences"><p className="text-sm leading-6 text-muted-ivory">Cloud Four Hotel Limited uses cookies to enhance your browsing experience, analyze site traffic, and assist our marketing efforts. By clicking &apos;Accept All&apos;, you consent to our use of cookies. You can manage your preferences or read our full <Link className="text-gold underline" href="/cookies">Cookie Policy</Link>.</p><div className="mt-5 flex flex-wrap gap-3"><button className="gold-button" onClick={() => choose('accepted')}>Accept All</button><button className="outline-button" onClick={() => choose('rejected')}>Reject Non-Essential</button></div></aside>
}
