import type { Metadata } from 'next'
import HomeClient from './HomeClient'
import { homeFaqJsonLd, holidayServiceJsonLd, influencerServiceJsonLd, holidayFaqJsonLd, influencerFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: { absolute: 'Logic Pac — Custom Packaging for Beauty & Consumer Brands' },
  description: 'Custom packaging development for beauty and consumer brands, from structural design and global sourcing to gift sets, PR kits, and fulfillment.',
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
