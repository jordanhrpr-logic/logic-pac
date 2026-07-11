import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Glass vs. Plastic Beauty Packaging: Cost, Sustainability, Weight, and Perception Compared',
  description: 'Glass costs 3-5x more than PET but communicates premium. Side-by-side comparison of cost, sustainability claims, weight, breakage risk, and consumer perception for beauty brands.',
  alternates: { canonical: '/blog/glass-vs-plastic-beauty-packaging' },
  openGraph: {
    title: 'Glass vs. Plastic Beauty Packaging Compared | Logic Pac',
    description: 'Glass vs. plastic for beauty packaging: cost, sustainability, weight, breakage, and perception.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
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
