import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'How to Choose a Packaging Partner for Your Brand',
  description: 'The 7 evaluation criteria, red flags, questions to ask, and how to run a trial project before committing to a packaging partner.',
  alternates: { canonical: '/blog/how-to-choose-packaging-partner' },
  openGraph: {
    url: 'https://logic-pac.com/blog/how-to-choose-packaging-partner',
    title: 'How to Choose a Packaging Partner for Your Brand | Logic Pac',
    description: 'The 7 evaluation criteria, red flags, and 10 questions to ask before committing to a packaging partner.',
    type: 'article',
    publishedTime: '2026-11-17',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/packaging-portfolio-overview.jpg', width: 2500, height: 1875 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose a Packaging Partner for Your Brand | Logic Pac',
    description: 'The 7 evaluation criteria, red flags, and 10 questions to ask before committing to a packaging partner.',
    images: ['/images/portfolio/packaging-portfolio-overview.jpg'],
  },
}

export default function HowToChoosePackagingPartnerPost() {
  const slug = 'how-to-choose-packaging-partner'
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
