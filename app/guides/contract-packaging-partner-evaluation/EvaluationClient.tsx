'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import GuideAnswerSummary from '@/components/GuideAnswerSummary'
import GuideBottomLine from '@/components/GuideBottomLine'
import GuideByline from '@/components/GuideByline'

const tocSections = [
  { id: 'when', label: 'When evaluation matters most' },
  { id: 'framework', label: 'The 7-dimension framework' },
  { id: 'capacity', label: '1. Capacity and capability' },
  { id: 'quality', label: '2. Quality systems' },
  { id: 'cost', label: '3. Cost transparency' },
  { id: 'communication', label: '4. Communication' },
  { id: 'compliance', label: '5. Material and compliance' },
  { id: 'logistics', label: '6. Logistics and fulfillment' },
  { id: 'stability', label: '7. Financial stability' },
  { id: 'transition', label: 'The transition plan' },
  { id: 'red-flags', label: 'Red flags' },
  { id: 'scorecard', label: 'Evaluation scorecard' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'When should a brand consider changing packaging suppliers?',
    answer: 'The most common triggers are quality degradation across production runs, capacity constraints that delay reorders, cost creep without a clear explanation, communication breakdown where production updates require chasing, and geographic concentration risk with a single-country supply base. Any one of these at volume is a reason to evaluate alternatives.',
  },
  {
    question: 'How long does a packaging supplier transition take?',
    answer: 'A well-planned parallel transition takes 12 to 20 weeks: 2 to 4 weeks for specification transfer and golden-sample review, 4 to 8 weeks for first-article production and approval, and 4 to 8 weeks for the first production run while the existing supplier continues filling orders. Rushing this process creates the quality problems the transition was meant to solve.',
  },
  {
    question: 'Should we qualify multiple packaging suppliers?',
    answer: 'For brands doing 50,000 or more units annually, qualifying a second supplier is a risk management decision, not a negotiation tactic. A single-supplier dependency means one factory fire, one port delay, or one quality failure can halt your entire packaging supply. Dual qualification adds cost upfront but protects continuity.',
  },
  {
    question: 'What is a golden sample and why does it matter?',
    answer: 'A golden sample is the physical production reference that defines what acceptable looks like. It is the standard against which every production run is measured. Without one, quality becomes subjective and every run is a negotiation. Both the brand and the supplier sign off on it before mass production.',
  },
  {
    question: 'How do you evaluate a packaging supplier’s quality system?',
    answer: 'Ask for documentation of three specific checkpoints: pre-production approval, inline inspection frequency and criteria, and pre-shipment inspection before the order ships. If the supplier cannot describe these three steps with specifics, their quality system is informal.',
  },
  {
    question: 'What should be included in a packaging supplier quote comparison?',
    answer: 'Compare landed cost, not ex-works price. A proper comparison includes unit cost, tooling and amortization, finish pricing, freight to your warehouse, duties, overrun and underrun policy, sample charges, and payment terms. Two suppliers quoting different scopes at different prices is not a comparison.',
  },
]

