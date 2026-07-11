import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Custom Packaging MOQs: What Every Brand Needs to Know',
  description: 'Learn custom packaging MOQ ranges by format, why minimums exist, and how brands can lower order quantities without overbuying inventory or tying up cash.',
  alternates: { canonical: '/blog/custom-packaging-moq-guide' },
  openGraph: {
    title: 'Custom Packaging MOQs: What Every Brand Needs to Know | Logic Pac',
    description: 'Learn custom packaging MOQ ranges by format, why minimums exist, and how brands can lower order quantities without overbuying inventory or tying up ca',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function CustomPackagingMoqGuidePost() {
  const slug = 'custom-packaging-moq-guide'
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
