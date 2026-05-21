import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'HDPE vs PET Packaging: Which Plastic Is Right for Your Beauty Brand?',
  description: 'HDPE and PET are the two most common plastics in beauty packaging. Compare chemical resistance, clarity, weight, recyclability, PCR availability, and cost.',
  alternates: { canonical: '/blog/hdpe-vs-pet-packaging-comparison' },
  openGraph: {
    title: 'HDPE vs PET Packaging: Which Plastic Is Right for Your Beauty Brand? | Logic Pac',
    description: 'HDPE and PET are the two most common plastics in beauty packaging. Compare chemical resistance, clarity, weight, recyclability, PCR availability, and ',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function HdpeVsPetPackagingComparisonPost() {
  return <PostClient />
}
