import type { Metadata } from 'next'
import JewelryClient from './JewelryClient'
import { jewelryServiceJsonLd, jewelryFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Custom Jewelry Packaging for Brands & Designers',
  description: 'Custom jewelry packaging manufacturer. Rigid boxes, branded inserts, holiday gift sets, and brand-consistent packaging across all sizes.',
  alternates: { canonical: '/jewelry' },
  openGraph: {
    url: 'https://logic-pac.com/jewelry',
    title: 'Custom Jewelry Packaging for Brands & Designers | Logic Pac',
    description: 'Custom jewelry packaging manufacturer. Rigid boxes, branded inserts, holiday gift sets, and brand-consistent packaging across all sizes.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/portfolio/jewelry/maor-collection.jpg', width: 1200, height: 799 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Jewelry Packaging for Brands & Designers | Logic Pac',
    description: 'Custom jewelry packaging manufacturer. Rigid boxes, branded inserts, holiday gift sets, and brand-consistent packaging across all sizes.',
    images: ['/images/portfolio/jewelry/maor-collection.jpg'],
  },
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
