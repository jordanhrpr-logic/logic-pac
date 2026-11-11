'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Guide = {
  slug: string
  href?: string
  tag: string
  category: string
  title: string
  description: string
  image: string
  gradient: string
}

const guides: Guide[] = [
  {
    slug: 'packaging-audit',
    tag: 'Service & Methodology',
    category: 'Getting Started',
    title: 'The Packaging Audit Guide',
    description: 'What a packaging audit is, when to request one, the seven audit dimensions, methodology, deliverables, and the pattern of findings that recurs across beauty packaging programs. The entry point to the Logic Pac packaging audit service.',
    image: '/images/guides/packaging-audit/hero-audit.jpg',
    gradient: 'linear-gradient(135deg,#0d1a26,#1a2a3f,#2d3f5c)',
  },
  {
    slug: 'packaging-brief-template',
    tag: 'Template',
    category: 'Getting Started',
    title: 'The Packaging Brief Template Every Brand Manager Needs',
    description: 'The ten sections every brief should contain, the omissions that cost weeks, and an annotated sample you can adapt.',
    image: '/images/guides/packaging-brief-checklist.png',
    gradient: 'linear-gradient(135deg,#2d1b0e,#4a2e1a,#6b3f2c)',
  },
  {
    slug: 'concept-to-shelf-timeline',
    tag: 'Reference Guide',
    category: 'Getting Started',
    title: 'From Concept to Shelf in 12 Weeks: The Custom Packaging Timeline',
    description: 'A realistic phase-by-phase timeline for custom packaging development — design, prototyping, tooling, production, and freight.',
    image: '/images/portfolio/holiday-kits.jpeg',
    gradient: 'linear-gradient(135deg,#1a0a2e,#2e1a4a,#4a2c6a)',
  },
  {
    slug: 'unboxing-experience-design-guide',
    href: '/blog/unboxing-experience-design-guide',
    tag: 'Design Discipline',
    category: 'Design & Structure',
    title: 'The Unboxing Experience Design Guide',
    description: 'Reveal sequencing, tactile hierarchy, sound design, camera-readiness, physics of a good reveal, and channel-specific unboxing design for DTC, PR/influencer, retail, and subscription — the design discipline behind packaging that gets filmed.',
    image: '/images/guides/unboxing-experience/hero-reveal.jpg',
    gradient: 'linear-gradient(135deg,#1a0d0f,#2a1a1f,#3f2a2c)',
  },
  {
    slug: 'beauty-brand-packaging-design-system',
    tag: 'System Playbook',
    category: 'Design & Structure',
    title: 'The Beauty Brand Packaging Design System Guide',
    description: 'How to build a packaging design system that scales a beauty brand from a hero SKU through line extensions, gift sets, and PR kits — without rebuilding the brand every launch.',
    image: '/images/guides/packaging-design-system/aroma360-family.jpg',
    gradient: 'linear-gradient(135deg,#1a1a2e,#2d1f3f,#3f2a4a)',
  },
  {
    slug: 'luxury-beauty-packaging-system',
    tag: 'Playbook',
    category: 'Design & Structure',
    title: 'The Luxury Beauty Packaging System Guide',
    description: 'How to develop luxury beauty, cosmetics, and fragrance packaging as a connected system — primary, secondary, trays, materials, finishes, compliance, and production readiness.',
    image: '/images/guides/luxury-beauty-packaging/kiki-secondary-hero.jpg',
    gradient: 'linear-gradient(135deg,#0d0f1a,#1a1a2e,#2d1b3f)',
  },
  {
    slug: 'packaging-finish-guide',
    tag: 'Reference Guide',
    category: 'Design & Structure',
    title: 'The Definitive Guide to Packaging Finishes: Soft-Touch, Foil Stamp, Spot UV & Emboss',
    description: 'A comprehensive reference covering every major packaging finish — what they are, how they work, cost considerations, and how to combine them for maximum brand impact.',
    image: '/images/portfolio/soft-touch-spot-uv.jpg',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
  },
  {
    slug: 'material-decision-framework',
    tag: 'Reference Guide',
    category: 'Materials & Sustainability',
    title: "The Beauty Brand's Material Decision Framework",
    description: 'Glass, PET, HDPE, aluminum, and molded fiber — how to choose the right material by product category, channel, and stage.',
    image: '/images/portfolio/cosmetics-folding-carton.jpeg',
    gradient: 'linear-gradient(135deg,#1a1a2e,#2d1b69,#4a1a8a)',
  },
  {
    slug: 'mono-material-packaging',
    tag: 'Sustainability',
    category: 'Materials & Sustainability',
    title: 'Mono-Material Packaging Guide: PP, PE, PET & Paper',
    description: 'Mono-PP, mono-PE, mono-PET, and paper compared on recyclability, formula compatibility, decoration, SB 54 and PPWR compliance, and cost.',
    image: '/images/portfolio/foil-stamped-cylinder.jpeg',
    gradient: 'linear-gradient(135deg,#0a2e1a,#1a4a3c,#2c6a5a)',
  },
  {
    slug: 'sustainable-beauty-packaging',
    tag: 'Playbook',
    category: 'Materials & Sustainability',
    title: 'The Sustainable Beauty Packaging Playbook: Material, Claims & Compliance',
    description: 'PCR content, mono-material design, EU PPWR, California SB 54, greenwashing risks, cost modeling, and implementation roadmaps for beauty brands.',
    image: '/images/portfolio/velvet-interior-unboxing-kit.jpeg',
    gradient: 'linear-gradient(135deg,#0d2818,#1a4a2e,#2d6a4f)',
  },
  {
    slug: 'sustainable-packaging-decision-matrix',
    tag: 'Decision Tool',
    category: 'Materials & Sustainability',
    title: 'The Sustainable Packaging Decision Matrix',
    description: 'Score PCR, mono-material, refill, molded fiber, aluminum, and reduction side by side for one SKU. The scoring tool Logic Pac uses with beauty brands to pick the right sustainability lever.',
    image: '/images/guides/sustainable-decision-matrix/lever-aluminum-refill.jpg',
    gradient: 'linear-gradient(135deg,#0d2818,#1a4a2e,#2d6a4f)',
  },
  {
    slug: 'beauty-refillable-playbook',
    tag: 'Playbook',
    category: 'Materials & Sustainability',
    title: 'The Beauty Brand Refillable Packaging Playbook',
    description: 'Refill formats, material selection, consumer behavior, cost modeling, regulatory compliance, and implementation timelines.',
    image: '/images/portfolio/skincare-launch-pr-mailer.jpg',
    gradient: 'linear-gradient(135deg,#0f2027,#1a3a4a,#2c5364)',
  },
  {
    slug: 'cost-moq-landed-cost-planning',
    tag: 'Decision Tool',
    category: 'Cost & Production',
    title: 'Packaging Cost, MOQ & Landed-Cost Planning Guide',
    description: 'The seven-component landed-cost stack, MOQ as a cash-flow decision, freight-mode selection, and an interactive worksheet to pressure-test a packaging program before the PO goes out.',
    image: '/images/guides/sustainable-decision-matrix/lever-reduction-artilect.jpg',
    gradient: 'linear-gradient(135deg,#0f1a2a,#1a2b4a,#2d3f5c)',
  },
  {
    slug: 'packaging-at-scale',
    tag: 'Production',
    category: 'Cost & Production',
    title: 'Packaging at Scale: What Changes at 10K, 50K, and 100K+ Units',
    description: 'What breaks when production volume grows and how to build a packaging program that handles 10K, 50K, and 100K+ units.',
    image: '/images/portfolio/cosmetics-folding-carton.jpeg',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
  },
  {
    slug: 'packaging-testing-quality-control',
    tag: 'Reference Guide',
    category: 'Cost & Production',
    title: 'Packaging Testing & Quality Control Guide',
    description: 'Specifications, golden samples, fit and transit testing, DUPRO and pre-shipment inspection, AQL thresholds, and the documentation trail that guarantees run-to-sample conformity.',
    image: '/images/guides/packaging-testing-qc/cavity-verification.jpg',
    gradient: 'linear-gradient(135deg,#0f1a2a,#1a2a3a,#2c3e5c)',
  },
  {
    slug: 'contract-packaging-partner-evaluation',
    tag: 'Operations',
    category: 'Cost & Production',
    title: 'How to Evaluate a Contract Packaging Partner',
    description: 'Evaluation framework for brands at volume who need to change or add a packaging supplier. Capacity, quality, cost, and transition planning.',
    image: '/images/portfolio/shelf-ready-display-unit.jpeg',
    gradient: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
  },
  {
    slug: 'retail-ready-beauty-packaging',
    tag: 'Operations Playbook',
    category: 'Compliance & Retail',
    title: 'Retail-Ready Beauty Packaging Guide',
    description: 'GS1 barcode readiness, master-carton configuration, Sephora/Ulta/Target vendor-manual specifics, planogram realities, chargeback prevention, and the launch-window math that keeps the first retail shipment clean.',
    image: '/images/guides/retail-ready-beauty/shelf-ready-display.jpg',
    gradient: 'linear-gradient(135deg,#0f1a2a,#1a2a3a,#2c3e5c)',
  },
  {
    slug: 'beauty-packaging-claims-compliance',
    tag: 'Compliance Hub',
    category: 'Compliance & Retail',
    title: 'Beauty Packaging Claims & Compliance Guide',
    description: 'The orientation layer for beauty packaging compliance. SB 54, SB 343, Prop 65, FTC Green Guides, FDA 21 CFR 701, MoCRA, EU PPWR, ECGT, UK regimes, UFLPA, and the certifications that substantiate specific claims — mapped by jurisdiction, claim, and pack component.',
    image: '/images/guides/beauty-packaging-compliance/fsc-paper-cartons.jpg',
    gradient: 'linear-gradient(135deg,#0d1a2e,#1a2a4a,#2d3f5c)',
  },
  {
    slug: 'influencer-kit-playbook',
    tag: 'Playbook',
    category: 'Specialty Programs',
    title: 'The Influencer Kit Playbook: How to Design PR Mailers That Get Posted',
    description: 'Everything you need to know about designing and producing influencer kits that generate organic content — from kit structures and finishes to timelines and budgets.',
    image: '/images/portfolio/influencer-kits.jpg',
    gradient: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
  },
]

