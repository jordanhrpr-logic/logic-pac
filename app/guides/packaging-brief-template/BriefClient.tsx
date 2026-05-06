'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import Image from 'next/image'

const tocSections = [
  { id: 'why', label: 'Why a brief matters' },
  { id: 'sections', label: 'The 10 sections' },
  { id: 'omissions', label: 'Common omissions' },
  { id: 'sample', label: 'Annotated sample' },
  { id: 'bring', label: 'Day-one playbook' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'How long should a brief be?',
    answer: 'Long enough to answer every question, short enough that nobody skips reading it. Two to four pages is typical. Anything longer usually contains material that belongs in supporting documents.',
  },
  {
    question: 'What if we don’t have all the answers yet?',
    answer: 'Mark the section “TBD” and note who will resolve it and when. Better to flag the gap than to leave the section blank or guess.',
  },
  {
    question: 'Should we share the budget?',
    answer: 'Yes. Without a target, your partner can’t optimize. Brands that withhold budget usually get back samples that miss target, then have to redo the work.',
  },
  {
    question: 'How do we handle multiple SKUs in one brief?',
    answer: 'One brief per project, with a shared section covering brand, channels, sustainability — and per-SKU sections for structure, volume, and budget. If the SKUs are independent enough to have different timelines, treat them as separate projects.',
  },
  {
    question: 'Who in our team should write the brief?',
    answer: 'Whoever owns the launch — usually a brand manager or product lead. Ops, regulatory, and finance review and sign before it goes external. The packaging partner shouldn’t be writing your brief for you.',
  },
]

