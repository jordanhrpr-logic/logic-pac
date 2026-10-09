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
  { id: 'system', label: 'Packaging is a system' },
  { id: 'primary', label: 'Primary packaging' },
  { id: 'secondary', label: 'Secondary packaging' },
  { id: 'trays', label: 'Trays, inserts & fit' },
  { id: 'materials', label: 'Materials & finishes' },
  { id: 'moments', label: 'The six brand moments' },
  { id: 'compliance', label: 'California & claims' },
  { id: 'production', label: 'Production readiness' },
  { id: 'checklist', label: 'Readiness checklist' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'What makes a beauty package feel luxury versus just expensive?',
    answer: 'Structure, proportion, weight, finish, and fit — in that order. A heavy box with a loose component inside reads cheap. A tight molded tray in a thinner carton with a precise foil can read premium. Luxury is a system decision, not a line-item upgrade.',
  },
  {
    question: 'Do we need custom tooling for the primary pack to look premium?',
    answer: 'Not always. A stock bottle finished intentionally — the right closure, decoration, and secondary architecture around it — can carry a premium position at launch. Custom tooling is justified when the silhouette itself becomes a brand asset or when volume supports the investment.',
  },
  {
    question: 'How much of the “luxury feel” is primary vs. secondary packaging?',
    answer: 'In our experience both do work, but secondary packaging and the molded tray carry more of the first-impression burden than most brands expect. The customer touches the carton before the bottle. Treat secondary as a product, not a wrapper.',
  },
  {
    question: 'Can luxury packaging also be sustainable?',
    answer: 'Yes — but only if the system is designed for it. Mono-material cartons, FSC paper pulp trays, aluminum refill bases, and well-specified recycled content can all land in a premium position. The sustainability story falls apart when a premium outer hides a mixed-material inner. See our Sustainable Beauty Packaging Playbook for the deeper material and claims discussion.',
  },
  {
    question: 'How do we avoid overpackaging without losing the brand moment?',
    answer: 'Audit each layer by job. Primary protects the formula. Secondary carries the brand and protects the primary. A tray organizes components and dampens movement. Everything else is decoration — and often the first place to cut. The goal is fewer, better-executed layers, not more layers.',
  },
  {
    question: 'What does Logic Pac actually do on a luxury beauty project?',
    answer: 'We handle structural design, 3D engineering, dieline development, material and finish specification, supplier matching, prototype rounds, pre-production samples, quality control, and fulfillment coordination. The full capability set is on our Capabilities page.',
  },
]

