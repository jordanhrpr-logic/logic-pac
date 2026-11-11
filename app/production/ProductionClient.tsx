'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const productionFaqs = [
  { question: 'What volume does Logic Pac consider production-scale?', answer: 'Programs that reorder. If you are placing repeat production orders — whether 5,000 or 500,000 units per run — you need production-grade packaging management: consistent specs, reliable suppliers, QC at every stage, and inventory that is ready when your co-manufacturer needs it.' },
  { question: 'Can you manage packaging inventory between production runs?', answer: 'Yes. Our Salt Lake City warehouse holds packaging inventory so you can replenish in days instead of waiting 30 to 60 days for the next ocean freight cycle. We front procurement so timing is driven by your launch calendar, not cash flow.' },
  { question: 'How do you maintain consistency across production runs?', answer: 'Pre-production approval samples, inline inspection during manufacturing, and pre-shipment QC on every run. We maintain approved color standards, material specs, and structural tolerances so run 12 matches run 1.' },
  { question: 'Do you handle retail compliance for production packaging?', answer: 'Yes. Barcoding, master carton labeling, EDI/ASN documentation, and shelf-ready display specs for Ulta, Sephora, Target, and specialty retail are standard in our production process.' },
  { question: 'What happens when we need to change suppliers at volume?', answer: 'We run parallel qualification: the new supplier produces samples against your approved standard while the existing supplier continues production. No gap in supply, no guessing on quality. See the Audio Enhancement case study for a real example.' },
  { question: 'How does pricing change at higher volumes?', answer: 'Per-unit cost decreases as volume increases, primarily through tooling amortization, material purchasing leverage, and production efficiency. We model the cost curve for your specific program so you can plan volume commitments against actual savings.' },
]

const components = [
  { num: '01', title: 'Production Planning', desc: 'Backward-from-launch scheduling, tooling timelines, supplier capacity allocation, and freight routing. The plan is set before production starts.' },
  { num: '02', title: 'Supplier Management', desc: 'Factory relationships across China, Vietnam, Thailand, India, and Mexico. We match your program to the right factory — and qualify replacements when volume or quality demands change.' },
  { num: '03', title: 'Quality Control', desc: 'Pre-production samples, inline inspection, and pre-shipment audits on every run. Color, structure, finish, and retailer compliance verified against your approved standard.' },
  { num: '04', title: 'Managed Inventory', desc: 'Packaging staged at our SLC warehouse. Replenish in 7 days instead of waiting for ocean freight. We front procurement so production timing is not constrained by cash flow.' },
  { num: '05', title: 'Cost Engineering', desc: 'Material spec optimization, tooling amortization planning, and supplier consolidation. Per-unit cost improves as volume grows — we engineer the savings, not just negotiate them.' },
  { num: '06', title: 'Coordination', desc: 'One team manages design, sourcing, production, QC, inventory, and fulfillment. Your co-manufacturer, retail DC, and launch calendar are coordinated through a single point of contact.' },
]

