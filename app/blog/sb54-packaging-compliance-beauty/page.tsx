import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'SB 54 Packaging Compliance for Beauty',
  description: 'SB 54 compliance for beauty brands: packaging audit framework, 2027 readiness checklist, and material transition planning for California EPR.',
  alternates: { canonical: '/blog/sb54-packaging-compliance-beauty' },
  openGraph: {
    title: 'SB 54 Packaging Compliance for Beauty Brands | Logic Pac',
    description: 'SB 54 deadlines, requirements, and compliance roadmap for beauty brand packaging.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/cosmetics-folding-carton.jpeg', width: 1200, height: 630 }],
  },
}

export default function SB54CompliancePost() {
  const slug = 'sb54-packaging-compliance-beauty'
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
