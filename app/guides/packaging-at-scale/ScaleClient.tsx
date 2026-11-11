'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import GuideAnswerSummary from '@/components/GuideAnswerSummary'
import GuideBottomLine from '@/components/GuideBottomLine'
import GuideByline from '@/components/GuideByline'

const tocSections = [
  { id: 'thresholds', label: 'The volume thresholds' },
  { id: 'breaks', label: 'What breaks at volume' },
  { id: 'economics', label: 'The economics of scale' },
  { id: 'tooling', label: 'When to invest in custom tooling' },
  { id: 'consistency', label: 'Production consistency' },
  { id: 'managed', label: 'The managed program model' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'At what volume should I invest in custom tooling?',
    answer: 'Custom tooling typically makes sense at 5,000 to 10,000 units depending on the format. A $5,000 to $15,000 die set amortized across 50,000 units adds $0.10 to $0.30 per unit — comparable to the premium you pay for stock-mold limitations. Below 5,000 units, stock components usually win on economics.',
  },
  {
    question: 'How do per-unit costs change from 5K to 100K units?',
    answer: 'Per-unit cost typically drops 30 to 50% between a 5,000-unit run and a 100,000-unit run on the same format. The largest single factor is tooling amortization. Material pricing tiers, full-container freight loads, and setup cost distribution contribute the rest.',
  },
  {
    question: 'When do I need a second packaging supplier?',
    answer: 'Most brands should qualify a backup supplier before crossing 50,000 units per production cycle. At that volume, a single-supplier disruption — capacity conflict, quality issue, shipping delay — can cost a retail window or a launch date. Dual qualification does not mean splitting every order; it means having a tested alternative ready.',
  },
  {
    question: 'What is a managed packaging program?',
    answer: 'A managed program means one partner owns design, sourcing, production QC, inventory, and fulfillment as a coordinated system — not a series of one-off purchase orders. Inventory is staged in a warehouse with buffer stock, replenishment runs on a planned cycle, and procurement credit decouples packaging timing from cash flow cycles.',
  },
  {
    question: 'How do I keep packaging consistent across production runs?',
    answer: 'Consistency requires four things: an approved golden sample as the production standard, documented material and finish specifications that do not reference subjective language, first-article inspection on every run before mass production proceeds, and run-to-run conformity tracking that catches drift before it reaches the customer.',
  },
  {
    question: 'What packaging volumes does Logic Pac handle?',
    answer: 'We work across the full volume range — from 500-unit influencer kits to multi-SKU programs producing over 1 million units annually. Our managed program model is designed for brands at 10,000 units and above who need production discipline, cost engineering, and supply continuity.',
  },
]

