import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Mono-Material Packaging: PP vs PE vs PET for Beauty Brands',
  description: 'How to design mono-material packaging that actually gets recycled. Mono-PP, mono-PE, and mono-PET compared on recyclability, formula compatibility, SB 54 compliance, cost, and decoration limits.',
  alternates: { canonical: '/blog/mono-material-packaging-design' },
  openGraph: {
    url: 'https://logic-pac.com/blog/mono-material-packaging-design',
    title: 'Mono-Material Packaging: PP vs PE vs PET for Beauty Brands | Logic Pac',
    description: 'How to design mono-material packaging that actually gets recycled. Mono-PP, mono-PE, and mono-PET compared on recyclability, formula compatibility, SB 54 compliance, cost, and decoration limits.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/foil-stamped-cylinder.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mono-Material Packaging: PP vs PE vs PET for Beauty Brands | Logic Pac',
    description: 'How to design mono-material packaging that actually gets recycled. Mono-PP, mono-PE, and mono-PET compared on recyclability, formula compatibility, SB 54 compliance, cost, and decoration limits.',
    images: ['/images/portfolio/foil-stamped-cylinder.jpeg'],
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
