'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const wellnessFaqs = [
  { question: 'What MOQs do you work with for wellness packaging?', answer: 'Standard formats like folding cartons and pouches start at 1,000 units. Rigid boxes and custom structures start at 500. Fully custom tooling typically starts at 5,000+ units. Pricing improves at higher volumes, and multi-SKU orders can share tooling and production runs.' },
  { question: 'Do you handle supplement packaging compliance?', answer: 'We produce packaging that meets FDA labeling layout requirements, accommodates Supplement Facts panels, and supports child-resistant and tamper-evident closures where required. Your regulatory team owns the label claims; we ensure the packaging structure and print accommodate them correctly.' },
  { question: 'Can you produce subscription box packaging?', answer: 'Yes. We design modular box structures that accommodate product rotation across subscription cycles. Fixed outer dimensions with variable inserts let you change the product mix without retooling the box.' },
  { question: 'What sustainable packaging options are available for wellness brands?', answer: 'PCR content (post-consumer recycled resin and board), FSC-certified paperboard, compostable materials, mono-material recyclable designs, and soy-based inks. We help you select the option that matches your sustainability claims, retailer requirements, and budget.' },
  { question: 'Do you work with Amazon and DTC fulfillment requirements?', answer: 'Yes. We produce packaging that meets Amazon Frustration-Free Packaging and Ships in Own Container (SIOC) certification requirements, as well as standard DTC shipping constraints for parcel carriers.' },
  { question: 'How long does a wellness packaging program take?', answer: 'Standard formats with existing tooling can ship in 8 to 12 weeks. Fully custom structures with specialty finishes, custom tooling, and overseas production require 12 to 20 weeks including sampling, approval, production, and freight.' },
]

const components = [
  { num: '01', title: 'Supplement & Nutraceutical Packaging', desc: 'Bottles, jars, pouches, stick packs, and sachets. Structures engineered for powder, capsule, liquid, and gummy formats with proper barrier and closure requirements.' },
  { num: '02', title: 'Wellness Kits & Bundles', desc: 'Multi-product sets, subscription boxes, starter kits, and gift packs. Modular insert systems that accommodate product rotation across cycles.' },
  { num: '03', title: 'Retail-Ready Formats', desc: 'Packaging that meets Whole Foods, Sprouts, Target, Amazon, and specialty retail requirements. Barcoding, master carton specs, shelf-ready display configurations.' },
  { num: '04', title: 'Sustainable Materials', desc: 'PCR content, FSC-certified boards, compostable substrates, mono-material recyclable designs, and soy-based inks. Matched to your sustainability claims and retailer requirements.' },
  { num: '05', title: 'Quality Control & Compliance', desc: 'FDA labeling layout verification, child-resistant closure testing, tamper-evident features, and pre-production through pre-shipment QC at every stage.' },
  { num: '06', title: 'Kitting & Fulfillment', desc: 'Subscription assembly, DTC shipping, retail distribution prep. Our SLC warehouse handles product kitting, packing, and outbound logistics.' },
]

