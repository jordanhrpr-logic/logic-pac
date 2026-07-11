import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Packaging Cost Per Unit Benchmarks',
  description: 'Packaging Cost Per Unit Benchmarks by Product Category: a practical guide to packaging cost per unit benchmark with real cost ranges, material choices.',
  alternates: { canonical: '/blog/packaging-cost-per-unit-benchmarks' },
  openGraph: {
    title: 'Packaging Cost Per Unit Benchmarks | Logic Pac',
    description: 'Packaging Cost Per Unit Benchmarks by Product Category: a practical guide with real cost ranges, material choices, and margin planning.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function PackagingCostBenchmarksPost() {
  const slug = 'packaging-cost-per-unit-benchmarks'
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
