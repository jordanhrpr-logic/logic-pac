import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Glass vs Plastic for Beauty Packaging: Cost, Weight, and Sustainability Compared',
  description: 'Glass costs 3-5x more than PET but signals premium positioning. Cost per unit, sustainability, weight, breakage rates, and consumer perception compared for beauty packaging.',
  alternates: { canonical: '/blog/glass-vs-plastic-beauty-packaging' },
  openGraph: {
    url: 'https://logic-pac.com/blog/glass-vs-plastic-beauty-packaging',
    title: 'Glass vs Plastic for Beauty Packaging: Cost, Weight, and Sustainability Compared | Logic Pac',
    description: 'Glass costs 3-5x more than PET but signals premium positioning. Cost per unit, sustainability, weight, breakage rates, and consumer perception compared for beauty packaging.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/premium-beauty-gift-set1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glass vs Plastic for Beauty Packaging: Cost, Weight, and Sustainability Compared | Logic Pac',
    description: 'Glass costs 3-5x more than PET but signals premium positioning. Cost per unit, sustainability, weight, breakage rates, and consumer perception compared for beauty packaging.',
    images: ['/images/portfolio/premium-beauty-gift-set1.jpg'],
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
