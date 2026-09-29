import type { Metadata } from 'next'
import CapabilitiesClient from './CapabilitiesClient'
import { capabilityFaqs } from './capabilities-data'

const SITE_URL = 'https://logic-pac.com'

export const metadata: Metadata = {
  title: 'Capabilities — Full-Service Custom Packaging',
  description: 'Full-service packaging: structural design, 3D engineering, global manufacturing, quality control, compliance, logistics, and fulfillment.',
  alternates: { canonical: '/capabilities' },
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
