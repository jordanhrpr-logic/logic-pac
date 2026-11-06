import type { Metadata } from 'next'
import CapabilitiesClient from './CapabilitiesClient'
import { capabilityFaqs } from './capabilities-data'

const SITE_URL = 'https://logic-pac.com'

export const metadata: Metadata = {
  title: 'Custom Packaging Capabilities: Design, Manufacturing, QC, and Fulfillment',
  description: 'One partner from concept to delivery. Structural design, 3D engineering, global manufacturing, quality control, compliance, logistics, kitting, and fulfillment for beauty and consumer brands.',
  alternates: { canonical: '/capabilities' },
  openGraph: {
    url: 'https://logic-pac.com/capabilities',
    title: 'Custom Packaging Capabilities: Design, Manufacturing, QC, and Fulfillment | Logic Pac',
    description: 'One partner from concept to delivery. Structural design, 3D engineering, global manufacturing, quality control, compliance, logistics, kitting, and fulfillment for beauty and consumer brands.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/portfolio/shelf-ready-display-unit.jpeg', width: 2730, height: 1536 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Capabilities: Design, Manufacturing, QC, and Fulfillment | Logic Pac',
    description: 'One partner from concept to delivery. Structural design, 3D engineering, global manufacturing, quality control, compliance, logistics, kitting, and fulfillment for beauty and consumer brands.',
    images: ['/images/portfolio/shelf-ready-display-unit.jpeg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Capabilities', item: `${SITE_URL}/capabilities` },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Logic Pac Packaging Capabilities FAQ',
  mainEntity: capabilityFaqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function CapabilitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CapabilitiesClient />
    </>
  )
}
