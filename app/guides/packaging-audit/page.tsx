import type { Metadata } from 'next'
import AuditClient from './AuditClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'packaging-audit'
const title = 'The Packaging Audit Guide'
const description = 'What a packaging audit is, when to request one, the seven audit dimensions, methodology, and the findings that recur across beauty packaging programs.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/guides/${slug}` },
  openGraph: {
    url: `https://logic-pac.com/guides/${slug}`,
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/guides/packaging-audit/hero-audit.jpg', width: 1276, height: 1276 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: ['/images/guides/packaging-audit/hero-audit.jpg'],
  },
}

const auditFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'How is a packaging audit different from a QC inspection?', acceptedAnswer: { '@type': 'Answer', text: 'A QC inspection confirms a specific production run matches a specific written spec. A packaging audit asks whether the spec itself is the right one, and whether the surrounding system (compliance, cost, retail readiness, sustainability, system coherence) holds up. QC is run-level. Audit is program-level.' } },
    { '@type': 'Question', name: 'Do I need a packaging audit before every launch?', acceptedAnswer: { '@type': 'Answer', text: 'Not every launch, but every major one — and every time one of the five triggers is active (new retailer PO, SB 54 or EU PPWR deadline, cost pressure, launch planning for a new SKU family, or a post-launch defect or chargeback). For incremental line extensions inside an existing design system, a lighter component review usually covers the ground.' } },
    { '@type': 'Question', name: 'Can we run the audit ourselves internally?', acceptedAnswer: { '@type': 'Answer', text: 'For some dimensions, yes. Retail-readiness and sustainability have on-page scorecards most brand teams can self-run. Compliance, cost, and system coherence are harder to self-audit without a current reference. Most brands run a hybrid: self-audit on confident dimensions, outside audit on the rest.' } },
    { '@type': 'Question', name: 'What does Logic Pac deliver when you run an audit?', acceptedAnswer: { '@type': 'Answer', text: 'A written report structured by the seven audit dimensions, each with findings, severity rating, prioritized action register, and the Logic Pac recommendation. Scope varies by program. We include supporting evidence (photos, measurements, document references) and name the specific guide spoke covering the deep work on each finding.' } },
    { '@type': 'Question', name: 'How long does a packaging audit take?', acceptedAnswer: { '@type': 'Answer', text: 'A single-SKU audit on one or two dimensions typically runs 2-4 weeks from brief to delivered report. A full seven-dimension audit on a multi-SKU program runs 4-6 weeks. The brand-side effort is lighter than most teams expect.' } },
    { '@type': 'Question', name: 'Is the audit a sales pitch?', acceptedAnswer: { '@type': 'Answer', text: 'No. The audit is a defined deliverable with its own scope and output, and we deliver the report whether or not the brand decides to work with us on execution. Most audits do surface work we are qualified to execute — and we quote that work separately as a next step. The audit itself is not conditional on hiring us for implementation.' } },
  ],
}

export default function AuditPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/packaging-audit/hero-audit.jpg', datePublished: '2026-10-07', dateModified: '2026-10-07' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(auditFaq) }} />
      <AuditClient />
    </>
  )
}
