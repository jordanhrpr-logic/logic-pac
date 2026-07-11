import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'How to Choose a Beauty Packaging Manufacturer: What to Ask, What to Verify, and Red Flags',
  description: 'Evaluating packaging manufacturers for beauty brands: MOQ transparency, quality control processes, material sourcing, compliance capability, and the red flags that signal problems.',
  alternates: { canonical: '/blog/how-to-choose-beauty-packaging-manufacturer' },
  openGraph: {
    title: 'How to Choose a Beauty Packaging Manufacturer | Logic Pac',
    description: 'What to ask, what to verify, and red flags when choosing a packaging manufacturer for beauty brands.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function ChooseManufacturerPost() {
  const slug = 'how-to-choose-beauty-packaging-manufacturer'
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
