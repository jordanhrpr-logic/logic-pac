import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Fragrance Packaging Design Guide',
  description: 'Learn what makes fragrance packaging feel premium, including box structure, board weight, finishes, costs, timelines, and common perfume packaging mistakes.',
  alternates: { canonical: '/blog/fragrance-packaging-design-guide' },
  openGraph: {
    title: 'Fragrance Packaging Design: What Makes Perfume Packaging Premium | Logic Pac',
    description: 'Learn what makes fragrance packaging feel premium, including box structure, board weight, finishes, costs, timelines, and common perfume packaging mis',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/skincare-launch-pr-mailer.jpg', width: 1200, height: 630 }],
  },
}

export default function FragrancePackagingDesignGuidePost() {
  const slug = 'fragrance-packaging-design-guide'
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
