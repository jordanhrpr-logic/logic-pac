import type { Metadata } from 'next'
import RefillableClient from './RefillableClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'beauty-refillable-playbook'
const title = 'The Beauty Brand Refillable Packaging Playbook'
const description = 'A practical guide to refillable packaging for beauty brands. Covers refill formats, material selection, consumer behavior, cost modeling, regulatory compliance, and implementation timelines.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/beauty-refillable-playbook' },
}

export default function RefillablePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/refillable-system-diagram.png', datePublished: '2026-05-06' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><RefillableClient /></>
}
