import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'
export const metadata: Metadata = {
  title: 'Custom Packaging Cost Breakdown',
  description: 'Custom beauty packaging costs $0.30-$15.00/unit by format. Folding cartons, rigid boxes, tubes, finishes — real pricing and what drives cost up.',
  alternates: { canonical: '/blog/custom-packaging-cost-beauty-brands' },
  openGraph: {
    title: 'How Much Does Custom Packaging Cost? | Logic Pac',
    description: 'Actual per-unit packaging costs by format — folding cartons, rigid boxes, tubes, and specialty finishes.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/foil-stamped-cylinder.jpeg', width: 1200, height: 630 }],
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
