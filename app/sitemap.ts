import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

const BASE_URL = 'https://logic-pac.com'

// Static routes with their last-modified dates. Kept in sync with app/ directory.
// Dates chosen to preserve existing sitemap timestamps for URLs that already existed.
const staticRoutes: Array<{ path: string; lastmod: string; changefreq: 'monthly' | 'weekly'; priority: number }> = [
  { path: '/', lastmod: '2026-03-13', changefreq: 'monthly', priority: 1.0 },
  { path: '/work', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.8 },
  { path: '/capabilities', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.8 },
  { path: '/holiday', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.9 },
  { path: '/influencer', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.9 },
  { path: '/jewelry', lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.9 },
  { path: '/guides', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog', lastmod: '2026-05-21', changefreq: 'weekly', priority: 0.8 },
]

const guideRoutes: Array<{ slug: string; lastmod: string }> = [
  { slug: 'packaging-finish-guide', lastmod: '2026-03-13' },
  { slug: 'influencer-kit-playbook', lastmod: '2026-03-13' },
  { slug: 'sustainable-beauty-packaging', lastmod: '2026-05-06' },
  { slug: 'material-decision-framework', lastmod: '2026-05-06' },
  { slug: 'beauty-refillable-playbook', lastmod: '2026-05-06' },
  { slug: 'concept-to-shelf-timeline', lastmod: '2026-05-06' },
  { slug: 'packaging-brief-template', lastmod: '2026-05-06' },
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
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  return entries
}
