import type { Metadata } from 'next'
import BlogIndexClient from './BlogIndexClient'
import { getPublishedPosts } from '@/lib/blog-data'

const SITE_URL = 'https://logic-pac.com'

export const metadata: Metadata = {
  title: 'Packaging Blog: Cost, Timeline & Material Guides',
  description: 'Packaging cost breakdowns, production timelines, material comparisons, sustainability compliance, and supplier guidance for beauty and consumer brands.',
  alternates: { canonical: '/blog' },
  openGraph: {
    url: 'https://logic-pac.com/blog',
    title: 'Packaging Blog: Cost, Timeline & Material Guides | Logic Pac',
    description: 'Packaging cost breakdowns, production timelines, material comparisons, sustainability compliance, and supplier guidance for beauty and consumer brands.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/portfolio/packaging-portfolio-overview.jpg', width: 2500, height: 1875 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Blog: Cost, Timeline & Material Guides | Logic Pac',
    description: 'Packaging cost breakdowns, production timelines, material comparisons, sustainability compliance, and supplier guidance for beauty and consumer brands.',
    images: ['/images/portfolio/packaging-portfolio-overview.jpg'],
  },
}

function buildBlogCollectionSchema() {
  const posts = getPublishedPosts()
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Logic Pac Packaging Blog',
    description: 'Practical packaging articles covering cost, timelines, materials, sustainability, and supplier management for beauty and consumer brands.',
    url: `${SITE_URL}/blog`,
    isPartOf: { '@type': 'WebSite', name: 'Logic Pac', url: SITE_URL },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.slice(0, 20).map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
  ],
}

export default function BlogPage() {
  const collectionJsonLd = buildBlogCollectionSchema()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <BlogIndexClient />
    </>
  )
}
