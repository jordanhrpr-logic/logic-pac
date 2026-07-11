import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Custom Cosmetic Packaging Formats: Every Option Explained for Beauty Brands',
  description: 'Learn custom cosmetic packaging formats for beauty brands: bottles, jars, tubes, cartons, compacts, airless systems, and cost tradeoffs. Use this guide.',
  alternates: { canonical: '/blog/custom-cosmetic-packaging-formats' },
  openGraph: {
    title: 'Custom Cosmetic Packaging Formats: Every Option Explained for Beauty Brands | Logic Pac',
    description: 'Learn custom cosmetic packaging formats for beauty brands: bottles, jars, tubes, cartons, compacts, airless systems, and cost tradeoffs. Use this guid',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function CustomCosmeticPackagingFormatsPost() {
  const slug = 'custom-cosmetic-packaging-formats'
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
