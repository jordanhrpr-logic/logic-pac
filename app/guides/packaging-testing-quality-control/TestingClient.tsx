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
  { id: 'gap', label: 'The sample-to-production gap' },
  { id: 'golden', label: 'The golden sample & spec' },
  { id: 'preprod', label: 'Pre-production sample inspection' },
  { id: 'fit', label: 'Fit, function & dispense tests' },
  { id: 'tolerance', label: 'Tolerance & dimensional checks' },
  { id: 'transit', label: 'Transit & performance tests' },
  { id: 'color', label: 'Color, registration & finish' },
  { id: 'inline', label: 'Inline & pre-shipment inspection' },
  { id: 'docs', label: 'Documentation trail' },
  { id: 'scorecard', label: 'Run-to-sample scorecard' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'What does "run-to-sample conformity" actually mean?',
    answer: 'It means the production units match the specific unit you approved as the golden sample — color, finish, structure, tolerances, closure feel, and dispense behavior — within a written tolerance band. Without a signed golden sample and written specs, "matches the sample" is a conversation, not a standard.',
  },
  {
    question: 'What AQL should we specify on finished goods?',
    answer: 'For most beauty and consumer packaging programs, AQL 0.65 for critical defects, 2.5 for major, and 4.0 for minor is a reasonable starting point. Prestige and luxury programs tighten critical to 0 and major to 1.5. The number only matters if the defect classes are written down and the inspector has photographs of what each class looks like.',
  },
  {
    question: 'Do we need third-party inspection on every run?',
    answer: 'For established programs with a factory that has already shipped multiple runs clean, DUPRO (during-production) can go to spot checks and pre-shipment can rotate between internal QC and third-party. For new factories, new SKUs, or any program where the last run had defects escape, use third-party on both DUPRO and pre-shipment.',
  },
  {
    question: 'How do we handle a defect found at pre-shipment inspection?',
    answer: 'Three paths. Minor defects below tolerance ship with a documented note. Majors trigger a sort, rework, or partial hold. Criticals trigger a full hold, root-cause analysis, and corrective action before the next pallet moves. The important thing is that each path is pre-agreed in the specification — not negotiated after inspection.',
  },
  {
    question: 'What is the minimum documentation we should request from a factory?',
    answer: 'Per run: pre-production sample sign-off, DUPRO inspection report with photos, pre-shipment inspection report with photos, Certificates of Analysis on substrates and inks where applicable, and a packing list that matches the inspection report. If any one of those is missing, you are shipping on faith.',
  },
  {
    question: 'How does Logic Pac manage QC on client programs?',
    answer: 'We write the specification, maintain the golden sample library, qualify the factory, run DUPRO and pre-shipment inspection against the written spec, and handle corrective-action loops when something drifts. On higher-stakes transitions we have sent team members to the factory and the packout facility in person. The approach is detailed in our Audio Enhancement case study.',
  },
]

