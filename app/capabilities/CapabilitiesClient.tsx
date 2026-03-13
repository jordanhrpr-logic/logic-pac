'use client'

import { useModal } from '@/components/ModalContext'

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

export default function CapabilitiesClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Full-service packaging</div>
        <h1>Everything Your<br />Packaging Needs,<br /><em>Under One Roof</em></h1>
        <p>Structural design, engineering, global sourcing, manufacturing, quality control, and fulfillment &mdash; managed by one accountable team.</p>
        <button className="bi" onClick={() => openModal()}>Start a Project</button>
      </div>
      <div className="fcg">
        {features.map(f => (
          <div key={f.num} className="fci">
            <div className="fcin">{f.num}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
      <section className="ctas">
        <div className="ctai">
          <h2>Start with a 30-Minute<br /><em>Project Scoping Call</em></h2>
          <p>Tell us what you&apos;re building. We&apos;ll tell you what it takes to get there.</p>
          <button className="bi" onClick={() => openModal()}>Book a Free Consultation</button>
        </div>
      </section>
    </>
  )
}
