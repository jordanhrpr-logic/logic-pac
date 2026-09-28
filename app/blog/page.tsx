import type { Metadata } from 'next'
import BlogIndexClient from './BlogIndexClient'

const SITE_URL = 'https://logic-pac.com'

export const metadata: Metadata = {
  title: 'Blog — Packaging Insights for Brands',
  description: 'Practical packaging advice for beauty and consumer brands. Cost breakdowns, sustainability compliance, timelines, and supplier guidance.',
  alternates: { canonical: '/blog' },
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BlogIndexClient />
    </>
  )
}
