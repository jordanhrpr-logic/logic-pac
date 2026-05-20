'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const jewelryFaqs = [
  { question: "What's the minimum order for custom jewelry boxes?", answer: 'Most custom rigid jewelry boxes start at 500–1,000 units per size. Pricing improves significantly at higher quantities, and we can run multiple sizes on a single production order.' },
  { question: 'Can you match our brand color across all jewelry box sizes?', answer: 'Yes. We run pre-production color proofs across every SKU so PU leather, paper wraps, foil stamping, and interior lining all match before mass production begins.' },
  { question: 'Do you produce holiday gift set packaging for jewelry brands?', answer: 'Yes — seasonal gift sets and brand collaboration kits are one of the most common entry points for jewelry brands working with us for the first time.' },
  { question: 'How much does custom jewelry box packaging cost?', answer: '$3–12 per unit depending on materials, hardware, finishing, and quantity. Comparable to what many brands pay for catalog boxes — with full customization included.' },
  { question: 'What materials do you use for jewelry packaging?', answer: 'PU leather, linen, velvet, specialty papers, rigid greyboard, and metal hardware (hinges, clasps, magnetic closures). Material selection depends on brand positioning and price point.' },
  { question: 'Can you handle watch and accessories packaging?', answer: 'We produce custom packaging for accessories and fine goods. Watch packaging is a smaller part of our focus — most watch manufacturers bundle packaging with the watch order — but we handle one-off and small-run programs.' },
]

const components = [
  { num: '01', title: 'Custom Jewelry Boxes', desc: 'Rigid set-up boxes with magnetic closure, hinged lids, metal hardware. PU leather, linen, velvet, specialty papers. From ring boxes to necklace cases — engineered to your product line.' },
  { num: '02', title: 'Inserts & Cushions', desc: 'Custom thermoformed, foam, or velvet-lined inserts designed to your exact product dimensions — rings, earrings, bracelets, pendants. Every piece sits exactly where it should.' },
  { num: '03', title: 'Brand-Consistent Finishing', desc: 'Foil stamping, embossing, debossing, custom color matching across all 4–6 box sizes. Every element — paper, PU, foil, lining — looks like it belongs together as a set.' },
  { num: '04', title: 'Holiday & Gift Sets', desc: 'Seasonal gift sets, advent calendars, brand collaboration kits. A contained first project — limited SKUs, clear timeline — that lets you test working with us before committing your core line.' },
  { num: '05', title: 'Quality Control', desc: 'Pre-production color proofs, material samples, and finish approvals. PU color vs. paper color vs. foil consistency verified before mass production — not after.' },
  { num: '06', title: 'Warehousing & Reorder', desc: 'Stock standard configurations in our SLC warehouse. Reorder without minimum wait times or ocean freight delays. Available after initial production run.' },
]

const portfolioItems = [
  { src: '/images/portfolio/jewelry/maor-collection.jpg', alt: 'MAOR Jewelry — complete custom packaging collection showing brand consistency across 6+ box sizes, ribbon, bags, and hang tags', caption: 'Full collection — 6 box sizes, one brand system' },
  { src: '/images/portfolio/jewelry/pearl-source-necklace.jpg', alt: 'The Pearl Source — custom necklace box with rose gold metal hardware and branded closure', caption: 'Metal hardware, rose gold accent, custom insert' },
  { src: '/images/portfolio/jewelry/made-by-mary-collection.jpg', alt: 'Made by Mary — multi-size jewelry box collection with book-style, hinged, and ring box formats', caption: 'Ring to necklace — every size matches' },
  { src: '/images/portfolio/jewelry/made-by-mary-advent.jpg', alt: 'Made by Mary — holiday jewelry advent calendar with 12 individually branded boxes', caption: 'Jewelry advent calendar — holiday gift set' },
  { src: '/images/portfolio/jewelry/oak-park-jewelry-collection.jpg', alt: 'Oak Park Jewelers — custom PU leather ring boxes in forest green and white with gold foil stamped logo and metal hardware', caption: 'PU leather, gold foil, dual colorway' },
  { src: '/images/portfolio/jewelry/oc-tanner-collection.jpg', alt: 'OC Tanner — white textured rigid jewelry boxes with silver foil monogram across multiple sizes', caption: 'Textured paper, silver foil, multi-size set' },
  { src: '/images/portfolio/jewelry/olive-ave-ring-boxes.jpg', alt: 'Olive Ave Jewelry — blush linen ring boxes with tone-on-tone embossed branding and hinged lid', caption: 'Linen wrap, tone-on-tone emboss, hinged ring box' },
  { src: '/images/portfolio/jewelry/lifevantage-watch-packaging.jpg', alt: 'LifeVantage — custom blue rigid watch boxes with branded interior print, velvet cushion insert, and magnetic closure', caption: 'Custom watch box — branded interior, velvet insert' },
]