export default function ProductionClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="kph">
        <div className="kphv" style={{ background: 'linear-gradient(135deg,#0a1628,#1a2a3d,#0f3460)' }}>
          <Image src="/images/portfolio/shelf-ready-display-unit.jpeg" alt="Shelf-ready retail display unit — production packaging by Logic Pac" fill style={{ objectFit: 'cover' }} priority />
          <div>
            <div className="kvl">Production Packaging</div>
            <div className="kvt" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>Packaging That<br />Repeats Without<br /><em>Compromise</em></div>
            <div className="kvr"></div>
            <div className="kvs">5,000 to 1M+ Units</div>
          </div>
        </div>
        <div className="kphc">
          <h1>Production Packaging<br />for Brands That<br /><em>Reorder</em></h1>
          <p>Launch packaging gets you started. Production packaging keeps you running. We manage the specs, suppliers, quality, and inventory that make packaging repeatable at commercial volume.</p>
          <button type="button" className="bp" onClick={() => openModal('Production Packaging', 'production-hero')}>Discuss Your Program</button>
        </div>
      </div>

      <div className="bbar">
        <span className="bbl">Trusted by global brands since 2004</span>
        <div className="bbn">
          <span className="bn"><Image src="/images/logos/adidas.svg" alt="Adidas" width={100} height={40} /></span>
          <span className="bn"><Image src="/images/logos/vans.svg" alt="Vans" width={100} height={40} /></span>
          <span className="bn"><Image src="/images/logos/target.svg" alt="Target" width={100} height={40} /></span>
          <span className="bn"><Image src="/images/logos/disney.svg" alt="Disney" width={100} height={40} /></span>
          <span className="bn"><Image src="/images/logos/puma.svg" alt="Puma" width={100} height={40} /></span>
          <span className="bn"><Image src="/images/logos/paramount-plus.svg" alt="Paramount+" width={100} height={40} /></span>
        </div>
      </div>

      <div className="incs">
        <div className="ey">How we run it</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Production-Grade Packaging Management</h2>
        <div className="incg">
          {components.map(c => (
            <div key={c.num} className="ii">
              <div className="iin">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hr"></div>

      <section className="jpf">
        <div className="ey">At Volume</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Production Programs We Manage</h2>
        <div className="incg" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <Link href="/work/epicutis" className="bty-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/epicutis-kits-group.jpg" alt="Epicutis multi-SKU skincare packaging program" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Epicutis &mdash; 21+ SKU Managed Program</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>From under 100K to over 1M units annually. Managed inventory, 7-day replenishment, 15% cost savings.</p>
          </Link>
          <Link href="/work/audio-enhancement-packaging-system" className="bty-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/shelf-ready-display-unit.jpeg" alt="Audio Enhancement teacher box packaging system" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Audio Enhancement &mdash; Factory Transition at Scale</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>Changed factories mid-production without missing a shipment. QC containment plus parallel qualification.</p>
          </Link>
          <Link href="/work/artilect-packaging-reduction" className="bty-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/cosmetics-folding-carton.jpeg" alt="Artilect packaging cost reduction — rigid to engineered carton" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Artilect &mdash; 20% Cost, 95% Material Reduction</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>3-phase transition from rigid box to engineered carton. Brand signal preserved while cost and material dropped.</p>
          </Link>
        </div>
      </section>

      <div className="hr"></div>

      <div className="kcr">
        <div className="seo">
          <h2>Production Packaging for Scaling Brands</h2>
          <p>The packaging that works at launch rarely works at volume. A first production run tolerates manual coordination, single-supplier dependence, and ad hoc inventory management. A tenth production run does not. The brands that scale their packaging successfully treat it as a managed production program, not a series of reorders.</p>

          <h3>What Changes at Volume</h3>
          <p>As production volume grows, packaging becomes a supply-chain problem, not a design problem. The constraints shift:</p>
          <ul>
            <li><strong>Consistency.</strong> Color drift, material variation, and finish differences between runs erode brand perception and create retail compliance issues. Production-grade QC catches these before they ship.</li>
            <li><strong>Cost.</strong> Per-unit packaging cost should decrease as volume increases. If yours is flat or rising, the sourcing and engineering have not been optimized for your current scale.</li>
            <li><strong>Timing.</strong> Ocean freight cycles of 30 to 60 days create gaps between demand and supply. Managed inventory programs decouple production timing from cash flow and freight schedules.</li>
            <li><strong>Coordination.</strong> At volume, packaging interacts with co-manufacturers, retail DCs, and campaign calendars. One missed shipment delays a retail window or a product launch.</li>
          </ul>
          <p>For the detailed economics, use our <Link href="/guides/cost-moq-landed-cost-planning?utm_source=production&utm_medium=organic&utm_campaign=seo_service_page&utm_content=production_cost_guide">cost, MOQ, and landed-cost planning guide</Link>.</p>

          <h3>How a Managed Packaging Program Works</h3>
          <p>We do not wait for reorder emails. A managed program includes:</p>
          <ul>
            <li>Approved packaging specifications maintained across all SKUs and production runs</li>
            <li>Supplier relationships managed against quality, capacity, and cost targets</li>
            <li>Pre-production, inline, and pre-shipment QC on every run</li>
            <li>Packaging inventory staged at our SLC warehouse with 7-day replenishment</li>
            <li>Procurement financing so production timing follows the launch calendar, not invoice cycles</li>
            <li>Continuous cost engineering as volumes grow</li>
          </ul>
          <p>The <Link href="/work/epicutis?utm_source=production&utm_medium=organic&utm_campaign=seo_service_page&utm_content=production_epicutis_case_study">Epicutis case study</Link> shows this in action: 3 SKUs to 21+, under 100K to over 1M units annually, with 15% verified cost savings and 7-day replenishment replacing 30&ndash;60 day ocean freight cycles.</p>

          <h3>When to Transition from Launch Packaging to Production Packaging</h3>
          <p>The signal is not a specific unit count. It is when you start noticing these problems:</p>
          <ul>
            <li>Reorders take too long and you have started air-shipping packaging to meet deadlines</li>
            <li>Quality varies between production runs and you cannot explain why</li>
            <li>Your per-unit cost has not decreased despite ordering more</li>
            <li>You manage packaging across multiple vendors, freelancers, and brokers with no single owner</li>
            <li>Your co-manufacturer or retail partner has flagged packaging issues</li>
          </ul>
          <p>If your packaging is already working but you want an honest assessment of where it could improve, start with a <Link href="/packaging-audit?utm_source=production&utm_medium=organic&utm_campaign=seo_service_page&utm_content=production_audit_cta">packaging audit</Link>.</p>

          <h3>Supplier Transitions at Scale</h3>
          <p>Changing packaging suppliers mid-production is one of the highest-risk operations a brand can undertake. The <Link href="/work/audio-enhancement-packaging-system?utm_source=production&utm_medium=organic&utm_campaign=seo_service_page&utm_content=production_audio_case_study">Audio Enhancement case study</Link> demonstrates our approach: parallel qualification of the new supplier while the existing supplier continues fulfilling orders. No gap in supply, no guessing on quality, no missed shipments.</p>
        </div>
        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Production Packaging FAQs"
            faqs={productionFaqs}
            ctaText="Discuss Your Production Program"
            ctaProjectType="Production Packaging"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Packaging Should Get Better<br /><em>Every Time You Reorder</em></h2>
          <p>Tell us about your product line, current volumes, and what is not working. We will scope a production program that improves with scale, not just repeats.</p>
          <button type="button" className="bi" onClick={() => openModal('Production Packaging', 'production-bottom-cta')}>Discuss Your Program</button>
        </div>
      </section>
    </>
  )
}
