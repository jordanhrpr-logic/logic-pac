'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const tocSections = [
  { id: 'why', label: 'Why material matters' },
  { id: 'five', label: 'The 5 core materials' },
  { id: 'category', label: 'Decision matrix by category' },
  { id: 'cost', label: 'Cost & MOQs' },
  { id: 'sustainability', label: 'Sustainability scoring' },
  { id: 'perception', label: 'Perception signals' },
  { id: 'supply', label: 'Supply chain reality' },
  { id: 'framework', label: 'The decision framework' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'Can we use multiple materials in the same product line?',
    answer: 'Yes — and most brands do. Glass primary + paperboard secondary + molded fiber insert is a common premium stack. Just make sure each component is independently recyclable in the EU PPWR sense.',
  },
  {
    question: 'Is bamboo or wood a viable alternative?',
    answer: 'Niche. Beautiful for caps, lids, and accents. Almost never a viable primary container — moisture, sealing, and food-safety regulations make it complicated. Use it where it adds tactile value, not as a sustainability headline.',
  },
  {
    question: 'How do bio-plastics (PLA, PHA) compare?',
    answer: 'They’re improving but still have compostability infrastructure problems. PLA needs industrial composting (not consumer composting). For most beauty brands, mono-material recycled plastic is more defensible than bio-plastic today.',
  },
  {
    question: 'What about refillable systems?',
    answer: 'Covered in detail in our Beauty Refillable Playbook. Short version: aluminum + glass refill bases work; plastic refills almost always undercut the sustainability claim.',
  },
  {
    question: 'How do we pick between PET and HDPE if both work?',
    answer: 'PET if clarity matters. HDPE if chemical compatibility matters or you want a softer feel. Cost is similar. Recyclability is similar. Perception favors PET in clear formats and HDPE in opaque.',
  },
]

