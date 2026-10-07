import type { Metadata } from 'next'
import LuxuryClient from './LuxuryClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'luxury-beauty-packaging-system'
const title = 'The Luxury Beauty Packaging System Guide'
const description = 'How to develop luxury beauty, cosmetics, and fragrance packaging as a connected system — primary, secondary, trays, materials, finishes, compliance, and production readiness.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/guides/${slug}` },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/guides/luxury-beauty-packaging/kiki-secondary-hero.jpg', width: 1800, height: 1800 }],
  },
}

const luxury_faq_schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'What makes a beauty package feel luxury versus just expensive?', acceptedAnswer: { '@type': 'Answer', text: 'Structure, proportion, weight, finish, and fit — in that order. A heavy box with a loose component inside reads cheap. A tight molded tray in a thinner carton with a precise foil can read premium. Luxury is a system decision, not a line-item upgrade.' } },
    { '@type': 'Question', name: 'Do we need custom tooling for the primary pack to look premium?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. A stock bottle finished intentionally — the right closure, decoration, and secondary architecture around it — can carry a premium position at launch. Custom tooling is justified when the silhouette itself becomes a brand asset or when volume supports the investment.' } },
    { '@type': 'Question', name: 'How much of the luxury feel is primary vs. secondary packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Both do work, but secondary packaging and the molded tray carry more of the first-impression burden than most brands expect. The customer touches the carton before the bottle. Treat secondary as a product, not a wrapper.' } },
    { '@type': 'Question', name: 'Can luxury packaging also be sustainable?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — but only if the system is designed for it. Mono-material cartons, FSC paper pulp trays, aluminum refill bases, and well-specified recycled content can all land in a premium position. The sustainability story falls apart when a premium outer hides a mixed-material inner.' } },
    { '@type': 'Question', name: 'How do we avoid overpackaging without losing the brand moment?', acceptedAnswer: { '@type': 'Answer', text: 'Audit each layer by job. Primary protects the formula. Secondary carries the brand and protects the primary. A tray organizes components and dampens movement. Everything else is decoration — and often the first place to cut.' } },
    { '@type': 'Question', name: 'What does Logic Pac actually do on a luxury beauty project?', acceptedAnswer: { '@type': 'Answer', text: 'Structural design, 3D engineering, dieline development, material and finish specification, supplier matching, prototype rounds, pre-production samples, quality control, and fulfillment coordination.' } },
  ],
}

export default function LuxuryBeautyPackagingPage() {
  const article = buildGuideArticleSchema({
    slug,
    title,
    description,
    image: '/images/guides/luxury-beauty-packaging/kiki-secondary-hero.jpg',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
  })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(luxury_faq_schema) }} />
      <LuxuryClient />
    </>
  )
}
