import type { Metadata } from 'next'
import RetailClient from './RetailClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'retail-ready-beauty-packaging'
const title = 'Retail-Ready Beauty Packaging Guide'
const description = 'GS1 barcode readiness, master-carton configuration, Sephora/Ulta/Target vendor-manual specifics, planogram realities, and chargeback prevention for beauty brands.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/guides/${slug}` },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/guides/retail-ready-beauty/shelf-ready-display.jpg', width: 1600, height: 900 }],
  },
}

const retailFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'When should we start preparing for retail launch — before or after the PO?', acceptedAnswer: { '@type': 'Answer', text: 'Before. The compliance work — GS1 licensing, barcode generation, packaging testing, vendor manual review, EDI setup — takes 4–8 weeks on its own. Starting after the PO lands usually means missed set dates, expedited freight, or chargebacks on the first shipment.' } },
    { '@type': 'Question', name: 'Can we use the same primary pack for DTC and retail?', acceptedAnswer: { '@type': 'Answer', text: 'Usually yes — primary rarely changes. What changes is everything around it: secondary carton compliance labels, master-carton configurations, UPC placement, inner-pack counts, and whether an e-commerce-safe shipper replaces or wraps the retail carton.' } },
    { '@type': 'Question', name: 'What does a retail chargeback actually look like?', acceptedAnswer: { '@type': 'Answer', text: 'A deduction against the invoice. Common categories: barcode unreadable at the DC scanner, master carton weight or dimensions outside tolerance, missing or wrong EDI labels, late DC appointment, product not floor-ready, damaged units above tolerance. Each category has its own deduction schedule in the retailer vendor manual.' } },
    { '@type': 'Question', name: 'Do we need an EDI setup to sell into Sephora, Ulta, or Target?', acceptedAnswer: { '@type': 'Answer', text: 'Yes for Target and most mass retailers. Sephora and Ulta have EDI programs but allow smaller vendors to onboard through a portal with manual purchase order acceptance. Expect to need an EDI provider for any multi-door national program.' } },
    { '@type': 'Question', name: 'How does Logic Pac help on retail-ready programs?', acceptedAnswer: { '@type': 'Answer', text: 'We handle GS1 barcode generation and placement, master-carton specification and testing, vendor-manual review against your pack, retailer-specific compliance labels, and the production and QC program that keeps run-to-sample conformity through to the DC.' } },
    { '@type': 'Question', name: 'What is a reasonable first retail launch size?', acceptedAnswer: { '@type': 'Answer', text: 'For a specialty-door launch (Credo, Bluemercury, specialty retailers), 50–200 doors is typical for a first PO. For Sephora or Ulta, first POs for new brands commonly land in the 300–1,000 door range. Target first POs for beauty new-brand programs often sit in the 500–1,800 door range.' } },
  ],
}

export default function RetailPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/retail-ready-beauty/shelf-ready-display.jpg', datePublished: '2026-10-07', dateModified: '2026-10-07' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(retailFaq) }} />
      <RetailClient />
    </>
  )
}
