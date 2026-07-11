import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Luxury Jewelry Packaging Guide',
  description: 'Luxury jewelry packaging is worth it when presentation supports price, retail placement, gifting, and retention. Learn formats, costs, and tradeoffs today.',
  alternates: { canonical: '/blog/luxury-jewelry-packaging-guide' },
  openGraph: {
    title: 'Luxury Jewelry Packaging Guide | Logic Pac',
    description: 'Luxury jewelry packaging is worth it when presentation supports price, retail placement, gifting, and retention. Learn formats, costs, and tradeoffs.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function LuxuryJewelryPackagingGuidePost() {
  const slug = 'luxury-jewelry-packaging-guide'
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
