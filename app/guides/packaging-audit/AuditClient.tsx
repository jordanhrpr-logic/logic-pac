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
  { id: 'definition', label: 'What a packaging audit is' },
  { id: 'triggers', label: 'The 5 triggers for an audit' },
  { id: 'dimensions', label: 'The 7 audit dimensions' },
  { id: 'methodology', label: 'Audit methodology' },
  { id: 'findings', label: 'The findings that recur' },
  { id: 'deliverables', label: 'Deliverables & report structure' },
  { id: 'timeline', label: 'Timeline, scope & pricing framing' },
  { id: 'checklist', label: 'Should-I-request-an-audit scorecard' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'How is a packaging audit different from a QC inspection?',
    answer: 'A QC inspection confirms a specific production run matches a specific written spec — pass or fail against defined acceptance criteria. A packaging audit asks whether the spec itself is the right one, and whether the surrounding system (compliance, cost, retail readiness, sustainability, system coherence) holds up. QC is run-level. Audit is program-level. Both matter; they answer different questions.',
  },
  {
    question: 'Do I need a packaging audit before every launch?',
    answer: 'Not every launch, but every major one — and every time one of the five triggers is active (new retailer PO, SB 54 or EU PPWR deadline, cost pressure, launch planning for a new SKU family, or a post-launch defect or chargeback). For incremental line extensions inside an existing design system that has already been audited, a lighter-weight component review usually covers the ground.',
  },
  {
    question: 'Can we run the audit ourselves internally?',
    answer: 'For some dimensions, yes. The retail-readiness and sustainability dimensions have on-page scorecards in our retail and sustainability guides that most brand teams can self-run. The dimensions where internal teams typically miss findings are compliance (framework overlap is hard to track without a current reference), cost (landed cost is rarely modeled correctly from the inside), and system coherence (the design-system view is easier to see from outside). Most brands run a hybrid: self-audit on dimensions they feel confident in, and outside audit on the rest.',
  },
  {
    question: 'What does Logic Pac deliver when you run an audit?',
    answer: 'A written report structured by the seven audit dimensions, each with a findings list, severity rating, prioritized action register, and the Logic Pac recommendation. Scope varies by program — for a single-SKU audit the report is tighter; for a multi-SKU design-system audit the report includes component-level findings for each SKU. We include supporting evidence (photos, measurements, document references) and name the specific guide spoke that covers the deep work on each finding.',
  },
  {
    question: 'How long does a packaging audit take?',
    answer: 'A single-SKU audit focused on one or two dimensions typically runs 2–4 weeks from brief to delivered report. A full seven-dimension audit on a multi-SKU program runs 4–6 weeks. The brand-side effort is lighter than most teams expect — we handle the measurement, supplier documentation review, and framework mapping; the brand provides the inventory, access to supplier contacts, and the launch calendar.',
  },
  {
    question: 'Is the audit a sales pitch?',
    answer: 'No. The audit is a defined deliverable with its own scope and output, and we deliver the report whether or not the brand decides to work with us on execution. Most audits do surface work we are qualified to execute — and we quote that work separately as a next step. The audit itself is not conditional on hiring us for implementation.',
  },
]

