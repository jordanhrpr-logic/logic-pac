'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const beautyFaqs = [
  { question: 'What packaging formats does Logic Pac produce for beauty brands?', answer: 'Folding cartons, rigid set-up boxes, tubes and cylinders, drawer boxes, magnetic-closure gift sets, retail shelf-ready displays, and multi-SKU kitting. We match the format to your product, channel, and price point.' },
  { question: 'What are the minimum order quantities for beauty packaging?', answer: 'Folding cartons typically start at 1,000 units. Rigid boxes start at 500. Influencer and PR kits start at 50. Pricing improves at higher volumes, and multi-SKU orders can share tooling and production runs.' },
  { question: 'Can you produce packaging for Ulta, Sephora, and Target?', answer: 'Yes. Retailer compliance is standard in our production process. We manage barcoding, master carton specifications, labeling, and retailer documentation for major retail channels.' },
  { question: 'Do you handle skincare and cosmetics packaging specifically?', answer: 'Skincare and cosmetics are our primary categories. We produce primary packaging (folding cartons around bottles, jars, tubes), secondary packaging (kits, gift sets, displays), and retail-ready formats across these categories.' },
  { question: 'How long does beauty packaging take to produce?', answer: 'Simple folding carton programs can ship in 8 to 10 weeks. Fully custom rigid boxes with specialty finishes require 12 to 20 weeks including tooling, sampling, production, and freight. We plan backward from your launch date.' },
  { question: 'Can you match colors and finishes across my entire product line?', answer: 'Yes. We run pre-production color proofs and finish samples across every SKU so the full line reads as one system on shelf. Consistency across SKUs is one of the most common problems we solve.' },
]

const components = [
  { num: '01', title: 'Folding Cartons', desc: 'Retail-ready cartons for skincare, cosmetics, and wellness products. Auto-lock, tuck-end, and display-ready formats with foil, emboss, and spot UV.' },
  { num: '02', title: 'Rigid Gift Boxes', desc: 'Magnetic-closure and lift-lid boxes for hero SKUs, kits, and gift sets. Custom inserts, molded trays, and interior printing.' },
  { num: '03', title: 'Multi-SKU Systems', desc: 'Coordinated packaging across your full product line. Shared tooling, consistent finishes, and a design system that holds from hero launch through line extensions.' },
  { num: '04', title: 'Retail Displays', desc: 'Shelf-ready displays, counter units, and tester trays designed to meet retailer specs and maximize shelf presence.' },
  { num: '05', title: 'Quality Control', desc: 'Pre-production, inline, and pre-shipment QC on every run. Color consistency, structural integrity, and retailer compliance verified before anything ships.' },
  { num: '06', title: 'Warehousing and Fulfillment', desc: 'Packaging inventory staged at our SLC warehouse. Kitting, assembly, and shipment to co-manufacturers, retail DCs, or DTC customers.' },
]

