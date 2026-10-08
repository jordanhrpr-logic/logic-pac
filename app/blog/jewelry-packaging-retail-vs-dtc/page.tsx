import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Jewelry Packaging for Retail vs. DTC',
  description: 'Jewelry packaging for retail and DTC has different requirements. Learn the structural, display, shipping, barcode, insert, and cost tradeoffs for brands.',
  alternates: { canonical: '/blog/jewelry-packaging-retail-vs-dtc' },
  openGraph: {
    url: 'https://logic-pac.com/blog/jewelry-packaging-retail-vs-dtc',
    title: 'Jewelry Packaging for Retail vs. DTC | Logic Pac',
    description: 'Jewelry packaging for retail and DTC has different requirements. Learn the structural, display, shipping, barcode, insert, and cost tradeoffs.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/jewelry/oak-park-jewelry-collection.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jewelry Packaging for Retail vs. DTC | Logic Pac',
    description: 'Jewelry packaging for retail and DTC has different requirements. Learn the structural, display, shipping, barcode, insert, and cost tradeoffs.',
    images: ['/images/portfolio/jewelry/oak-park-jewelry-collection.jpg'],
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
