import type { Metadata } from 'next'
import MaterialClient from './MaterialClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'material-decision-framework'
const title = 'Beauty Packaging Material Decision Guide'
const description = 'Compare glass, PET, HDPE, aluminum, and molded fiber by product fit, cost, MOQ, freight, sustainability, perception, and supply risk.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/material-decision-framework' },
}

export default function MaterialPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/material-comparison-grid.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><MaterialClient /></>
}
