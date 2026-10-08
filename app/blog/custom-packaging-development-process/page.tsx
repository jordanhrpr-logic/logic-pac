import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Custom Packaging Development Process',
  description: 'Custom packaging development takes 12-16 weeks across six stages. What happens at each step, who is involved, and what decisions to make.',
  alternates: { canonical: '/blog/custom-packaging-development-process' },
  openGraph: {
    url: 'https://logic-pac.com/blog/custom-packaging-development-process',
    title: 'How Custom Packaging Development Works: From Brief to Shelf in 12-16 Weeks | Logic Pac',
    description: 'Custom packaging development takes 12-16 weeks across six stages. What happens at each step, who is involved, and what decisions to make.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/velvet-interior-unboxing-kit.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Custom Packaging Development Works: From Brief to Shelf in 12-16 Weeks | Logic Pac',
    description: 'Custom packaging development takes 12-16 weeks across six stages. What happens at each step, who is involved, and what decisions to make.',
    images: ['/images/portfolio/velvet-interior-unboxing-kit.jpeg'],
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
