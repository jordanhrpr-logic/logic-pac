import type { Metadata } from 'next'
import TimelineClient from './TimelineClient'

export const metadata: Metadata = {
  title: 'From Concept to Shelf in 12 Weeks — The Custom Packaging Timeline',
  description: 'A realistic phase-by-phase timeline for custom packaging development. Covers design, prototyping, tooling, production, and freight — with the decisions that compress or expand each phase.',
  alternates: { canonical: '/guides/concept-to-shelf-timeline' },
}

export default function TimelinePage() {
  return <TimelineClient />
}
