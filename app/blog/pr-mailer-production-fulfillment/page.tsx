import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'PR Mailer Production & Fulfillment: The Operations Guide',
  description: 'PR mailer production from approved design to shipped kits. Fulfillment models, volume tiers, cost structure, timelines, and QC at every stage.',
  alternates: { canonical: '/blog/pr-mailer-production-fulfillment' },
  openGraph: {
    url: 'https://logic-pac.com/blog/pr-mailer-production-fulfillment',
    title: 'PR Mailer Production & Fulfillment Guide | Logic Pac',
    description: 'The operational side of PR mailers: production workflow, kitting, direct-to-recipient fulfillment, cost structure, and QC.',
    type: 'article',
    publishedTime: '2026-11-17',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/influencer-kits.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PR Mailer Production & Fulfillment Guide | Logic Pac',
    description: 'Production workflow, kitting, direct-to-recipient fulfillment, cost structure, and QC for PR mailers.',
    images: ['/images/portfolio/influencer-kits.jpg'],
  },
}

export default function PrMailerProductionPost() {
  const slug = 'pr-mailer-production-fulfillment'
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
