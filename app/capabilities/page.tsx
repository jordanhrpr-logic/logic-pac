import type { Metadata } from 'next'
import CapabilitiesClient from './CapabilitiesClient'

export const metadata: Metadata = {
  title: 'Capabilities — Full-Service Custom Packaging',
  description: 'Full-service packaging supplier: structural design, 3D engineering, global manufacturing, quality control, compliance, logistics, and fulfillment under one roof.',
}

export default function CapabilitiesPage() {
  return <CapabilitiesClient />
}
