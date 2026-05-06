'use client'

import { useEffect, useState, useRef } from 'react'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import Image from 'next/image'

const tocSections = [
  { id: 'why', label: 'Why This Guide Exists' },
  { id: 'spectrum', label: '1. The Sustainability Spectrum' },
  { id: 'materials', label: '2. Material Families' },
  { id: 'certifications', label: '3. Certifications That Carry Weight' },
  { id: 'regulatory', label: '4. The Regulatory Landscape' },
  { id: 'claims', label: '5. The Claims Hygiene Framework' },
  { id: 'mistakes', label: '6. The Mistakes Brands Make' },
  { id: 'swaps', label: '7. Where to Start' },
]

const faqs = [
  { question: 'How much does sustainable beauty packaging actually cost?', answer: 'Depending on tier and material family, expect a 5-35% premium over conventional packaging. The premium narrows at higher volumes and is often offset by reduced EPR fees, longer shelf life, and consumer willingness to pay (15-25% higher repeat purchase rates for verified sustainable brands).' },
  { question: "What's the fastest sustainability win for a brand launching in 90 days?", answer: 'FSC-certified outer cartons + 30% PCR primary containers + soy-based ink + audited claims. All four can be specified at brief stage with no impact on production timeline.' },
  { question: 'Do refillable systems actually work for beauty?', answer: "Yes - but only for hero SKUs with high repurchase frequency (foundation, fragrance, deodorant, color cosmetics). Refillability under 40% adoption rate has worse environmental outcomes than well-designed single-use systems. Don't deploy refills until your category and customer base support it." },
  { question: 'How do I tell which sustainability certifications matter?', answer: 'Look for third-party certifying bodies with public audit trails - FSC, BPI, TUV, Cradle to Cradle. Skip self-declared programs and generic "green" graphics. The credibility test: could a regulator request the certification documentation and receive it from the certifying body within 24 hours?' },
  { question: "What happens if I make claims that don't meet the new regulations?", answer: 'In the EU under ECGT (effective September 2026): financial penalties, product recall, mandatory rebranding. In California under SB 343: enforcement action, restrictions on the recyclable claim, fines. Under FTC Green Guides: enforcement action and corrective advertising orders.' },
  { question: 'Can sustainable packaging really feel premium?', answer: 'Yes - and the brands proving it (Aesop, Le Labo, La Bouche Rouge, Function of Beauty) are doing it with molded fiber, mono-aluminum, refillable glass, and engineered minimalism. The materials exist. Specifying them is the work.' },
]

