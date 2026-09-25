import type { Metadata } from 'next'
import FinishGuideClient from './FinishGuideClient'
import { finishGuideFaqJsonLd } from '@/lib/metadata'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'packaging-finish-guide'
const title = 'Packaging Finish Guide: Soft-Touch, Foil Stamp, Spot UV & Emboss'
const description = 'A comprehensive reference guide covering soft-touch lamination, foil stamping, spot UV coating, embossing, and debossing for custom packaging. Includes comparisons, cost considerations, and file prep guidance.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/packaging-finish-guide' },
}

export default function FinishGuidePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/portfolio/soft-touch-spot-uv.jpg', datePublished: '2026-03-14' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(finishGuideFaqJsonLd) }} />
      <FinishGuideClient />
    </>
  )
}
