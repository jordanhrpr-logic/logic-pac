import type { Metadata } from 'next'
import ScaleClient from './ScaleClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'packaging-at-scale'
const title = 'Packaging at Scale: What Changes at 10K, 50K, and 100K+ Units'
const description = 'What breaks when production volume grows and how to build a packaging program that handles 10K, 50K, and 100K+ units.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/guides/${slug}` },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    url: `https://logic-pac.com/guides/${slug}`,
    images: [{ url: '/images/portfolio/cosmetics-folding-carton.jpeg', width: 2496, height: 1726 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: ['/images/portfolio/cosmetics-folding-carton.jpeg'],
  },
}

const scale_faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'At what volume should I invest in custom tooling?', acceptedAnswer: { '@type': 'Answer', text: 'Custom tooling typically makes sense at 5,000 to 10,000 units depending on the format. A $5,000 to $15,000 die set amortized across 50,000 units adds $0.10 to $0.30 per unit — comparable to the premium you pay for stock-mold limitations. Below 5,000 units, stock components usually win on economics.' } },
    { '@type': 'Question', name: 'How do per-unit costs change from 5K to 100K units?', acceptedAnswer: { '@type': 'Answer', text: 'Per-unit cost typically drops 30 to 50% between a 5,000-unit run and a 100,000-unit run on the same format. The largest single factor is tooling amortization. Material pricing tiers, full-container freight loads, and setup cost distribution contribute the rest.' } },
    { '@type': 'Question', name: 'When do I need a second packaging supplier?', acceptedAnswer: { '@type': 'Answer', text: 'Most brands should qualify a backup supplier before crossing 50,000 units per production cycle. At that volume, a single-supplier disruption — capacity conflict, quality issue, shipping delay — can cost a retail window or a launch date. Dual qualification does not mean splitting every order; it means having a tested alternative ready.' } },
    { '@type': 'Question', name: 'What is a managed packaging program?', acceptedAnswer: { '@type': 'Answer', text: 'A managed program means one partner owns design, sourcing, production QC, inventory, and fulfillment as a coordinated system — not a series of one-off purchase orders. Inventory is staged in a warehouse with buffer stock, replenishment runs on a planned cycle, and procurement credit decouples packaging timing from cash flow cycles.' } },
    { '@type': 'Question', name: 'How do I keep packaging consistent across production runs?', acceptedAnswer: { '@type': 'Answer', text: 'Consistency requires four things: an approved golden sample as the production standard, documented material and finish specifications that do not reference subjective language, first-article inspection on every run before mass production proceeds, and run-to-run conformity tracking that catches drift before it reaches the customer.' } },
    { '@type': 'Question', name: 'What packaging volumes does Logic Pac handle?', acceptedAnswer: { '@type': 'Answer', text: 'We work across the full volume range — from 500-unit influencer kits to multi-SKU programs producing over 1 million units annually. Our managed program model is designed for brands at 10,000 units and above who need production discipline, cost engineering, and supply continuity.' } },
  ],
}

export default function PackagingAtScalePage() {
  const article = buildGuideArticleSchema({
    slug,
    title,
    description,
    image: '/images/portfolio/cosmetics-folding-carton.jpeg',
    datePublished: '2026-11-10',
    dateModified: '2026-11-10',
    type: 'TechArticle',
    proficiencyLevel: 'Intermediate',
    dependencies: 'launch volume estimate, format selection, supplier relationship',
  })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scale_faq) }} />
      <ScaleClient />
    </>
  )
}
