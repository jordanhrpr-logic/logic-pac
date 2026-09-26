import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Skincare Packaging Design Guide',
  description: 'Skincare packaging formats, materials by formula type, retail shelf requirements, and design decisions that affect sell-through and margin.',
  alternates: { canonical: '/blog/skincare-packaging-design-guide' },
  openGraph: {
    title: 'Skincare Packaging Design Guide | Logic Pac',
    description: 'Skincare packaging formats, materials by formula type, and what sells on shelf.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/holiday-epicutis-gift-sets.jpg', width: 1200, height: 630 }],
  },
}

export default function SkincarePackagingPost() {
  const slug = 'skincare-packaging-design-guide'
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
