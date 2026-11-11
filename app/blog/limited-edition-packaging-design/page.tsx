import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Limited Edition Packaging: Design, Production & Strategy',
  description: 'Limited edition packaging runs 500-5,000 units with premium formats, higher per-unit costs, and tighter timelines. What works, what it costs, and how to plan.',
  alternates: { canonical: '/blog/limited-edition-packaging-design' },
  openGraph: {
    url: 'https://logic-pac.com/blog/limited-edition-packaging-design',
    title: 'Limited Edition Packaging: Design, Production & Strategy | Logic Pac',
    description: 'Premium packaging for limited runs — rigid boxes, collector editions, numbered sets. Production economics, timeline planning, and distribution strategy for 500-5,000 units.',
    type: 'article',
    publishedTime: '2026-11-11',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/holiday-epicutis-gift-sets.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limited Edition Packaging: Design, Production & Strategy | Logic Pac',
    description: 'Premium packaging for limited runs. Production economics, timelines, and distribution strategy for 500-5,000 units.',
    images: ['/images/portfolio/holiday-epicutis-gift-sets.jpg'],
  },
}

export default function LimitedEditionPackagingPost() {
  const slug = 'limited-edition-packaging-design'
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
