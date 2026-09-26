import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Gift Set Packaging: Structure & Costs',
  description: 'Gift set packaging for beauty brands: rigid box, folding carton, and sleeve+tray structures. Insert types, costs, and retailer requirements.',
  alternates: { canonical: '/blog/gift-set-packaging-design' },
  openGraph: {
    title: 'Gift Set Packaging Design: Structures, Inserts, and Cost Decisions for Multi-Product Kits | Logic Pac',
    description: 'Gift set packaging for beauty brands: rigid box, folding carton, and sleeve+tray structures. Insert types, costs, and retailer requirements.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/premium-beauty-gift-set1.jpg', width: 1200, height: 630 }],
  },
}

export default function GiftSetPackagingDesignPost() {
  const slug = 'gift-set-packaging-design'
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