export default function JewelryClient() {
  const { openModal } = useModal()
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % portfolioItems.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }, [])

  return (
    <>
      <div className="kph">
        <div className="kphv" style={{ background: 'linear-gradient(135deg,#0d1b2a,#1a2a3d,#2a1f2d)' }}>
          <Image src="/images/portfolio/jewelry/maor-collection.jpg" alt="Custom jewelry packaging collection — multiple box sizes with consistent branding" fill style={{ objectFit: 'cover' }} sizes="50vw" priority />
          <div>
            <div className="kvl">Custom Jewelry Packaging</div>
            <div className="kvt" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>Jewelry Packaging<br />That Matches Your<br /><em>Craftsmanship</em></div>
            <div className="kvr"></div>
            <div className="kvs">From 500 Units</div>
          </div>
        </div>
        <div className="kphc">
          <h1>Your Jewelry Deserves<br />Better Than a<br /><em>Catalog Box</em></h1>
          <p>Most jewelry brands pick packaging from a catalog. Limited colors, stock textures, and no consistency between the ring box and the necklace case. You&apos;re paying $6&ndash;10 per box and getting zero customization. We manufacture custom jewelry boxes built to your brand &mdash; every size, every finish, one cohesive collection.</p>
          <button className="bp" onClick={() => openModal('Jewelry Packaging')}>Request a Quote</button>
        </div>
      </div>

      <div className="incs">
        <div className="ey">What we produce</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Custom Packaging for Every Piece in Your Collection</h2>
        <div className="incg">
          {components.map(c => (
            <div key={c.num} className="ii">
              <div className="iin">{c.num}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="jpf">
        <div className="ey">Jewelry Packaging</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>Jewelry Packaging We&apos;ve Produced</h2>
        <div className="jpcar">
          <button className="jpcar-arrow jpcar-prev" onClick={prevSlide} aria-label="Previous project">&#8249;</button>
          <div className="jpcar-viewport">
            <div className="jpcar-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {portfolioItems.map((item, i) => (
                <div key={i} className="jpcar-slide">
                  <div className="jpcar-img">
                    <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 80vw" />
                  </div>
                  <p className="jpcar-cap">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="jpcar-arrow jpcar-next" onClick={nextSlide} aria-label="Next project">&#8250;</button>
        </div>
        <div className="jpcar-dots">
          {portfolioItems.map((_, i) => (
            <button key={i} className={`jpcar-dot${i === currentSlide ? ' act' : ''}`} onClick={() => setCurrentSlide(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </section>

      <div className="hr"></div>

      <div className="kcr">
        <div className="seo">
          <h2>Custom Packaging for Jewelry Brands</h2>
          <p>Jewelry packaging is the most detail-sensitive category in custom packaging. The box is the first physical touchpoint between your brand and the customer. For a piece that retails at $200+, the unboxing has to match the value inside.</p>

          <h3>Why Jewelry Brands Need Custom Packaging Instead of Catalog Boxes</h3>
          <p>The core frustration for most jewelry brands isn&apos;t price &mdash; it&apos;s consistency. You might have 4&ndash;6 box sizes across rings, earrings, bracelets, necklaces, and pendants. When those come from a catalog, you&apos;re picking from whatever&apos;s available &mdash; &quot;this color is close to ours&quot; or &quot;this texture is close enough.&quot; The result: boxes that don&apos;t match each other, materials that don&apos;t match your brand, and a collection that looks assembled, not designed.</p>
          <p>Custom manufacturing solves this by producing every box size from the same materials, same finishes, and same brand elements in a single production run.</p>
          <ul>
            <li>Custom color matching across every box size in your collection</li>
            <li>Brand-specific materials &mdash; PU leather, linen, velvet, specialty papers</li>
            <li>Metal hardware (hinges, magnetic closures, clasps) matched to your aesthetic</li>
            <li>Foil stamping, embossing, and interior printing consistent across all SKUs</li>
          </ul>

          <h3>How Much Does Custom Jewelry Packaging Cost?</h3>
          <p>Custom jewelry boxes typically range from $3&ndash;$12 per unit depending on materials, hardware, finishing, and quantity. Most jewelry brands are already paying $6&ndash;$10 per box for catalog options with no customization. Custom manufacturing at comparable or better pricing is possible through direct factory relationships &mdash; no distributor markup, no catalog middleman.</p>

          <h3>Holiday Gift Sets: The Easiest Way to Start</h3>
          <p>Switching your core packaging line is a big decision when you&apos;re already at volume. Gift sets aren&apos;t. A holiday gift set or brand collaboration kit is a contained project &mdash; limited SKUs, clear timeline, defined quantity &mdash; that lets both sides test the working relationship before a full-collection commitment. It&apos;s the most common entry point for jewelry brands we work with.</p>

          <h3>Jewelry Packaging Production Timeline</h3>
          <p>Structural tooling (4&ndash;6 wks) + sample approval (2&ndash;4 wks) + mass production (6&ndash;10 wks) + ocean freight and customs (6&ndash;8 wks) = 4&ndash;6 months total. For holiday retail, that means starting the conversation no later than April or May.</p>
        </div>
        <div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Jewelry Packaging FAQs"
            faqs={jewelryFaqs}
            ctaText="Book a Jewelry Consultation"
            ctaProjectType="Jewelry Packaging"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Stop Settling for<br /><em>Close Enough</em></h2>
          <p>Book a 30-minute call. Bring your current packaging &mdash; we&apos;ll show you what custom manufacturing looks like at your volume and price point.</p>
          <button className="bi" onClick={() => openModal('Jewelry Packaging')}>Book a Jewelry Consultation</button>
        </div>
      </section>
    </>
  )
}
