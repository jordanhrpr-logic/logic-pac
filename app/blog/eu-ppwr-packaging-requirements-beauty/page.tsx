import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'EU PPWR Packaging Rules for Beauty',
  description: 'EU PPWR packaging requirements affect any beauty brand selling into Europe. Learn recycled content targets, recyclability rules, and compliance timelines.',
  alternates: { canonical: '/blog/eu-ppwr-packaging-requirements-beauty' },
  openGraph: {
    title: 'EU PPWR Packaging Requirements for Beauty Brands: What to Change and When | Logic Pac',
    description: 'EU PPWR packaging requirements affect any beauty brand selling into Europe. Learn recycled content targets, recyclability rules, and compliance timelines.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/shelf-ready-display-unit.jpeg', width: 1200, height: 630 }],
  },
}

export default function EuPpwrPackagingRequirementsBeautyPost() {
  const slug = 'eu-ppwr-packaging-requirements-beauty'
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
