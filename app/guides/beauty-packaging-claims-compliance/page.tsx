import type { Metadata } from 'next'
import ComplianceClient from './ComplianceClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'beauty-packaging-claims-compliance'
const title = 'Beauty Packaging Claims & Compliance Guide'
const description = 'Beauty packaging compliance: SB 54, Prop 65, FTC Green Guides, EU PPWR, and MoCRA mapped by where you sell, what you claim, and which pack component is at risk.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/guides/${slug}` },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/guides/beauty-packaging-compliance/hero-clinical-skincare.jpg', width: 1600, height: 1200 }],
  },
}

const complianceFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'Which regulation hits first for a US-only beauty brand launching in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'FDA cosmetics labeling (21 CFR 701) applies the day you ship. California SB 54 and SB 343 Truth in Recycling apply for California-sold SKUs. FTC Green Guides apply to any environmental claim nationwide. Prop 65 applies if a listed substance is present. MoCRA applies to all US cosmetics manufacturers and processors. EU PPWR, ECGT, UFLPA, and GHS scale in based on markets and supply chain.' } },
    { '@type': 'Question', name: 'Do I need a lawyer to make a sustainability claim?', acceptedAnswer: { '@type': 'Answer', text: 'Vague brand-level claims should be avoided entirely. Specific substantiated claims need supplier documentation, not necessarily a lawyer. Comparative claims need a baseline methodology and above a certain spend level, legal review. Claims entering regulated jurisdictions (EU ECGT, Canada CCPA) warrant legal review before copy ships.' } },
    { '@type': 'Question', name: 'What does Logic Pac screen for before the pack ships?', acceptedAnswer: { '@type': 'Answer', text: 'On luxury and prestige programs: SB 54 recyclability treatment per component, FTC Green Guides treatment of environmental language before print, and Prop 65 screening of substrates, inks, and finish stacks. Deeper regulatory review (MoCRA, EU responsible-person, UFLPA diligence) sits with the brand\'s own counsel or compliance consultant.' } },
    { '@type': 'Question', name: 'Is a certification (FSC, BPI, Cradle-to-Cradle) enough to make a claim?', acceptedAnswer: { '@type': 'Answer', text: 'A third-party certification substantiates the specific claim it covers — nothing more. FSC supports FSC-certified paper. BPI supports industrially compostable where facilities exist. Pair the certification with precise language. Vague halo claims around a specific cert are the pattern that triggers greenwashing enforcement.' } },
    { '@type': 'Question', name: 'How often do these regulations change?', acceptedAnswer: { '@type': 'Answer', text: 'Material changes to published rules usually come annually or at defined compliance dates (SB 54 2027 and 2032; PPWR 2026 and 2030). Guidance documents, enforcement interpretations, and certification standards update more often — quarterly in some cases. Treat your compliance stack as a living document.' } },
    { '@type': 'Question', name: 'Can we treat UK and EU as the same market?', acceptedAnswer: { '@type': 'Answer', text: 'No. The UK is diverging from EU packaging and claims law post-Brexit. UK EPR for Packaging has its own fees and reporting. UK CMA green-claims guidance differs structurally from EU ECGT. Treat UK and EU as parallel compliance stacks.' } },
  ],
}

export default function CompliancePage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/guides/beauty-packaging-compliance/hero-clinical-skincare.jpg', datePublished: '2026-10-07', dateModified: '2026-10-07' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(complianceFaq) }} />
      <ComplianceClient />
    </>
  )
}
