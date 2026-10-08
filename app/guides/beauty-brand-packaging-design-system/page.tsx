import type { Metadata } from 'next'
import DesignSystemClient from './DesignSystemClient'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'beauty-brand-packaging-design-system'
const title = 'The Beauty Brand Packaging Design System Guide'
const description = 'A packaging design system that scales a beauty brand from a hero SKU through line extensions, gift sets, and PR kits without rebuilding the brand each launch.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/guides/${slug}` },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/guides/packaging-design-system/scroll-07-shelf.jpg', width: 1600, height: 1200 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: title,
  mainEntity: [
    { '@type': 'Question', name: 'When should a brand invest in a packaging design system?', acceptedAnswer: { '@type': 'Answer', text: 'Before the second SKU, not after the fifth. The cost of retrofitting a system onto four unrelated SKUs is almost always higher than the cost of designing one. Define the system rules at concept, even if you only make one pack this year.' } },
    { '@type': 'Question', name: 'How much flexibility should a packaging design system have?', acceptedAnswer: { '@type': 'Answer', text: 'Enough to carry a hero SKU, three line extensions, a holiday set, and a PR mailer without a redesign. Silhouette, hierarchy, and finish stack are fixed; color, size, and secondary architecture can flex within defined rules.' } },
    { '@type': 'Question', name: 'Can a design system be built around stock primary packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A well-executed stock bottle with a consistent secondary architecture, finish stack, and color system can carry a brand through launch and well into scale. Custom tooling is justified when the silhouette becomes a brand asset, not as a default.' } },
    { '@type': 'Question', name: 'How does a design system survive seasonal and limited-edition launches?', acceptedAnswer: { '@type': 'Answer', text: 'By pre-defining what can change and what cannot. Seasonal SKUs often change secondary carton color or add a finish variant, but the primary silhouette, logo lockup, and dimensional hierarchy stay fixed. The reader should recognize it as the same brand in a different season.' } },
    { '@type': 'Question', name: 'What breaks a packaging design system in the first year?', acceptedAnswer: { '@type': 'Answer', text: 'Three things, almost always: a line extension sourced from a different supplier with different tolerances; a holiday set designed by an agency without reading the brief; and a PR mailer that treats "limited edition" as permission to abandon the hierarchy. All three are preventable with a written specification and one accountable owner.' } },
    { '@type': 'Question', name: 'What does Logic Pac do on a design system engagement?', acceptedAnswer: { '@type': 'Answer', text: 'We develop the structural system across primary, secondary, trays, and inserts; write the specification; qualify the suppliers who can hold tolerances across SKUs; manage sampling and QC against the written spec; and extend the system through line extensions, holiday sets, and PR formats without rebuilding it each time.' } },
  ],
}

export default function Page() {
  const article = buildGuideArticleSchema({
    slug,
    title,
    description,
    image: '/images/guides/packaging-design-system/scroll-07-shelf.jpg',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
  })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DesignSystemClient />
    </>
  )
}
