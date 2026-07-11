import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Sustainable Jewelry Packaging Guide',
  description: 'Sustainable jewelry packaging needs specific materials, claims, and compliance planning. Learn FSC, recycled paper, molded fiber, mono-materials, and costs.',
  alternates: { canonical: '/blog/sustainable-jewelry-packaging' },
  openGraph: {
    title: 'Sustainable Jewelry Packaging Guide | Logic Pac',
    description: 'Sustainable jewelry packaging needs specific materials, claims, and compliance planning. Learn FSC, recycled paper, molded fiber, and costs.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function SustainableJewelryPackagingPost() {
  const slug = 'sustainable-jewelry-packaging'
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