export default function LuxuryClient() {
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
    { id: 'c1', title: 'Product + pack architecture is defined', body: 'Primary, secondary, trays, inserts, and any outer carton or shipper are specified as one system — not sourced separately.' },
    { id: 'c2', title: 'Primary pack earns its silhouette', body: 'The bottle, jar, tube, or compact is identifiable in a thumbnail at 48px without the label — or you have a plan for how decoration will carry the identity if it is not.' },
    { id: 'c3', title: 'Secondary pack is designed as a product', body: 'The carton has its own hierarchy, finish strategy, and first-touch moment. It is not treated as a disposable wrapper.' },
    { id: 'c4', title: 'Molded tray or insert fits every SKU in the family', body: 'Tolerances are specified, prototypes have been dropped and rotated, and the tray holds components in orientation during transit.' },
    { id: 'c5', title: 'Materials match the price position', body: 'Glass, aluminum, PET, HDPE, paper pulp, and specialty papers are chosen for formula compatibility, perception, and recovery — not for mood board alignment.' },
    { id: 'c6', title: 'Finishes earn their cost', body: 'Soft touch, foil, spot UV, deboss, and emboss each do a specific job on a specific surface. Decoration is restrained to one or two moments per face.' },
    { id: 'c7', title: 'The package reads on shelf and in a thumbnail', body: 'The pack has been tested in retail planogram proportions, in e-commerce product photography, and in a vertical mobile crop.' },
    { id: 'c8', title: 'California SB 54 and claims review has happened', body: 'Recyclability, recycled content, and any sustainability language has been evaluated against SB 54 and FTC Green Guides before copy ships.' },
    { id: 'c9', title: 'Pilot samples match the specification', body: 'Pre-production samples have been inspected against written specs for color, finish, fit, structural integrity, and component tolerance.' },
    { id: 'c10', title: 'Transit, warehouse, and replenishment plan exist', body: 'The pack has a packout plan, a case-pack configuration, and a replenishment lead time your brand can actually hold.' },
  ]
  const progress = Math.round((Object.values(checked).filter(Boolean).length / checklistItems.length) * 100)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Packaging Systems</div>
        <h1>How to build a <em>luxury beauty packaging</em> system.</h1>
        <p>Premium packaging is not a single bottle or a nicer box. It is a system &mdash; primary, secondary, trays, materials, finishes, and the brand moments that connect them. Here is how we approach it on luxury beauty, cosmetics, and fragrance programs built to hold up on shelf, in a thumbnail, and in the customer&apos;s hand.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>16 min read</span>
          <span>Updated October 2026</span>
          <span>Concept &amp; Development Stage</span>
        </div>
      </div>

      <div className="guide-wrap luxury-guide">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="What makes a luxury beauty packaging system work?"
              answer="A luxury beauty packaging system works when primary, secondary, trays, materials, and finishes are developed together — not sourced as separate line items. The pack has to protect the formula, read premium on shelf and in a thumbnail, survive transit without re-seating the components, and give the customer a deliberate first touch when they open it."
              takeaways={[
                'Treat the package as a connected system of primary, secondary, and tray — not three separate orders.',
                'Secondary packaging and trays carry more of the first-impression weight than brands expect.',
                'Material and finish decisions should match the price position and the formula, not just the mood board.',
                'Premium is earned through structure, proportion, and execution — not just weight or decoration count.',
              ]}
            />

            <h2 id="system"><span className="num">01.</span>Packaging is a system, not a single box</h2>
            <p>Most luxury beauty packaging problems trace back to the same root cause: the pack was commissioned in pieces. The bottle was selected first. The carton was briefed later. The tray or insert was added when samples arrived and the components rattled. By the time the brand team saw the full unboxing, each layer had been optimized against a different brief.</p>
            <p>The brands we work with on luxury programs make the opposite move. They treat the pack as a single system from the beginning. Primary, secondary, tray, outer shipper, and any seasonal or gifting layers are developed together, with one accountable owner holding the full specification.</p>
            <p>Three things change when the system is built that way:</p>
            <ul>
              <li><strong>The components stay in orientation.</strong> A properly specified molded tray holds the primary pack in exactly the position it should be in when the customer opens the carton.</li>
              <li><strong>The finishes carry across layers.</strong> The foil on the outer carton, the deboss on the inner wrap, and the decoration on the bottle feel like one brand &mdash; not three suppliers&apos; interpretations.</li>
              <li><strong>The cost model is honest.</strong> Material, decoration, tooling, tray, freight, and warehousing are modeled as one landed-cost number &mdash; not as six invoices.</li>
            </ul>

            <Image src="/images/guides/luxury-beauty-packaging/kiki-secondary-hero.jpg" alt="KIKI World Pretty Nail Graffiti secondary packaging — multi-component kit presented as a connected packaging system" width={1800} height={1800} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>How to design primary, secondary, and tray as one system</li>
                <li>Where molded trays and inserts actually earn their cost</li>
                <li>Material and finish decisions that match a premium position</li>
                <li>The six brand moments every luxury pack has to carry</li>
                <li>California compliance and claims considerations before you print</li>
                <li>Production readiness &mdash; what to inspect before green-lighting a run</li>
                <li>A 10-item on-page readiness checklist you can run against your current project</li>
              </ol>
            </div>

            <h2 id="primary"><span className="num">02.</span>Primary packaging &mdash; the product in the customer&apos;s hand</h2>
            <p>The primary pack carries the formula and most of the recurring brand touch. It is the component the customer picks up every morning, puts back on the counter, and photographs when they talk about the product. Three questions decide whether the primary pack is doing its job on a luxury program.</p>

            <h3>1. Does the silhouette carry the brand?</h3>
            <p>A luxury primary pack should be identifiable in a thumbnail at small size without the label. The strongest beauty, cosmetics, and fragrance brands either own a proprietary silhouette or dress a stock format with enough intention that it reads as theirs. Both approaches work. The failure mode is a stock bottle treated as a stock bottle.</p>

            <h3>2. Does the finish match the formula?</h3>
            <p>Clear glass signals &ldquo;see the formula.&rdquo; Opaque aluminum signals &ldquo;protect the formula.&rdquo; Frosted glass signals &ldquo;high performance.&rdquo; Mirror-finish anodized metal signals &ldquo;object.&rdquo; The decision has to match what the formula actually needs and what you want the customer to feel about it. See our <Link href="/guides/material-decision-framework?utm_source=guide&utm_medium=organic&utm_campaign=seo_guide&utm_content=luxury_material_framework">Beauty Packaging Material Decision Guide</Link> for the full tradeoff map.</p>

            <h3>3. Does the primary stand up to its own category?</h3>
            <p>A $120 serum sitting next to prestige competitors should not look like a stock pharmacy bottle. A $38 nail product sitting next to indie launches should not look like a drugstore polish. The primary pack has to earn its space in the category it is competing in &mdash; which means auditing it against a real competitive set, not an internal mood board.</p>

            <div className="guide-images-grid">
              <Image src="/images/guides/luxury-beauty-packaging/kiki-primary-pretty-nail.jpg" alt="KIKI World Pretty Nail Graffiti primary packaging — custom bottle silhouette, intentional label hierarchy" width={1400} height={1400} />
              <Image src="/images/guides/luxury-beauty-packaging/kiki-primary-play-paint.jpg" alt="KIKI World Play Paint primary packaging — matched silhouette, differentiated color system within one product family" width={1400} height={1400} />
            </div>
            <p className="guide-img-caption">Primary packaging across the KIKI World Pretty Nail Graffiti and Play Paint SKUs. The silhouette is the brand asset; color and label carry the product differentiation. Logic Pac developed the primary and secondary packaging system for KIKI World.</p>

            <figure className="guide-video">
              <video
                src="/videos/guides/luxury-beauty-packaging/kiki-primary-rotation.mp4"
                poster="/videos/guides/luxury-beauty-packaging/kiki-primary-rotation-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="KIKI World primary packaging rotating against a gradient background"
              />
              <figcaption>The primary pack as a brand object &mdash; the silhouette has to hold up in motion, in product photography, and in the customer&apos;s hand.</figcaption>
            </figure>

            <h2 id="secondary"><span className="num">03.</span>Secondary packaging &mdash; the first touch, the shelf moment, and the unbox</h2>
            <p>Secondary packaging gets treated as a wrapper far more often than it should. On a luxury beauty program, the carton or presentation box carries three jobs at once:</p>
            <ul>
              <li><strong>Shelf.</strong> The carton is what the retailer sees in the planogram and the customer sees on the shelf. The primary pack is often not visible until after purchase.</li>
              <li><strong>Thumbnail.</strong> In e-commerce product photography, the carton is frequently the hero image &mdash; the shape that reads first in a product grid.</li>
              <li><strong>First touch.</strong> When the customer opens the shipper or picks up the gift, the carton is the first object they interact with. The weight, finish, and open ratio set the tone before they see the primary pack.</li>
            </ul>
            <p>Luxury carton work is not just &ldquo;a nicer box.&rdquo; It is a structural decision: rigid vs. folding, open ratio, lid style, interior finish, closure, and the way the carton reveals the component underneath. On the KIKI World secondary packaging program, that reveal was the campaign.</p>

            <Image src="/images/guides/luxury-beauty-packaging/kiki-secondary-architecture.jpg" alt="KIKI World secondary packaging architecture — multi-tier carton holding primary bottles, campaign card, and application components" width={1600} height={1131} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />
            <p className="guide-img-caption">The KIKI Pretty Nail Graffiti Launch secondary packaging program was named a Pentawards 2024 shortlist entry. Logic Pac developed the structural packaging system.</p>

            <h2 id="trays"><span className="num">04.</span>Trays, inserts, and the fit problem no one wants to solve</h2>
            <p>The molded tray or insert is where luxury packaging most often falls apart. The outer looks right. The primary is right. The tray is sourced late, specified loosely, and arrives slightly off &mdash; the component shifts in transit, the orientation on open is wrong, the fit feels generic.</p>
            <p>On a luxury program, the tray is a product. It has to:</p>
            <ul>
              <li>Hold every component in a consistent orientation when the customer opens the lid.</li>
              <li>Dampen vibration and movement during transit without introducing scuffing on the primary pack&apos;s decoration.</li>
              <li>Fit the entire SKU family &mdash; not just one hero size &mdash; if the product is part of a system.</li>
              <li>Match the brand&apos;s material intent. Molded paper pulp signals &ldquo;considered.&rdquo; Thermoformed PET signals &ldquo;mass.&rdquo; EVA foam signals &ldquo;tech.&rdquo; Flocked thermoform signals &ldquo;legacy luxury.&rdquo;</li>
            </ul>
            <p>Molded paper pulp has become the default for premium beauty when the brand wants a sustainability signal without surrendering the fit. The tooling is slower than thermoform &mdash; typical production tooling for molded fiber runs 8 to 12 weeks &mdash; but the finished part reads as considered rather than disposable.</p>

            <div className="guide-images-grid">
              <Image src="/images/guides/luxury-beauty-packaging/molded-tray-system.jpg" alt="Molded paper pulp tray prototype — custom cavities holding beauty primary components in orientation" width={1600} height={1200} />
              <Image src="/images/guides/luxury-beauty-packaging/molded-tray-insert.jpg" alt="Molded tray and finished primary components in a premium beauty box" width={1600} height={1600} />
            </div>
            <p className="guide-img-caption">Molded pulp tray development on an Epicutis skincare system. Each cavity is tolerance-specified to the primary pack it holds. Logic Pac developed the structural tray and secondary packaging program for Epicutis.</p>

            <h2 id="materials"><span className="num">05.</span>Materials and finishes that earn their cost</h2>
            <p>Material is the single strongest non-verbal brand signal in beauty. Most customers cannot name the material by category, but they read it instantly through weight, finish, and tactile feedback. Finish decisions &mdash; soft touch, foil, spot UV, emboss, deboss &mdash; are the second layer of that signal.</p>
            <p>On luxury beauty programs, the rule we use is simple:</p>
            <GuideBottomLine>Material carries the brand position. Finish carries the brand moments. Decoration is restrained to one or two intentional faces per layer. If everything is a hero finish, nothing is.</GuideBottomLine>
            <p>In practice this means:</p>
            <ul>
              <li><strong>Glass</strong> for prestige skincare, serums, and fragrance where weight and clarity support the position.</li>
              <li><strong>Aluminum</strong> for refillable bases, deodorant, prestige skincare, and cases where the object itself becomes a brand asset.</li>
              <li><strong>Paper pulp or molded fiber trays</strong> for the sustainability-forward inside story.</li>
              <li><strong>Rigid board, cold-foil-friendly folding carton, or soft-touch-coated board</strong> for secondary &mdash; chosen for the specific face treatment, not generically.</li>
              <li><strong>One or two restrained finishes</strong> per surface. Soft touch plus spot UV. Foil plus deboss. Not all of them.</li>
            </ul>
            <p>For the deeper material comparison, see the <Link href="/guides/material-decision-framework">Material Decision Framework</Link>. For finishes, see the <Link href="/guides/packaging-finish-guide">Packaging Finish Guide</Link>.</p>

            <div className="callout">
              <strong>Cost framing.</strong> As a working directional range, a luxury rigid or paper-over-board carton system typically lands around a 15% premium over the standard custom-packaging range for the equivalent format and volume. The premium goes to tighter tolerances, better substrates, specified finishes, pre-production proofing, and QC &mdash; not to decoration. For per-unit ranges across formats, see the <Link href="/blog/packaging-cost-per-unit-benchmarks">packaging cost per unit benchmarks</Link>.
            </div>

            <Image src="/images/guides/luxury-beauty-packaging/kiki-material-texture.jpg" alt="Material and texture reference set — paper, finish, and color decisions documented as a system" width={1600} height={1131} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="moments"><span className="num">06.</span>The six brand moments every luxury pack has to carry</h2>
            <p>A luxury beauty package is encountered six distinct ways. Most packaging programs are optimized for only one or two of them. The programs we work on target all six.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Moment</th>
                    <th>What the customer sees</th>
                    <th>What the pack has to do</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Shelf</strong></td>
                    <td>Carton face in a retail planogram at arm&apos;s length</td>
                    <td>Read the brand and the category at distance; signal the price tier.</td>
                  </tr>
                  <tr>
                    <td><strong>Thumbnail</strong></td>
                    <td>Product photography in a 1:1 e-commerce grid</td>
                    <td>Keep the silhouette legible at small size; carry color and finish cues through compression.</td>
                  </tr>
                  <tr>
                    <td><strong>Hand</strong></td>
                    <td>Weight, surface, and closure at first pickup</td>
                    <td>Match the price position; reward the touch; avoid any element that feels loose or thin.</td>
                  </tr>
                  <tr>
                    <td><strong>Open</strong></td>
                    <td>The carton reveal and the primary pack in orientation</td>
                    <td>Present the component the way the brand intended; use the tray to hold it there.</td>
                  </tr>
                  <tr>
                    <td><strong>Use</strong></td>
                    <td>The primary pack over its full use cycle</td>
                    <td>Protect the formula; reward the daily ritual; last the full product life without visible wear.</td>
                  </tr>
                  <tr>
                    <td><strong>Share</strong></td>
                    <td>Social, gifting, and photography after purchase</td>
                    <td>Photograph well; hold up as a backdrop; keep its finish when customers handle it.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Image src="/images/guides/luxury-beauty-packaging/aroma360-architecture.jpg" alt="Aroma360 fragrance discovery set — tiered secondary packaging organizing a multi-SKU luxury fragrance program" width={1300} height={1625} className="guide-img" sizes="(max-width: 960px) 100vw, 600px" />
            <p className="guide-img-caption">Aroma360 fragrance discovery-set architecture: secondary packaging designed to organize, present, and ship a multi-SKU luxury program. Logic Pac developed the structural packaging system.</p>

            <h2 id="compliance"><span className="num">07.</span>California compliance and claims &mdash; what Logic Pac reviews before you print</h2>
            <p>Luxury positioning does not exempt packaging from California&apos;s compliance regime, and in some ways it concentrates the exposure. Three areas matter most for beauty brands building a US-first launch, and Logic Pac reviews all three as part of a luxury packaging program.</p>

            <h3>California SB 54 &mdash; recyclability review</h3>
            <p>SB 54 requires that single-use packaging sold in California meet recycling or reduction targets over the next decade. The practical implication for beauty brands is that mono-material, recyclable packaging and recycled content become increasingly expected; multi-material cartons, mixed-resin pumps, and non-recyclable laminates become increasingly expensive to defend. <strong>Logic Pac offers an SB 54 recyclability review</strong> on luxury packaging programs &mdash; evaluating each component against California&apos;s expected classification before tooling or print. For the deeper playbook, see our <Link href="/blog/sustainable-beauty-packaging-sb54">Sustainable Beauty Packaging &amp; SB 54</Link> article.</p>

            <h3>FTC Green Guides &mdash; claims review</h3>
            <p>Any sustainability language on the pack or in copy &mdash; &ldquo;recyclable,&rdquo; &ldquo;recycled,&rdquo; &ldquo;compostable,&rdquo; &ldquo;eco,&rdquo; &ldquo;sustainable&rdquo; &mdash; needs substantiation under the FTC Green Guides. The pack can carry the claim only if the claim is accurate for the format, the local recovery infrastructure, and the specific component. <strong>Logic Pac offers an FTC Green Guides claims review</strong> on packaging copy before copy ships to print, flagging claims that will not survive scrutiny and recommending language that will.</p>

            <h3>Proposition 65 &mdash; substrate and ink screening</h3>
            <p>Any product sold in California has Prop 65 exposure for listed substances. The warning language itself is well understood; the trap is substrate and ink choices that trigger it unexpectedly. <strong>Logic Pac offers a Prop 65 substrate and ink screening</strong> as part of pack specification review, with the goal of identifying problem combinations before plates are cut rather than after.</p>

            <h2 id="production"><span className="num">08.</span>Production readiness &mdash; what to inspect before you green-light</h2>
            <p>Luxury beauty packaging is unforgiving at production. A finish that drifts between proofs and press, a tray cavity that shifts a millimeter, a carton panel that bows under weight &mdash; these are the issues that quietly turn a premium project into a reprint. For a representative luxury beauty packaging program &mdash; brief in to launch out &mdash; <strong>a realistic end-to-end timeline is 16 to 24 weeks</strong>, depending on tooling scope, SKU count, and finish complexity. The sections below are the three categories of checkpoints that prevent most late-stage surprises.</p>

            <h3>Pre-production proofing</h3>
            <ul>
              <li>Color proofs on the exact substrate and finish being used in production. Not a digital proof. Not a different stock.</li>
              <li>A dry-run of foil, spot UV, deboss, and emboss in registration &mdash; especially where decorations stack.</li>
              <li>A written specification of color standards, finish tolerances, and acceptable variance.</li>
              <li><strong>Primary-pack sampling cycle:</strong> on luxury programs we run, primary-pack samples typically move through fewer than four sample rounds over a 2 to 4 week window before green-light &mdash; tight enough to protect the launch date, long enough to catch finish and tolerance issues on the right substrate.</li>
            </ul>

            <h3>Component fit testing</h3>
            <ul>
              <li>Primary pack dropped into the production tray, in production carton, at the production component weight. The pack should seat in one motion.</li>
              <li>Tolerance tested across the SKU family. If the tray is intended to carry multiple components, every component is checked in every cavity.</li>
              <li>Transit tested with the final carton configuration. Shake, drop, and in-case orientation are evaluated.</li>
            </ul>

            <h3>Pilot run and inspection</h3>
            <ul>
              <li>A pilot run before full production, with 100% inspection on finish, color, structural integrity, and component fit.</li>
              <li>Documented acceptance criteria &mdash; the production floor should be able to point at a written spec, not a verbal expectation.</li>
              <li>On-site presence at critical quality moments. For higher-stakes launches, Logic Pac has sent team members to the factory and to the client&apos;s packout facility to manage transitions in person. The approach is detailed in our <Link href="/work/audio-enhancement-packaging-system">Audio Enhancement factory transition case study</Link>.</li>
            </ul>

            <div className="callout">
              <strong>What the proofing and QC program buys.</strong> On luxury beauty programs where Logic Pac manages the full pre-production cycle, we typically see a <strong>~21% reduction in defect rate</strong> at pilot vs. unmanaged runs on comparable formats, and a luxury carton reprint rate that lands in the <strong>&lt; 0.75&ndash;1.25%</strong> range. Those are the numbers the 16- to 24-week timeline is designed to protect.
              <em className="methodology-note">Methodology: the 21% defect-rate figure is measured by a factory- and client-selected third-party inspection firm over a 12-month period on comparable luxury programs. The reprint-rate figure is Logic Pac internal measurement reconciled against factory partner QC reports.</em>
            </div>

            <h3>Fulfillment and replenishment</h3>
            <p>A luxury program does not end at the pallet. Logic Pac operates <strong>packaging fulfillment and managed-inventory programs out of Salt Lake City</strong>, holding stock, kitting components, and shipping to the brand&apos;s 3PL or packout partner on a cadence the brand sets. The result is a replenishment lead time measured in days rather than months, which matters when a hero SKU takes off faster than the next ocean container will land. The Epicutis skincare program is a representative example of this model at scale.</p>

            <Image src="/images/guides/luxury-beauty-packaging/epicutis-system.jpg" alt="Epicutis skincare packaging system — multi-SKU family with coordinated black outer carton, drawer-pull inner boxes, and molded trays" width={1600} height={1200} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="checklist"><span className="num">09.</span>The 10-item luxury packaging readiness checklist</h2>
            <p>Run your current project through the ten checks below. If more than two or three come back with hesitation, the project is not ready to move to tooling or print.</p>

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
              <h2>Sources &amp; references</h2>
              <p className="sources-lede">External regulatory and industry references used in this guide. Visual case material is used with permission; details about program outcomes, metrics, and operating specifics are deliberately held until approved for public reference.</p>
              <ul className="sources-list">
                <li><strong>California SB 54 (Plastic Pollution Prevention and Packaging Producer Responsibility Act)</strong> <span>&mdash; CalRecycle. Governs single-use packaging recyclability, source reduction, and producer responsibility for products sold in California.</span></li>
                <li><strong>FTC Green Guides</strong> <span>&mdash; U.S. Federal Trade Commission guidance on environmental marketing claims. Applies to any &ldquo;recyclable,&rdquo; &ldquo;recycled content,&rdquo; or &ldquo;sustainable&rdquo; language on beauty packaging.</span></li>
                <li><strong>Pentawards 2024 Shortlist</strong> <span>&mdash; KIKI Pretty Nail Graffiti Launch, developed in partnership with Logic Pac.</span></li>
              </ul>
            </section>

            <GuideBottomLine>Luxury beauty packaging is a system decision. If primary, secondary, tray, material, and finish are developed as one program &mdash; with the brand moments explicitly in scope &mdash; the pack will carry the position it is supposed to carry. If any of those layers is sourced in isolation, the system falls apart in the places customers notice most. The programs that treat the pack as a system also hold up on the next release: <strong>roughly 75&ndash;80% of our luxury beauty clients extend into a second SKU family within 12 months of launch</strong>, which is the clearest proof we have that the system did what it was supposed to do. For the design-system discipline that makes those extensions possible without rebuilding the brand each launch, see our <Link href="/guides/beauty-brand-packaging-design-system">beauty brand packaging design system guide</Link>.<em className="methodology-note">Methodology: the 75&ndash;80% program-extension figure is a Logic Pac &amp; Logic Agency internal benchmark across luxury beauty programs run 2020&ndash;2026.</em></GuideBottomLine>

          </div>
        </div>
      </div>

      <div className="guide-faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Still Have Questions?</h2>
            <p>The questions beauty, cosmetics, and fragrance brands ask us most often about luxury packaging development. If you do not see yours, book a packaging audit and we will give you a straight read.</p>
          </div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Luxury Packaging FAQs"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Luxury Packaging Audit"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Pressure-Test Your Packaging System<br /><em>Before Tooling.</em></h2>
          <p>Share the formula, the price position, the channel mix, and the current pack direction. We will tell you where the system is likely to hold up, where it will not, and what to resolve before you commit to tooling or print.</p>
          <button type="button" className="bi" onClick={() => openModal('Guide - Luxury Packaging Audit', 'guide-bottom-cta')}>Request a Packaging Audit</button>
        </div>
      </section>
    </>
  )
}
