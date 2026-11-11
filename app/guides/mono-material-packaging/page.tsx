import type { Metadata } from 'next'
import MonoMaterialClient from './MonoMaterialClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'mono-material-packaging'
const title = 'Mono-Material Packaging Guide: PP, PE, PET & Paper'
const description = 'Mono-PP, mono-PE, mono-PET, and paper compared on recyclability, formula compatibility, decoration, SB 54 and PPWR compliance, and cost.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/guides/${slug}` },
  openGraph: {
    url: `https://logic-pac.com/guides/${slug}`,
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/portfolio/foil-stamped-cylinder.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: ['/images/portfolio/foil-stamped-cylinder.jpeg'],
  },
}

const mono_material_faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'What does mono-material packaging actually mean?', acceptedAnswer: { '@type': 'Answer', text: 'A package where all structural components — body, cap, label, adhesive — are made from a single compatible material family so the finished unit can enter one recycling stream without manual separation. Most recycling systems tolerate minor contaminants below a weight threshold, typically 5% or less of total package weight.' } },
    { '@type': 'Question', name: 'How much more does mono-material packaging cost?', acceptedAnswer: { '@type': 'Answer', text: 'The net cost impact is typically within 5 to 15% of existing packaging, depending on format, current material stack, and volume. Some transitions — like eliminating multi-layer lamination — are cost-neutral or cost-negative. The biggest cost drivers are specialty closures, mono-material pumps, and in-mold labeling.' } },
    { '@type': 'Question', name: 'Which mono-material is best for beauty packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Mono-PP (polypropylene) offers the widest formula compatibility across beauty categories. Mono-PET is best when optical clarity matters. Mono-PE is standard for squeeze tubes and bottles with surfactant-heavy formulas. The right choice depends on the formula chemistry, the format, and the target recycling stream.' } },
    { '@type': 'Question', name: 'Does SB 54 require mono-material packaging?', acceptedAnswer: { '@type': 'Answer', text: 'SB 54 does not mandate mono-material specifically, but it establishes an EPR program and statewide packaging goals that financially penalize multi-material formats that are difficult to recycle. Mono-material packaging has a structurally easier path to compliance because it avoids mixed-stream contamination.' } },
    { '@type': 'Question', name: 'Can you still get premium finishes on mono-material packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but the options change. UV coating on the same resin works. In-mold labeling works. Direct print, screen print, and pad print work. What does not work in most recycling systems: metallic foil lamination, full-wrap shrink sleeves of a different polymer, and multi-layer laminated labels with incompatible adhesives.' } },
    { '@type': 'Question', name: 'Are mono-material pumps available?', acceptedAnswer: { '@type': 'Answer', text: 'Emerging but still limited. Traditional pumps combine plastic housing, metal springs, and silicone gaskets. Mono-PP pump alternatives exist but have fewer SKU options and higher per-unit costs. For pump-dispensed products, designing for easy pump removal is a pragmatic interim solution recognized by most recyclability certification bodies.' } },
  ],
}

export default function MonoMaterialPage() {
  const article = buildGuideArticleSchema({
    slug,
    title,
    description,
    image: '/images/portfolio/foil-stamped-cylinder.jpeg',
    datePublished: '2026-11-10',
    dateModified: '2026-11-10',
    type: 'TechArticle',
    proficiencyLevel: 'Intermediate',
    dependencies: 'formula chemistry, recycling stream classification, material selection',
  })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mono_material_faq) }} />
      <MonoMaterialClient />
    </>
  )
}
