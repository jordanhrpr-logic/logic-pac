import type { Metadata } from 'next'
import CostClient from './CostClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'cost-moq-landed-cost-planning'
const title = 'Packaging Cost, MOQ & Landed-Cost Planning Guide'
const description = 'The landed-cost stack, MOQ as a cash-flow decision, freight-mode selection, and an interactive worksheet to pressure-test a packaging program before the PO.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/cost-moq-landed-cost-planning' },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    url: `https://logic-pac.com/guides/${slug}`,
    images: [{ url: '/images/guides/packaging-testing-qc/fit-function.jpg', width: 1600, height: 900 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: ['/images/guides/packaging-testing-qc/fit-function.jpg'],
  },
}

const cost_faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'Why is landed cost different from the unit cost in the quote?', acceptedAnswer: { '@type': 'Answer', text: 'A factory quote is almost always ex-works or FOB — the price of the box leaving the factory floor. Landed cost adds tooling amortization, freight, duties, warehousing, inserts and assembly, and the cost of defects and rework. On a typical beauty program, landed cost runs 15 to 40% above the factory unit cost depending on format, freight mode, and launch volume.' } },
    { '@type': 'Question', name: 'How much should we hold in packaging inventory?', acceptedAnswer: { '@type': 'Answer', text: 'A reasonable default for a beauty program is 90 to 120 days of forward cover for primary packaging and 60 to 90 days for secondary. Hero SKUs with predictable demand hold less; seasonal, holiday, and influencer-kit programs often need more. The constraint is replenishment lead time: ocean freight from Asia is 30 to 60 days door to door.' } },
    { '@type': 'Question', name: 'When does air freight make sense?', acceptedAnswer: { '@type': 'Answer', text: 'Air is justified when the per-unit margin lost to a stockout is greater than the per-unit cost of air versus ocean. For most beauty programs, that math works out on hero SKUs during launch and on holiday kits. It does not work on evergreen secondary packaging where ocean is almost always right.' } },
    { '@type': 'Question', name: 'Should we build in extra MOQ to absorb defect rate?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A reasonable production over-order is 2 to 5% above launch volume to cover QC pulls, in-transit damage, and sampling. Luxury programs with full pre-production QC can hold the over-order to 1 to 2%. Programs with no documented QC should plan for 5 to 10% over-order.' } },
    { '@type': 'Question', name: 'How do we price tooling across a product line?', acceptedAnswer: { '@type': 'Answer', text: 'Tooling is a one-time cost but should be amortized across the volume that will actually use it. Spread tooling across the forward 24-month volume plan, not the first run alone — the per-unit tooling line changes by 10x between a 50,000-unit first run and a 500,000-unit forward plan.' } },
    { '@type': 'Question', name: 'Does Logic Pac front packaging cost?', acceptedAnswer: { '@type': 'Answer', text: 'For established programs, Logic Pac extends packaging credit so procurement timing is driven by the launch calendar — not by cash flow cycles. The Epicutis case study shows the operational detail: packaging stocked at the Salt Lake City warehouse, 7-day replenishment, and no emergency air freight charges.' } },
  ],
}

export default function CostPage() {
  const article = buildGuideArticleSchema({
    slug,
    title,
    description,
    image: '/images/guides/packaging-design-system/scroll-01-family-overview.jpg',
    datePublished: '2026-10-07',
    dateModified: '2026-10-07', type: 'TechArticle', proficiencyLevel: 'Intermediate', dependencies: 'factory quote, launch volume estimate, freight mode decision',})
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cost_faq) }} />
      <CostClient />
    </>
  )
}
