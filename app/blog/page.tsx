import type { Metadata } from 'next'
import BlogIndexClient from './BlogIndexClient'

export const metadata: Metadata = {
  title: 'Blog — Packaging Insights for Brands',
  description: 'Practical packaging advice for beauty and consumer brands. Cost breakdowns, sustainability compliance, timelines, and supplier guidance.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return <BlogIndexClient />
}
