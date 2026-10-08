import type { Metadata } from 'next'
import InfluencerClient from './InfluencerClient'
import { influencerServiceJsonLd, influencerFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Influencer Kit & PR Mailer Production',
  description: 'Custom PR kits and influencer mailers with structural design, inserts, finishes, personalization, kitting, and direct-to-recipient fulfillment.',
  alternates: { canonical: '/influencer' },
  openGraph: {
    url: 'https://logic-pac.com/influencer',
    title: 'Influencer Kit & PR Mailer Production | Logic Pac',
    description: 'Custom PR kits and influencer mailers with structural design, inserts, finishes, personalization, kitting, and direct-to-recipient fulfillment.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/portfolio/influencer-kits.jpg', width: 1400, height: 1400 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Kit & PR Mailer Production | Logic Pac',
    description: 'Custom PR kits and influencer mailers with structural design, inserts, finishes, personalization, kitting, and direct-to-recipient fulfillment.',
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
