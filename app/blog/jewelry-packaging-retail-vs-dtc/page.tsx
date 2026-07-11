import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Jewelry Packaging for Retail vs. DTC',
  description: 'Jewelry packaging for retail and DTC has different requirements. Learn the structural, display, shipping, barcode, insert, and cost tradeoffs for brands.',
  alternates: { canonical: '/blog/jewelry-packaging-retail-vs-dtc' },
  openGraph: {
    title: 'Jewelry Packaging for Retail vs. DTC | Logic Pac',
    description: 'Jewelry packaging for retail and DTC has different requirements. Learn the structural, display, shipping, barcode, insert, and cost tradeoffs.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function JewelryPackagingRetailVsDtcPost() {
  const slug = 'jewelry-packaging-retail-vs-dtc'
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
