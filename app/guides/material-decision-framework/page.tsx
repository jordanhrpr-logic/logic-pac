import type { Metadata } from 'next'
import MaterialClient from './MaterialClient'

export const metadata: Metadata = {
  title: "The Beauty Brand's Material Decision Framework — Glass, PET, HDPE, Aluminum & Molded Fiber",
  description: 'A comprehensive guide to the five core packaging materials for beauty brands. Covers cost, MOQs, sustainability, perception signals, supply chain reality, and a decision framework by product category.',
  alternates: { canonical: '/guides/material-decision-framework' },
}

export default function MaterialPage() {
  return <MaterialClient />
}
