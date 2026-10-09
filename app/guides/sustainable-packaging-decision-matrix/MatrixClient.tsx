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
  { id: 'why-matrix', label: 'Why a matrix, not a mandate' },
  { id: 'levers', label: 'The 7 sustainability levers' },
  { id: 'dimensions', label: 'The 5 scoring dimensions' },
  { id: 'weighting', label: 'How to weight by brand stage' },
  { id: 'worked', label: 'Worked example: one SKU, three paths' },
  { id: 'winners', label: 'Common winners by scenario' },
  { id: 'disqualifiers', label: 'Hard disqualifiers' },
  { id: 'gotchas', label: 'Where the matrix gets you in trouble' },
  { id: 'scorecard', label: 'The 10-question scorecard' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'Isn’t a scorecard just a slower version of “use PCR”?',
    answer: 'Only if your brand, formula, channel, and claim stance are identical to the next brand’s. They rarely are. The matrix exists because “just use PCR” is often the second- or third-best answer when you look at formula compatibility, Prop 65 risk, SB 54 claim defensibility, and refill economics for your specific category and price point.',
  },
  {
    question: 'How is this different from your Sustainable Beauty Packaging Playbook?',
    answer: 'The Playbook explains what each lever is and roughly what each one costs. This guide is the decision instrument you run after reading it. The Playbook teaches the levers; the Matrix picks between them for a specific SKU.',
  },
  {
    question: 'Can we run the matrix without finalized formula or supplier data?',
    answer: 'Yes, but your scores will be directional. The matrix is designed to surface the top two or three candidate paths before you commit to tooling or supplier qualification, so partial data is often enough to eliminate the wrong answers early.',
  },
  {
    question: 'What if two levers tie?',
    answer: 'That is usually a sign the two paths should both be prototyped. A tie on the scorecard means you have two defensible options; the tie-breaker is almost always a Logic Pac pilot run on both and a side-by-side cost and finish review before tooling.',
  },
  {
    question: 'How often should we re-run the scorecard?',
    answer: 'At every meaningful inflection: new SKU family, new channel, new regulatory milestone, or a 20%-plus shift in volume. The winning lever for a 2026 launch is often not the winning lever for a 2028 replenishment at 5x volume.',
  },
  {
    question: 'What does Logic Pac actually do on a sustainability program?',
    answer: 'We handle lever scoring, SB 54 recyclability review, FTC Green Guides claims review, Prop 65 substrate and ink screening, structural design around recovery, supplier qualification, pilot QC, and fulfillment coordination out of Salt Lake City. The full capability set is on our Capabilities page.',
  },
]