export default function EvaluationClient() {
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
        <div className="ey inv">Logic Pac &middot; Supplier Management</div>
        <h1>How to evaluate a <em>contract packaging partner.</em></h1>
        <p>This is not about choosing your first packaging supplier. This is the evaluation framework for brands already at production volume that need to change, add, or qualify a new packaging partner &mdash; without missing a shipment or resetting quality from scratch.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>14 min read</span>
          <span>November 2026</span>
          <span>Supplier &amp; Operations</span>
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
              title="How do you evaluate a packaging partner when you are already at production scale?"
              answer="Evaluate across seven dimensions: production capacity and format capability, quality systems with documented checkpoints, landed-cost transparency, communication responsiveness, material sourcing and compliance readiness, logistics and fulfillment infrastructure, and financial stability. Then plan the transition as a parallel qualification &mdash; the new supplier produces against your approved standard while the existing supplier continues filling orders. No gap in supply."
              takeaways={[
                'The trigger for evaluation is usually quality, capacity, cost, or communication &mdash; not all four at once.',
                'A parallel transition takes 12 to 20 weeks and protects production continuity throughout.',
                'The single best predictor of partner quality is communication responsiveness during the evaluation itself.',
                'Golden-sample approval before mass production is non-negotiable &mdash; it defines the standard everything is measured against.',
              ]}
            />

            <h2 id="when">When Evaluation Matters Most</h2>
            <p>Most brands do not evaluate packaging suppliers on a schedule. They evaluate because something broke. The packaging came back a different shade. Reorders took 14 weeks instead of 8. Costs went up 12% with no explanation. The account manager stopped returning emails.</p>
            <p>These are the five trigger events that should start a formal evaluation:</p>
            <ul>
              <li><strong>Quality degradation.</strong> Color drift, material substitution, finish inconsistency, or rising defect rates across production runs. One bad run is a conversation. A pattern across runs is a signal.</li>
              <li><strong>Capacity constraints.</strong> Your reorder timelines are stretching because the factory is overcommitted. You are competing with their other clients for press time.</li>
              <li><strong>Cost creep.</strong> Unit costs rising without a corresponding change in material prices, tariffs, or specifications. The margin is moving and nobody is explaining why.</li>
              <li><strong>Communication breakdown.</strong> Production updates require chasing. Sample revisions take weeks instead of days. Questions get answered partially or not at all.</li>
              <li><strong>Geographic concentration.</strong> Your entire packaging supply comes from one factory, one country, or one trade lane. A port disruption, tariff change, or factory closure puts everything at risk.</li>
            </ul>
            <p>If any of these is happening at volume &mdash; where packaging downtime means missed retail windows, empty DTC pages, or co-manufacturer floor holds &mdash; the evaluation is already overdue.</p>

            <h2 id="framework">The 7-Dimension Evaluation Framework</h2>
            <p>Evaluating a packaging partner is not a single conversation. It is a structured assessment across seven dimensions, each with specific evidence to request and red flags to watch for. A supplier that scores well on six and fails on one can still cost you a production run.</p>

            <h2 id="capacity">1. Capacity and Capability</h2>
            <p>Can the supplier actually produce what you need at the volume you need it?</p>
            <p><strong>What to verify:</strong></p>
            <ul>
              <li>What formats do they run? Folding cartons, rigid boxes, tubes, bottles, pouches &mdash; verify against your actual product line, not a capabilities brochure.</li>
              <li>What is their current utilization? A factory running at 95% capacity cannot absorb your reorder surge in Q4.</li>
              <li>What is their maximum run size and minimum order quantity for each format you need?</li>
              <li>Do they have the finishing equipment in-house (foil stamping, spot UV, soft-touch lamination) or do they subcontract finishes? Subcontracted finishes add lead time and reduce quality control.</li>
              <li>Have they produced for brands in your category? Beauty packaging has different tolerances, material requirements, and decoration standards than consumer electronics or food.</li>
            </ul>
            <p>The <Link href="/work/audio-enhancement-packaging-system?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=evaluation_audio_case_study">Audio Enhancement case study</Link> illustrates what happens when a product outgrows its factory: unit-to-unit consistency slipped because the existing supplier could not maintain quality at the growing volume. Logic ran a parallel qualification of a new manufacturer &mdash; one producing for global luxury brands &mdash; while maintaining supply from the original factory until the transition was complete.</p>

            <h2 id="quality">2. Quality Systems</h2>
            <p>Every packaging supplier says they do quality control. The question is whether they can describe it.</p>
            <p><strong>The three checkpoints to document:</strong></p>
            <ul>
              <li><strong>Pre-production approval.</strong> How are samples reviewed before mass production starts? Who signs off? What happens if the sample does not match the golden standard? A supplier with a documented pre-production process catches problems before they become 10,000-unit problems.</li>
              <li><strong>Inline inspection.</strong> What is checked during the production run, at what frequency, and by whom? Good programs inspect at defined intervals &mdash; every 500 units, every pallet, every color change. Poor programs inspect &ldquo;as needed.&rdquo;</li>
              <li><strong>Pre-shipment inspection.</strong> The final gate before the order ships. AQL sampling, dimensional verification, finish quality, barcode readability, pack-out configuration. If the supplier does not run a pre-shipment inspection, you are the QC department.</li>
            </ul>
            <p><strong>What &ldquo;good&rdquo; looks like:</strong> the supplier can show you a written QC plan for a recent production run, including defect categories, sampling rates, pass/fail criteria, and corrective actions taken when a check failed. If they cannot produce this document, their quality system is informal &mdash; and your defect rate will reflect that.</p>
            <p>For a deeper framework on packaging QC methodology, see the <Link href="/guides/packaging-testing-quality-control?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=evaluation_testing_guide">Packaging Testing &amp; Quality Control Guide</Link>.</p>

            <h2 id="cost">3. Cost Transparency</h2>
            <p>A packaging quote that shows one number &mdash; &ldquo;$0.85 per unit&rdquo; &mdash; is not a quote. It is a starting point that hides every cost decision underneath.</p>
            <p><strong>What a transparent quote includes:</strong></p>
            <ul>
              <li><strong>Unit cost breakdown:</strong> Material, printing, finishing, and assembly as separate line items &mdash; not one rolled-up number.</li>
              <li><strong>Tooling:</strong> One-time cost, ownership terms (who owns the tooling if you leave), and amortization across the expected volume.</li>
              <li><strong>Freight:</strong> Is the quote ex-works, FOB, CIF, or DDP? Each term changes what is included and what you pay separately.</li>
              <li><strong>Finish pricing:</strong> Foil stamping, spot UV, soft-touch lamination, embossing &mdash; priced per unit, not bundled into &ldquo;decoration.&rdquo;</li>
              <li><strong>Overrun/underrun policy:</strong> Most factories deliver within &plusmn;5 to 10% of the ordered quantity. What do you pay for the overrun? What happens if they underdeliver?</li>
              <li><strong>Sample charges:</strong> Pre-production samples, color proofs, and material tests. Some suppliers include these; some charge separately.</li>
              <li><strong>Payment terms:</strong> Deposit percentage, balance timing, net terms on reorders.</li>
            </ul>
            <p>The <Link href="/guides/cost-moq-landed-cost-planning?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=evaluation_cost_guide">Cost, MOQ &amp; Landed-Cost Planning Guide</Link> breaks down the full 7-component cost stack and includes a worksheet for comparing suppliers on landed cost &mdash; not just the factory quote.</p>

            <h2 id="communication">4. Communication and Responsiveness</h2>
            <p>This is the single biggest predictor of long-term partner quality. The evaluation phase tells you everything.</p>
            <p><strong>What to measure during the evaluation:</strong></p>
            <ul>
              <li>How fast do they respond to your initial inquiry? A supplier that takes a week to return a quote will take a week to flag a production problem.</li>
              <li>How detailed are their questions? A good partner asks clarifying questions about your specifications. A poor partner quotes whatever you sent without confirming assumptions.</li>
              <li>Do they proactively share timelines, or do you have to ask?</li>
              <li>Who is your day-to-day contact? Is it the person you are evaluating with, or will you be handed off to someone else after the deal closes?</li>
              <li>What is the escalation path when something goes wrong? A named person with authority is a better answer than &ldquo;contact customer service.&rdquo;</li>
            </ul>
            <p>During the evaluation, you are seeing the supplier at their best. If communication is slow, vague, or requires chasing during the sales process, it will not improve after you place the order.</p>

            <h2 id="compliance">5. Material Sourcing and Compliance</h2>
            <p>Regulatory requirements are tightening. The packaging partner you evaluate today needs to handle the compliance landscape of the next two to three years, not just the current spec.</p>
            <p><strong>What to verify:</strong></p>
            <ul>
              <li><strong>FSC certification:</strong> Can they source FSC-certified board and paper? Is the chain-of-custody documentation available?</li>
              <li><strong>FDA compliance:</strong> For beauty and personal care, packaging materials must meet FDA requirements for contact with cosmetic formulations.</li>
              <li><strong>SB 54 readiness:</strong> California&rsquo;s SB 54 increases the compliance burden on packaging producers. Can the supplier provide material composition data, recyclability documentation, and recycled-content verification?</li>
              <li><strong>PCR availability:</strong> Can they source post-consumer recycled content at the percentages your brand requires? At what cost premium? With what lead time?</li>
              <li><strong>Sustainability certifications:</strong> How2Recycle, RecyClass, Cradle to Cradle &mdash; does the supplier have experience navigating third-party certification processes?</li>
            </ul>
            <p>The <Link href="/guides/sustainable-beauty-packaging?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=evaluation_sustainability_guide">Sustainable Beauty Packaging Playbook</Link> covers the full compliance landscape and helps you evaluate whether a supplier&rsquo;s sustainability claims hold up under scrutiny.</p>

            <h2 id="logistics">6. Logistics and Fulfillment</h2>
            <p>A packaging partner is not just a manufacturer. At volume, logistics capability determines whether your packaging arrives when you need it or when the factory gets around to it.</p>
            <p><strong>What to evaluate:</strong></p>
            <ul>
              <li><strong>US warehouse capability:</strong> Do they maintain warehouse space in the US? A domestic warehouse means 3 to 7 day replenishment instead of 30 to 60 day ocean freight cycles.</li>
              <li><strong>Kitting and assembly:</strong> Can they assemble multi-component kits, insert products, and pack finished units? Or does that require a separate fulfillment provider?</li>
              <li><strong>DTC shipping:</strong> Can they ship individual orders direct to consumers, or only palletized shipments to a warehouse?</li>
              <li><strong>Retail distribution:</strong> Can they handle retailer-specific requirements &mdash; case-pack configurations, master-carton labeling, pallet patterns, ASN documentation?</li>
              <li><strong>Inventory management:</strong> Will they hold buffer stock? At what cost? Under what terms? A partner that holds 90 days of inventory and replenishes on a 7-day cycle is in a fundamentally different category than one that ships only after a PO is placed.</li>
            </ul>
            <p>The <Link href="/work/epicutis?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=evaluation_epicutis_case_study">Epicutis case study</Link> shows this model at scale: Logic manages packaging inventory out of our Salt Lake City warehouse, providing 7-day replenishment to the co-manufacturer &mdash; eliminating the 30 to 60 day ocean freight dependency and the emergency air freight charges that came with it.</p>

            <h2 id="stability">7. Financial Stability and Continuity</h2>
            <p>The cheapest supplier is a bad deal if they close, lose their factory lease, or cannot fund the raw materials for your next order.</p>
            <p><strong>What to assess:</strong></p>
            <ul>
              <li><strong>Track record:</strong> How long have they been in business? How long have they served clients in your category?</li>
              <li><strong>References:</strong> Can they provide 2 to 3 references from brands at similar volume? Call them. Ask about reorder consistency, not just the first run.</li>
              <li><strong>Credit extension:</strong> Can they front packaging procurement so your production timing is driven by the launch calendar, not by cash flow cycles? This is a signal of financial stability and commitment to the relationship.</li>
              <li><strong>Inventory willingness:</strong> Will they hold stock? A supplier willing to carry inventory on your behalf has confidence in the relationship&rsquo;s continuity.</li>
              <li><strong>Ownership and management:</strong> Is this a family business, a PE-backed platform, or a factory direct? Each model has different continuity risk profiles.</li>
            </ul>

            <h2 id="transition">The Transition Plan</h2>
            <p>Changing packaging suppliers mid-production is one of the highest-risk operations a brand can undertake. The risk is not that you cannot find a better supplier. The risk is the gap between the old supplier stopping and the new supplier delivering at quality.</p>
            <p><strong>The parallel qualification approach:</strong></p>
            <ol>
              <li><strong>Specification transfer.</strong> Document every material spec, finish spec, dimensional tolerance, color standard (PMS, ΔE), closure torque, and pack-out configuration. If these live in email threads instead of a specification document, start there.</li>
              <li><strong>Golden-sample creation.</strong> Ship your approved golden sample to the new supplier. They produce against it. You inspect the result against the same standard the original supplier was held to.</li>
              <li><strong>First-article inspection.</strong> The new supplier produces a small run (typically 100 to 500 units) for full inspection. Compare against the golden sample across every dimension: color, weight, finish, print registration, closure fit, pack-out.</li>
              <li><strong>Production qualification.</strong> A full production run at the target volume. Pre-production, inline, and pre-shipment QC on the new supplier while the existing supplier continues filling current orders.</li>
              <li><strong>Cutover.</strong> Once the new supplier&rsquo;s production is approved and inventory is staged, shift reorder flow. Maintain the existing supplier relationship as a backup for one to two reorder cycles.</li>
            </ol>
            <p>The <Link href="/work/audio-enhancement-packaging-system?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=evaluation_audio_transition">Audio Enhancement factory transition</Link> demonstrates this approach. When the product outgrew the original factory, Logic ran two operations simultaneously &mdash; a QC containment team on existing inventory and a full factory transition to a manufacturer producing for global luxury brands. No gap in supply, no missed shipments.</p>
            <p>The <Link href="/work/artilect-packaging-reduction?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=evaluation_artilect_transition">Artilect case study</Link> shows the format-transition variation: a 3-phase program that moved from premium rigid box to engineered folding carton, delivering 20% cost reduction and 95% material reduction while preserving brand signal at every phase.</p>

            <h2 id="red-flags">Red Flags in Supplier Evaluation</h2>
            <p>Every packaging supplier presents well during the sales process. These are the signals that the reality will not match the pitch:</p>
            <ul>
              <li><strong>&ldquo;We can do anything.&rdquo;</strong> A supplier with genuine capability will tell you what they specialize in and where their limits are. A supplier that claims to do everything well does nothing distinctively.</li>
              <li><strong>Reluctance to share factory location or allow audits.</strong> If you cannot visit the factory or send a third-party inspector, you do not know where your packaging is being made.</li>
              <li><strong>No documented QC process.</strong> If quality control cannot be described in specific terms &mdash; sampling rates, inspection frequency, defect categories, corrective action protocol &mdash; it does not exist as a system.</li>
              <li><strong>No reference customers in your category.</strong> A factory that produces corrugated shipping boxes is not qualified to produce premium beauty packaging. Category experience matters.</li>
              <li><strong>Pricing dramatically below market.</strong> If one supplier quotes 40% below the others, they are not more efficient. They are using lighter materials, skipping finishes, or planning to renegotiate after the tooling deposit.</li>
              <li><strong>Vague timelines.</strong> &ldquo;About 8 to 10 weeks&rdquo; is not a production schedule. A qualified supplier gives you a phase-by-phase timeline with specific milestones.</li>
              <li><strong>Unwillingness to provide tooling ownership documentation.</strong> If you pay for the tooling, you own it. If the supplier will not confirm this in writing, you may lose the tooling if the relationship ends.</li>
            </ul>

            <h2 id="scorecard">The Evaluation Scorecard</h2>
            <p>Use this framework to compare suppliers side by side. Each dimension should be scored based on evidence &mdash; documentation provided, references checked, samples inspected &mdash; not on the supplier&rsquo;s self-assessment.</p>

            <div style={{ overflowX: 'auto', margin: '24px 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--navy)', textAlign: 'left' }}>
                    <th style={{ padding: '10px 12px', fontWeight: 600 }}>Dimension</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600 }}>Key evidence to request</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600 }}>Pass criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--bg2)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 500 }}>Capacity</td>
                    <td style={{ padding: '10px 12px' }}>Format list, current utilization, max run size, in-house finishing equipment</td>
                    <td style={{ padding: '10px 12px' }}>Runs your formats at your volume with finishing in-house</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--bg2)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 500 }}>Quality</td>
                    <td style={{ padding: '10px 12px' }}>Written QC plan from a recent run, defect categories, corrective actions</td>
                    <td style={{ padding: '10px 12px' }}>Three documented checkpoints: pre-production, inline, pre-shipment</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--bg2)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 500 }}>Cost</td>
                    <td style={{ padding: '10px 12px' }}>Line-item quote, tooling ownership terms, freight terms, overrun policy</td>
                    <td style={{ padding: '10px 12px' }}>Landed-cost breakdown with no bundled line items</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--bg2)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 500 }}>Communication</td>
                    <td style={{ padding: '10px 12px' }}>Response time during evaluation, clarifying questions asked, named contact</td>
                    <td style={{ padding: '10px 12px' }}>Replies within 24 hours, asks specification questions, names the day-to-day contact</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--bg2)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 500 }}>Compliance</td>
                    <td style={{ padding: '10px 12px' }}>FSC chain-of-custody, FDA documentation, PCR sourcing, SB 54 data</td>
                    <td style={{ padding: '10px 12px' }}>Provides material composition and recyclability data on request</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--bg2)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 500 }}>Logistics</td>
                    <td style={{ padding: '10px 12px' }}>US warehouse location, kitting capability, retail-readiness experience</td>
                    <td style={{ padding: '10px 12px' }}>Can stage inventory domestically and fulfill to retail or DTC</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--bg2)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 500 }}>Stability</td>
                    <td style={{ padding: '10px 12px' }}>Years in business, 2&ndash;3 category references, credit terms, inventory terms</td>
                    <td style={{ padding: '10px 12px' }}>Verifiable references from brands at similar volume</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Score each dimension as <strong>strong</strong>, <strong>acceptable</strong>, or <strong>gap</strong>. A supplier with gaps in quality or communication should not advance regardless of cost. A supplier with a logistics gap may still qualify if you have separate fulfillment infrastructure.</p>

            <section className="sources-section">
              <h2>Related guides and references</h2>
              <p className="sources-lede">Supplier evaluation is one component of a packaging program&rsquo;s operating discipline. These guides cover the adjacent systems that determine whether the partnership succeeds at scale.</p>
              <ul className="sources-list">
                <li><Link href="/guides/packaging-testing-quality-control">Packaging Testing &amp; Quality Control Guide</Link> &mdash; the QC framework that defines what &ldquo;good&rdquo; looks like across pre-production, inline, and pre-shipment inspection.</li>
                <li><Link href="/guides/cost-moq-landed-cost-planning">Cost, MOQ &amp; Landed-Cost Planning Guide</Link> &mdash; the landed-cost model for comparing supplier quotes on an apples-to-apples basis.</li>
                <li><Link href="/guides/concept-to-shelf-timeline">Concept-to-Shelf Timeline Guide</Link> &mdash; the production calendar that a supplier transition must protect.</li>
                <li><Link href="/guides/packaging-at-scale">Packaging at Scale Guide</Link> &mdash; what changes when production volume grows beyond the capacity of a single supplier relationship.</li>
                <li><Link href="/work/epicutis">Epicutis case study</Link> &mdash; a managed program at scale: 21+ SKUs, 7-day replenishment, 15% verified cost savings.</li>
                <li><Link href="/work/audio-enhancement-packaging-system">Audio Enhancement case study</Link> &mdash; a factory transition executed without missing a shipment.</li>
                <li><Link href="/work/artilect-packaging-reduction">Artilect packaging reduction</Link> &mdash; a 3-phase supplier and format transition delivering 20% cost and 95% material reduction.</li>
                <li><Link href="/packaging-audit">Packaging audit</Link> &mdash; a structured program review that identifies where your current supplier relationship is working and where it needs to change.</li>
              </ul>
            </section>

            <GuideBottomLine>The best packaging partner is not the cheapest, the fastest, or the one with the slickest pitch deck. It is the one that can produce your packaging consistently at your volume, communicate proactively when problems arise, and prove both of those claims with documentation and references &mdash; not just promises.</GuideBottomLine>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Common questions brands ask when evaluating a new packaging partner or planning a supplier transition. For the deeper quality, cost, and logistics detail, start with the related guides above.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Evaluating a Packaging Partner"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Supplier Evaluation"
          />
        </div>
      </section>

      <section className="guide-cta">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--white)' }}>Evaluating a new packaging partner?</h3>
          <p>We help brands at volume qualify, transition, and manage packaging suppliers &mdash; and run the QC, inventory, and logistics systems that make the partnership work at scale.</p>
          <button type="button" className="bi" onClick={() => openModal('Guide - Supplier Evaluation', 'guide-bottom-cta')} style={{ background: 'var(--lime)', color: 'var(--navy)' }}>Discuss Your Program</button>
        </div>
      </section>
    </>
  )
}
