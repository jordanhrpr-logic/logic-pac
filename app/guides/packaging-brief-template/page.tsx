import type { Metadata } from 'next'
import BriefClient from './BriefClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'packaging-brief-template'
const title = 'The Packaging Brief Template Every Brand Manager Needs'
const description = 'The ten sections every packaging brief should contain, common omissions that cost weeks, and a downloadable template you can adapt for your next project.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/packaging-brief-template' },
}

export default function BriefPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/packaging-brief-checklist.png', datePublished: '2026-05-06' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><BriefClient /></>
}
