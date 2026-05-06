'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import Image from 'next/image'

const tocSections = [
  { id: 'why', label: 'Why timelines slip' },
  { id: 'discovery', label: 'Weeks 1–2 · Discovery' },
  { id: 'design', label: 'Weeks 3–4 · Design' },
  { id: 'prototyping', label: 'Weeks 5–6 · Prototyping' },
  { id: 'sampling', label: 'Weeks 7–8 · Sampling' },
  { id: 'production', label: 'Weeks 9–10 · Production' },
  { id: 'delivery', label: 'Weeks 11–12 · Delivery' },
  { id: 'compress', label: 'What compresses vs extends' },
  { id: 'checklist', label: 'Phase-gate checklist' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'Can we do this in 8 weeks instead of 12?',
    answer: 'Sometimes. It requires pre-locked design direction, existing material specs, and a partner running phases in parallel. Add a rush premium of 15–25%. Don’t try to compress weeks 1–2 — that’s where compressed projects fail.',
  },
  {
    question: 'What if our product is glass and breakable?',
    answer: 'Add 2–3 weeks for structural engineering and protective sub-packaging design. Drop testing in weeks 7–8 becomes critical. Don’t ship glass to retail without a tested e-commerce variant if you’re also selling DTC.',
  },
  {
    question: 'How does international production change the timeline?',
    answer: 'Add 4–6 weeks for ocean freight and 1–2 weeks for customs and warehouse intake. A “12-week” Asia-sourced project is realistically 16–18 weeks. Plan accordingly.',
  },
  {
    question: 'What’s the single biggest mistake brands make?',
    answer: 'Approving design direction in Week 4 without a structural prototype. The package looks great in renders, fails physically in Week 6, and the project unwinds back to design.',
  },
  {
    question: 'Should we get a packaging brief template?',
    answer: 'Yes — we publish one. The faster and clearer the brief, the faster the project.',
  },
]

