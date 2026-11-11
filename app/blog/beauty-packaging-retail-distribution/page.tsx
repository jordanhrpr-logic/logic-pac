import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Beauty Packaging for Retail: Sephora, Ulta, Target Guide',
  description: 'Retail packaging requirements for beauty brands: case-pack dimensions, barcodes, pallet config, and retailer-specific compliance.',
  alternates: { canonical: '/blog/beauty-packaging-retail-distribution' },
  openGraph: {
    url: 'https://logic-pac.com/blog/beauty-packaging-retail-distribution',
    title: 'Beauty Packaging for Retail: What Sephora, Ulta, and Target Require | Logic Pac',
    description: 'Case-pack dimensions, barcode placement, pallet configuration, and retailer-specific compliance — what beauty brands need to know before the first PO.',
    type: 'article',
    publishedTime: '2026-11-10',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/shelf-ready-display-unit.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Packaging for Retail: What Sephora, Ulta, and Target Require | Logic Pac',
    description: 'Retail packaging requirements for beauty brands: case-packs, barcodes, pallet config, and retailer-specific compliance.',
    images: ['/images/portfolio/shelf-ready-display-unit.jpeg'],
  },
}

export default function RetailDistributionPost() {
  const slug = 'beauty-packaging-retail-distribution'
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
