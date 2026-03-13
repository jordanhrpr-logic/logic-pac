'use client'

import { useModal } from '@/components/ModalContext'
import { HolidayWindowLabel } from '@/components/SeasonalBar'
import FAQSidebar from '@/components/FAQSidebar'

const holidayFaqs = [
  { question: "What's the minimum order for custom holiday gift set packaging?", answer: 'Most custom rigid box holiday kits start at 500\u20131,000 units. Advent calendars typically start at 500+.' },
  { question: 'Do you offer kitting and assembly for holiday gift sets?', answer: 'Yes \u2014 our Salt Lake City warehouse handles product kitting, assembly, and outbound fulfillment.' },
  { question: 'Can you handle Ulta, Sephora, and Target packaging compliance?', answer: 'Retailer compliance is standard in our process. We manage barcoding, master carton labeling, and retailer documentation.' },
  { question: 'How much does custom holiday gift set packaging cost?', answer: "Cost depends on structure, quantity, and materials. Book a call and we'll give you a realistic range within 48 hours." },
  { question: 'Do you offer FSC-certified and sustainable packaging?', answer: 'Yes \u2014 FSC-certified boards, recycled content, soy-based inks, and recyclable structures available.' },
  { question: 'How long does custom holiday packaging take to produce?', answer: 'Custom holiday packaging typically requires 5\u20137 months total: structural tooling, sample approval, mass production, and ocean freight.' },
]

const components = [
  { num: '01', title: 'Gift Box Structure', desc: 'Rigid set-up boxes, magnetic closure, two-piece construction, lift-lid \u2014 engineered to your product configuration and unboxing sequence.' },
  { num: '02', title: 'Inserts & Trays', desc: 'Custom thermoformed, foam, or paper pulp inserts designed to your exact product dimensions for protection and presentation.' },
  { num: '03', title: 'Specialty Materials', desc: 'Velvet, linen, specialty papers, foil finishes, soft-touch lamination, embossing \u2014 materials that justify the premium price point.' },
  { num: '04', title: 'Advent Calendars', desc: 'Countdown structures in any configuration \u2014 flip doors, pull drawers, multi-layer reveals \u2014 that drive pre-season sell-through.' },
  { num: '05', title: 'Branded Fills & Wrapping', desc: 'Custom-printed tissue, ribbon, and specialty fill. Every layer of the unboxing experience matters at the holiday price point.' },
  { num: '06', title: 'Retail-Ready Compliance', desc: 'Barcodes, FSC paperwork, retailer compliance, and master carton specs for Ulta, Sephora, and Target \u2014 built in from the start.' },
]

export default function HolidayClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="kph">
        <div className="kphv" style={{ background: 'linear-gradient(135deg,#0d1b2a,#1a2a4a,#2a1f3d)' }}>
          <div>
            <div className="kvl">Seasonal Production &mdash; Slots Open</div>
            <div className="kvt" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>Holiday Gift Set<br />Packaging for<br /><em>Beauty Brands</em></div>
            <div className="kvr"></div>
            <div className="kvs"><HolidayWindowLabel /></div>
          </div>
        </div>
        <div className="kphc">
          <h1>Q4&apos;s Biggest Revenue<br />Moment <em>Starts Now</em></h1>
          <p>Holiday kits are the highest-revenue SKUs for most beauty brands. The packaging that earns the gift table requires structural precision, premium materials, and a partner who has done it at scale.</p>
          <button className="bp" onClick={() => openModal('Holiday Gift Set / Seasonal Kit')}>Request a Quote</button>
        </div>
      </div>

      <div className="incs">
        <div className="ey">What we produce</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Every Component of Your Holiday Kit, Handled</h2>
        <div className="incg">
          {components.map(c => (
            <div key={c.num} className="ii">
              <div className="iin">{c.num}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hr"></div>

      <div className="kcr">
        <div className="seo">
          <h2>Choosing a Holiday Gift Set Packaging Manufacturer</h2>
          <p>Holiday gift sets are the highest-revenue SKUs for most cosmetic brands. A well-executed kit justifies a premium price point, drives gifting consideration, and earns reorders from retail buyers. Here&apos;s what separates a strong holiday packaging partner from a generic custom box manufacturer.</p>
          <h3>What Makes Beauty Holiday Packaging Different from Standard Packaging?</h3>
          <ul>
            <li>Perceived value must exceed unit cost &mdash; luxury feel at realistic price points</li>
            <li>Component security &mdash; inserts must protect glass, tubes, and aerosols in transit</li>
            <li>Retail compliance &mdash; Ulta, Sephora, Target specs are non-negotiable</li>
            <li>Sustainability expectations &mdash; FSC and recycled content increasingly required</li>
          </ul>
          <h3>Holiday Gift Set Production Lead Times</h3>
          <p>Structural tooling (4&ndash;8 wks) + sample approval (3&ndash;6 wks) + mass production (6&ndash;12 wks) + ocean freight and customs (6&ndash;8 wks) = 5&ndash;7 months total. For November retail, that means a March or April start with your packaging vendor.</p>
          <h3>Custom Holiday Packaging Costs</h3>
          <p>Pricing depends on structure type, quantity, materials, and finishing. Rigid gift boxes with magnetic closure and custom inserts range widely based on complexity and volume. As a dedicated holiday gift set manufacturer, we provide realistic pricing within 48 hours of an initial scoping call.</p>
          <h3>Retail Packaging Compliance for Ulta, Sephora, and Target</h3>
          <p>Retailer compliance is built into our process from the start. We manage barcoding, master carton labeling, FSC documentation, and retailer-specific requirements for Ulta, Sephora, Target, and specialty retail channels.</p>
        </div>
        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Holiday Kit FAQs"
            faqs={holidayFaqs}
            ctaText="Book a Holiday Consultation"
            ctaProjectType="Holiday Gift Set / Seasonal Kit"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Don&apos;t Let Your Q4<br />Launch <em>Start Late</em></h2>
          <p>Book a 30-minute call. We&apos;ll scope your holiday kit and tell you exactly what we need to get started.</p>
          <button className="bi" onClick={() => openModal('Holiday Gift Set / Seasonal Kit')}>Book a Holiday Kit Consultation</button>
        </div>
      </section>
    </>
  )
}
