import type { Metadata } from 'next'
import SustainableClient from './SustainableClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'sustainable-beauty-packaging'
const title = 'Sustainable Beauty Packaging Playbook'
const description = 'Compare PCR, mono-material, refillable, glass, aluminum, and fiber packaging by cost, claims risk, product fit, and implementation complexity.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/sustainable-beauty-packaging' },
}

export default function SustainablePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/sustainability-certifications.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><SustainableClient /></>
}
