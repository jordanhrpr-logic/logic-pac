import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Influencer Kit Design That Gets Posted',
  description: 'The 5 elements that separate kits that get filmed from kits that get recycled. Cost ranges ($8-50+/unit), timelines, and briefing tips.',
  alternates: { canonical: '/blog/influencer-kit-packaging-design' },
  openGraph: {
    title: 'How to Design an Influencer Kit That Gets Posted | Logic Pac',
    description: 'The 5 elements that separate influencer kits that get filmed from kits that get recycled.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/skincare-launch-pr-mailer.jpg', width: 1200, height: 630 }],
  },
}

export default function InfluencerKitPost() {
  const slug = 'influencer-kit-packaging-design'
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
