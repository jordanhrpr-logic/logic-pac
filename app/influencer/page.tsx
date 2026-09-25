import type { Metadata } from 'next'
import InfluencerClient from './InfluencerClient'
import { influencerServiceJsonLd, influencerFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Influencer Kit & PR Mailer Production',
  description: 'Custom PR kits and influencer mailers with structural design, inserts, finishes, personalization, kitting, and direct-to-recipient fulfillment.',
  alternates: { canonical: '/influencer' },
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
