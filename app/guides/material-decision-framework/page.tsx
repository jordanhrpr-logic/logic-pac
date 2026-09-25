import type { Metadata } from 'next'
import MaterialClient from './MaterialClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'material-decision-framework'
const title = "The Beauty Brand's Material Decision Framework — Glass, PET, HDPE, Aluminum & Molded Fiber"
const description = 'A comprehensive guide to the five core packaging materials for beauty brands. Covers cost, MOQs, sustainability, perception signals, supply chain reality, and a decision framework by product category.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/material-decision-framework' },
}

export default function MaterialPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/material-comparison-grid.png', datePublished: '2026-05-06' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><MaterialClient /></>
}