export default function BriefClient() {
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
        <div className="ey inv">Logic Pac &middot; Project Toolkit</div>
        <h1>The packaging brief template <em>every brand manager needs.</em></h1>
        <p>A clear brief is the difference between a 12-week launch and an 18-week one. This is the exact template we use with our clients &mdash; the ten sections every brief should contain, the omissions that cost weeks, and a downloadable version you can adapt.</p>
        <div className="phdr-meta">
          <span>8 min read</span>
          <span>Updated April 2026</span>
          <span>Includes downloadable template</span>
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

            <h2 id="why"><span className="num">01.</span>Why a clear brief saves weeks</h2>
            <p>Every packaging project has a finite number of decisions that need to be made. The brief is where they get captured. The more decisions resolved on day one, the fewer resurface in week six &mdash; when fixing them costs real time and money.</p>
            <p>We&apos;ve seen single-page briefs produce four-month projects, and ten-page briefs produce eight-week projects. The length doesn&apos;t matter. What matters is that the brief answers every question your packaging partner is going to ask in the first 30 days.</p>

            <div className="callout">
              <p>The cost of a 30-minute conversation in week one is approximately zero. The cost of the same decision in week six is two weeks of redesign.</p>
            </div>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>The 10 sections every packaging brief needs</li>
                <li>The 7 most common omissions and what they cost</li>
                <li>An annotated sample brief with side-notes</li>
                <li>A downloadable template you can copy and adapt</li>
              </ol>
            </div>

            <Image src="/images/guides/portfolio-structural-engineering.jpg" alt="Zee Dog structural packaging with wing-opening rigid box, foam insert, and instructional panel" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="sections"><span className="num">02.</span>The ten sections every brief needs</h2>

            <h3>1. Project context &amp; objective</h3>
            <p>Two to three sentences. What product is this for? What is the packaging meant to accomplish? Hero launch, line extension, retail readiness, sustainability redesign, cost optimization?</p>

            <h3>2. Brand &amp; product overview</h3>
            <p>Brand positioning in one paragraph. Product name, formula format, fill volume, in-use application. Link to brand guidelines if available.</p>

            <h3>3. Distribution channels</h3>
            <p>DTC only? Retail launch? Wholesale? Multi-channel? Specify retailers if known &mdash; Sephora, Target, Whole Foods all have different compliance requirements that need to be designed in from concept.</p>

            <h3>4. Sustainability requirements</h3>
            <p>This is now non-negotiable. Specify:</p>
            <ul>
              <li>Recycled content thresholds (e.g., minimum 30% PCR)</li>
              <li>Required certifications (FSC, BPI, Cradle-to-Cradle)</li>
              <li>Mono-material requirements</li>
              <li>Regulatory jurisdictions you&apos;re selling into (EU, California, UK)</li>
              <li>Public sustainability commitments the brand has already made</li>
            </ul>

            <h3>5. Aesthetic direction</h3>
            <p>Reference imagery from competitors and adjacent categories. Three references is enough &mdash; more usually muddies direction. Be specific about what you want to take from each reference and what you don&apos;t.</p>

            <h3>6. Structural &amp; functional requirements</h3>
            <p>Dimensions, capacity, opening mechanism, dispensing format, child resistance, tamper evidence, special features. Include compatibility with existing components if you&apos;re extending an existing system.</p>

            <h3>7. Volume &amp; SKU plan</h3>
            <p>Year-1 forecast volume per SKU. Number of SKUs in the project. Whether SKUs share components (and which ones). This determines tooling investment and supplier strategy.</p>

            <h3>8. Budget</h3>
            <p>A target per-unit landed cost or total project budget. The most common mistake here is leaving this blank &mdash; packaging partners can&apos;t optimize against an undefined target.</p>

            <h3>9. Timeline &amp; key dates</h3>
            <p>Launch date. Buyer commit dates if retail. Internal go/no-go dates. Sample required dates for retailer presentations or photo shoots. Be honest about what&apos;s flexible and what isn&apos;t.</p>

            <h3>10. Stakeholder approval chain</h3>
            <p>Who signs off on what. Brand approves aesthetics. Ops approves cost and supply chain. Regulatory approves claims and compliance. Founder/CEO if applicable. Knowing the approval chain on day one prevents week-six surprises.</p>

            <Image src="/images/guides/packaging-brief-checklist.png" alt="The 10 essential sections of a packaging brief — visual checklist from project context to stakeholder approval" width={800} height={450} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="omissions"><span className="num">03.</span>The seven most common omissions &mdash; and what they cost</h2>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Omission</th>
                    <th>Where it surfaces</th>
                    <th>Typical timeline cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Channel mix not specified</strong></td>
                    <td>Week 5&ndash;6, when retail compliance gets discovered</td>
                    <td>+2&ndash;4 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Sustainability requirements vague</strong></td>
                    <td>Week 4, when material sourcing changes mid-design</td>
                    <td>+3&ndash;5 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Volume forecast missing</strong></td>
                    <td>Week 7, when tooling decisions surface</td>
                    <td>+1&ndash;2 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Budget undefined</strong></td>
                    <td>Week 6, when first costed samples come in over target</td>
                    <td>+2&ndash;3 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Approval chain unclear</strong></td>
                    <td>Week 8, when sample sign-off stalls</td>
                    <td>+1&ndash;3 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Existing component compatibility</strong></td>
                    <td>Week 5, during structural prototyping</td>
                    <td>+2&ndash;4 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Regulatory jurisdictions</strong></td>
                    <td>Week 9, when print files prep for production</td>
                    <td>+1&ndash;2 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="sample"><span className="num">04.</span>Annotated sample brief</h2>
            <p>Below is a real (anonymized) brief that produced a 10-week project. The strong sections are short. The detail is where it matters: sustainability, volume, and compliance.</p>

            <div className="annotated-sample">
              <p><strong>1. Project context.</strong> Launch refillable hero serum into Sephora US (Q3 2026), DTC simultaneous. First refillable in our line.</p>
              <p><strong>2. Brand &amp; product.</strong> Prestige skincare, $68 retail, 30ml fill, lightweight oil-serum. Brand guidelines attached. Existing line is glass + aluminum.</p>
              <p><strong>3. Channels.</strong> Sephora US (compliance pack attached). DTC e-commerce. UK launch in 2027 &mdash; design for EU PPWR readiness from day one.</p>
              <p><strong>4. Sustainability.</strong> Glass primary (target 50%+ PCR cullet), aluminum cartridge with mono-PE inner liner. FSC-certified secondary carton. No virgin plastic. Soy-based inks. Public commitment to mono-material recyclability.</p>
              <p><strong>5. Aesthetic.</strong> See attached references &mdash; A&euml;sop functional restraint, Augustinus Bader system minimalism. Avoid floral/feminine cues.</p>
              <p><strong>6. Structural.</strong> 30ml capacity. Twist-off cartridge swap, no tools. Drop-tested for retail handling. Child resistance not required.</p>
              <p><strong>7. Volume.</strong> Year-1: 80,000 primaries, 220,000 cartridges. Tool investment justified.</p>
              <p><strong>8. Budget.</strong> Primary landed cost target: $4.50. Cartridge target: $1.10.</p>
              <p><strong>9. Timeline.</strong> Sephora samples needed Aug 1. Launch on shelf Oct 15. Photo shoot Sept 5. All non-negotiable.</p>
              <p><strong>10. Approvals.</strong> Brand: J. Marin (CMO). Ops: D. Yoon (VP Ops). Regulatory: A. Petersen. Final sign-off: C. Velasquez (CEO).</p>
            </div>

            <h2 id="bring"><span className="num">05.</span>Bring it to the table on day one</h2>
            <p>The version above is a clean, fillable template &mdash; the same one we use with every new client. Adapt it to your project, then walk us through it in your kickoff. The brief lock is Gate 1 of every project; the more decisions captured here, the fewer surface in week six.</p>

            <section className="faq-cta-block" id="faq">
              <div className="ey">Quick Answers</div>
              <h2>Brief Template <em>FAQs</em></h2>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              <div className="cta-final">
                <p>Bring us your brief &mdash; even in draft &mdash; and we&apos;ll review the gaps, suggest the structural format, and route the work in a single working session.</p>
                <button className="bp" onClick={() => openModal('Guide - Brief Consultation')}>Book a Brief Consultation</button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}
