'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import GuideAnswerSummary from '@/components/GuideAnswerSummary'
import GuideBottomLine from '@/components/GuideBottomLine'
import GuideByline from '@/components/GuideByline'

const tocSections = [
  { id: 'readiness', label: 'What retail readiness means' },
  { id: 'barcodes', label: 'GS1, UPC & barcode readiness' },
  { id: 'carton', label: 'Master cartons & case packs' },
  { id: 'retailers', label: 'Sephora, Ulta & Target specifics' },
  { id: 'planogram', label: 'Planograms & shelf facings' },
  { id: 'chargebacks', label: 'Chargebacks & how to avoid them' },
  { id: 'window', label: 'Launch windows & PO cutoffs' },
  { id: 'dtc', label: 'DTC vs retail tradeoffs' },
  { id: 'checklist', label: 'Retail-readiness scorecard' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'When should we start preparing for retail launch — before or after the PO?',
    answer: 'Before. The compliance work — GS1 licensing, barcode generation, packaging testing, vendor manual review, EDI setup — takes 4–8 weeks on its own. Starting after the PO lands usually means missed set dates, expedited freight, or chargebacks on the first shipment. Treat retail-ready work as a parallel track to buyer conversations, not a reaction to them.',
  },
  {
    question: 'Can we use the same primary pack for DTC and retail?',
    answer: 'Usually yes — primary rarely changes. What changes is everything around it: secondary carton compliance labels, master-carton configurations, UPC placement, inner-pack counts, and whether an e-commerce-safe shipper replaces or wraps the retail carton. Logic Pac often builds one primary with two secondary SKUs — a retail-floor version and a DTC-shipper version — using the same brand design.',
  },
  {
    question: 'What does a retail chargeback actually look like?',
    answer: 'A deduction against the invoice. Common categories: barcode unreadable at the DC scanner, master carton weight or dimensions outside tolerance, missing or wrong EDI labels, late DC appointment, product not floor-ready (hangers, sensors, or stickers missing), damaged units above tolerance. Each category has its own deduction schedule in the retailer’s vendor manual; the dollar amounts add up quickly on a first shipment where multiple categories miss.',
  },
  {
    question: 'Do we need an EDI setup to sell into Sephora, Ulta, or Target?',
    answer: 'Yes for Target and most mass retailers. Sephora and Ulta have EDI programs but allow smaller vendors to onboard through a portal with manual purchase order acceptance. Expect to need an EDI provider (SPS Commerce, DiCentral, Logicbroker, or similar) for any multi-door national program. Smaller specialty or regional accounts often skip EDI entirely.',
  },
  {
    question: 'How does Logic Pac help on retail-ready programs?',
    answer: 'We handle GS1 barcode generation and placement, master-carton specification and testing, vendor-manual review against your pack, retailer-specific compliance labels (SSCC pallet labels, carton-level UCC-128, item-level UPC-A or EAN-13), and the production and QC program that keeps run-to-sample conformity through to the DC. The approach is detailed on our Capabilities page and in our Packaging Testing & Quality Control guide.',
  },
  {
    question: 'What is a reasonable first retail launch size?',
    answer: 'For a specialty-door launch (Credo, Bluemercury, Blue Mercury, specialty retailers), 50–200 doors is typical for a first PO. For Sephora or Ulta, first POs for new brands commonly land in the 300–1,000 door range depending on category and category manager. Target first POs for beauty new-brand programs often sit in the 500–1,800 door range. Confirm case pack early — pack configuration drives whether a given door count fits a round pallet count or spills into partial pallets.',
  },
]

