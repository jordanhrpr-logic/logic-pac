'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useModal } from '@/components/ModalContext'
import { getPublishedPosts } from '@/lib/blog-data'

const ALL_TAG = 'All'

export default function BlogIndexClient() {
  const { openModal } = useModal()
  const posts = getPublishedPosts()
  const [activeTag, setActiveTag] = useState(ALL_TAG)

  const tags = [ALL_TAG, ...Array.from(new Set(posts.map(p => p.tag))).sort()]
  const filtered = activeTag === ALL_TAG ? posts : posts.filter(p => p.tag === activeTag)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Insights</div>
        <h1>Packaging Blog</h1>
        <p>Practical advice on packaging costs, timelines, sustainability, and supplier management &mdash; written for brand teams making real decisions.</p>
      </div>

      <div className="gidx">
        <div className="blog-filters" role="tablist" aria-label="Filter posts by topic">
          {tags.map(tag => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={activeTag === tag}
              className={`blog-filter-btn${activeTag === tag ? ' active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
              {tag !== ALL_TAG && <span className="blog-filter-count">{posts.filter(p => p.tag === tag).length}</span>}
            </button>
          ))}
        </div>

        <div className="blog-count">{filtered.length} article{filtered.length !== 1 ? 's' : ''}</div>

        <div className="gcards">
          {filtered.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="gcard">
              <div className="gcard-img">
                <Image src={post.image} alt={post.title} width={600} height={338} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="gcard-body">
                <div className="gcard-tag">{post.tag} &middot; {post.readTime}</div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className="gcard-link">Read Article &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Have a Packaging<br /><em>Question?</em></h2>
          <p>Book a 30-minute call. We&apos;ll give you a straight answer &mdash; not a sales pitch.</p>
          <button type="button" className="bi" onClick={() => openModal(undefined, 'blog-index-cta')}>Book a Consultation</button>
        </div>
      </section>
    </>
  )
}
