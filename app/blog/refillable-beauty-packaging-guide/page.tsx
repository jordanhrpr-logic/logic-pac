import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Refillable Beauty Packaging: A Design Guide That Includes the Hard Parts',
  description: 'Refillable beauty packaging works when the system is designed for real consumer behavior. Learn refill types, engineering, cost modeling, and adoption data.',
  alternates: { canonical: '/blog/refillable-beauty-packaging-guide' },
  openGraph: {
    title: 'Refillable Beauty Packaging: A Design Guide That Includes the Hard Parts | Logic Pac',
    description: 'Refillable beauty packaging works when the system is designed for real consumer behavior. Learn refill types, engineering, cost modeling, and adoption',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function RefillableBeautyPackagingGuidePost() {
  const slug = 'refillable-beauty-packaging-guide'
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
