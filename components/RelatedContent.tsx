'use client'

import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

type RelatedContentProps = {
  currentSlug: string
  currentTag: string
  maxItems?: number
}

export default function RelatedContent({ currentSlug, currentTag, maxItems = 3 }: RelatedContentProps) {
  const sameTag = blogPosts
    .filter((p) => p.published && p.slug !== currentSlug && p.tag === currentTag)
    .slice(0, maxItems)

  const items = sameTag.length >= 2
    ? sameTag
    : [
        ...sameTag,
        ...blogPosts
          .filter((p) => p.published && p.slug !== currentSlug && p.tag !== currentTag)
          .slice(0, maxItems - sameTag.length),
      ].slice(0, maxItems)

  if (items.length === 0) return null

  return (
    <section className="related-content">
      <h2>Related Reading</h2>
      <div className="related-grid">
        {items.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="related-card">
            <span className="related-tag">{post.tag}</span>
            <span className="related-title">{post.title}</span>
            <span className="related-read">{post.readTime}</span>
          </Link>
        ))}
      </div>
      <p className="related-audit-link">
        Not sure where to start? <Link href="/packaging-audit">Request a packaging audit</Link> and we will tell you what to fix first.
      </p>
    </section>
  )
}
