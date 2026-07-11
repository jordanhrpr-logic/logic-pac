import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Mono-Material Packaging Design for Beauty: The Technical Guide',
  description: 'Learn mono-material packaging design for beauty brands: recyclability, material choices, cost tradeoffs, compliance, and design limits. Use this guide.',
  alternates: { canonical: '/blog/mono-material-packaging-design' },
  openGraph: {
    title: 'Mono-Material Packaging Design for Beauty: The Technical Guide | Logic Pac',
    description: 'Learn mono-material packaging design for beauty brands: recyclability, material choices, cost tradeoffs, compliance, and design limits. Use this guide',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function MonoMaterialPackagingDesignPost() {
  const slug = 'mono-material-packaging-design'
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
