import type { Metadata } from 'next'
import GuidesClient from './GuidesClient'
import { guidesCollectionJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Packaging Guides & Resources',
  description: 'In-depth guides on custom packaging design, materials, finishes, influencer kits, sustainability, and production planning.',
  alternates: { canonical: '/guides' },
  openGraph: {
    url: 'https://logic-pac.com/guides',
    title: 'Packaging Guides & Resources | Logic Pac',
    description: 'In-depth guides on custom packaging design, materials, finishes, influencer kits, sustainability, and production planning.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/guides/luxury-beauty-packaging/kiki-secondary-hero.jpg', width: 1800, height: 1800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Guides & Resources | Logic Pac',
    description: 'In-depth guides on custom packaging design, materials, finishes, influencer kits, sustainability, and production planning.',
    images: ['/images/guides/luxury-beauty-packaging/kiki-secondary-hero.jpg'],
  },
}

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesCollectionJsonLd) }} />
      <GuidesClient />
    </>
  )
}
