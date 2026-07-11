import { blogPosts, BlogPost } from './blog-data'

const SITE_URL = 'https://logic-pac.com'

function getPost(slug: string): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) {
    throw new Error(`blog-schemas: no post found for slug "${slug}"`)
  }
  return post
}

function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${clean}`
}

export function buildBlogArticleSchema(slug: string) {
  const post = getPost(slug)
  const postUrl = `${SITE_URL}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'Logic Pac' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Logic Pac',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    image: [absoluteUrl(post.image)],
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    articleSection: post.tag,
    keywords: post.tag,
  }
}

export function buildBlogBreadcrumbSchema(slug: string) {
  const post = getPost(slug)
  const postUrl = `${SITE_URL}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }
}
