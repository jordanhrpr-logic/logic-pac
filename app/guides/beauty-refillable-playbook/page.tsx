import type { Metadata } from 'next'
import RefillableClient from './RefillableClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'beauty-refillable-playbook'
const title = 'Refillable Beauty Packaging Playbook'
const description = 'Evaluate refill cartridges, replaceable pods, and return-to-refill systems by product fit, repeat purchase behavior, cost, channel, and execution risk.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/beauty-refillable-playbook' },
}

const beauty_refillable_playbook_faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: title,
  mainEntity: [
  { "@type": "Question", name: "What is the cheapest path to a refillable hero SKU?", acceptedAnswer: { "@type": "Answer", text: "Aluminum primary plus aluminum or PE refill cartridge. Mid-tier upfront cost, defensible recyclability story, and well-established supply chain." } },
  { "@type": "Question", name: "Should we launch a refill at the same time as the primary?", acceptedAnswer: { "@type": "Answer", text: "Almost always no. Launch the primary, build customer loyalty, then introduce the refill 6-12 months in. The refill is a retention play, not an acquisition play." } },
  { "@type": "Question", name: "How do we communicate the system without overclaiming?", acceptedAnswer: { "@type": "Answer", text: "Show the math. Each refill saves 65% of the packaging weight of a new bottle. Avoid the word sustainable unqualified." } },
  { "@type": "Question", name: "Is refillability worth pursuing for a mass-tier brand?", acceptedAnswer: { "@type": "Answer", text: "Rarely with a primary-refill model. Pod and cartridge models can work at mass tier. Test pod compatibility with retailers before committing to tooling." } },
  { "@type": "Question", name: "How do we audit our existing refillable system?", acceptedAnswer: { "@type": "Answer", text: "Three numbers: refill adoption rate, primary durability in cycles per primary, and end-of-life recovery percentage. If any are below industry benchmarks, the system is not delivering." } }
  ]
}

export default function RefillablePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/refillable-system-diagram.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(beauty_refillable_playbook_faq) }} /><RefillableClient /></>
}
