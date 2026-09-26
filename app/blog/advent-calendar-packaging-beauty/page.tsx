import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Advent Calendar Packaging for Beauty',
  description: 'Beauty advent calendar packaging costs $8-25+ per unit. 6-8 month lead time. Door, drawer, magnetic, and tray structures compared with real costs.',
  alternates: { canonical: '/blog/advent-calendar-packaging-beauty' },
  openGraph: {
    title: 'Advent Calendar Packaging for Beauty Brands: What It Actually Takes to Produce One | Logic Pac',
    description: 'Beauty advent calendar packaging costs $8-25+ per unit. 6-8 month lead time. Door, drawer, magnetic, and tray structures compared with real costs.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/24-door-advent-calendar.jpeg', width: 1200, height: 630 }],
  },
}

export default function AdventCalendarPackagingBeautyPost() {
  const slug = 'advent-calendar-packaging-beauty'
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
