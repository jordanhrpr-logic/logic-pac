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
  {
    slug: 'sustainable-beauty-packaging',
    tag: 'Playbook',
    title: 'The Sustainable Beauty Packaging Playbook: Material, Claims & Compliance',
    description: 'PCR content, mono-material design, EU PPWR, California SB 54, greenwashing risks, cost modeling, and implementation roadmaps for beauty brands.',
    image: '/images/portfolio/velvet-interior-unboxing-kit.jpeg',
    gradient: 'linear-gradient(135deg,#0d2818,#1a4a2e,#2d6a4f)',
  },
  {
    slug: 'material-decision-framework',
    tag: 'Reference Guide',
    title: "The Beauty Brand's Material Decision Framework",
    description: 'Glass, PET, HDPE, aluminum, and molded fiber — how to choose the right material by product category, channel, and stage.',
    image: '/images/portfolio/cosmetics-folding-carton.jpeg',
    gradient: 'linear-gradient(135deg,#1a1a2e,#2d1b69,#4a1a8a)',
  },
  {
    slug: 'beauty-refillable-playbook',
    tag: 'Playbook',
    title: 'The Beauty Brand Refillable Packaging Playbook',
    description: 'Refill formats, material selection, consumer behavior, cost modeling, regulatory compliance, and implementation timelines.',
    image: '/images/portfolio/skincare-launch-pr-mailer.jpg',
    gradient: 'linear-gradient(135deg,#0f2027,#1a3a4a,#2c5364)',
  },
  {
    slug: 'concept-to-shelf-timeline',
    tag: 'Reference Guide',
    title: 'From Concept to Shelf in 12 Weeks: The Custom Packaging Timeline',
    description: 'A realistic phase-by-phase timeline for custom packaging development — design, prototyping, tooling, production, and freight.',
    image: '/images/portfolio/holiday-kits.jpeg',
    gradient: 'linear-gradient(135deg,#1a0a2e,#2e1a4a,#4a2c6a)',
  },
  {
    slug: 'packaging-brief-template',
    tag: 'Template',
    title: 'The Packaging Brief Template Every Brand Manager Needs',
    description: 'The ten sections every brief should contain, the omissions that cost weeks, and an annotated sample you can adapt.',
    image: '/images/portfolio/premium-beauty-gift-set1.jpg',
    gradient: 'linear-gradient(135deg,#2d1b0e,#4a2e1a,#6b3f2c)',
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
