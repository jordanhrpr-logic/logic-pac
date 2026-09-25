import type { Metadata } from 'next'
import TimelineClient from './TimelineClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'concept-to-shelf-timeline'
const title = 'From Concept to Shelf in 12 Weeks — The Custom Packaging Timeline'
const description = 'A realistic phase-by-phase timeline for custom packaging development. Covers design, prototyping, tooling, production, and freight — with the decisions that compress or expand each phase.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/concept-to-shelf-timeline' },
}

export default function TimelinePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/concept-to-shelf-timeline.png', datePublished: '2026-05-06' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><TimelineClient /></>
}
