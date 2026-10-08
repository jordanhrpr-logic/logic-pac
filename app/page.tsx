import type { Metadata } from 'next'
import HomeClient from './HomeClient'
import { homeFaqJsonLd, holidayServiceJsonLd, influencerServiceJsonLd, holidayFaqJsonLd, influencerFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: { absolute: 'Logic Pac — Custom Packaging for Beauty & Consumer Brands' },
  description: 'Custom packaging development for beauty and consumer brands, from structural design and global sourcing to gift sets, PR kits, and fulfillment.',
  openGraph: {
    url: 'https://logic-pac.com/',
    title: 'Logic Pac — Custom Packaging for Beauty & Consumer Brands',
    description: 'Custom packaging development for beauty and consumer brands, from structural design and global sourcing to gift sets, PR kits, and fulfillment.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/og-image.jpg', width: 2500, height: 1875 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Pac — Custom Packaging for Beauty & Consumer Brands',
    description: 'Custom packaging development for beauty and consumer brands, from structural design and global sourcing to gift sets, PR kits, and fulfillment.',
    images: ['/images/og-image.jpg'],
  },
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
