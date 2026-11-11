import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Packaging Qualification Testing: When and Why You Need It',
  description: 'Qualification testing validates a new packaging format, supplier, or material before mass production. The 5 test categories, timeline, and cost.',
  alternates: { canonical: '/blog/packaging-qualification-testing' },
  openGraph: {
    url: 'https://logic-pac.com/blog/packaging-qualification-testing',
    title: 'Packaging Qualification Testing: When and Why You Need It | Logic Pac',
    description: 'Qualification testing validates a new packaging format, supplier, or material before mass production. The 5 core test categories, what they cost, and when to run them.',
    type: 'article',
    publishedTime: '2026-11-11',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/cosmetics-folding-carton.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Qualification Testing: When and Why You Need It | Logic Pac',
    description: 'The 5 core test categories, what they cost, and when to run them before committing to production.',
    images: ['/images/portfolio/cosmetics-folding-carton.jpeg'],
  },
}

export default function PackagingQualificationTestingPost() {
  const slug = 'packaging-qualification-testing'
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
