'use client'

import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const faqs = [
  { question: "What's the minimum order for custom packaging?", answer: 'Most custom packaging starts at 500–1,000 units per SKU. Folding cartons can sometimes run at lower minimums (250+), while rigid boxes and specialty structures typically require 500+. Pricing improves significantly at 2,500+ units.' },
  { question: 'How much do packaging samples cost?', answer: 'Pre-production samples typically cost $200–$800 depending on complexity. This covers tooling setup, material sourcing, and hand-assembly. Sample costs are usually credited toward your production order.' },
  { question: 'How long does custom packaging take to produce?', answer: 'Custom packaging typically takes 12–20 weeks from approved brief to delivery: design (2–4 weeks), prototyping (2–4 weeks), tooling (4–6 weeks), production (4–8 weeks), and freight (4–8 weeks if international).' },
  { question: 'Can I get custom packaging for under $1 per unit?', answer: 'Yes — folding cartons with standard finishes at quantities of 5,000+ can come in under $1 per unit. Rigid boxes, specialty structures, and low-quantity runs will be higher. The format and volume are the biggest cost drivers.' },
  { question: "What's included in a packaging quote?", answer: 'A complete quote should include: unit cost (FOB or landed), tooling fees, finish costs broken out line by line, sample costs, minimum order quantity, and production timeline. If any of these are missing, ask for them before comparing quotes.' },
]

