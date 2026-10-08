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
  openGraph: {
    url: `https://logic-pac.com/guides/${slug}`,
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/portfolio/soft-touch-spot-uv.jpg', width: 2000, height: 1500 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: ['/images/portfolio/soft-touch-spot-uv.jpg'],
  },
}

export default function FinishGuidePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/portfolio/soft-touch-spot-uv.jpg', datePublished: '2026-03-14', dateModified: '2026-09-25', type: 'TechArticle', proficiencyLevel: 'Beginner', dependencies: 'substrate selection, print file preparation, finish-cost budget'})
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
