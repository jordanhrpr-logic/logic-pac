'use client'

import Script from 'next/script'
import { useCallback, useEffect } from 'react'
import { trackCalendlyOutbound } from '@/lib/analytics'

const CALENDLY_URL = 'https://calendly.com/sean-logicagencyinc/30min'
const CALENDLY_DESTINATION = 'calendly.com/sean-logicagencyinc/30min'
const BADGE_SELECTOR = '.calendly-badge-widget'
const CSS_ID = 'calendly-badge-css'

type CalendlyApi = {
  initBadgeWidget: (options: {
    url: string
    text: string
    color: string
    textColor: string
    branding: boolean
  }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyApi
  }
}

export default function CalendlyBadge() {
  const initializeBadge = useCallback(() => {
    if (typeof window === 'undefined' || !window.Calendly) return
    if (document.querySelector(BADGE_SELECTOR)) return

    window.Calendly.initBadgeWidget({
      url: CALENDLY_URL,
      text: "Let's Talk",
      color: '#E0FD2C',
      textColor: '#050D1F',
      branding: true,
    })
  }, [])

  useEffect(() => {
    if (!document.getElementById(CSS_ID)) {
      const link = document.createElement('link')
      link.id = CSS_ID
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }

    const handleBadgeClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      if (!target?.closest(BADGE_SELECTOR)) return

      trackCalendlyOutbound({
        destination: CALENDLY_DESTINATION,
        ctaLocation: 'calendly-badge',
      })
    }

    document.addEventListener('click', handleBadgeClick, true)
    initializeBadge()

    return () => {
      document.removeEventListener('click', handleBadgeClick, true)
      document.querySelectorAll(BADGE_SELECTOR).forEach((widget) => widget.remove())
    }
  }, [initializeBadge])

  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={initializeBadge}
    />
  )
}
