import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

const BASE_URL = 'https://logic-pac.com'

// Static routes with content-level last-modified dates. Update a timestamp only
// when that route's public content changes; privacy and terms were unchanged.
const staticRoutes: Array<{ path: string; lastmod: string; changefreq: 'monthly' | 'weekly'; priority: number }> = [
  { path: '/', lastmod: '2026-09-28', changefreq: 'monthly', priority: 1.0 },
  { path: '/work', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.8 },
  { path: '/work/epicutis', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.8 },
  { path: '/work/adidas-nemeziz-influencer-kit', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.8 },
  { path: '/work/artilect-packaging-reduction', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.7 },
  { path: '/work/audio-enhancement-packaging-system', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.7 },
  { path: '/capabilities', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.8 },
  { path: '/holiday', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.9 },
  { path: '/influencer', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.9 },
  { path: '/jewelry', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.9 },
  { path: '/packaging-audit', lastmod: '2026-10-09', changefreq: 'monthly', priority: 0.9 },
  { path: '/guides', lastmod: '2026-09-28', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog', lastmod: '2026-09-28', changefreq: 'weekly', priority: 0.8 },
  { path: '/privacy', lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.2 },
  { path: '/terms', lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.2 },
]

const guideRoutes: Array<{ slug: string; lastmod: string }> = [
  { slug: 'packaging-finish-guide', lastmod: '2026-09-28' },
  { slug: 'influencer-kit-playbook', lastmod: '2026-09-28' },
  { slug: 'sustainable-beauty-packaging', lastmod: '2026-09-28' },
  { slug: 'material-decision-framework', lastmod: '2026-09-28' },
  { slug: 'beauty-refillable-playbook', lastmod: '2026-09-28' },
  { slug: 'concept-to-shelf-timeline', lastmod: '2026-09-28' },
  { slug: 'packaging-brief-template', lastmod: '2026-09-28' },
  { slug: 'luxury-beauty-packaging-system', lastmod: '2026-10-06' },
  { slug: 'sustainable-packaging-decision-matrix', lastmod: '2026-10-06' },
  { slug: 'packaging-testing-quality-control', lastmod: '2026-10-06' },
  { slug: 'beauty-brand-packaging-design-system', lastmod: '2026-10-06' },
  { slug: 'cost-moq-landed-cost-planning', lastmod: '2026-10-07' },
  { slug: 'retail-ready-beauty-packaging', lastmod: '2026-10-07' },
  { slug: 'beauty-packaging-claims-compliance', lastmod: '2026-10-07' },
  { slug: 'packaging-audit', lastmod: '2026-10-07' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const r of staticRoutes) {
    entries.push({
      url: `${BASE_URL}${r.path}`,
      lastModified: new Date(r.lastmod),
      changeFrequency: r.changefreq,
      priority: r.priority,
    })
  }

  for (const g of guideRoutes) {
    entries.push({
      url: `${BASE_URL}/guides/${g.slug}`,
      lastModified: new Date(g.lastmod),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }

  for (const post of blogPosts) {
    if (!post.published) continue
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  return entries
}
