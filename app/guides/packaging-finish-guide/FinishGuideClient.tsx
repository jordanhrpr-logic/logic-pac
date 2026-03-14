'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const tocSections = [
  { id: 'why-finishes', label: 'Why Finishes Matter' },
  { id: 'soft-touch', label: 'Soft-Touch Lamination' },
  { id: 'lamination-comparison', label: 'Matte vs. Soft-Touch vs. Gloss' },
  { id: 'foil-stamping', label: 'Foil Stamping' },
  { id: 'spot-uv', label: 'Spot UV Coating' },
  { id: 'embossing', label: 'Embossing & Debossing' },
  { id: 'combining', label: 'Combining Finishes' },
  { id: 'by-category', label: 'Finishes by Category' },
  { id: 'file-prep', label: 'File Prep Checklist' },
]

const finishFaqs = [
  { question: "What's the difference between soft-touch and matte lamination?", answer: 'Matte lamination reduces glare and provides a smooth, non-glossy surface. Soft-touch lamination adds a velvety, tactile texture that feels premium. Soft-touch costs more but creates a significantly more luxurious experience.' },
  { question: 'Can you combine spot UV and soft-touch lamination?', answer: "Yes, and it's one of the most popular finish combinations. The contrast between the velvety soft-touch base and the glossy raised spot UV creates a striking visual and tactile effect." },
  { question: "What's the minimum order for foil stamping?", answer: 'Foil stamping typically starts at 500 units due to die setup costs. The die itself is a one-time cost that can be reused for future orders.' },
  { question: "What's the difference between embossing and debossing?", answer: 'Embossing raises elements above the surface, creating a three-dimensional effect. Debossing presses elements into the surface, creating an indented effect. Both require a custom die.' },
  { question: 'Which finishes work best for beauty and cosmetic packaging?', answer: 'Soft-touch lamination with spot UV is the industry standard for premium beauty packaging. Foil stamping adds luxury positioning. The right combination depends on brand positioning, budget, and substrate.' },
  { question: 'How do I prepare files for specialty finishes?', answer: 'Spot UV and foil areas need a separate layer or spot color in your design file. Embossing requires vector artwork with clear depth specifications. Your packaging vendor should provide a finish-specific dieline template.' },
]

