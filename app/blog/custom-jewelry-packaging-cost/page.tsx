import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Custom Jewelry Packaging Cost: Real Pricing',
  description: 'Custom jewelry packaging costs $3-$15 per unit for most branded boxes. Learn cost drivers, MOQs, timelines, quote comparisons, and pricing strategy today.',
  alternates: { canonical: '/blog/custom-jewelry-packaging-cost' },
  openGraph: {
    title: 'Custom Jewelry Packaging Cost: Real Pricing | Logic Pac',
    description: 'Custom jewelry packaging costs $3-$15 per unit for most branded boxes. Learn cost drivers, MOQs, timelines, and pricing strategy.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function CustomJewelryPackagingCostPost() {
  const slug = 'custom-jewelry-packaging-cost'
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
