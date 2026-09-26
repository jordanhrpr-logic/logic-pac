import type { Metadata } from 'next'
import SustainableClient from './SustainableClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'sustainable-beauty-packaging'
const title = 'Sustainable Beauty Packaging Playbook'
const description = 'Compare PCR, mono-material, refillable, glass, aluminum, and fiber packaging by cost, claims risk, product fit, and implementation complexity.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/sustainable-beauty-packaging' },
}

const sustainable_beauty_packaging_faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: title,
  mainEntity: [
  { "@type": "Question", name: "How much does sustainable beauty packaging actually cost?", acceptedAnswer: { "@type": "Answer", text: "The cost depends on the material, format, volume, decoration, tooling, freight, and testing requirements. Some reduction moves can lower cost, while PCR, mono-material, fiber, glass, aluminum, and refill systems may carry different premiums." } },
  { "@type": "Question", name: "What is the fastest sustainability win for a brand launching in 90 days?", acceptedAnswer: { "@type": "Answer", text: "Start by reducing unnecessary material, documenting the current bill of materials, and reviewing claims. FSC-certified cartons or verified recycled content may be practical next steps." } },
  { "@type": "Question", name: "Do refillable systems actually work for beauty?", acceptedAnswer: { "@type": "Answer", text: "Yes, but only for hero SKUs with high repurchase frequency. Refillability under 40% adoption rate has worse environmental outcomes than well-designed single-use systems." } },
  { "@type": "Question", name: "How do I tell which sustainability certifications matter?", acceptedAnswer: { "@type": "Answer", text: "Look for third-party certifying bodies with public audit trails: FSC, BPI, TUV, Cradle to Cradle. Skip self-declared programs and generic green graphics." } },
  { "@type": "Question", name: "What happens if I make sustainability claims that are not substantiated?", acceptedAnswer: { "@type": "Answer", text: "FTC Green Guides, EU ECGT, and California SB 343 all create legal exposure for unsubstantiated environmental claims. Document the claim, the evidence, and the jurisdiction before printing." } },
  { "@type": "Question", name: "Can sustainable packaging really feel premium?", acceptedAnswer: { "@type": "Answer", text: "Yes. FSC-certified specialty papers, recycled aluminum, mono-material systems with quality finishes, and refillable glass all deliver premium perception with defensible claims." } }
  ]
}

export default function SustainablePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/sustainability-certifications.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sustainable_beauty_packaging_faq) }} /><SustainableClient /></>
}
