import type { Metadata } from 'next'
import SustainableClient from './SustainableClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'sustainable-beauty-packaging'
const title = 'The Sustainable Beauty Packaging Playbook — Material, Claims & Compliance'
const description = 'A comprehensive guide to sustainable packaging for beauty brands. Covers PCR content, mono-material design, EU PPWR, California SB 54, greenwashing risks, cost modeling, and implementation roadmaps.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/sustainable-beauty-packaging' },
}

export default function SustainablePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/sustainability-certifications.png', datePublished: '2026-05-06' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><SustainableClient /></>
}
