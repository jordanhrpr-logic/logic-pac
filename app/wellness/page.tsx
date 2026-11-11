import type { Metadata } from 'next'
import WellnessClient from './WellnessClient'

const title = 'Custom Packaging for Health and Wellness Brands'
const description = 'Packaging manufacturer for supplement, nutraceutical, and wellness brands. Bottles, jars, pouches, subscription boxes, retail displays, and fulfillment.'
const image = '/images/portfolio/velvet-interior-unboxing-kit.jpeg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/wellness' },
  openGraph: {
    url: 'https://logic-pac.com/wellness',
    title: `${title} | Logic Pac`,
    description,
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: image, width: 2500, height: 1875 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: [image],
  },
}

const wellnessServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wellness Packaging Manufacturing',
  alternateName: 'Custom Health and Wellness Packaging',
  description: 'Full-service custom packaging for supplement, nutraceutical, self-care, and wellness brands. Bottles, jars, pouches, subscription boxes, retail-ready formats, sustainable materials, FDA compliance support, and fulfillment.',
  provider: { '@type': 'Organization', name: 'Logic Pac', url: 'https://logic-pac.com' },
  serviceType: 'Custom Packaging Manufacturing',
  areaServed: 'US',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wellness Packaging Formats',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supplement and Nutraceutical Packaging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wellness Kit and Subscription Box' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail-Ready Wellness Packaging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sustainable Wellness Packaging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wellness Product Kitting and Fulfillment' } },
    ],
  },
}

const wellnessFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Wellness Packaging FAQs',
  mainEntity: [
    { '@type': 'Question', name: 'What MOQs do you work with for wellness packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Standard formats like folding cartons and pouches start at 1,000 units. Rigid boxes and custom structures start at 500. Fully custom tooling typically starts at 5,000 or more units. Pricing improves at higher volumes.' } },
    { '@type': 'Question', name: 'Do you handle supplement packaging compliance?', acceptedAnswer: { '@type': 'Answer', text: 'We produce packaging that meets FDA labeling layout requirements, accommodates Supplement Facts panels, and supports child-resistant and tamper-evident closures where required.' } },
    { '@type': 'Question', name: 'Can you produce subscription box packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We design modular box structures that accommodate product rotation across subscription cycles. Fixed outer dimensions with variable inserts let you change the product mix without retooling the box.' } },
    { '@type': 'Question', name: 'What sustainable packaging options are available for wellness brands?', acceptedAnswer: { '@type': 'Answer', text: 'PCR content, FSC-certified paperboard, compostable materials, mono-material recyclable designs, and soy-based inks. We help you select the option that matches your sustainability claims and retailer requirements.' } },
    { '@type': 'Question', name: 'Do you work with Amazon and DTC fulfillment requirements?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We produce packaging that meets Amazon Frustration-Free Packaging and Ships in Own Container certification requirements, as well as standard DTC shipping constraints.' } },
    { '@type': 'Question', name: 'How long does a wellness packaging program take?', acceptedAnswer: { '@type': 'Answer', text: 'Standard formats with existing tooling can ship in 8 to 12 weeks. Fully custom structures require 12 to 20 weeks including sampling, approval, production, and freight.' } },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://logic-pac.com' },
    { '@type': 'ListItem', position: 2, name: 'Wellness Packaging', item: 'https://logic-pac.com/wellness' },
  ],
}

export default function WellnessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wellnessServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wellnessFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <WellnessClient />
    </>
  )
}
