import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Custom Packaging MOQs: What Every Brand Needs to Know',
  description: 'Learn custom packaging MOQ ranges by format, why minimums exist, and how brands can lower order quantities without overbuying inventory or tying up cash.',
  alternates: { canonical: '/blog/custom-packaging-moq-guide' },
  openGraph: {
    title: 'Custom Packaging MOQs: What Every Brand Needs to Know | Logic Pac',
    description: 'Learn custom packaging MOQ ranges by format, why minimums exist, and how brands can lower order quantities without overbuying inventory or tying up ca',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function CustomPackagingMoqGuidePost() {
  return <PostClient />
}
