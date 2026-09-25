'use client'

import { useEffect } from 'react'

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void
}

function linkLocation(link: HTMLAnchorElement): string {
  if (link.closest('footer')) return 'footer'
  if (link.closest('nav')) return 'navigation'
  if (link.closest('.ctas, .guide-cta')) return 'page_cta'
  if (link.closest('.blog-body, .guide-main, .kcr')) return 'content'
  return 'page'
}

export default function AnalyticsClickTracker() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest<HTMLAnchorElement>('a[href]')
      if (!link) return

      const href = link.getAttribute('href') || ''
      const analyticsWindow = window as AnalyticsWindow
      const parameters = {
        page_path: window.location.pathname,
        link_location: linkLocation(link),
      }

      if (/^https:\/\/(?:www\.)?calendly\.com\//i.test(href)) {
        analyticsWindow.gtag?.('event', 'consultation_click', {
          ...parameters,
          booking_provider: 'calendly',
        })
        return
      }

      if (href.startsWith('mailto:')) {
        analyticsWindow.gtag?.('event', 'email_click', parameters)
        return
      }

      if (href.startsWith('tel:')) {
        analyticsWindow.gtag?.('event', 'phone_click', parameters)
      }
    }

    document.addEventListener('click', trackClick)
    return () => document.removeEventListener('click', trackClick)
  }, [])

  return null
}
