import type { Metadata } from 'next'
import MaterialClient from './MaterialClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'material-decision-framework'
const title = 'Beauty Packaging Material Decision Guide'
const description = 'Compare glass, PET, HDPE, aluminum, and molded fiber by product fit, cost, MOQ, freight, sustainability, perception, and supply risk.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/material-decision-framework' },
}

const material_decision_framework_faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: title,
  mainEntity: [
  { "@type": "Question", name: "Can we use multiple materials in the same product line?", acceptedAnswer: { "@type": "Answer", text: "Yes, and most brands do. Glass primary plus paperboard secondary plus molded fiber insert is a common premium stack. Each component should be independently recyclable." } },
  { "@type": "Question", name: "Is bamboo or wood a viable alternative?", acceptedAnswer: { "@type": "Answer", text: "Niche. Beautiful for caps, lids, and accents. Almost never a viable primary container due to moisture, sealing, and food-safety regulations." } },
  { "@type": "Question", name: "How do bio-plastics like PLA and PHA compare?", acceptedAnswer: { "@type": "Answer", text: "Improving but still limited by compostability infrastructure. PLA needs industrial composting, not consumer composting. For most beauty brands, mono-material recycled plastic is more defensible today." } },
  { "@type": "Question", name: "What about refillable systems?", acceptedAnswer: { "@type": "Answer", text: "Covered in detail in our Beauty Refillable Playbook. Aluminum plus glass refill bases work. Plastic refills almost always undercut the sustainability claim." } },
  { "@type": "Question", name: "How do we pick between PET and HDPE if both work?", acceptedAnswer: { "@type": "Answer", text: "PET if clarity matters. HDPE if chemical compatibility matters. Cost and recyclability are similar. Perception favors PET in clear formats and HDPE in opaque." } }
  ]
}

export default function MaterialPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/material-comparison-grid.png', datePublished: '2026-05-06', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(material_decision_framework_faq) }} /><MaterialClient /></>
}
