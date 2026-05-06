'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import Image from 'next/image'

const tocSections = [
  { id: 'why', label: 'Why refillables matter now' },
  { id: 'models', label: 'The three models' },
  { id: 'works', label: 'When refillables work' },
  { id: 'theater', label: "When they're theater" },
  { id: 'economics', label: 'Unit economics' },
  { id: 'behavior', label: 'Consumer behavior data' },
  { id: 'channel', label: 'Channel & retailer reality' },
  { id: 'pitfalls', label: 'Common pitfalls' },
  { id: 'framework', label: 'Decision framework' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: "What's the cheapest path to a refillable hero SKU?",
    answer: 'Aluminum primary + aluminum or PE refill cartridge. Mid-tier upfront cost, defensible recyclability story, and supply chain is well-established. Glass is more premium but adds freight and breakage exposure.',
  },
  {
    question: 'Should we launch a refill at the same time as the primary?',
    answer: 'Almost always no. Launch the primary, build customer loyalty, then introduce the refill 6-12 months in. The refill is a retention play, not an acquisition play.',
  },
  {
    question: 'How do we communicate the system without overclaiming?',
    answer: 'Show the math. "Each refill saves 65% of the packaging weight of a new bottle." Avoid the word "sustainable" unqualified -- the EU ECGT directive (effective September 2026) restricts unsupported claims.',
  },
  {
    question: 'Is refillability worth pursuing for a mass-tier brand?',
    answer: 'Rarely with a primary-refill model. Pod/cartridge models can work at mass tier (Wild, Bite). Test pod compatibility with retailers before committing to tooling.',
  },
  {
    question: 'How do we audit our existing refillable system?',
    answer: "Three numbers: refill adoption rate, primary durability (cycles per primary), end-of-life recovery (% of primaries returned or recycled). If any of those are below industry benchmarks, the system isn't delivering.",
  },
]

