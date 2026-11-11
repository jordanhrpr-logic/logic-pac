'use client'

import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import BlogFAQ from '@/components/BlogFAQ'
import BlogTOC from '@/components/BlogTOC'
import RelatedContent from '@/components/RelatedContent'

export default function PostClient() {
  const { openModal } = useModal()

  const tocSections = [
    { id: 'stock-molds-versus-custom-tooling', label: 'Stock Molds Versus Custom Tooling' },
    { id: 'tooling-cost-ranges-by-format', label: 'Tooling Cost Ranges by Format' },
    { id: 'the-volume-breakeven', label: 'The Volume Breakeven' },
    { id: 'tooling-ownership-and-portability', label: 'Tooling Ownership and Portability' },
    { id: 'shared-tooling-across-sku-families', label: 'Shared Tooling Across SKU Families' },
    { id: 'when-to-transition-from-stock-to-custom', label: 'When to Transition from Stock to Custom' },
  ]

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Pricing</div>
        <h1>When Custom Packaging Tooling Makes Sense (And When Stock Molds Are Fine)</h1>
        <p>The cost ranges, volume breakeven, and decision framework for stock versus custom tooling</p>
        <div className="phdr-meta"><span>Jordan Harper</span><span>November 10, 2026</span><span>9 min read</span></div>
      </div>

      <div className="blog-wrap">
        <BlogTOC sections={tocSections} />
        <div className="blog-main">
      <div className="guide-answer" aria-labelledby="answer-title">
            <h2 id="answer-title">Should you invest in custom packaging tooling?</h2>
            <p>Custom tooling makes sense when your annual volume exceeds the breakeven point &mdash; typically 10,000&ndash;25,000 units for folding cartons and 5,000&ndash;15,000 for rigid boxes. Below that, stock molds and standard die-lines give you 80% of the result at a fraction of the upfront cost. The decision is volume math, not brand aspiration.</p>
          </div>

      <div className="blog-body">
            <p>Tooling is the most misunderstood cost in packaging development. Brands either overspend on custom tooling at launch volumes that will never amortize the investment, or they stay on stock molds long after the volume justifies upgrading. Both mistakes cost real money.</p>
            <p>This guide covers what tooling actually costs by format, how to calculate the volume breakeven, who owns the tooling when you change suppliers, and how to share tooling across a SKU family to spread the investment.</p>

            <div className="blog-takeaways">
              <h3>Key Takeaways</h3>
              <ul>
                <li>Folding carton tooling (die-lines, plates): <strong>$3,000&ndash;$10,000</strong>. Rigid box tooling: <strong>$5,000&ndash;$15,000</strong>. Bottles and jars (injection molds): <strong>$15,000&ndash;$50,000+</strong>.</li>
                <li>Amortize tooling across your forward 24-month volume plan, not the first run alone.</li>
                <li>Stock molds are the right call at launch for most beauty brands &mdash; custom tooling earns its cost at 10,000+ units annually.</li>
                <li>Tooling ownership should be in the contract. If you paid for it, you should be able to move it to a new supplier.</li>
                <li>Shared tooling across SKU families (one die-line, multiple graphics) cuts per-SKU tooling cost dramatically.</li>
              </ul>
            </div>

            <h2 id="stock-molds-versus-custom-tooling">Stock Molds Versus Custom Tooling</h2>
            <p><strong>Stock tooling</strong> means the supplier already owns the die-line, mold, or structural template. You select from their catalog of standard sizes and shapes. Your customization is limited to graphics, color, and finish &mdash; not structure.</p>
            <p>Stock advantages: no tooling cost, faster lead time (skip the 2&ndash;4 week tooling phase), proven structural integrity (the format has been produced thousands of times). Stock limitations: you share the format with other brands, dimensions are fixed, and structural differentiation is impossible.</p>
            <p><strong>Custom tooling</strong> means you commission a new die-line, mold, or structural design specific to your product. You choose the exact dimensions, closure mechanism, insert configuration, and structural features. The supplier builds the tool, you pay for it, and the format is yours.</p>
            <p>Custom advantages: exact fit to your product, structural differentiation on shelf, ability to optimize material usage (less waste per unit). Custom limitations: upfront cost, 2&ndash;4 week tooling lead time, and the risk that the tool needs revision after prototyping.</p>

            <h2 id="tooling-cost-ranges-by-format">Tooling Cost Ranges by Format</h2>
            <p>These are typical ranges for beauty and consumer product packaging. Actual cost depends on structural complexity, number of cavities (for injection molds), and manufacturing location.</p>

            <h3>Folding cartons &mdash; $3,000&ndash;$10,000</h3>
            <p>Includes die-line development, cutting die fabrication, and print plates. A standard auto-lock carton with one window is at the low end. A complex multi-panel carton with tuck-end closures, inserts, and multiple die-cut windows is at the high end. Print plate costs scale with the number of colors and finishes (foil stamp and emboss require separate plates).</p>

            <h3>Rigid boxes &mdash; $5,000&ndash;$15,000</h3>
            <p>Rigid box tooling includes the forming mold (which sets the box dimensions), wrapping jigs, and any specialty tooling for magnetic closure, hinge mechanisms, or drawer slides. A simple two-piece lift-lid box with paper wrap is at the low end. A magnetic-closure book-style box with interior foam insert tooling is at the high end.</p>

            <h3>Bottles and jars (injection molds) &mdash; $15,000&ndash;$50,000+</h3>
            <p>Injection mold tooling is the most expensive because the mold must be precision-machined from steel or aluminum. A single-cavity mold for a simple jar runs $15,000&ndash;$25,000. Multi-cavity molds (which produce multiple units per cycle at higher volumes) run $30,000&ndash;$50,000+. Aluminum molds are cheaper but wear faster &mdash; suitable for runs under 100,000 units. Steel molds last 500,000+ cycles.</p>

            <h3>Tubes &mdash; $5,000&ndash;$15,000</h3>
            <p>Tube tooling covers the shoulder mold (the top of the tube where the cap threads attach) and the cap mold. Stock tube diameters are widely available, so custom tooling is only needed for non-standard diameters, custom shoulder shapes, or proprietary cap designs.</p>

            <h2 id="the-volume-breakeven">The Volume Breakeven</h2>
            <p>The breakeven question is: at what volume does the per-unit tooling cost become negligible compared to the per-unit production cost?</p>
            <p>A simple framework:</p>
            <ul>
              <li><strong>Tooling cost &divide; forward 24-month volume = per-unit tooling amortization.</strong></li>
              <li>If the per-unit tooling cost is less than 5% of the per-unit production cost, the tooling investment is justified.</li>
              <li>If it is more than 15%, you are overspending on structure relative to volume.</li>
            </ul>
            <p><strong>Example:</strong> A $8,000 folding carton die-line amortized across 50,000 units over 24 months = $0.16 per unit. If the per-unit production cost is $1.20, tooling adds 13% &mdash; borderline. At 100,000 units, tooling drops to $0.08 per unit (7%) &mdash; clearly justified. At 10,000 units, tooling is $0.80 per unit (67%) &mdash; stock is the right call.</p>
            <p>The mistake brands make: amortizing tooling against the first run only. A die-line that costs $0.80/unit on a 10,000-unit first run costs $0.08/unit across a 100,000-unit 24-month plan. Tooling is a multi-year asset, not a single-order cost. For a deeper dive on the full cost stack, see the <Link href="/guides/cost-moq-landed-cost-planning?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=tooling_cost_guide">Cost, MOQ, and Landed-Cost Planning guide</Link>.</p>

            <h2 id="tooling-ownership-and-portability">Tooling Ownership and Portability</h2>
            <p>If you paid for the tooling, you should own it. This seems obvious. It is not always the case.</p>
            <p>Three ownership models exist in practice:</p>
            <ul>
              <li><strong>Brand owns, stored at supplier.</strong> You paid for the tool. The supplier stores and maintains it. If you change suppliers, the tool ships to the new factory. This is the standard for packaging you intend to reorder. Get it in writing.</li>
              <li><strong>Supplier owns, brand has usage rights.</strong> The supplier invested in the tooling and amortizes it across your orders. You do not own the tool. If you leave, the tool stays. Common with stock tooling and with suppliers who subsidize tooling to win long-term contracts.</li>
              <li><strong>Shared investment.</strong> The supplier covers part of the tooling cost in exchange for a volume commitment. Ownership transfers to the brand after a specified volume threshold. Reasonable for first-time relationships where both parties share the risk.</li>
            </ul>
            <p><strong>Portability matters.</strong> Injection molds can physically move between factories. Die-lines are specific to the cutting equipment at the factory that built them &mdash; a die-line made for a Bobst cutter does not fit a different manufacturer&apos;s equipment. When evaluating tooling portability, confirm the tool is physically transferable, not just contractually owned.</p>

            <h2 id="shared-tooling-across-sku-families">Shared Tooling Across SKU Families</h2>
            <p>The biggest tooling efficiency is designing one structural tool that serves multiple SKUs. One die-line, multiple graphics. One box dimension, multiple insert configurations.</p>
            <p>This is the packaging design system approach: define a structural family (e.g., one folding carton die-line in three sizes), invest in tooling once, and amortize across every SKU that uses that structure. Each new product launch uses the existing tool with new graphic plates only &mdash; $500&ndash;$1,500 instead of $3,000&ndash;$10,000.</p>
            <p>Epicutis runs this model across 21+ SKUs. The initial tooling investment covered a structural family of carton and box formats. New product launches share the existing tools and add only graphic-specific plates. The result: 15% verified cost savings across the program, with a significant portion coming from tooling efficiency. See the <Link href="/work/epicutis?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=tooling_epicutis_case_study">full case study</Link>.</p>

            <h2 id="when-to-transition-from-stock-to-custom">When to Transition from Stock to Custom</h2>
            <p>The transition checklist:</p>
            <ul>
              <li><strong>Volume exceeds breakeven.</strong> Your forward 24-month plan puts per-unit tooling below 10% of production cost.</li>
              <li><strong>Stock formats constrain the product.</strong> The product does not fit standard dimensions, or the closure mechanism does not protect the formula.</li>
              <li><strong>Shelf differentiation matters.</strong> You are competing in a retail environment where structural uniqueness drives purchase consideration (e.g., prestige beauty at Sephora or Nordstrom).</li>
              <li><strong>You are launching 3+ SKUs.</strong> Shared custom tooling across a SKU family is more efficient than paying stock premiums on each.</li>
              <li><strong>You are preparing for retail.</strong> Retail compliance requirements (case-pack dimensions, display-ready packaging, specific barcode placement zones) may require custom structural engineering that stock formats cannot accommodate.</li>
            </ul>
            <p>The Artilect case study demonstrates the reverse transition: moving from premium custom rigid boxes to engineered folding cartons as the brand matured. The result was 20% cost reduction and 95% material reduction &mdash; because the custom rigid tooling that was right at launch was no longer right at volume. See the <Link href="/work/artilect-packaging-reduction?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=tooling_artilect_case_study">full case study</Link>.</p>
      </div>
        </div>
      </div>

            <p>Not sure whether your current tooling is earning its cost? A <Link href="/packaging-audit">packaging audit</Link> can evaluate your format-to-volume fit and identify where stock or shared tooling would reduce your per-unit cost.</p>

      <BlogFAQ
        title="Custom Packaging Tooling FAQ"
        faqs={[
          { question: 'Can I use stock packaging and still have a premium look?', answer: 'Yes. Stock structures with custom graphics, premium finishes (soft-touch lamination, foil stamping, spot UV), and high-quality inserts can achieve a premium presentation without custom tooling. Most DTC beauty brands start here and transition to custom tooling after volume justifies the investment.' },
          { question: 'How long does custom tooling take?', answer: 'Tooling fabrication typically takes 2-4 weeks after design approval. Injection molds for bottles and jars take 4-8 weeks. Die-lines for folding cartons are fastest at 1-2 weeks. Add 1-2 weeks for sample production and approval from the new tool before mass production begins.' },
          { question: 'Do I own the tooling if I paid for it?', answer: 'You should, but only if the contract says so. Get tooling ownership in writing before paying. Confirm the tool is physically transferable to another factory, not just contractually yours. Some die-lines are equipment-specific and cannot be moved.' },
          { question: 'What is the cheapest way to get custom packaging?', answer: 'Start with stock structures and invest in graphics and finishes. A stock folding carton with foil stamping and soft-touch lamination costs $0 in tooling and delivers strong shelf presence. When volume grows, transition to custom die-lines that optimize material usage and fit your product precisely.' },
          { question: 'Can tooling be shared across multiple products?', answer: 'Yes, and this is the most efficient approach for multi-SKU brands. Design one structural family with shared die-lines, then vary graphics and inserts per SKU. Each new launch adds only graphic plates ($500-$1,500) instead of full tooling ($3,000-$10,000+).' },
        ]}
        ctaText="Book a Packaging Consultation"
        ctaProjectType="Custom Packaging"
      />

      <div className="blog-conclusion">
            <h2 id="tooling-is-a-volume-decision">Tooling Is a Volume Decision,<br /><em>Not a Brand Decision</em></h2>
            <p>Custom tooling does not make your packaging better. It makes your packaging yours. Whether that distinction is worth $5,000 or $50,000 depends entirely on the volume that will run through it.</p>
            <p>Start with the math. If the math works, invest. If it does not, stock molds are not a compromise &mdash; they are the right engineering decision for your current scale.</p>
      </div>

      <RelatedContent currentSlug="custom-packaging-tooling-investment" currentTag="Pricing" />

      <section className="ctas">
        <div className="ctai">
          <h2 id="not-sure-about-tooling">Not Sure Whether Custom<br /><em>Tooling Makes Sense?</em></h2>
          <p>Tell us your product, volume plan, and timeline. We&apos;ll calculate the breakeven and recommend the right tooling strategy.</p>
          <button type="button" className="bi" onClick={() => openModal('Custom Packaging', 'blog-bottom-cta')}>Get a Tooling Recommendation</button>
        </div>
      </section>
    </>
  )
}