export default function TimelineClient() {
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
        <div className="ey inv">Logic Pac &middot; Production Timelines</div>
        <h1>From concept to shelf in <em>12 weeks.</em> What a realistic packaging timeline actually looks like.</h1>
        <p>Most brand managers ask &ldquo;how fast can we get packaging to market?&rdquo; before they ask anything else. The honest answer is 90 days &mdash; but only if you know what happens in each phase, and what compresses or extends the timeline.</p>
        <div className="phdr-meta">
          <span>15 min read</span>
          <span>Updated April 2026</span>
          <span>Design + Production</span>
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

            <h2 id="why"><span className="num">01.</span>Why packaging timelines slip</h2>
            <p>Every packaging project has the same six phases. The brands that hit shelf on schedule don&rsquo;t move faster &mdash; they make decisions earlier and respect the dependencies between stages.</p>
            <p>Here&rsquo;s the pattern we see across hundreds of projects: <strong>delays don&rsquo;t come from production. They come from indecision in the first four weeks.</strong> One material change in week 7 can push your launch by a month. One unclear brand brief in week 1 can compound into three rounds of redesign before sampling.</p>
            <p>This guide breaks down what actually happens in each phase, what kills the timeline, and what you can do upstream to protect a 12-week launch window.</p>

            <div className="inside-card">
              <div className="label">What&rsquo;s Inside</div>
              <ol>
                <li>Phase-by-phase breakdown of what happens, what to expect, and what kills the timeline</li>
                <li>The seven decisions that compress a project &mdash; and the five that extend it</li>
                <li>A phase-gate checklist your team can use to validate readiness at each stage</li>
                <li>FAQs on rush options, parallel processing, and when 12 weeks isn&rsquo;t realistic</li>
              </ol>
            </div>

            <Image src="/images/guides/portfolio-finished-production.jpg" alt="Futuremood premium rigid boxes with gold foil and foam inserts — finished production quality" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="discovery"><span className="num">02.</span>Weeks 1&ndash;2 &middot; Discovery &amp; Briefing</h2>
            <p>This is where everything gets defined. Materials, sustainability requirements, budget parameters, brand guidelines, distribution channels, performance specs, and the shelf context the package needs to compete in.</p>
            <p><strong>What it looks like:</strong> stakeholder meetings, brand questionnaires, technical spec documentation, target sample collection. Nothing physical happens. It&rsquo;s all alignment.</p>
            <p><strong>What kills this phase:</strong> rushing it. Most brands try to compress weeks 1&ndash;2 because &ldquo;we already know what we want.&rdquo; Then they rebrief in week 5 when prototypes don&rsquo;t match the original vision, and the project loses 3 weeks.</p>

            <div className="callout">
              <p>The single highest-leverage decision in a 12-week timeline is how much rigor you bring to the first 10 days.</p>
            </div>

            <h2 id="design"><span className="num">03.</span>Weeks 3&ndash;4 &middot; Design &amp; Concept Development</h2>
            <p>Your designer is sketching, rendering, and exploring multiple structural and graphic directions. Working through how the design behaves in 3D, photographs, and survives a crowded shelf. Multiple concepts get refined to two or three directions for stakeholder review.</p>
            <p><strong>What you&rsquo;re deciding:</strong> structure, primary palette, typography, finish strategy, opening mechanism. Color separations and special finish die plans get locked.</p>
            <p><strong>Common pitfall:</strong> approving &ldquo;design direction&rdquo; without resolving the structural decisions. A beautiful flat render that hasn&rsquo;t been tested against actual product fit will fail at the prototype stage.</p>

            <h2 id="prototyping"><span className="num">04.</span>Weeks 5&ndash;6 &middot; Prototyping &amp; Structural Engineering</h2>
            <p>The design isn&rsquo;t just beautiful &mdash; it has to work. This phase produces structural prototypes, validates fold lines and closure mechanics, and tests material performance. Embossing or special finish die tooling is created. Color match drawdowns happen on actual substrates.</p>
            <p><strong>What you&rsquo;ll see:</strong> first physical samples, often hand-built, sometimes 3D-printed. They&rsquo;re rough. They&rsquo;re not meant to be pretty &mdash; they&rsquo;re meant to validate that the design is producible.</p>
            <p><strong>Don&rsquo;t skip:</strong> putting your actual product into the prototype. Empty packaging always fits. Filled packaging is where you find the issues.</p>

            <h2 id="sampling"><span className="num">05.</span>Weeks 7&ndash;8 &middot; Sampling &amp; Testing</h2>
            <p>First samples come off the production tooling. You&rsquo;re evaluating color match, finish quality, structural durability, label registration, and how your actual product feels inside the packaging at production-grade quality.</p>
            <p><strong>Adjustments happen here.</strong> A second sample run might be needed. Drop tests, moisture testing, or compression testing happen on schedule. This is the last window to make changes before production tooling locks.</p>

            <h2 id="production"><span className="num">06.</span>Weeks 9&ndash;10 &middot; Production Setup &amp; QC</h2>
            <p>Tooling is finalized. Your manufacturer prepares production runs. Artwork approvals lock. Material sourcing confirms. Trial runs test for consistency. QC parameters are documented.</p>
            <p>This is the phase that prevents disasters at scale. Brands that skip a press check or trial run are the ones who discover color drift, registration issues, or finish defects in week 12 &mdash; when there&rsquo;s no time to fix them.</p>

            <h2 id="delivery"><span className="num">07.</span>Weeks 11&ndash;12 &middot; Delivery &amp; Final QC</h2>
            <p>Production runs at volume. Quality audits happen on output. Final product is inspected, packed, and shipped to your warehouse, fulfillment center, or retail DC. Delivery timelines vary by geography &mdash; domestic ground freight is 3&ndash;5 days; ocean freight from Asia is 4&ndash;6 weeks (plan that into your overall window).</p>

            <h2 id="compress"><span className="num">08.</span>What compresses the timeline &mdash; and what extends it</h2>
            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>What compresses</th>
                    <th>What extends</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Pre-locked design direction</strong> &mdash; you already know your brand aesthetic</td>
                    <td><strong>Mid-project material change</strong> &mdash; adds 3&ndash;5 weeks per change</td>
                  </tr>
                  <tr>
                    <td><strong>Existing material library</strong> &mdash; you&rsquo;ve tested what works in your category</td>
                    <td><strong>Stakeholder indecision</strong> &mdash; every revision round adds 5&ndash;7 days</td>
                  </tr>
                  <tr>
                    <td><strong>Simplified structure</strong> &mdash; fewer custom finishes mean faster tooling</td>
                    <td><strong>Custom material specifications</strong> &mdash; extends sourcing 2&ndash;4 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Domestic / regional production</strong> &mdash; shorter shipping times</td>
                    <td><strong>International freight</strong> &mdash; adds 4&ndash;6 weeks ocean transit</td>
                  </tr>
                  <tr>
                    <td><strong>Parallel-processing partner</strong> &mdash; design + tooling + sourcing in parallel</td>
                    <td><strong>Sequential workflow</strong> &mdash; each phase waits for prior approval</td>
                  </tr>
                  <tr>
                    <td><strong>Brief discipline</strong> &mdash; comprehensive Week-1 documentation</td>
                    <td><strong>Regulatory compliance changes</strong> &mdash; material sourcing pivots</td>
                  </tr>
                  <tr>
                    <td><strong>Pre-vetted suppliers</strong> &mdash; no RFQ cycles needed</td>
                    <td><strong>Sustainability requirement added mid-project</strong> &mdash; full restart</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Image src="/images/guides/concept-to-shelf-timeline.png" alt="12-week concept-to-shelf packaging timeline — design, prototyping, tooling, production, and freight phases" width={800} height={450} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="checklist"><span className="num">09.</span>The phase-gate checklist</h2>
            <p>Use this at the end of each phase. If you can&rsquo;t answer yes to every item in a gate, don&rsquo;t move forward &mdash; the cost of fixing it later is higher than the cost of waiting now.</p>

            <h3>Gate 1 (end of Week 2) &mdash; Brief lock</h3>
            <ul>
              <li>Materials, finishes, and structural format are documented</li>
              <li>Sustainability requirements are explicit (PCR %, certifications, regulatory jurisdictions)</li>
              <li>Distribution channels are confirmed (retail, DTC, both &mdash; each affects spec)</li>
              <li>Budget per unit and per project is approved</li>
              <li>Stakeholder approval chain is mapped</li>
            </ul>

            <h3>Gate 2 (end of Week 4) &mdash; Design lock</h3>
            <ul>
              <li>Final structural design selected and tested for product fit</li>
              <li>Color palette specified by substrate (not just by Pantone)</li>
              <li>Finish strategy committed (matte, soft-touch, foil &mdash; and where)</li>
              <li>Print files prepared to spec</li>
            </ul>

            <h3>Gate 3 (end of Week 8) &mdash; Sample approval</h3>
            <ul>
              <li>Production-grade sample matches design intent</li>
              <li>Color drawdowns approved across all substrates</li>
              <li>Drop, compression, or moisture tests passed</li>
              <li>Product fits, dispenses, and seals correctly</li>
            </ul>

            <section className="faq-cta-block" id="faq">
              <div className="ey">Quick Answers</div>
              <h2>Packaging Timeline <em>FAQs</em></h2>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              <div className="cta-final">
                <p>Most brands lose weeks because the brief was too thin to hold its shape under design pressure. We help you lock the brief, choose the right structural format, and route the work to suppliers who can deliver &mdash; without rebriefing in Week 5.</p>
                <button className="bp" onClick={() => openModal('Guide - Timeline Consultation')}>Book a Timeline Consultation</button>
              </div>
            </section>

            <section className="sources-section">
              <h2>Sources</h2>
              <p className="sources-lede">External standards and industry data referenced in this guide. Phase durations and project sequencing are drawn from Logic Pac&rsquo;s own engagement archive.</p>
              <ul className="sources-list">
                <li><strong>ASTM International &mdash; Packaging Test Standards</strong> <span>&mdash; D4169 (distribution simulation), D5276 (drop testing), D642 (compression). Referenced for Week 7&ndash;8 sample testing protocols.</span></li>
                <li><strong>Drewry &amp; Freightos &mdash; Ocean Freight Transit Time Data</strong> <span>&mdash; Asia&ndash;US lane benchmarks: typical 4&ndash;6 week ocean transit plus 1&ndash;2 weeks customs and warehouse intake.</span></li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}
