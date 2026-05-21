import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Advent Calendar Packaging for Beauty Brands: What It Actually Takes to Produce One',
  description: 'Custom advent calendar packaging for beauty brands costs $8-25+ per unit at 1,000-5,000 units and requires 6-8 months lead time. Structures, costs, and timeline inside.',
  alternates: { canonical: '/blog/advent-calendar-packaging-beauty' },
  openGraph: {
    title: 'Advent Calendar Packaging for Beauty Brands: What It Actually Takes to Produce One | Logic Pac',
    description: 'Custom advent calendar packaging for beauty brands costs $8-25+ per unit at 1,000-5,000 units and requires 6-8 months lead time. Structures, costs, an',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function AdventCalendarPackagingBeautyPost() {
  return <PostClient />
}
