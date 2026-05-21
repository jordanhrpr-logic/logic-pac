import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'How Much Do Custom PR Kits Cost? A Tier-by-Tier Breakdown for Beauty Brands',
  description: 'Custom PR kit production costs $8-75+ per unit depending on tier. Basic mailers, branded kits, and premium experience builds with ROI framework and cost drivers.',
  alternates: { canonical: '/blog/pr-kit-cost-breakdown' },
  openGraph: {
    title: 'How Much Do Custom PR Kits Cost? A Tier-by-Tier Breakdown for Beauty Brands | Logic Pac',
    description: 'Custom PR kit production costs $8-75+ per unit depending on tier. Basic mailers, branded kits, and premium experience builds with ROI framework and co',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function PrKitCostBreakdownPost() {
  return <PostClient />
}
