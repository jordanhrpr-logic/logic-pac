import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Managing a Multi-SKU Packaging Program Without Losing Control',
  description: 'Scaling from 3 SKUs to 15+ means shared components, coordinated suppliers, and spec management that cannot live in email threads. Here is the system.',
  alternates: { canonical: '/blog/multi-sku-packaging-program-management' },
  openGraph: {
    url: 'https://logic-pac.com/blog/multi-sku-packaging-program-management',
    title: 'Multi-SKU Packaging Program Management | Logic Pac',
    description: 'Scaling from 3 SKUs to 15+ means shared components, coordinated suppliers, and spec management that cannot live in email. Here is the system.',
    type: 'article',
    publishedTime: '2026-11-10',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/epicutis-kits-group.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-SKU Packaging Program Management | Logic Pac',
    description: 'The system for managing packaging across 5, 10, and 20+ SKUs without losing consistency, cost control, or your mind.',
    images: ['/images/portfolio/epicutis-kits-group.jpg'],
  },
}

export default function MultiSkuPost() {
  const slug = 'multi-sku-packaging-program-management'
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
