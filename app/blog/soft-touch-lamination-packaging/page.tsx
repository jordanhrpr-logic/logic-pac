import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Soft Touch Lamination for Packaging: When It Works, When It Doesn&apos;t, and What It Costs',
  description: 'Soft touch lamination adds a velvet tactile surface to packaging at $0.08-$0.60 per unit. Learn when it works, when it doesn&apos;t, and how it compares to alternatives.',
  alternates: { canonical: '/blog/soft-touch-lamination-packaging' },
  openGraph: {
    title: 'Soft Touch Lamination for Packaging: When It Works, When It Doesn&apos;t, and What It Costs | Logic Pac',
    description: 'Soft touch lamination adds a velvet tactile surface to packaging at $0.08-$0.60 per unit. Learn when it works, when it doesn&apos;t, and how it compar',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function SoftTouchLaminationPackagingPost() {
  return <PostClient />
}