export default function ScaleClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) setActiveSection(visible[0].target.id)
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
        <div className="ey inv">Logic Pac &middot; Production &amp; Scale</div>
        <h1>Packaging at <em>scale:</em> what changes at 10K, 50K, and 100K+ units.</h1>
        <p>A packaging program that works at 2,000 units will not work at 50,000. The format might be the same, but everything underneath it &mdash; sourcing, QC, cost structure, inventory, supplier accountability &mdash; has to change. This guide covers what shifts at each volume threshold and how to build a program that holds up as production grows.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>14 min read</span>
          <span>Updated November 2026</span>
          <span>Production &amp; Operations</span>
        </div>
      </div>

      <div className="guide-wrap">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="How does packaging change when production volume grows?"
              answer="At low volume, packaging is a design problem — pick a format, pick a finish, order a batch. At high volume, packaging is an operations problem — manage suppliers, control specifications, plan inventory, engineer cost out of the system without degrading what the customer sees. The transition happens gradually, but the consequences of ignoring it arrive suddenly: inconsistent quality, missed retail windows, margin erosion, and emergency freight charges that erase the savings you thought you had."
              takeaways={[
                'Each volume threshold introduces new operational requirements that did not exist at the previous level.',
                'The single largest cost lever is tooling amortization — it changes per-unit economics by an order of magnitude between launch and scale.',
                'Production consistency is not automatic. It requires documented specifications, approved samples, and inspection discipline at every run.',
                'A managed program model — one partner owning design through fulfillment — replaces the patchwork of vendors that works at launch but fails at volume.',
              ]}
            />

            <h2 id="thresholds">The Volume Thresholds</h2>

            <p>Packaging does not scale linearly. It steps through distinct operational phases, each with different requirements. The volume numbers below are typical for beauty and consumer brands &mdash; the exact inflection points vary by format, material, and channel, but the pattern holds.</p>

            <h3>500&ndash;5,000 units: Launch and test</h3>
            <p>This is where most brands start. The priorities are speed and proof of concept, not cost optimization. Stock components dominate: off-the-shelf bottles, jars, and closures with applied labels or shrink sleeves. Custom rigid boxes are possible but per-unit costs are high because tooling is amortized across a small run. Finishes are limited to what the stock mold and standard print processes support.</p>
            <p>At this volume, a single supplier handles most of what you need. QC is visual and manual &mdash; you inspect the delivery and fix problems reactively. The per-unit cost is the highest it will ever be, and that is acceptable because the goal is to validate the product and the channel, not to optimize the cost of goods.</p>

            <h3>5,000&ndash;10,000 units: First custom tooling</h3>
            <p>This is where custom tooling starts to make economic sense. A custom bottle mold, a custom die for a folding carton, or a custom rigid box structure can be justified when the tooling cost is spread across 5,000+ units. MOQ thresholds at most factories unlock better per-unit pricing at this level. Format decisions carry more weight because you are committing to a structure that will run for multiple production cycles.</p>
            <p>Supplier selection matters more. At 500 units you pick whoever can deliver fastest. At 5,000 you pick whoever can deliver consistently, because this is no longer a one-time order &mdash; it is the first of many.</p>

            <h3>10,000&ndash;50,000 units: Production discipline required</h3>
            <p>This is the threshold where ad-hoc operations start failing. Spec management can no longer live in email threads and slide decks. QC needs structure: pre-production samples approved against a golden standard, inline checks during production, and pre-shipment inspection before containers ship. Supplier accountability needs documentation &mdash; not just a relationship.</p>
            <p>Per-unit costs drop meaningfully at this level, driven primarily by tooling amortization and material pricing tiers. A folding carton program that costs $1.80 per unit at 5,000 might cost $0.85 at 25,000 and $0.55 at 50,000. The economics justify the investment in process.</p>

            <h3>50,000&ndash;100,000 units: Multi-supplier qualification</h3>
            <p>At this volume, single-supplier dependency becomes a real business risk. A factory capacity conflict, a quality incident, or a shipping lane disruption can miss a retail window or delay a launch. Smart programs qualify a second supplier &mdash; not to split every order, but to have a tested, approved alternative ready when the primary cannot deliver.</p>
            <p>Inventory management shifts from procurement to operations. Reorder timing, buffer stock levels, and forward cover need to be planned against lead times, not improvised against urgency. Freight optimization becomes material &mdash; the difference between LCL and FCL ocean shipping, and between ocean and air, changes the landed cost by multiples at this volume.</p>

            <h3>100,000+ units: Managed programs</h3>
            <p>At six figures and above, packaging is a supply chain &mdash; not a purchase order. The brands that manage this well run their packaging through one accountable partner who owns design, sourcing, production QC, inventory, and fulfillment as a coordinated system. Packaging credit decouples procurement timing from cash flow cycles. Warehouse staging eliminates the emergency air freight that brands treat as a cost of doing business.</p>
            <p>The <Link href="/work/epicutis?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=scale_epicutis">Epicutis program</Link> is a concrete example of this model: 3 SKUs to 21+, under 100,000 units to over 1 million annually, with 15% verified cost savings, 7-day replenishment from our Salt Lake City warehouse, and the same lean team the brand started with. See our <Link href="/production?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=scale_production_page">production packaging</Link> page for how we structure these programs.</p>

            <h2 id="breaks">What Breaks at Volume</h2>

            <p>Most of what works at 5,000 units does not work at 50,000. The format might survive. The operating system underneath it will not. Here are the five failure modes we see most often.</p>

            <h3>1. Manual spec management</h3>
            <p>At low volume, specifications live in email threads, PDF briefs, and memory. At 10,000+ units across multiple production runs, this creates drift: the board weight shifts slightly, the PMS color is interpreted differently by a new press operator, the finish spec is described as &ldquo;soft touch like the last run&rdquo; instead of a documented lamination callout. Each small deviation compounds. By the third or fourth production cycle, the current output no longer matches the original approval.</p>
            <p>The fix is documented, versioned specifications that reference measurable standards &mdash; not subjective descriptions. Board weight in grams per square meter, not &ldquo;similar thickness.&rdquo; Color in PMS with a &#916;E tolerance, not &ldquo;match the sample.&rdquo;</p>

            <h3>2. Single-supplier dependency</h3>
            <p>A single supplier works when the volume is low enough that a disruption can be absorbed. At scale, a single point of failure in the supply chain becomes a business continuity risk. The supplier does not need to fail catastrophically &mdash; a two-week capacity conflict during your peak production window is enough to miss a retail placement or delay a launch.</p>
            <p>Qualifying a second supplier requires running a parallel sample and approval process. The cost is meaningful but finite. The cost of not having one is a missed shipment that you cannot recover from.</p>

            <h3>3. Order-by-order pricing</h3>
            <p>Quoting each production run independently means the factory treats every order as a new customer negotiation. At scale, annual volume commitments unlock pricing tiers, priority scheduling, and negotiation leverage that order-by-order procurement cannot achieve. The savings compound across runs &mdash; typically 10&ndash;20% below spot pricing on comparable formats.</p>

            <h3>4. Ad-hoc quality control</h3>
            <p>Visual inspection of finished goods is quality reaction, not quality control. At 50,000+ units, defects need to be caught before they ship &mdash; ideally before they are produced at scale. Pre-production sample approval against a golden standard, inline checks at defined intervals during the run, and pre-shipment inspection before the container closes are the baseline. Our <Link href="/guides/packaging-testing-quality-control?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=scale_qc_guide">Testing &amp; Quality Control guide</Link> covers the full framework.</p>

            <h3>5. Cash-flow-driven procurement</h3>
            <p>At low volume, brands order packaging when they have cash. At scale, packaging procurement needs to be driven by the production calendar and lead times &mdash; not the bank balance. A 30&ndash;60 day ocean freight lead time means the PO needs to drop 8&ndash;12 weeks before the product is needed. When cash flow timing drives procurement instead of launch timing, the result is emergency air freight at 3&ndash;4x the ocean cost, or missed production windows that cascade into missed retail placements.</p>

            <h2 id="economics">The Economics of Scale</h2>

            <p>Per-unit packaging cost drops at each volume threshold, but the composition of that cost changes. Understanding where the savings come from matters more than knowing the total number.</p>

            <h3>Tooling amortization</h3>
            <p>This is the single largest factor. A $10,000 die set costs $2.00 per unit at 5,000 units, $0.20 at 50,000, and $0.10 at 100,000. The same physical tool, the same structural output &mdash; the only variable is volume. Brands that plan tooling against a 24-month volume outlook instead of a single run capture this math immediately. Our <Link href="/guides/cost-moq-landed-cost-planning?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=scale_cost_guide">landed-cost planning guide</Link> includes a worksheet for modeling this.</p>

            <h3>Material pricing tiers</h3>
            <p>Resin, board stock, specialty papers, and finishing materials all have volume-based pricing. A beauty brand buying 50,000 units of SBS board pays less per sheet than one buying 5,000. The discount varies by material and supplier but typically runs 8&ndash;15% between the smallest and largest production tiers. Post-consumer recycled (PCR) content commands a premium at any volume, but the premium narrows at higher quantities as suppliers prioritize committed buyers.</p>

            <h3>Freight mode optimization</h3>
            <p>Below 10,000 units, packaging often ships LCL (less-than-container load), sharing container space with other cargo. The per-unit freight cost is high because the shipping line charges a premium for partial loads and the handling adds time. At 10,000+ units, full-container loads (FCL) become possible. At 50,000+, multi-container shipments unlock better lane rates. The per-unit freight difference between LCL and FCL is typically 40&ndash;60%.</p>

            <h3>Setup and changeover</h3>
            <p>Every production run includes setup time: press calibration, ink mixing, die mounting, material loading. This is a fixed cost distributed across the run. A 4-hour setup on a 5,000-unit run costs 5&ndash;10x more per unit than the same setup on a 50,000-unit run. Long runs also reduce waste &mdash; the first several hundred units of any print run are calibration pulls that do not meet spec.</p>

            <h3>QC cost distribution</h3>
            <p>Pre-production QC, inline inspection, and pre-shipment audits have a per-engagement cost that drops on a per-unit basis as volume rises. A DUPRO (during-production) inspection costs roughly the same whether the run is 10,000 or 100,000 units. The discipline is the same; the cost allocation improves.</p>

            <h2 id="tooling">When to Invest in Custom Tooling</h2>

            <p>The stock-mold-versus-custom-tooling decision is a volume breakeven calculation, not an aesthetic preference.</p>

            <h3>The breakeven math</h3>
            <p>Stock molds have zero tooling cost but carry constraints: limited dimensions, shared cavities, no proprietary features. Custom tooling costs $3,000&ndash;$15,000 for most beauty and consumer formats (higher for complex molds with multiple cavities or undercuts) but delivers exact specifications, proprietary geometry, and typically better per-unit pricing on the component itself.</p>
            <p>The breakeven point is where the per-unit tooling amortization plus the custom-component price equals or beats the stock-component price. For most beauty formats, that crossover is between 5,000 and 10,000 units over the tool&apos;s life.</p>

            <h3>Tooling as a capital investment</h3>
            <p>Tooling is not a cost of the first production run. It is a capital investment in the packaging program. Brands that amortize tooling against the first run overstate the per-unit cost and underinvest in format quality. Brands that plan tooling against 24 months of projected volume get the real number and make better decisions about structure, finish, and format.</p>

            <h3>Shared tooling across SKU families</h3>
            <p>A well-designed packaging system shares tooling across the product line. The same folding carton die can serve multiple SKUs with different artwork; the same rigid box structure can hold different product configurations with different inserts. The <Link href="/guides/beauty-brand-packaging-design-system?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=scale_design_system">design system guide</Link> covers how to architect a packaging family that leverages shared components.</p>

            <h3>Tooling ownership and portability</h3>
            <p>Clarify tooling ownership in the production agreement. If you pay for the tooling, you own it &mdash; and you should be able to move it to a different factory if needed. Factory-owned tooling (where the tooling cost is absorbed into the per-unit price) is economically attractive on paper but creates supplier lock-in that becomes expensive to exit.</p>

            <h2 id="consistency">Production Consistency at Volume</h2>

            <p>Consistency across production runs does not happen automatically. Each run is a separate manufacturing event with different press operators, different material lots, and different environmental conditions. Without documented standards and inspection discipline, quality drifts.</p>

            <h3>Color management</h3>
            <p>Color consistency is the most visible quality dimension and the hardest to maintain. The approved golden sample &mdash; a physical sample signed off by the brand &mdash; is the standard every subsequent run is measured against. PMS spot colors with a documented &#916;E tolerance (typically &#916;E &lt; 2.0 for brand colors, &#916;E &lt; 3.0 for supporting elements) replace subjective &ldquo;match the last run&rdquo; instructions.</p>

            <h3>Material specification lock</h3>
            <p>Board weight, resin grade, wall thickness, and finish specifications must be documented in measurable units. &ldquo;300gsm C1S SBS with 19pt caliper&rdquo; is a specification. &ldquo;Similar to last time&rdquo; is not. Material substitution by the factory &mdash; a common cost-saving practice &mdash; is only caught if the specification is documented and the incoming material is checked.</p>

            <h3>First-article inspection</h3>
            <p>Before every production run proceeds to mass production, the first articles off the line are inspected against the approved sample and the documented specification. Color, dimensions, material, finish, print registration, and structural integrity are all checked. If the first articles do not pass, the run does not proceed. This is the cheapest point in the production cycle to catch a problem.</p>

            <h3>Run-to-run conformity tracking</h3>
            <p>Over time, small acceptable deviations accumulate into visible inconsistency. Run-to-run tracking &mdash; comparing each production run&apos;s QC data against the original standard and against the previous run &mdash; catches drift before it reaches the shelf. Retail partners, particularly Sephora and Ulta, notice inconsistency across replenishment cycles and it affects the brand&apos;s standing in category reviews.</p>

            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', margin: '32px 0' }}>
              <Image src="/images/portfolio/shelf-ready-display-unit.jpeg" alt="Shelf-ready display unit — production packaging requiring run-to-run consistency" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 700px" />
            </div>

            <h2 id="managed">The Managed Program Model</h2>

            <p>At 100,000+ units annually, the operating model changes. The vendor relationship &mdash; where the brand issues POs and the supplier fills them &mdash; becomes a managed program where one partner owns the system end to end.</p>

            <h3>What a managed program includes</h3>
            <ul>
              <li><strong>Inventory management and buffer stock.</strong> Packaging is staged in a warehouse (ours is in Salt Lake City) with buffer stock calibrated to replenishment lead times. The brand draws down inventory as needed; replenishment runs on a planned cycle, not on emergency.</li>
              <li><strong>Procurement credit.</strong> Logic fronts packaging procurement so production timing is driven by the launch calendar, not the brand&apos;s cash flow cycle. This is a meaningful operational advantage for brands running lean and scaling fast.</li>
              <li><strong>Co-manufacturer coordination.</strong> Packaging arrives at the co-manufacturer staged, palletized, and positioned. The co-manufacturer&apos;s floor hold time drops, throughput improves, and the brand does not need to manage the logistics between packaging warehouse and fill line.</li>
              <li><strong>Continuous cost engineering.</strong> As volumes grow, material specs are re-evaluated, supplier relationships renegotiated, and pack-out efficiency optimized. This is where verified cost savings compound &mdash; not from switching to cheaper materials but from engineering the same quality at lower landed cost.</li>
            </ul>

            <h3>What this looks like in practice</h3>
            <p>The <Link href="/work/epicutis?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=scale_epicutis_case_study">Epicutis packaging program</Link> started with a box that held two products. Over five years, it grew to a coordinated system supporting 21+ SKUs and over 1 million units annually. Logic absorbed the operational complexity: primary packaging, secondary packaging, retail displays, inventory planning, and supplier coordination. The result was 15% verified cost savings, 7-day replenishment (down from 30&ndash;60 day ocean freight cycles), and a brand that scaled 7x without adding headcount to manage packaging.</p>
            <p>For a different dimension of scale, the <Link href="/work/artilect-packaging-reduction?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=scale_artilect_case_study">Artilect packaging reduction program</Link> shows what happens when a brand outgrows its launch packaging: 20% cost reduction and 95% material reduction by transitioning from a premium rigid box to an engineered folding carton &mdash; without making the brand feel cheaper.</p>

            <GuideBottomLine>Volume does not make packaging easier. It makes packaging more consequential. The decisions that are forgivable at 2,000 units &mdash; loose specifications, single suppliers, ad-hoc QC, reactive procurement &mdash; become expensive at 50,000 and dangerous at 100,000+. Build the operating discipline before the volume demands it, not after.</GuideBottomLine>

            <section className="sources-section">
              <h2>Related guides and references</h2>
              <p className="sources-lede">This guide covers the scaling framework. These resources go deeper on the individual operating disciplines referenced above.</p>
              <ul className="sources-list">
                <li><Link href="/guides/cost-moq-landed-cost-planning">Packaging Cost, MOQ &amp; Landed-Cost Planning Guide</Link> &mdash; the landed-cost worksheet and commercial-readiness scorecard referenced in the economics section.</li>
                <li><Link href="/guides/packaging-testing-quality-control">Packaging Testing &amp; Quality Control Guide</Link> &mdash; the full pre-production, inline, and pre-shipment inspection framework.</li>
                <li><Link href="/guides/concept-to-shelf-timeline">Concept-to-Shelf Timeline Guide</Link> &mdash; the production calendar that tooling, sampling, and freight planning maps against.</li>
                <li><Link href="/guides/material-decision-framework">Material Decision Framework</Link> &mdash; glass, PET, HDPE, aluminum, and molded fiber compared on the dimensions that matter at volume: chemical resistance, cost, recyclability, and decoration.</li>
                <li><Link href="/guides/beauty-brand-packaging-design-system">Beauty Brand Packaging Design System Guide</Link> &mdash; how to architect a multi-SKU packaging family that shares tooling and specifications across the line.</li>
                <li><Link href="/work/epicutis">Epicutis case study</Link> &mdash; 3 SKUs to 21+, under 100K to over 1M units, 15% verified cost savings, 7-day replenishment.</li>
                <li><Link href="/work/artilect-packaging-reduction">Artilect case study</Link> &mdash; 20% cost reduction, 95% material reduction via 3-phase engineering transition.</li>
                <li><Link href="/packaging-audit">Packaging audit</Link> &mdash; a seven-dimension review that identifies where your current program is losing money, quality, or time before you scale further.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Common questions brands ask when their production volume outgrows their current packaging operations. For the deeper tooling, cost, QC, and timeline detail, start with the related guides above.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Scaling a Packaging Program"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Packaging at Scale"
          />
        </div>
      </section>

      <section className="guide-cta">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--white)' }}>Ready to scale your packaging program?</h3>
          <p>Tell us where you are today &mdash; volume, format, channel, and what&apos;s not working. We&apos;ll show you what needs to change and what a managed program looks like for your product line.</p>
          <button type="button" className="bi" onClick={() => openModal('Guide - Packaging at Scale', 'guide-bottom-cta')} style={{ background: 'var(--lime)', color: 'var(--navy)' }}>Discuss Your Program</button>
        </div>
      </section>
    </>
  )
}
