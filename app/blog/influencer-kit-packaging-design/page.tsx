import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'How to Design an Influencer Kit That Actually Gets Posted (Not Thrown Away)',
  description: 'The 5 elements that separate kits that get filmed from kits that get recycled. Real cost ranges ($8-50+/unit), production timelines, and how to brief your packaging partner.',
  alternates: { canonical: '/blog/influencer-kit-packaging-design' },
  openGraph: {
    title: 'How to Design an Influencer Kit That Gets Posted | Logic Pac',
    description: 'The 5 elements that separate influencer kits that get filmed from kits that get recycled.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function InfluencerKitPost() {
  return <PostClient />
}
