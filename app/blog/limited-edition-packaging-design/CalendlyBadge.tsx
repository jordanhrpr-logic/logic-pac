'use client'

import Script from 'next/script'
import { useCallback, useEffect } from 'react'
import { trackCalendlyOutbound } from '@/lib/analytics'

const CALENDLY_URL = 'https://calendly.com/sean-logicagencyinc/30min'
const CALENDLY_DESTINATION = 'calendly.com/sean-logicagencyinc/30min'

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
    if (document.querySelector('.calendly-badge-widget')) return

    window.Calendly.initBadgeWidget({
      url: CALENDLY_URL,
      text: "Let's Talk",
      color: '#E0FD2C',
      textColor: '#050D1F',
      branding: true,
    })
  }, [])

  useEffect(() => {
    // The generated Calendly button is not a normal site anchor, so the
    // global anchor listener cannot attribute its click reliably.
    const handleBadgeClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      if (!target?.closest('.calendly-badge-widget')) return

      trackCalendlyOutbound({
        destination: CALENDLY_DESTINATION,
        ctaLocation: 'calendly-badge-limited-edition',
      })
    }

    document.addEventListener('click', handleBadgeClick, true)
    initializeBadge()

    return () => {
      document.removeEventListener('click', handleBadgeClick, true)
      document.querySelectorAll('.calendly-badge-widget').forEach((widget) => widget.remove())
    }
  }, [initializeBadge])

  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initializeBadge}
      />
    </>
  )
}
