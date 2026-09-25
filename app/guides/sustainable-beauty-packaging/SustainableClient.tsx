'use client'

import { useEffect, useState, useRef } from 'react'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import GuideByline from '@/components/GuideByline'
import VerifiedAsOf from '@/components/VerifiedAsOf'
import Image from 'next/image'

const tocSections = [
  { id: 'why', label: 'The Packaging-System Decision' },
  { id: 'spectrum', label: '1. Six Practical Paths' },
  { id: 'materials', label: '2. Material Families' },
  { id: 'certifications', label: '3. What to Verify' },
  { id: 'regulatory', label: '4. Claims, Materials & Access' },
  { id: 'claims', label: '5. The Claims Hygiene Framework' },
  { id: 'mistakes', label: '6. The Mistakes Brands Make' },
  { id: 'swaps', label: '7. Lowest-Drag Improvements' },
]

const faqs = [
  { question: 'How much does sustainable beauty packaging actually cost?', answer: 'The cost depends on the material, format, volume, decoration, tooling, freight, and testing requirements. Some reduction moves can lower cost, while PCR, mono-material, fiber, glass, aluminum, and refill systems may carry different premiums. Compare landed cost and operating impact rather than relying on one headline percentage.' },
  { question: "What's the fastest sustainability win for a brand launching in 90 days?", answer: 'Start by reducing unnecessary material, documenting the current bill of materials, and reviewing claims. FSC-certified cartons or verified recycled content may be practical next steps, but timing depends on supplier availability, testing, and the final specification.' },
  { question: 'Do refillable systems actually work for beauty?', answer: "Yes - but only for hero SKUs with high repurchase frequency (foundation, fragrance, deodorant, color cosmetics). Refillability under 40% adoption rate has worse environmental outcomes than well-designed single-use systems. Don't deploy refills until your category and customer base support it." },
  { question: 'How do I tell which sustainability certifications matter?', answer: 'Look for third-party certifying bodies with public audit trails - FSC, BPI, TUV, Cradle to Cradle. Skip self-declared programs and generic "green" graphics. The credibility test: could a regulator request the certification documentation and receive it from the certifying body within 24 hours?' },
  { question: "What happens if I make claims that don't meet the new regulations?", answer: 'Consequences vary by jurisdiction and claim and can include enforcement, relabeling, withdrawal of misleading marketing, or penalties under applicable law. Have legal or compliance counsel review market-specific claims before launch.' },
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
          <h1>Sustainable beauty packaging: the practical <em>playbook.</em></h1>
          <p className="phdr-lede">A decision guide to materials, claims, product protection, cost, and compliance for beauty brands.</p>
          <div className="phdr-meta">
            <GuideByline />
            <span>18 min read</span>
            <span>For brand managers &amp; founders</span>
            <span>Updated September 2026</span>
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

            <div className="guide-answer" aria-labelledby="guide-answer-title">
              <h2 id="guide-answer-title">What sustainable beauty packaging actually means</h2>
              <p>Sustainable beauty packaging is not one material or claim. It is a sequence of decisions about material reduction, recycled content, recyclability, product protection, sourcing, and end-of-life infrastructure. The right option is the one your product, customer, channel, and supply chain can support&mdash;and the one your team can substantiate without vague environmental language.</p>
            </div>

            <div className="blog-takeaways guide-takeaways">
              <h4>What to know</h4>
              <ul>
                <li>Start with reduction and product protection before changing materials.</li>
                <li>Treat PCR, mono-material, refillable, glass, aluminum, and fiber as different systems&mdash;not interchangeable &ldquo;green&rdquo; options.</li>
                <li>Match every environmental claim to documentation for the finished package, not a supplier&apos;s general marketing sheet.</li>
                <li>Build compliance review into concept development. Fixing claims and materials after production is slower and more expensive.</li>
              </ul>
            </div>

            {/* WHY */}
            <section id="why">
              <h2>Sustainability Is Now a Packaging-System Decision</h2>
              <p className="lede">Material, product protection, sourcing, claims, and recovery have to work together.</p>
              <p>The EU, California, and the FTC each regulate environmental claims or packaging in different ways. Several rules enter new phases in 2026, but applicability and enforcement depend on the market, packaging category, and claim. Brands should review claims, certifications, and material records against the official requirements that apply to them.</p>
              <p>At the same time, generic &ldquo;eco-friendly&rdquo; language is harder to defend. A material choice and its marketing claim must be supported by documentation for the finished package, the markets where it will be sold, and the recovery infrastructure customers can actually access.</p>
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
              <h2><span className="num">01.</span>Six Practical Paths&mdash;and What Each Asks of the Operation</h2>
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
                <li><strong>Verification:</strong> Require the resin declaration, recycled-content percentage, chain-of-custody records, and finished-component specification before making an on-pack PCR claim.</li>
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
                <li><strong>Cost:</strong> Often quoted above a comparable conventional structure; the final difference depends on format, supplier, tooling, and volume</li>
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
                <li><strong>Verification:</strong> Confirm fiber source, additives, coatings, and the recovery pathway for the finished component.</li>
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
                <li><strong>Specification:</strong> Ask the printer for the ink formulation, VOC documentation, and compatibility with the selected coating and recycling pathway.</li>
                <li><strong>Tradeoff:</strong> The ink alone does not determine recyclability; substrate, coating, adhesive, and local processing also matter.</li>
                <li><strong>Cost:</strong> Negligible premium for most applications</li>
              </ul>
            </section>

            {/* 3. CERTIFICATIONS */}
            <section id="certifications">
              <h2><span className="num">03.</span>What to Verify Before You Repeat a Sustainability Claim</h2>
              <p>Certifications protect your brand from greenwashing exposure and signal credibility to buyers, retailers, and regulators. Not all of them carry equal weight. Here&apos;s what to specify, what to skip.</p>

              <h3>FSC (Forest Stewardship Council)</h3>
              <p>Certifies paper, cardboard, and fiber-based packaging sourced from responsibly managed forests.</p>
              <ul>
                <li><strong>What it verifies:</strong> Certified material is traced through an FSC chain-of-custody system.</li>
                <li><strong>Use it on:</strong> Eligible cartons, secondary packaging, molded fiber inserts, paper labels, and other fiber components.</li>
              </ul>

              <h3>BPI (Biodegradable Products Institute)</h3>
              <p>Certifies eligible compostable products against ASTM-based requirements for commercial composting. Certification scope and current standard version should be checked for the specific item.</p>
              <ul>
                <li><strong>Standard:</strong> ASTM D6400 and related requirements used by BPI for eligible products and packaging.</li>
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
              <h2><span className="num">04.</span>Where Claims, Materials, and Market Access Intersect</h2>
              <p>Several packaging and environmental-claims rules enter new implementation phases in 2026. The requirements differ by jurisdiction, product, packaging category, and claim, so brands should verify the applicable text rather than treat them as one deadline.</p>

              <h3>EU Packaging and Packaging Waste Regulation (PPWR)</h3>
              <p><strong>Effective:</strong> August 12, 2026</p>
              <p>Introduces packaging-minimization, recyclability, labeling, and recycled-content requirements across the EU. Under Article 7, the 2030 minimums depend on packaging category:</p>
              <ul>
                <li>30% for contact-sensitive packaging whose main component is PET</li>
                <li>10% for contact-sensitive plastic packaging made from plastics other than PET</li>
                <li>35% for plastic packaging outside the specified contact-sensitive and beverage-bottle categories</li>
                <li>Design-for-recycling requirements apply on the regulation&apos;s phased timetable</li>
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
                The bottom line: every sustainability claim should be specific, substantiated, and appropriate for the market where the package is sold. <strong>Verifiable, documented, jurisdictionally specific.</strong>
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
              <h2><span className="num">07.</span>The Lowest-Drag Improvements to Assess First</h2>
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

            <section className="guide-bottom-line" aria-labelledby="bottom-line-heading">
              <h2 id="bottom-line-heading">Bottom Line</h2>
              <p>The strongest sustainability move is rarely the most dramatic one. It is the change that reduces material or improves recovery without compromising the formula, shelf life, customer experience, or production plan. Make the claim only after the package and its documentation can support it.</p>
            </section>

            {/* Sources */}
            <section className="sources-section">
              <h2>Sources</h2>
              <VerifiedAsOf />
              <p className="sources-lede">Primary regulatory and certification sources used for the claims in this guide. Cost and lead-time ranges are Logic Pac operating guidance and vary by specification, volume, and supplier.</p>
              <ul className="sources-list">
                <li><a href="https://eur-lex.europa.eu/eli/dir/2024/825/oj" target="_blank" rel="noopener noreferrer">EUR-Lex: Directive (EU) 2024/825</a> <span>&mdash; environmental claims, sustainability labels, and application from September 27, 2026.</span></li>
                <li><a href="https://eur-lex.europa.eu/eli/reg/2025/40/oj" target="_blank" rel="noopener noreferrer">EUR-Lex: Regulation (EU) 2025/40 (PPWR)</a> <span>&mdash; recyclability, recycled-content, labeling, and packaging-minimization requirements.</span></li>
                <li><a href="https://calrecycle.ca.gov/packaging/packaging-epr/" target="_blank" rel="noopener noreferrer">CalRecycle: SB 54 Packaging EPR</a> <span>&mdash; covered materials, producer obligations, regulations, and implementation resources.</span></li>
                <li><a href="https://www.ftc.gov/business-guidance/resources/environmental-claims-summary-green-guides" target="_blank" rel="noopener noreferrer">FTC: Environmental Claims and Green Guides</a> <span>&mdash; recyclable, compostable, degradable, and general environmental-benefit claims.</span></li>
                <li><a href="https://www.us.fsc.org/chain-of-custody" target="_blank" rel="noopener noreferrer">FSC: Chain of Custody Certification</a> <span>&mdash; requirements for tracing FSC-certified material through the supply chain.</span></li>
                <li><a href="https://bpiworld.org/compostable-products-standard-revised" target="_blank" rel="noopener noreferrer">BPI: Compostable Products Standard</a> <span>&mdash; certification tied to ASTM compostability standards.</span></li>
                <li><a href="https://c2ccertified.org/the-standard" target="_blank" rel="noopener noreferrer">Cradle to Cradle Products Innovation Institute: Certification Standard</a> <span>&mdash; material health, circularity, climate, water and soil, and social-fairness criteria.</span></li>
              </ul>
            </section>

            <div className="guide-cta">
              <h3>Pressure-Test the Packaging Decision Before You Brief Suppliers</h3>
              <p>If you are comparing materials, claims, or refill formats, we can help map the tradeoffs against your product, channel, quantities, and timeline. You will leave with a clearer direction&mdash;even if the right answer is to change less than expected.</p>
              <button className="bi" onClick={() => openModal('Guide - Sustainable Packaging')}>Review the Packaging Direction</button>
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