export default function AuditClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
  const [checked, setChecked] = useState<Record<string, boolean>>({})
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

  const checklistItems = [
    { id: 'a1', title: 'A new retailer PO is landing in the next 90 days', body: 'First-shipment chargebacks are predictable but preventable. An audit before the first PO ships catches barcode grade, master-carton, labeling, and routing issues while there is still time to fix them.' },
    { id: 'a2', title: 'An SB 54, EU PPWR, or MoCRA deadline is on the calendar', body: 'The deadlines are known. The exposure is per-SKU and per-component. An audit maps your current pack against the specific obligations that apply before an enforcement letter or retailer questionnaire forces the mapping.' },
    { id: 'a3', title: 'Cost pressure is forcing a redesign discussion', body: 'An audit that models landed cost per component (not just factory unit cost) usually finds 10–25% in savings without touching the brand look — through spec re-engineering, consolidation, freight-mode selection, or supplier reroute.' },
    { id: 'a4', title: 'You are launching a new SKU family or line extension', body: 'An audit catches the system drift that happens when a new launch inherits only parts of the existing design system — and formalizes the system before the launch locks in another one-off.' },
    { id: 'a5', title: 'A recent run produced defects, reprints, or chargebacks', body: 'A post-event audit does the root-cause analysis, writes the acceptance criteria that should have existed, and prevents the pattern from recurring on the next run.' },
    { id: 'a6', title: 'You cannot produce a current spec on request', body: 'If a retailer, investor, or regulator asked for the written spec on your lead SKU, could you produce it within 24 hours — with tolerances, materials by supplier, finish stack, and acceptance criteria? If not, the audit is also the spec-building workstream.' },
    { id: 'a7', title: 'Supplier documentation is scattered across emails', body: 'CoAs, FSC chain-of-custody, PCR certifications, migration test reports, Prop 65 letters — if they live in email threads rather than one versioned folder, the audit centralizes them.' },
    { id: 'a8', title: 'The brand is scaling into new markets', body: 'EU, UK, Canada, each major LATAM/APAC market — each is its own compliance stack. An audit maps the current pack against each target market before the first registration starts.' },
    { id: 'a9', title: 'An investor diligence process is likely in the next 12 months', body: 'Investor diligence routinely surfaces supplier concentration, compliance gaps, and cost opacity that could have been resolved in a quiet audit cycle before the data room opened.' },
    { id: 'a10', title: 'You just hired a new ops lead or packaging manager', body: 'An audit is the fastest way to transfer institutional knowledge about the pack — current spec, supplier roster, compliance posture, cost structure — to a new owner without rebuilding the context from zero.' },
  ]
  const progress = Math.round((Object.values(checked).filter(Boolean).length / checklistItems.length) * 100)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Packaging Audit</div>
        <h1>The <em>packaging audit</em> guide.</h1>
        <p>A packaging audit is the structured review that answers a specific question: is this pack ready for the next thing — the retailer PO, the compliance deadline, the cost pressure, the launch, the market expansion, the investor diligence? This guide explains what an audit is, when to request one, the seven dimensions it should cover, the methodology, the deliverables, and the pattern of findings that recurs across beauty packaging programs.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>15 min read</span>
          <span>Updated October 2026</span>
          <span>Service &amp; Methodology</span>
        </div>
      </div>

      <div className="guide-wrap audit-guide">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="What is a packaging audit?"
              answer="A packaging audit is a structured, deliverable-backed review of a packaging program against seven dimensions — structural and material integrity, cost and landed economics, compliance and claims, retail readiness, QC and run-to-sample conformity, sustainability posture, and system coherence across SKUs. The output is a written report with findings, severity ratings, a prioritized action register, and the recommended path forward. It is not a sales conversation and not a design critique."
              takeaways={[
                'An audit is a defined deliverable with a written report, not an open-ended conversation.',
                'Seven dimensions cover the full packaging program; most audits scope to the two or three that are driving the trigger.',
                'The audit surfaces findings; execution is quoted separately and is not conditional.',
                'A single-SKU audit typically runs 2–4 weeks; a full multi-SKU program audit runs 4–6 weeks.',
              ]}
            />

            <h2 id="definition"><span className="num">01.</span>What a packaging audit is — and what it is not</h2>
            <p>A packaging audit is a structured review of a packaging program against defined criteria, producing a written report with findings, severity ratings, and a prioritized action register. The scope can be a single SKU, a line family, or a full program. The dimensions covered can be any subset of the seven below, or all of them. The output is always the same: a document the brand can act on, share internally, and reference against future decisions.</p>

            <h3>What a packaging audit is not</h3>
            <ul>
              <li><strong>Not a QC inspection.</strong> QC confirms a production run matches a written spec. An audit asks whether the spec is the right one.</li>
              <li><strong>Not a sales pitch.</strong> The report gets delivered whether or not the brand hires the auditor for execution.</li>
              <li><strong>Not a design critique.</strong> The audit evaluates the pack against commercial, operational, regulatory, and system criteria — not against aesthetic preference.</li>
              <li><strong>Not an open-ended conversation.</strong> The scope is defined in advance; the deliverable is defined in advance; the timeline is defined in advance.</li>
            </ul>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>Definition of a packaging audit and what it is not</li>
                <li>The five triggers that make an audit the right next step</li>
                <li>The seven audit dimensions and how they interact</li>
                <li>Audit methodology — what we actually do, in what order</li>
                <li>The findings that recur across most beauty packaging audits</li>
                <li>Deliverables — report structure, severity rating, action register</li>
                <li>Timeline, scope, and how pricing is framed</li>
                <li>A 10-item scorecard: should I request an audit now?</li>
              </ol>
            </div>

            <Image src="/images/guides/packaging-audit/hero-audit.jpg" alt="A packaging audit inspection — pre-production sample measured against written specification with photographic evidence" width={1600} height={1600} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="triggers"><span className="num">02.</span>The five triggers for an audit</h2>
            <p>Most packaging audits land in one of five situations. If any of these apply, the audit is almost always the right next step before committing to tooling, print, or production.</p>

            <h3>Trigger 1 — A new retailer PO is landing</h3>
            <p>First retail launches generate predictable chargebacks because the vendor-manual review, barcode grade testing, master-carton configuration, and EDI setup are easier to handle in parallel than reactively. An audit before the first PO ships catches these in time to prevent the deduction. See the <Link href="/guides/retail-ready-beauty-packaging">Retail-Ready Beauty Packaging guide</Link> for the operational detail.</p>

            <h3>Trigger 2 — A compliance deadline is on the calendar</h3>
            <p>SB 54, EU PPWR, and MoCRA each have known compliance windows. The exposure is per-SKU and per-component — which means it is predictable only if you have mapped it. An audit does the mapping before an enforcement letter or retailer sustainability questionnaire forces it. See the <Link href="/guides/beauty-packaging-claims-compliance">Beauty Packaging Claims &amp; Compliance guide</Link> for the framework overview.</p>

            <h3>Trigger 3 — Cost pressure is forcing a redesign discussion</h3>
            <p>When a CFO or ops lead starts asking why packaging cost is where it is, the common pattern is a reactive redesign that cuts the wrong things. An audit models landed cost per component (not just factory unit cost) and routinely surfaces 10–25% in savings through spec re-engineering, supplier reroute, freight-mode selection, or consolidation — without touching the brand look. See the <Link href="/guides/cost-moq-landed-cost-planning">Cost, MOQ &amp; Landed-Cost Planning guide</Link> for the modeling framework.</p>

            <h3>Trigger 4 — A new SKU family or line extension is launching</h3>
            <p>Launches that extend an existing line often inherit only parts of the current design system — and formalize the drift. An audit catches the system drift and formalizes the design system before the new launch locks another one-off. See the <Link href="/guides/beauty-brand-packaging-design-system">Beauty Brand Packaging Design System guide</Link> for the system view.</p>

            <h3>Trigger 5 — A defect, reprint, or chargeback event</h3>
            <p>After a quality or compliance event, an audit does the root-cause analysis, writes the acceptance criteria that should have existed, and prevents the pattern from recurring. See the <Link href="/guides/packaging-testing-quality-control">Packaging Testing &amp; Quality Control guide</Link> for the written-spec and run-to-sample discipline the audit backfills into.</p>

            <div className="callout">
              <p><strong>Timing note.</strong> The best time to run an audit is 4–8 weeks before the deadline the trigger is tied to — enough runway to surface findings and resolve them, not so much that the findings go stale. Audits run in the week before a PO ships rarely produce actionable change in time.</p>
            </div>

            <h2 id="dimensions"><span className="num">03.</span>The seven audit dimensions</h2>
            <p>A full-scope audit covers seven dimensions. Most audits scope to the two or three driving the trigger. Each dimension produces its own findings list and severity rating, and each routes to a Logic Pac guide spoke for the deep operational detail.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Audit question</th>
                    <th>Spoke</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Structural &amp; material integrity</td><td>Does the pack protect the product, hold tolerances, and perform in the shipping lane?</td><td>Material Decision Framework; Testing &amp; QC</td></tr>
                  <tr><td>Cost &amp; landed economics</td><td>Is the real landed cost known, modeled, and defensible against reasonable alternatives?</td><td>Cost, MOQ &amp; Landed-Cost Planning</td></tr>
                  <tr><td>Compliance &amp; claims</td><td>Which frameworks apply, where are the gaps, and what documentation exists?</td><td>Claims &amp; Compliance; Sustainable Playbook</td></tr>
                  <tr><td>Retail readiness</td><td>Can the pack ship clean through the retailer’s DC without chargebacks?</td><td>Retail-Ready Beauty Packaging</td></tr>
                  <tr><td>QC &amp; run-to-sample conformity</td><td>Can the production run reliably match the approved sample?</td><td>Testing &amp; QC</td></tr>
                  <tr><td>Sustainability posture</td><td>Which sustainability levers are being used, and are the claims defensible?</td><td>Sustainable Playbook; Decision Matrix</td></tr>
                  <tr><td>System coherence</td><td>Does the pack reinforce the brand across SKUs, or does each launch reinvent?</td><td>Beauty Brand Packaging Design System</td></tr>
                </tbody>
              </table>
            </div>

            <figure className="guide-images-grid">
              <Image src="/images/guides/packaging-audit/component-check.jpg" alt="Component-level fit and function inspection during a packaging audit" width={1600} height={1600} sizes="(max-width: 960px) 100vw, 475px" />
              <Image src="/images/guides/packaging-audit/system-audit.jpg" alt="Multi-SKU program audit showing the full packaging family in one composed view" width={1600} height={1200} sizes="(max-width: 960px) 100vw, 475px" />
            </figure>
            <p className="guide-img-caption">A single-SKU audit (left) focuses on fit, function, and conformity for one pack; a program audit (right) reviews the full SKU family for cost, compliance, system coherence, and retail readiness.</p>

            <h2 id="methodology"><span className="num">04.</span>Audit methodology — what we actually do, in order</h2>
            <p>The audit methodology is the same regardless of scope. The depth per dimension scales with the trigger. The order rarely changes.</p>

            <h3>Phase 1 — Scope &amp; intake (Week 1)</h3>
            <ul>
              <li>Scope conversation: which dimensions, which SKUs, which trigger, which deadline.</li>
              <li>Written scope document and audit plan — signed before any work begins.</li>
              <li>Access setup: supplier contact list, current spec documents, existing certifications, latest production samples, recent QC reports, invoice history for landed-cost modeling.</li>
            </ul>

            <h3>Phase 2 — Evidence gathering (Weeks 1–3)</h3>
            <ul>
              <li>Physical sample pulls — current production run inspected against the written spec (or the retroactive spec reconstruction if no current spec exists).</li>
              <li>Supplier documentation review — CoAs, FSC chain-of-custody, PCR certifications, migration tests, Prop 65 letters, routing guides, vendor manuals.</li>
              <li>Measurement — critical dimensions, finishes, closure resistance, insert tolerances, barcode grade on the production substrate.</li>
              <li>Framework mapping — current pack against each regulatory framework in scope (SB 54, PPWR, FTC Green Guides, Prop 65, MoCRA, as applicable).</li>
              <li>Landed-cost modeling — unit cost, tooling, freight, duties, warehousing, defect reserve, over-order buffer.</li>
            </ul>

            <h3>Phase 3 — Findings synthesis (Weeks 3–4)</h3>
            <ul>
              <li>Findings list per dimension with evidence citation (photos, documents, measurements).</li>
              <li>Severity rating per finding (critical / major / minor — same classification as the QC guide).</li>
              <li>Action register with ownership and effort estimate per action.</li>
              <li>Prioritization against the trigger’s deadline.</li>
            </ul>

            <h3>Phase 4 — Report delivery &amp; walkthrough (Week 4+)</h3>
            <ul>
              <li>Written report delivered as a PDF with embedded evidence.</li>
              <li>60-minute walkthrough with the brand team to discuss findings, severity, and the action register.</li>
              <li>Quote for execution of the actions Logic Pac is positioned to run — separate from the audit, non-conditional.</li>
            </ul>

            <h2 id="findings"><span className="num">05.</span>The findings that recur across beauty audits</h2>
            <p>Different packs produce different findings, but the pattern of what recurs across audits is remarkably consistent. If you have not been audited recently, assume at least three of the below apply to your program.</p>

            <ul>
              <li><strong>No current written specification exists.</strong> The brand knows what the pack looks like; the production floor has a verbal history of what to do; no one has a document that could be handed to a new supplier.</li>
              <li><strong>Supplier documentation is scattered across email threads.</strong> CoAs, FSC letters, PCR verifications, migration tests. Each exists somewhere. None is in one versioned folder.</li>
              <li><strong>Landed cost has never been modeled.</strong> Factory unit cost is known. Tooling amortization, freight-mode selection, warehousing, defect reserve, over-order carry — not modeled, often not even separately tracked.</li>
              <li><strong>Compliance mapping is incomplete.</strong> SB 54 has been considered. PPWR might apply but is unmapped. Prop 65 was checked once at launch and has not been re-verified. MoCRA registration is current but no one is sure.</li>
              <li><strong>Design system drift between SKUs.</strong> Hero SKU uses one carton weight, one finish stack, one insert. Line extensions each used a slightly different vendor and slightly different spec. The family no longer reads as one brand on shelf.</li>
              <li><strong>Barcode grade has never been verified on production substrate.</strong> A proof was approved. No one scanned the actual production carton with a verifier.</li>
              <li><strong>Insert tolerances have drifted.</strong> First-run molded trays held the pack firmly. Current-run trays are slightly loose because the mold was re-cut without updated specs.</li>
              <li><strong>One supplier concentration is higher than the brand realized.</strong> A single-source component carries 100% of a critical SKU and no second source has been qualified.</li>
            </ul>

            <div className="callout">
              <p><strong>Why this pattern repeats.</strong> Each of these is the predictable outcome of growing fast on packaging decisions made at launch without a review cycle. None of them are character failures of the brand team. All of them are the exact problems a packaging audit exists to find, document, and route to a resolution path.</p>
            </div>

            <h2 id="deliverables"><span className="num">06.</span>Deliverables &amp; report structure</h2>
            <p>Every audit produces the same artifact: a written report structured by the dimensions in scope. The depth per dimension scales with the trigger, but the structure holds.</p>

            <h3>Report structure</h3>
            <ol>
              <li><strong>Executive summary.</strong> One page. The three to five most important findings and the recommended next steps.</li>
              <li><strong>Scope &amp; methodology.</strong> What was audited, which dimensions, what evidence was gathered, what was explicitly out of scope.</li>
              <li><strong>Dimension findings.</strong> One section per dimension in scope. Each finding gets a plain-language summary, evidence citation (photo, document, or measurement), severity rating, and recommended action.</li>
              <li><strong>Prioritized action register.</strong> Every finding’s action rolled into one register, prioritized by severity and by the trigger’s deadline. Columns: finding ID, action, owner, effort estimate, by-when.</li>
              <li><strong>Logic Pac recommendation.</strong> The subset of actions Logic Pac is positioned to execute, with a scope-of-work pointer. Non-conditional on the brand hiring Logic Pac for implementation.</li>
              <li><strong>Appendices.</strong> Evidence photos, document references, measurement tables, framework-mapping worksheets, landed-cost model (if in scope).</li>
            </ol>

            <h3>Severity rating</h3>
            <p>Same three-class system as the QC guide:</p>
            <ul>
              <li><strong>Critical.</strong> Will cause a chargeback, enforcement action, retail rejection, or production stop. Must be fixed before the next shipment or launch.</li>
              <li><strong>Major.</strong> Material cost or risk exposure that should be fixed inside the current planning cycle.</li>
              <li><strong>Minor.</strong> Improvement opportunity with limited immediate exposure — queue for the next planning cycle.</li>
            </ul>

            <Image src="/images/guides/packaging-audit/retail-audit.jpg" alt="A shelf-ready display evaluated against retailer vendor manual and planogram during a packaging audit" width={1600} height={900} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="timeline"><span className="num">07.</span>Timeline, scope &amp; pricing framing</h2>

            <h3>Timeline</h3>
            <p>Audit timeline scales with scope:</p>
            <ul>
              <li><strong>Single-SKU audit, 1–2 dimensions:</strong> 2–3 weeks from brief to report.</li>
              <li><strong>Single-SKU audit, full seven dimensions:</strong> 3–4 weeks.</li>
              <li><strong>Multi-SKU program audit (3–10 SKUs):</strong> 4–6 weeks.</li>
              <li><strong>Multi-SKU program audit (10+ SKUs or multi-market):</strong> 6–8 weeks.</li>
            </ul>

            <h3>Scope flexibility</h3>
            <p>Most audits scope to the two or three dimensions tied to the trigger. A compliance-driven audit might only touch Compliance &amp; Claims and Sustainability Posture. A pre-retail audit scopes to Retail Readiness, Compliance, and QC. A cost-pressure audit scopes to Cost &amp; Landed Economics, Structural &amp; Material Integrity, and System Coherence. Full seven-dimension audits are common when the trigger is a new line launch, an investor diligence process, or a new ops lead taking ownership.</p>

            <h3>Pricing framing</h3>
            <p>Audits are quoted per scope — not per unit, not per hour. The quote reflects the number of dimensions, the number of SKUs, and the depth of evidence gathering required. Simple scopes are low four-figure engagements; full multi-SKU multi-dimension programs sit higher. The pricing framing matters because: (a) the audit is a defined deliverable with its own value, independent of execution; (b) the quote covers evidence gathering and report synthesis — not implementation; (c) implementation work surfaced in the audit is quoted separately, as a next-step scope the brand is free to accept or run elsewhere. Reach out to discuss scope and we will scope an audit against your trigger and timeline.</p>

            <div className="callout">
              <p><strong>What the audit buys.</strong> The direct output is the report. The indirect output is usually larger: documented spec, centralized supplier evidence, mapped compliance posture, modeled landed cost, and a prioritized backlog the brand can act on with or without the auditor. Programs that run a cycle of audit → action → audit tend to compound improvement over time; programs that only audit reactively tend to repeat the same findings.</p>
            </div>

            <GuideBottomLine>
              A packaging audit is the structured review that converts packaging anxiety into packaging decisions. Seven dimensions, measurable evidence, a written report, a prioritized action register, and a recommendation — all delivered on a defined scope and timeline. The right time to request one is 4–8 weeks before the deadline that is driving the trigger. Logic Pac runs audits on single SKUs and multi-SKU programs across beauty, cosmetics, fragrance, and luxury goods. The audit is a defined deliverable, not a sales conversation — and the report is yours whether you hire us for implementation or not.
            </GuideBottomLine>

            <h2 id="checklist"><span className="num">08.</span>Should I request an audit? A 10-item scorecard</h2>
            <p>If three or more of the following apply, the audit is almost certainly the right next step. If five or more apply, request the audit now — the longer it waits, the smaller the actionable window becomes.</p>

            <div className="checklist-wrap">
              <div className="checklist-progress">
                <div className="checklist-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />
                <span>{Object.values(checked).filter(Boolean).length} of {checklistItems.length} apply &middot; {progress}%</span>
              </div>
              <ul className="checklist">
                {checklistItems.map((item, idx) => (
                  <li key={item.id} className={checked[item.id] ? 'checked' : ''}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!checked[item.id]}
                        onChange={() => setChecked(c => ({ ...c, [item.id]: !c[item.id] }))}
                      />
                      <span className="checklist-num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="checklist-body">
                        <strong>{item.title}</strong>
                        <span className="checklist-desc">{item.body}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <section className="sources-section">
              <h2>Related guides and references</h2>
              <p className="sources-lede">Each audit dimension routes to a Logic Pac guide for the operational depth. These are the primary spokes referenced in the sections above.</p>
              <ul className="sources-list">
                <li><Link href="/guides/retail-ready-beauty-packaging">Retail-Ready Beauty Packaging</Link> — the operational layer for the Retail Readiness dimension.</li>
                <li><Link href="/guides/beauty-packaging-claims-compliance">Beauty Packaging Claims &amp; Compliance</Link> — the orientation layer for the Compliance dimension.</li>
                <li><Link href="/guides/cost-moq-landed-cost-planning">Cost, MOQ &amp; Landed-Cost Planning</Link> — the modeling layer for the Cost dimension.</li>
                <li><Link href="/guides/beauty-brand-packaging-design-system">Beauty Brand Packaging Design System</Link> — the system view for the Coherence dimension.</li>
                <li><Link href="/guides/packaging-testing-quality-control">Packaging Testing &amp; Quality Control</Link> — the specification and conformity layer for the QC dimension.</li>
                <li><Link href="/guides/sustainable-packaging-decision-matrix">Sustainable Packaging Decision Matrix</Link> — the lever-scoring layer for the Sustainability dimension.</li>
                <li><Link href="/guides/sustainable-beauty-packaging">Sustainable Beauty Packaging Playbook</Link> — the claims hygiene framework referenced in the Compliance dimension.</li>
                <li><Link href="/guides/material-decision-framework">Beauty Packaging Material Decision Framework</Link> — the material fit layer for the Structural dimension.</li>
                <li><Link href="/guides/luxury-beauty-packaging-system">Luxury Beauty Packaging System</Link> — the full system view for luxury-tier program audits.</li>
                <li><Link href="/capabilities">Logic Pac capabilities</Link> — the service set that executes the actions a packaging audit surfaces.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Common questions brand managers and ops leads ask when they first consider requesting a packaging audit.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Requesting a Packaging Audit"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Packaging Audit"
          />
        </div>
      </section>
    </>
  )
}
