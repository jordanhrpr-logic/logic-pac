import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Luxury Beauty Packaging: What Separates Premium From Mass Market',
  description: 'Luxury beauty packaging differs from mass market in structural weight, closure engineering, finish layering, and sensory sequencing. Here&apos;s the full breakdown.',
  alternates: { canonical: '/blog/luxury-beauty-packaging-guide' },
  openGraph: {
    title: 'Luxury Beauty Packaging: What Separates Premium From Mass Market | Logic Pac',
    description: 'Luxury beauty packaging differs from mass market in structural weight, closure engineering, finish layering, and sensory sequencing. Here&apos;s the f',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function LuxuryBeautyPackagingGuidePost() {
  return <PostClient />
}
