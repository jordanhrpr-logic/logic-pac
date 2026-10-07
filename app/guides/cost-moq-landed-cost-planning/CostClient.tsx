'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import GuideAnswerSummary from '@/components/GuideAnswerSummary'
import GuideBottomLine from '@/components/GuideBottomLine'
import GuideByline from '@/components/GuideByline'

const tocSections = [
  { id: 'why', label: 'Why landed cost, not unit cost' },
  { id: 'stack', label: 'The 7-component cost stack' },
  { id: 'moq', label: 'MOQ as a cash-flow decision' },
  { id: 'freight', label: 'Freight mode selection' },
  { id: 'inventory', label: 'Inventory carrying cost' },
  { id: 'worksheet', label: 'Landed-cost worksheet' },
  { id: 'cashflow', label: 'Cash-flow timeline' },
  { id: 'mistakes', label: 'Common commercial mistakes' },
  { id: 'scorecard', label: 'Commercial-readiness scorecard' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: "Why is landed cost different from the unit cost in the quote?",
    answer: "A factory quote is almost always ex-works or FOB — the price of the box leaving the factory floor. Landed cost adds tooling amortization, freight, duties, warehousing, inserts and assembly, and the cost of defects and rework. On a typical beauty program, landed cost runs 15 to 40% above the factory unit cost depending on format, freight mode, and launch volume.",
  },
  {
    question: "How much should we hold in packaging inventory?",
    answer: "A reasonable default for a beauty program is 90 to 120 days of forward cover for primary packaging and 60 to 90 days for secondary. Hero SKUs with predictable demand hold less; seasonal, holiday, and influencer-kit programs often need more. The constraint is replenishment lead time: ocean freight from Asia is 30 to 60 days door to door, which means less than 90 days of cover puts the launch on air freight when demand surprises.",
  },
  {
    question: "When does air freight make sense?",
    answer: "Air is justified when the per-unit margin lost to a stockout — a missed retail window, a cancelled Sephora PO, a dark DTC page — is greater than the per-unit cost of air versus ocean. For most beauty programs, that math works out on hero SKUs during launch and on holiday kits. It does not work on evergreen secondary packaging where ocean is almost always right.",
  },
  {
    question: "Should we build in extra MOQ to absorb defect rate?",
    answer: "Yes. A reasonable production over-order is 2 to 5% above launch volume to cover QC pulls, in-transit damage, and sampling. Luxury programs with full pre-production QC can hold the over-order to 1 to 2%. Programs with no documented QC should plan for 5 to 10% over-order and still expect to run short.",
  },
  {
    question: "How do we price tooling across a product line?",
    answer: "Tooling is a one-time cost but should be amortized across the volume that will actually use it. A $12,000 die set across a 500,000-unit launch is $0.024 per unit; the same tooling against a 50,000-unit launch is $0.24 per unit — a 10x difference that changes the margin story. Spread tooling across the forward 24-month volume plan, not the first run alone.",
  },
  {
    question: "Does Logic Pac front packaging cost?",
    answer: "For established programs, we extend packaging credit so procurement timing is driven by the launch calendar — not by cash flow cycles. The Epicutis case study shows how this works in practice: packaging stocked at our Salt Lake City warehouse, 7-day replenishment, and no emergency air freight charges. See the case study for the operational detail.",
  },
]

type FreightMode = 'ocean' | 'air' | 'expedited'

