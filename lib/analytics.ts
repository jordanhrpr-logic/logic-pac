// Logic Pac analytics helpers.
// Fires GA4 events via the gtag('event', name, params) interface.
// All custom params map to custom dimensions registered on property 538418521.
// PII (email_address, phone_number) is intentionally never passed as a param.

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void }

type EventParams = Record<string, string | number | boolean | undefined | null>

function send(name: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return
  const w = window as GtagWindow
  if (!w.gtag) return
  const payload: EventParams = { page_path: window.location.pathname, ...params }
  // Drop undefined/null so GA4 doesn't record empty-string values.
  for (const k of Object.keys(payload)) {
    if (payload[k] === undefined || payload[k] === null) delete payload[k]
  }
  w.gtag('event', name, payload)
}

// Tier 1 — Conversion intent (candidate Key Events)

export function trackConsultationClick(opts: { projectType?: string; ctaLocation?: string } = {}): void {
  send('consultation_click', {
    project_type: opts.projectType || 'General',
    cta_location: opts.ctaLocation || 'unknown',
  })
}

export function trackEmailClick(opts: { ctaLocation?: string } = {}): void {
  send('email_click', { cta_location: opts.ctaLocation || 'unknown' })
}

export function trackPhoneClick(opts: { ctaLocation?: string } = {}): void {
  send('phone_click', { cta_location: opts.ctaLocation || 'unknown' })
}

export function trackCalendlyOutbound(opts: { destination: string; ctaLocation?: string } = { destination: '' }): void {
  send('calendly_outbound', {
    destination: opts.destination,
    cta_location: opts.ctaLocation || 'unknown',
  })
}

// Tier 2 — Engagement depth

export function trackScrollDepth(opts: { percent: 25 | 50 | 75 | 90; contentType?: string }): void {
  send('scroll_depth', {
    percent: opts.percent,
    content_type: opts.contentType || inferContentType(),
  })
}

export function trackGuideClick(opts: { guideSlug: string; sourcePage?: string }): void {
  send('guide_click', {
    guide_slug: opts.guideSlug,
    source_page: opts.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : undefined),
  })
}

export function trackCaseStudyClick(opts: { caseSlug: string; sourcePage?: string }): void {
  send('case_study_click', {
    case_slug: opts.caseSlug,
    source_page: opts.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : undefined),
  })
}

export function trackCtaClick(opts: { ctaLabel: string; ctaLocation: string; destination?: string }): void {
  send('cta_click', {
    cta_label: opts.ctaLabel,
    cta_location: opts.ctaLocation,
    destination: opts.destination,
  })
}

export function trackOutboundClick(opts: { destination: string; anchorText?: string }): void {
  send('outbound_click', {
    destination: opts.destination,
    anchor_text: opts.anchorText,
  })
}

export function trackFaqExpand(opts: { question: string; ctaLocation?: string }): void {
  send('faq_expand', {
    question: opts.question.slice(0, 100),
    cta_location: opts.ctaLocation || 'inline',
  })
}

function inferContentType(): string {
  if (typeof window === 'undefined') return 'unknown'
  const p = window.location.pathname
  if (p.startsWith('/guides/')) return 'guide'
  if (p.startsWith('/blog/')) return 'blog'
  if (p.startsWith('/work/')) return 'case'
  if (p === '/' || p === '/capabilities' || p === '/holiday' || p === '/influencer' || p === '/jewelry' || p === '/work') return 'commercial'
  return 'other'
}

// Low-level escape hatch for ad-hoc events (not expected to be used often).
export const trackCustomEvent = send
