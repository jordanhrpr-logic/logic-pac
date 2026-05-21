import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Skincare Packaging Design Guide: Formats, Materials, and What Sells on Shelf',
  description: 'Skincare packaging formats (tubes, bottles, jars, droppers, airless), material selection by formula type, retail shelf requirements, and the design decisions that drive sell-through.',
  alternates: { canonical: '/blog/skincare-packaging-design-guide' },
  openGraph: {
    title: 'Skincare Packaging Design Guide | Logic Pac',
    description: 'Skincare packaging formats, materials by formula type, and what sells on shelf.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function SkincarePackagingPost() {
  return <PostClient />
}
