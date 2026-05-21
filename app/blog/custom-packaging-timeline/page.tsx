import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'How Long Does Custom Packaging Take? The Real Timeline from Concept to Shelf',
  description: 'Custom packaging takes 12-20 weeks from approved brief to delivery. Phase-by-phase breakdown: design, prototyping, tooling, production, and freight — with what delays projects and what speeds them up.',
  alternates: { canonical: '/blog/custom-packaging-timeline' },
  openGraph: {
    title: 'How Long Does Custom Packaging Take? | Logic Pac',
    description: 'The real production timeline: design, prototyping, tooling, manufacturing, and freight. What delays projects and what speeds them up.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function PackagingTimelinePost() {
  return <PostClient />
}
