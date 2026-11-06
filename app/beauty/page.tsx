import type { Metadata } from 'next'
import BeautyClient from './BeautyClient'

const title = 'Custom Packaging for Beauty, Skincare & Cosmetics Brands'
const description = 'Beauty packaging manufacturer for skincare, cosmetics, and wellness brands. Folding cartons, rigid boxes, gift sets, retail displays, and multi-SKU systems from 500 to 1M+ units. Ulta, Sephora, and Target compliant.'
const image = '/images/portfolio/premium-beauty-gift-set1.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/beauty' },
  openGraph: {
    url: 'https://logic-pac.com/beauty',
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

const beautyServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Beauty Packaging Manufacturing',
  alternateName: 'Custom Beauty and Skincare Packaging',
  description: 'Full-service custom packaging for beauty, skincare, cosmetics, and wellness brands. Folding cartons, rigid boxes, gift sets, retail displays, and multi-SKU production systems with retailer compliance for Ulta, Sephora, Target, and specialty retail.',
  provider: { '@type': 'Organization', name: 'Logic Pac', url: 'https://logic-pac.com' },
  serviceType: 'Custom Packaging Manufacturing',
  areaServed: 'US',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Beauty Packaging Formats',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Folding Cartons for Skincare and Cosmetics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rigid Gift Box with Magnetic Closure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-SKU Packaging System' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shelf-Ready Retail Display' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Packaging Inventory Program' } },
    ],
  },
}

const beautyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Beauty Packaging FAQs',
  mainEntity: [
    { '@type': 'Question', name: 'What packaging formats does Logic Pac produce for beauty brands?', acceptedAnswer: { '@type': 'Answer', text: 'Folding cartons, rigid set-up boxes, tubes and cylinders, drawer boxes, magnetic-closure gift sets, retail shelf-ready displays, and multi-SKU kitting. We match the format to your product, channel, and price point.' } },
    { '@type': 'Question', name: 'What are the minimum order quantities for beauty packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Folding cartons typically start at 1,000 units. Rigid boxes start at 500. Influencer and PR kits start at 50. Pricing improves at higher volumes.' } },
    { '@type': 'Question', name: 'Can you produce packaging for Ulta, Sephora, and Target?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Retailer compliance is standard in our production process. We manage barcoding, master carton specifications, labeling, and retailer documentation for major retail channels.' } },
    { '@type': 'Question', name: 'How long does beauty packaging take to produce?', acceptedAnswer: { '@type': 'Answer', text: 'Simple folding carton programs can ship in 8 to 10 weeks. Fully custom rigid boxes with specialty finishes require 12 to 20 weeks including tooling, sampling, production, and freight.' } },
    { '@type': 'Question', name: 'Can you match colors and finishes across my entire product line?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run pre-production color proofs and finish samples across every SKU so the full line reads as one system on shelf.' } },
    { '@type': 'Question', name: 'Do you handle packaging inventory and fulfillment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Salt Lake City warehouse stages packaging inventory, handles kitting and assembly, and ships to co-manufacturers, retail DCs, or DTC customers.' } },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://logic-pac.com' },
    { '@type': 'ListItem', position: 2, name: 'Beauty Packaging', item: 'https://logic-pac.com/beauty' },
  ],
}

export default function BeautyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(beautyServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(beautyFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BeautyClient />
    </>
  )
}
