import type { Metadata } from 'next'
import JewelryClient from './JewelryClient'
import { jewelryServiceJsonLd, jewelryFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Custom Jewelry Packaging for Brands & Designers',
  description: 'Custom jewelry packaging manufacturer. Rigid boxes, branded inserts, holiday gift sets, and brand-consistent packaging across all sizes.',
  alternates: { canonical: '/jewelry' },
}

export default function JewelryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelryServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelryFaqJsonLd) }} />
      <JewelryClient />
    </>
  )
}
