import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Packaging Brief Template for Beauty',
  description: 'The 10 sections every packaging brief needs, the omissions that cost weeks, and a sample brief you can adapt for your next project.',
  alternates: { canonical: '/blog/packaging-brief-template-beauty-brands' },
  openGraph: {
    title: 'Packaging Brief Template for Beauty Brands | Logic Pac',
    description: 'The 10 sections every packaging brief needs — omissions that cost weeks and an annotated sample.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/shelf-ready-display-unit.jpeg', width: 1200, height: 630 }],
  },
}

export default function PackagingBriefPost() {
  const slug = 'packaging-brief-template-beauty-brands'
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