export default function RetailClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
  const [checked, setChecked] = useState<Record<string, boolean>>({})
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

  const checklistItems = [
    { id: 'r1', title: 'GS1 company prefix is licensed and assigned', body: 'Every SKU has a unique UPC-A or EAN-13 generated from a licensed GS1 prefix — not borrowed, resold, or generated from a free online tool. Vendors that use non-GS1 barcodes fail scan tests at the DC.' },
    { id: 'r2', title: 'Barcode is placed and sized to vendor-manual spec', body: 'Barcode placement, orientation, size, quiet zone, and color contrast all meet the retailer’s vendor-manual spec. Barcodes have been grade-tested (ANSI/ISO Grade C or better) on the production substrate, not a proof.' },
    { id: 'r3', title: 'Master-carton configuration fits the retailer’s system', body: 'Case pack, carton dimensions, carton weight, inner-pack count, and label placement match the retailer’s receiving spec. Palletization uses round numbers that fit standard pallet math (TI/HI).' },
    { id: 'r4', title: 'Carton-level UCC-128 labels are specified', body: 'Shipping cartons carry UCC-128 (SSCC-18) labels with the correct GTIN, PO number, ship-to, and carton serial. Label placement, size, and quiet zone meet the vendor manual.' },
    { id: 'r5', title: 'The pack is floor-ready for the planogram', body: 'Carton dimensions fit the facing count the buyer approved. The pack sits upright, reads front-face, and does not require field adjustment by store staff. Any hangtags, security hangers, or sensors are specified and installed before shipment.' },
    { id: 'r6', title: 'Transit testing matches the shipping lane', body: 'ISTA 3A for distributed parcel freight or ISTA 1A/6-Amazon for ecommerce transits where applicable. Drop, compression, and vibration tests pass at the levels the actual lane produces — not generic benchmarks.' },
    { id: 'r7', title: 'EDI (or portal) is set up and tested', body: 'EDI 850 (PO) in, 856 (ASN) out, 810 (invoice) out at a minimum. For portal-based accounts, the vendor portal account is live, PO receipt is tested, and the invoicing flow is confirmed.' },
    { id: 'r8', title: 'Vendor-manual review has been completed by name', body: 'The current version of the retailer’s vendor manual has been read in full, differences from your current pack have been logged, and each gap has a close date. Vendor manuals change — using last year’s version is a chargeback risk.' },
    { id: 'r9', title: 'DC appointment and routing is confirmed', body: 'DC receiving appointment is booked, routing guide instructions are followed, carrier is pre-approved for the retailer’s lane, and the appointment window matches the PO ship-by date.' },
    { id: 'r10', title: 'Chargeback categories and dispute path are documented', body: 'Your ops team knows which chargebacks the retailer issues most, which are disputable, how to file a dispute, and the dollar exposure per category. First-shipment chargebacks are predictable if the vendor manual is new to you.' },
  ]
  const progress = Math.round((Object.values(checked).filter(Boolean).length / checklistItems.length) * 100)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Retail Readiness</div>
        <h1>Retail-ready <em>beauty packaging.</em></h1>
        <p>Approved samples don&apos;t get you a clean first shipment. What stands between a signed PO and a cased pallet at the retailer&apos;s DC is a specific operational discipline most brand teams only learn the hard way — after the first chargeback hits. This is the reference manual for GS1 barcodes, master-carton math, retailer vendor-manual requirements, planogram realities, and the launch-window math that keeps the first shipment clean.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>17 min read</span>
          <span>Updated October 2026</span>
          <span>Pre-launch &amp; Operations</span>
        </div>
      </div>

      <div className="guide-wrap retail-guide">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="What does retail-ready beauty packaging actually require?"
              answer="Retail-ready beauty packaging is primary and secondary pack plus every operational layer around it: licensed GS1 barcodes placed and sized to the retailer’s vendor-manual spec, master cartons configured to the retailer’s receiving system, floor-ready presentation that holds the approved planogram facing count, UCC-128 shipping labels, EDI or portal setup, and transit testing calibrated to the actual freight lane. The brands that ship clean first POs do the operational work in parallel with the buyer conversation — not after it."
              takeaways={[
                'A GS1-licensed, scan-grade-tested barcode is the single most common failure point.',
                'Master-carton math drives door-count flexibility — lock case pack early.',
                'Vendor manuals change every year — read the current version by name.',
                'Chargebacks are predictable: understand categories before the first PO, not after.',
              ]}
            />

            <h2 id="readiness"><span className="num">01.</span>Retail readiness is an operations discipline, not a design decision</h2>
            <p>The design-and-production side of a beauty packaging program ends when the production run passes QC and lands in a warehouse. Retail readiness is the layer on top of that — the operational discipline that gets the pack from a cased pallet into a buyer’s DC without a deduction, into a store without a reset problem, and onto a planogram without field adjustment.</p>
            <p>Most beauty brands discover this layer the week before their first retail shipment. The pack looks great, QC is clean, the buyer is happy, and then the first chargeback hits because the barcode graded below spec, the master carton weight was logged wrong, or the UCC-128 label was missing. None of those are packaging-design failures. They are retail-operations failures — and the brands that avoid them treat retail-readiness as a parallel workstream to the design program, not a reaction to the PO.</p>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>GS1 licensing, barcode generation, and scan-grade testing — the single most common failure point</li>
                <li>Master-carton configuration math — case pack, dim weight, inner-pack count, and pallet TI/HI</li>
                <li>Sephora, Ulta, and Target retailer-specific operational specifics (vendor manuals, routing guides, VAS)</li>
                <li>Planogram realities — facing count usually drives pack dimension, not the other way around</li>
                <li>The chargeback categories you will see on a first shipment and how to prevent them</li>
                <li>Launch-window math — reset calendars, PO cut-offs, DC appointment windows, late-ship exposure</li>
                <li>DTC-vs-retail SKU architecture and cost tradeoff</li>
                <li>A 10-item retail-readiness scorecard you can run before the first production order</li>
              </ol>
            </div>

            <figure className="guide-images-grid">
              <Image src="/images/guides/retail-ready-beauty/vb-target-bags.jpg" alt="Victoria Beckham packaging program designed for a Target launch" width={1366} height={768} sizes="(max-width: 960px) 100vw, 475px" />
              <Image src="/images/guides/retail-ready-beauty/shelf-ready-display.jpg" alt="Shelf-ready beauty display unit with product facings and retail pricing panel" width={1600} height={900} sizes="(max-width: 960px) 100vw, 475px" />
            </figure>
            <p className="guide-img-caption">Retail readiness lives in the operational layer around the pack — compliance labels, display units, case packs, and planogram-fit decisions that get made before the first PO lands.</p>

            <h2 id="barcodes"><span className="num">02.</span>GS1, UPC &amp; barcode readiness</h2>
            <p>Barcodes are the first thing a retailer scans and the first thing that gets rejected if it fails. This section is non-negotiable for every retail channel.</p>

            <h3>Licensed GS1 prefix — the only kind that works</h3>
            <p>Every UPC-A (12-digit, North American) or EAN-13 (13-digit, international) barcode is derived from a licensed GS1 company prefix. The prefix is leased from GS1 US (or the regional GS1 affiliate), not generated from a free online tool. Retailer barcode-verification systems check whether the GS1 database recognizes your prefix — unlicensed codes fail that check and the PO is held.</p>
            <p>GS1 US licensing is tiered by number of SKUs. A 100-SKU license runs under $2,000/year including the first-year capacity fee. Larger prefixes scale from there. Budget for the license as a fixed infrastructure cost, not a per-launch expense.</p>

            <h3>Grade C or better, verified on the production substrate</h3>
            <p>A barcode is only as readable as the substrate it prints on. Soft-touch laminates, metallic foils, textured papers, and dark backgrounds all affect scan grade. The standard requirement is ANSI/ISO Grade C or better on the production substrate — verified with a barcode verifier (not a smartphone), not on a proof. Grade D or lower routinely fails at the DC scanner and triggers a receiving chargeback.</p>

            <h3>Placement, orientation, size, and quiet zone</h3>
            <p>Retailer vendor manuals specify where the barcode goes on each pack format, which orientation, what size (nominal 100%), and how much quiet zone is required on each side. Common mistakes:</p>
            <ul>
              <li>Placing the barcode too close to a seam, panel edge, or decoration — fails the quiet-zone requirement.</li>
              <li>Printing the barcode on a reverse color scheme (white bars on dark background) without verifying scan contrast ratio.</li>
              <li>Shrinking the barcode below 80% nominal to fit a small pack face — scan reliability drops sharply below that threshold.</li>
              <li>Reusing the same UPC on a limited-edition variant — every unique sellable SKU needs its own code.</li>
            </ul>

            <div className="callout">
              <p><strong>Logic Pac approach.</strong> On retail-ready programs we generate the GS1 code, specify placement and quiet zone against the current vendor manual, print on the exact production substrate, and verify grade with a Honeywell or Microscan verifier before the first case ships. The barcode section of our <Link href="/guides/packaging-testing-quality-control">Packaging Testing &amp; QC guide</Link> covers the measurement protocol in more depth.</p>
            </div>

            <h2 id="carton"><span className="num">03.</span>Master cartons &amp; case packs</h2>
            <p>The case pack is a quiet decision early in development that becomes a loud problem at retail launch. Case pack drives: master-carton dimensions, master-carton weight, pallet math, door-count flexibility, DC labor time, and whether a first PO lands on round pallets or spills into partials.</p>

            <h3>Case pack — pick a number that fits downstream math</h3>
            <p>The ideal case pack divides into the retailer’s typical first-PO door count without leaving partials. Common beauty case packs:</p>
            <ul>
              <li><strong>6 or 12 per inner, 24 or 36 per master</strong> — common for prestige skincare and color cosmetics in rigid or folding cartons.</li>
              <li><strong>4 per inner, 12 or 24 per master</strong> — common for fragrance, luxury hero SKUs, and heavier formats.</li>
              <li><strong>1 per inner, 6 or 12 per master</strong> — common for gift sets, PR kits, and holiday programs.</li>
            </ul>
            <p>Case pack also drives master-carton dimensions. Lock the case pack with the retailer’s receiving team before tooling the master carton — changing it later usually means recutting dies for the inner and outer carton both.</p>

            <h3>Pallet TI/HI — how cartons stack</h3>
            <p>TI (tier count) is how many cartons sit on one layer of a pallet. HI (height count) is how many layers stack. TI × HI × case pack = units per pallet. Retailer DC systems are optimized for standard GMA pallet math (48” × 40”, 48” or 50” tall). Odd carton dimensions that produce 7-tier or 9-tier pallets routinely get flagged.</p>

            <h3>Dim weight — the hidden freight tax</h3>
            <p>Parcel and LTL carriers bill by dimensional weight when a carton is bulky but light (common for beauty gift sets, PR kits, and foam-dense SKUs). Dim-weight exposure can double the per-carton freight cost. On programs with significant parcel freight, re-engineer the master carton to compress dim weight before locking the spec.</p>

            <figure className="guide-images-grid">
              <Image src="/images/guides/retail-ready-beauty/kiki-folding-cartons-flat.jpg" alt="KIKI World folding cartons shown flat with barcode and brand panels visible" width={1600} height={1200} sizes="(max-width: 960px) 100vw, 475px" />
              <Image src="/images/guides/retail-ready-beauty/cosmetics-shelf-carton.jpg" alt="Cosmetics folding carton with retail-shelf presentation details" width={1600} height={1106} sizes="(max-width: 960px) 100vw, 475px" />
            </figure>
            <p className="guide-img-caption">The barcode panel, nutritional/content panel, and compliance text are specified at carton-flat stage, long before the pack goes to the retailer’s receiving team.</p>

            <h2 id="retailers"><span className="num">04.</span>Sephora, Ulta &amp; Target — what each retailer actually asks for</h2>
            <p>Every beauty retailer has a vendor manual. Those manuals change — sometimes materially — year over year. Use the <em>current</em> version. Reading the previous year’s manual and assuming nothing moved is one of the top three sources of first-shipment chargebacks.</p>

            <h3>Sephora</h3>
            <p>Sephora operates on an inbound compliance program that covers barcode grade, carton labeling, routing, and VAS (value-added services like security sensors or hangtags) by category. ASNs via EDI 856 are expected for most national programs. Smaller specialty vendors sometimes onboard via the vendor portal. Sephora runs a strict receiving window at its DC — missed appointments carry fees. Floor-ready expectations include UPC face-up, no field assembly required, and category-specific sensor policy.</p>

            <h3>Ulta</h3>
            <p>Ulta Beauty’s vendor requirements include GS1 UCC-128 shipping labels, routing-guide carrier selection, and a specific inner-pack convention for several categories. Ulta is strict on carton weight accuracy — cartons weighed outside the ASN-declared weight range are flagged. Expect vendor-manual review to catch label-placement requirements that differ from Sephora.</p>

            <h3>Target</h3>
            <p>Target’s Partners Online portal manages PO, ASN, invoice, and compliance scoring. Target requires EDI for most new-vendor programs, uses a vendor scorecard that tracks on-time ship, order fill rate, and compliance labeling, and runs a strict routing guide. First-shipment chargebacks on Target programs commonly come from: ASN discrepancies, missing or mis-formatted UCC-128, pallet build errors, and late DC appointments. Target’s beauty category runs a specific set of planogram cycles — missing the reset window means waiting for the next cycle.</p>

            <div className="callout">
              <p><strong>What this means for first-time retail vendors.</strong> The vendor-manual review for a single retailer typically runs 20–40 pages per category. Reading it once is not enough — a line-by-line review against your current pack, logged by requirement, is the step that catches the gaps. Logic Pac routinely runs this review on new retail launches and tracks the gap-close list through to production.</p>
            </div>

            <h2 id="planogram"><span className="num">05.</span>Planograms &amp; shelf facings</h2>
            <p>Buyers approve a facing count on the planogram before they issue a PO. That facing count drives pack dimensions in one direction: the pack has to fit the facing — the facing almost never flexes to fit the pack. Brands that design the pack first and discover the planogram constraint second end up re-tooling the primary pack or losing shelf position.</p>
            <p>The practical workflow:</p>
            <ol>
              <li>Confirm the buyer’s target facing count and shelf height during the pre-PO conversation.</li>
              <li>Measure the actual shelf and planogram footprint at a comparable door (not a trade-show mockup).</li>
              <li>Spec the pack to the facing — width, depth, and height — with a 2–5% tolerance for shrink/registration drift.</li>
              <li>Model the master carton to produce the facing count per inner-pack efficiently (if the buyer wants 4 facings, inner packs of 4 or 8 are often ideal).</li>
            </ol>
            <p>For deeper design-system treatment of how a pack holds up on a shelf, in a thumbnail, and in a lifestyle crop, see our <Link href="/guides/luxury-beauty-packaging-system">Luxury Beauty Packaging System guide</Link>.</p>

            <figure className="guide-images-grid">
              <Image src="/images/guides/retail-ready-beauty/holiday-retail-kits.jpg" alt="Beauty holiday gift kits presented in a retail display context" width={990} height={990} sizes="(max-width: 960px) 100vw, 475px" />
              <Image src="/images/guides/retail-ready-beauty/premium-retail-gift-set.jpg" alt="Premium beauty gift set designed for prestige retail shelf and gifting" width={1200} height={1200} sizes="(max-width: 960px) 100vw, 475px" />
            </figure>
            <p className="guide-img-caption">Holiday and gift-set programs carry additional planogram and set-date discipline — reset windows, co-op display spend, and category-manager approvals that sit outside the standard replenishment calendar.</p>

            <h2 id="chargebacks"><span className="num">06.</span>Chargebacks &amp; how to avoid them</h2>
            <p>A chargeback is a deduction against your invoice when a shipment misses a vendor-manual requirement. Chargebacks are not optional, not negotiable in bulk, and generally non-reversible for the first offense. They are, however, highly predictable — and most of them come from the same ten or so categories regardless of retailer.</p>

            <h3>The chargeback categories you will see on a first shipment</h3>
            <ul>
              <li><strong>Barcode scan failure</strong> — code graded below spec, missing quiet zone, wrong placement, or the item/case GTIN mismatch between ASN and physical label.</li>
              <li><strong>Carton labeling miss</strong> — UCC-128 missing, mis-formatted, or placed outside the required area.</li>
              <li><strong>Weight or dimension discrepancy</strong> — declared carton weight on the ASN differs from the weight at receiving.</li>
              <li><strong>Pallet build errors</strong> — TI/HI off spec, mixed SKU pallets when single-SKU required, overhang beyond tolerance.</li>
              <li><strong>Late DC appointment</strong> — the carrier missed the booking window or the appointment was not booked.</li>
              <li><strong>Routing-guide violation</strong> — wrong carrier, wrong lane, prepaid vs collect misdeclared.</li>
              <li><strong>Floor-ready miss</strong> — missing hangtags, sensors, or field-assembly required at the store.</li>
              <li><strong>Expiration / lot-code miss</strong> — required lot or batch code missing from the carton or unit for category requirements.</li>
              <li><strong>Over-ship or under-ship beyond tolerance</strong> — fill rate outside the retailer’s allowed window.</li>
            </ul>

            <h3>How to prevent them — the four-week pre-launch checklist</h3>
            <ol>
              <li><strong>Four weeks out:</strong> complete vendor-manual review line by line; confirm EDI connectivity with a test 850/856/810 cycle.</li>
              <li><strong>Three weeks out:</strong> verify barcode grade on production substrate; confirm master-carton weight and dimension against spec with a calibrated scale; confirm pallet TI/HI with a trial build.</li>
              <li><strong>Two weeks out:</strong> run a mock DC appointment with the carrier; confirm all UCC-128 and item-level labels print correctly; confirm floor-ready specs (sensors, hangtags, inserts) are installed.</li>
              <li><strong>One week out:</strong> ship a one-case pilot to the DC if the retailer allows (some do, some don’t); walk the shipment through QC against the vendor manual one more time before the pallet moves.</li>
            </ol>

            <div className="callout">
              <p><strong>What the program buys.</strong> On retail-ready programs where Logic Pac manages the full pre-production and shipment cycle, first-shipment chargebacks typically land in the single-digit-percent range of shipments — versus the double-digit range common on first retail launches run without an operations partner. The reduction compounds across subsequent POs as supplier documentation stabilizes.</p>
            </div>

            <h2 id="window"><span className="num">07.</span>Launch windows &amp; PO cutoffs</h2>
            <p>Retailers run reset calendars. A set date in a planogram cycle is immovable — if the pack misses the set date, it waits for the next cycle. For most beauty categories at national retailers, that is a 90–180 day miss.</p>
            <p>The practical math for a first retail launch:</p>
            <ul>
              <li><strong>Set date</strong> works back to <strong>PO ship-by date</strong> (typically 2–4 weeks before set).</li>
              <li><strong>PO ship-by</strong> works back to <strong>DC appointment</strong> (routing-guide lead time, typically 7–14 days).</li>
              <li><strong>DC appointment</strong> works back to <strong>warehouse-ready date</strong> (production + QC + inbound to the brand’s 3PL).</li>
              <li><strong>Warehouse-ready</strong> works back to <strong>production start</strong> (per the <Link href="/guides/concept-to-shelf-timeline">Concept-to-Shelf Timeline</Link>).</li>
            </ul>
            <p>Add it all up and a national retail launch typically needs the production start locked 14–20 weeks before the set date, with retail-readiness workstreams (GS1, EDI, vendor-manual review, barcode testing) running in parallel the entire time.</p>

            <h2 id="dtc"><span className="num">08.</span>DTC vs retail — the SKU-architecture tradeoff</h2>
            <p>Many beauty brands run DTC and retail simultaneously. The pack can usually be shared across both channels — but not always, and the places it fails to share are predictable.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>DTC-first spec</th>
                    <th>Retail-first spec</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Primary pack</td><td>Can be more fragile, more creative</td><td>Must survive case-pack transit + floor handling</td></tr>
                  <tr><td>Secondary carton</td><td>Optional; often shipper is primary</td><td>Required; drives shelf presentation and barcode placement</td></tr>
                  <tr><td>Shipper</td><td>E-commerce-safe, often with crumple protection</td><td>Case pack doubles as outer shipper; sometimes none</td></tr>
                  <tr><td>Case pack</td><td>Flexible — can ship singles or small packs</td><td>Locked to retailer convention (6/12/24)</td></tr>
                  <tr><td>Barcode placement</td><td>Flexible — web shopping cart doesn’t scan it</td><td>Must match vendor-manual spec exactly</td></tr>
                  <tr><td>Testing</td><td>Parcel-focused (ISTA 6-Amazon or similar)</td><td>Palletized freight + DC handling (ISTA 3A)</td></tr>
                  <tr><td>MOQ</td><td>Can run low — 500–2,000 units for a new SKU</td><td>Needs to cover launch door count + reorder cycle</td></tr>
                </tbody>
              </table>
            </div>
            <p>The common pattern Logic Pac sees: brands design the pack for DTC, win a retail door, and discover the secondary carton or case pack has to be rebuilt before the first PO can ship. The cleaner path is to spec the pack as if retail is coming — even if the first launch is DTC-only — and tool the secondary carton to retail dimensions from day one. The incremental cost is small; the downstream flexibility is substantial.</p>

            <GuideBottomLine>
              Retail readiness is not a design decision — it is an operational discipline that sits in parallel with design, production, and QC. GS1-licensed barcodes verified at Grade C or better, master cartons that fit the retailer’s system, vendor-manual review done against the current year’s copy, EDI or portal connectivity confirmed, and planogram-fit math settled before the pack is tooled. Brands that run this discipline before the first PO ship clean first shipments and build buyer trust. Brands that react to the PO take chargebacks and lose shelf position. Logic Pac manages the discipline end-to-end on retail-ready beauty programs — from GS1 generation through DC appointment.
            </GuideBottomLine>

            <h2 id="checklist"><span className="num">09.</span>The 10-item retail-readiness scorecard</h2>
            <p>Run this scorecard before the first production order on a retail program. If more than two or three items come back with hesitation, the program is not ready to move to production — it is ready for a focused retail-readiness workstream.</p>

            <div className="checklist-wrap">
              <div className="checklist-progress">
                <div className="checklist-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />
                <span>{Object.values(checked).filter(Boolean).length} of {checklistItems.length} ready &middot; {progress}%</span>
              </div>
              <ul className="checklist">
                {checklistItems.map((item, idx) => (
                  <li key={item.id} className={checked[item.id] ? 'checked' : ''}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!checked[item.id]}
                        onChange={() => setChecked(c => ({ ...c, [item.id]: !c[item.id] }))}
                      />
                      <span className="checklist-num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="checklist-body">
                        <strong>{item.title}</strong>
                        <span className="checklist-desc">{item.body}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <section className="sources-section">
              <h2>Related guides and references</h2>
              <p className="sources-lede">The Retail-Ready guide is designed to run alongside the deeper design, QC, and timeline guides. These are the primary cross-references used in the sections above.</p>
              <ul className="sources-list">
                <li><Link href="/guides/packaging-testing-quality-control">Packaging Testing &amp; Quality Control Guide</Link> — barcode verification, run-to-sample conformity, and the DUPRO/pre-shipment discipline that keeps chargebacks low.</li>
                <li><Link href="/guides/luxury-beauty-packaging-system">Luxury Beauty Packaging System Guide</Link> — how the pack holds up on shelf, in a thumbnail, and in the customer’s hand once it clears the DC.</li>
                <li><Link href="/guides/beauty-brand-packaging-design-system">Beauty Brand Packaging Design System Guide</Link> — how a design system scales across hero SKUs, line extensions, and seasonal programs.</li>
                <li><Link href="/guides/concept-to-shelf-timeline">Concept-to-Shelf Timeline Guide</Link> — the end-to-end schedule retail-readiness workstreams run in parallel with.</li>
                <li><Link href="/guides/cost-moq-landed-cost-planning">Cost, MOQ &amp; Landed-Cost Planning Guide</Link> — master-carton configuration drives per-unit freight cost; case pack decisions are modeled here.</li>
                <li><Link href="/blog/holiday-gift-set-packaging-beauty-brands">Holiday gift-set packaging for beauty brands</Link> — Q4-specific retail compliance snapshot that complements the evergreen retail-readiness discipline.</li>
                <li><Link href="/blog/jewelry-packaging-retail-vs-dtc">Jewelry packaging: retail vs DTC</Link> — the sibling article for the jewelry category, same discipline, category-specific details.</li>
                <li><Link href="/capabilities">Logic Pac capabilities</Link> — the full-service retail-ready program including GS1, master-carton engineering, vendor-manual review, QC, and fulfillment.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Common questions ops leads ask when they first encounter a retail-launch program. For the deeper QC, timeline, cost, and design-system detail, start with the related guides above.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Running a Retail-Ready Beauty Program"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Retail Readiness"
          />
        </div>
      </section>
    </>
  )
}
