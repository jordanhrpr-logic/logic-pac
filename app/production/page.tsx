import type { Metadata } from 'next'
import ProductionClient from './ProductionClient'

const title = 'Production Packaging for CPG and Beauty Brands'
const description = 'Managed packaging production for brands that reorder. Supplier management, QC at every stage, managed inventory with 7-day replenishment, cost engineering, and retail compliance. 5,000 to 1M+ units.'
const image = '/images/portfolio/shelf-ready-display-unit.jpeg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/production' },
  openGraph: {
    url: 'https://logic-pac.com/production',
    title: `${title} | Logic Pac`,
    description,
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: image, width: 2730, height: 1536 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: [image],
  },
}

const productionServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Production Packaging Management',
  alternateName: 'Managed Packaging Production Program',
  description: 'Production-scale packaging management for CPG, beauty, and consumer brands. Supplier management, three-stage QC, managed inventory with 7-day replenishment, cost engineering, and retail compliance across 5,000 to 1M+ unit programs.',
  provider: { '@type': 'Organization', name: 'Logic Pac', url: 'https://logic-pac.com' },
  serviceType: 'Custom Packaging Manufacturing',
  areaServed: 'US',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Production Packaging Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Packaging Inventory Program' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Production Quality Control (Pre-Production, Inline, Pre-Shipment)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supplier Qualification and Transition' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cost Engineering and Material Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail Compliance and Documentation' } },
    ],
  },
}

const productionFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Production Packaging FAQs',
  mainEntity: [
    { '@type': 'Question', name: 'What volume does Logic Pac consider production-scale?', acceptedAnswer: { '@type': 'Answer', text: 'Programs that reorder. Whether 5,000 or 500,000 units per run, repeat production requires consistent specs, reliable suppliers, QC at every stage, and inventory ready when your co-manufacturer needs it.' } },
    { '@type': 'Question', name: 'Can you manage packaging inventory between production runs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Salt Lake City warehouse holds packaging inventory so you can replenish in days instead of waiting 30 to 60 days for ocean freight. We front procurement so timing follows your launch calendar.' } },
    { '@type': 'Question', name: 'How do you maintain consistency across production runs?', acceptedAnswer: { '@type': 'Answer', text: 'Pre-production approval samples, inline inspection during manufacturing, and pre-shipment QC on every run. We maintain approved color standards, material specs, and structural tolerances.' } },
    { '@type': 'Question', name: 'Do you handle retail compliance for production packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Barcoding, master carton labeling, EDI/ASN documentation, and shelf-ready display specs for Ulta, Sephora, Target, and specialty retail are standard.' } },
    { '@type': 'Question', name: 'What happens when we need to change suppliers at volume?', acceptedAnswer: { '@type': 'Answer', text: 'We run parallel qualification: the new supplier produces samples against your approved standard while the existing supplier continues production. No gap in supply, no guessing on quality.' } },
    { '@type': 'Question', name: 'How does pricing change at higher volumes?', acceptedAnswer: { '@type': 'Answer', text: 'Per-unit cost decreases through tooling amortization, material purchasing leverage, and production efficiency. We model the cost curve for your specific program.' } },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://logic-pac.com' },
    { '@type': 'ListItem', position: 2, name: 'Production Packaging', item: 'https://logic-pac.com/production' },
  ],
}

export default function ProductionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productionServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productionFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ProductionClient />
    </>
  )
}
