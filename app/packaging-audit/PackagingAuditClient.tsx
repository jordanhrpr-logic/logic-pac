'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const dimensions = [
  { num: '01', title: 'Structural Integrity', desc: 'Board caliper, closure engineering, insert fit, transit protection, and whether the structure can survive the supply chain it ships through.' },
  { num: '02', title: 'Compliance & Regulatory', desc: 'SB 54, EU PPWR, FTC Green Guides, Prop 65, MoCRA, retailer-specific requirements. Mapped against every market the product ships into.' },
  { num: '03', title: 'Cost & Landed Economics', desc: 'Unit cost, tooling amortization, freight mode, dimensional weight, warehousing, and the total landed cost most brands never calculate.' },
  { num: '04', title: 'Retail Readiness', desc: 'Barcode grade, case pack configuration, master carton specs, planogram fit, and the retailer documentation that has to be right before the first PO ships.' },
  { num: '05', title: 'Sustainability & Claims', desc: 'PCR content verification, recyclability in practice, FSC chain-of-custody, and whether every on-pack claim can survive a regulator asking for proof.' },
  { num: '06', title: 'Design System Coherence', desc: 'Does the packaging system hold across SKUs, channels, and seasons — or has each launch drifted into its own one-off?' },
  { num: '07', title: 'Quality & Specification', desc: 'Written specs with tolerances, golden sample library, AQL levels, defect classification, and whether the factory is actually producing to the standard the brand approved.' },
]

const auditFaqs = [
  { question: 'How is a packaging audit different from a QC inspection?', answer: 'A QC inspection confirms a specific production run matches a written spec. A packaging audit asks whether the spec itself is the right one, and whether the surrounding system holds up. QC is run-level. Audit is program-level.' },
  { question: 'How long does a packaging audit take?', answer: 'A single-SKU audit on one or two dimensions runs 2–4 weeks. A full seven-dimension audit on a multi-SKU program runs 4–6 weeks. Brand-side effort is lighter than most teams expect.' },
  { question: 'What do you deliver?', answer: 'A written report structured by the seven audit dimensions, each with findings, severity rating, prioritized action register, and our recommendation. We include supporting evidence and name the specific next step for each finding.' },
  { question: 'Is the audit a sales pitch?', answer: 'No. The audit is a defined deliverable with its own scope. We deliver the report whether or not you decide to work with us on execution. Most audits do surface work we can execute — we quote that separately.' },
  { question: 'Can we run the audit ourselves?', answer: 'For some dimensions, yes. Retail readiness and sustainability have self-audit scorecards in our guides. Compliance, cost, and system coherence are harder to self-audit without a current reference.' },
  { question: 'What does a packaging audit cost?', answer: 'Scoped to the program. A focused single-dimension review is lighter than a full seven-dimension audit across a multi-SKU family. We scope and quote after the intake call.' },
]

