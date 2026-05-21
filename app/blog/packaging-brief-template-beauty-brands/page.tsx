import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'The Packaging Brief Template Every Beauty Brand Manager Needs',
  description: 'The 10 sections every packaging brief should contain, the omissions that cost weeks, and an annotated sample you can adapt for your next custom packaging project.',
  alternates: { canonical: '/blog/packaging-brief-template-beauty-brands' },
  openGraph: {
    title: 'Packaging Brief Template for Beauty Brands | Logic Pac',
    description: 'The 10 sections every packaging brief needs — omissions that cost weeks and an annotated sample.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function PackagingBriefPost() {
  return <PostClient />
}
