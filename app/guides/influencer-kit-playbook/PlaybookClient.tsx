'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'

const tocSections = [
  { id: 'why-packaging', label: 'Why Packaging Is Content' },
  { id: 'anatomy', label: 'Anatomy of a Kit' },
  { id: 'structures', label: 'Kit Structures' },
  { id: 'finishes', label: 'Finishes That Pop' },
  { id: 'personalization', label: 'Personalization' },
  { id: 'timeline', label: 'Timeline & Planning' },
  { id: 'agencies', label: 'Working with Agencies' },
  { id: 'budget', label: 'Budget & MOQs' },
]

const playbookFaqs = [
  { question: "What's the minimum order for custom influencer kits?", answer: 'Most custom influencer kits start at 50 to 100 units. Pricing improves significantly at 500+ units. Simpler mailer configurations can sometimes start lower.' },
  { question: 'How long does it take to produce a custom influencer kit?', answer: 'Simpler configurations can ship in 6 weeks. Fully custom builds with rigid structures, specialty finishes, and custom inserts typically require 10 to 12 weeks.' },
  { question: 'What makes an influencer kit shareable?', answer: 'A distinctive outer structure, layered reveals that extend the filming moment, personalized elements like foil-stamped names, and high-quality materials that signal brand investment all drive organic sharing.' },
  { question: 'Can you personalize kits at scale with creator names?', answer: 'Yes. Options include foil-stamped names, custom stickers, variable-print inserts, and handwritten note cards. The right approach depends on your quantity and budget.' },
  { question: 'Do you work directly with PR agencies?', answer: 'Absolutely. Most of our influencer kit projects start with a brief from a PR agency or creative studio. We coordinate production and delivery without pulling in the end client.' },
  { question: "What's the typical budget range for influencer kits?", answer: 'Costs vary by structure and quantity. Simple mailer boxes start around $8\u201315 per unit at 500+. Fully custom rigid kits with specialty finishes range from $25\u201375+ per unit depending on complexity.' },
]

