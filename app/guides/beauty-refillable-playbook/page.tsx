import type { Metadata } from 'next'
import RefillableClient from './RefillableClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'beauty-refillable-playbook'
const title = 'Refillable Beauty Packaging Playbook'
const description = 'Evaluate refill cartridges, replaceable pods, and return-to-refill systems by product fit, repeat purchase behavior, cost, channel, and execution risk.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/beauty-refillable-playbook' },
}

export default function RefillablePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/refillable-system-diagram.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><RefillableClient /></>
}