export default function MaterialClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    tocSections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Material Strategy</div>
        <h1>The beauty brand&apos;s <em>material decision</em> framework.</h1>
        <p>Glass. PET. HDPE. Aluminum. Molded fiber. Every beauty packaging project starts with the same five-way material call &mdash; and most brands make it on aesthetics alone. Here&apos;s how to make it the right way.</p>
        <div className="phdr-meta">
          <span>14 min read</span>
          <span>Updated April 2026</span>
          <span>Concept Stage</span>
        </div>
      </div>

      <div className="guide-wrap">
        <aside className="gtoc">
          <h4>Contents</h4>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <h2 id="why"><span className="num">01.</span>Why material is the highest-leverage decision in packaging</h2>
            <p>You can change colors, fonts, finishes, even structures &mdash; within reason &mdash; without rebuilding your supply chain. <strong>You can&apos;t change the material without changing everything downstream.</strong> Cost. MOQs. Lead times. Recyclability. Compliance. Shelf weight. Freight. Customer perception.</p>
            <p>The brands that get this right treat material as a strategic decision made in concept stage, with full input from product, brand, ops, and finance. The brands that get it wrong treat it as a follow-on detail handled by the packaging supplier.</p>
            <p>This guide breaks down the five core material families used in beauty, what each one delivers, when each one fails, and how to choose by product category, channel, and stage.</p>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>The five core materials and what each one actually delivers</li>
                <li>A decision matrix by category &mdash; skincare, color cosmetics, fragrance, haircare</li>
                <li>Cost and MOQ ranges so you can model unit economics before you commit</li>
                <li>Sustainability scoring across the materials (the honest version, not the marketing)</li>
                <li>How perception, regulation, and supply chain interact in real decisions</li>
              </ol>
            </div>

            <Image src="/images/guides/portfolio-material-diversity.jpg" alt="Multiple packaging formats and materials across beauty brands — glass, rigid boxes, folding cartons, and specialty finishes" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="five"><span className="num">02.</span>The five core materials</h2>

            <h3>Glass</h3>
            <p>Heavy, premium, infinitely recyclable, breakable, freight-expensive. The luxury default for serums, fragrance, and refillable systems. Glass photographs beautifully and signals quality without saying anything.</p>
            <p><strong>Where it works:</strong> hero SKUs, fragrance, prestige skincare, refillable bases.<br />
            <strong>Where it fails:</strong> high-volume DTC (breakage + freight emissions), travel formats, value tiers.</p>

            <h3>PET (Polyethylene Terephthalate)</h3>
            <p>The most recycled plastic in the world. Clear, lightweight, durable, and available with high PCR content. Workhorse material for clear bottles, jars, and tubes.</p>
            <p><strong>Where it works:</strong> clear-format products where you want product visibility, mid-tier skincare, haircare, body.<br />
            <strong>Where it fails:</strong> luxury positioning where weight signals quality. Heat-sensitive formats (lower thermal resistance than HDPE).</p>

            <h3>HDPE (High-Density Polyethylene)</h3>
            <p>Opaque, chemically resistant, slightly less premium than PET. The go-to for haircare, body, opaque skincare, and any product where chemical compatibility matters more than visual product visibility.</p>
            <p><strong>Where it works:</strong> shampoo, conditioner, body wash, opaque cleansers.<br />
            <strong>Where it fails:</strong> brand positioning that demands a more refined surface or feel.</p>

            <h3>Aluminum</h3>
            <p>Premium, infinitely recyclable, light, and surprisingly cost-competitive at volume. Increasingly used in deodorants, fragrance, and refillable formats. Mono-aluminum systems are EU PPWR-compliant by design.</p>
            <p><strong>Where it works:</strong> deodorant, refillable bases, prestige skincare, fragrance, products where the package itself becomes the brand asset.<br />
            <strong>Where it fails:</strong> products that need transparency (you can&apos;t see the formula). Reactive formulations (some require interior coatings).</p>

            <h3>Molded Fiber</h3>
            <p>Made from recycled paper pulp reformed under heat and pressure. Compostable, FSC-certifiable, increasingly premium. The fastest-growing sustainable secondary packaging format in beauty.</p>
            <p><strong>Where it works:</strong> inserts, structural protection, e-commerce mailers, gift sets, premium boxes &mdash; anywhere you&apos;d previously use plastic clamshells or foam.<br />
            <strong>Where it fails:</strong> primary packaging for liquids without a polymer barrier. Products that need a hermetic seal.</p>

            <Image src="/images/guides/material-comparison-grid.png" alt="Material comparison grid — Glass, PET, HDPE, Aluminum, and Molded Fiber compared across weight, recyclability, MOQ, and best use cases" width={800} height={450} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="category"><span className="num">03.</span>The decision matrix &mdash; by category</h2>
            <p>Different beauty categories have different physical requirements, perception expectations, and channel constraints. Here&apos;s where each material lands by category.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Default</th>
                    <th>Premium</th>
                    <th>Sustainable</th>
                    <th>Avoid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Prestige Skincare</strong></td>
                    <td>Glass jar / PET dropper</td>
                    <td>Glass + aluminum closure</td>
                    <td>Refillable glass + aluminum</td>
                    <td>Single-use clear PET (perception)</td>
                  </tr>
                  <tr>
                    <td><strong>Mass Skincare</strong></td>
                    <td>PET / HDPE bottle</td>
                    <td>Mono-PE tube</td>
                    <td>50%+ PCR PET</td>
                    <td>Multi-layer films, mixed resins</td>
                  </tr>
                  <tr>
                    <td><strong>Color Cosmetics</strong></td>
                    <td>Aluminum or coated PP compact</td>
                    <td>Refillable aluminum</td>
                    <td>Magnetic refill systems</td>
                    <td>Throwaway plastic compacts</td>
                  </tr>
                  <tr>
                    <td><strong>Fragrance</strong></td>
                    <td>Glass with metal collar</td>
                    <td>Hand-finished glass + decorative cap</td>
                    <td>Refillable glass + concentrated atomizer</td>
                    <td>PET (kills perception)</td>
                  </tr>
                  <tr>
                    <td><strong>Haircare</strong></td>
                    <td>HDPE bottle</td>
                    <td>HDPE with soft-touch label</td>
                    <td>Mono-PE bottle + cap, 50% PCR</td>
                    <td>Multi-resin pumps</td>
                  </tr>
                  <tr>
                    <td><strong>Body</strong></td>
                    <td>HDPE / PET bottle</td>
                    <td>Glass jar (premium tier)</td>
                    <td>Aluminum tube + refill</td>
                    <td>Mixed-material airless</td>
                  </tr>
                  <tr>
                    <td><strong>Deodorant</strong></td>
                    <td>Plastic stick</td>
                    <td>Aluminum stick or refillable case</td>
                    <td>Cardboard tube or aluminum refill</td>
                    <td>Aerosol (regulatory exposure)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="cost"><span className="num">04.</span>Cost &amp; MOQs by material</h2>
            <p>Per-unit numbers below are typical ranges at production volume (10K+ units). Smaller runs add 30&ndash;80% to per-unit cost. Tooling and decoration are extra.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Typical Per-Unit</th>
                    <th>Standard MOQ</th>
                    <th>Lead Time</th>
                    <th>Tooling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Glass (stock)</strong></td>
                    <td>$0.40 &ndash; $1.20</td>
                    <td>5,000&ndash;10,000</td>
                    <td>4&ndash;8 weeks</td>
                    <td>None for stock; $5&ndash;25K custom</td>
                  </tr>
                  <tr>
                    <td><strong>Glass (custom)</strong></td>
                    <td>$1.50 &ndash; $5.00+</td>
                    <td>30,000&ndash;50,000</td>
                    <td>10&ndash;16 weeks</td>
                    <td>$15K&ndash;60K mold</td>
                  </tr>
                  <tr>
                    <td><strong>PET</strong></td>
                    <td>$0.10 &ndash; $0.45</td>
                    <td>10,000+</td>
                    <td>3&ndash;6 weeks</td>
                    <td>$3K&ndash;15K (custom)</td>
                  </tr>
                  <tr>
                    <td><strong>HDPE</strong></td>
                    <td>$0.08 &ndash; $0.35</td>
                    <td>10,000+</td>
                    <td>3&ndash;6 weeks</td>
                    <td>$3K&ndash;15K (custom)</td>
                  </tr>
                  <tr>
                    <td><strong>Aluminum</strong></td>
                    <td>$0.45 &ndash; $2.50</td>
                    <td>5,000&ndash;25,000</td>
                    <td>6&ndash;12 weeks</td>
                    <td>$5K&ndash;30K depending on form</td>
                  </tr>
                  <tr>
                    <td><strong>Molded Fiber</strong></td>
                    <td>$0.15 &ndash; $0.75</td>
                    <td>10,000+</td>
                    <td>8&ndash;12 weeks</td>
                    <td>$5K&ndash;15K mold</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <p>The cheapest material at the production line isn&apos;t always the cheapest material at landed cost. Glass freight, aluminum scrap rates, and molded fiber lead times all change the equation.</p>
            </div>

            <h2 id="sustainability"><span className="num">05.</span>Sustainability scoring (the honest version)</h2>
            <p>Every material has a sustainability story brands love to tell. Here&apos;s the version that actually holds up under regulatory or analyst scrutiny.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Recyclability</th>
                    <th>Real-world recovery</th>
                    <th>Carbon footprint</th>
                    <th>EU PPWR readiness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Glass</strong></td>
                    <td>Infinite, in theory</td>
                    <td>~33% (US); 70%+ (EU)</td>
                    <td>High (heavy, energy-intense)</td>
                    <td>Compliant when mono-material</td>
                  </tr>
                  <tr>
                    <td><strong>PET</strong></td>
                    <td>High</td>
                    <td>29% (US); much higher EU</td>
                    <td>Lower at recycled content</td>
                    <td>30% rPET mandate by 2030</td>
                  </tr>
                  <tr>
                    <td><strong>HDPE</strong></td>
                    <td>High</td>
                    <td>29% (US); higher EU</td>
                    <td>Lower than PET</td>
                    <td>10% recycled content mandate</td>
                  </tr>
                  <tr>
                    <td><strong>Aluminum</strong></td>
                    <td>Infinite, in practice</td>
                    <td>~50% (US); ~75% (global)</td>
                    <td>High at virgin; low at recycled</td>
                    <td>Compliant when mono-material</td>
                  </tr>
                  <tr>
                    <td><strong>Molded Fiber</strong></td>
                    <td>Yes (paper stream)</td>
                    <td>High where unconstrained</td>
                    <td>Low at recycled feedstock</td>
                    <td>Compliant; FSC adds credibility</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="perception"><span className="num">06.</span>Perception signals &mdash; what each material says</h2>
            <p>Material is one of the strongest non-verbal brand signals in beauty. Most consumers can&apos;t name the material, but they read it instantly through weight, finish, and tactile feedback.</p>
            <ul>
              <li><strong>Glass</strong> signals: heritage, prestige, efficacy, &ldquo;real&rdquo;</li>
              <li><strong>Aluminum</strong> signals: modern, premium, refillable, intentional</li>
              <li><strong>PET (clear)</strong> signals: clean, fresh, pharmacy, accessible</li>
              <li><strong>HDPE</strong> signals: workhorse, value, mass &mdash; unless dressed up</li>
              <li><strong>Molded Fiber</strong> signals: natural, sustainable, considered</li>
            </ul>
            <p>The brands that win premium positioning use material to do the brand-equity work that decoration alone can&apos;t. The brands that miss it spend twice on graphics trying to compensate for a material that signals the wrong tier.</p>

            <h2 id="supply"><span className="num">07.</span>Supply chain reality &mdash; what your material choice locks in</h2>
            <p>Material isn&apos;t just a unit-cost decision. It&apos;s a supply chain decision. Here&apos;s what each one commits you to:</p>
            <ul>
              <li><strong>Glass</strong> ties you to fewer global suppliers, longer lead times, and a freight model that punishes you on DTC volume.</li>
              <li><strong>PET / HDPE</strong> open up the largest, most flexible supplier base &mdash; but commodity pricing is volatile.</li>
              <li><strong>Aluminum</strong> requires specialty tooling, decoration partners (anodizing, printing), and longer lead times.</li>
              <li><strong>Molded Fiber</strong> means a smaller supplier pool and longer tooling cycles, but stable pricing and strong sustainability story.</li>
            </ul>

            <h2 id="framework"><span className="num">08.</span>The decision framework</h2>
            <p>If you&apos;re picking a material today, run the brief through these five questions in order:</p>
            <ol>
              <li><strong>What does the formula require?</strong> Light-sensitive, heat-sensitive, oil-based, alcohol-based &mdash; each rules out certain materials.</li>
              <li><strong>What price tier are you positioning at?</strong> Material is your strongest perception lever.</li>
              <li><strong>What&apos;s your channel mix?</strong> DTC freight realities differ from retail planogram rules.</li>
              <li><strong>What&apos;s your volume profile?</strong> Custom tooling justifies at scale; stock formats win at lower volume.</li>
              <li><strong>What sustainability commitments have you made?</strong> Public claims need supply-chain evidence.</li>
            </ol>
            <p>If any of those answers are unclear, you&apos;re not ready to pick a material yet. You&apos;re ready to ask better questions.</p>

            <section className="sources-section">
              <h2>Sources</h2>
              <p className="sources-lede">External regulatory standards, recycling data, and market figures referenced in this guide. Pricing, MOQ, and lead-time ranges are Logic Pac&apos;s own sourcing data and are presented as guidance, not citation.</p>
              <ul className="sources-list">
                <li><strong>EU Packaging and Packaging Waste Regulation (PPWR)</strong> <span>&mdash; effective August 2026. Mono-material requirements, recycled-content thresholds, EPR fee schedules driving material penalties for multi-layer formats.</span></li>
                <li><strong>U.S. EPA &mdash; Plastics Material-Specific Data</strong> <span>&mdash; PET bottles 29.1% recycling rate, HDPE natural bottles 29.3%, broader plastic packaging 13.3%.</span></li>
                <li><strong>Future Market Insights &mdash; Molded Fiber Pulp Packaging Market 2026&ndash;2036</strong> <span>&mdash; $10.5B global market in 2026; cosmetics-specific applications growing 7.4% CAGR through 2030.</span></li>
                <li><strong>Future Market Insights &mdash; PCR Plastic Packaging Market</strong> <span>&mdash; $21.28B (2025) projected to $56.43B (2035), 10.24% CAGR; cosmetics segment 7.65%.</span></li>
                <li><strong>FSC 2025 Global Consumer Recognition Survey</strong> <span>&mdash; Ipsos for Forest Stewardship Council. 46% recognition across 33 countries; 62% prefer FSC-certified.</span></li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <div className="guide-faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Still Have Questions?</h2>
            <p>Here are the most common questions we get about packaging materials. If you don&apos;t see your question, book a call and we&apos;ll give you a straight answer.</p>
          </div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Material Decision FAQs"
            faqs={faqs}
            ctaText="Book a Material Consultation"
            ctaProjectType="Guide - Material Consultation"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Get the Material<br /><em>Right</em></h2>
          <p>Get the substrate wrong and every downstream choice &mdash; finish, structure, claims, freight, retailer compliance &mdash; has to bend around it. We help beauty brands match material to brand position, regulatory exposure, and unit economics in a single session.</p>
          <button className="bi" onClick={() => openModal('Guide - Material Consultation')}>Book a Material Consultation</button>
        </div>
      </section>
    </>
  )
}