export default function CostClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Worksheet inputs — defaults reflect a representative mid-size beauty program
  const [unitCost, setUnitCost] = useState(1.85)
  const [launchVolume, setLaunchVolume] = useState(50000)
  const [moq, setMoq] = useState(25000)
  const [tooling, setTooling] = useState(8000)
  const [freightMode, setFreightMode] = useState<FreightMode>('ocean')
  const [freightPerUnit, setFreightPerUnit] = useState(0.18)
  const [dutiesPct, setDutiesPct] = useState(2)
  const [insertCost, setInsertCost] = useState(0.08)
  const [defectPct, setDefectPct] = useState(2.5)
  const [warehousingPerUnitYear, setWarehousingPerUnitYear] = useState(0.04)
  const [launchWindowMonths, setLaunchWindowMonths] = useState(6)

  const calc = useMemo(() => {
    const vol = Math.max(1, launchVolume)
    const toolingPerUnit = tooling / vol
    const freightEffective = freightMode === 'air' ? freightPerUnit * 3.8 : freightMode === 'expedited' ? freightPerUnit * 1.6 : freightPerUnit
    const dutiesPerUnit = unitCost * (dutiesPct / 100)
    const defectPerUnit = unitCost * (defectPct / 100)
    const landedPerUnit = unitCost + toolingPerUnit + freightEffective + dutiesPerUnit + insertCost + defectPerUnit + warehousingPerUnitYear
    const totalProgram = landedPerUnit * vol
    const carrying12mo = landedPerUnit * vol * 0.18 * (launchWindowMonths / 12)
    const overOrderPct = defectPct + 2
    const overOrderUnits = Math.round(vol * (overOrderPct / 100))
    return {
      landedPerUnit,
      totalProgram,
      carrying12mo,
      toolingPerUnit,
      freightEffective,
      dutiesPerUnit,
      defectPerUnit,
      overOrderUnits,
      moqGap: Math.max(0, moq - vol),
    }
  }, [unitCost, launchVolume, moq, tooling, freightMode, freightPerUnit, dutiesPct, insertCost, defectPct, warehousingPerUnitYear, launchWindowMonths])

  const fmt = (n: number) => n < 10 ? `$${n.toFixed(3)}` : `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`

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
    { id: 's1', title: 'Landed cost is modeled, not estimated', body: 'Unit cost, tooling amortization, freight at the real mode, duties, inserts/assembly, defect rate, and warehousing are all included — not just the factory quote.' },
    { id: 's2', title: 'MOQ exposure is accepted or renegotiated', body: 'The gap between MOQ and launch volume is quantified as inventory sitting on the balance sheet, not written off as "we will sell it eventually."' },
    { id: 's3', title: 'Tooling is amortized across forward volume', body: 'Spread across the 24-month plan, not the first run. The per-unit tooling line in the model reflects where the volume is actually going.' },
    { id: 's4', title: 'Freight mode is matched to margin risk', body: 'Ocean on evergreen secondary, mixed on hero SKUs during launch, expedited reserved for retail-window saves. The cost delta is modeled, not reacted to.' },
    { id: 's5', title: 'An over-order buffer is specified in the PO', body: '2–5% above launch volume for QC pulls, in-transit damage, and sampling. On programs without documented pre-production QC, plan for 5–10%.' },
    { id: 's6', title: 'Inventory carrying cost is on the P&L', body: 'Carrying cost (18–25% annualized on landed value) is tracked as a real cost, not hidden in cost-of-goods or warehouse overhead.' },
    { id: 's7', title: 'Replenishment lead time is understood', body: 'Ocean from Asia is 30–60 days door to door. Days of forward cover is set against that lead time, not against a theoretical "we will reorder when we need to."' },
    { id: 's8', title: 'Cash timing matches the launch calendar', body: 'Tooling deposit, factory deposit, factory balance, freight, duties, and warehousing are mapped against the launch date — not discovered during the AP close.' },
    { id: 's9', title: 'The reprint path has a cost line', body: 'A reprint on a defective lot has a specified cost, timeline, and freight mode. The decision tree exists before the defect is found.' },
    { id: 's10', title: 'Supplier payment terms are negotiated', body: 'Net-30 on the balance after a 30% deposit is a reasonable baseline on established programs. Terms are a procurement lever, not a line item accepted as given.' },
  ]
  const progress = Math.round((Object.values(checked).filter(Boolean).length / scorecardItems.length) * 100)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Commercial Planning</div>
        <h1>Packaging <em>cost, MOQ &amp; landed-cost</em> planning.</h1>
        <p>The factory quote is the smallest number in a packaging program. Landed cost &mdash; the unit cost plus tooling, freight, duties, inserts, defect exposure, warehousing, and carrying cost &mdash; is the number that decides whether the launch has the margin it needs. This is the planning tool and the discipline that gets you to a defensible number before you commit the PO.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>17 min read</span>
          <span>Updated October 2026</span>
          <span>Commercial &amp; Procurement</span>
        </div>
      </div>

      <div className="guide-wrap cost-guide">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="How do you plan packaging cost, MOQ, and cash flow for a launch?"
              answer="Model landed cost — not unit cost — across seven components: factory unit cost, tooling amortization, freight at the real mode, duties, inserts and assembly, defect allowance, and warehousing. Then layer in MOQ exposure, inventory carrying cost, and the cash-timing calendar. The result is a defensible launch number the P&L can hold and a reorder plan that does not depend on emergency air freight to survive demand surprises."
              takeaways={[
                'Factory unit cost is 60–85% of landed cost — the rest is where margin leaks.',
                'MOQ above launch volume is inventory sitting on the balance sheet, not free upside.',
                'Freight mode changes the landed number by 2–4x — plan it, do not react to it.',
                'Carrying cost at 18–25% annualized is a real P&L line, not a rounding error.',
              ]}
            />

            <h2 id="why"><span className="num">01.</span>The factory quote is the smallest number in the program</h2>
            <p>Every packaging quote arrives looking cheap. $1.85 per unit for a soft-touch rigid box with foil stamping and a molded tray &mdash; that is a plausible number from a plausible factory. It is also the number that gets a program approved and then falls apart six weeks later when procurement realizes the quote was ex-works, the ocean cost got replaced with air to make the retail window, duties ran 3% not 0%, assembly was not in the number, and defect sort pulled 4% of the run.</p>
            <p>The gap between the factory quote and the real cost is where packaging programs lose their margin. Not from one big surprise &mdash; from six small ones that each looked like noise and together ate the plan.</p>
            <p>This guide is the planning discipline that closes that gap. The seven-component landed-cost model. The MOQ-as-cash-flow framing. The freight-mode decision. The inventory carrying math. An interactive worksheet you can run against your own numbers before the PO goes out. And the cash-flow timeline that maps every dollar to the launch calendar.</p>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>Why landed cost &mdash; not unit cost &mdash; is the only number that belongs in the margin model</li>
                <li>The 7-component cost stack and what each one actually represents</li>
                <li>MOQ framed as a cash-flow and balance-sheet decision, not a volume question</li>
                <li>Freight mode selection &mdash; when ocean is right, when air is justified, when expedited pays</li>
                <li>Inventory carrying cost and the 90-day forward-cover default</li>
                <li>An interactive landed-cost worksheet with 11 inputs and a cash-timing readout</li>
                <li>The cash-flow timeline that maps tooling, deposits, balance, freight, and warehousing to the launch calendar</li>
                <li>The six commercial mistakes that quietly eat the margin plan</li>
                <li>A 10-item commercial-readiness scorecard</li>
              </ol>
            </div>

            <h2 id="stack"><span className="num">02.</span>The 7-component landed-cost stack</h2>
            <p>Landed cost is the sum of seven lines. Any program model that ships without all seven is a plan to be surprised. These are the components, what each one does, and roughly what range each one lands in for a representative beauty program.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr><th>Component</th><th>What it is</th><th>Typical range</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Factory unit cost</strong></td><td>The quote. Ex-works or FOB price for the finished component leaving the factory floor.</td><td>60&ndash;85% of landed cost</td></tr>
                  <tr><td><strong>Tooling amortization</strong></td><td>Dies, molds, plates, and tooling spread across the forward volume that will actually use them.</td><td>$0.01&ndash;$0.30 per unit depending on volume</td></tr>
                  <tr><td><strong>Freight</strong></td><td>Ocean, air, or expedited &mdash; door to door, including inland from the port.</td><td>5&ndash;18% of landed cost (ocean); 2&ndash;4x higher on air</td></tr>
                  <tr><td><strong>Duties &amp; brokerage</strong></td><td>Import duty on packaging categories plus customs brokerage. Usually 0&ndash;5% in the US; higher in EU/UK on certain substrates.</td><td>0&ndash;5% of unit cost</td></tr>
                  <tr><td><strong>Inserts &amp; assembly</strong></td><td>Foam, pulp trays, instruction cards, void fill, and any assembly labor if the pack ships as a kit rather than flat components.</td><td>$0.03&ndash;$0.40 per unit</td></tr>
                  <tr><td><strong>Defect allowance</strong></td><td>The portion of the run that QC pulls, in-transit damage removes, and sampling consumes. Not scrap &mdash; the real cost of over-ordering to cover it.</td><td>1&ndash;5% of unit cost</td></tr>
                  <tr><td><strong>Warehousing</strong></td><td>Pallet storage, pick/pack, and inbound/outbound handling at the 3PL or in-house warehouse until the pack ships to co-manufacturer or fulfillment.</td><td>$0.02&ndash;$0.10 per unit per year</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <p><strong>Rule of thumb.</strong> If a quote says $1.85 and the margin model uses $1.85, the program is working with the factory&apos;s number &mdash; not the business&apos;s number. The business&apos;s number is usually 15 to 40% higher, depending on freight mode and launch volume.</p>
            </div>

            <h2 id="moq"><span className="num">03.</span>MOQ is a cash-flow decision, not a volume question</h2>
            <p>Most brands treat MOQ as a packaging problem: &ldquo;the factory needs 25,000 units; we only need 10,000.&rdquo; That framing is wrong. MOQ above launch volume is not excess packaging. It is <strong>inventory sitting on the balance sheet</strong> &mdash; cash converted to product that will not become revenue until the brand sells into the overage.</p>
            <p>On a $2.40 landed-cost program, a 15,000-unit MOQ gap is $36,000 of frozen capital, plus warehousing on that volume, plus the opportunity cost of the capital, plus the risk that a design change in the next launch cycle makes the overage obsolete. That is the real cost of the MOQ delta &mdash; not the per-unit math.</p>
            <p>Three ways to resolve the gap, in order of preference:</p>
            <ul>
              <li><strong>Renegotiate the MOQ.</strong> Factories quote their default. The number is often negotiable on established programs or when the brand is willing to accept slightly higher per-unit cost in exchange for a lower minimum. A $0.10 unit premium on 10,000 units is $1,000; a 15,000-unit overage is $36,000.</li>
              <li><strong>Match MOQ to a 12-month forward plan.</strong> If the brand will reasonably sell the overage within 12 months, the MOQ is not an exposure &mdash; it is forward inventory. Model it against your actual sell-through curve, not the launch window alone.</li>
              <li><strong>Change supplier or format.</strong> MOQ is a function of tooling and setup economics. A different factory, a different format, or a stock substrate with custom decoration can cut MOQ by 50&ndash;80% at some cost to the pack.</li>
            </ul>
            <p>For the full MOQ discussion by format, see the <Link href="/blog/custom-packaging-moq-guide">custom packaging MOQ guide</Link>.</p>

            <h2 id="freight"><span className="num">04.</span>Freight mode changes the landed number by 2&ndash;4x</h2>
            <p>Freight is the component most brands under-plan. The ocean rate is the number in the budget. The air rate is the number that actually ships half the first run because the retail window moved. For most beauty programs, the realistic freight mix on a launch is 70&ndash;85% ocean and 15&ndash;30% air or expedited &mdash; and the budget usually only shows ocean.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr><th>Mode</th><th>Transit</th><th>Cost relative to ocean</th><th>When to use</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Ocean (FCL/LCL)</strong></td><td>30&ndash;60 days door-to-door from Asia</td><td>1.0x (baseline)</td><td>Evergreen secondary, repeat orders, non-launch replenishment</td></tr>
                  <tr><td><strong>Expedited ocean / sea-air</strong></td><td>18&ndash;25 days</td><td>1.4&ndash;1.8x</td><td>Launch catch-up, mid-season replenishment on hero SKUs</td></tr>
                  <tr><td><strong>Air freight</strong></td><td>5&ndash;10 days door-to-door</td><td>3&ndash;5x</td><td>Retail-window saves, launch misses, hero SKU stockouts</td></tr>
                </tbody>
              </table>
            </div>

            <p>Air is justified when the margin lost to a stockout &mdash; a missed Sephora PO, a dark DTC page, a cancelled retail window &mdash; is greater than the per-unit cost of air versus ocean. On a $2.40 landed-cost program with $12 retail price and $7 wholesale, air freight at 3.8x the ocean rate adds about $0.46 to the unit. If that $0.46 saves a $3,500 retailer chargeback or a $20,000 lost PO, the math is obvious. If it saves nothing, it is cost added for no revenue.</p>
            <p>The discipline is to decide this at the budgeting stage, not at the stockout &mdash; and to run the landed-cost model at the <em>realistic</em> freight mix, not the best-case all-ocean scenario.</p>

            <h2 id="inventory"><span className="num">05.</span>Inventory carrying cost and the 90-day default</h2>
            <p>Packaging sitting in a warehouse is not a free asset. It costs capital (the dollars tied up in the inventory), it costs space (pallet storage, pick/pack), and it costs flexibility (every day on the shelf is a day the design cannot change without writing off the stock).</p>
            <p><strong>A reasonable annualized carrying cost on packaging inventory is 18&ndash;25%</strong> of landed value &mdash; combining cost of capital (6&ndash;10% today), warehousing (5&ndash;8%), obsolescence risk (3&ndash;5%), and insurance/handling (2&ndash;4%). On a $120,000 packaging stock position, that is $21,600 to $30,000 per year carried as a real cost against the brand.</p>
            <p>The default forward-cover target: <strong>90 to 120 days for primary packaging, 60 to 90 days for secondary.</strong> Hero SKUs with predictable demand hold less. Seasonal, holiday, and influencer-kit programs often need more. The constraint is replenishment lead time: ocean from Asia is 30 to 60 days door to door, which means less than 90 days of cover puts the next reorder on air freight whenever demand surprises.</p>
            <p>Logic Pac&apos;s managed-inventory program &mdash; packaging held at our Salt Lake City warehouse with 7-day replenishment to the co-manufacturer or 3PL &mdash; is designed to compress the brand&apos;s cover requirement without exposing the launch to ocean lead times. See the <Link href="/work/epicutis">Epicutis case study</Link> for how this works in practice.</p>

            <h2 id="worksheet"><span className="num">06.</span>Landed-cost worksheet</h2>
            <p>Run your program through the model. Change any input and the landed cost, total program cost, 12-month carrying cost, and over-order recommendation update live. The defaults reflect a representative mid-size beauty program at the midpoint of each range.</p>
            <p className="cost-worksheet-note">All ranges are directional industry defaults for US-market beauty packaging. Use the model to pressure-test a specific program, not as a substitute for a quoted spec.</p>

            <div className="cost-worksheet">
              <div className="cost-worksheet-inputs">
                <div className="cw-section">Program basics</div>
                <label>
                  <span>Factory unit cost<small>Ex-works or FOB quote per unit (USD)</small></span>
                  <input type="number" step="0.01" min="0" value={unitCost} onChange={e => setUnitCost(parseFloat(e.target.value) || 0)} aria-label="Factory unit cost in USD" />
                </label>
                <label>
                  <span>Launch volume<small>Units you expect to actually ship on launch</small></span>
                  <input type="number" step="1000" min="0" value={launchVolume} onChange={e => setLaunchVolume(parseInt(e.target.value) || 0)} aria-label="Launch volume in units" />
                </label>
                <label>
                  <span>Factory MOQ<small>Minimum order the factory requires</small></span>
                  <input type="number" step="1000" min="0" value={moq} onChange={e => setMoq(parseInt(e.target.value) || 0)} aria-label="Factory MOQ in units" />
                </label>
                <label>
                  <span>Tooling cost<small>One-time dies, molds, plates (USD)</small></span>
                  <input type="number" step="500" min="0" value={tooling} onChange={e => setTooling(parseInt(e.target.value) || 0)} aria-label="Tooling cost in USD" />
                </label>

                <div className="cw-section">Freight &amp; duties</div>
                <label>
                  <span>Freight mode<small>Ocean is baseline; air 3.8x; expedited 1.6x</small></span>
                  <select value={freightMode} onChange={e => setFreightMode(e.target.value as FreightMode)} aria-label="Freight mode">
                    <option value="ocean">Ocean</option>
                    <option value="expedited">Expedited ocean / sea-air</option>
                    <option value="air">Air freight</option>
                  </select>
                </label>
                <label>
                  <span>Ocean rate per unit<small>Ocean baseline; model scales for air/expedited</small></span>
                  <input type="number" step="0.01" min="0" value={freightPerUnit} onChange={e => setFreightPerUnit(parseFloat(e.target.value) || 0)} aria-label="Ocean freight per unit in USD" />
                </label>
                <label>
                  <span>Duties &amp; brokerage<small>Percent of unit cost (US typical: 0&ndash;5%)</small></span>
                  <input type="number" step="0.5" min="0" value={dutiesPct} onChange={e => setDutiesPct(parseFloat(e.target.value) || 0)} aria-label="Duties percentage" />
                </label>

                <div className="cw-section">Program risk &amp; overhead</div>
                <label>
                  <span>Inserts &amp; assembly<small>Per-unit cost of trays, inserts, kitting labor</small></span>
                  <input type="number" step="0.01" min="0" value={insertCost} onChange={e => setInsertCost(parseFloat(e.target.value) || 0)} aria-label="Inserts and assembly per unit in USD" />
                </label>
                <label>
                  <span>Defect allowance<small>Percent of run pulled by QC, damage, sampling</small></span>
                  <input type="number" step="0.5" min="0" value={defectPct} onChange={e => setDefectPct(parseFloat(e.target.value) || 0)} aria-label="Defect allowance percentage" />
                </label>
                <label>
                  <span>Warehousing per unit / yr<small>Storage, pick/pack cost per unit per year</small></span>
                  <input type="number" step="0.01" min="0" value={warehousingPerUnitYear} onChange={e => setWarehousingPerUnitYear(parseFloat(e.target.value) || 0)} aria-label="Warehousing per unit per year in USD" />
                </label>
                <label>
                  <span>Launch window<small>Months until launch inventory sells through</small></span>
                  <input type="number" step="1" min="1" max="24" value={launchWindowMonths} onChange={e => setLaunchWindowMonths(parseInt(e.target.value) || 1)} aria-label="Launch window in months" />
                </label>
              </div>

              <div className="cost-worksheet-results" aria-live="polite">
                <div className="cwr-label">Your landed-cost model</div>
                <div className="cwr-primary">
                  <div className="cwr-k">Landed cost per unit</div>
                  <div className="cwr-v">{fmt(calc.landedPerUnit)}</div>
                  <div className="cwr-sub">{unitCost > 0 ? `${Math.round(((calc.landedPerUnit - unitCost) / unitCost) * 100)}% above factory quote` : 'Enter a unit cost'}</div>
                </div>
                <div className="cwr-row"><span className="cwr-k">Tooling / unit</span><span className="cwr-v">{fmt(calc.toolingPerUnit)}</span></div>
                <div className="cwr-row"><span className="cwr-k">Freight ({freightMode}) / unit</span><span className="cwr-v">{fmt(calc.freightEffective)}</span></div>
                <div className="cwr-row"><span className="cwr-k">Duties / unit</span><span className="cwr-v">{fmt(calc.dutiesPerUnit)}</span></div>
                <div className="cwr-row"><span className="cwr-k">Defect / unit</span><span className="cwr-v">{fmt(calc.defectPerUnit)}</span></div>
                <div className="cwr-row"><span className="cwr-k">Total program cost</span><span className="cwr-v">{fmt(calc.totalProgram)}</span></div>
                <div className="cwr-row"><span className="cwr-k">Carrying cost (@18% / {launchWindowMonths} mo)</span><span className="cwr-v">{fmt(calc.carrying12mo)}</span></div>
                <div className="cwr-row"><span className="cwr-k">Over-order recommended</span><span className="cwr-v">{calc.overOrderUnits.toLocaleString()} units</span></div>
                <div className="cwr-row"><span className="cwr-k">MOQ exposure</span><span className="cwr-v">{calc.moqGap > 0 ? `${calc.moqGap.toLocaleString()} units above launch` : 'None'}</span></div>

                <div className="cwr-timeline">
                  <div className="cwr-k">Cash timing</div>
                  <ol>
                    <li><strong>Week 0 &middot; Tooling deposit</strong>Typically 50% of tooling due at PO; balance on first sample approval.</li>
                    <li><strong>Week 2&ndash;4 &middot; Factory deposit</strong>30% of production value on PO acceptance for new programs; 20% on established.</li>
                    <li><strong>Week 10&ndash;12 &middot; Factory balance</strong>Balance due against pre-shipment inspection pass, before container release.</li>
                    <li><strong>Week 12&ndash;18 &middot; Freight &amp; duties</strong>Freight invoice at container load; duties at customs clearance.</li>
                    <li><strong>Month 4+ &middot; Warehousing + carrying</strong>Monthly through sell-through; the longest-tail cost line in the model.</li>
                  </ol>
                </div>
              </div>
            </div>

            <h2 id="cashflow"><span className="num">07.</span>Cash-flow timeline &mdash; when the dollars actually land</h2>
            <p>A packaging program is not one invoice. It is a cash-flow pattern that spreads across four to six months before the first unit ships and twelve or more months after. The common failure is treating it as a single line in the budget cycle instead of a timeline that AP has to actually fund.</p>
            <p>The standard cash cadence on a representative beauty program:</p>
            <ul>
              <li><strong>Week 0.</strong> Tooling deposit (typically 50% of tooling cost at PO).</li>
              <li><strong>Week 2&ndash;4.</strong> Factory deposit on production value (30% on new programs; 20% on established).</li>
              <li><strong>Week 10&ndash;12.</strong> Factory balance due against pre-shipment inspection pass. This is the largest single cash call in the program.</li>
              <li><strong>Week 12&ndash;18.</strong> Freight invoice at container load; duties and brokerage at customs clearance; warehouse intake fees on receipt.</li>
              <li><strong>Month 4+.</strong> Monthly warehousing and carrying cost until the inventory sells through.</li>
            </ul>
            <p>The Luxury program timeline runs 16&ndash;24 weeks end to end; the <Link href="/guides/concept-to-shelf-timeline">standard 12-week timeline</Link> compresses the cash curve into a tighter window. Either way the cash is not evenly distributed &mdash; the Week 10&ndash;12 factory balance is the pressure point most brands under-plan for. Logic Pac extends packaging credit on established programs so that cash call lands against the revenue cycle, not the production cycle.</p>

            <h2 id="mistakes"><span className="num">08.</span>Six commercial mistakes that quietly eat the margin plan</h2>

            <h3>Mistake 1 &middot; Modeling the quote, not the landed cost</h3>
            <p>The margin model uses $1.85 because that is what the factory quoted. Six months later the P&amp;L shows $2.40 and the brand team is surprised. The fix is upstream: landed cost in the model, every time, before the program is approved.</p>

            <h3>Mistake 2 &middot; Treating MOQ overage as free upside</h3>
            <p>&ldquo;We will sell through it eventually&rdquo; is not a plan. It is cash converted to inventory that may or may not become revenue. Model MOQ exposure as a balance-sheet line, not a packaging line.</p>

            <h3>Mistake 3 &middot; Budgeting ocean, shipping air</h3>
            <p>The budget assumes 100% ocean; the launch ships 30% on air to make the retail window. The budget was wrong and the margin takes the hit. Model the realistic mix &mdash; usually 70&ndash;85% ocean &mdash; from the start.</p>

            <h3>Mistake 4 &middot; No over-order buffer</h3>
            <p>QC pulls 2&ndash;4% of the run. In-transit damage pulls 0.5&ndash;1%. Sampling consumes 0.5&ndash;1%. If the launch volume is the PO quantity, the brand is short on launch and either delays or air-freights the gap. Build 2&ndash;5% over-order into the PO.</p>

            <h3>Mistake 5 &middot; Tooling amortized against first run only</h3>
            <p>$8,000 of tooling against 25,000 units is $0.32 per unit. Against 250,000 units it is $0.032. The first-run number makes the pack look expensive; the forward-plan number tells the real story. Amortize across the 24-month forward volume plan.</p>

            <h3>Mistake 6 &middot; Carrying cost treated as rounding</h3>
            <p>18&ndash;25% annualized on landed value is not a rounding error. On $120K of packaging stock it is $21K&ndash;$30K per year carried against the brand. Put it on the P&amp;L.</p>

            <GuideBottomLine>
              Factory unit cost is the smallest number in the program. Landed cost is the number that decides whether the launch has the margin it needs &mdash; and MOQ, freight mode, defect allowance, and carrying cost are the four levers that move it. Run the worksheet before the PO goes out, not after. On the programs Logic Pac manages end to end, this discipline is why we see <strong>~21% defect-rate reduction</strong> at pilot, <strong>&lt; 0.75&ndash;1.25%</strong> luxury carton reprint rates, and <strong>75&ndash;80%</strong> program-extension rates within 12 months. The commercial model is the launch plan; the launch plan is the brand plan.
            </GuideBottomLine>

            <h2 id="scorecard"><span className="num">09.</span>The 10-item commercial-readiness scorecard</h2>
            <p>Run your program through the scorecard before the PO is signed. If more than two or three items come back with hesitation, the commercial model is not ready to commit &mdash; it is ready for one more pass.</p>

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
              <p className="sources-lede">The landed-cost model is the anchor; these guides and articles are the deep dives on individual components. Run the worksheet first, then open the ones that match where your program&apos;s risk sits.</p>
              <ul className="sources-list">
                <li><Link href="/blog/packaging-cost-per-unit-benchmarks">Packaging cost per unit benchmarks</Link> &mdash; per-format ranges that feed the factory-unit-cost input.</li>
                <li><Link href="/blog/custom-packaging-moq-guide">Custom packaging MOQ guide</Link> &mdash; the deep dive on MOQ by format and the renegotiation playbook.</li>
                <li><Link href="/blog/custom-packaging-cost-beauty-brands">Custom packaging cost for beauty brands</Link> &mdash; cost drivers across common beauty formats.</li>
                <li><Link href="/guides/material-decision-framework">Material Decision Framework</Link> &mdash; the material-and-MOQ matrix referenced across the stack.</li>
                <li><Link href="/guides/concept-to-shelf-timeline">Concept-to-Shelf Timeline</Link> &mdash; the production calendar the cash-flow timeline is mapped against.</li>
                <li><Link href="/guides/packaging-testing-quality-control">Packaging Testing &amp; Quality Control</Link> &mdash; the defect-allowance line in the model is a function of this discipline.</li>
                <li><Link href="/guides/luxury-beauty-packaging-system">Luxury Beauty Packaging System</Link> &mdash; the 15% premium framing referenced for luxury rigid programs.</li>
                <li><Link href="/work/epicutis">Epicutis case study</Link> &mdash; managed inventory, extended packaging credit, and 15% verified cost savings referenced in the carrying-cost section.</li>
                <li><Link href="/work/artilect-packaging-reduction">Artilect packaging reduction</Link> &mdash; 20% cost and 95% material reduction via spec re-engineering.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Common questions brand managers and procurement teams ask when pressure-testing a packaging program. For the deeper material, timeline, QC, and refillable detail, start with the related guides above.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Planning a Packaging Program"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Cost & MOQ Audit"
          />
        </div>
      </section>
    </>
  )
}
