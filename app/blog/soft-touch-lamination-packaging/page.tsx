import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Soft Touch Lamination: Pros, Cons & Costs',
  description: 'Soft touch lamination adds a velvet surface at $0.08-$0.60/unit. When it works, when it scuffs, and how it compares to alternatives.',
  alternates: { canonical: '/blog/soft-touch-lamination-packaging' },
  openGraph: {
    title: 'Soft Touch Lamination for Packaging: When It Works, When It Doesn\'t, and What It Costs | Logic Pac',
    description: 'Soft touch lamination adds a velvet surface at $0.08-$0.60/unit. When it works, when it scuffs, and how it compares to alternatives.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/cosmetics-folding-carton.jpeg', width: 1200, height: 630 }],
  },
}

export default function SoftTouchLaminationPackagingPost() {
  const slug = 'soft-touch-lamination-packaging'
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
