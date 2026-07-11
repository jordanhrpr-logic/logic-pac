import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'PCR Packaging for Beauty Brands: What Post-Consumer Recycled Content Actually Means',
  description: 'PCR packaging uses post-consumer recycled plastic in beauty containers. Learn what 30%, 50%, and 100% PCR content means, what it costs, and how to verify it.',
  alternates: { canonical: '/blog/pcr-packaging-beauty-brands' },
  openGraph: {
    title: 'PCR Packaging for Beauty Brands: What Post-Consumer Recycled Content Actually Means | Logic Pac',
    description: 'PCR packaging uses post-consumer recycled plastic in beauty containers. Learn what 30%, 50%, and 100% PCR content means, what it costs, and how to ver',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function PcrPackagingBeautyBrandsPost() {
  const slug = 'pcr-packaging-beauty-brands'
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
