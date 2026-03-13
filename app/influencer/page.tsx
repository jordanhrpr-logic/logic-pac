import type { Metadata } from 'next'
import InfluencerClient from './InfluencerClient'
import { influencerServiceJsonLd, influencerFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Influencer Kit & PR Mailer Production',
  description: 'Influencer kit producer and PR mailer company. Custom kits designed for unboxing, 50 to 5,000+ units with direct-to-recipient fulfillment.',
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
