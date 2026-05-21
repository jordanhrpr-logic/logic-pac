export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tag: string
  readTime: string
  image: string
  gradient: string
  published: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'custom-packaging-cost-beauty-brands',
    title: 'How Much Does Custom Packaging Cost? A Real Pricing Breakdown for Beauty Brands',
    description: 'Actual per-unit ranges by format — folding cartons, rigid boxes, tubes, and specialty finishes. What drives the price up, how to compare quotes, and where brands overpay.',
    date: '2026-05-21',
    author: 'Jordan Harper',
    tag: 'Pricing',
    readTime: '10 min read',
    image: '/images/portfolio/foil-stamped-cylinder.jpeg',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
    published: false,
  },
  {
    slug: 'sustainable-beauty-packaging-sb54',
    title: 'Sustainable Beauty Packaging: What Actually Works, What\'s Greenwashing, and What the Regulations Require',
    description: 'PCR performance reality, SB 54 deadlines, EU PPWR impact, FTC Green Guides compliance, and real cost comparisons between sustainable and conventional materials.',
    date: '2026-05-21',
    author: 'Jordan Harper',
    tag: 'Sustainability',
    readTime: '12 min read',
    image: '/images/portfolio/velvet-interior-unboxing-kit.jpeg',
    gradient: 'linear-gradient(135deg,#0d2818,#1a4a2e,#2d6a4f)',
    published: false,
  },
  {
    slug: 'influencer-kit-packaging-design',
    title: 'How to Design an Influencer Kit That Actually Gets Posted (Not Thrown Away)',
    description: 'The 5 elements that separate kits that get filmed from kits that get recycled. Real cost ranges, production timelines, and how to brief your packaging partner.',
    date: '2026-05-21',
    author: 'Jordan Harper',
    tag: 'Influencer Kits',
    readTime: '9 min read',
    image: '/images/portfolio/skincare-launch-pr-mailer.jpg',
    gradient: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
    published: false,
  },
  {
    slug: 'custom-packaging-timeline',
    title: 'How Long Does Custom Packaging Take? The Real Timeline from Concept to Shelf',
    description: 'The real production timeline: design, prototyping, tooling, manufacturing, and freight. What delays projects, what speeds them up, and how to work backward from your launch date.',
    date: '2026-05-21',
    author: 'Jordan Harper',
    tag: 'Planning',
    readTime: '9 min read',
    image: '/images/portfolio/holiday-kits.jpeg',
    gradient: 'linear-gradient(135deg,#1a0a2e,#2e1a4a,#4a2c6a)',
    published: false,
  },
  {
    slug: 'sb54-packaging-compliance-beauty',
    title: 'SB 54 Packaging Compliance for Beauty Brands: Deadlines, Requirements, and What to Do Now',
    description: 'California\'s Packaging Reduction Act hits beauty brands harder than most. Primary, secondary, and tertiary packaging audit frameworks, timeline, and compliance roadmap.',
    date: '2026-05-21',
    author: 'Jordan Harper',
    tag: 'Compliance',
    readTime: '11 min read',
    image: '/images/portfolio/cosmetics-folding-carton.jpeg',
    gradient: 'linear-gradient(135deg,#1a1a2e,#0f3460,#16213e)',
    published: false,
  },
]

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter(p => p.published)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}
