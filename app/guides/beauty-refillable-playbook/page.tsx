import type { Metadata } from 'next'
import RefillableClient from './RefillableClient'

export const metadata: Metadata = {
  title: 'The Beauty Brand Refillable Packaging Playbook',
  description: 'A practical guide to refillable packaging for beauty brands. Covers refill formats, material selection, consumer behavior, cost modeling, regulatory compliance, and implementation timelines.',
  alternates: { canonical: '/guides/beauty-refillable-playbook' },
}

export default function RefillablePage() {
  return <RefillableClient />
}
