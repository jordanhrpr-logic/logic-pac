import type { Metadata } from 'next'
import PackagingAuditClient from './PackagingAuditClient'

const title = 'Packaging Audit for Beauty & CPG Brands'
const description = 'A structured packaging audit across seven dimensions — compliance, cost, retail readiness, sustainability, quality, structure, and design system coherence — delivered as a written report with a prioritized action register.'
const image = '/images/portfolio/cosmetics-folding-carton.jpeg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/packaging-audit' },
  openGraph: {
    url: 'https://logic-pac.com/packaging-audit',
    title: `${title} | Logic Pac`,
    description,
    type: 'website',
    siteName: 'Logic Pac',
    images: [{ url: image, width: 2496, height: 1726 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: [image],
  },
}

const auditServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Packaging Audit',
  alternateName: 'Beauty Packaging Program Audit',
  description: 'Seven-dimension packaging audit for beauty and CPG brands covering structural integrity, compliance, cost, retail readiness, sustainability, design system coherence, and quality specification.',
  provider: { '@type': 'Organization', name: 'Logic Pac', url: 'https://logic-pac.com' },
  serviceType: 'Packaging Consulting',
  areaServed: 'US',
}

const auditFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'How is a packaging audit different from a QC inspection?', acceptedAnswer: { '@type': 'Answer', text: 'A QC inspection confirms a specific production run matches a written spec. A packaging audit asks whether the spec itself is the right one, and whether the surrounding system holds up. QC is run-level. Audit is program-level.' } },
    { '@type': 'Question', name: 'How long does a packaging audit take?', acceptedAnswer: { '@type': 'Answer', text: 'A single-SKU audit on one or two dimensions runs 2–4 weeks. A full seven-dimension audit on a multi-SKU program runs 4–6 weeks.' } },
    { '@type': 'Question', name: 'What does Logic Pac deliver when you run an audit?', acceptedAnswer: { '@type': 'Answer', text: 'A written report structured by the seven audit dimensions, each with findings, severity rating, prioritized action register, and our recommendation.' } },
    { '@type': 'Question', name: 'Is the audit a sales pitch?', acceptedAnswer: { '@type': 'Answer', text: 'No. The audit is a defined deliverable with its own scope. We deliver the report whether or not you decide to work with us on execution.' } },
    { '@type': 'Question', name: 'What does a packaging audit cost?', acceptedAnswer: { '@type': 'Answer', text: 'Scoped to the program. A focused single-dimension review is lighter than a full seven-dimension audit across a multi-SKU family. We scope and quote after the intake call.' } },
    { '@type': 'Question', name: 'Can we run the audit ourselves?', acceptedAnswer: { '@type': 'Answer', text: 'For some dimensions, yes. Retail readiness and sustainability have self-audit scorecards in our guides. Compliance, cost, and system coherence are harder to self-audit without a current reference.' } },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://logic-pac.com' },
    { '@type': 'ListItem', position: 2, name: 'Packaging Audit', item: 'https://logic-pac.com/packaging-audit' },
  ],
}

export default function PackagingAuditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(auditServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(auditFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PackagingAuditClient />
    </>
  )
}
