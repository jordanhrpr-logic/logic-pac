import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'How Custom Packaging Development Works: From Brief to Shelf in 12-16 Weeks',
  description: 'The packaging development process takes 12-16 weeks from brief to shelf. Learn what happens at each stage, who is involved, and what decisions you need to make.',
  alternates: { canonical: '/blog/custom-packaging-development-process' },
  openGraph: {
    title: 'How Custom Packaging Development Works: From Brief to Shelf in 12-16 Weeks | Logic Pac',
    description: 'The packaging development process takes 12-16 weeks from brief to shelf. Learn what happens at each stage, who is involved, and what decisions you nee',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function CustomPackagingDevelopmentProcessPost() {
  const slug = 'custom-packaging-development-process'
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
