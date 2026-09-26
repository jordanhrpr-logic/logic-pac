import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Glass vs. Plastic Beauty Packaging',
  description: 'Glass costs 3-5x more than PET but signals premium. Cost, sustainability, weight, breakage, and perception compared for beauty packaging.',
  alternates: { canonical: '/blog/glass-vs-plastic-beauty-packaging' },
  openGraph: {
    title: 'Glass vs. Plastic Beauty Packaging Compared | Logic Pac',
    description: 'Glass vs. plastic for beauty packaging: cost, sustainability, weight, breakage, and perception.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/premium-beauty-gift-set1.jpg', width: 1200, height: 630 }],
  },
}

export default function GlassVsPlasticPost() {
  const slug = 'glass-vs-plastic-beauty-packaging'
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
