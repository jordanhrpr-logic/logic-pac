import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Jewelry Packaging Design Guide for Brands',
  description: 'A jewelry packaging design guide covering ring boxes, necklace boxes, inserts, materials, finishes, unboxing, costs, MOQs, and approval steps for brands.',
  alternates: { canonical: '/blog/jewelry-packaging-design-guide' },
  openGraph: {
    title: 'Jewelry Packaging Design Guide for Brands | Logic Pac',
    description: 'A jewelry packaging design guide covering ring boxes, necklace boxes, inserts, materials, finishes, unboxing, and approval steps.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function JewelryPackagingDesignGuidePost() {
  const slug = 'jewelry-packaging-design-guide'
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