export default function PlaybookClient() {
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
        <div className="ey inv">Playbook</div>
        <h1>The Influencer Kit Playbook</h1>
        <p>How to Design PR Mailers That Get Posted</p>
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
            <h2 id="why-packaging">Why Packaging Is the Content</h2>
            <p>In the creator economy, packaging isn&apos;t just a container &mdash; it&apos;s the content itself. When an influencer opens a PR mailer on camera, the packaging is the first 15 seconds of content their audience sees. That moment determines whether the video gets made, gets posted, and gets engagement.</p>
            <p>Brands that invest in the packaging experience generate significantly more organic content per send. The return on a $40 custom kit versus a $10 standard mailer isn&apos;t 4x &mdash; it&apos;s often 10&ndash;50x in earned media value, because the premium kit gets posted and the standard one doesn&apos;t.</p>
            <ul>
              <li><strong>82% of consumers</strong> say packaging influences their perception of the brand</li>
              <li><strong>Unboxing videos</strong> are among the most-watched content categories on TikTok and YouTube</li>
              <li><strong>Creators report</strong> that premium packaging makes them more likely to feature a product organically</li>
              <li><strong>The cost per impression</strong> on a well-designed kit is a fraction of paid media costs</li>
            </ul>

            <h2 id="anatomy">Anatomy of a High-Performing Influencer Kit</h2>
            <p>Every kit that generates content follows the same structural logic: surprise, reveal, delight. Here&apos;s how each layer contributes to the unboxing moment.</p>

            <Image src="/images/portfolio/influencer-kits.jpg" alt="Custom influencer kit with branded packaging and layered reveals" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h3>The Outer Mailer</h3>
            <p>The outer box is the first impression. It needs to survive shipping, arrive clean, and set the tone before it&apos;s even opened. Options include corrugated mailer boxes with full-color printing, rigid magnetic closure boxes for luxury positioning, and drawer-style boxes for a dramatic reveal.</p>

            <h3>The Reveal Structure</h3>
            <p>The interior architecture is what makes the difference between &ldquo;nice packaging&rdquo; and &ldquo;I have to film this.&rdquo; Layer-by-layer reveals, magnetic lids that open slowly, ribbon lifts, and nested compartments all extend the filming moment and give creators more content to work with.</p>

            <Image src="/images/portfolio/velvet-interior-unboxing-kit.jpeg" alt="Velvet interior unboxing kit with custom inserts" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h3>Product Nesting</h3>
            <p>Products should be held securely and presented beautifully. Custom foam inserts, die-cut cardboard, or fabric-lined compartments each serve different brand positions. The key is that every product has a dedicated home that feels intentional.</p>

            <h3>Branded Fills &amp; Accessories</h3>
            <p>Custom tissue paper, branded ribbon, crinkle fill, fabric pouches, and seeded paper all reinforce brand identity. Every layer the creator pulls away is another second of content and another chance to show the brand&apos;s attention to detail.</p>

            <h3>Personalized Inserts</h3>
            <p>A card with the creator&apos;s name, a personalized note, or a custom product recommendation shows the relationship is real &mdash; not spray-and-pray. This drives emotional response and makes creators more likely to post.</p>

            <Image src="/images/portfolio/skincare-launch-pr-mailer.jpg" alt="Skincare brand launch PR mailer with custom packaging" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="structures">Choosing Your Kit Structure</h2>
            <p>The right structure depends on your budget, quantity, timeline, and brand positioning. Here&apos;s how the three most common options compare.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Structure</th>
                    <th>Best For</th>
                    <th>MOQ</th>
                    <th>Cost Range</th>
                    <th>Lead Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Rigid Magnetic Box</strong></td>
                    <td>Luxury positioning, high-value sends</td>
                    <td>200&ndash;500</td>
                    <td>$25&ndash;75/unit</td>
                    <td>10&ndash;12 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Corrugated Mailer</strong></td>
                    <td>Large sends, durability, cost efficiency</td>
                    <td>100&ndash;250</td>
                    <td>$8&ndash;20/unit</td>
                    <td>4&ndash;6 weeks</td>
                  </tr>
                  <tr>
                    <td><strong>Drawer Box</strong></td>
                    <td>Dramatic reveal, mid-luxury positioning</td>
                    <td>300&ndash;500</td>
                    <td>$20&ndash;50/unit</td>
                    <td>8&ndash;10 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong>Rigid magnetic boxes</strong> are the gold standard for influencer kits. The magnetic closure creates a slow, satisfying open that works perfectly on camera. The structure is substantial enough to feel premium and sturdy enough to be kept and reused &mdash; extending brand exposure beyond the unboxing moment.</p>
            <p><strong>Corrugated mailers</strong> are the workhorse of PR sends. They&apos;re cost-effective at higher quantities, print beautifully with full-color graphics, and survive shipping without issue. They won&apos;t feel as premium as rigid, but they&apos;re the right choice when you need to reach a larger list.</p>
            <p><strong>Drawer boxes</strong> offer a middle ground: a more dramatic reveal than a mailer, at a lower cost than full rigid. The slide-out mechanism creates a natural filming moment and works well for beauty and skincare brands.</p>

            <h2 id="finishes">Finishes That Pop on Camera</h2>
            <p>The right finish elevates a kit from &ldquo;professional&rdquo; to &ldquo;stunning.&rdquo; These are the finishes that photograph and film best.</p>

            <Image src="/images/portfolio/soft-touch-spot-uv.jpg" alt="Soft-touch lamination with spot UV finishing on custom packaging" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h3>Soft-Touch Lamination</h3>
            <p>A velvety, matte texture that feels luxurious to the touch. It photographs as a rich, deep matte and creates an immediate tactile impression when the box is first handled. This is the single most impactful finish for influencer kits.</p>

            <h3>Foil Stamping</h3>
            <p>Metallic foil (gold, silver, rose gold, holographic) catches light beautifully on camera. Use it for logos, creator names, or accent elements. The sheen creates a premium feel that&apos;s immediately recognizable in video content.</p>

            <Image src="/images/portfolio/foil-stamped-cylinder.jpeg" alt="Foil stamped custom packaging cylinder" width={800} height={500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h3>Spot UV</h3>
            <p>A glossy, raised coating applied to specific areas over a matte base. The contrast between the soft-touch matte background and the glossy spot UV creates a striking visual and tactile effect. Logos, patterns, and text all work well in spot UV.</p>

            <h3>Embossing &amp; Debossing</h3>
            <p>Raised or pressed elements add a three-dimensional quality that looks and feels premium. Blind emboss (no color, just texture) is subtle and sophisticated. Combined with foil, it creates one of the most luxurious finish combinations available.</p>

            <p>For a deep dive into every finish option, see our <Link href="/guides/packaging-finish-guide">Definitive Guide to Packaging Finishes</Link>.</p>

            <h2 id="personalization">Personalization at Scale</h2>
            <p>Personalization is what separates a mass send from a considered gift. Here are the most common approaches, ranked by cost and impact.</p>

            <h3>Foil-Stamped Names</h3>
            <p>Individual creator names stamped in metallic foil directly on the box. This is the highest-impact personalization option &mdash; it&apos;s visible on camera, feels bespoke, and is surprisingly affordable at 200+ units with a variable die setup.</p>

            <h3>Variable Digital Print</h3>
            <p>Digital printing allows unique artwork per unit &mdash; names, custom colors, or personalized product recommendations. Cost-effective at any quantity since there&apos;s no die involved, but the output is printed (not metallic).</p>

            <h3>Custom Stickers</h3>
            <p>Printed or foil stickers applied to a standard kit give the appearance of personalization at a fraction of the cost. Great for fast-turnaround campaigns where personalized names are important but the timeline doesn&apos;t allow for custom stamping.</p>

            <h3>Handwritten Notes</h3>
            <p>A handwritten note card (even if the &ldquo;handwriting&rdquo; is a custom font printed on premium stock) adds a personal touch that creators consistently call out in their content. This is the lowest-cost personalization option with high emotional impact.</p>

            <h2 id="timeline">Timeline &amp; Production Planning</h2>
            <p>Timing is the most common reason influencer kit projects go wrong. Here&apos;s what a realistic production schedule looks like.</p>

            <h3>The 12-Week Path (Fully Custom)</h3>
            <ul>
              <li><strong>Weeks 1&ndash;2:</strong> Brief, structural concept, and preliminary costing</li>
              <li><strong>Weeks 3&ndash;4:</strong> Structural prototyping and sample development</li>
              <li><strong>Weeks 5&ndash;6:</strong> Sample approval, revisions, final artwork</li>
              <li><strong>Weeks 7&ndash;10:</strong> Mass production (rigid structures, specialty finishes)</li>
              <li><strong>Weeks 11&ndash;12:</strong> Kitting, assembly, and fulfillment</li>
            </ul>

            <h3>The 6-Week Path (Expedited)</h3>
            <ul>
              <li><strong>Week 1:</strong> Brief, structure selection from existing tooling, artwork</li>
              <li><strong>Week 2:</strong> Sample approval (digital proof for standard structures)</li>
              <li><strong>Weeks 3&ndash;5:</strong> Production (mailer boxes or existing rigid tooling)</li>
              <li><strong>Week 6:</strong> Kitting and fulfillment</li>
            </ul>

            <p><strong>Key planning tips:</strong></p>
            <ul>
              <li>Start conversations 16+ weeks before your campaign launch for fully custom work</li>
              <li>If you&apos;re working with an agency, add 1&ndash;2 weeks for internal approvals</li>
              <li>Seasonal campaigns (holiday, summer, back-to-school) should begin briefing 5&ndash;6 months out</li>
              <li>Always build in a 1-week buffer for shipping and last-minute changes</li>
            </ul>

            <h2 id="agencies">Working with Agencies</h2>
            <p>Most influencer kit projects involve at least one agency &mdash; a PR firm, a creative studio, or a brand marketing team. Here&apos;s how to structure the relationship for the best outcome.</p>

            <h3>What to Include in a Packaging Brief</h3>
            <ul>
              <li><strong>Campaign objective:</strong> Product launch, seasonal push, creator seeding, event activation</li>
              <li><strong>Quantity range:</strong> Even a rough range (e.g., 200&ndash;500) helps narrow the structural options</li>
              <li><strong>Product dimensions:</strong> What goes inside the kit &mdash; sizes, weights, fragile items</li>
              <li><strong>Brand guidelines:</strong> Colors, logos, fonts, tone of voice</li>
              <li><strong>Budget range:</strong> Even approximate numbers prevent wasted time on unrealistic concepts</li>
              <li><strong>Timeline:</strong> Ship date, in-hands date, or campaign launch date</li>
              <li><strong>Inspiration:</strong> Reference images, competitor kits, mood boards</li>
            </ul>

            <h3>Common Mistakes in Agency Briefs</h3>
            <ul>
              <li>Designing the box before knowing what goes inside it</li>
              <li>Requesting fully custom structures on a 4-week timeline</li>
              <li>Spec&apos;ing finishes that don&apos;t work on the chosen substrate</li>
              <li>Forgetting to account for kitting and fulfillment logistics</li>
            </ul>

            <h2 id="budget">Budget Ranges &amp; MOQs</h2>
            <p>Transparent pricing is rare in custom packaging. Here are realistic ranges based on our production experience.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Kit Type</th>
                    <th>Per-Unit Cost (500 units)</th>
                    <th>Per-Unit Cost (1,000+)</th>
                    <th>Typical MOQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Simple Mailer Box</strong></td>
                    <td>$8&ndash;15</td>
                    <td>$5&ndash;10</td>
                    <td>100&ndash;250</td>
                  </tr>
                  <tr>
                    <td><strong>Mailer + Custom Inserts</strong></td>
                    <td>$15&ndash;25</td>
                    <td>$10&ndash;18</td>
                    <td>200&ndash;500</td>
                  </tr>
                  <tr>
                    <td><strong>Rigid Magnetic Box</strong></td>
                    <td>$25&ndash;50</td>
                    <td>$18&ndash;35</td>
                    <td>200&ndash;500</td>
                  </tr>
                  <tr>
                    <td><strong>Luxury Multi-Layer Kit</strong></td>
                    <td>$50&ndash;75+</td>
                    <td>$35&ndash;55</td>
                    <td>300&ndash;500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong>What drives cost up:</strong></p>
            <ul>
              <li>Rigid structures vs. corrugated</li>
              <li>Specialty finishes (foil, spot UV, soft-touch)</li>
              <li>Custom foam or fabric inserts</li>
              <li>Low quantities (under 200 units)</li>
              <li>Tight timelines requiring expedited production</li>
            </ul>

            <p><strong>What keeps costs manageable:</strong></p>
            <ul>
              <li>Using existing structural tooling where possible</li>
              <li>Ordering 500+ units to hit price breaks</li>
              <li>Choosing printed inserts over foam or fabric</li>
              <li>Planning 12+ weeks ahead to avoid rush charges</li>
            </ul>

            <div className="guide-cta">
              <h3>Ready to Build Your Kit?</h3>
              <p>Tell us your campaign, timeline, and quantities. We&apos;ll give you a realistic plan and quote.</p>
              <button className="bi" onClick={() => openModal('Guide - Influencer Kit')}>Book a Consultation</button>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Still Have Questions?</h2>
            <p>Here are the most common questions we get about influencer kit production. If you don&apos;t see your question, book a call and we&apos;ll give you a straight answer.</p>
          </div>
          <FAQSidebar
            eyebrow="Quick Answers"
            title="Influencer Kit FAQs"
            faqs={playbookFaqs}
            ctaText="Book an Influencer Consultation"
            ctaProjectType="Guide - Influencer Kit"
          />
        </div>
      </div>

      <section className="ctas">
        <div className="ctai">
          <h2>Make the Unboxing<br /><em>Worth Posting</em></h2>
          <p>Tell us your campaign, timeline, and quantities. We&apos;ll tell you how to make it happen.</p>
          <button className="bi" onClick={() => openModal('Guide - Influencer Kit')}>Book a Consultation</button>
        </div>
      </section>
    </>
  )
}
