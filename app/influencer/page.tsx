import type { Metadata } from 'next'
import InfluencerClient from './InfluencerClient'
import { influencerServiceJsonLd, influencerFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Influencer Kit and PR Mailer Production for Beauty Brands',
  description: 'Custom influencer kits and PR mailers from concept to doorstep. Structural design, premium inserts, personalization, kitting, and direct-to-recipient fulfillment. MOQs from 50 units.',
  alternates: { canonical: '/influencer' },
  openGraph: {
    url: 'https://logic-pac.com/influencer',
    title: 'Influencer Kit and PR Mailer Production for Beauty Brands | Logic Pac',
    description: 'Custom influencer kits and PR mailers from concept to doorstep. Structural design, premium inserts, personalization, kitting, and direct-to-recipient fulfillment. MOQs from 50 units.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/portfolio/influencer-kits.jpg', width: 1400, height: 1400 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Kit and PR Mailer Production for Beauty Brands | Logic Pac',
    description: 'Custom influencer kits and PR mailers from concept to doorstep. Structural design, premium inserts, personalization, kitting, and direct-to-recipient fulfillment. MOQs from 50 units.',
    images: ['/images/portfolio/influencer-kits.jpg'],
  },
}

export default function InfluencerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(influencerServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(influencerFaqJsonLd) }} />
      <InfluencerClient />
    </>
  )
}