export default function WellnessClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="kph">
        <div className="kphv" style={{ background: 'linear-gradient(135deg,#0d2818,#1a4a2e,#2d6a4f)' }}>
          <Image src="/images/portfolio/velvet-interior-unboxing-kit.jpeg" alt="Premium wellness packaging kit with velvet interior and custom inserts" fill style={{ objectFit: 'cover' }} priority />
          <div>
            <div className="kvl">Wellness Packaging</div>
            <div className="kvt" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>From Supplements<br />to Self-Care<br /><em>Packaging That Scales</em></div>
            <div className="kvr"></div>
            <div className="kvs">From 1,000 to 100K+ Units</div>
          </div>
        </div>
        <div className="kphc">
          <h1>Custom Packaging for<br />Health &amp; Wellness<br /><em>Brands</em></h1>
          <p>We design and produce packaging for supplement, nutraceutical, self-care, and wellness brands. From a single SKU launch to a managed production program with retail compliance, sustainable materials, and fulfillment.</p>
          <button type="button" className="bp" onClick={() => openModal('Wellness Packaging', 'wellness-hero')}>Discuss Your Packaging</button>
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
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Custom Packaging for Health &amp; Wellness Brands</h2>
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
        <div className="ey">Production at Scale</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Programs We&apos;ve Managed</h2>
        <div className="incg" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <Link href="/work/epicutis" className="bty-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/epicutis-kits-group.jpg" alt="Epicutis multi-SKU packaging program" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Epicutis &mdash; 21+ SKU System</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>Premium skincare and wellness. 3 SKUs to 21+, managed inventory, 15% verified cost savings.</p>
          </Link>
          <div style={{ display: 'block' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/cosmetics-folding-carton.jpeg" alt="Retail folding carton — 50,000 units with compliance documentation" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Retail Folding Carton &mdash; 50K Units</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>Foil stamp, emboss, retailer compliance documentation. Production-scale volume.</p>
          </div>
          <div style={{ display: 'block' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src="/images/portfolio/velvet-interior-unboxing-kit.jpeg" alt="Premium kit system with velvet interior and custom compartments" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 style={{ marginTop: 12, fontSize: 16 }}>Premium Kit System</h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>Multi-product kitting with custom inserts, velvet interior, and branded presentation.</p>
          </div>
        </div>
      </section>

      <div className="hr"></div>

      <div className="kcr">
        <div className="seo">
          <h2>Packaging That Scales With Your Wellness Brand</h2>
          <p>Wellness packaging carries requirements that general packaging vendors routinely miss. Supplement Facts panel layout, child-resistant closures for certain product categories, tamper-evident features for ingestibles, and sustainability certifications that retailers increasingly require as a condition of shelf placement. These are not add-ons. They are structural decisions that need to be made before the first sample is produced.</p>

          <h3>Why Wellness Brands Outgrow Stock Packaging</h3>
          <p>Most wellness brands launch with stock bottles and generic cartons. That works for the first production run. It stops working when the product line expands, retail channels demand compliance documentation, subscription models require modular packaging, and customers expect the unboxing to reflect the brand&apos;s quality positioning.</p>
          <p>The transition from stock to custom is not just a design upgrade. It is an operational shift: tooling decisions, material specifications, supplier qualification, QC protocols, and inventory management all need to be addressed at the same time. Our <Link href="/guides/cost-moq-landed-cost-planning?utm_source=wellness&utm_medium=organic&utm_campaign=seo_service_page&utm_content=wellness_cost_guide">cost, MOQ, and landed-cost planning guide</Link> covers the economics of this transition.</p>

          <h3>Compliance and Quality at Scale</h3>
          <p>FDA labeling requirements, child-resistant closure standards, and tamper-evident packaging are non-negotiable for many wellness product categories. We build these requirements into the packaging specification from the start, not as afterthoughts. Our <Link href="/guides/packaging-testing-quality-control?utm_source=wellness&utm_medium=organic&utm_campaign=seo_service_page&utm_content=wellness_qc_guide">packaging testing and quality control guide</Link> details the QC framework we apply to every production run.</p>

          <h3>Sustainability as a Shelf Requirement</h3>
          <p>Whole Foods, Sprouts, Target, and Amazon increasingly require sustainability documentation as part of the vendor onboarding process. PCR content, FSC certification, recyclability claims, and material reduction programs are moving from differentiators to requirements. Our <Link href="/guides/sustainable-beauty-packaging?utm_source=wellness&utm_medium=organic&utm_campaign=seo_service_page&utm_content=wellness_sustainability_guide">sustainable packaging playbook</Link> covers the options and tradeoffs by material category.</p>

          <h3>The Managed-Program Approach</h3>
          <p>We run wellness packaging as a managed program: one team owns structural design, material sourcing, production, quality control, inventory, and fulfillment. This is the same model we use for beauty brands at scale. For brands running repeat production, our <Link href="/production?utm_source=wellness&utm_medium=organic&utm_campaign=seo_service_page&utm_content=wellness_production_page">production packaging page</Link> covers what changes at 10K, 50K, and 100K+ units.</p>

          <h3>Getting Started</h3>
          <p>If you have existing packaging and want an honest assessment, start with a <Link href="/packaging-audit?utm_source=wellness&utm_medium=organic&utm_campaign=seo_service_page&utm_content=wellness_audit_cta">packaging audit</Link>. If you are launching a new product or expanding your line, bring us the brief and we will scope the program.</p>
        </div>
        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Wellness Packaging FAQs"
            faqs={wellnessFaqs}
            ctaText="Book a Wellness Packaging Consultation"
            ctaProjectType="Wellness Packaging"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Packaging Built for<br /><em>What&apos;s Inside</em></h2>
          <p>Tell us about your product line, volume, channels, and compliance requirements. We will give you a realistic plan and a clear production path.</p>
          <button type="button" className="bi" onClick={() => openModal('Wellness Packaging', 'wellness-bottom-cta')}>Book a Wellness Consultation</button>
        </div>
      </section>
    </>
  )
}