export default function PostClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Pricing</div>
        <h1>How Much Does Custom Packaging Cost?</h1>
        <p>A real pricing breakdown for beauty brands</p>
        <div className="blog-meta">
          <span>Jordan Harper</span>
          <span>&middot;</span>
          <span>May 21, 2026</span>
          <span>&middot;</span>
          <span>10 min read</span>
        </div>
      </div>

      <div className="guide-wrap">
        <div className="guide-main">
          <div className="seo">
            <div className="blog-takeaways">
              <h4>Key Takeaways</h4>
              <ul>
                <li>Folding cartons run $0.50&ndash;$3.00 per unit. Rigid boxes run $3.00&ndash;$15.00. Tubes and bottles run $0.30&ndash;$5.00.</li>
                <li>Volume is the single biggest cost driver &mdash; the MOQ cliff between 500 and 5,000 units can shift your per-unit cost by 40&ndash;60%</li>
                <li>Specialty finishes (foil stamping, spot UV, embossing) typically add $0.15&ndash;$1.50 per unit depending on coverage area</li>
                <li>The three numbers that matter on every quote: landed cost per unit, tooling amortized across actual quantity, and finish costs line by line</li>
                <li>Most beauty brands undercount their true packaging cost by 15&ndash;25% because they compare FOB quotes without factoring tooling, freight, and waste</li>
              </ul>
            </div>

            <h2>What Custom Beauty Packaging Actually Costs (Per Unit)</h2>
            <p>Custom packaging cost is the most-searched packaging question with the vaguest answers. Most supplier websites say &ldquo;it depends&rdquo; and ask you to request a quote. That is not helpful when you are trying to build a margin model, plan a product launch, or decide whether custom packaging is even viable at your volume.</p>
            <p>Here are the real ranges. These are based on production runs we manage for beauty, cosmetic, and consumer brands &mdash; not theoretical estimates.</p>

            <h3>Folding Cartons: $0.50&ndash;$3.00 per unit</h3>
            <p>Folding cartons are the most common primary packaging format for beauty products. A standard SBS (solid bleached sulfate) carton with 4-color offset printing, gloss or matte lamination, and a tuck-end closure typically runs $0.50&ndash;$1.50 at quantities of 5,000+.</p>
            <p>Add specialty finishes &mdash; soft-touch lamination, spot UV, or foil stamping &mdash; and you are looking at $1.50&ndash;$3.00 per unit. The finish is where the cost curve steepens, not the carton itself.</p>
            <p>At lower quantities (500&ndash;2,000 units), expect 30&ndash;50% higher per-unit pricing due to setup costs being amortized across fewer units.</p>

            <h3>Rigid Set-Up Boxes: $3.00&ndash;$15.00 per unit</h3>
            <p>Rigid boxes are the premium tier. A standard two-piece rigid box with paper wrap, magnetic closure, and basic interior starts around $3.00&ndash;$5.00 at quantities of 2,000+. Add PU leather wrapping, metal hardware, custom thermoformed inserts, and specialty finishes, and you are in the $8.00&ndash;$15.00 range.</p>
            <p>Rigid boxes have higher minimums than folding cartons because the tooling is more complex &mdash; custom die-cutting, wrapping machinery setup, and insert molding all require upfront investment that only makes sense at volume.</p>

            <h3>Tubes and Bottles: $0.30&ndash;$5.00 per unit</h3>
            <p>Tubes (squeeze tubes, airless pumps) start as low as $0.30&ndash;$0.80 for standard formats at high volume. Custom bottles with specialty caps, droppers, or pumps range from $1.00&ndash;$5.00 depending on material (glass, PET, HDPE, PCR) and decoration method (screen printing, hot stamping, spray coating).</p>
            <p>The biggest cost variable in bottles is material: glass can cost 3&ndash;5x more than PET at the same volume, plus glass adds freight cost due to weight.</p>

            <h3>Specialty Finishes &mdash; What Each One Adds to Your Unit Cost</h3>
            <p>Finishes are where packaging cost gets unpredictable for first-time buyers. Here are the real per-unit additions:</p>
            <ul>
              <li><strong>Soft-touch lamination:</strong> $0.08&ndash;$0.20 per unit &mdash; applied to the full exterior surface</li>
              <li><strong>Foil stamping:</strong> $0.15&ndash;$0.60 per unit &mdash; cost depends on coverage area and foil type (metallic vs. holographic)</li>
              <li><strong>Spot UV:</strong> $0.10&ndash;$0.30 per unit &mdash; per application area, requires a separate printing plate</li>
              <li><strong>Embossing/debossing:</strong> $0.10&ndash;$0.40 per unit &mdash; requires a custom metal die ($300&ndash;$1,500 one-time)</li>
              <li><strong>Interior printing:</strong> $0.05&ndash;$0.15 per unit &mdash; adds a branded reveal moment at low cost</li>
            </ul>
            <p>For a deeper look at how finishes work together, see our <Link href="/guides/packaging-finish-guide?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=packaging_cost_finish_guide">Packaging Finish Guide</Link>.</p>

            <h2>What Drives the Price Up (and What Doesn&rsquo;t)</h2>

            <h3>Volume &mdash; The MOQ Cliff</h3>
            <p>Volume is the single biggest cost lever in packaging. The per-unit price difference between 500 and 5,000 units can be 40&ndash;60%. This is because setup costs (tooling, plate making, machine calibration) are fixed regardless of quantity &mdash; they just get spread across more units.</p>
            <p>The practical implication: if your margin model does not work at your current volume, it might work at 2x volume. Run the math at multiple quantity tiers before committing to a format.</p>

            <h3>Materials &mdash; Glass vs. PET vs. PCR</h3>
            <p>Material selection is the second-largest cost driver. Glass communicates premium but costs 3&ndash;5x more than PET and adds significant freight cost. PCR (post-consumer recycled) content typically adds 10&ndash;30% to resin cost depending on availability and percentage.</p>
            <p>Our <Link href="/guides/material-decision-framework?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=packaging_cost_material_guide">Material Decision Framework</Link> covers how to choose the right material by product category and channel.</p>

            <h3>Finishes &mdash; Foil Stamping, Spot UV, Embossing (Real Cost Ranges)</h3>
            <p>Finishes are the 10&ndash;40% swing in packaging cost. A folding carton with matte lamination only might cost $0.80 per unit. Add soft-touch, spot UV on the logo, and foil stamping on the brand name, and you are at $1.60&ndash;$2.20. The finish doubled the cost.</p>
            <p>That does not mean you should skip finishes. It means you should know exactly what each one adds before you approve the spec.</p>

            <h3>Tooling Fees &mdash; One-Time Costs That Surprise First-Time Buyers</h3>
            <p>Tooling is the one-time upfront cost for custom dies, molds, and printing plates. For folding cartons, tooling runs $500&ndash;$2,000. For rigid boxes, $1,500&ndash;$5,000. For custom bottles or jars, $3,000&ndash;$50,000 depending on whether you are modifying an existing mold or creating from scratch.</p>
            <p>Tooling amortization is the hidden cost that makes small runs expensive. A $2,000 die across 500 units adds $4.00 per unit. Across 5,000 units, it adds $0.40. Same die, 10x cost difference per unit.</p>

            <h2>How to Compare Quotes from Packaging Suppliers</h2>

            <h3>The Three Numbers That Actually Matter</h3>
            <p>When you receive packaging quotes, most brands compare the per-unit price at the top of the page. That number is usually FOB (freight on board) &mdash; meaning it does not include freight, customs, duties, or tooling amortization. Two quotes that look identical at FOB can differ by 25% at landed cost.</p>
            <p>The three numbers to compare:</p>
            <ol>
              <li><strong>Landed cost per unit</strong> &mdash; the price with freight, customs, and duties included. This is what actually hits your P&amp;L.</li>
              <li><strong>Tooling amortized across actual order quantity</strong> &mdash; divide total tooling by the number of units to see the real per-unit impact.</li>
              <li><strong>Finish costs broken out line by line</strong> &mdash; so you can see which finishes to keep and which to cut if budget is tight.</li>
            </ol>

            <h3>What a Good Quote Includes (and What Gets Hidden)</h3>
            <p>A transparent packaging quote includes: unit cost, tooling breakdown, finish specifications with individual pricing, sample costs, MOQ and MOQ pricing tiers, production timeline, and freight estimate. If a quote is missing any of these, you do not have enough information to make a decision.</p>
            <p>The most commonly hidden cost: waste factor. First production runs typically have a 3&ndash;8% waste rate. Some suppliers quote for the exact quantity ordered but produce 5% extra &ldquo;to cover waste&rdquo; &mdash; and bill you for it. Ask upfront.</p>
            <p>Our <Link href="/guides/packaging-brief-template?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=packaging_cost_brief_template">Packaging Brief Template</Link> covers how to structure a request that gets you a complete quote on the first pass.</p>

            <h2>Custom vs. Stock Packaging &mdash; When Each Makes Sense</h2>
            <p>Stock packaging (pre-made boxes, standard bottles, off-the-shelf tubes) is not automatically cheaper than custom. At low volumes (under 500 units), stock is usually the right call because there is no tooling cost. But at 2,000+ units, custom manufacturing often matches or beats stock pricing while giving you full control over materials, dimensions, finishes, and brand presentation.</p>
            <p>The decision point is not &ldquo;custom vs. cheap.&rdquo; It is &ldquo;at what volume does custom become the better unit economics?&rdquo; For most beauty brands, that crossover happens between 1,000 and 3,000 units.</p>

            <h2>How to Reduce Packaging Costs Without Losing Brand Quality</h2>
            <p>The most effective cost reductions in packaging are not about cutting corners. They are about right-sizing specifications:</p>
            <ul>
              <li><strong>Right-size your box.</strong> DIM weight pricing means oversized boxes cost more to ship. Reducing box dimensions by even 10% can cut freight cost significantly.</li>
              <li><strong>Consolidate SKUs onto shared tooling.</strong> If three products use similar dimensions, a single die with adjustable inserts saves $3,000&ndash;$6,000 in redundant tooling.</li>
              <li><strong>Switch from custom to modified stock where it does not show.</strong> Secondary packaging (shipping boxes, tissue) rarely needs to be fully custom. Use stock where the customer does not see it.</li>
              <li><strong>Audit your MOQs.</strong> Many brands over-order on their first run because they were quoted at a higher tier. Run the numbers at your actual sell-through rate.</li>
            </ul>
          </div>
        </div>

        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Packaging Cost FAQs"
            faqs={faqs}
            ctaText="Get a Packaging Quote"
            ctaProjectType="Custom Packaging"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Ready to Get a<br /><em>Real Quote?</em></h2>
          <p>Book a 30-minute call. We&apos;ll give you realistic pricing for your specific product, volume, and finish requirements &mdash; not a range.</p>
          <button className="bi" onClick={() => openModal('Custom Packaging')}>Book a Packaging Consultation</button>
        </div>
      </section>
    </>
  )
}
