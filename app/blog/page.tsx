import type { Metadata } from 'next'
import BlogIndexClient from './BlogIndexClient'

export const metadata: Metadata = {
  title: 'Blog — Packaging Insights for Beauty & Consumer Brands',
  description: 'Practical packaging advice for beauty, cosmetic, and consumer brands. Cost breakdowns, sustainability compliance, production timelines, and supplier management — from the team at Logic Pac.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return <BlogIndexClient />
}
