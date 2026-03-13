import type { Metadata } from 'next'
import WorkClient from './WorkClient'

export const metadata: Metadata = {
  title: 'Our Work — Logic Pac Portfolio & Case Studies',
  description: 'Custom packaging portfolio from a leading beauty packaging manufacturer: holiday gift sets, influencer kits, retail packaging, and specialty finishes.',
}

export default function WorkPage() {
  return <WorkClient />
}
