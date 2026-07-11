import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Sustainable Beauty Packaging: What Actually Works, What\'s Greenwashing, and What the Regulations Require',
  description: 'PCR performance reality, SB 54 deadlines, EU PPWR impact, FTC Green Guides compliance, and real cost comparisons between sustainable and conventional packaging materials for beauty brands.',
  alternates: { canonical: '/blog/sustainable-beauty-packaging-sb54' },
  openGraph: {
    title: 'Sustainable Beauty Packaging: What Works vs. Greenwashing | Logic Pac',
    description: 'PCR reality, SB 54 compliance, EU PPWR, and honest cost comparisons for sustainable beauty packaging.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function SustainablePackagingPost() {
  const slug = 'sustainable-beauty-packaging-sb54'
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
