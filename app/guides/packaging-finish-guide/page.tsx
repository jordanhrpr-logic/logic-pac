import type { Metadata } from 'next'
import FinishGuideClient from './FinishGuideClient'
import { finishGuideFaqJsonLd } from '@/lib/metadata'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'packaging-finish-guide'
const title = 'Packaging Finish Selection Guide'
const description = 'Compare soft-touch lamination, foil stamping, spot UV, embossing, and debossing by appearance, feel, durability, file setup, and cost.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/packaging-finish-guide' },
}

export default function FinishGuidePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/portfolio/soft-touch-spot-uv.jpg', datePublished: '2026-03-14', dateModified: '2026-09-25' })
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
