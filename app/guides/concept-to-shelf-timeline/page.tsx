import type { Metadata } from 'next'
import TimelineClient from './TimelineClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'concept-to-shelf-timeline'
const title = 'Custom Packaging Concept-to-Shelf Timeline'
const description = 'Plan packaging discovery, design, prototyping, testing, production, quality control, and freight with a realistic phase-by-phase schedule.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/concept-to-shelf-timeline' },
}

const concept_to_shelf_timeline_faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: title,
  mainEntity: [
  { "@type": "Question", name: "Can we do this in 8 weeks instead of 12?", acceptedAnswer: { "@type": "Answer", text: "Sometimes. It requires pre-locked design direction, existing material specs, available capacity, and phases that can safely run in parallel. Rush costs and feasibility vary by supplier and format." } },
  { "@type": "Question", name: "What if our product is glass and breakable?", acceptedAnswer: { "@type": "Answer", text: "Glass often requires added structural engineering, protective packaging, and drop testing. The schedule impact depends on the format, channel, test protocol, and whether an e-commerce variant is required." } },
  { "@type": "Question", name: "How does international production change the timeline?", acceptedAnswer: { "@type": "Answer", text: "Add 4-6 weeks for ocean freight and 1-2 weeks for customs and warehouse intake. A 12-week Asia-sourced project is realistically 16-18 weeks." } },
  { "@type": "Question", name: "What is the single biggest mistake brands make?", acceptedAnswer: { "@type": "Answer", text: "Approving design direction in Week 4 without a structural prototype. The package looks great in renders, fails physically in Week 6, and the project unwinds back to design." } },
  { "@type": "Question", name: "Should we get a packaging brief template?", acceptedAnswer: { "@type": "Answer", text: "Yes. The faster and clearer the brief, the faster the project." } }
  ]
}

export default function TimelinePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/concept-to-shelf-timeline.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(concept_to_shelf_timeline_faq) }} /><TimelineClient /></>
}
