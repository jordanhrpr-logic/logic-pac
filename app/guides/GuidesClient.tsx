'use client'

import Link from 'next/link'
import Image from 'next/image'

const guides = [
  {
    slug: 'influencer-kit-playbook',
    tag: 'Playbook',
    title: 'The Influencer Kit Playbook: How to Design PR Mailers That Get Posted',
    description: 'Everything you need to know about designing and producing influencer kits that generate organic content — from kit structures and finishes to timelines and budgets.',
    image: '/images/portfolio/influencer-kits.jpg',
    gradient: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
  },
  {
    slug: 'packaging-finish-guide',
    tag: 'Reference Guide',
    title: 'The Definitive Guide to Packaging Finishes: Soft-Touch, Foil Stamp, Spot UV & Emboss',
    description: 'A comprehensive reference covering every major packaging finish — what they are, how they work, cost considerations, and how to combine them for maximum brand impact.',
    image: '/images/portfolio/soft-touch-spot-uv.jpg',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
  },
]

export default function GuidesClient() {
  return (
    <>
      <div className="phdr">
        <div className="ey inv">Resources</div>
        <h1>Packaging Guides</h1>
        <p>In-depth playbooks and reference guides to help you make better packaging decisions — from concept to production.</p>
      </div>

      <div className="gidx">
        <div className="gcards">
          {guides.map(g => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="gcard">
              <div className="gcard-img">
                <Image src={g.image} alt={g.title} width={600} height={338} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="gcard-body">
                <div className="gcard-tag">{g.tag}</div>
                <h2>{g.title}</h2>
                <p>{g.description}</p>
                <span className="gcard-link">Read the Guide &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
