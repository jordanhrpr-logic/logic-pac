import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Custom Packaging Timeline: How Long?',
  description: 'Custom packaging takes 12-20 weeks from brief to delivery. Phase-by-phase breakdown of design, prototyping, tooling, production, and freight.',
  alternates: { canonical: '/blog/custom-packaging-timeline' },
  openGraph: {
    title: 'How Long Does Custom Packaging Take? | Logic Pac',
    description: 'The real production timeline: design, prototyping, tooling, manufacturing, and freight. What delays projects and what speeds them up.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/holiday-kits.jpeg', width: 1200, height: 630 }],
  },
}

export default function PackagingTimelinePost() {
  const slug = 'custom-packaging-timeline'
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
