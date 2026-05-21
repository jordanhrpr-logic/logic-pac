import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'SB 54 Packaging Compliance for Beauty Brands: Deadlines, Requirements, and What to Do Now',
  description: 'California\'s SB 54 Packaging Reduction Act creates real compliance pressure for beauty brands by 2027. Primary, secondary, and tertiary packaging audit frameworks and compliance roadmap.',
  alternates: { canonical: '/blog/sb54-packaging-compliance-beauty' },
  openGraph: {
    title: 'SB 54 Packaging Compliance for Beauty Brands | Logic Pac',
    description: 'SB 54 deadlines, requirements, and compliance roadmap for beauty brand packaging.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function SB54CompliancePost() {
  return <PostClient />
}