export default function FinishGuideClient() {
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
        <div className="ey inv">Reference Guide</div>
        <h1>The Definitive Guide to Packaging Finishes</h1>
        <p>Soft-Touch, Foil Stamp, Spot UV &amp; Emboss</p>
      </div>

      <div className="guide-wrap">
        <nav className="gtoc">
          <h4>Contents</h4>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </nav>

        <div className="guide-main">
          <div className="seo">
            <h2 id="why-finishes">Why Finish Selection Matters</h2>
            <p>The finish on a package is the first thing a customer touches and often the last thing they see before making a purchase decision. In a world where consumers judge quality by feel, the right finish communicates brand value more effectively than any printed message.</p>
            <p>Finishes influence three critical dimensions of brand perception:</p>
            <ul>
              <li><strong>Tactile quality:</strong> How the package feels in the hand &mdash; velvety, smooth, textured, or glossy</li>
              <li><strong>Visual distinction:</strong> How the package stands out on shelf, in photos, and on video</li>
              <li><strong>Perceived value:</strong> Whether the package feels worth the price point of the product inside</li>
            </ul>
            <p>The difference between a $20 product and a $60 product is often not the product itself &mdash; it&apos;s the packaging finish. Getting this right is one of the highest-leverage decisions in packaging development.</p>

            <h2 id="soft-touch">Soft-Touch Lamination</h2>
            <p>Soft-touch lamination (also called &ldquo;velvet lamination&rdquo; or &ldquo;peach skin&rdquo;) is a specialty film applied to printed surfaces that creates a velvety, matte texture. It&apos;s become the de facto standard for premium packaging across beauty, cosmetics, and luxury consumer brands.</p>

            <Image src="/images/portfolio/soft-touch-spot-uv.jpg" alt="Soft-touch lamination with spot UV contrast on custom packaging" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h3>How It Works</h3>
            <p>A thin film (typically 15&ndash;25 microns) is laminated to the printed sheet using heat and pressure. The film has a micro-textured surface that diffuses light and creates a tactile &ldquo;soft&rdquo; feel. It&apos;s applied after printing and before die-cutting.</p>

            <h3>Pros &amp; Cons</h3>
            <ul>
              <li><strong>Pro:</strong> Immediately premium feel &mdash; the single most impactful finish for perceived value</li>
              <li><strong>Pro:</strong> Reduces fingerprints compared to gloss</li>
              <li><strong>Pro:</strong> Creates a perfect base for spot UV contrast effects</li>
              <li><strong>Con:</strong> Susceptible to scuffing during transit (can be mitigated with proper packing)</li>
              <li><strong>Con:</strong> Costs 15&ndash;30% more than standard matte lamination</li>
              <li><strong>Con:</strong> Not food-safe without additional barrier coatings</li>
            </ul>

            <h3>Best Substrates</h3>
            <p>Soft-touch works best on coated art boards (C1S or C2S) between 300gsm and 400gsm. It can be applied to both rigid box wraps and folding cartons. Uncoated stocks absorb the adhesive differently and can result in inconsistent texture.</p>

            <h2 id="lamination-comparison">Matte vs. Soft-Touch vs. Gloss Lamination</h2>
            <p>These three lamination types account for the vast majority of packaging finishes. Here&apos;s how they compare.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Gloss</th>
                    <th>Matte</th>
                    <th>Soft-Touch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Appearance</strong></td>
                    <td>High-shine, reflective</td>
                    <td>Flat, non-reflective</td>
                    <td>Deep matte, velvety</td>
                  </tr>
                  <tr>
                    <td><strong>Feel</strong></td>
                    <td>Smooth, slick</td>
                    <td>Smooth, neutral</td>
                    <td>Textured, premium</td>
                  </tr>
                  <tr>
                    <td><strong>Fingerprints</strong></td>
                    <td>Highly visible</td>
                    <td>Moderate</td>
                    <td>Low visibility</td>
                  </tr>
                  <tr>
                    <td><strong>Scuff Resistance</strong></td>
                    <td>High</td>
                    <td>Medium</td>
                    <td>Lower (needs careful packing)</td>
                  </tr>
                  <tr>
                    <td><strong>Spot UV Contrast</strong></td>
                    <td>Low &mdash; both glossy</td>
                    <td>Good</td>
                    <td>Excellent &mdash; maximum contrast</td>
                  </tr>
                  <tr>
                    <td><strong>Cost Premium</strong></td>
                    <td>Baseline</td>
                    <td>+5&ndash;10%</td>
                    <td>+15&ndash;30%</td>
                  </tr>
                  <tr>
                    <td><strong>Best For</strong></td>
                    <td>Food, value brands</td>
                    <td>Clean, minimal design</td>
                    <td>Premium, luxury, beauty</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="foil-stamping">Foil Stamping (Hot Foil &amp; Cold Foil)</h2>
            <p>Foil stamping is the application of a thin metallic or pigmented film to specific areas of a package using heat, pressure, and a custom die. It creates a reflective, metallic effect that catches light and conveys luxury.</p>

            <Image src="/images/portfolio/foil-stamped-cylinder.jpeg" alt="Gold foil stamped custom packaging cylinder" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h3>Hot Foil vs. Cold Foil</h3>
            <p><strong>Hot foil stamping</strong> uses a heated die to transfer foil from a carrier film to the substrate. It produces the sharpest, most opaque metallic results and is the standard for luxury packaging. The die is a one-time cost, and the foil itself is relatively inexpensive per unit at production quantities.</p>
            <p><strong>Cold foil</strong> uses UV adhesive and a printing plate (rather than a heated die) to transfer foil. It&apos;s faster to set up and can achieve finer detail, but the metallic effect is slightly less opaque than hot foil. Cold foil is increasingly popular for folding cartons with detailed metallic graphics.</p>

            <h3>Foil Types</h3>
            <ul>
              <li><strong>Metallic foils:</strong> Gold, silver, rose gold, copper &mdash; the classic luxury finishes</li>
              <li><strong>Holographic foils:</strong> Rainbow, prismatic, or patterned effects that shift with viewing angle</li>
              <li><strong>Pigmented foils:</strong> Matte colors (white, black, red) with a foil-like sheen &mdash; useful for contrast on dark substrates</li>
              <li><strong>Specialty foils:</strong> Brushed metal, wood grain, or textured effects for unique brand expressions</li>
            </ul>

            <h3>Cost Drivers</h3>
            <ul>
              <li><strong>Die cost:</strong> $200&ndash;$800 one-time, depending on size and complexity</li>
              <li><strong>Coverage area:</strong> Larger foil areas use more material per unit</li>
              <li><strong>Foil type:</strong> Holographic and specialty foils cost 2&ndash;3x standard metallic</li>
              <li><strong>Quantity:</strong> Per-unit foil cost drops significantly at 1,000+ units</li>
            </ul>

            <h2 id="spot-uv">Spot UV Coating</h2>
            <p>Spot UV (ultraviolet) coating is a glossy, clear varnish applied to specific areas of a printed piece, then cured with UV light. It creates a raised, shiny effect that contrasts with the surrounding matte or soft-touch surface.</p>

            <h3>Inline vs. Offline Spot UV</h3>
            <p><strong>Inline spot UV</strong> is applied during the printing process on a press with an additional UV coating unit. It&apos;s cost-effective but produces a thinner, less dramatic effect. Best for large runs where subtle contrast is acceptable.</p>
            <p><strong>Offline spot UV</strong> (also called &ldquo;high-build&rdquo; or &ldquo;raised&rdquo; spot UV) is applied as a separate pass through a dedicated coating machine. It produces a thicker, more tactile effect with greater visual contrast. This is the version that creates the premium &ldquo;feel&rdquo; that impresses consumers.</p>

            <h3>File Preparation</h3>
            <ul>
              <li>Create a separate layer for spot UV areas in your design file</li>
              <li>Use a spot color (typically named &ldquo;Spot UV&rdquo; or &ldquo;Varnish&rdquo;) set to 100% coverage</li>
              <li>Ensure spot UV artwork is vector where possible for clean edges</li>
              <li>Avoid very thin lines (&lt;0.5pt) as they may not hold the UV coating</li>
              <li>Maintain at least 1mm of clearance from die-cut edges</li>
            </ul>

            <h3>Common Mistakes</h3>
            <ul>
              <li>Applying spot UV over gloss lamination (minimal contrast &mdash; both are shiny)</li>
              <li>Using spot UV on uncoated stock (the UV sinks into the paper)</li>
              <li>Designing spot UV areas with raster images instead of vectors (soft edges)</li>
              <li>Not accounting for registration tolerance (±0.5mm) on fine-detail elements</li>
            </ul>

            <h2 id="embossing">Embossing &amp; Debossing</h2>
            <p>Embossing and debossing create three-dimensional texture on a package surface using pressure and a custom metal die. They add a tactile dimension that no other finish can replicate.</p>

            <h3>Types of Emboss</h3>
            <ul>
              <li><strong>Blind emboss:</strong> No color or foil &mdash; just the raised texture. Subtle, sophisticated, and works on any substrate</li>
              <li><strong>Registered emboss:</strong> Aligned with printed artwork to add depth to logos or typography</li>
              <li><strong>Multi-level emboss:</strong> Multiple depth levels in a single die for complex, sculptural effects</li>
              <li><strong>Combination foil + emboss:</strong> Foil is stamped and embossed in a single pass, creating a raised metallic element. This is one of the most premium finish combinations available</li>
            </ul>

            <h3>Die Considerations</h3>
            <p>Embossing requires a matched set of male and female dies, typically machined from magnesium, copper, or brass. Die costs range from $300 to $1,500 depending on size, complexity, and the number of levels. Dies are durable and can be reused for thousands of impressions across multiple production runs.</p>

            <h2 id="combining">Combining Finishes</h2>
            <p>The most impactful packaging uses multiple finishes in combination. Here are the most popular and effective combinations.</p>

            <h3>The &ldquo;Luxury Stack&rdquo;</h3>
            <p>Soft-touch lamination + spot UV + foil stamping. This combination delivers maximum sensory impact: the velvety soft-touch base, the glossy raised spot UV elements, and the metallic foil accents create a package that looks and feels unmistakably premium.</p>

            <h3>Soft-Touch + Spot UV</h3>
            <p>The most popular premium combination. The extreme contrast between the matte, velvety soft-touch and the glossy, raised spot UV creates a striking visual and tactile effect. Use spot UV on logos, key imagery, or patterns for maximum impact.</p>

            <h3>Soft-Touch + Foil</h3>
            <p>Metallic foil on a soft-touch base creates a sophisticated contrast between the tactile matte surface and the reflective foil elements. This combination is the standard for luxury beauty and fragrance packaging.</p>

            <h3>Foil + Emboss</h3>
            <p>Combined in a single pass, this creates raised metallic elements that catch light and invite touch. It&apos;s the most premium-feeling finish combination and is used extensively in spirits, fine fragrance, and luxury goods packaging.</p>

            <h2 id="by-category">Finish Selection by Product Category</h2>
            <p>Different product categories have different finish conventions and expectations. Here&apos;s what works and why.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Standard Finish</th>
                    <th>Premium Finish</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Beauty &amp; Cosmetics</strong></td>
                    <td>Soft-touch + spot UV</td>
                    <td>Soft-touch + spot UV + foil</td>
                    <td>Soft-touch is almost expected in prestige beauty</td>
                  </tr>
                  <tr>
                    <td><strong>Skincare</strong></td>
                    <td>Matte lam + foil</td>
                    <td>Soft-touch + emboss + foil</td>
                    <td>Clean, clinical aesthetic with premium accents</td>
                  </tr>
                  <tr>
                    <td><strong>Tech &amp; Electronics</strong></td>
                    <td>Matte lam + spot UV</td>
                    <td>Soft-touch + emboss</td>
                    <td>Matte for clean, modern look; avoid excessive foil</td>
                  </tr>
                  <tr>
                    <td><strong>Food &amp; Beverage</strong></td>
                    <td>Gloss or matte lam</td>
                    <td>Matte lam + foil</td>
                    <td>Food-safe coatings required; soft-touch rarely used</td>
                  </tr>
                  <tr>
                    <td><strong>Luxury &amp; Spirits</strong></td>
                    <td>Soft-touch + foil + emboss</td>
                    <td>Full luxury stack</td>
                    <td>Every finish layer adds to shelf presence and gifting appeal</td>
                  </tr>
                  <tr>
                    <td><strong>Influencer Kits</strong></td>
                    <td>Soft-touch + foil</td>
                    <td>Full luxury stack</td>
                    <td>Finishes need to photograph and film well; see our <Link href="/guides/influencer-kit-playbook">Influencer Kit Playbook</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="file-prep">Spec Sheet &amp; File Prep Checklist</h2>
            <p>When preparing files for specialty finishes, use this checklist to avoid production issues.</p>

            <h3>General Requirements</h3>
            <ul>
              <li>Supply files in AI, PDF, or EPS format with all fonts outlined</li>
              <li>Include 3mm bleed on all edges</li>
              <li>Ensure all images are at least 300 DPI at final print size</li>
              <li>Convert all colors to CMYK (plus any Pantone spot colors)</li>
            </ul>

            <h3>Foil Stamping</h3>
            <ul>
              <li>Create foil areas as a separate spot color layer (e.g., &ldquo;FOIL&rdquo;)</li>
              <li>All foil artwork must be vector &mdash; no raster images</li>
              <li>Minimum line weight: 0.5pt positive, 1pt reverse</li>
              <li>Specify foil color and type (metallic, holographic, pigmented)</li>
            </ul>

            <h3>Spot UV</h3>
            <ul>
              <li>Create UV areas as a separate spot color layer (e.g., &ldquo;SPOT UV&rdquo;)</li>
              <li>Use vector artwork where possible for clean edges</li>
              <li>Minimum line weight: 0.5pt</li>
              <li>Allow 1mm clearance from die-cut and fold lines</li>
              <li>Specify inline or offline (high-build) UV</li>
            </ul>

            <h3>Embossing / Debossing</h3>
            <ul>
              <li>Supply artwork as vector outlines</li>
              <li>Specify depth (single-level, multi-level) and direction (emboss or deboss)</li>
              <li>If combining with foil, note whether foil + emboss should be a single pass</li>
              <li>Minimum element size: 1mm for blind emboss, 2mm for foil + emboss</li>
            </ul>

            <div className="guide-cta">
              <h3>Need Help Choosing Finishes?</h3>
              <p>Tell us about your project and we&apos;ll recommend the right finish combination for your brand, budget, and substrate.</p>
              <button className="bi" onClick={() => openModal('Guide - Finish Consultation')}>Book a Consultation</button>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Still Have Questions?</h2>
            <p>Here are the most common questions we get about packaging finishes. If you don&apos;t see your question, book a call and we&apos;ll give you a straight answer.</p>
          </div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Packaging Finish FAQs"
            faqs={finishFaqs}
            ctaText="Book a Finish Consultation"
            ctaProjectType="Guide - Finish Consultation"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Get the Finish<br /><em>Right</em></h2>
          <p>The right finish transforms packaging from good to unforgettable. Let&apos;s spec yours together.</p>
          <button className="bi" onClick={() => openModal('Guide - Finish Consultation')}>Book a Consultation</button>
        </div>
      </section>
    </>
  )
}