export default function PackagingAuditClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="kph">
        <div className="kphv" style={{ background: 'linear-gradient(135deg,#0d1b2a,#1a2a4a,#1f2a3d)' }}>
          <Image src="/images/guides/packaging-audit/hero-audit.jpg" alt="Packaging audit in progress — structural review of beauty packaging components" fill style={{ objectFit: 'cover' }} priority />
          <div>
            <div className="kvl">Packaging Audit Service</div>
            <div className="kvt" style={{ fontSize: 'clamp(26px,3.2vw,40px)' }}>Seven Dimensions.<br />One Report.<br /><em>Zero Guesswork.</em></div>
          </div>
        </div>
        <div className="kphc">
          <h1>Know What&apos;s Broken<br />Before You Spend<br />Another Dollar <em>Fixing It</em></h1>
          <p>A structured review of your packaging program &mdash; compliance, cost, retail readiness, sustainability, and system coherence &mdash; delivered as a written report with a prioritized action register.</p>
          <button type="button" className="bp" onClick={() => openModal('Packaging Audit', 'audit-hero')}>Request a Packaging Audit</button>
        </div>
      </div>

      <div className="bns" style={{ padding: '28px 80px', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
        <span className="bn"><Image src="/images/logos/adidas.svg" alt="Adidas" width={100} height={40} /></span>
        <span className="bn"><Image src="/images/logos/vans.svg" alt="Vans" width={100} height={40} /></span>
        <span className="bn"><Image src="/images/logos/target.svg" alt="Target" width={100} height={40} /></span>
        <span className="bn"><Image src="/images/logos/disney.svg" alt="Disney" width={100} height={40} /></span>
        <span className="bn"><Image src="/images/logos/puma.svg" alt="Puma" width={100} height={40} /></span>
        <span className="bn"><Image src="/images/logos/paramount-plus.svg" alt="Paramount+" width={100} height={40} /></span>
      </div>

      <div className="incs">
        <div className="ey">What we review</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>The Seven Audit Dimensions</h2>
        <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.8, maxWidth: 620, marginBottom: 8 }}>Every packaging audit covers these seven areas. Most brands have blind spots in at least three.</p>
        <div className="incg" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {dimensions.map(d => (
            <div key={d.num} className="ii">
              <div className="iin">{d.num}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="incs" style={{ background: 'var(--navy)', color: 'white' }}>
        <div className="ey" style={{ color: 'var(--lime)' }}>How it works</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', color: 'white' }}>Four Phases. Four to Six Weeks.</h2>
        <div className="incg" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          <div className="ii" style={{ background: 'var(--navy-md)', border: '1px solid rgba(255,255,255,.08)' }}>
            <div className="iin" style={{ color: 'var(--lime)', opacity: 1 }}>01</div>
            <h4 style={{ color: 'white', fontSize: 14, fontWeight: 700, marginBottom: 9 }}>Scope &amp; Intake</h4>
            <p style={{ color: 'rgba(255,255,255,.7)' }}>We define which SKUs, dimensions, and markets are in scope. You provide samples, supplier contacts, and the launch calendar. Week 1.</p>
          </div>
          <div className="ii" style={{ background: 'var(--navy-md)', border: '1px solid rgba(255,255,255,.08)' }}>
            <div className="iin" style={{ color: 'var(--lime)', opacity: 1 }}>02</div>
            <h4 style={{ color: 'white', fontSize: 14, fontWeight: 700, marginBottom: 9 }}>Evidence Gathering</h4>
            <p style={{ color: 'rgba(255,255,255,.7)' }}>Physical measurement, supplier documentation review, compliance mapping, cost modeling, and retail-spec cross-check. Weeks 1&ndash;3.</p>
          </div>
          <div className="ii" style={{ background: 'var(--navy-md)', border: '1px solid rgba(255,255,255,.08)' }}>
            <div className="iin" style={{ color: 'var(--lime)', opacity: 1 }}>03</div>
            <h4 style={{ color: 'white', fontSize: 14, fontWeight: 700, marginBottom: 9 }}>Findings Synthesis</h4>
            <p style={{ color: 'rgba(255,255,255,.7)' }}>Each finding classified by severity (critical, high, advisory). The action register is prioritized by risk and timeline. Weeks 3&ndash;4.</p>
          </div>
          <div className="ii" style={{ background: 'var(--navy-md)', border: '1px solid rgba(255,255,255,.08)' }}>
            <div className="iin" style={{ color: 'var(--lime)', opacity: 1 }}>04</div>
            <h4 style={{ color: 'white', fontSize: 14, fontWeight: 700, marginBottom: 9 }}>Report &amp; Walkthrough</h4>
            <p style={{ color: 'rgba(255,255,255,.7)' }}>Written report delivered. Live walkthrough of findings, severity rationale, and recommended next steps. You decide what to act on. Week 4+.</p>
          </div>
        </div>
      </div>

      <div className="hr"></div>

      <div className="kcr">
        <div className="seo">
          <h2>What a Packaging Audit Finds</h2>
          <p>The same patterns surface across beauty packaging programs. The audit catches them before a retailer, regulator, or production failure does.</p>
          <h3>Compliance Gaps</h3>
          <p>SB 54 recyclability claims that don&apos;t hold up under the actual EPR framework. EU PPWR recycled-content minimums the current spec can&apos;t meet. FTC Green Guides violations on &ldquo;recyclable&rdquo; claims where curbside infrastructure doesn&apos;t exist. These are not hypothetical &mdash; they are the findings that recur. Our <Link href="/guides/beauty-packaging-claims-compliance">claims and compliance guide</Link> covers the regulatory detail.</p>
          <h3>Cost Leakage</h3>
          <p>Most brands quote unit cost. An audit models landed cost &mdash; factory price plus tooling amortization, freight, duties, dimensional weight, warehousing, and waste. The delta between quoted and landed is typically where 10&ndash;25% in savings lives. Our <Link href="/guides/cost-moq-landed-cost-planning">cost, MOQ, and landed-cost planning guide</Link> breaks down the model.</p>
          <h3>Retail Readiness Failures</h3>
          <p>First-shipment chargebacks from barcode grade, master-carton labeling, case-pack configuration, or routing-guide misses are predictable and preventable. The audit maps every SKU against the retailer&apos;s actual requirements before the first PO ships. See our <Link href="/guides/retail-ready-beauty-packaging">retail-ready beauty packaging guide</Link> for the full spec framework.</p>
          <h3>System Drift</h3>
          <p>Each launch inherits parts of the existing design system and improvises the rest. After three or four SKU launches, the &ldquo;system&rdquo; is actually five unrelated specifications. The audit identifies where the system has drifted and recommends the consolidation path. Our <Link href="/guides/beauty-brand-packaging-design-system">design system guide</Link> defines what a coherent multi-SKU packaging architecture looks like.</p>
          <h3>Quality Specification Gaps</h3>
          <p>If a retailer asked for your written spec on your lead SKU today &mdash; with tolerances, materials by supplier, finish stack, and acceptance criteria &mdash; could you produce it within 24 hours? If not, the audit is also the spec-building workstream. Our <Link href="/guides/packaging-testing-quality-control">testing and quality control guide</Link> covers the full QC chain.</p>
          <p>For the complete methodology, seven-dimension framework, and a 10-item self-assessment scorecard, see the <Link href="/guides/packaging-audit">Packaging Audit Guide</Link>.</p>
        </div>
        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Audit FAQs"
            faqs={auditFaqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Packaging Audit"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Not Sure What&apos;s Broken?<br /><em>That&apos;s the Point.</em></h2>
          <p>Most packaging problems are invisible until they cost you &mdash; a failed retail inspection, a chargeback, a reprint, a compliance letter. The audit finds them before they find you.</p>
          <button type="button" className="bi" onClick={() => openModal('Packaging Audit', 'audit-bottom-cta')}>Request a Packaging Audit</button>
        </div>
      </section>
    </>
  )
}
