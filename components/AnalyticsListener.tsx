'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackScrollDepth,
  trackEmailClick,
  trackPhoneClick,
  trackCalendlyOutbound,
  trackOutboundClick,
  trackGuideClick,
  trackCaseStudyClick,
} from '@/lib/analytics'

const SCROLL_THRESHOLDS: Array<25 | 50 | 75 | 90> = [25, 50, 75, 90]
const SITE_HOST = 'logic-pac.com'

function isInternal(url: URL): boolean {
  return url.hostname === SITE_HOST || url.hostname === `www.${SITE_HOST}` || url.hostname === 'localhost'
}

function findAnchorAncestor(target: EventTarget | null): HTMLAnchorElement | null {
  let el = target as HTMLElement | null
  while (el && el !== document.body) {
    if (el.tagName === 'A' && (el as HTMLAnchorElement).href) return el as HTMLAnchorElement
    el = el.parentElement
  }
  return null
}

function anchorText(el: HTMLAnchorElement): string {
  const text = (el.textContent || '').trim().slice(0, 60)
  const label = el.getAttribute('aria-label')?.trim().slice(0, 60)
  return label || text || '(no text)'
}

export default function AnalyticsListener() {
  const pathname = usePathname()
  const firedThresholds = useRef<Set<number>>(new Set())

  // Reset scroll thresholds on client-side navigation.
  useEffect(() => {
    firedThresholds.current = new Set()
  }, [pathname])

  // Scroll depth: 25 / 50 / 75 / 90% of document height, each fires once per page view.
  useEffect(() => {
    let raf = 0
    function onScroll(): void {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const h = document.documentElement
        const scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight
        const pct = Math.round(scrolled * 100)
        for (const t of SCROLL_THRESHOLDS) {
          if (pct >= t && !firedThresholds.current.has(t)) {
            firedThresholds.current.add(t)
            trackScrollDepth({ percent: t })
          }
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  // Click delegation: mailto / tel / calendly / outbound.
  useEffect(() => {
    function onClick(e: MouseEvent): void {
      const a = findAnchorAncestor(e.target)
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (!href || href.startsWith('#')) return

      if (href.startsWith('mailto:')) {
        trackEmailClick({ ctaLocation: a.dataset.ctaLocation || inferLocation(a) })
        return
      }
      if (href.startsWith('tel:')) {
        trackPhoneClick({ ctaLocation: a.dataset.ctaLocation || inferLocation(a) })
        return
      }

      let url: URL
      try {
        url = new URL(href, window.location.origin)
      } catch {
        return
      }

      if (url.hostname === 'calendly.com' || url.hostname.endsWith('.calendly.com')) {
        trackCalendlyOutbound({
          destination: `${url.hostname}${url.pathname}`,
          ctaLocation: a.dataset.ctaLocation || inferLocation(a),
        })
        return
      }

      if (!isInternal(url)) {
        trackOutboundClick({ destination: `${url.hostname}${url.pathname}`, anchorText: anchorText(a) })
        return
      }

      // Internal content clicks: /guides/{slug} and /work/{slug}.
      // Explicit onClick on tiles in GuidesClient/WorkClient still fire for backward compat;
      // this catches nav + footer + inline links so attribution is complete.
      const guideMatch = url.pathname.match(/^\/guides\/([^/?]+)/)
      if (guideMatch) {
        trackGuideClick({ guideSlug: guideMatch[1], sourcePage: window.location.pathname })
        return
      }
      const workMatch = url.pathname.match(/^\/work\/([^/?]+)/)
      if (workMatch) {
        trackCaseStudyClick({ caseSlug: workMatch[1], sourcePage: window.location.pathname })
      }
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}

function inferLocation(a: HTMLAnchorElement): string {
  // Walk up looking for a landmark class to describe the location.
  let el: HTMLElement | null = a
  while (el && el !== document.body) {
    const cls = el.className || ''
    if (typeof cls === 'string') {
      if (cls.includes('phdr')) return 'hero'
      if (cls.includes('ftr')) return 'footer'
      if (cls.includes('sb')) return 'faq-sidebar'
      if (cls.includes('guide-faq')) return 'guide-faq'
      if (cls.includes('inside-card')) return 'inside-card'
      if (cls.includes('sources-section')) return 'sources'
      if (cls.includes('guide-bottom-line')) return 'bottom-line'
      if (cls.includes('callout')) return 'callout'
      if (cls.includes('cap-resource')) return 'capabilities-resources'
      if (cls.includes('gcards')) return 'guides-index'
      if (cls.includes('workGrid') || cls.includes('wgi')) return 'work-grid'
    }
    if (el.tagName === 'NAV') return 'nav'
    if (el.tagName === 'ARTICLE') return 'article-body'
    el = el.parentElement
  }
  return 'body'
}