export default function TestingClient() {
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

  const scorecardItems = [
    { id: 's1', title: 'A written specification exists and is signed', body: 'Dimensions with tolerances, colors with Delta E targets, finishes with substrate and coat weight, closure torque, component weights, and acceptance criteria for each defect class.' },
    { id: 's2', title: 'A golden sample has been signed and stored', body: 'A physical unit (and ideally duplicates at the factory, the brand, and Logic Pac) that is the reference the production run is measured against.' },
    { id: 's3', title: 'Pre-production samples match the golden sample', body: 'Reviewed under the same lighting conditions, on the same substrate, in the same finish stack. Deviations are logged, not negotiated verbally.' },
    { id: 's4', title: 'Fit, function, and dispense have been physically tested', body: 'Primary pack seated in the production tray at production weight. Closures torqued. Dispense actuated. Child-resistance tested where required.' },
    { id: 's5', title: 'Tolerance bands are written for every critical dimension', body: 'Molded trays, carton panels, closure bores, and insert cavities each have a ± specified in millimeters. "Looks right" is not a tolerance.' },
    { id: 's6', title: 'Transit testing results are documented', body: 'Drop, compression, moisture, and vibration tests passed at the levels the shipping lane will see — not at generic benchmarks. ISTA protocols where the channel requires them.' },
    { id: 's7', title: 'Color, registration, and finish checked on substrate', body: 'Press checks performed on the production substrate, with Delta E measured, registration verified, and finish stacks (soft-touch, foil, spot UV, deboss) proofed in combination.' },
    { id: 's8', title: 'DUPRO and pre-shipment inspection plans exist', body: 'Written AQL thresholds for critical/major/minor defects, a defect photo book, inspector assigned, and the hold/release decision tree agreed before the run starts.' },
    { id: 's9', title: 'A documentation trail is defined and enforced', body: 'Pre-production sample sign-off, DUPRO inspection report with photos, pre-shipment inspection report with photos, CoAs where applicable, and a packing list that reconciles to the inspection report.' },
    { id: 's10', title: 'A corrective-action process exists before you need it', body: 'The response to a critical defect, a major-defect sort, and a minor over-tolerance are pre-agreed — not negotiated after the pallets are loaded.' },
  ]
  const progress = Math.round((Object.values(checked).filter(Boolean).length / scorecardItems.length) * 100)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Testing &amp; QC</div>
        <h1>Packaging <em>testing &amp; quality control.</em></h1>
        <p>Approved samples don&apos;t guarantee a clean production run. The gap between the signed golden sample and the cased pallet at the 3PL is the operational discipline most packaging programs skip &mdash; and the one that quietly turns premium work into reprints, chargebacks, and launch delays. This is the reference manual for how to close that gap.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>18 min read</span>
          <span>Updated October 2026</span>
          <span>Development &amp; Production Stage</span>
        </div>
      </div>

      <div className="guide-wrap testing-guide">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="What testing and QC guarantees a production run matches the sample you approved?"
              answer="A written specification, a signed golden sample, documented pre-production inspection, physical fit and function testing, dimensional and transit testing on substrate, color and finish verification, in-line (DUPRO) and pre-shipment inspection against written AQL thresholds, and a documentation trail that reconciles every pallet to the sample you signed. Each element is a reference, not a schedule — the goal is run-to-sample conformity, not calendar completion."
              takeaways={[
                'A pre-production sample is a reference, not an outcome — the discipline is matching the run to the sample.',
                'Tolerances, AQL thresholds, and defect classes have to be written down before the first pallet moves.',
                'DUPRO and pre-shipment inspection against a written spec is the floor, not the ceiling.',
                'The documentation trail is what gives you a corrective-action path when something drifts.',
              ]}
            />

            <h2 id="gap"><span className="num">01.</span>The sample-to-production gap is where most programs lose money</h2>
            <p>Every packaging program crosses a specific threshold: the moment the brand signs off on a pre-production sample and the factory begins the production run. On well-run programs that threshold is a formality &mdash; the sample is a reference, the run matches the sample, the pallets land at the 3PL and get picked. On poorly-run programs it is where the money goes.</p>
            <p>The failures look the same every time:</p>
            <ul>
              <li>A color drift that is &ldquo;within tolerance&rdquo; because no tolerance was written down.</li>
              <li>A molded tray that holds the sample but not the production primary &mdash; because the sample primary was a slightly different wall thickness.</li>
              <li>A spot UV + deboss combination that read beautifully on the proof and chipped on the production run because the stacking order was never specified.</li>
              <li>A pallet of cartons that fails compression in transit because the test was performed on the pre-production stock, not the production stock.</li>
            </ul>
            <p>None of these are factory problems. They are specification and inspection problems. A testing and QC program exists to prevent the gap between the approved sample and the shipped run from being where surprises happen. The sections below are the reference manual.</p>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>The golden-sample and written-specification doctrine that anchors every downstream check</li>
                <li>Pre-production sample inspection &mdash; what to actually check on the first unit the factory sends</li>
                <li>Fit, function, and dispense testing with the production component weights</li>
                <li>Tolerance and dimensional checks for molded parts, cartons, and inserts</li>
                <li>Transit and performance testing calibrated to the real shipping lane</li>
                <li>Color, registration, and finish testing on the production substrate</li>
                <li>DUPRO (during-production) and pre-shipment inspection with written AQL thresholds</li>
                <li>The documentation trail that makes corrective action possible</li>
                <li>A 10-item run-to-sample conformity scorecard</li>
              </ol>
            </div>

            <h2 id="golden"><span className="num">02.</span>The golden sample and the written specification</h2>
            <p>Every discipline in this guide is useless without two artifacts: a signed golden sample and a written specification. These are the reference the production run is measured against. Nothing else.</p>

            <h3>The written specification</h3>
            <p>A production-grade packaging specification should contain:</p>
            <ul>
              <li><strong>Dimensions</strong> for every component, with a tolerance band in millimeters.</li>
              <li><strong>Materials</strong> by grade and supplier, with any required certifications (FSC, PCR percentage, grammage, caliper).</li>
              <li><strong>Colors</strong> with Pantone references and a measured Delta E target on the production substrate.</li>
              <li><strong>Finishes</strong> with substrate, coat weight, stack order, and any registration tolerance.</li>
              <li><strong>Structural tests</strong> required for sign-off (drop, compression, moisture, vibration, child-resistance where applicable).</li>
              <li><strong>Component weights</strong> on the primary pack and any product the pack has to hold.</li>
              <li><strong>Closure specifications</strong> &mdash; torque, click, seal integrity.</li>
              <li><strong>Acceptance criteria</strong> &mdash; what counts as a critical, major, or minor defect, with written AQL thresholds and reference photos.</li>
              <li><strong>Packaging artwork</strong> at the correct dieline and resolution, with print spec sheets.</li>
              <li><strong>Packout and case-pack specifications</strong> &mdash; master carton configuration, labeling, and barcoding.</li>
            </ul>

            <h3>The golden sample</h3>
            <p>A golden sample is a single physical unit (ideally duplicates: one at the factory, one at the brand, one at Logic Pac) that is the reference every production unit is measured against. If the production unit does not match the golden sample within the written tolerance, it does not ship.</p>
            <p>The golden sample is <strong>not</strong> a hero shot. It is a working artifact. It is the thing the inspector holds in one hand while they measure the production unit in the other.</p>

            <div className="callout">
              <strong>If you only remember one thing.</strong> &ldquo;Matches the sample&rdquo; is a conversation unless the sample is signed, stored, and paired with a written specification. The golden sample and the specification are the two artifacts that convert QC from an opinion into a protocol.
            </div>

            <h2 id="preprod"><span className="num">03.</span>Pre-production sample inspection &mdash; the first unit sets the standard</h2>
            <p>The pre-production sample is the first unit built on production tooling, with production materials, and (ideally) on the production line. It is the dress rehearsal. Everything you approve on this sample becomes the acceptance standard for the full run.</p>
            <p>On a typical luxury beauty program at Logic Pac, the primary-pack sampling cycle lands in a <strong>2 to 4 week window</strong>, with <strong>fewer than four sample rounds</strong> before green-light. The round count is a reasonable proxy for specification quality &mdash; projects that need five, six, or seven rounds usually have specification gaps the sampling process is trying to fix.</p>
            <p>What to inspect on the pre-production sample, in order:</p>
            <ol>
              <li><strong>Dimensional match to the specification.</strong> Caliper the carton panels. Measure the tray cavities. Weigh the primary. Compare to spec.</li>
              <li><strong>Material match to the specification.</strong> Confirm substrate grade, PCR percentage, grammage, and any required certifications match what was ordered.</li>
              <li><strong>Finish stack and registration.</strong> Soft-touch over foil, foil under spot UV, deboss into panel &mdash; the stack order matters. Registration deviation above the spec threshold is a reject.</li>
              <li><strong>Color on substrate under reference lighting.</strong> Delta E measured, not eyeballed.</li>
              <li><strong>Fit with the production primary pack.</strong> Not a mockup. The real primary.</li>
              <li><strong>Closure feel and dispense behavior.</strong> Torque, click, seal integrity, pump prime, dropper draw.</li>
            </ol>

            <div className="guide-images-grid">
              <figure className="guide-img-frame">
                <Image src="/images/guides/packaging-testing-qc/sample-inspection.jpg" alt="Audio Enhancement pre-production sample packaging with molded pulp tray cavity, inspected front-on" width={1276} height={1276} className="guide-img" sizes="(max-width: 960px) 100vw, 500px" />
                <figcaption className="guide-img-caption">Audio Enhancement pre-production sample &mdash; molded pulp tray cavities, structural proof-of-fit, and finished print on substrate inspected in a single reference view.</figcaption>
              </figure>
              <figure className="guide-img-frame">
                <Image src="/images/guides/packaging-testing-qc/sample-inspection-angle.jpg" alt="Audio Enhancement pre-production sample from a side angle showing tray depth, hinge geometry, and panel registration" width={1276} height={1276} className="guide-img" sizes="(max-width: 960px) 100vw, 500px" />
                <figcaption className="guide-img-caption">The same sample from a side angle. Depth, hinge, panel registration, and interior finish all read &mdash; and all get documented against the written spec before green-light.</figcaption>
              </figure>
            </div>

            <h2 id="fit"><span className="num">04.</span>Fit, function, and dispense testing</h2>
            <p>Fit testing is the discipline most frequently skipped because it feels redundant &mdash; the sample primary fit, so the production primary will fit. In practice, the production primary almost always weighs slightly differently, has slightly different wall thickness, or carries a slightly different volume. Any one of those shifts the tray fit, the closure torque, or the dispense behavior.</p>
            <p>The non-negotiable fit and function tests:</p>
            <ul>
              <li><strong>Primary pack seated in the production tray at production weight.</strong> The pack should seat in one motion, not with a jiggle. It should not shift during a controlled rotation of the carton.</li>
              <li><strong>Closure torque on the production primary.</strong> Over-torque strips threads. Under-torque leaks in transit.</li>
              <li><strong>Dispense actuation.</strong> Pumps primed to full stroke. Droppers drawing the specified volume. Dispensers actuating cleanly on the production formula viscosity.</li>
              <li><strong>Seal integrity.</strong> Induction seals properly bonded. Tamper-evidence intact. Child-resistant closures tested to the applicable standard.</li>
              <li><strong>Insert and accessory fit.</strong> Cards, inserts, sachets, and any secondary components seated in their specified positions.</li>
            </ul>

            <figure className="guide-img-frame">
              <Image src="/images/guides/packaging-testing-qc/fit-function.jpg" alt="Audio Enhancement teacher microphone system seated on packaging — fit, function, and visual presentation verified together" width={1600} height={1600} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />
              <figcaption className="guide-img-caption">Fit and function verified on the real product, not a stand-in. For hardware-adjacent beauty formats (devices, dispensers, dual-chamber systems) the production unit has to seat, orient, and release correctly before the pack is cleared.</figcaption>
            </figure>

            <h2 id="tolerance"><span className="num">05.</span>Tolerance and dimensional checks</h2>
            <p>&ldquo;Within tolerance&rdquo; is only meaningful when the tolerance is written down. For molded parts, carton panels, inserts, and closures, the specification should include a <strong>&plusmn;mm band</strong> on every critical dimension &mdash; cavity depth, cavity wall thickness, outer panel dimensions, hinge throw, closure bore diameter, insert cavity dimensions.</p>
            <p>Tolerance work has two phases: engineering (what the CAD and tooling allow) and verification (what the production run actually produces).</p>

            <div className="guide-images-grid">
              <figure className="guide-img-frame">
                <Image src="/images/guides/packaging-testing-qc/tolerance-cad.jpg" alt="CAD render of a molded pulp tray cavity designed for a cylindrical primary pack with precise wall-thickness tolerances" width={685} height={596} className="guide-img" sizes="(max-width: 960px) 100vw, 500px" />
                <figcaption className="guide-img-caption">The tolerance work starts in CAD. Cavity depth, wall thickness, hinge geometry, and primary-pack seat dimensions are specified before tooling &mdash; and before the first sample is pulled.</figcaption>
              </figure>
              <figure className="guide-img-frame">
                <Image src="/images/guides/packaging-testing-qc/cavity-verification.jpg" alt="Molded fiber tray cavity verified against the specification — depth, wall thickness, and fit tolerances all documented" width={1600} height={1600} className="guide-img" sizes="(max-width: 960px) 100vw, 500px" />
                <figcaption className="guide-img-caption">The verification is physical. The tray that comes off the tool is measured &mdash; depth, wall, cavity width &mdash; against the specification before it ships into production.</figcaption>
              </figure>
            </div>

            <h3>What to measure</h3>
            <ul>
              <li><strong>Molded fiber and pulp trays:</strong> cavity depth, wall thickness, cavity-to-cavity consistency, tray flatness, hinge integrity.</li>
              <li><strong>Rigid cartons and set-up boxes:</strong> outer dimensions, inner dimensions, panel squareness, hinge throw, closure bore.</li>
              <li><strong>Folding cartons:</strong> dieline accuracy, fold registration, panel-to-panel squareness, glue tab integrity.</li>
              <li><strong>Primary packs:</strong> wall thickness, neck finish, closure fit, dispense orifice.</li>
              <li><strong>Inserts and accessories:</strong> card thickness, cavity fit, orientation retention.</li>
            </ul>

            <h2 id="transit"><span className="num">06.</span>Transit and performance testing</h2>
            <p>Transit testing is where a premium package most commonly fails after launch. The cartons passed inspection, the pallets left the factory, and three weeks later a Sephora distribution center opens a damaged master carton because the test was performed on pre-production stock, not the production stock &mdash; or at generic drop heights rather than the drop heights the actual shipping lane produces.</p>
            <p>The protocols worth specifying by name:</p>
            <ul>
              <li><strong>Drop testing.</strong> Face, edge, and corner drops at heights calibrated to the shipping method &mdash; parcel is harder on packaging than LTL, and air freight sees more vibration than ocean.</li>
              <li><strong>Compression testing.</strong> Stacked case-pack held under load for the expected warehouse dwell time. The weak point is almost always the master carton, not the primary.</li>
              <li><strong>Vibration testing.</strong> Fixed-frequency and random vibration at the levels the lane produces. Especially important for anything with liquid, powder, or multi-component kits.</li>
              <li><strong>Moisture and humidity testing.</strong> Cycle through the humidity extremes the lane can see &mdash; especially for molded fiber, uncoated board, and anything with foil or spot UV.</li>
              <li><strong>Altitude testing.</strong> Air freight exposes any air-sensitive seal, pump, or closure to pressure differentials. Test for them.</li>
            </ul>
            <p>For retail channels that require it, call out the applicable ISTA protocol by name on the spec sheet &mdash; ISTA 1A for individual packaged products under 150 lb, ISTA 3A for parcel delivery through small-package carriers, ISTA 6-Amazon for Amazon-channel brands.</p>

            <h2 id="color"><span className="num">07.</span>Color, registration, and finish testing on substrate</h2>
            <p>Color on screen is color on screen. Color on substrate under reference lighting is color on packaging. Those are not the same thing, and the gap is where brand-identity complaints come from.</p>
            <p>The non-negotiable color and finish checks:</p>
            <ul>
              <li><strong>Press checks on production substrate.</strong> Not a different stock, not a digital proof, not a pre-production trial. The production substrate the production run is going to use.</li>
              <li><strong>Delta E measured, not eyeballed.</strong> A tolerance of 2.0 Delta E or lower is standard for prestige and luxury; 3.0 is acceptable for mass. Written down, measured on substrate, and signed.</li>
              <li><strong>Registration tolerance written in millimeters.</strong> How far can a foil shift against a deboss before it reads as a reject. Then documented photographically so the inspector can see the threshold.</li>
              <li><strong>Finish stacks proofed in combination.</strong> Soft-touch over the full print area, foil over the soft-touch, spot UV over the foil, deboss into the stack. Every combination tested, not each layer tested in isolation.</li>
            </ul>

            <div className="callout">
              <strong>Cost framing.</strong> On luxury beauty programs where Logic Pac manages the full pre-production proofing and QC cycle, we typically see a <strong>~21% reduction in defect rate</strong> at pilot versus unmanaged runs on comparable formats, and a luxury carton reprint rate that lands in the <strong>&lt; 0.75&ndash;1.25%</strong> range. The economics of reprint avoidance pay for the proofing cycle several times over &mdash; which is why the 16- to 24-week luxury timeline is built around protecting the proofing window, not compressing it.
            </div>

            <h2 id="inline"><span className="num">08.</span>In-line (DUPRO) and pre-shipment inspection</h2>
            <p>Pre-production sampling catches specification gaps. In-line inspection catches production drift. Pre-shipment inspection catches what the first two missed. Each stage has a specific job.</p>

            <h3>DUPRO (During Production) inspection</h3>
            <p>Performed at <strong>20&ndash;80% production complete</strong>, DUPRO exists to catch drift while there is still time to correct it. The inspector pulls units from the line, measures against the written spec, compares against the golden sample, and signs a report. If a critical defect appears, the line stops and the run is corrected before the remaining 50% is produced.</p>

            <h3>Pre-shipment inspection</h3>
            <p>Performed at <strong>100% production complete</strong>, pre-shipment is the last check before pallets leave the factory. The inspector pulls a statistical sample against the written AQL thresholds, measures against the specification, compares against the golden sample, and signs the release.</p>

            <h3>AQL thresholds that work for beauty and luxury</h3>
            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr><th>Defect class</th><th>Mass beauty</th><th>Prestige / luxury</th><th>Example</th></tr>
                </thead>
                <tbody>
                  <tr><td>Critical</td><td>0.65</td><td>0</td><td>Child-resistance failure, formula contamination risk, broken primary pack</td></tr>
                  <tr><td>Major</td><td>2.5</td><td>1.5</td><td>Color drift beyond Delta E tolerance, finish chip, registration beyond tolerance</td></tr>
                  <tr><td>Minor</td><td>4.0</td><td>2.5</td><td>Small scuff on secondary, barely-visible print mottle, soft-touch inconsistency below threshold</td></tr>
                </tbody>
              </table>
            </div>
            <p>The numbers only mean something if the defect classes are written down and the inspector has reference photographs of what each class looks like at the specified threshold. &ldquo;Major defect&rdquo; without a reference photo is interpretation. With a reference photo, it is a measurement.</p>

            <h3>When to use third-party inspection</h3>
            <ul>
              <li><strong>Always, on the first run with a new factory.</strong> Internal QC and third-party inspection should both be present until the factory has shipped two or three clean runs.</li>
              <li><strong>Always, on the first run of a new SKU on an established factory.</strong> New tooling, new specifications, new golden sample.</li>
              <li><strong>Always, after any defect escape.</strong> Third-party DUPRO and pre-shipment until the corrective action has held for two runs.</li>
              <li><strong>Rotational, on established programs.</strong> Clean factory, clean SKU, established spec: internal and third-party can rotate.</li>
            </ul>
            <p>The go-to third-party inspection agencies for beauty and consumer packaging are SGS, Bureau Veritas, and Asia Inspection. Logic Pac also runs direct inspection on client programs where the stakes justify on-site presence &mdash; the <Link href="/work/audio-enhancement-packaging-system">Audio Enhancement factory transition case</Link> is a representative example, including <strong>100% inspection on pilot runs</strong> during the factory qualification period.</p>

            <figure className="guide-img-frame">
              <Image src="/images/guides/packaging-testing-qc/fit-test.jpg" alt="Beauty primary pack seated in a rigid drawer carton — fit, orientation, and secondary presentation inspected together" width={1600} height={1280} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />
              <figcaption className="guide-img-caption">The pre-shipment check is physical: the primary seated in the secondary, in the orientation the customer will see, under the lighting the inspector can defend. Nothing on a screen replaces the real pack in hand.</figcaption>
            </figure>

            <h2 id="docs"><span className="num">09.</span>The documentation trail is the corrective-action path</h2>
            <p>Testing and inspection without documentation is reassurance. Testing and inspection with documentation is a corrective-action path. The documents are what let you fix the problem the next time the factory runs the SKU, instead of discovering the same defect on the next pallet.</p>
            <p>The minimum documentation per run:</p>
            <ul>
              <li><strong>Pre-production sample sign-off.</strong> Signed, dated, with photographs and any noted deviations.</li>
              <li><strong>Golden-sample receipt.</strong> Confirmation that a copy of the signed golden sample is at the factory, the brand, and Logic Pac.</li>
              <li><strong>DUPRO inspection report.</strong> Date, inspector name, units inspected, defects found by class, photographs, pass/hold decision.</li>
              <li><strong>Pre-shipment inspection report.</strong> Same format as DUPRO, plus a reconciled count against the packing list.</li>
              <li><strong>Certificates of Analysis.</strong> On substrates and inks where applicable &mdash; FSC chain of custody, PCR content verification, grammage, caliper, ink migration.</li>
              <li><strong>Packing list.</strong> Carton count, unit count per carton, total unit count, master-carton labeling.</li>
              <li><strong>Corrective action records.</strong> For any defect above threshold &mdash; root cause, corrective action, verification run.</li>
            </ul>
            <p>If any one of those documents is missing on a given run, you are shipping without a corrective-action path for the next one. The documentation is cheap. The corrective-action path it buys is expensive to recreate after a defect escape.</p>

            <GuideBottomLine>
              Run-to-sample conformity is not a check at the end. It is a chain &mdash; written specification, signed golden sample, pre-production sample inspection, fit and function testing, dimensional and transit testing on substrate, color and finish verification, DUPRO and pre-shipment inspection against written AQL thresholds, and a documentation trail that reconciles every pallet to the sample you signed. The brands that run this chain cleanly see <strong>~21% defect reduction at pilot</strong>, <strong>&lt; 0.75&ndash;1.25% luxury carton reprint rates</strong>, and <strong>75&ndash;80% program extension</strong> into a second SKU family within 12 months of launch. The chain is not optional. It is the discipline the sampled unit is designed to anchor.
            </GuideBottomLine>

            <h2 id="scorecard"><span className="num">10.</span>The 10-item run-to-sample conformity scorecard</h2>
            <p>Run this scorecard against your current project before the first production pallet moves. If more than two or three items come back with hesitation, the project is not production-ready &mdash; it is sample-ready, which is a different standard.</p>

            <div className="checklist-wrap">
              <div className="checklist-progress">
                <div className="checklist-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />
                <span>{Object.values(checked).filter(Boolean).length} of {scorecardItems.length} ready &middot; {progress}%</span>
              </div>
              <ul className="checklist">
                {scorecardItems.map((item, idx) => (
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
              <p className="sources-lede">The testing and QC chain lives between the brief and the launch. These are the guides that bookend it &mdash; the brief that becomes the specification, the timeline that holds the inspection calendar, and the system guides that use QC as one of several readiness gates.</p>
              <ul className="sources-list">
                <li><Link href="/guides/packaging-brief-template">The Packaging Brief Template</Link> &mdash; the upstream document that becomes the written specification referenced throughout this guide.</li>
                <li><Link href="/guides/concept-to-shelf-timeline">Concept-to-Shelf Timeline</Link> &mdash; when each inspection stage lands on a standard 12-week and extended 16&ndash;24-week luxury timeline.</li>
                <li><Link href="/guides/luxury-beauty-packaging-system">The Luxury Beauty Packaging System Guide</Link> &mdash; the broader readiness checklist that uses QC as one of ten green-light gates.</li>
                <li><Link href="/guides/sustainable-packaging-decision-matrix">Sustainable Packaging Decision Matrix</Link> &mdash; the sustainability lever decision tool that references the same proofing and QC cycle for defect-rate and reprint protection.</li>
                <li><Link href="/guides/material-decision-framework">Beauty Packaging Material Decision Framework</Link> &mdash; per-material cost, MOQ, lead-time, and format data that drives what each tolerance band and transit test needs to protect.</li>
                <li><Link href="/blog/custom-packaging-development-process">Custom packaging development process</Link> &mdash; stage-by-stage narrative that complements this reference guide.</li>
                <li><Link href="/blog/how-to-choose-beauty-packaging-manufacturer">How to choose a beauty packaging manufacturer</Link> &mdash; the vetting-questions version of the QC specification referenced in dimension 8.</li>
                <li><Link href="/work/audio-enhancement-packaging-system">Audio Enhancement factory transition case study</Link> &mdash; the pilot-run and 100% inspection case Logic Pac ran during factory qualification.</li>
                <li><Link href="/work/epicutis">Epicutis packaging system case study</Link> &mdash; the long-running managed-inventory program the proofing and QC discipline is designed to extend.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Operator-level questions brand managers and ops leaders ask the first time they run this chain against a live program. For the related reference guides on brief, timeline, materials, and sustainability levers, start with the links above.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Running the Testing &amp; QC Chain"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Testing & QC Audit"
          />
        </div>
      </section>

      <section className="guide-cta">
        <h3>Need help building the testing and QC chain for your next run?</h3>
        <p>We write the specification, qualify the factory, maintain the golden sample library, run DUPRO and pre-shipment inspection against the written spec, and handle corrective-action loops when something drifts. Request a packaging audit to review your current chain.</p>
        <button type="button" className="bi" onClick={() => openModal('Guide - Testing & QC Audit', 'guide-bottom-cta')}>Request a Packaging Audit</button>
      </section>
    </>
  )
}
