import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Packaging Finishes Explained: Foil Stamping, Spot UV, Embossing, and Soft-Touch for Beauty Brands',
  description: 'What each packaging finish costs, when to use it, and how to combine them. Foil stamping ($0.05-$0.50/unit), spot UV ($0.05-$0.30), embossing ($0.05-$0.40), and soft-touch ($0.10-$0.60).',
  alternates: { canonical: '/blog/packaging-finishes-guide-foil-uv-emboss' },
  openGraph: {
    title: 'Packaging Finishes Guide: Foil, UV, Emboss, Soft-Touch | Logic Pac',
    description: 'What each packaging finish costs, when to use it, and how to combine them for beauty brands.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function PackagingFinishesPost() {
  return <PostClient />
}
