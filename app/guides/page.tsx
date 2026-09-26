import type { Metadata } from 'next'
import GuidesClient from './GuidesClient'
import { guidesCollectionJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Packaging Guides & Resources',
  description: 'In-depth guides on custom packaging design, materials, finishes, influencer kits, sustainability, and production planning.',
  alternates: { canonical: '/guides' },
}

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesCollectionJsonLd) }} />
      <GuidesClient />
    </>
  )
}
