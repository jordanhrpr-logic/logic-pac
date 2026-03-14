import type { Metadata } from 'next'
import FinishGuideClient from './FinishGuideClient'
import { finishGuideJsonLd, finishGuideFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Packaging Finish Guide: Soft-Touch, Foil Stamp, Spot UV & Emboss',
  description: 'A comprehensive reference guide covering soft-touch lamination, foil stamping, spot UV coating, embossing, and debossing for custom packaging. Includes comparisons, cost considerations, and file prep guidance.',
  alternates: { canonical: '/guides/packaging-finish-guide' },
}

export default function FinishGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(finishGuideJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(finishGuideFaqJsonLd) }} />
      <FinishGuideClient />
    </>
  )
}
