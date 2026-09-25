import type { Metadata } from 'next'
import TimelineClient from './TimelineClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'concept-to-shelf-timeline'
const title = 'Custom Packaging Concept-to-Shelf Timeline'
const description = 'Plan packaging discovery, design, prototyping, testing, production, quality control, and freight with a realistic phase-by-phase schedule.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/concept-to-shelf-timeline' },
}

export default function TimelinePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/concept-to-shelf-timeline.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><TimelineClient /></>
}
