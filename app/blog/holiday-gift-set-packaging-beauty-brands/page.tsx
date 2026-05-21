import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Holiday Gift Set Packaging for Beauty Brands: Timeline, Costs, and Retailer Compliance',
  description: 'Custom holiday gift set packaging requires 5-7 months lead time. Structures, materials, retailer compliance (Ulta, Sephora, Target), and real cost ranges for beauty brands.',
  alternates: { canonical: '/blog/holiday-gift-set-packaging-beauty-brands' },
  openGraph: {
    title: 'Holiday Gift Set Packaging for Beauty Brands | Logic Pac',
    description: 'Custom holiday gift set packaging: timelines, costs, structures, and retailer compliance for beauty brands.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function HolidayGiftSetPost() {
  return <PostClient />
}
