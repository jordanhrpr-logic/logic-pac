'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import ScrollReveal from '@/components/ScrollReveal'
import SeasonalBar, { SeasonalStatus } from '@/components/SeasonalBar'
import Timeline from '@/components/Timeline'
import FAQSidebar from '@/components/FAQSidebar'

const homeFaqs = [
  { question: 'What does Logic Pac do?', answer: 'Logic Pac is a custom packaging company for beauty, cosmetic, and consumer brands. We handle structural design, global manufacturing, quality control, and fulfillment \u2014 all under one roof.' },
  { question: 'What is the minimum order quantity for custom packaging?', answer: 'Minimums depend on format. Influencer kits start at 50\u2013100 units. Rigid gift boxes and folding cartons typically start at 500\u20131,000 units.' },
  { question: 'Where does Logic Pac manufacture packaging?', answer: 'We source from vetted factories across China, Vietnam, Thailand, India, and Mexico \u2014 matched to your project based on quality, MOQ, and timeline.' },
  { question: 'How long does custom packaging take to produce?', answer: 'Timelines vary by complexity. Simple programs can ship in 6\u20138 weeks. Fully custom rigid boxes typically require 12\u201320 weeks including tooling, sampling, and freight.' },
  { question: 'Does Logic Pac handle fulfillment and kitting?', answer: 'Yes. Our Salt Lake City warehouse handles product kitting, assembly, and ships direct to retail, DTC, or individual recipients.' },
]

