import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Luxury vs. Mass Market Beauty Packaging',
  description: 'What separates luxury beauty packaging from mass market: structural weight, closure engineering, finish hierarchy, and sensory sequencing.',
  alternates: { canonical: '/blog/luxury-beauty-packaging-guide' },
  openGraph: {
    title: 'Luxury Beauty Packaging: What Separates Premium From Mass Market | Logic Pac',
    description: 'What separates luxury beauty packaging from mass market: structural weight, closure engineering, finish hierarchy, and sensory sequencing.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/velvet-interior-unboxing-kit.jpeg', width: 1200, height: 630 }],
  },
}

export default function LuxuryBeautyPackagingGuidePost() {
  const slug = 'luxury-beauty-packaging-guide'
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
