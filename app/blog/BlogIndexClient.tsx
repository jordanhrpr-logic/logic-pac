'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useModal } from '@/components/ModalContext'
import { getAllPosts } from '@/lib/blog-data'

export default function BlogIndexClient() {
  const { openModal } = useModal()
  const posts = getAllPosts()

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Insights</div>
        <h1>Packaging Blog</h1>
        <p>Practical advice on packaging costs, timelines, sustainability, and supplier management &mdash; written for brand teams making real decisions.</p>
      </div>

      <div className="gidx">
        <div className="gcards">
          {posts.map(post => (
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
          <button className="bi" onClick={() => openModal()}>Book a Consultation</button>
        </div>
      </section>
    </>
  )
}
