import type { Metadata } from 'next'
import BlogIndexClient from './BlogIndexClient'

const SITE_URL = 'https://logic-pac.com'

export const metadata: Metadata = {
  title: 'Blog — Packaging Insights for Brands',
  description: 'Practical packaging advice for beauty and consumer brands. Cost breakdowns, sustainability compliance, timelines, and supplier guidance.',
  alternates: { canonical: '/blog' },
  openGraph: {
    url: 'https://logic-pac.com/blog',
    title: 'Blog — Packaging Insights for Brands | Logic Pac',
    description: 'Practical packaging advice for beauty and consumer brands. Cost breakdowns, sustainability compliance, timelines, and supplier guidance.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/portfolio/packaging-portfolio-overview.jpg', width: 2500, height: 1875 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Packaging Insights for Brands | Logic Pac',
    description: 'Practical packaging advice for beauty and consumer brands. Cost breakdowns, sustainability compliance, timelines, and supplier guidance.',
    images: ['/images/portfolio/packaging-portfolio-overview.jpg'],
  },
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