export default function BeautyClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="kph">
        <div className="kphv" style={{ background: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)' }}>
          <Image src="/images/portfolio/premium-beauty-gift-set1.jpg" alt="Premium beauty packaging gift set with magnetic closure and custom inserts" fill style={{ objectFit: 'cover' }} priority />
          <div>
            <div className="kvl">Beauty Packaging</div>
            <div className="kvt" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>Packaging That<br />Performs at Shelf<br /><em>and at Scale</em></div>
            <div className="kvr"></div>
            <div className="kvs">From 500 to 1M+ Units</div>
          </div>
        </div>
        <div className="kphc">
          <h1>Beauty Packaging From<br />First SKU Through<br /><em>Full Product Line</em></h1>
          <p>We design and produce custom packaging for skincare, cosmetics, and wellness brands. From a single hero carton to a coordinated multi-SKU system with retail compliance, managed inventory, and production continuity.</p>
          <button type="button" className="bp" onClick={() => openModal('Beauty Packaging', 'beauty-hero')}>Discuss Your Packaging</button>
        </div>
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

      <div className="incs">
        <div className="ey">What we produce</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Custom Packaging for Skincare, Cosmetics &amp; Wellness</h2>
        <div className="incg">
          {components.map(c => (
            <div key={c.num} className="ii">
              <div className="iin">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hr"></div>

      <section className="jpf">
        <div className="ey">Client Work</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Beauty Packaging We&apos;ve Produced</h2>
        <div className="incg" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <Link href="/work/epicutis" className="bty-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/epicutis-kits-group.jpg" alt="Epicutis skincare packaging system — coordinated multi-SKU program" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Epicutis &mdash; 21+ SKU Packaging System</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>Premium skincare. 3 SKUs to 21+, under 100K to over 1M units annually. 15% verified cost savings.</p>
          </Link>
          <div style={{ display: 'block' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/kiki-world-folding-cartons.jpg" alt="Kiki World multi-SKU folding carton system with coordinated finishes" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Kiki World &mdash; Folding Carton System</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>Multi-SKU carton program with coordinated finishes across product lines.</p>
          </div>
          <div style={{ display: 'block' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/cosmetics-folding-carton.jpeg" alt="Cosmetics folding carton with foil stamp and emboss — Ulta compliant" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Cosmetics Folding Carton &mdash; Ulta Compliant</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>Foil stamp, emboss, retail compliance. 50,000 units.</p>
          </div>
        </div>
      </section>

      <div className="hr"></div>

      <div className="kcr">
        <div className="seo">
          <h2>Custom Packaging for Beauty and Skincare Brands</h2>
          <p>Beauty packaging is not a commodity purchase. The box, carton, or kit is the first physical interaction between your brand and the customer. At retail, it competes on a shelf alongside hundreds of other products. In DTC, it is the entire unboxing experience. In both cases, the packaging carries the brand before the product does.</p>

          <h3>Why Beauty Brands Outgrow Their First Packaging Partner</h3>
          <p>Most brands start with whoever can fill the first order. That works at 1,000 units. It breaks at 10,000. The problems are predictable: color drift between production runs, inconsistent finishes across SKUs, missed retail compliance requirements, and no one managing the coordination between your co-manufacturer, your warehouse, and your launch calendar.</p>
          <p>We solve this by running packaging as a managed program, not a series of one-off orders. One team owns design, sourcing, production, QC, inventory, and fulfillment. See how this works in practice in the <Link href="/work/epicutis?utm_source=beauty&utm_medium=organic&utm_campaign=seo_service_page&utm_content=epicutis_case_study">Epicutis case study</Link>: 3 SKUs to 21+, under 100K to over 1M units annually, with 15% verified cost savings.</p>

          <h3>Scaling from Launch Quantities to Production Volume</h3>
          <p>The packaging decisions that serve a first production run often become liabilities at scale. Tooling amortization, material specifications, supplier capacity, and QC protocols all need to evolve as volume grows. We help brands navigate these transitions without losing the design intent or the margin.</p>
          <ul>
            <li>Re-engineering material specs to reduce per-unit cost without visible compromise</li>
            <li>Consolidating supplier relationships to simplify procurement and improve leverage</li>
            <li>Building managed inventory programs that decouple procurement from cash flow timing</li>
            <li>Maintaining finish and color consistency across growing SKU portfolios</li>
          </ul>
          <p>For a structured approach to evaluating these tradeoffs, use our <Link href="/guides/cost-moq-landed-cost-planning?utm_source=beauty&utm_medium=organic&utm_campaign=seo_service_page&utm_content=beauty_cost_guide">cost, MOQ, and landed-cost planning guide</Link>.</p>

          <h3>Retail Compliance for Major Beauty Channels</h3>
          <p>Ulta, Sephora, Target, Nordstrom, and specialty retail each have specific packaging requirements. Barcoding, master carton labeling, EDI/ASN documentation, shelf-ready display specs, and material certifications are standard in our production process. We manage retailer compliance so it does not become a separate workstream for your operations team. Details are in our <Link href="/guides/retail-ready-beauty-packaging?utm_source=beauty&utm_medium=organic&utm_campaign=seo_service_page&utm_content=beauty_retail_guide">retail-ready packaging guide</Link>.</p>

          <h3>Sustainability and Material Compliance</h3>
          <p>PCR content, FSC-certified boards, mono-material recyclability, SB 54 compliance, and EU PPWR readiness are increasingly table stakes for beauty retail. We help brands select materials that meet regulatory and retailer sustainability requirements without compromising shelf presence. Start with our <Link href="/guides/sustainable-packaging-decision-matrix?utm_source=beauty&utm_medium=organic&utm_campaign=seo_service_page&utm_content=beauty_sustainability_guide">sustainable packaging decision matrix</Link> or the <Link href="/blog/mono-material-packaging-design?utm_source=beauty&utm_medium=organic&utm_campaign=seo_service_page&utm_content=beauty_mono_material_blog">mono-material packaging design guide</Link>.</p>

          <h3>Starting the Conversation</h3>
          <p>The best entry point depends on where you are. If you have existing packaging and want an honest assessment, start with a <Link href="/packaging-audit?utm_source=beauty&utm_medium=organic&utm_campaign=seo_service_page&utm_content=beauty_audit_cta">packaging audit</Link>. If you are launching a new product or reformulating your line, bring us the brief and we will scope the program.</p>
        </div>
        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Beauty Packaging FAQs"
            faqs={beautyFaqs}
            ctaText="Book a Beauty Packaging Consultation"
            ctaProjectType="Beauty Packaging"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Your Product Deserves Packaging<br /><em>That Works as Hard as You Do</em></h2>
          <p>Tell us about your product line, volume, channels, and timeline. We will give you a realistic plan, not a catalog.</p>
          <button type="button" className="bi" onClick={() => openModal('Beauty Packaging', 'beauty-bottom-cta')}>Book a Beauty Consultation</button>
        </div>
      </section>
    </>
  )
}
