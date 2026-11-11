import type { Metadata } from 'next'
import EvaluationClient from './EvaluationClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'contract-packaging-partner-evaluation'
const title = 'How to Evaluate a Contract Packaging Partner'
const description = 'Evaluation framework for brands at volume who need to change or add a packaging supplier. Capacity, quality, cost, and transition planning.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/guides/${slug}` },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    url: `https://logic-pac.com/guides/${slug}`,
    images: [{ url: '/images/portfolio/shelf-ready-display-unit.jpeg', width: 2730, height: 1536 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: ['/images/portfolio/shelf-ready-display-unit.jpeg'],
  },
}

const evaluation_faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'When should a brand consider changing packaging suppliers?', acceptedAnswer: { '@type': 'Answer', text: 'The most common triggers are quality degradation across production runs, capacity constraints that delay reorders, cost creep without a clear explanation, communication breakdown where production updates require chasing, and geographic concentration risk with a single-country supply base. Any one of these at volume is a reason to evaluate alternatives.' } },
    { '@type': 'Question', name: 'How long does a packaging supplier transition take?', acceptedAnswer: { '@type': 'Answer', text: 'A well-planned parallel transition takes 12 to 20 weeks: 2 to 4 weeks for specification transfer and golden-sample review, 4 to 8 weeks for first-article production and approval, and 4 to 8 weeks for the first production run while the existing supplier continues filling orders. Rushing this process creates the quality problems the transition was meant to solve.' } },
    { '@type': 'Question', name: 'Should we qualify multiple packaging suppliers?', acceptedAnswer: { '@type': 'Answer', text: 'For brands doing 50,000 or more units annually, qualifying a second supplier is a risk management decision, not a negotiation tactic. A single-supplier dependency means one factory fire, one port delay, or one quality failure can halt your entire packaging supply. Dual qualification adds cost upfront but protects continuity.' } },
    { '@type': 'Question', name: 'What is a golden sample and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'A golden sample is the physical production reference that defines what acceptable looks like. It is the standard against which every production run is measured. Without one, quality becomes subjective. The golden sample should include approved color, material weight, finish execution, print registration, and closure fit. Both the brand and the supplier sign off on it before mass production begins.' } },
    { '@type': 'Question', name: 'How do you evaluate a packaging supplier quality system?', acceptedAnswer: { '@type': 'Answer', text: 'Ask for documentation of three specific checkpoints: pre-production approval (how samples are reviewed before mass production), inline inspection (what is checked during the run and at what frequency), and pre-shipment inspection (the final QC gate before the order ships). If the supplier cannot describe these three steps with specifics, their quality system is informal and your defect rate will reflect that.' } },
    { '@type': 'Question', name: 'What should be included in a packaging supplier quote comparison?', acceptedAnswer: { '@type': 'Answer', text: 'Compare landed cost, not ex-works price. A proper comparison includes unit cost, tooling and amortization, finish pricing, freight to your warehouse, duties, overrun and underrun policy, sample charges, and payment terms. Two suppliers quoting different scopes at different prices is not a comparison. Normalize the scope first.' } },
  ],
}

export default function EvaluationPage() {
  const article = buildGuideArticleSchema({
    slug,
    title,
    description,
    image: '/images/portfolio/shelf-ready-display-unit.jpeg',
    datePublished: '2026-11-10',
    dateModified: '2026-11-10',
    type: 'TechArticle',
    proficiencyLevel: 'Intermediate',
    dependencies: 'current supplier relationship, volume history, quality documentation',
  })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(evaluation_faq) }} />
      <EvaluationClient />
    </>
  )
}