export default function MatrixClient() {
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
    { id: 's1', title: 'Formula compatibility is proven on the lever’s material family', body: 'Barrier, chemical compatibility, and stability have been evaluated for the actual substrate under consideration — not assumed from a general material class.' },
    { id: 's2', title: 'Landed cost delta is modeled, not estimated', body: 'Unit cost, tooling, freight, warehousing, and reject risk have been included — not just the quoted carton price. Reference the Material Decision Framework for per-format ranges.' },
    { id: 's3', title: 'The claim can survive FTC Green Guides scrutiny', body: 'Any “recyclable,” “recycled content,” “refillable,” or “compostable” language has a substantiation path tied to the specific SKU and local infrastructure.' },
    { id: 's4', title: 'The pack holds up under SB 54 and PPWR trajectories', body: 'The lever is defensible under California SB 54 in 2027 and under EU PPWR’s staged 2030/2035/2040 recyclability and recycled-content targets — not just this year.' },
    { id: 's5', title: 'Consumer behavior is realistic for the channel', body: 'If the lever requires a consumer action (returning a refill, bringing a bottle, sorting correctly), the expected adoption rate has been modeled for the channel — DTC subscription behaves very differently from mass retail.' },
    { id: 's6', title: 'The MOQ fits the launch volume', body: 'Minimums for the primary pack, closures, decoration, and any custom tooling are compatible with the brand’s expected first-year run — or there is a sequencing plan.' },
    { id: 's7', title: 'The timeline fits the launch window', body: 'For custom tooling, molded fiber lead times of 8–12 weeks and full luxury program timelines of 16–24 weeks are built into the launch date — not discovered after approval.' },
    { id: 's8', title: 'The lever stacks with the brand’s existing packaging system', body: 'Primary, secondary, tray, and shipper decisions are internally consistent. A premium rigid outer around a mixed-material inner undercuts the claim and raises the cost.' },
    { id: 's9', title: 'The reprint and defect risk is understood', body: 'Finishes, substrates, and tolerances have been evaluated for pilot defect risk. On Logic Pac luxury programs with full pre-production QC, we see ~21% defect reduction and reprint rates in the 0.75–1.25% range — that is the quality floor the matrix is designed to protect.' },
    { id: 's10', title: 'A second-best path has been identified', body: 'If the top-scoring lever becomes infeasible at pilot (tooling delay, supplier dropout, Prop 65 flag), there is a documented second choice ready to activate without restarting the project.' },
  ]
  const progress = Math.round((Object.values(checked).filter(Boolean).length / scorecardItems.length) * 100)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Sustainability</div>
        <h1>The <em>sustainable packaging</em> decision matrix.</h1>
        <p>Most sustainability conversations in beauty start with the material. They should start with the question. There are seven real sustainability levers for a packaging program, five dimensions that decide which lever wins, and one SKU-specific answer. Here is the matrix we use with clients to find it.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>15 min read</span>
          <span>Updated October 2026</span>
          <span>Concept &amp; Development Stage</span>
        </div>
      </div>

      <div className="guide-wrap sustainability-guide">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="How do you pick between PCR, mono-material, refill, molded fiber, and reduction for one SKU?"
              answer="Score the top candidate levers against five dimensions — formula compatibility, landed cost, claim defensibility, consumer adoption risk, and timeline/MOQ feasibility — weighted by brand stage and channel. The lever that wins on paper is the one you prototype first; the one that scores second is the one you keep on standby. The matrix is a filter against single-lever thinking, not a universal ranking."
              takeaways={[
                'There are seven sustainability levers worth considering, not one.',
                'Which lever wins is a function of formula, channel, claim, and timeline — not aesthetics.',
                'The highest-scoring lever is often the second thing a brand would have picked unaided.',
                'A second-best path on standby is the single most reliable way to protect a launch date.',
              ]}
            />

            <h2 id="why-matrix"><span className="num">01.</span>Why a matrix, not a mandate</h2>
            <p>Most sustainability conversations in beauty default to a single lever &mdash; usually PCR, sometimes refill, sometimes molded fiber &mdash; and work backwards from there. That works when the lever is right for the SKU. It is also how brands end up with 30% PCR bottles that leach into the formula, refill systems with 12% adoption, and &ldquo;mono-material&rdquo; packaging whose closures and labels break the stream.</p>
            <p>The Logic Pac approach treats sustainability as a <strong>portfolio of competing levers</strong>, scored for a specific product in a specific channel against a specific claim. Our <Link href="/guides/sustainable-beauty-packaging">Sustainable Beauty Packaging Playbook</Link> explains what each lever is and roughly what each one costs. This guide is the <strong>decision instrument</strong> you run after reading it. The Playbook teaches the levers; the Matrix picks between them.</p>
            <p>The output of the matrix is not a single answer. It is a ranked short list with a defensible rationale, a cost and timeline estimate, and a documented second-best path to activate if the first one slips.</p>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>The seven sustainability levers worth comparing (not just PCR vs. refill)</li>
                <li>The five dimensions every lever gets scored on</li>
                <li>How to weight the dimensions by brand stage, channel, and claim</li>
                <li>A worked example of one serum SKU scored across three paths</li>
                <li>Common winning levers by scenario, and the hard disqualifiers that override the score</li>
                <li>The 10-question scorecard you can run on your next SKU</li>
              </ol>
            </div>

            <h2 id="levers"><span className="num">02.</span>The seven sustainability levers</h2>
            <p>These are the levers that actually move the sustainability profile of a beauty packaging program. Each one maps to a pillar of the <strong>Logic Pac Sustainability Framework</strong>: Recycled Content, Circular Design, Biodegradable Materials, and Recyclability. The Matrix compares them head to head rather than treating any one as the default answer.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr><th>#</th><th>Lever</th><th>Pillar</th><th>Where it tends to win</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Reduction / lightweighting</td><td>Recyclability</td><td>Post-launch programs with established brand credibility; apparel-adjacent and premium categories where primary pack has done its job (see Artilect example below)</td></tr>
                  <tr><td>2</td><td>Recycled content (PCR / PIR)</td><td>Recycled Content</td><td>High-volume primary pack where formula compatibility is proven and recovery infrastructure exists for the resin</td></tr>
                  <tr><td>3</td><td>Mono-material design</td><td>Recyclability</td><td>Secondary pack and some primary pack where decoration, closures, and labels can be kept in one material family</td></tr>
                  <tr><td>4</td><td>Refillable systems</td><td>Circular Design</td><td>Prestige skincare and fragrance with repeat-purchase economics and a channel that supports returns or in-store refill</td></tr>
                  <tr><td>5</td><td>Reusable formats</td><td>Circular Design</td><td>Travel sets, limited editions, and gifting programs where the outer carton has a second life beyond unboxing</td></tr>
                  <tr><td>6</td><td>Molded fiber / FSC</td><td>Biodegradable Materials</td><td>Trays, inserts, and secondary packaging where protection and premium feel can coexist with paper pulp</td></tr>
                  <tr><td>7</td><td>Compostable &amp; bio-based</td><td>Biodegradable Materials</td><td>Narrow use cases where industrial composting infrastructure is accessible or the pack is secondary; rarely the right answer for primary pack today</td></tr>
                </tbody>
              </table>
            </div>

            <p>For the deeper breakdown of each lever &mdash; what it is, how it fails, and roughly what it costs &mdash; cross-link into the specific pieces: <Link href="/blog/pcr-packaging-beauty-brands">PCR packaging</Link>, <Link href="/blog/mono-material-packaging-design">mono-material design</Link>, <Link href="/guides/beauty-refillable-playbook">refillable playbook</Link>, and <Link href="/guides/material-decision-framework">material decision framework</Link>.</p>

            <Image
              src="/images/guides/sustainable-decision-matrix/lever-reduction-artilect.jpg"
              alt="Artilect packaging reduction case study — folding carton that replaced a rigid box"
              width={1168}
              height={826}
              className="guide-img"
              sizes="(max-width: 960px) 100vw, 700px"
            />
            <p className="guide-img-caption">The lightweighting lever done well. The <Link href="/work/artilect-packaging-reduction">Artilect packaging reduction case</Link> transitioned a premium rigid box to an engineered folding carton once the brand had done its launch work &mdash; cutting packaging cost ~20% and material ~95% without downgrading the brand signal. Reduction is a lever most sustainability conversations skip because it looks less “green” than refill or PCR. It is often the highest-leverage move.</p>

            <h2 id="dimensions"><span className="num">03.</span>The five scoring dimensions</h2>
            <p>Every lever gets scored on the same five dimensions, 1&ndash;5, where 5 is &ldquo;this lever is a clear fit for this SKU on this dimension.&rdquo; The dimensions are deliberately operational. They do not score how &ldquo;green&rdquo; a lever feels &mdash; they score whether it can actually ship.</p>

            <h3>1. Formula compatibility</h3>
            <p>Does the lever&apos;s material family work with the formula? PCR resin can leach plasticizers into oil-based serums. Molded fiber struggles with any wet or oily primary. Clear PET loses clarity when scratched by refill cycles. This dimension kills more candidate levers than any other, and it is the first filter for a reason. The <Link href="/guides/material-decision-framework">Material Decision Framework</Link> is the reference here.</p>

            <h3>2. Landed cost delta</h3>
            <p>Modeled against the current pack baseline, in landed terms. Unit cost, tooling amortization, freight, warehousing, and reject-run risk &mdash; not just the quoted carton price. A refill system with a $0.55 refill looks cheap until you include the heavier primary base and the two-cycle breakeven. A luxury rigid or paper-over-board sustainable system typically lands around a <strong>15% premium</strong> over the standard custom-packaging range for the equivalent format and volume; molded fiber tooling runs <strong>8&ndash;12 weeks</strong> with a <strong>15&ndash;30% per-unit premium</strong> on comparable formats.</p>

            <h3>3. Claim defensibility</h3>
            <p>Can the sustainability claim this lever enables survive <strong>FTC Green Guides</strong> scrutiny and <strong>California SB 54</strong> and <strong>EU PPWR</strong> trajectory? A &ldquo;recyclable&rdquo; claim on a pack that does not have local recovery infrastructure for a &ldquo;substantial majority&rdquo; of consumers is the single most common failure mode. Logic Pac offers an SB 54 recyclability review, an FTC Green Guides claims review, and Prop 65 substrate and ink screening on luxury packaging programs. See our <Link href="/guides/beauty-packaging-claims-compliance">beauty packaging claims &amp; compliance guide</Link> for the full regulatory map, or our <Link href="/blog/sb54-packaging-compliance-beauty">SB 54 compliance</Link> and <Link href="/blog/eu-ppwr-packaging-requirements-beauty">EU PPWR</Link> pieces for the specific regulatory detail.</p>

            <h3>4. Consumer adoption risk</h3>
            <p>If the lever requires the consumer to do something &mdash; return a refill, sort correctly, bring a bottle, use industrial composting &mdash; what is the realistic adoption rate for the channel? Refillable systems reach 35&ndash;55% repeat-use rates in mature categories; below 40% they often fail the unit economics test. For the full refill business case, see the <Link href="/guides/beauty-refillable-playbook">Beauty Refillable Playbook</Link>.</p>

            <h3>5. Timeline &amp; MOQ feasibility</h3>
            <p>Does the lever fit the launch date and the first-year volume? Molded fiber tooling and custom aluminum components are 8&ndash;12 week items at minimum. A full luxury beauty packaging program &mdash; brief in to launch out &mdash; runs <strong>16&ndash;24 weeks</strong> for custom tooling. Supplier qualification on PCR and bio-based resins adds another cycle. The <Link href="/guides/concept-to-shelf-timeline">concept-to-shelf timeline</Link> is the reference.</p>

            <div className="callout">
              <strong>The scoring convention.</strong> Score each lever 1&ndash;5 on each dimension. Multiply by the dimension weight (next section). Sum. The top two levers advance to pilot evaluation. The third-place lever is documented as the backup if the top two drop out at supplier qualification.
            </div>

            <h2 id="weighting"><span className="num">04.</span>How to weight by brand stage and channel</h2>
            <p>The five dimensions are not equal weight for every brand. A pre-launch indie prestige brand weights claim defensibility and consumer adoption risk very differently from a mass retail replenishment program at 10&times; the volume. The matrix uses four quick weighting profiles. Pick one, or blend two if the brand sits between them.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr><th>Weighting profile</th><th>Formula fit</th><th>Landed cost</th><th>Claim defensibility</th><th>Adoption risk</th><th>Timeline &amp; MOQ</th></tr>
                </thead>
                <tbody>
                  <tr><td>Pre-launch indie prestige</td><td>3&times;</td><td>1&times;</td><td>3&times;</td><td>2&times;</td><td>1&times;</td></tr>
                  <tr><td>Scaling DTC / omnichannel</td><td>2&times;</td><td>3&times;</td><td>2&times;</td><td>2&times;</td><td>1&times;</td></tr>
                  <tr><td>Mass retail replenishment</td><td>2&times;</td><td>3&times;</td><td>3&times;</td><td>1&times;</td><td>1&times;</td></tr>
                  <tr><td>Prestige retail with hero SKU</td><td>3&times;</td><td>1&times;</td><td>2&times;</td><td>2&times;</td><td>2&times;</td></tr>
                </tbody>
              </table>
            </div>

            <p>These weights are intentionally simple. The point is not perfect decimals; it is to force an argument about which dimensions actually matter for this brand right now. In practice, two brands running the same lever can get very different scores &mdash; and that is the point.</p>

            <h2 id="worked"><span className="num">05.</span>Worked example &mdash; one serum SKU, three paths</h2>
            <p>A scaling DTC prestige skincare brand is launching a 30ml hero serum. The brand wants a defensible sustainability story, has a $2.80 per-unit all-in packaging budget baseline, and is launching into Sephora as a priority channel 20 weeks out. Three plausible levers surface in the first conversation:</p>
            <ul>
              <li><strong>Path A:</strong> 30% PCR PET primary with FSC paper secondary and foil decoration</li>
              <li><strong>Path B:</strong> Aluminum primary with FSC paper secondary (refill-ready architecture, no refill at launch)</li>
              <li><strong>Path C:</strong> Clear glass primary with molded fiber tray, mono-paper secondary, no foil</li>
            </ul>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr><th>Dimension (weight)</th><th>Path A &mdash; 30% PCR + FSC</th><th>Path B &mdash; Aluminum + FSC</th><th>Path C &mdash; Glass + molded fiber</th></tr>
                </thead>
                <tbody>
                  <tr><td>Formula fit (2&times;)</td><td>3 (PCR compatibility must be verified)</td><td>5 (aluminum is barrier-neutral)</td><td>5 (glass is formula-safe)</td></tr>
                  <tr><td>Landed cost (3&times;)</td><td>4 (~5% premium)</td><td>2 (~20% premium with tooling)</td><td>2 (glass freight + breakage)</td></tr>
                  <tr><td>Claim defensibility (2&times;)</td><td>3 (claim depends on local PCR recovery)</td><td>4 (aluminum is well-understood)</td><td>5 (glass + paper is the most defensible)</td></tr>
                  <tr><td>Adoption risk (2&times;)</td><td>5 (no behavior change)</td><td>5 (refill-ready without requiring refill)</td><td>4 (shipping breakage risk)</td></tr>
                  <tr><td>Timeline &amp; MOQ (1&times;)</td><td>4 (standard PET tooling)</td><td>3 (aluminum lead time 8&ndash;12 wk)</td><td>2 (molded fiber tooling 8&ndash;12 wk plus glass qualification)</td></tr>
                  <tr><td><strong>Weighted total</strong></td><td><strong>34</strong></td><td><strong>30</strong></td><td><strong>31</strong></td></tr>
                </tbody>
              </table>
            </div>

            <p>Path A wins for this brand, this launch window, this budget. Path C is the stronger long-term claim and becomes the right answer at the next volume tier when freight and breakage economics change. Path B is documented as the backup if the PCR supplier cannot verify resin provenance at the required quality tier &mdash; the brand already has an aluminum-compatible closure spec drafted so switching does not reset the project.</p>

            <p>The matrix did two useful things. It eliminated the “just go glass” instinct for the launch window. And it created a documented reason to activate Path C at the next refresh.</p>

            <Image
              src="/images/guides/sustainable-decision-matrix/lever-aluminum-refill.jpg"
              alt="Aluminum refillable packaging system in beauty"
              width={1600}
              height={1200}
              className="guide-img"
              sizes="(max-width: 960px) 100vw, 750px"
            />
            <p className="guide-img-caption">Aluminum is one of the most frequently misjudged levers in the matrix. It scores well on claim defensibility and formula compatibility, but tooling lead times and MOQ pressure can disqualify it for a short launch window — even when it is the long-term right answer.</p>

            <h2 id="winners"><span className="num">06.</span>Common winners by scenario</h2>
            <p>After running the matrix across dozens of beauty programs, patterns emerge. These are the levers that most often win in each scenario &mdash; useful as a sanity check, not a shortcut. Always score your SKU.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr><th>Scenario</th><th>Most common winning lever</th><th>Common second-best</th></tr>
                </thead>
                <tbody>
                  <tr><td>Prestige skincare, pre-launch, under 25K units</td><td>Glass + molded fiber tray + mono-paper secondary</td><td>Aluminum + FSC paper</td></tr>
                  <tr><td>Prestige skincare, replenishment, 100K+ units</td><td>Refillable aluminum base + replaceable pod</td><td>30%+ PCR PET + FSC</td></tr>
                  <tr><td>Mass color cosmetics, retail</td><td>Mono-material PP or PET + print optimization</td><td>Reduction / lightweighting</td></tr>
                  <tr><td>Prestige fragrance</td><td>Glass + reusable outer + reduction on gift sets</td><td>Refillable glass base</td></tr>
                  <tr><td>Haircare, DTC subscription</td><td>Refillable (pouch or pod) + FSC secondary</td><td>Lightweighted HDPE + PCR</td></tr>
                  <tr><td>Holiday gift sets</td><td>Reusable outer + reduction + mono-paper inner</td><td>Molded fiber tray + FSC secondary</td></tr>
                  <tr><td>Post-launch brand with mature packaging</td><td>Reduction / lightweighting</td><td>Mono-material secondary + PCR primary</td></tr>
                </tbody>
              </table>
            </div>

            <Image
              src="/images/guides/sustainable-decision-matrix/lever-molded-fiber.jpg"
              alt="Molded fiber tray system in a premium beauty packaging program"
              width={1600}
              height={1200}
              className="guide-img"
              sizes="(max-width: 960px) 100vw, 750px"
            />
            <p className="guide-img-caption">Molded fiber trays punch above their weight for prestige skincare because they resolve two dimensions at once: protection for a fragile primary pack and a visible, defensible sustainability signal. Trays like these are a cornerstone of Logic Pac&apos;s Biodegradable Materials pillar.</p>

            <h2 id="disqualifiers"><span className="num">07.</span>Hard disqualifiers &mdash; override the score</h2>
            <p>A high score does not override a disqualifier. These are the conditions under which a lever should be eliminated even if it tops the weighted total.</p>

            <ul>
              <li><strong>Formula incompatibility.</strong> PCR resin with a formula that fails compatibility testing. Non-negotiable.</li>
              <li><strong>Prop 65 flag on substrate or ink.</strong> Any component triggering Prop 65 warnings without a mitigation path. Logic Pac screens substrates and inks before this becomes a label problem.</li>
              <li><strong>No local recovery infrastructure for the claim.</strong> A &ldquo;recyclable&rdquo; claim where fewer than a substantial majority of consumers have access to recovery is an FTC risk, not a sustainability win.</li>
              <li><strong>Refillable without refill economics.</strong> A refill system where the model does not clear two-cycle breakeven at the expected adoption rate. See the <Link href="/guides/beauty-refillable-playbook">refillable playbook</Link>.</li>
              <li><strong>Mono-material broken by decoration or closure.</strong> A &ldquo;mono-material&rdquo; claim with a mixed-resin pump, a foil overlay, or an incompatible label adhesive is not mono-material. See <Link href="/blog/mono-material-packaging-design">mono-material design</Link>.</li>
              <li><strong>Lead time cannot support the launch window.</strong> A lever that cannot ship by the launch date is not a candidate for the launch. It may be the right next step.</li>
              <li><strong>MOQ well above launch volume with no sequencing plan.</strong> Pre-ordering four years of inventory to hit a minimum is not a sustainability win.</li>
            </ul>

            <h2 id="gotchas"><span className="num">08.</span>Where the matrix gets you in trouble</h2>
            <p>The matrix is a filter against single-lever thinking. It is also easy to misuse. These are the four most common ways brands run the scorecard and get a confidently wrong answer.</p>

            <h3>Scoring from the finished pack instead of the SKU</h3>
            <p>The matrix is a per-SKU tool. Running it once at the brand level and applying the output across every SKU family produces predictable misfires: hero skincare does not have the same answer as a color SKU or a travel set.</p>

            <h3>Using supplier-marketing weights</h3>
            <p>If the weighting profile puts a 4&times; on claim defensibility because a supplier’s marketing deck ranked it that way, the matrix will reliably pick the lever that supplier sells. Pick weights before scoring. Pick them against the brand&apos;s own stage and channel reality, not vendor materials.</p>

            <h3>Ignoring the second-best path</h3>
            <p>The point of the backup is to protect the launch date. A matrix that produces one winning path and no documented alternative is a matrix one phone call away from a reset. Always document the second-best lever, the component spec, and the switching cost before pilot.</p>

            <h3>Running the matrix once and never again</h3>
            <p>The winning lever for a 2026 launch is often not the winning lever for a 2028 replenishment at 5&times; the volume. Re-run at every meaningful inflection: new SKU family, new channel, new regulatory milestone, 20%-plus volume shift.</p>

            <div className="callout">
              <strong>What the Matrix buys at Logic Pac scale.</strong> Programs run through this scoring and pre-production QC cycle see a <strong>~21% reduction in defect rate</strong> at pilot vs. unmanaged runs, luxury carton reprint rates in the <strong>&lt; 0.75&ndash;1.25%</strong> range, and <strong>75&ndash;80%</strong> program extension into a second SKU family within 12 months. The matrix is designed to protect those outcomes, not to generate a scorecard.
              <em className="methodology-note">Methodology: the 21% defect-rate figure is measured by a factory- and client-selected third-party inspection firm over a 12-month period on comparable luxury programs; the reprint-rate figure is Logic Pac internal measurement reconciled against factory partner QC reports; the 75&ndash;80% program-extension figure is a Logic Pac &amp; Logic Agency internal benchmark across luxury beauty programs run 2020&ndash;2026.</em>
            </div>

            <h2 id="scorecard"><span className="num">09.</span>The 10-question scorecard</h2>
            <p>Run this scorecard once per candidate lever for a given SKU. If a lever answers &ldquo;yes&rdquo; to fewer than 7 of the 10 questions, it is not a candidate for pilot &mdash; it is a candidate for the long-term roadmap.</p>

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
                        onChange={() => setChecked(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
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

            <GuideBottomLine>
              Sustainability in beauty packaging is not a material choice. It is a lever choice, scored against the SKU, the channel, and the claim. The brands that get it right pick a top lever, protect it with a documented second-best path, and re-run the matrix at every inflection. We help brands run this scoring, qualify the suppliers, and ship the pack — and we see the discipline pay out in defect rate, reprint rate, and program longevity.
            </GuideBottomLine>

            <section className="sources-section">
              <h2>Related guides and references</h2>
              <p className="sources-lede">The Decision Matrix is designed to be run alongside, not instead of, the deeper material and lever guides. These are the primary cross-references used in the sections above.</p>
              <ul className="sources-list">
                <li><Link href="/guides/sustainable-beauty-packaging">Sustainable Beauty Packaging Playbook</Link> &mdash; what each sustainability lever is and roughly what it costs.</li>
                <li><Link href="/guides/material-decision-framework">Beauty Packaging Material Decision Framework</Link> &mdash; per-material cost, MOQ, lead-time, and recovery data referenced in dimensions 1 and 2.</li>
                <li><Link href="/guides/beauty-refillable-playbook">Beauty Refillable Playbook</Link> &mdash; the full refill unit-economics case and the 35&ndash;55% repeat-rate benchmark referenced in dimension 4.</li>
                <li><Link href="/guides/concept-to-shelf-timeline">Concept-to-Shelf Timeline</Link> &mdash; the standard 12-week and extended luxury 16&ndash;24-week timelines referenced in dimension 5.</li>
                <li><Link href="/blog/pcr-packaging-beauty-brands">PCR packaging for beauty brands</Link> &mdash; verification and compatibility detail behind the PCR lever.</li>
                <li><Link href="/blog/mono-material-packaging-design">Mono-material packaging design</Link> &mdash; decoration and closure constraints behind the mono-material lever.</li>
                <li><Link href="/blog/sb54-packaging-compliance-beauty">SB 54 packaging compliance</Link> &mdash; the regulatory reference behind the claim-defensibility dimension.</li>
                <li><Link href="/blog/eu-ppwr-packaging-requirements-beauty">EU PPWR packaging requirements</Link> &mdash; the EU regulatory reference behind the staged 2030/2035/2040 trajectory.</li>
                <li><Link href="/work/artilect-packaging-reduction">Artilect packaging reduction case study</Link> &mdash; the reduction / lightweighting lever as a live Logic Pac program.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Common questions brand managers ask when they first encounter the matrix. For the deeper material, refill, PCR, mono-material, and compliance detail, start with the related guides above.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Running the Matrix on Your Program"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Sustainable Decision Matrix"
          />
        </div>
      </section>

      <section className="guide-cta">
        <div className="guide-cta">
          <h3>Not sure which lever wins for your next SKU?</h3>
          <p>Logic Pac runs the Decision Matrix on real programs every week. If you want a second read on the top two candidate paths for your product, your channel, and your claim, request a packaging audit.</p>
          <button type="button" className="bi" onClick={() => openModal('Guide - Sustainable Decision Matrix', 'guide-bottom-cta')}>Request a Packaging Audit</button>
        </div>
      </section>
    </>
  )
}
