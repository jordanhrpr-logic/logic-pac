'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import { capabilityFaqs } from './capabilities-data'
import { trackFaqExpand } from '@/lib/analytics'

const features = [
  { num: '01', title: 'Structural Design & 3D Engineering', desc: 'Custom die-line development, 3D rendering, and physical prototypes. Rigid boxes, folding cartons, specialty forms, multi-component kits \u2014 built for the product, the unboxing, and the retailer.' },
  { num: '02', title: 'Graphic & Print File Prep', desc: "Print-ready file preparation, color management, foil and embossing specs. We bridge your creative team and the factory floor with production knowledge your designers may not have." },
  { num: '03', title: 'Global Manufacturing & Sourcing', desc: 'As a packaging manufacturer with factory relationships across China, Vietnam, Thailand, India, Mexico, and more \u2014 we match your project to the right supplier based on quality, MOQ, lead time, and cost.' },
  { num: '04', title: 'Quality Control & Factory Audits', desc: 'Pre-production, inline, and pre-shipment inspection. Factory audits and supplier qualification. Problems caught before they ship, not three weeks before launch.' },
  { num: '05', title: 'Compliance & Certification', desc: 'FSC chain-of-custody, FDA cosmetics compliance, material safety testing, regional regulatory requirements. We manage documentation so your brand stays protected.' },
  { num: '06', title: 'Logistics, Freight & Fulfillment', desc: 'International freight, customs clearance, delivery to your 3PL or warehouse. Utah-based packaging fulfillment services including kitting, assembly, and outbound shipping direct to retail, DTC, or individual creators.' },
  { num: '07', title: 'COGS Optimization', desc: 'Spec re-engineering, alternative material evaluation, supplier negotiations. We routinely reduce per-unit costs 10\u201325% for new clients without compromising brand standards.' },
  { num: '08', title: 'Retail Readiness', desc: 'Retailer compliance documentation, scan-ready barcoding, floor-ready master carton specs for Ulta, Sephora, Target, and specialty retail. We know what buyers require before they ask.' },
]

const resources = [
  { num: '01', tag: 'Start here', title: 'Packaging Brief Template', desc: 'Define the product, channel, quantity, budget, timing, testing, and approval path before development begins.', href: '/guides/packaging-brief-template?utm_source=capabilities&utm_medium=organic&utm_campaign=seo_service_page&utm_content=capabilities_brief_guide' },
  { num: '02', tag: 'Plan the schedule', title: 'Concept-to-Shelf Timeline', desc: 'Map discovery, design, prototyping, testing, production, quality control, and freight against a realistic launch date.', href: '/guides/concept-to-shelf-timeline?utm_source=capabilities&utm_medium=organic&utm_campaign=seo_service_page&utm_content=capabilities_timeline_guide' },
  { num: '03', tag: 'Choose materials', title: 'Material Decision Framework', desc: 'Compare glass, PET, HDPE, aluminum, and molded fiber by product fit, cost, perception, and supply risk.', href: '/guides/material-decision-framework?utm_source=capabilities&utm_medium=organic&utm_campaign=seo_service_page&utm_content=capabilities_material_guide' },
  { num: '04', tag: 'Specify finishes', title: 'Packaging Finish Guide', desc: 'Understand when soft-touch, foil, spot UV, embossing, and other finishes earn their added cost and complexity.', href: '/guides/packaging-finish-guide?utm_source=capabilities&utm_medium=organic&utm_campaign=seo_service_page&utm_content=capabilities_finish_guide' },
]

export default function CapabilitiesClient() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Full-service packaging</div>
        <h1>Everything Your<br />Packaging Needs,<br /><em>Under One Roof</em></h1>
        <p>Structural design, engineering, global sourcing, manufacturing, quality control, and fulfillment &mdash; managed by one accountable team.</p>
        <button type="button" className="bi" onClick={() => openModal('Capabilities - Start a Project', 'capabilities-hero')}>Start a Project</button>
      </div>
      <section className="capabilities-list" aria-labelledby="capabilities-list-title">
        <h2 id="capabilities-list-title">Packaging Development, Production &amp; Fulfillment Capabilities</h2>
        <div className="fcg">
        {features.map(f => (
          <div key={f.num} className="fci">
            <div className="fcin">{f.num}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
        </div>
      </section>

      <section className="cap-resources" aria-labelledby="cap-resources-title">
        <div className="cap-section-head">
          <div>
            <div className="ey inv">Plan before production</div>
            <h2 id="cap-resources-title">Packaging Guides &amp;<br /><em>Decision Frameworks</em></h2>
          </div>
          <p>These are the working tools behind a well-run packaging program. Use them to build the brief, pressure-test decisions, and identify risk before production starts.</p>
        </div>
        <div className="cap-resource-grid">
          {resources.map(resource => (
            <Link key={resource.num} href={resource.href} className="cap-resource-card">
              <div className="cap-resource-meta"><span>{resource.num}</span><span>{resource.tag}</span></div>
              <h3>{resource.title}</h3>
              <p>{resource.desc}</p>
              <span className="cap-resource-link">Read the guide <span aria-hidden="true">&rarr;</span></span>
            </Link>
          ))}
        </div>
        <div className="cap-resource-featured">
          <div>
            <span className="cap-resource-kicker">Sustainability planning</span>
            <h3>Make the material decision defensible.</h3>
          </div>
          <p>Compare reduction, recycled content, mono-material, glass, aluminum, fiber, and refill systems against cost, claims risk, and operational reality.</p>
          <Link href="/guides/sustainable-beauty-packaging?utm_source=capabilities&utm_medium=organic&utm_campaign=seo_service_page&utm_content=capabilities_sustainable_guide">Open the sustainability playbook <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </section>

      <section className="cap-faq" aria-labelledby="cap-faq-title">
        <div className="cap-faq-intro">
          <div className="ey">Before you start</div>
          <h2 id="cap-faq-title">Practical Answers for<br /><em>Packaging Teams</em></h2>
          <p>Scope, quantities, timing, compliance, and execution. The questions that determine whether a packaging plan is ready to move.</p>
        </div>
        <div className="cap-faq-list">
          {capabilityFaqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div key={faq.question} className={`cap-faq-item${isOpen ? ' open' : ''}`}>
                <button
                  id={`cap-faq-question-${index}`}
                  type="button"
                  className="cap-faq-button"
                  aria-expanded={isOpen}
                  aria-controls={`cap-faq-answer-${index}`}
                  onClick={() => {
                    const nowOpen = !isOpen
                    setOpenFaq(nowOpen ? index : null)
                    if (nowOpen) trackFaqExpand({ question: faq.question, ctaLocation: 'capabilities-faq' })
                  }}
                >
                  <span>{faq.question}</span>
                  <span className="cap-faq-toggle" aria-hidden="true">+</span>
                </button>
                <div
                  id={`cap-faq-answer-${index}`}
                  className="cap-faq-answer"
                  role="region"
                  aria-labelledby={`cap-faq-question-${index}`}
                  aria-hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="ctas">
        <div className="ctai">
          <div className="ey inv">From brief to production</div>
          <h2>Bring Us the Product.<br /><em>We&apos;ll Map the Packaging Path.</em></h2>
          <p>Share the product, quantity, target cost, channel, and launch date. We&apos;ll identify the decisions, development steps, and production path the project requires.</p>
          <button type="button" className="bi" onClick={() => openModal(undefined, 'capabilities-bottom-cta')}>Scope Your Packaging Project</button>
        </div>
      </section>
    </>
  )
}
