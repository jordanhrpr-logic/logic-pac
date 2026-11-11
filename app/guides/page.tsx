import type { Metadata } from 'next'
import GuidesClient from './GuidesClient'

const SITE_URL = 'https://logic-pac.com'

export const metadata: Metadata = {
  title: 'Packaging Guides: Design, Cost, Materials & Compliance',
  description: 'In-depth guides on packaging design systems, material selection, cost planning, sustainability compliance, QC, and production at scale for beauty and consumer brands.',
  alternates: { canonical: '/guides' },
  openGraph: {
    url: 'https://logic-pac.com/guides',
    title: 'Packaging Guides: Design, Cost, Materials & Compliance | Logic Pac',
    description: 'In-depth guides on packaging design systems, material selection, cost planning, sustainability compliance, QC, and production at scale.',
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: '/images/guides/luxury-beauty-packaging/kiki-secondary-hero.jpg', width: 1800, height: 1800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Guides: Design, Cost, Materials & Compliance | Logic Pac',
    description: 'In-depth guides on packaging design systems, material selection, cost planning, sustainability compliance, QC, and production at scale.',
    images: ['/images/guides/luxury-beauty-packaging/kiki-secondary-hero.jpg'],
  },
}

const guideSlugs = [
  'packaging-audit', 'packaging-brief-template', 'concept-to-shelf-timeline',
  'beauty-brand-packaging-design-system', 'luxury-beauty-packaging-system', 'packaging-finish-guide',
  'material-decision-framework', 'mono-material-packaging', 'sustainable-beauty-packaging',
  'sustainable-packaging-decision-matrix', 'beauty-refillable-playbook',
  'cost-moq-landed-cost-planning', 'packaging-at-scale', 'packaging-testing-quality-control',
  'contract-packaging-partner-evaluation',
  'retail-ready-beauty-packaging', 'beauty-packaging-claims-compliance',
  'influencer-kit-playbook',
]

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Logic Pac Packaging Guides',
  description: 'In-depth packaging guides covering design, materials, cost planning, sustainability, quality control, and compliance for beauty and consumer brands.',
  url: `${SITE_URL}/guides`,
  isPartOf: { '@type': 'WebSite', name: 'Logic Pac', url: SITE_URL },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: guideSlugs.length,
    itemListElement: guideSlugs.map((slug, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/guides/${slug}`,
    })),
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
  ],
}

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <GuidesClient />
    </>
  )
}
