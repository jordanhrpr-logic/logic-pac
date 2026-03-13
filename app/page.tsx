import type { Metadata } from 'next'
import HomeClient from './HomeClient'
import { homeFaqJsonLd, holidayServiceJsonLd, influencerServiceJsonLd, holidayFaqJsonLd, influencerFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Logic Pac — Custom Packaging for Beauty, Cosmetic & Consumer Brands',
  description: 'Logic Pac is a custom packaging company and development partner for beauty, cosmetic, and consumer brands. Structural design, global sourcing, holiday gift set manufacturing, influencer kit production, and fulfillment.',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(holidayServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(influencerServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(holidayFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(influencerFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      <HomeClient />
    </>
  )
}
