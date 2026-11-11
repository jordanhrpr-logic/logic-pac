import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'Custom Packaging Timeline: How Long?',
  description: 'Custom packaging takes 12-20 weeks from brief to delivery. Phase-by-phase breakdown of design, prototyping, tooling, production, and freight.',
  alternates: { canonical: '/blog/custom-packaging-timeline' },
  openGraph: {
    url: 'https://logic-pac.com/blog/custom-packaging-timeline',
    title: 'How Long Does Custom Packaging Take? | Logic Pac',
    description: 'The real production timeline: design, prototyping, tooling, manufacturing, and freight. What delays projects and what speeds them up.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/holiday-kits.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Long Does Custom Packaging Take? | Logic Pac',
    description: 'The real production timeline: design, prototyping, tooling, manufacturing, and freight. What delays projects and what speeds them up.',
    images: ['/images/portfolio/holiday-kits.jpeg'],
  },
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Develop Custom Packaging from Concept to Delivery',
  description: 'A 5-phase process for developing custom packaging, taking 12 to 20 weeks from approved brief to product in hand.',
  totalTime: 'P20W',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '5000-50000' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Design and Structural Engineering', text: 'Convert the brief into a production-ready design including structural engineering, graphic design, and 3D visualization. 2 to 4 weeks.' },
    { '@type': 'HowToStep', position: 2, name: 'Prototyping and Sampling', text: 'Produce physical samples for structural testing, color matching, and stakeholder approval. 2 to 4 weeks.' },
    { '@type': 'HowToStep', position: 3, name: 'Tooling and Production Setup', text: 'Manufacture die-lines, printing plates, and custom molds. Set up the production line with approved materials and finishes. 4 to 6 weeks.' },
    { '@type': 'HowToStep', position: 4, name: 'Mass Production', text: 'Run the full production order with inline quality control, pre-shipment inspection, and packaging into master cartons. 4 to 8 weeks.' },
    { '@type': 'HowToStep', position: 5, name: 'Freight and Delivery', text: 'Ship finished packaging via ocean or air freight, clear customs, and deliver to the warehouse or co-manufacturer. 4 to 8 weeks for international.' },
  ],
}

export default function PackagingTimelinePost() {
  const slug = 'custom-packaging-timeline'
  const articleJsonLd = buildBlogArticleSchema(slug)
  const breadcrumbJsonLd = buildBlogBreadcrumbSchema(slug)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <PostClient />
    </>
  )
}
