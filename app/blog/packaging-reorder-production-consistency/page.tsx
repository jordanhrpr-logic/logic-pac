import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'How to Keep Packaging Consistent Across Production Runs',
  description: 'Color drift, material variation, and supplier inconsistency degrade packaging at reorder. How to prevent all three with spec management and QC.',
  alternates: { canonical: '/blog/packaging-reorder-production-consistency' },
  openGraph: {
    url: 'https://logic-pac.com/blog/packaging-reorder-production-consistency',
    title: 'How to Keep Packaging Consistent Across Production Runs | Logic Pac',
    description: 'Color drift, material variation, and supplier inconsistency degrade packaging at reorder. How to prevent all three with spec management, golden samples, and run-to-run QC.',
    type: 'article',
    publishedTime: '2026-11-10',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/cosmetics-folding-carton.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Keep Packaging Consistent Across Production Runs | Logic Pac',
    description: 'Color drift, material variation, and supplier inconsistency degrade packaging at reorder. How to prevent all three.',
    images: ['/images/portfolio/cosmetics-folding-carton.jpeg'],
  },
}

export default function PackagingReorderConsistencyPost() {
  const slug = 'packaging-reorder-production-consistency'
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
