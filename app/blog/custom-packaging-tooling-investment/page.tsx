import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Custom Packaging Tooling: When to Invest vs. Use Stock',
  description: 'Custom tooling costs $3K to $50K+ depending on format. Here is the volume breakeven, what you actually own, and when stock molds are the right call.',
  alternates: { canonical: '/blog/custom-packaging-tooling-investment' },
  openGraph: {
    url: 'https://logic-pac.com/blog/custom-packaging-tooling-investment',
    title: 'Custom Packaging Tooling: When to Invest and When Stock Is Fine | Logic Pac',
    description: 'Custom tooling costs $3K-$50K+ depending on format. Volume breakeven, ownership, and the decision framework for stock vs. custom.',
    type: 'article',
    publishedTime: '2026-11-10',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/foil-stamped-cylinder.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Tooling: When to Invest and When Stock Is Fine | Logic Pac',
    description: 'Custom tooling costs $3K-$50K+ depending on format. Volume breakeven, ownership, and the decision framework.',
    images: ['/images/portfolio/foil-stamped-cylinder.jpeg'],
  },
}

export default function ToolingInvestmentPost() {
  const slug = 'custom-packaging-tooling-investment'
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
