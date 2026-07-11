'use client'

import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import BlogFAQ from '@/components/BlogFAQ'

export default function PostClient() {
  const { openModal } = useModal()

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Compliance</div>
        <h1>SB 54 Packaging Compliance for Beauty Brands</h1>
        <p>What to do before the 2027 window</p>
        <div className="blog-meta">
          <span>Jordan Harper</span>
          <span>&middot;</span>
          <span>May 21, 2026</span>
          <span>&middot;</span>
          <span>11 min read</span>
        </div>
      </div>

      <div className="blog-body">
            <p>SB 54 packaging compliance for beauty brands starts with a full packaging audit: primary containers, secondary cartons, inserts, labels, shippers, and every plastic component used for products sold into California. The law is not just a plastics issue. It is a packaging data issue.</p>
            <p>Beauty brands are exposed because the category uses layered packaging. A serum may have a glass bottle, plastic dropper, paper carton, foil stamp, insert, label, e-commerce shipper, tape, and void fill. SB 54 forces brands to understand that system component by component.</p>
            <p>The brands that wait for a final retailer request will be late. The brands that start now will already know what needs to change, what can stay, and what documentation they can defend.</p>

            <div className="blog-takeaways">
              <h4>Key Takeaways</h4>
              <ul>
                <li>SB 54 is California&apos;s extended producer responsibility law for packaging and single-use plastic food service ware.</li>
                <li>Beauty brands should audit primary, secondary, and tertiary packaging now, not when a retailer asks for documentation.</li>
                <li>The practical 2027 work is registration, data readiness, supplier documentation, and early material transition planning.</li>
                <li>By 2032, California is targeting major outcomes including 25% single-use plastic source reduction and 65% recycling of covered material.</li>
                <li>Multi-component beauty packaging needs a component-level audit. One recyclable carton does not make the full system compliant.</li>
              </ul>
            </div>

            <h2>What Is SB 54 in Plain English?</h2>
            <p>SB 54 is California&apos;s Plastic Pollution Prevention and Packaging Producer Responsibility Act. CalRecycle describes it as an extended producer responsibility program for packaging and single-use plastic food service ware across every sector of the economy.</p>
            <p>Extended producer responsibility means producers carry more responsibility for what happens to packaging after the product is sold. The burden shifts away from cities and consumers alone and toward the companies placing covered packaging into the market.</p>
            <p>For beauty brands, the takeaway is simple:</p>
            <p>You need to know what your packaging is made of, how much of it you sell into California, whether it is recyclable or compostable, and what proof supports those claims.</p>
            <p>This is not work a brand should do from memory. It requires supplier documentation.</p>

            <h2>Does SB 54 Apply to Beauty Brands?</h2>
            <p>SB 54 can apply to beauty brands that sell covered packaging into California, even if the brand is based somewhere else. If your products are sold through California retailers, shipped to California consumers, or distributed nationally through channels that include California, the packaging needs to be evaluated.</p>
            <p>The biggest misconception is location.</p>
            <p>&ldquo;We&apos;re not based in California&rdquo; is not the right test. The better question is: does our packaging enter the California market?</p>
            <p>Beauty brands should assume exposure if they sell through:</p>
            <ul>
              <li>DTC channels shipping to California</li>
              <li>National retail chains with California stores</li>
              <li>Amazon or other marketplaces serving California customers</li>
              <li>Beauty specialty retailers</li>
              <li>Subscription boxes or promotional kits shipped into California</li>
            </ul>
            <p>That does not mean every brand has the same reporting burden or compliance path. It means the packaging should be audited early enough to understand risk.</p>

            <h2>The 2027 Window: What Brands Should Prepare For Now</h2>
            <p>The phrase &ldquo;2027 deadline&rdquo; gets used loosely, so we should be precise.</p>
            <p>SB 54&apos;s long-range outcomes build toward 2032. But the practical work starts earlier. Producers, producer responsibility organization activity, reporting systems, covered material lists, and implementation planning all start before the 2032 endpoint.</p>
            <p>For beauty brands, 2027 should be treated as a readiness window.</p>
            <p>By then, your team should have:</p>
            <ul>
              <li>A packaging bill of materials by SKU</li>
              <li>Supplier documentation for plastic, paper, labels, coatings, and inserts</li>
              <li>Recyclability or compostability status for each component</li>
              <li>Packaging weight by material type</li>
              <li>PCR content documentation where applicable</li>
              <li>A list of mixed-material components that need redesign</li>
              <li>A transition plan for risky structures</li>
            </ul>
            <p>This is not the year to start guessing. It is the year to make the packaging data usable.</p>
            <p>CalRecycle&apos;s permanent SB 54 regulations were approved in 2026, and the producer responsibility structure is now moving from theory into execution. That means brand teams should stop treating this as distant policy and start treating it as operational planning.</p>

            <h2>The Primary, Secondary, and Tertiary Packaging Audit</h2>
            <p>Beauty brands need to audit packaging in three layers.</p>

            <h3>Primary Packaging: Bottles, Jars, Tubes, Pumps, Droppers</h3>
            <p>Primary packaging touches or contains the formula. It is usually the hardest layer to change because material compatibility matters.</p>
            <p>Audit these components:</p>
            <ul>
              <li>Bottle, jar, tube, compact, or pouch</li>
              <li>Cap, pump, sprayer, dropper, or applicator</li>
              <li>Liners, seals, wipers, reducers, gaskets</li>
              <li>Labels and adhesives</li>
              <li>Decoration, coatings, inks, and sleeves</li>
            </ul>
            <p>The compliance question is not just &ldquo;is this recyclable?&rdquo; It is &ldquo;is the full assembled component recoverable in practice?&rdquo; A recyclable PET bottle with a non-compatible pump or full-body shrink sleeve may create a different answer than the bottle alone.</p>

            <h3>Secondary Packaging: Cartons, Inserts, Sleeves, Rigid Boxes</h3>
            <p>Secondary packaging carries shelf presence, compliance copy, product education, and brand experience. It is also where many beauty brands can make faster improvements.</p>
            <p>Audit these components:</p>
            <ul>
              <li>Folding cartons</li>
              <li>Rigid boxes</li>
              <li>Paperboard sleeves</li>
              <li>Foam, pulp, paperboard, or thermoformed inserts</li>
              <li>Plastic windows</li>
              <li>Magnets, ribbons, pull tabs, or mixed decorative elements</li>
              <li>Foil, lamination, soft-touch, and specialty coatings</li>
            </ul>
            <p>This layer is where mixed-material choices create problems. A paperboard carton is easier to defend than a rigid box with magnets, foam, plastic windows, and laminated wrap.</p>

            <h3>Tertiary Packaging: Shippers, Void Fill, Tape, Retail Displays</h3>
            <p>Tertiary packaging moves the product through the supply chain. It is easy to ignore because the customer may never see all of it. Compliance still cares.</p>
            <p>Audit these components:</p>
            <ul>
              <li>E-commerce mailers and shippers</li>
              <li>Corrugated cases</li>
              <li>Void fill</li>
              <li>Pallet wrap</li>
              <li>Tape</li>
              <li>Retail displays or trays</li>
              <li>Shipment labels and protective materials</li>
            </ul>
            <p>For DTC-heavy beauty brands, tertiary packaging can represent a meaningful share of packaging weight. A beautiful primary package does not offset an overbuilt shipper.</p>
            <p>For a broader material selection framework, use the <Link href="/guides/material-decision-framework?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=sb54_material_decision_framework">Material Decision Framework</Link>.</p>

            <h2>What SB 54 Means for Packaging Design</h2>
            <p>SB 54 should change how beauty brands design packaging. Not by making everything plain. By making every component easier to document, recover, and justify.</p>

            <h3>Mono-Material Becomes the Default Starting Point</h3>
            <p>Mono-material packaging is easier to explain and easier to process than mixed-material packaging. It does not solve every problem, but it reduces complexity.</p>
            <p>Examples:</p>
            <ul>
              <li>Paperboard carton without plastic window</li>
              <li>Mono-PP or mono-PE components where possible</li>
              <li>Aluminum components designed without incompatible mixed inserts</li>
              <li>Paperboard inserts instead of foam where performance allows</li>
            </ul>
            <p>Mono-material design is not a style. It is a compliance advantage.</p>

            <h3>Mixed Materials Need a Strong Reason</h3>
            <p>Some mixed-material structures are worth it. A formula may need a specific barrier. A premium kit may need protection. A component may require a liner.</p>
            <p>But every mixed-material decision should have a reason.</p>
            <p>If the only reason is &ldquo;it looks nicer,&rdquo; the brand should test whether the same effect can be created with structure, print, or one controlled finish.</p>

            <h3>Claims Need Documentation</h3>
            <p>SB 54 and the FTC Green Guides both push the same discipline: prove the claim.</p>
            <p>If you claim PCR content, document the percentage. If you claim recyclable, understand collection and processing reality. If you claim compostable, know which composting environment the claim refers to and whether the whole package qualifies.</p>
            <p>Sustainability copy should be specific enough to survive a legal review and simple enough for a customer to understand.</p>
            <p>For the broader sustainability playbook, see our <Link href="/blog/sustainable-beauty-packaging-sb54?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=sb54_sustainable_packaging_guide">Sustainable Beauty Packaging guide</Link>.</p>

            <h2>What Beauty Brands Should Do Now</h2>
            <p>The right SB 54 plan starts with operational work, not a redesign mood board.</p>

            <h3>Step 1: Build a Packaging Bill of Materials</h3>
            <p>For every SKU, list every packaging component:</p>
            <ul>
              <li>Component name</li>
              <li>Material</li>
              <li>Supplier</li>
              <li>Weight</li>
              <li>Recycled content percentage</li>
              <li>Certification status</li>
              <li>Recyclability or compostability status</li>
              <li>Current claim on pack or website</li>
            </ul>
            <p>If you do not have this data, ask suppliers now. If they cannot provide it, that is a supplier risk.</p>

            <h3>Step 2: Identify High-Risk Components</h3>
            <p>High-risk components usually include:</p>
            <ul>
              <li>Multi-layer films</li>
              <li>Laminated paper structures</li>
              <li>Plastic windows in cartons</li>
              <li>Foam inserts</li>
              <li>Full-body shrink sleeves</li>
              <li>Mixed-material pumps</li>
              <li>Magnets in rigid boxes</li>
              <li>Claims without documentation</li>
            </ul>
            <p>These are not automatic failures. They are the first items to evaluate.</p>

            <h3>Step 3: Separate Fast Fixes from Long-Lead Changes</h3>
            <p>Fast fixes:</p>
            <ul>
              <li>Remove plastic windows</li>
              <li>Swap foam inserts for paperboard or pulp where feasible</li>
              <li>Reduce unnecessary sleeves or inserts</li>
              <li>Update claim language to be more specific</li>
              <li>Move to FSC-certified paperboard</li>
            </ul>
            <p>Long-lead changes:</p>
            <ul>
              <li>New primary packaging formats</li>
              <li>New closures or pumps</li>
              <li>Refillable systems</li>
              <li>Custom molds</li>
              <li>Formula compatibility retesting</li>
              <li>Major retail carton redesigns</li>
            </ul>
            <p>Do the fast fixes while the long-lead work moves through testing.</p>

            <h3>Step 4: Build a Supplier Documentation Folder</h3>
            <p>Keep all documentation in one place:</p>
            <ul>
              <li>Material specs</li>
              <li>Certifications</li>
              <li>PCR declarations</li>
              <li>FSC chain-of-custody documentation</li>
              <li>Recyclability or compostability support</li>
              <li>Supplier letters</li>
              <li>Testing data</li>
              <li>Packaging weights</li>
            </ul>
            <p>This makes retailer requests easier. It also prevents the team from rebuilding the same data every time someone asks.</p>

            <h3>Step 5: Redesign Before It Becomes Urgent</h3>
            <p>The worst time to redesign packaging is after a retailer, regulator, or internal deadline forces the issue.</p>
            <p>Packaging changes need sampling, testing, artwork updates, supplier coordination, and inventory planning. If a component needs to change, the brand needs runway.</p>
            <p>Start with the highest-volume SKU or highest-risk structure. One clean redesign can become the template for the rest of the line.</p>

            <h2>What Does SB 54 Compliance Cost?</h2>
            <p>There is no single SB 54 compliance cost because the cost depends on the existing packaging system.</p>
            <p>The first cost is usually not redesign. It is the audit. Someone has to identify every component, confirm the material, request supplier documentation, and map which claims are defensible. That work is much cheaper than changing tooling before you understand the exposure, especially for brands with multiple cartons, inserts, labels, and shipper formats.</p>
            <p>But the cost usually comes from five places:</p>
            <ol>
              <li><strong>Audit work.</strong> Gathering material data, weights, supplier specs, and claim support.</li>
              <li><strong>Material changes.</strong> Moving to FSC board, PCR content, mono-material design, or alternative inserts.</li>
              <li><strong>Tooling changes.</strong> New molds, dies, inserts, or structural adjustments.</li>
              <li><strong>Testing.</strong> Compatibility, transit, drop, compression, and finish testing.</li>
              <li><strong>Inventory transition.</strong> Running down old packaging while phasing in compliant structures.</li>
            </ol>
            <p>The cheapest brands to transition are the ones with simple packaging architecture. One carton. One bottle. One label. One supplier. Clear documentation.</p>
            <p>The most expensive brands to transition are the ones with fragmented packaging decisions across many SKUs, suppliers, materials, and claims.</p>
            <p>Complexity is the hidden cost.</p>

            <h2>Common SB 54 Mistakes Beauty Brands Make</h2>

            <h3>Mistake 1: Auditing Only the Primary Package</h3>
            <p>The bottle matters. So does the carton, insert, shipper, label, and retail display.</p>
            <p>Beauty brands need to audit the whole packaging system.</p>

            <h3>Mistake 2: Treating Recyclability as a Material Name</h3>
            <p>PET can be recyclable. Paperboard can be recyclable. Aluminum can be recyclable.</p>
            <p>That does not mean every package made with those materials is recyclable in practice. Decoration, labels, liners, coatings, pumps, and mixed materials matter.</p>

            <h3>Mistake 3: Making Broad Claims Too Early</h3>
            <p>&ldquo;Sustainable&rdquo; is not a claim strategy. It is a risk when it is unsupported.</p>
            <p>Use specific claims tied to proof: FSC-certified paperboard, 30% PCR PET, mono-material PP, refillable cartridge system.</p>

            <h3>Mistake 4: Waiting for Retailer Pressure</h3>
            <p>By the time a retailer asks for compliance documentation, the brand should already have it.</p>
            <p>Retailer pressure is not the starting point. It is the test.</p>

            <h3>Mistake 5: Redesigning Without Inventory Planning</h3>
            <p>Packaging changes create inventory issues. Old packaging, new packaging, artwork updates, regulatory copy, production timelines, and retail transition timing all need to be planned together.</p>
            <p>A compliance redesign that creates obsolete inventory is still a cost problem.</p>

            <h2>A Simple SB 54 Audit Table for Beauty Packaging</h2>
            <p>Use this as the first-pass audit structure. It is simple on purpose. The goal is to get every component out of someone&apos;s memory and into a format the team can actually use.</p>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>Packaging Layer</th>
                    <th>What to List</th>
                    <th>What to Flag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Primary</td>
                    <td>Bottle, jar, tube, cap, pump, dropper, label, liner</td>
                    <td>Mixed materials, full-body sleeves, unclear resin, missing supplier data</td>
                  </tr>
                  <tr>
                    <td>Secondary</td>
                    <td>Carton, rigid box, insert, sleeve, window, foil, coating</td>
                    <td>Plastic windows, foam inserts, magnets, laminated wraps, unsupported claims</td>
                  </tr>
                  <tr>
                    <td>Tertiary</td>
                    <td>Shipper, void fill, tape, pallet wrap, retail display</td>
                    <td>Overbuilt mailers, non-recyclable void fill, excess material weight</td>
                  </tr>
                  <tr>
                    <td>Claims</td>
                    <td>On-pack copy, website copy, retailer sell sheets</td>
                    <td>Broad words like &ldquo;green,&rdquo; &ldquo;eco,&rdquo; &ldquo;sustainable,&rdquo; or &ldquo;recyclable&rdquo; without proof</td>
                  </tr>
                  <tr>
                    <td>Documentation</td>
                    <td>Supplier specs, certifications, PCR data, weight data</td>
                    <td>Missing percentages, expired certifications, no chain-of-custody records</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>This table will not finish the compliance work. It will show you where the work is.</p>
            <p>That matters because most packaging teams don&apos;t have a sustainability problem first. They have a visibility problem. They don&apos;t know how many materials are in the system, which supplier owns which component, or which claims are actually supported.</p>
            <p>Once the table is complete, the next step is prioritization. Start with high-volume SKUs, high-risk claims, and components that are expensive or slow to redesign. Those three filters tell you where to focus first.</p>

      </div>

      <BlogFAQ
        title="SB 54 Packaging Compliance FAQ"
        faqs={[
          { question: 'What is SB 54 packaging compliance for beauty brands?', answer: 'SB 54 packaging compliance means understanding whether your primary, secondary, and shipping packaging falls under California\'s covered material rules, documenting the materials, and planning changes for components that are difficult to recycle, compost, or defend.' },
          { question: 'Does SB 54 apply if my beauty brand is not based in California?', answer: 'It can. If your products are sold or shipped into California, your packaging may be exposed even if your company is based elsewhere.' },
          { question: 'What beauty packaging should we audit first for SB 54?', answer: 'Start with the highest-volume SKUs and the most complex packaging structures: pumps, mixed-material cartons, foam inserts, plastic windows, laminated wraps, and e-commerce shippers.' },
          { question: 'Can beauty brands still use multi-material packaging under SB 54?', answer: 'Some multi-material packaging may still be used, but every material choice needs a reason and documentation. Mixed-material structures are harder to recycle and harder to defend, so they should be reviewed early.' },
          { question: 'What should we do before the 2027 SB 54 window?', answer: 'Build a packaging bill of materials, gather supplier documentation, identify risky components, start fast material swaps, and create a redesign plan for long-lead packaging changes.' },
        ]}
        ctaText="Book a Packaging Consultation"
        ctaProjectType="SB 54 Compliance"
      />

      <div className="blog-body">
            <h2>The Bottom Line</h2>
            <p>SB 54 is not a reason to panic. It is a reason to get precise.</p>
            <p>Start with the packaging you already have. Map every component. Gather the proof. Identify what needs to change. Then redesign in the right order.</p>
            <p>If your team needs help translating SB 54 into a packaging roadmap, we can help.</p>
            <p><a href="https://calendly.com/logicpac/packaging-consultation?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=sb54_packaging_consultation" target="_blank" rel="noopener noreferrer">Book an SB 54 packaging consultation</a> and we&apos;ll help you build the audit before the redesign.</p>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Need an SB 54<br /><em>Packaging Audit?</em></h2>
          <p>Book a 30-minute call. We&apos;ll help you map materials, claims, and compliance risk &mdash; component by component.</p>
          <button className="bi" onClick={() => openModal('SB 54 Compliance')}>Book a Consultation</button>
        </div>
      </section>
    </>
  )
}
