import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Unboxing Experience Design: The Psychology of Packaging That Gets Filmed',
  description: 'Learn unboxing experience design for beauty brands: reveal moments, inserts, textures, packaging structure, costs, and retail fit. Plan before launch.',
  alternates: { canonical: '/blog/unboxing-experience-design-guide' },
  openGraph: {
    title: 'Unboxing Experience Design: The Psychology of Packaging That Gets Filmed | Logic Pac',
    description: 'Learn unboxing experience design for beauty brands: reveal moments, inserts, textures, packaging structure, costs, and retail fit. Plan before launch.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function UnboxingExperienceDesignGuidePost() {
  const slug = 'unboxing-experience-design-guide'
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
