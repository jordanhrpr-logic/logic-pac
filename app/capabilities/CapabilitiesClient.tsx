'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import { capabilityFaqs } from './capabilities-data'
import { trackFaqExpand } from '@/lib/analytics'

const features = [
  { num: '01', title: 'Structural Design & 3D Engineering', desc: 'Your box, carton, or kit \u2014 engineered to protect the product, survive the supply chain, and look right on the shelf. Die-lines, 3D renders, and physical prototypes before production commits.' },
  { num: '02', title: 'Graphic & Print File Prep', desc: 'Production-ready files that match what your designer intended. We bridge creative vision and factory capability so the printed result is not a surprise.' },
  { num: '03', title: 'Global Manufacturing & Sourcing', desc: 'The right factory for your project \u2014 matched by format, volume, quality standard, and cost target. Relationships across 15+ countries, vetted by production history.' },
  { num: '04', title: 'Quality Control & Factory Audits', desc: 'Defects caught before they ship. Pre-production samples, inline checks, and pre-shipment inspection against the written spec \u2014 not a verbal agreement.' },
  { num: '05', title: 'Compliance & Certification', desc: 'Documentation handled so your brand stays protected. FSC chain-of-custody, FDA compliance, SB 54 readiness, material safety testing, and retailer-specific requirements.' },
  { num: '06', title: 'Logistics, Freight & Fulfillment', desc: 'Packaging delivered to your door, your 3PL, or your customer. International freight, customs, and Utah-based kitting and fulfillment \u2014 direct to retail, DTC, or individual recipients.' },
  { num: '07', title: 'COGS Optimization', desc: 'Lower per-unit cost without making the brand feel cheaper. Spec re-engineering, alternative materials, and supplier negotiation that routinely saves new clients 10\u201325%.' },
  { num: '08', title: 'Retail Readiness', desc: 'Pass the buyer\u2019s compliance review the first time. Barcoding, case packs, master cartons, and retailer documentation for Ulta, Sephora, Target, and specialty retail.' },
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
        <h1>Packaging Design and<br />Manufacturing.<br /><em>One Relationship.</em></h1>
        <p>Structural engineering, global production, quality control, and fulfillment for brands producing 500 to 500,000+ units.</p>
        <button type="button" className="bi" onClick={() => openModal('Capabilities - Packaging Audit', 'capabilities-hero')}>Request a Packaging Audit</button>
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
          <button type="button" className="bi" onClick={() => openModal('Capabilities - Packaging Audit', 'capabilities-bottom-cta')}>Request a Packaging Audit</button>
        </div>
      </section>
    </>
  )
}
