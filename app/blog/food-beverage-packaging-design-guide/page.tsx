import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Food and Beverage Packaging Design for Emerging Brands',
  description: 'Learn how food and beverage packaging design works, including materials, compliance, shelf life, retail requirements, costs, and DTC-to-retail planning.',
  alternates: { canonical: '/blog/food-beverage-packaging-design-guide' },
  openGraph: {
    title: 'Food and Beverage Packaging Design for Emerging Brands | Logic Pac',
    description: 'Learn how food and beverage packaging design works, including materials, compliance, shelf life, retail requirements, costs, and DTC-to-retail plannin',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function FoodBeveragePackagingDesignGuidePost() {
  const slug = 'food-beverage-packaging-design-guide'
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
