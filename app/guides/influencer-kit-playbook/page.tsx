import type { Metadata } from 'next'
import PlaybookClient from './PlaybookClient'
import { influencerPlaybookJsonLd, playbookFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Influencer Kit & PR Mailer Playbook — How to Design Kits That Get Posted',
  description: 'A comprehensive guide to designing and producing influencer kits and PR mailers that generate organic content. Covers kit structures, finishes, personalization, timelines, and budgets.',
  alternates: { canonical: '/guides/influencer-kit-playbook' },
}

export default function PlaybookPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(influencerPlaybookJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(playbookFaqJsonLd) }} />
      <PlaybookClient />
    </>
  )
}
