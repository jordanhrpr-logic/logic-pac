import type { Metadata } from 'next'
import PlaybookClient from './PlaybookClient'
import { playbookFaqJsonLd } from '@/lib/metadata'
import { buildGuideArticleSchema, buildGuideBreadcrumbSchema } from '@/lib/guide-schemas'

const slug = 'influencer-kit-playbook'
const title = 'Influencer Kit & PR Mailer Playbook'
const description = 'Plan PR kit structure, product presentation, personalization, finishes, production, kitting, fulfillment, budget, and timeline.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides/influencer-kit-playbook' },
  openGraph: {
    url: `https://logic-pac.com/guides/${slug}`,
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    images: [{ url: '/images/portfolio/influencer-kits.jpg', width: 1400, height: 1400 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Logic Pac`,
    description,
    images: ['/images/portfolio/influencer-kits.jpg'],
  },
}

export default function PlaybookPage() {
  const article = buildGuideArticleSchema({ slug, title, description, image: '/images/portfolio/influencer-kits.jpg', datePublished: '2026-03-14', dateModified: '2026-09-25' })
  const breadcrumb = buildGuideBreadcrumbSchema(slug, title)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(playbookFaqJsonLd) }} />
      <PlaybookClient />
    </>
  )
}
