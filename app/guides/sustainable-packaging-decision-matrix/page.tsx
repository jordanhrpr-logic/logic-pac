import type { Metadata } from 'next'
import MatrixClient from './MatrixClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'sustainable-packaging-decision-matrix'
const title = 'The Sustainable Packaging Decision Matrix'
const description = 'Score PCR, mono-material, refill, molded fiber, aluminum, and reduction side by side for one SKU — the scoring tool Logic Pac uses to pick the right lever.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/sustainable-packaging-decision-matrix' },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/guides/sustainable-decision-matrix/lever-molded-fiber.jpg', width: 1600, height: 1200 }],
  },
}

const sustainable_matrix_faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'Isn’t a scorecard just a slower version of “use PCR”?', acceptedAnswer: { '@type': 'Answer', text: 'Only if your brand, formula, channel, and claim stance are identical to the next brand’s. They rarely are. The matrix exists because “just use PCR” is often the second- or third-best answer when you look at formula compatibility, Prop 65 risk, SB 54 claim defensibility, and refill economics for your specific category and price point.' } },
    { '@type': 'Question', name: 'How is this different from your Sustainable Beauty Packaging Playbook?', acceptedAnswer: { '@type': 'Answer', text: 'The Playbook explains what each lever is and roughly what each one costs. This guide is the decision instrument you run after reading it. The Playbook teaches the levers; the Matrix picks between them for a specific SKU.' } },
    { '@type': 'Question', name: 'Can we run the matrix without finalized formula or supplier data?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but your scores will be directional. The matrix is designed to surface the top two or three candidate paths before you commit to tooling or supplier qualification, so partial data is often enough to eliminate the wrong answers early.' } },
    { '@type': 'Question', name: 'What if two levers tie?', acceptedAnswer: { '@type': 'Answer', text: 'That is usually a sign the two paths should both be prototyped. A tie on the scorecard means you have two defensible options; the tie-breaker is almost always a Logic Pac pilot run on both and a side-by-side cost and finish review before tooling.' } },
    { '@type': 'Question', name: 'How often should we re-run the scorecard?', acceptedAnswer: { '@type': 'Answer', text: 'At every meaningful inflection: new SKU family, new channel, new regulatory milestone, or a 20%-plus shift in volume. The winning lever for a 2026 launch is often not the winning lever for a 2028 replenishment at 5x volume.' } },
    { '@type': 'Question', name: 'What does Logic Pac actually do on a sustainability program?', acceptedAnswer: { '@type': 'Answer', text: 'We handle lever scoring, SB 54 recyclability review, FTC Green Guides claims review, Prop 65 substrate and ink screening, structural design around recovery, supplier qualification, pilot QC, and fulfillment coordination out of Salt Lake City. The full capability set is on our Capabilities page.' } },
  ],
}

export default function SustainableDecisionMatrixPage() {
  const article = buildGuideArticleSchema({
    slug,
    title,
    description,
    image: '/images/guides/sustainable-decision-matrix/lever-molded-fiber.jpg',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
  })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sustainable_matrix_faq) }} />
      <MatrixClient />
    </>
  )
}
