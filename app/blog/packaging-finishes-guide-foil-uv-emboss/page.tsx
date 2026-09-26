import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Packaging Finishes: Foil, UV, Emboss Guide',
  description: 'What each packaging finish costs and when to use it. Foil ($0.05-$0.50/unit), spot UV ($0.05-$0.30), embossing, and soft-touch compared.',
  alternates: { canonical: '/blog/packaging-finishes-guide-foil-uv-emboss' },
  openGraph: {
    title: 'Packaging Finishes Guide: Foil, UV, Emboss, Soft-Touch | Logic Pac',
    description: 'What each packaging finish costs, when to use it, and how to combine them for beauty brands.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/soft-touch-spot-uv.jpg', width: 1200, height: 630 }],
  },
}

export default function PackagingFinishesPost() {
  const slug = 'packaging-finishes-guide-foil-uv-emboss'
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
