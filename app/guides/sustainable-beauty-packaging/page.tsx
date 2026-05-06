import type { Metadata } from 'next'
import SustainableClient from './SustainableClient'

export const metadata: Metadata = {
  title: 'The Sustainable Beauty Packaging Playbook — Material, Claims & Compliance',
  description: 'A comprehensive guide to sustainable packaging for beauty brands. Covers PCR content, mono-material design, EU PPWR, California SB 54, greenwashing risks, cost modeling, and implementation roadmaps.',
  alternates: { canonical: '/guides/sustainable-beauty-packaging' },
}

export default function SustainablePage() {
  return <SustainableClient />
}
