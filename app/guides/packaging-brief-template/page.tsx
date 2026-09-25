import type { Metadata } from 'next'
import BriefClient from './BriefClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'packaging-brief-template'
const title = 'Packaging Brief Template for Brand Teams'
const description = 'Build a packaging brief covering objectives, product, channels, materials, budget, quantity, timing, testing, deliverables, and approvals.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/packaging-brief-template' },
}

export default function BriefPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/packaging-brief-checklist.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><BriefClient /></>
}
