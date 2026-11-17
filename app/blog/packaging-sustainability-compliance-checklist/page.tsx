import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Packaging Sustainability Compliance Checklist',
  description: 'The 12 items to verify before making a sustainability claim on packaging. SB 54, EU PPWR, FTC Green Guides, greenwashing traps, and documentation.',
  alternates: { canonical: '/blog/packaging-sustainability-compliance-checklist' },
  openGraph: {
    url: 'https://logic-pac.com/blog/packaging-sustainability-compliance-checklist',
    title: 'Packaging Sustainability Compliance Checklist | Logic Pac',
    description: 'Verify every sustainability claim before it goes on your packaging. SB 54, EU PPWR, FTC Green Guides, and the documentation trail.',
    type: 'article',
    publishedTime: '2026-11-17',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/velvet-interior-unboxing-kit.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Sustainability Compliance Checklist | Logic Pac',
    description: 'Verify every sustainability claim before it goes on your packaging. SB 54, EU PPWR, FTC, and the documentation trail.',
    images: ['/images/portfolio/velvet-interior-unboxing-kit.jpeg'],
  },
}

export default function SustainabilityComplianceChecklistPost() {
  const slug = 'packaging-sustainability-compliance-checklist'
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
