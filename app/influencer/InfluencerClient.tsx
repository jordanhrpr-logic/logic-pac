'use client'

import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const influencerFaqs = [
  { question: "What's the minimum order for influencer kits and PR mailers?", answer: 'We can produce as few as 50\u2013100 units for smaller programs, scaling to 5,000+. Pricing improves significantly at 500+.' },
  { question: 'Can you ship PR kits directly to influencer addresses?', answer: 'Yes \u2014 our SLC warehouse kits, packs, and ships to individual creator addresses. You provide the list, we handle the rest.' },
  { question: 'Do you work directly with PR agencies on influencer kits?', answer: "Absolutely. We work with PR and creative agencies regularly. Brief us directly and we'll coordinate without pulling in the end client." },
  { question: 'How fast can you produce a custom influencer kit?', answer: 'For simpler configurations, 6 weeks is achievable. Fully custom builds need 10\u201312 weeks. Book a call for a straight answer.' },
  { question: 'Can you personalize influencer kits with creator names?', answer: "Yes \u2014 foil-stamped names, custom stickers, or variable-print inserts. We'll spec the right approach for your quantity and budget." },
]

const components = [
  { num: '01', title: 'Custom PR Mailers', desc: 'Branded outer boxes designed to survive transit and deliver a moment when they arrive.' },
  { num: '02', title: 'Luxury Unboxing Structures', desc: 'Rigid interior gift boxes, magnetic closure, ribbon lifts, and layer-by-layer reveal designs built for the camera.' },
  { num: '03', title: 'Branded Inserts & Cards', desc: 'Custom-printed note cards, product story cards, seeded paper inserts that deepen the connection with creators.' },
  { num: '04', title: 'Specialty Fills & Wrapping', desc: 'Custom tissue, ribbon, crinkle fill, fabric pouches \u2014 every layer reinforces brand identity and extends the filming moment.' },
  { num: '05', title: 'Kitting & Assembly', desc: 'Our SLC warehouse handles assembly and packing so every unit ships exactly right on tight campaign windows.' },
  { num: '06', title: 'Direct-to-Recipient Fulfillment', desc: 'Ship directly to creator addresses. You provide the recipient list \u2014 we handle packing, shipping, and tracking.' },
]

export default function InfluencerClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="kph">
        <div className="kphv" style={{ background: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)' }}>
          <div>
            <div className="kvl">Campaign Production</div>
            <div className="kvt" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>PR &amp; Influencer<br />Kits Built for<br /><em>the Camera</em></div>
            <div className="kvr"></div>
            <div className="kvs">50 to 5,000+ Units</div>
          </div>
        </div>
        <div className="kphc">
          <h1>PR Kits That Get<br />Posted. <em>Every</em> Time.</h1>
          <p>We design and produce influencer kits that creators actually want to share &mdash; because the packaging is part of the narrative, not just the container.</p>
          <button className="bp" onClick={() => openModal('Influencer / PR Kit')}>Request a Quote</button>
        </div>
      </div>

      <div className="incs">
        <div className="ey">What we build</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Custom Influencer Kits for Brands &amp; Agencies</h2>
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
          <h2>Producing Influencer Kits That Actually Get Posted</h2>
          <p>Brands that invest in the packaging experience generate significantly more organic content per send. As an influencer kit producer, we design every structural choice with the unboxing moment in mind.</p>
          <h3>What Separates a Shareable Influencer Kit from a Forgettable One?</h3>
          <ul>
            <li>A distinctive outer structure sets the tone before it&apos;s even opened</li>
            <li>Layered reveals extend the filming moment and give creators more to show</li>
            <li>Personalized elements &mdash; names, custom cards &mdash; drive emotional response</li>
            <li>Quality materials signal the brand takes the relationship seriously</li>
          </ul>
          <h3>Working Directly with PR Agencies as a Packaging Vendor</h3>
          <p>Most of our influencer kit projects start with a brief from a PR agency or creative studio. We coordinate production, specs, and delivery without pulling you into factory conversations &mdash; operating as your agency&apos;s production arm, on-brand and on-time.</p>
          <h3>Lead Times for Custom PR Mailer Packaging</h3>
          <p>For simpler configurations, 6 weeks is achievable. Fully custom builds with rigid structures, specialty finishes, and custom inserts typically require 10&ndash;12 weeks. Book a call for a straight answer on your specific project.</p>
        </div>
        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Influencer Kit FAQs"
            faqs={influencerFaqs}
            ctaText="Book an Influencer Consultation"
            ctaProjectType="Influencer / PR Kit"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Make the Unboxing<br /><em>Worth Posting</em></h2>
          <p>Tell us your campaign, timeline, and quantities. We&apos;ll tell you how to make it happen.</p>
          <button className="bi" onClick={() => openModal('Influencer / PR Kit')}>Book a Consultation</button>
        </div>
      </section>
    </>
  )
}
