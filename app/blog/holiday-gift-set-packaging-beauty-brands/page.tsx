import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Holiday Gift Set Packaging for Beauty',
  description: 'Holiday gift set packaging needs 5-7 months lead time. Structures, costs, and retailer compliance for Ulta, Sephora, and Target.',
  alternates: { canonical: '/blog/holiday-gift-set-packaging-beauty-brands' },
  openGraph: {
    title: 'Holiday Gift Set Packaging for Beauty Brands | Logic Pac',
    description: 'Custom holiday gift set packaging: timelines, costs, structures, and retailer compliance for beauty brands.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/24-door-advent-calendar.jpeg', width: 1200, height: 630 }],
  },
}

export default function HolidayGiftSetPost() {
  const slug = 'holiday-gift-set-packaging-beauty-brands'
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