export default function HomeClient() {
  const { openModal } = useModal()

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="htag">Packaging Development Partner</div>
          <h1>The Packaging Partner<br />Serious Brands <em>Rely On</em></h1>
          <p className="hbody">We design, engineer, source, and deliver custom packaging for brands that compete at the highest level. From structural brief to final delivery &mdash; one team, full accountability.</p>
          <div className="hacts">
            <button className="bp" onClick={() => openModal()}>Book a Consultation</button>
            <Link href="/work" className="bg">See Our Work &rarr;</Link>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hstats">
            <div className="hs"><div className="hs-n">20<sup>+</sup></div><div className="hs-l">Years Supply Chain</div></div>
            <div className="hs"><div className="hs-n">15<sup>+</sup></div><div className="hs-l">Countries Sourced</div></div>
            <div className="hs"><div className="hs-n">100<sup>+</sup></div><div className="hs-l">Brands Served</div></div>
          </div>
          <SeasonalBar />
        </div>
      </div>

      {/* IDENTITY BLOCK */}
      <article className="identity" aria-label="About Logic Pac">
        <div className="identity-inner">
          <h2>About Logic Pac &mdash; Custom Packaging Company</h2>
          <p><strong>Logic Pac</strong> is a custom packaging company and development partner based in Orange County, California, specializing in structural design, global sourcing, and fulfillment for beauty, cosmetic, and consumer brands. Backed by <strong>Logic Agency Inc.</strong> &mdash; with 20+ years in supply chain operations across 15+ countries &mdash; we serve brands from concept through final delivery.</p>
          <h3>Packaging Services</h3>
          <p>As a full-service packaging vendor and beauty packaging manufacturer, Logic Pac produces: custom holiday gift set packaging (rigid boxes, advent calendars, multi-component kits), influencer kits and PR mailers (50 to 5,000+ units with direct-to-recipient fulfillment), retail folding cartons and shelf-ready displays, rigid set-up boxes with magnetic closure, and specialty finishes including soft-touch lamination, foil stamping, embossing, and spot UV.</p>
          <h3>Manufacturing &amp; Fulfillment</h3>
          <p>Logic Pac operates as a cosmetic packaging supplier with factory relationships across China, Vietnam, Thailand, India, and Mexico. Our Salt Lake City warehouse provides packaging fulfillment services including kitting, assembly, and direct-to-retail or DTC shipping. We are a trusted packaging vendor for beauty brands selling at Ulta, Sephora, Target, and specialty retail.</p>
          <h3>Who We Serve</h3>
          <p>Brands and agencies searching for a custom box manufacturer, holiday gift set manufacturer, influencer kit producer, PR mailer company, folding carton supplier, or rigid box manufacturer choose Logic Pac for our end-to-end accountability, quality control at every stage, and 20+ years of supply chain expertise.</p>
        </div>
      </article>

      {/* BRAND BAR */}
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

      {/* PORTFOLIO GRID */}
      <ScrollReveal className="gprev">
        <div className="gprevh">
          <div><div className="ey">Portfolio</div><h2>Recent Work &amp;<br /><em>Case Studies</em></h2></div>
          <Link href="/work" className="vab">View Full Portfolio &rarr;</Link>
        </div>
        <div className="ggrid">
          <Link href="/work" className="ge ge-a" style={{ background: 'linear-gradient(135deg,#1a1a2e,#0f3460)' }}><Image src="/images/portfolio/premium-beauty-gift-set1.jpg" alt="Premium Beauty Gift Set — custom holiday packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" /><div className="geov"><div className="gecat">Holiday Kits</div><div className="genm">Premium Beauty Gift Set</div></div></Link>
          <Link href="/work" className="ge ge-b" style={{ background: 'linear-gradient(135deg,#0f2027,#2c5364)' }}><Image src="/images/portfolio/skincare-launch-pr-mailer.jpg" alt="Skincare Launch PR Mailer — influencer kit by Logic Pac" fill style={{ objectFit: 'cover', objectPosition: 'center 70%' }} sizes="(max-width: 768px) 100vw, 33vw" /><div className="geov"><div className="gecat">Influencer Kits</div><div className="genm">Skincare Launch PR Mailer</div></div></Link>
          <Link href="/work" className="ge ge-c" style={{ background: 'linear-gradient(135deg,#360033,#0b8793)' }}><Image src="/images/portfolio/cosmetics-folding-carton.jpeg" alt="Cosmetics Folding Carton — retail packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" /><div className="geov"><div className="gecat">Retail</div><div className="genm">Cosmetics Folding Carton</div></div></Link>
          <Link href="/work" className="ge ge-d" style={{ background: 'linear-gradient(135deg,#2d1b69,#11998e)' }}><Image src="/images/portfolio/24-door-advent-calendar.jpeg" alt="24-Door Advent Calendar — holiday packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" /><div className="geov"><div className="gecat">Holiday Kits</div><div className="genm">24-Door Advent Calendar</div></div></Link>
          <Link href="/work" className="ge ge-e" style={{ background: 'linear-gradient(135deg,#1e3c72,#2a5298)' }}><Image src="/images/portfolio/foil-stamped-cylinder.jpeg" alt="Foil-Stamped Cylinder — specialty packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" /><div className="geov"><div className="gecat">Specialty</div><div className="genm">Foil-Stamped Cylinder</div></div></Link>
        </div>
        <div className="ggrid" style={{ marginTop: 3 }}>
          <Link href="/work" className="ge ge-f" style={{ background: 'linear-gradient(135deg,#0a0a0a,#434343)' }}><Image src="/images/portfolio/velvet-interior-unboxing-kit.jpeg" alt="Velvet Interior Unboxing Kit — influencer packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" /><div className="geov"><div className="gecat">Influencer Kits</div><div className="genm">Velvet Interior Unboxing Kit</div></div></Link>
          <Link href="/work" className="ge ge-g" style={{ background: 'linear-gradient(135deg,#16222a,#3a6073)' }}><Image src="/images/portfolio/shelf-ready-display-unit.jpeg" alt="Shelf-Ready Display Unit — retail packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" /><div className="geov"><div className="gecat">Retail</div><div className="genm">Shelf-Ready Display Unit</div></div></Link>
          <Link href="/work" className="ge ge-h" style={{ background: 'linear-gradient(135deg,#141e30,#243b55)' }}><Image src="/images/portfolio/soft-touch-spot-uv.jpg" alt="Soft-Touch + Spot UV — premium finish packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" /><div className="geov"><div className="gecat">Specialty Finishes</div><div className="genm">Soft-Touch + Spot UV</div></div></Link>
        </div>
        <div style={{ padding: '36px 80px 0' }}><Link href="/work" className="bo">View Full Portfolio &amp; Case Studies</Link></div>
      </ScrollReveal>

      {/* WHY SECTION */}
      <ScrollReveal className="poss">
        <div className="posl">
          <div className="ey">Why Logic Pac</div>
          <h2>Not a Broker.<br />Not a Factory.<br /><em>Your Partner.</em></h2>
          <p className="posbody">Most brands have experienced the disconnect &mdash; a packaging vendor who disappears after placing the PO, a factory that doesn&apos;t understand brand standards, a 3PL that doesn&apos;t talk to the packaging team. We close all of that gap. One custom packaging company, one relationship, from concept to your warehouse door.</p>
          <button className="bo" onClick={() => openModal()}>Start a Project</button>
        </div>
        <div className="posr">
          <div className="pospt"><h4>Judgment, not just execution</h4><p>We know which factory is right for which job. That accumulated judgment is what you&apos;re buying.</p></div>
          <div className="pospt"><h4>Problems caught before they ship</h4><p>Pre-production, inline, and pre-shipment QC on every run. We&apos;ve already made the mistakes that teach you what to look for.</p></div>
          <div className="pospt"><h4>One accountable team</h4><p>Design, sourcing, production, QC, freight, delivery. When something needs solving, there&apos;s one number to call.</p></div>
        </div>
      </ScrollReveal>

      <div className="hr"></div>

      {/* FORMATS */}
      <ScrollReveal className="fmts">
        <div className="fmti"><h2>Every Format.<br />Every Finish.<br /><em>Every Detail.</em></h2><p>From a single SKU folding carton to a multi-component holiday gift set &mdash; we work across every format, material, and finish category.</p></div>
        <div className="fmtg">
          <div className="fg"><div className="fgcat">Structure</div><div className="fgnm">Rigid Set-Up Boxes</div><div className="fgsp"><span className="fgs hi">Magnetic Closure</span><span className="fgs">Lift Lid</span><span className="fgs hi">Soft-Touch Lam.</span></div><div className="fgd">The standard for premium gifting and unboxing from a dedicated rigid box manufacturer. Full customization on dimension, material weight, and closure.</div></div>
          <div className="fg"><div className="fgcat">Structure</div><div className="fgnm">Folding Cartons</div><div className="fgsp"><span className="fgs">Auto-Lock</span><span className="fgs hi">Foil Stamp</span><span className="fgs hi">Spot UV</span></div><div className="fgd">Retail&apos;s primary format from an experienced folding carton supplier. Engineered for structural integrity, print fidelity, and retailer compliance.</div></div>
          <div className="fg"><div className="fgcat">Seasonal</div><div className="fgnm">Advent Calendars</div><div className="fgsp"><span className="fgs hi">Multi-Reveal</span><span className="fgs">Flip Doors</span><span className="fgs">Pull Drawer</span></div><div className="fgd">Complex multi-compartment structures for holiday countdown programs.</div></div>
          <div className="fg"><div className="fgcat">Campaign</div><div className="fgnm">PR &amp; Influencer Kits</div><div className="fgsp"><span className="fgs hi">Unboxing Design</span><span className="fgs hi">Direct Ship</span></div><div className="fgd">Structures designed for the camera. Layered reveals, custom fills, fulfillment direct to creators.</div></div>
          <div className="fg"><div className="fgcat">Retail</div><div className="fgnm">Display &amp; Shelf-Ready</div><div className="fgsp"><span className="fgs">PDQ Trays</span><span className="fgs hi">FSDU</span><span className="fgs">Countertop</span></div><div className="fgd">Retail-ready display structures that meet buyer specs and survive a full sell-through cycle.</div></div>
          <div className="fg"><div className="fgcat">Structure</div><div className="fgnm">Tubes &amp; Cylinders</div><div className="fgsp"><span className="fgs hi">Foil Stamp</span><span className="fgs">Emboss</span><span className="fgs">Kraft</span></div><div className="fgd">Cylindrical forms for fragrance, skincare, and specialty cosmetics.</div></div>
          <div className="fg"><div className="fgcat">Kitting</div><div className="fgnm">Multi-Component Kits</div><div className="fgsp"><span className="fgs hi">Custom Inserts</span><span className="fgs">Thermoform</span><span className="fgs hi">Paper Pulp</span></div><div className="fgd">Gift set configurations with engineered inserts for any product combination.</div></div>
          <div className="fg"><div className="fgcat">Finishing</div><div className="fgnm">Premium Finishes</div><div className="fgsp"><span className="fgs hi">Soft-Touch Lam.</span><span className="fgs hi">Spot UV</span><span className="fgs hi">Velvet Coat</span><span className="fgs">Deboss</span></div><div className="fgd">Every premium finish applied with precision and managed across full production runs.</div></div>
        </div>
      </ScrollReveal>

      {/* CAPABILITIES GRID */}
      <ScrollReveal className="caps">
        <h2 style={{ fontSize: 'clamp(28px,3vw,42px)', marginBottom: 0 }}>Full-Stack Packaging.<br />One Team. One Relationship.</h2>
        <div className="capg">
          <div className="ci"><h3>Structural Design &amp; Engineering</h3><p>Die-line development, 3D rendering, and physical prototypes &mdash; approved before a single unit ships.</p></div>
          <div className="ci"><h3>Graphic &amp; Print Prep</h3><p>Print-ready files, color management, foil and embossing specs. We bridge your creative team and the factory floor.</p></div>
          <div className="ci"><h3>Global Manufacturing</h3><p>Packaging manufacturer relationships across 15+ countries. We match your project to the right factory &mdash; not whoever&apos;s easiest.</p></div>
          <div className="ci"><h3>Quality Control &amp; Audits</h3><p>Pre-production, inline, and pre-shipment QC at every stage. Problems caught before they ship.</p></div>
          <div className="ci"><h3>Compliance &amp; Certification</h3><p>FSC, FDA compliance, material safety testing, and full retailer documentation for major retail channels.</p></div>
          <div className="ci"><h3>Freight, Customs &amp; Fulfillment</h3><p>International freight, customs clearance, kitting and packaging fulfillment services from our SLC warehouse.</p></div>
        </div>
      </ScrollReveal>

      {/* AGENCIES */}
      <ScrollReveal className="ags">
        <div className="agl">
          <div className="ey inv">Working with agencies</div>
          <h2>We Work Directly<br />with <em>PR &amp; Creative Agencies</em></h2>
          <p>Many of our best projects start with a brief from a PR firm or creative agency. Brief us directly &mdash; we coordinate production and delivery without pulling you into factory conversations.</p>
        </div>
        <div className="agr">
          <div className="agpt hi"><h4>Take the brief directly</h4><p>Brief us like a production partner &mdash; we&apos;ll run with it.</p></div>
          <div className="agpt"><h4>White-label production available</h4><p>We operate as your production arm without client-facing branding.</p></div>
          <div className="agpt"><h4>Campaign windows understood</h4><p>Influencer send dates don&apos;t move. We build around your launch.</p></div>
          <div className="agpt"><h4>Scale with your client roster</h4><p>Multiple concurrent programs without quality degradation.</p></div>
        </div>
      </ScrollReveal>

      {/* KITS */}
      <div className="kits">
        <div className="kr">
          <div className="kv dk" style={{ background: 'linear-gradient(135deg,#0d1b2a,#1b2838,#2a1f3d)' }}>
            <Image src="/images/kits/holiday-kits.jpg" alt="Custom holiday gift set packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            <div>
              <div className="kvl">Seasonal Production</div>
              <div className="kvt">Holiday Kits<br />that <em>Sell Through</em></div>
              <div className="kvr"></div>
              <div className="kvs"><SeasonalStatus /></div>
            </div>
          </div>
          <div className="kcon">
            <div className="ey">Holiday Gift Sets</div>
            <h3>Holiday Production Starts Months Ahead</h3>
            <p>Custom packaging has a 5&ndash;7 month lead time. The window to get the best factories and pricing is open right now.</p>
            <ul className="fl">
              <li>Rigid gift boxes, magnetic closure, lift-lid, two-piece construction</li>
              <li>Advent calendar structures and multi-component kit configurations</li>
              <li>FSC-certified and sustainable material options</li>
              <li>Full timeline management from brief to final delivery</li>
            </ul>
            <div className="kacts">
              <Link href="/holiday" className="bp">See Holiday Kit Services</Link>
              <button className="bg" onClick={() => openModal()}>Book a Call &rarr;</button>
            </div>
          </div>
        </div>
        <div className="kr">
          <div className="kcon" style={{ borderRight: '1px solid var(--ice)' }}>
            <div className="ey">Influencer &amp; PR Kits</div>
            <h3>Make the Unboxing<br />Worth Posting</h3>
            <p>We design and produce influencer kits that creators want to film &mdash; and kit and ship direct to creator addresses.</p>
            <ul className="fl">
              <li>Custom structural packaging designed for the unboxing experience</li>
              <li>Branded inserts, tissue, ribbon, and specialty fills</li>
              <li>Scalable from 50 to 5,000+ units</li>
              <li>Direct-to-recipient kitting and fulfillment available</li>
            </ul>
            <div className="kacts">
              <Link href="/influencer" className="bp">See Influencer Kit Services</Link>
              <button className="bg" onClick={() => openModal()}>Book a Call &rarr;</button>
            </div>
          </div>
          <div className="kv lt" style={{ background: 'linear-gradient(135deg,#e8e6e1,#d5d3ce,#c8c5be)' }}>
            <Image src="/images/kits/influencer-kits.jpg" alt="Custom influencer and PR kit packaging by Logic Pac" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            <div>
              <div className="kvl">Campaign Production</div>
              <div className="kvt">PR &amp; Influencer<br /><em>Kits</em></div>
              <div className="kvr"></div>
              <div className="kvs">Built for Unboxing</div>
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <ScrollReveal className="tls">
        <div className="ey">Production calendar</div>
        <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', marginBottom: 12 }}>Why Starting Early Is<br />the Right Move</h2>
        <Timeline />
        <div className="tlurg">
          <div><h4>The best time to start is <em>right now.</em></h4><p>Brands that lock in early get the best factories, the best pricing, and a timeline that doesn&apos;t require air freight miracles.</p></div>
          <button className="bp" onClick={() => openModal()}>Lock In Your Timeline</button>
        </div>
      </ScrollReveal>

      {/* PROCESS */}
      <ScrollReveal className="procs">
        <div className="ey inv">How we work</div>
        <h2 style={{ fontSize: 'clamp(26px,3vw,42px)', color: 'white', maxWidth: 500 }}>Simple Process.<br /><em style={{ color: 'var(--lime)' }}>Zero Dropped Balls.</em></h2>
        <div className="procg">
          <div className="pstep"><div className="pnum">01</div><h3>Discovery Call</h3><p>Understand your packaging project &mdash; product dimensions, timeline, quantity, brand standards, and retail requirements.</p></div>
          <div className="pstep"><div className="pnum">02</div><h3>Brief &amp; Proposal</h3><p>Scope the project, recommend structure and materials, match to the right factory, issue a clear proposal.</p></div>
          <div className="pstep"><div className="pnum">03</div><h3>Design &amp; Sampling</h3><p>Die-line development, 3D renders, physical samples. We iterate until you approve production.</p></div>
          <div className="pstep"><div className="pnum">04</div><h3>Production &amp; Delivery</h3><p>Factory management, inline QC, freight coordination, on-time delivery. We own the outcome.</p></div>
        </div>
      </ScrollReveal>

      {/* FAQ + SEO */}
      <div className="kcr">
        <div className="seo">
          <h2>Choosing a Custom Packaging Partner</h2>
          <p>The right packaging vendor doesn&apos;t just print boxes &mdash; they manage structural engineering, factory relationships, quality control, and logistics so your team can focus on brand and product. Here&apos;s what to look for in a packaging partner for beauty and consumer brands.</p>
          <h3>What Makes Logic Pac Different from Other Packaging Companies?</h3>
          <p>Logic Pac operates as a single point of accountability across design, manufacturing, QC, and fulfillment. We&apos;re not a broker forwarding specs to the lowest bidder &mdash; we manage factory relationships directly, run inline inspections, and own the outcome from brief to delivery.</p>
          <h3>Where Does Logic Pac Manufacture?</h3>
          <p>We source from vetted factories across China, Vietnam, Thailand, India, and Mexico. Each project is matched to the right supplier based on structure type, material capability, MOQ, lead time, and cost &mdash; not a one-size-fits-all factory list.</p>
        </div>
        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Logic Pac FAQs"
            faqs={homeFaqs}
            ctaText="Book a Free Consultation"
          />
        </div>
      </div>

      {/* CTA */}
      <section className="ctas">
        <div className="ctai">
          <h2>Let&apos;s Build Something<br /><em>Worth the Shelf Space</em></h2>
          <p>Bring us your brief, your timeline, or just a product and a problem.</p>
          <button className="bi" onClick={() => openModal()}>Book a Free Consultation</button>
          <small>Powered by Logic Agency Inc. &mdash; Orange County, CA &amp; Salt Lake City, UT</small>
        </div>
      </section>
    </>
  )
}