export default function SustainableClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    tocSections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <div className="phdr">
        <div className="phdr-inner">
          <div className="ey">Logic Pac &middot; Sustainability</div>
          <h1>The Sustainable Beauty Packaging <em>Playbook.</em></h1>
          <p className="phdr-lede">The brand manager&apos;s field guide to material choice, claims, and compliance &mdash; before regulators and consumers force the issue.</p>
          <div className="phdr-meta">
            <span>18 min read</span>
            <span>For brand managers &amp; founders</span>
            <span>Updated April 2026</span>
          </div>
        </div>
      </div>

      <div className="guide-wrap">
        <aside className="gtoc">
          <h4>Contents</h4>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            {/* WHY */}
            <section id="why">
              <h2>Why This Guide Exists</h2>
              <p className="lede">Sustainable beauty packaging used to be a marketing decision. It&apos;s becoming a compliance one.</p>
              <p>Three jurisdictions &mdash; the EU, California, and the FTC &mdash; have all moved to restrict, regulate, or outright ban generic environmental claims. The deadlines land between August and October 2026. Brands that haven&apos;t reviewed their packaging claims, certifications, and material sourcing by then will be relabeling, withdrawing stock, or paying penalties.</p>
              <p>At the same time, consumers have stopped accepting &ldquo;eco-friendly&rdquo; at face value. 54% of shoppers now deliberately choose sustainable packaging, and beauty leads the category &mdash; but only when the claim is verifiable. Brands using verified materials (rPET, mono-PP/PE, bio-based plastics) report 15&ndash;25% higher repeat purchase rates than competitors making vague claims.</p>
              <p>This guide is for brand managers who need to make defensible material decisions &mdash; without losing the design quality, premium feel, or production timeline their brand depends on.</p>

              <div className="body-toc">
                <div className="body-toc-label">What&apos;s inside</div>
                <ol>
                  <li>The Sustainability Spectrum &mdash; where your packaging falls today</li>
                  <li>Material Families &mdash; what each option actually delivers</li>
                  <li>Certifications That Carry Weight &mdash; what to specify, what to skip</li>
                  <li>The Regulatory Landscape &mdash; three deadlines you need to track</li>
                  <li>The Claims Hygiene Framework &mdash; three questions before any claim ships</li>
                  <li>The Mistakes Brands Make &mdash; and how to avoid them</li>
                  <li>Where to Start &mdash; seven swaps that work without redesigning</li>
                </ol>
              </div>
            </section>

            <Image src="/images/guides/portfolio-aluminum-tins.jpg" alt="Huxton aluminum tin packaging with decorative illustrations — infinitely recyclable mono-material format" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            {/* 1. SPECTRUM */}
            <section id="spectrum">
              <h2><span className="num">01.</span>The Sustainability Spectrum</h2>
              <p>Most brands talk about &ldquo;sustainable packaging&rdquo; as a binary &mdash; you either are or you aren&apos;t.</p>
              <p>The reality is a spectrum. Six tiers, each with different cost, perception, and infrastructure tradeoffs.</p>

              <div className="guide-tbl-wrap">
                <table className="guide-tbl">
                  <thead>
                    <tr><th>Tier</th><th>Description</th><th>Cost Premium</th><th>Brand Signal</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>1. Conventional</strong></td><td>Virgin plastic, mixed materials, multi-layer films</td><td>Baseline</td><td>None &mdash; or negative</td></tr>
                    <tr><td><strong>2. Reduced</strong></td><td>Lighter weight, smaller dimensions, less air</td><td>&minus;5% to baseline</td><td>Quiet; cost-driven</td></tr>
                    <tr><td><strong>3. Recycled</strong></td><td>PCR/PIR content, recycled paperboard, FSC-certified fiber</td><td>+5&ndash;15%</td><td>Mainstream credibility</td></tr>
                    <tr><td><strong>4. Mono-Material</strong></td><td>Single-resin systems (mono-PE, mono-PP, mono-aluminum)</td><td>+10&ndash;20%</td><td>Compliance-ready, recyclable</td></tr>
                    <tr><td><strong>5. Renewable / Bio-Based</strong></td><td>Plant-based plastics (PLA, PHA), molded fiber, sugarcane</td><td>+20&ndash;35%</td><td>Premium-positioned, sustainability-forward</td></tr>
                    <tr><td><strong>6. Refillable / Circular</strong></td><td>Glass, aluminum, refill systems with closed-loop logistics</td><td>+30&ndash;60% upfront</td><td>Category-leading, lifestyle signal</td></tr>
                  </tbody>
                </table>
              </div>

              <p><strong>Where brands typically get it wrong:</strong> they jump from Tier 1 to Tier 6 in a single redesign, then can&apos;t sustain the unit economics or consumer behavior change required.</p>
              <p>The smarter play is a tier-by-tier roadmap. Move from conventional &rarr; recycled &rarr; mono-material &rarr; renewable as your volume, infrastructure, and brand positioning support each step. Refillability comes after you&apos;ve earned operational confidence in the lower tiers.</p>
            </section>

            {/* 2. MATERIALS */}
            <section id="materials">
              <h2><span className="num">02.</span>Material Families</h2>
              <p>Every beauty packaging decision comes back to material choice. Here&apos;s what each option actually delivers.</p>

              <h3>PCR (Post-Consumer Recycled) Plastic</h3>
              <p>Plastic processed from consumer recycling streams &mdash; water bottles, food containers &mdash; back into usable resin.</p>
              <ul>
                <li><strong>Cost:</strong> 10&ndash;30% premium over virgin, narrowing at higher volumes</li>
                <li><strong>Perception:</strong> The most recognized &ldquo;second life&rdquo; claim in beauty</li>
                <li><strong>Color performance:</strong> Variable; expect tighter QC tolerance and higher reject rates on opaque white or clear formats</li>
                <li><strong>Where it works:</strong> Bottles, jars, tubes, caps at 30&ndash;100% PCR content</li>
                <li><strong>Proof:</strong> REN Clean Skincare launched 100% PCR airless bottles in 2026 with 68% lower emissions. L&apos;Or&eacute;al hit 32% recycled or biobased content across its portfolio.</li>
              </ul>

              <h3>PIR (Post-Industrial Recycled) Plastic</h3>
              <p>Plastic from manufacturing waste &mdash; trim, offcuts, rejected batches &mdash; that never reached consumers.</p>
              <ul>
                <li><strong>Cost:</strong> 5&ndash;15% premium over virgin</li>
                <li><strong>Consumer story:</strong> Less compelling than PCR (&ldquo;not your old water bottle&rdquo;)</li>
                <li><strong>Where it works:</strong> Internal sustainability metrics, ESG reporting, COGS optimization</li>
                <li><strong>Recommendation:</strong> Use PIR where the operational sustainability matters more than the marketing copy</li>
              </ul>

              <h3>Mono-Material Systems</h3>
              <p>Packaging built from a single resin family &mdash; mono-PE tubes with PE caps, mono-PP jars with PP closures, mono-aluminum systems.</p>
              <ul>
                <li><strong>Cost:</strong> 10&ndash;20% premium initially, often offset by simplified supply chain</li>
                <li><strong>Why it matters:</strong> EU PPWR (effective August 2026) penalizes hard-to-recycle multi-material formats</li>
                <li><strong>Where it works:</strong> Tubes, bottles, secondary cartons</li>
                <li><strong>Tradeoff:</strong> Limited barrier properties for oxygen-sensitive formulas</li>
              </ul>

              <h3>Glass</h3>
              <p>Heavier, infinitely recyclable, premium-positioned by default.</p>
              <ul>
                <li><strong>Cost:</strong> 20&ndash;50% premium over plastic, plus higher freight (DIM weight + breakage)</li>
                <li><strong>Where it works:</strong> Serums, hero SKUs, refillable systems, fragrance</li>
                <li><strong>Tradeoffs:</strong> Freight emissions can negate sustainability gains on high-volume DTC; requires heavier secondary packaging to prevent breakage</li>
              </ul>

              <h3>Molded Fiber</h3>
              <p>Made from post-consumer or post-industrial paper pulp, reformed under heat and pressure into custom shapes.</p>
              <ul>
                <li><strong>Cost:</strong> Custom mold tooling $5K&ndash;15K upfront; per-unit 15&ndash;30% premium over corrugate</li>
                <li><strong>Lead time:</strong> 8&ndash;12 weeks (vs. 4&ndash;6 for standard cardboard)</li>
                <li><strong>Where it works:</strong> Inserts, structural protection, e-commerce mailers, premium boxes</li>
                <li><strong>Market signal:</strong> $10.5B global market in 2026, with cosmetics-specific applications growing at 7.4% CAGR through 2030</li>
              </ul>

              <h3>Refillable Systems</h3>
              <p>Closed-loop packaging where the customer purchases a primary container once and refills it.</p>
              <ul>
                <li><strong>Cost:</strong> 30&ndash;60% premium upfront on the primary; refill economics improve over time</li>
                <li><strong>Where it works:</strong> Hero SKUs with high repurchase frequency (foundation, fragrance, deodorant, lipstick)</li>
                <li><strong>Where it doesn&apos;t:</strong> Trial-stage products, low-repeat categories, brands without refill-return infrastructure</li>
                <li><strong>Honest read:</strong> Refillability only delivers environmental benefit when customers actually refill. Under 40% adoption, the carbon footprint can be worse than single-use due to heavier primary packaging.</li>
              </ul>

              <h3>Plant-Based Inks</h3>
              <p>Inks derived from soy, corn, or sugarcane instead of petroleum.</p>
              <ul>
                <li><strong>VOC reduction:</strong> Soy inks contain under 1% volatile organic compounds vs. 4&ndash;6% for petroleum (over 80% reduction, per EPA documentation)</li>
                <li><strong>Recycling benefit:</strong> Easier to remove during paper de-inking, improving recyclability of printed substrates</li>
                <li><strong>Cost:</strong> Negligible premium for most applications</li>
              </ul>
            </section>

            {/* 3. CERTIFICATIONS */}
            <section id="certifications">
              <h2><span className="num">03.</span>Certifications That Carry Weight</h2>
              <p>Certifications protect your brand from greenwashing exposure and signal credibility to buyers, retailers, and regulators. Not all of them carry equal weight. Here&apos;s what to specify, what to skip.</p>

              <h3>FSC (Forest Stewardship Council)</h3>
              <p>Certifies paper, cardboard, and fiber-based packaging sourced from responsibly managed forests.</p>
              <ul>
                <li><strong>Consumer recognition:</strong> 46% across 33 countries &mdash; higher than any other forest certification system</li>
                <li><strong>Behavioral lift:</strong> 62% of consumers will choose an FSC-certified product over a non-certified equivalent</li>
                <li><strong>Use it on:</strong> Cartons, secondary packaging, molded fiber inserts, paper labels</li>
              </ul>

              <h3>BPI (Biodegradable Products Institute)</h3>
              <p>Certifies compostable products under ASTM D6400 &mdash; the only meaningful US compostability standard.</p>
              <ul>
                <li><strong>Standard:</strong> 90% biodegradation within 180 days at 55&ndash;60&deg;C in commercial composting</li>
                <li><strong>Use it on:</strong> Compostable wrappers, refill pouches, mailer fills</li>
              </ul>

              <h3>TUV / DIN-Gepr&uuml;ft</h3>
              <p>European compostability and biodegradability certifications. More credible internationally than the term &ldquo;biodegradable&rdquo; alone.</p>
              <ul>
                <li><strong>Standard:</strong> EN 13432 (industrial composting), OK Compost HOME (home composting)</li>
                <li><strong>Use it on:</strong> Anything sold into EU markets making compostability claims</li>
              </ul>

              <h3>Cradle to Cradle Certified</h3>
              <p>Multi-attribute certification covering material health, recyclability, renewable energy, water stewardship, and social fairness.</p>
              <ul>
                <li><strong>Tiers:</strong> Bronze, Silver, Gold, Platinum</li>
                <li><strong>Use it on:</strong> Hero SKUs, brand-defining packaging, when sustainability is a primary brand pillar</li>
              </ul>

              <h3>What to skip</h3>
              <ul>
                <li><strong>Generic &ldquo;green&rdquo; or &ldquo;eco&rdquo; graphics</strong> with no certifying body. The chasing arrows symbol alone is now restricted in California.</li>
                <li><strong>Self-declared certifications.</strong> Anything you certified yourself isn&apos;t a certification.</li>
                <li><strong>Carbon-neutral claims</strong> that rely solely on offsets without emissions reduction.</li>
              </ul>
            </section>

            {/* 4. REGULATORY */}
            <section id="regulatory">
              <h2><span className="num">04.</span>The Regulatory Landscape</h2>
              <p>Three regulatory deadlines hit beauty packaging within an eight-week window in 2026. A fourth &mdash; the FTC Green Guides &mdash; is being updated and already actively enforced via state regulators.</p>

              <h3>EU Packaging and Packaging Waste Regulation (PPWR)</h3>
              <p><strong>Effective:</strong> August 12, 2026</p>
              <p>Mandates minimum recycled content, restricts hard-to-recycle formats, and harmonizes EPR (Extended Producer Responsibility) frameworks across all 27 member states. By January 2030, the regulation requires:</p>
              <ul>
                <li>30% recycled content for PET packaging</li>
                <li>10% recycled content for other plastics</li>
                <li>All packaging recyclable by design</li>
              </ul>
              <p><strong>Impact on beauty:</strong> Multi-layer films, mixed-material bottles with PET bodies and PP caps, and decorative metallic coatings will face higher EPR fees. Mono-material systems will become the cost-efficient default.</p>

              <h3>EU Empowering Consumers for the Green Transition Directive (ECGT)</h3>
              <p><strong>Effective:</strong> September 27, 2026</p>
              <p>Bans generic green claims across all EU member states. Specifically prohibits:</p>
              <ul>
                <li>Unqualified &ldquo;eco-friendly,&rdquo; &ldquo;green,&rdquo; &ldquo;sustainable&rdquo; claims</li>
                <li>&ldquo;Climate neutral&rdquo; claims based solely on carbon offsets</li>
                <li>Sustainability labels not backed by a public authority or certification scheme</li>
              </ul>
              <p><strong>Impact on beauty:</strong> Every claim on-pack and in marketing copy needs substantiation.</p>

              <h3>California SB 343 (&ldquo;Truth in Recycling&rdquo;)</h3>
              <p><strong>Effective:</strong> October 2026 (full enforcement)</p>
              <p>Bans the chasing arrows symbol and the word &ldquo;recyclable&rdquo; on any package not accepted by 60%+ of California&apos;s residential recycling programs.</p>
              <p><strong>Impact on beauty:</strong> Most flexible films, multi-layer pouches, decorative caps, and small-format components no longer qualify for the recyclable claim in California.</p>

              <h3>FTC Green Guides</h3>
              <p>Already actively enforced:</p>
              <ul>
                <li>Unqualified &ldquo;biodegradable&rdquo; claims must support full decomposition within one year of customary disposal &mdash; anything destined for a landfill cannot legally be marketed as biodegradable without qualification.</li>
                <li>&ldquo;Recyclable&rdquo; claims require a substantial majority (60%) of consumers to have access to recycling. Below that threshold, the claim must be qualified.</li>
              </ul>

              <div className="callout">
                The bottom line: every sustainability claim on beauty packaging shipping after August 2026 needs to survive a regulator audit. <strong>Verifiable, certified, jurisdictionally specific.</strong>
              </div>
            </section>

            <Image src="/images/guides/sustainability-certifications.png" alt="Sustainability certification landscape — FSC, BPI, Cradle to Cradle, How2Recycle, EU PPWR, and California SB 54 compared" width={800} height={450} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            {/* 5. CLAIMS HYGIENE */}
            <section id="claims">
              <h2><span className="num">05.</span>The Claims Hygiene Framework</h2>
              <p>Before any sustainability claim goes on-pack &mdash; or in marketing copy &mdash; run it through this three-question test.</p>

              <h3>Question 1: Is it specific?</h3>
              <p>&ldquo;Eco-friendly&rdquo; is not specific. &ldquo;Made with 50% post-consumer recycled PET&rdquo; is.</p>

              <div className="guide-tbl-wrap">
                <table className="guide-tbl">
                  <thead>
                    <tr><th>Vague claim</th><th>Specific replacement</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>&ldquo;Eco-friendly packaging&rdquo;</td><td>&ldquo;Made with 50% PCR plastic, FSC-certified outer carton&rdquo;</td></tr>
                    <tr><td>&ldquo;Sustainably sourced&rdquo;</td><td>&ldquo;FSC-certified paperboard from responsibly managed forests&rdquo;</td></tr>
                    <tr><td>&ldquo;Biodegradable&rdquo;</td><td>&ldquo;Industrially compostable per ASTM D6400 (BPI-certified)&rdquo;</td></tr>
                    <tr><td>&ldquo;Recyclable&rdquo;</td><td>&ldquo;Recyclable in curbside programs in 60%+ of US municipalities&rdquo;</td></tr>
                    <tr><td>&ldquo;Carbon neutral&rdquo;</td><td>&ldquo;Carbon footprint reduced 40% vs. previous generation; remaining emissions offset via verified registry&rdquo;</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>Question 2: Is it substantiated?</h3>
              <p>Every claim needs backing documentation a regulator could request and review.</p>
              <ul>
                <li>Recycled content percentages &rarr; supplier certificates of analysis</li>
                <li>Compostability claims &rarr; BPI or TUV certification numbers</li>
                <li>Carbon claims &rarr; third-party verified lifecycle assessment</li>
                <li>Recyclability claims &rarr; infrastructure access data (How2Recycle, RecyclerNetwork, or equivalent)</li>
              </ul>
              <p>If you can&apos;t produce the documentation in 24 hours when asked, the claim isn&apos;t substantiated.</p>

              <h3>Question 3: Is it jurisdictionally safe?</h3>
              <p>A claim that&apos;s defensible in the US may not be in the EU. A claim that holds in California may not in Texas.</p>
              <ul>
                <li>For US national distribution: meet FTC Green Guides standard (substantial majority access)</li>
                <li>For EU distribution: meet ECGT specificity + substantiation requirements</li>
                <li>For California: meet SB 343 chasing-arrows restrictions</li>
                <li>For multi-market: default to the strictest jurisdiction&apos;s standard</li>
              </ul>
              <p>The brands that get this right design once for the strictest regulator and ship that version everywhere. It costs slightly more upfront. It saves significantly more in legal exposure and rebranding cycles.</p>
            </section>

            {/* 6. MISTAKES */}
            <section id="mistakes">
              <h2><span className="num">06.</span>The Mistakes Brands Make</h2>
              <p>Patterns we see repeatedly. All of them avoidable.</p>

              <h3>Mistake 1: Switching plastic to paper without lifecycle math</h3>
              <p>Paper feels more responsible. But it&apos;s heavier, generates more freight emissions, and ends up in landfills at similar rates to plastic. A corrugated mailer that weighs 40% more than a poly mailer creates more transport emissions, even if it&apos;s &ldquo;recyclable.&rdquo;</p>
              <p><strong>Fix:</strong> Run lifecycle math before material swaps. Sometimes the more sustainable choice is reducing total material, not switching material families.</p>

              <h3>Mistake 2: Specifying &ldquo;compostable&rdquo; without checking infrastructure</h3>
              <p>Compostable packaging only delivers environmental benefit if it reaches a commercial composting facility. Most US municipalities don&apos;t accept compostables in residential streams.</p>
              <p><strong>Fix:</strong> Check whether your customer base actually has composting infrastructure. If they don&apos;t, &ldquo;compostable&rdquo; is a marketing claim with no environmental payoff.</p>

              <h3>Mistake 3: Using PCR percentages as a marketing arms race</h3>
              <p>Brands compete on PCR content (50% becomes 70% becomes 100%) without checking whether the supply chain can actually deliver consistent quality at higher percentages.</p>
              <p><strong>Fix:</strong> Match PCR content to your QC tolerance and consumer perception threshold. A consistent 30% PCR with reliable color matching outperforms an inconsistent 100% PCR with reject rates in the double digits.</p>

              <h3>Mistake 4: Treating sustainability and luxury as opposites</h3>
              <p>The myth that eco = drab is over. Molded fiber feels premium. Mono-material aluminum looks luxury. Refillable systems signal status.</p>
              <p><strong>Fix:</strong> Brief your designers and suppliers explicitly on premium-AND-sustainable. The materials and finishes exist; you just have to specify them.</p>

              <h3>Mistake 5: Ignoring secondary and tertiary packaging</h3>
              <p>Most sustainability initiatives focus on the bottle or jar. Secondary packaging (cartons, inserts, mailer boxes) and tertiary packaging (cases, pallets) often have larger total environmental impact.</p>
              <p><strong>Fix:</strong> Apply the same scrutiny to every layer.</p>

              <h3>Mistake 6: Making claims you can&apos;t substantiate</h3>
              <p>The most expensive mistake. Generic &ldquo;eco-friendly&rdquo; graphics, vague carbon claims, sustainability badges with no certifying body. Each one is now legal exposure under the EU ECGT, California SB 343, and FTC Green Guides.</p>
              <p><strong>Fix:</strong> Audit every existing on-pack claim against the three-question test in Section 5. If a claim doesn&apos;t pass, remove it or replace it with a specific, substantiated alternative.</p>
            </section>

            {/* 7. SWAPS */}
            <section id="swaps">
              <h2><span className="num">07.</span>Where to Start</h2>
              <p>Seven changes that deliver immediate impact on most existing packaging systems &mdash; without a full redesign.</p>

              <div className="swap-card">
                <h3><span className="swap-num">Swap 01</span> Switch outer cartons to FSC-certified paperboard</h3>
                <p>Lowest-friction, highest-credibility move. FSC certification is widely recognized, the cost premium is modest (5&ndash;10%), and the supply chain is mature.</p>
              </div>

              <div className="swap-card">
                <h3><span className="swap-num">Swap 02</span> Increase PCR content in your existing plastic components</h3>
                <p>Most resin suppliers can deliver 30&ndash;50% PCR in standard PET, HDPE, and PP without retooling. Start with secondary components (caps, closures) where color tolerance is higher.</p>
              </div>

              <div className="swap-card">
                <h3><span className="swap-num">Swap 03</span> Replace plastic inserts with molded fiber</h3>
                <p>For e-commerce mailers, gift sets, and hero SKU boxes. Molded fiber feels premium, provides equivalent protection, and is fully recyclable. Custom mold tooling pays back at 10K+ unit volumes.</p>
              </div>

              <div className="swap-card">
                <h3><span className="swap-num">Swap 04</span> Eliminate unnecessary secondary packaging</h3>
                <p>The most sustainable packaging is the packaging you don&apos;t use. Audit whether your secondary cartons, tissue layers, and inserts are actually serving a function &mdash; or just adding material.</p>
              </div>

              <div className="swap-card">
                <h3><span className="swap-num">Swap 05</span> Switch to plant-based inks</h3>
                <p>Soy or sugarcane-derived inks reduce VOC content by over 80% versus petroleum inks. Most printers can switch with minimal cost impact.</p>
              </div>

              <div className="swap-card">
                <h3><span className="swap-num">Swap 06</span> Migrate multi-material systems to mono-material</h3>
                <p>Where formulation tolerances allow, shift mixed-resin systems to mono-PE or mono-PP. Better recyclability scores, lower EPR fees under EU PPWR, simpler supply chain.</p>
              </div>

              <div className="swap-card">
                <h3><span className="swap-num">Swap 07</span> Audit your claims library</h3>
                <p>Before any of the regulatory deadlines hit in late 2026, audit every on-pack claim, marketing claim, and website claim against the three-question framework. Remove vague claims. Replace with specific, substantiated alternatives.</p>
              </div>
            </section>

            {/* Sources */}
            <section className="sources-section">
              <h2>Sources</h2>
              <p className="sources-lede">Every regulatory date, market figure, and consumer statistic cited in this guide is traceable to a public regulatory filing, peer-reviewed dataset, or named brand announcement.</p>
              <ul className="sources-list">
                <li><strong>EU Empowering Consumers for the Green Transition Directive (ECGT)</strong> <span>&mdash; effective 27 September 2026 across all EU member states. Bans generic environmental claims; regulates sustainability labels.</span></li>
                <li><strong>EU Packaging and Packaging Waste Regulation (PPWR)</strong> <span>&mdash; applies from 12 August 2026. Mandates minimum 30% recycled content for PET and 10% for other plastics by January 2030.</span></li>
                <li><strong>California SB 343 (Truth in Recycling)</strong> <span>&mdash; full enforcement October 2026. Restricts the chasing arrows symbol and &ldquo;recyclable&rdquo; claims to packaging accepted by 60%+ of in-state programs.</span></li>
                <li><strong>FTC Green Guides &mdash; 16 CFR Part 260</strong> <span>&mdash; Federal Trade Commission. Restricts unqualified &ldquo;biodegradable&rdquo; claims to materials that decompose within one year of customary disposal; defines &ldquo;substantial majority&rdquo; recycling access as 60%.</span></li>
                <li><strong>ASTM D6400</strong> <span>&mdash; Standard Specification for Labeling of Plastics Designed to be Aerobically Composted. 90% biodegradation in 180 days at 55&ndash;60&deg;C.</span></li>
                <li><strong>Biodegradable Products Institute (BPI)</strong> <span>&mdash; North American compostability certification body using ASTM D6400 / D6868 testing standards.</span></li>
                <li><strong>FSC 2025 Global Consumer Recognition Survey</strong> <span>&mdash; Ipsos for Forest Stewardship Council. 46% recognition across 33 countries; 62% prefer FSC-certified; 66% expect non-deforestation packaging.</span></li>
                <li><strong>U.S. EPA &mdash; Volatile Organic Compounds in Inks</strong> <span>&mdash; Soy-based inks &lt;1% VOC vs. petroleum 4&ndash;6% (over 80% reduction).</span></li>
                <li><strong>U.S. EPA &mdash; Plastics Material-Specific Data, Facts and Figures about Materials, Waste and Recycling</strong> <span>&mdash; U.S. plastic recycling rate decline from 9% (2018) to ~5% (current); 13.3% rate for plastic packaging specifically.</span></li>
                <li><strong>Future Market Insights &mdash; Molded Fiber Pulp Packaging Market 2026&ndash;2036</strong> <span>&mdash; $10.5B global market in 2026; cosmetics-specific applications growing 7.4% CAGR through 2030.</span></li>
                <li><strong>Future Market Insights &mdash; Post-Consumer Recycled Packaging Market</strong> <span>&mdash; $23.25B in 2025, projected $46.86B by 2034 (8.17% CAGR); cosmetics segment 7.65% CAGR.</span></li>
                <li><strong>REN Clean Skincare</strong> <span>&mdash; 2026 launch of 100% PCR airless bottle program, 68% lower emissions vs. virgin baseline (public announcement).</span></li>
                <li><strong>L&apos;Or&eacute;al Group Sustainability Disclosures</strong> <span>&mdash; 32% recycled or biobased content achievement across multi-brand portfolio.</span></li>
                <li><strong>Sustainable packaging consumer behavior research, 2025&ndash;2026</strong> <span>&mdash; 54% of shoppers deliberately choose sustainable packaging; 30%+ of beauty consumers notice packaging improvements; 15&ndash;25% repeat purchase lift on rPET / mono-material / bio-based plastics.</span></li>
              </ul>
            </section>

            <div className="guide-cta">
              <h3>Ready to Make Your Packaging Defensible?</h3>
              <p>We help beauty brands move from generic claims to defensible specs &mdash; matching the right tier, the right certification, and the right claim across every component, in every jurisdiction you ship into.</p>
              <button className="bi" onClick={() => openModal('Guide - Sustainable Packaging')}>Book a Sustainability Consultation</button>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Still Have Questions?</h2>
            <p>Here are the most common questions we get about sustainable beauty packaging. If you don&apos;t see your question, book a call and we&apos;ll give you a straight answer.</p>
          </div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Sustainable Packaging FAQs"
            faqs={faqs}
            ctaText="Book a Sustainability Consultation"
            ctaProjectType="Guide - Sustainable Packaging"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Make Sustainability<br /><em>Defensible</em></h2>
          <p>The right material, the right claim, the right certification &mdash; in every jurisdiction you ship into.</p>
          <button className="bi" onClick={() => openModal('Guide - Sustainable Packaging')}>Book a Consultation</button>
        </div>
      </section>
    </>
  )
}
