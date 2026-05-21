import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Fragrance Packaging Design: What Makes Perfume Packaging Premium',
  description: 'Learn what makes fragrance packaging feel premium, including box structure, board weight, finishes, costs, timelines, and common perfume packaging mistakes.',
  alternates: { canonical: '/blog/fragrance-packaging-design-guide' },
  openGraph: {
    title: 'Fragrance Packaging Design: What Makes Perfume Packaging Premium | Logic Pac',
    description: 'Learn what makes fragrance packaging feel premium, including box structure, board weight, finishes, costs, timelines, and common perfume packaging mis',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function FragrancePackagingDesignGuidePost() {
  return <PostClient />
}