const ALL_CAT = 'All Guides'
const categories = [ALL_CAT, 'Getting Started', 'Design & Structure', 'Materials & Sustainability', 'Cost & Production', 'Compliance & Retail', 'Specialty Programs']

export default function GuidesClient() {
  const [activeCat, setActiveCat] = useState(ALL_CAT)
  const filtered = activeCat === ALL_CAT ? guides : guides.filter(g => g.category === activeCat)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Resources</div>
        <h1>Packaging Guides</h1>
        <p>In-depth playbooks and reference guides to help you make better packaging decisions — from concept to production.</p>
        <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 8 }}>{guides.length} guides across {categories.length - 1} categories</p>
      </div>

      <div className="gidx">
        <div className="blog-filters" role="tablist" aria-label="Filter guides by category">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCat === cat}
              className={`blog-filter-btn${activeCat === cat ? ' active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
              {cat !== ALL_CAT && <span className="blog-filter-count">{guides.filter(g => g.category === cat).length}</span>}
            </button>
          ))}
        </div>

        <div className="blog-count">{filtered.length} guide{filtered.length !== 1 ? 's' : ''}</div>

        <div className="gcards">
          {filtered.map(g => (
            <Link key={g.slug} href={g.href || `/guides/${g.slug}`} className="gcard">
              <div className="gcard-img">
                <Image src={g.image} alt={g.title} width={600} height={338} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="gcard-body">
                <div className="gcard-tag">{g.category} &middot; {g.tag}</div>
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
