import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'
export const metadata: Metadata = {
  title: 'How Much Does Custom Packaging Cost? A Real Pricing Breakdown for Beauty Brands',
  description: 'Actual per-unit packaging costs by format — folding cartons, rigid boxes, tubes, and specialty finishes. What drives the price up, how to compare quotes, and where beauty brands overpay.',
  alternates: { canonical: '/blog/custom-packaging-cost-beauty-brands' },
  openGraph: {
    title: 'How Much Does Custom Packaging Cost? | Logic Pac',
    description: 'Actual per-unit packaging costs by format — folding cartons, rigid boxes, tubes, and specialty finishes.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function PackagingCostPost() {
  const slug = 'custom-packaging-cost-beauty-brands'
  const articleJsonLd = buildBlogArticleSchema(slug)
  const breadcrumbJsonLd = buildBlogBreadcrumbSchema(slug)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PostClient />
    </>
  )
}
