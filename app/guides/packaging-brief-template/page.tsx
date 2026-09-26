import type { Metadata } from 'next'
import BriefClient from './BriefClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'packaging-brief-template'
const title = 'Packaging Brief Template for Brand Teams'
const description = 'Build a packaging brief covering objectives, product, channels, materials, budget, quantity, timing, testing, deliverables, and approvals.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/packaging-brief-template' },
}

const packaging_brief_template_faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: title,
  mainEntity: [
  { "@type": "Question", name: "How long should a brief be?", acceptedAnswer: { "@type": "Answer", text: "Two to four pages is typical. Long enough to answer every question, short enough that nobody skips reading it." } },
  { "@type": "Question", name: "What if we do not have all the answers yet?", acceptedAnswer: { "@type": "Answer", text: "Mark the section TBD and note who will resolve it and when. Better to flag the gap than to leave the section blank." } },
  { "@type": "Question", name: "Should we share the budget?", acceptedAnswer: { "@type": "Answer", text: "Yes. Without a target, your partner cannot optimize. Brands that withhold budget usually get back samples that miss target, then have to redo the work." } },
  { "@type": "Question", name: "How do we handle multiple SKUs in one brief?", acceptedAnswer: { "@type": "Answer", text: "One brief per project, with a shared section covering brand, channels, and sustainability, and per-SKU sections for structure, volume, and budget." } },
  { "@type": "Question", name: "Who in our team should write the brief?", acceptedAnswer: { "@type": "Answer", text: "Whoever owns the launch, usually a brand manager or product lead. Ops, regulatory, and finance review and sign before it goes external." } }
  ]
}

export default function BriefPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/packaging-brief-checklist.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(packaging_brief_template_faq) }} /><BriefClient /></>
}
