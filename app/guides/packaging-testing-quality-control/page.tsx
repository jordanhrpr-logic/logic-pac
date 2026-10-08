import type { Metadata } from 'next'
import TestingClient from './TestingClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'packaging-testing-quality-control'
const title = 'Packaging Testing & Quality Control Guide'
const description = 'Close the gap between the approved sample and the cased pallet: specifications, golden samples, fit and transit testing, DUPRO and pre-shipment inspection.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/packaging-testing-quality-control' },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/guides/packaging-testing-qc/sample-inspection.jpg', width: 1600, height: 900 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'What does "run-to-sample conformity" actually mean?', acceptedAnswer: { '@type': 'Answer', text: 'It means production units match the signed golden sample for color, finish, structure, tolerances, closure feel, and dispense behavior within a written tolerance band. Without a signed golden sample and written specs, "matches the sample" is a conversation, not a standard.' } },
    { '@type': 'Question', name: 'What AQL should we specify on finished goods?', acceptedAnswer: { '@type': 'Answer', text: 'For most beauty and consumer packaging programs, AQL 0.65 critical, 2.5 major, and 4.0 minor is a reasonable starting point. Prestige and luxury tighten critical to 0 and major to 1.5. The number only matters if the defect classes are written down and the inspector has reference photos.' } },
    { '@type': 'Question', name: 'Do we need third-party inspection on every run?', acceptedAnswer: { '@type': 'Answer', text: 'For established programs with a factory that has shipped multiple clean runs, DUPRO can go to spot checks. For new factories, new SKUs, or any program where the last run had defects escape, use third-party on both DUPRO and pre-shipment.' } },
    { '@type': 'Question', name: 'How do we handle a defect found at pre-shipment inspection?', acceptedAnswer: { '@type': 'Answer', text: 'Three paths. Minor defects below tolerance ship with a documented note. Majors trigger a sort, rework, or partial hold. Criticals trigger a full hold, root-cause analysis, and corrective action before the next pallet moves. Each path should be pre-agreed in the specification.' } },
    { '@type': 'Question', name: 'What is the minimum documentation we should request from a factory?', acceptedAnswer: { '@type': 'Answer', text: 'Per run: pre-production sample sign-off, DUPRO inspection report with photos, pre-shipment inspection report with photos, Certificates of Analysis on substrates and inks where applicable, and a packing list that matches the inspection report.' } },
    { '@type': 'Question', name: 'How does Logic Pac manage QC on client programs?', acceptedAnswer: { '@type': 'Answer', text: 'Logic Pac writes the specification, maintains the golden sample library, qualifies the factory, runs DUPRO and pre-shipment inspection against the written spec, and handles corrective-action loops when something drifts. On higher-stakes transitions we have sent team members to the factory and the packout facility in person.' } },
  ],
}

export default function PackagingTestingQCPage() {
  const article = buildGuideArticleSchema({
    slug,
    title,
    description,
    image: '/images/guides/packaging-testing-qc/sample-inspection.jpg',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
  })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TestingClient />
    </>
  )
}