export default function RefillableClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
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

  return (
    <>
      <div className="phdr">
        <div className="phdr-inner">
          <div className="ey">Logic Pac &middot; Refillable Strategy</div>
          <h1>The beauty refillable playbook. <em>When it works &mdash; and when it&apos;s theater.</em></h1>
          <p className="phdr-lede">Refillables are the most-marketed sustainability play in beauty and the most-misunderstood. The honest version: refillability only delivers an environmental win when customers actually refill. Here&apos;s how to design systems that earn that adoption.</p>
          <div className="phdr-meta">
            <span>11 min read</span>
            <span>Updated April 2026</span>
            <span>Sustainability Strategy</span>
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

            <h2 id="why"><span className="num">01.</span>Why refillables matter now</h2>
            <p>Three forces are converging in 2026 to make refillability a serious strategic question for beauty brands:</p>
            <ul>
              <li><strong>Regulation.</strong> The EU PPWR (effective August 2026) introduces minimum reuse targets for certain packaging types and rewards systems that reduce single-use volume.</li>
              <li><strong>Retailer pressure.</strong> Major beauty retailers &mdash; Sephora, Ulta, John Lewis, Selfridges &mdash; have all published packaging sustainability scorecards that score refillable systems higher than single-use.</li>
              <li><strong>Consumer signal.</strong> Charlotte Tilbury, Hourglass, La Mer, Chanel, and A&euml;sop have all made refillable hero SKUs commercial, not experimental. Refillability is now a category expectation in prestige.</li>
            </ul>
            <p>The strategic question for most brands isn&apos;t <em>whether</em> to introduce a refillable. It&apos;s <em>which model, on which SKUs, with what infrastructure</em> &mdash; and whether the math actually works.</p>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>The three refillable models &mdash; and the supply chain each one demands</li>
                <li>When refillability earns its claim, and when it&apos;s worse than single-use</li>
                <li>Unit economics: the upfront premium, the refill margin, the breakeven point</li>
                <li>Real adoption data and the 40% threshold every brand should know</li>
                <li>A decision framework for picking the right model for your category</li>
              </ol>
            </div>

            <Image src="/images/guides/portfolio-modular-kit-system.jpg" alt="Epicutis modular packaging kit system with drawer boxes and multiple product components" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="models"><span className="num">02.</span>The three refillable models</h2>

            <h3>Model 1 &middot; Drop-in refill</h3>
            <p>Customer keeps the primary container; replaces the formula. Most common in foundation, fragrance, deodorant, and prestige skincare. Customer purchases a refill cartridge or pouch.</p>
            <ul>
              <li><strong>Examples:</strong> Hourglass Curator foundation, Chanel No. 5 fragrance refill, La Mer The Treatment Lotion refill</li>
              <li><strong>Strength:</strong> highest per-refill margin lift, strong brand stickiness, cleanest sustainability claim</li>
              <li><strong>Weakness:</strong> requires durable primary; refills must be perfectly compatible</li>
            </ul>

            <h3>Model 2 &middot; Pod / cartridge swap</h3>
            <p>Customer keeps a base device or applicator; swaps a sealed pod or cartridge. Common in deodorant, mouthcare, color cosmetics.</p>
            <ul>
              <li><strong>Examples:</strong> Wild deodorant, Bite toothpaste, Hourglass Confession lipstick</li>
              <li><strong>Strength:</strong> hygiene-friendly, factory-sealed pods, easy retail SKU</li>
              <li><strong>Weakness:</strong> pod itself is still single-use packaging; sustainability story depends on what the pod is made of</li>
            </ul>

            <h3>Model 3 &middot; Bring-your-own / bulk fill</h3>
            <p>Customer brings the primary container back to a fill station (in-store or DTC return-and-refill). Common in indie beauty, body care, and low-volume prestige.</p>
            <ul>
              <li><strong>Examples:</strong> A&euml;sop in-store refill, Loop reusable systems, Plaine Products mail-back refill</li>
              <li><strong>Strength:</strong> strongest theoretical sustainability footprint</li>
              <li><strong>Weakness:</strong> hardest infrastructure to scale; consumer adoption is the bottleneck</li>
            </ul>

            <Image src="/images/guides/refillable-system-diagram.png" alt="Three refillable packaging architectures — cartridge pod-swap, pump-swap, and pour-refill systems compared" width={800} height={450} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="works"><span className="num">03.</span>When refillables work</h2>
            <p>Refillability earns its sustainability claim when the system delivers real reuse at meaningful scale. The conditions that have to be true:</p>
            <ul>
              <li><strong>High repurchase frequency.</strong> If customers replace the product every 2&ndash;3 months, the refill economics work. If it&apos;s an annual purchase, the refill story is weak.</li>
              <li><strong>Hero SKU loyalty.</strong> Refillables succeed inside loyal customer relationships. Trial-stage products fail at refill &mdash; customers want flexibility.</li>
              <li><strong>Premium price point.</strong> The upfront primary container premium needs margin headroom. Mass-tier products rarely support the unit economics.</li>
              <li><strong>Container durability.</strong> Glass or aluminum primaries last hundreds of refill cycles. Plastic primaries degrade and undermine the claim.</li>
              <li><strong>Channel infrastructure.</strong> A refill SKU you can&apos;t keep in stock at retail is a refill SKU customers won&apos;t adopt.</li>
            </ul>

            <h2 id="theater"><span className="num">04.</span>When refillables are theater</h2>
            <p>Refillability becomes greenwashing when:</p>
            <ul>
              <li>The primary container is plastic and weighs more than two single-use units combined.</li>
              <li>The refill itself is a multi-material laminate pouch that can&apos;t be recycled.</li>
              <li>The product is a one-time or annual purchase (refill never happens).</li>
              <li>The refill SKU is unavailable, hard to find, or significantly more expensive than the original.</li>
              <li>The brand markets the system as &ldquo;refillable&rdquo; without disclosing the adoption rate.</li>
            </ul>

            <div className="callout">
              <p>Below 40% refill adoption, a heavier primary container can produce a worse carbon footprint than single-use. The system has to actually run to deliver the claim.</p>
            </div>

            <h2 id="economics"><span className="num">05.</span>The unit economics</h2>
            <p>Below is a simplified model for a $48 retail prestige skincare SKU comparing single-use to a glass-primary refill system. Numbers are illustrative &mdash; your category will vary.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Single-use</th>
                    <th>Refillable (glass primary + cartridge)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Retail price</strong></td>
                    <td>$48.00</td>
                    <td>$54 primary / $32 refill</td>
                  </tr>
                  <tr>
                    <td><strong>Packaging cost (primary)</strong></td>
                    <td>$1.40</td>
                    <td>$3.20</td>
                  </tr>
                  <tr>
                    <td><strong>Packaging cost (refill)</strong></td>
                    <td>&mdash;</td>
                    <td>$0.55</td>
                  </tr>
                  <tr>
                    <td><strong>Year-1 packaging spend (4 purchases)</strong></td>
                    <td>$5.60</td>
                    <td>$3.20 + (3 &times; $0.55) = $4.85</td>
                  </tr>
                  <tr>
                    <td><strong>Year-2 spend (assumes refill adoption)</strong></td>
                    <td>$5.60</td>
                    <td>4 &times; $0.55 = $2.20</td>
                  </tr>
                  <tr>
                    <td><strong>Margin lift on refills (Year-2+)</strong></td>
                    <td>&mdash;</td>
                    <td>Approx. 3&ndash;6 percentage points per refill</td>
                  </tr>
                  <tr>
                    <td><strong>Breakeven on primary investment</strong></td>
                    <td>&mdash;</td>
                    <td>~2 refill cycles, conditional on adoption</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The math depends entirely on adoption. At 70% refill adoption, the system is materially more profitable than single-use. At 25% adoption, you&apos;ve raised primary cost without recovering it &mdash; and you&apos;ve raised your carbon footprint while you&apos;re at it.</p>

            <h2 id="behavior"><span className="num">06.</span>What consumer behavior data tells us</h2>
            <ul>
              <li><strong>Adoption ceiling:</strong> mature refillable categories (fragrance, prestige skincare) are seeing 35&ndash;55% refill rates among brand-loyal buyers.</li>
              <li><strong>Trial buyers do not refill.</strong> Customers who try a product as a one-off rarely return for a refill. Refill economics live inside loyalty programs and retention loops.</li>
              <li><strong>Convenience drives adoption.</strong> Refills sold next to primaries, with subscription options and clear pricing, hit 2&ndash;3&times; higher adoption than refills hidden in DTC microsites.</li>
              <li><strong>Price gap matters.</strong> Refills priced 30&ndash;40% below the primary hit highest adoption. Smaller discounts (under 20%) underperform.</li>
            </ul>

            <h2 id="channel"><span className="num">07.</span>Channel and retailer reality</h2>
            <p>Refillable systems behave differently across channels:</p>
            <ul>
              <li><strong>DTC:</strong> easiest to launch, hardest to drive adoption. Subscription is your best mechanism.</li>
              <li><strong>Sephora / Ulta:</strong> shelf real estate is the issue. Two SKUs (primary + refill) compete for one facing. Make the price differential immediately legible.</li>
              <li><strong>Amazon:</strong> refills as a standalone listing struggle. Bundle with the primary on first purchase, then re-target refills.</li>
              <li><strong>In-store fill / bulk:</strong> only works at scale at brand-controlled retail. Retail partners have not embraced bring-your-own systems.</li>
            </ul>

            <h2 id="pitfalls"><span className="num">08.</span>Common pitfalls</h2>
            <ul>
              <li><strong>Refill SKU stockouts.</strong> If the refill is hard to buy, customers default back to a new primary and your sustainability claim collapses.</li>
              <li><strong>Cartridge incompatibility.</strong> Customers expect refills to work with the primary they already own. Spec drift between production runs ruins that.</li>
              <li><strong>Hygiene mistakes.</strong> Refillable systems for water-based formulas without preservation strategy can introduce contamination risk.</li>
              <li><strong>Over-engineering the primary.</strong> Heavier, more decorative primaries undermine the carbon math. Premium feel &ne; heavier weight.</li>
              <li><strong>Ignoring return logistics.</strong> Mail-back systems are romantic in theory and brutal in practice. Most brands abandon them inside 12 months.</li>
            </ul>

            <h2 id="framework"><span className="num">09.</span>The decision framework</h2>
            <p>Five questions, in order, before greenlighting a refillable program:</p>
            <ol>
              <li><strong>Does this SKU have repurchase frequency above 4&times;/year?</strong> If no, refill won&apos;t deliver the claim.</li>
              <li><strong>Is your customer base brand-loyal at this SKU?</strong> If trial-heavy, refill economics break.</li>
              <li><strong>Can your supply chain support a refill SKU at retail consistently?</strong> If stockouts are likely, don&apos;t launch yet.</li>
              <li><strong>Is the primary container glass, aluminum, or another durable material?</strong> Plastic primaries undercut the carbon claim.</li>
              <li><strong>Can you publish actual adoption data?</strong> If not, you&apos;re not ready to make the public sustainability claim.</li>
            </ol>
            <p>If you answered yes to all five, you&apos;re ready to design the system. If even one answer is no, you have a different problem to solve first &mdash; usually around customer retention, not packaging.</p>

          </div>
        </div>
      </div>

      <div className="guide-faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Still Have Questions?</h2>
            <p>We help beauty brands separate the refill systems that actually deliver from the ones that look good in a press release &mdash; and design programs that customers, retailers, and regulators all accept.</p>
          </div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Refillable System FAQs"
            faqs={faqs}
            ctaText="Book a Refillable Consultation"
            ctaProjectType="Guide - Refillable Consultation"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Design the Refill<br /><em>Right</em></h2>
          <p>The wrong refill system costs more to run than single-use and undercuts the sustainability claim you launched it on. Let&apos;s design one that works.</p>
          <button className="bi" onClick={() => openModal('Guide - Refillable Consultation')}>Book a Refillable Consultation</button>
        </div>
      </section>
    </>
  )
}
