'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import GuideAnswerSummary from '@/components/GuideAnswerSummary'
import GuideBottomLine from '@/components/GuideBottomLine'
import GuideByline from '@/components/GuideByline'

const tocSections = [
  { id: 'why', label: 'Why a design system' },
  { id: 'anatomy', label: 'The seven system layers' },
  { id: 'tour', label: 'How the system scales' },
  { id: 'hero', label: 'Hero → line extensions' },
  { id: 'gift', label: 'Line → gift & seasonal' },
  { id: 'pr', label: 'Gift → PR & influencer' },
  { id: 'rules', label: 'The system rules' },
  { id: 'checklist', label: 'Design system scorecard' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'When should a brand actually invest in a packaging design system?',
    answer: 'Before the second SKU, not after the fifth. The cost of retrofitting a system onto four unrelated SKUs is almost always higher than the cost of designing one. If the line will exist past a hero launch, define the system rules at concept — even if you only make one pack this year.',
  },
  {
    question: 'How much flexibility should the system have?',
    answer: 'Enough to carry a hero SKU, three line extensions, a holiday set, and a PR mailer without a redesign. Not so much that any supplier can interpret the brand differently. The practical rule we use is: silhouette, hierarchy, and finish stack are fixed. Color, size, and secondary architecture can flex within defined rules.',
  },
  {
    question: 'Can a design system be built around stock primary packaging?',
    answer: 'Yes. A well-executed stock bottle with a consistent secondary architecture, finish stack, and color system can carry a brand through launch and well into scale. Custom tooling is justified when the silhouette becomes a brand asset — not as a default.',
  },
  {
    question: 'How does a system survive seasonal and limited-edition launches?',
    answer: 'By pre-defining what can change and what cannot. Seasonal SKUs often change secondary carton color, add a finish variant, or stack a different foil — but the primary silhouette, logo lockup, and dimensional hierarchy stay fixed. The reader should recognize it as the same brand in a different season.',
  },
  {
    question: 'What breaks a packaging design system in the first year?',
    answer: 'Three things, almost always: a line extension sourced from a different supplier with different tolerances; a holiday set designed by an agency without reading the brief; and a PR mailer that treats "limited edition" as permission to abandon the hierarchy. All three are preventable with a written specification and one accountable owner.',
  },
  {
    question: 'What does Logic Pac do on a design system engagement?',
    answer: 'We develop the structural system across primary, secondary, trays, and inserts; write the specification; qualify the suppliers who can hold tolerances across SKUs; manage sampling and QC against the written spec; and extend the system through line extensions, holiday sets, and PR formats without rebuilding it each time. The approach is detailed in our Epicutis case study and the Luxury Beauty Packaging System guide.',
  },
]

type Slide = {
  id: string
  src: string
  alt: string
  label: string
  caption: string
}

const slides: Slide[] = [
  {
    id: 'why',
    src: '/images/guides/packaging-design-system/scroll-01-family-overview.jpg',
    alt: 'Multi-SKU beauty packaging family with coordinated structural system',
    label: 'The family',
    caption: 'A design system is what makes a line of SKUs read as one brand, not seven packaging decisions.',
  },
  {
    id: 'anatomy',
    src: '/images/guides/packaging-design-system/scroll-02-silhouette.jpg',
    alt: 'Primary serum pack silhouette as the anchor of the design system',
    label: 'Silhouette',
    caption: 'The silhouette is the first system decision. Every other SKU is designed to belong to it.',
  },
  {
    id: 'tour',
    src: '/images/guides/packaging-design-system/scroll-03-hierarchy.jpg',
    alt: 'Cream and serum packs showing dimensional hierarchy in a product family',
    label: 'Hierarchy',
    caption: 'Dimensional hierarchy — height, proportion, and tray position — signals which SKU anchors the line.',
  },
  {
    id: 'hero',
    src: '/images/guides/packaging-design-system/scroll-04-finish-stack.jpg',
    alt: 'Finish stack carried from hero SKU through line extensions',
    label: 'Finish stack',
    caption: 'The finish stack — soft-touch, foil, deboss, color — is the system’s signature. Line extensions inherit it.',
  },
  {
    id: 'gift',
    src: '/images/guides/packaging-design-system/scroll-05-color-system.jpg',
    alt: 'Color system across multi-SKU beauty line showing variant handling',
    label: 'Color system',
    caption: 'Color varies within a defined palette so new SKUs feel inevitable, not improvised.',
  },
  {
    id: 'pr',
    src: '/images/guides/packaging-design-system/scroll-06-gift-extension.jpg',
    alt: 'Gift and seasonal set extending the design system',
    label: 'Set & gift',
    caption: 'Seasonal and gift extensions stack the same system in a new secondary architecture — not a new brand.',
  },
  {
    id: 'rules',
    src: '/images/guides/packaging-design-system/scroll-07-shelf.jpg',
    alt: 'Full line arranged for shelf and photography, demonstrating system coherence',
    label: 'Shelf & photography',
    caption: 'When the rules hold, the full line photographs as one object — on shelf, in a thumbnail, and in a hand.',
  },
]

export default function DesignSystemClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [activeSlide, setActiveSlide] = useState<string>('why')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const stickyObserverRef = useRef<IntersectionObserver | null>(null)

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

  const onRowRef = useCallback((el: HTMLDivElement | null) => {
    if (!el) return
    if (!stickyObserverRef.current) {
      stickyObserverRef.current = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          if (visible.length > 0) {
            const id = (visible[0].target as HTMLElement).dataset.slideId
            if (id) setActiveSlide(id)
          }
        },
        { rootMargin: '-30% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
      )
    }
    stickyObserverRef.current.observe(el)
  }, [])

  const scorecardItems = [
    { id: 'd1', title: 'The silhouette rule is written and signed', body: 'The anchor silhouette (bottle, jar, tube, compact) is documented with proportions, tolerances, and the decoration anchor points every SKU inherits.' },
    { id: 'd2', title: 'Hierarchy carries across every SKU', body: 'Height, proportion, and tray position communicate which SKU is the hero, which is support, and which is a line extension — without reading the label.' },
    { id: 'd3', title: 'The finish stack is specified, not improvised', body: 'Soft-touch, foil, spot UV, deboss, emboss, and color decisions are defined as a stack with order, placement, and acceptable combinations. New SKUs inherit the stack.' },
    { id: 'd4', title: 'The color system has rules, not just colors', body: 'A defined palette with assignment logic (hero color, variant colors, seasonal palette). New SKUs pick from the system — they do not add new colors.' },
    { id: 'd5', title: 'Secondary architecture is modular', body: 'The secondary carton, insert, and tray can scale from a single SKU to a gift set to a PR kit without being redesigned. The same construction logic repeats.' },
    { id: 'd6', title: 'Typography and lockup are documented', body: 'Brand lockup, SKU name typography, usage mark, and legally required type are all specified with placement, size, and clear-space rules.' },
    { id: 'd7', title: 'A single supplier roster carries the system', body: 'The suppliers producing the system can hold the same tolerances, substrates, and finish stack across every SKU. Line extensions do not get sourced to the next-cheapest factory.' },
    { id: 'd8', title: 'A written specification lives with the system', body: 'The spec covers every system layer. New SKUs are added to the spec, not negotiated verbally between brand, agency, and factory.' },
    { id: 'd9', title: 'The system has been pressure-tested on an extension', body: 'A second SKU, a holiday set, or a PR mailer has been developed inside the system. The rules survived. Any rule that broke has been rewritten.' },
    { id: 'd10', title: 'One owner enforces the system', body: 'A single person — internally or at the packaging partner — owns the system specification and is empowered to say no to a decision that breaks it.' },
  ]
  const progress = Math.round((Object.values(checked).filter(Boolean).length / scorecardItems.length) * 100)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Design Systems</div>
        <h1>The <em>beauty brand packaging</em> design system.</h1>
        <p>A design system is what makes a line of SKUs read as one brand. Not seven packaging decisions, not three agencies, not whichever supplier won the last RFP. This guide is how we build the system that scales from a hero SKU through line extensions, holiday sets, and PR formats &mdash; without rebuilding the brand every time a new product ships.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>17 min read</span>
          <span>Updated October 2026</span>
          <span>Brand &amp; Multi-SKU Planning</span>
        </div>
      </div>

      <div className="guide-wrap design-system-guide">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="What is a beauty brand packaging design system?"
              answer="A beauty brand packaging design system is a documented set of structural, visual, and material rules that lets a brand scale across many SKUs while reading as one. It fixes what cannot change (silhouette, hierarchy, finish stack, typography), defines what can flex (color, secondary architecture, seasonal variants), and lives as a written specification maintained by one owner. The point is not to constrain creative — it is to make the next SKU, gift set, or PR mailer easier to launch than the last."
              takeaways={[
                'A system is defined before the second SKU, not retrofitted after the fifth.',
                'Fix the silhouette, hierarchy, and finish stack; let color and secondary architecture flex.',
                'A single owner enforces the specification across every supplier and every launch.',
                'The system pays off at line extensions, gift sets, and PR formats — not at the hero launch.',
              ]}
            />

            <h2 id="why"><span className="num">01.</span>Why a packaging design system matters</h2>
            <p>Most beauty brands launch with one SKU, one agency, and one supplier. The pack looks great. Then the second SKU arrives &mdash; a slightly different format, a slightly different timeline, and a slightly different approach to the brand &mdash; and the system starts to drift. By SKU five, the line looks like five brands sharing a logo.</p>
            <p>The <Link href="/guides/luxury-beauty-packaging-system">Luxury Beauty Packaging System guide</Link> covers how to make one SKU premium. This guide covers the next question: how do you make <em>a line of SKUs</em> premium, consistent, and operationally manageable &mdash; across hero launches, line extensions, holiday sets, and PR formats &mdash; without rebuilding the brand each time?</p>
            <p>That question has three answers: a written system, a disciplined roster of suppliers that can hold it, and one accountable owner. The sections below are the operating manual.</p>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>The seven system layers that make a line read as one brand</li>
                <li>A scroll-through tour of a working system across a multi-SKU family</li>
                <li>How a system scales from hero SKU to line extension to holiday set to PR</li>
                <li>The rules that fix &mdash; and the rules that flex</li>
                <li>Supplier and specification requirements for cross-SKU consistency</li>
                <li>A 10-item design system readiness scorecard</li>
              </ol>
            </div>

            <h2 id="anatomy"><span className="num">02.</span>The seven system layers</h2>
            <p>Every effective beauty packaging design system has the same seven layers. They are not optional. A brand that defines six of seven ships a system that drifts on the seventh.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>What it does</th>
                    <th>Fix or flex</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Silhouette</strong></td><td>The anchor form that every SKU inherits</td><td>Fixed</td></tr>
                  <tr><td><strong>Hierarchy</strong></td><td>Dimensional relationships that signal hero vs. support vs. extension</td><td>Fixed</td></tr>
                  <tr><td><strong>Finish stack</strong></td><td>Soft-touch, foil, spot UV, deboss, emboss — ordered and placed</td><td>Fixed</td></tr>
                  <tr><td><strong>Color system</strong></td><td>Palette with assignment logic for hero, variant, and seasonal</td><td>Flex within rules</td></tr>
                  <tr><td><strong>Secondary architecture</strong></td><td>Modular carton, tray, and insert construction</td><td>Flex within rules</td></tr>
                  <tr><td><strong>Typography &amp; lockup</strong></td><td>Brand mark, SKU name treatment, and legal type placement</td><td>Fixed</td></tr>
                  <tr><td><strong>Supplier roster</strong></td><td>The factories and vendors that can hold the system</td><td>Fixed by capability</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <strong>The practical test.</strong> If you asked three different agencies to design the next SKU in your line without seeing the existing SKUs, could you reconstruct the system from the brief alone? If no, the system is in people’s heads — not in a specification. That is where drift begins.
            </div>

            <h2 id="tour"><span className="num">03.</span>How the system scales &mdash; a scroll-through tour</h2>
            <p>This is what a working beauty packaging design system looks like as it moves from the family overview to the shelf. Scroll through the seven layers. The pack on the left is the system’s state at each layer. The copy on the right is what the layer is doing.</p>

            <div className="system-sticky">
              <div className="system-sticky-visual" aria-hidden="true">
                <div className="system-sticky-visual-stack">
                  {slides.map(s => (
                    <img
                      key={s.id}
                      src={s.src}
                      alt={s.alt}
                      className={activeSlide === s.id ? 'on' : ''}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
                <div className="system-sticky-visual-caption">
                  <span className="sticky-cap-label">{slides.find(s => s.id === activeSlide)?.label}</span>
                  {slides.find(s => s.id === activeSlide)?.caption}
                </div>
              </div>

              <div className="system-sticky-content">
                {[
                  {
                    id: 'why',
                    eyebrow: '01 — The family',
                    title: 'A line is not a logo on seven packs.',
                    body: 'The brand you remember is the one whose seventh SKU reads like it belongs to the first. That recognition is a system decision, made before any individual pack is designed. The system is what makes the brand expandable.',
                    bullets: [
                      'A line of seven unrelated SKUs reads as inconsistent, not premium.',
                      'A line of seven SKUs that share one system reads as considered — even at a glance.',
                    ],
                  },
                  {
                    id: 'anatomy',
                    eyebrow: '02 — Silhouette',
                    title: 'The silhouette is the first decision — and the hardest to undo.',
                    body: 'Every pack that follows is designed to belong to the silhouette. Change the silhouette on SKU five and SKU one looks like a different brand. The silhouette is the system’s anchor — it carries more identity than color, type, or finish.',
                    bullets: [
                      'Document proportions, radii, shoulder heights, and anchor points.',
                      'Specify how custom silhouettes are extended — taller, wider, same family — before the second SKU briefs.',
                      'Confirm the silhouette can be sampled consistently across the supplier roster.',
                    ],
                  },
                  {
                    id: 'tour',
                    eyebrow: '03 — Hierarchy',
                    title: 'Dimensional hierarchy signals the hero without the label.',
                    body: 'Height, proportion, and tray position do more identity work than most brands expect. A reader should know which SKU anchors the line and which supports it without reading the name. Hierarchy is how the system scales legibility.',
                    bullets: [
                      'Hero SKUs lead on height or proportion — the tallest or widest form.',
                      'Line extensions share the silhouette at a scaled or truncated proportion.',
                      'Gift and seasonal sets position the hero at the center or front of the tray.',
                    ],
                  },
                  {
                    id: 'hero',
                    eyebrow: '04 — Finish stack',
                    title: 'The finish stack is the system’s signature.',
                    body: 'Soft-touch base, foil accent, spot UV detail, deboss anchor — the order and placement is as identifying as the silhouette. Line extensions inherit the stack. They do not reinvent it. A new finish combination on SKU three is how systems quietly fall apart.',
                    bullets: [
                      'Document the finish stack with substrate, coat weight, and placement for every surface.',
                      'Define acceptable combinations — which finishes stack, which do not.',
                      'Confirm every supplier in the roster can execute the full stack to the written tolerance.',
                    ],
                  },
                  {
                    id: 'gift',
                    eyebrow: '05 — Color system',
                    title: 'Color flexes — within rules the system owns.',
                    body: 'This is where most brands feel pressure to “express the formula.” A color system handles that pressure. The palette is defined. The assignment rules are defined. New SKUs pick from the system — they do not add new colors. The seasonal palette is a controlled extension, not an exit from the system.',
                    bullets: [
                      'Define a hero palette, a variant palette, and a seasonal palette.',
                      'Specify which panels and components carry color, which stay neutral.',
                      'Approve every new variant against the palette before artwork is briefed.',
                    ],
                  },
                  {
                    id: 'pr',
                    eyebrow: '06 — Set &amp; gift extensions',
                    title: 'A gift set is the system in a new container, not a new brand.',
                    body: 'Seasonal, gift, and limited-edition formats are the sharpest test of a system. The temptation is to treat them as design permission slips. The right move is to stack the same silhouette, hierarchy, and finish stack inside a modular secondary architecture that was designed for exactly this moment.',
                    bullets: [
                      'The gift carton inherits the hero finish stack — soft-touch, foil, spot UV — at scaled proportion.',
                      'The tray holds the SKUs in hierarchy order — hero at the anchor, extensions arranged around it.',
                      'Seasonal color variants come from the system’s approved palette, not an agency brief.',
                    ],
                  },
                  {
                    id: 'rules',
                    eyebrow: '07 — Shelf &amp; photography',
                    title: 'When the rules hold, the line photographs as one object.',
                    body: 'The real test is not the hero shot. It is the family shot — three SKUs, a gift set, and a PR unit arranged on one surface. If that composition reads as one brand without a logo, the system is working. If the eye has to search for the connective tissue, the system is drifting.',
                    bullets: [
                      'Shoot the family together before the hero shot, not after.',
                      'Review every launch against the family photograph, not against the individual SKU brief.',
                      'If a new SKU breaks the family photo, the SKU goes back — not the system.',
                    ],
                  },
                ].map(row => (
                  <div key={row.id} className="sysrow" data-slide-id={row.id} ref={onRowRef}>
                    <div className="sysrow-eyebrow">{row.eyebrow}</div>
                    <h3>{row.title}</h3>
                    <img className="sysrow-inline-img" src={slides.find(s => s.id === row.id)?.src} alt={slides.find(s => s.id === row.id)?.alt ?? ''} loading="lazy" />
                    <p>{row.body}</p>
                    <ul>
                      {row.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <h2 id="hero"><span className="num">04.</span>Hero SKU to line extensions</h2>
            <p>The hero SKU does not establish the system by shipping. It establishes the system by being the first SKU designed against a written specification that every subsequent SKU will inherit. A line extension that drifts from the hero costs the brand its system; a line extension that holds inherits every system decision the hero paid for.</p>

            <Image src="/images/guides/packaging-design-system/aroma360-family.jpg" alt="Aroma360 fragrance discovery set with coordinated secondary architecture across the SKU family" width={1200} height={1500} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />
            <p className="guide-img-caption">Aroma360 discovery-set architecture &mdash; the same system scaled from a single bottle to a multi-SKU gift set without redrawing the brand.</p>

            <p><strong>What transfers from hero to line extension:</strong></p>
            <ul>
              <li>Silhouette (sometimes scaled, never redrawn)</li>
              <li>Finish stack (same substrate, same coat weight, same placement rules)</li>
              <li>Typography and lockup (unchanged)</li>
              <li>Supplier roster (unchanged — the extension does not get sourced cheaper)</li>
              <li>Color system (new SKU picks from the approved palette)</li>
            </ul>

            <p><strong>What is allowed to flex:</strong></p>
            <ul>
              <li>Dimensional scale (within the hierarchy rules)</li>
              <li>Variant color (within the approved palette)</li>
              <li>Secondary carton proportion (within the modular architecture)</li>
            </ul>

            <h2 id="gift"><span className="num">05.</span>Line extensions to gift and seasonal sets</h2>
            <p>Gift sets and seasonal formats are where most beauty systems fail. The brief arrives late, the agency wants &ldquo;a holiday moment,&rdquo; and the easiest answer is to treat the system as a baseline rather than a constraint. The result is a holiday pack that photographs well in isolation and makes the rest of the line look weaker beside it.</p>
            <p>A well-constructed system handles this moment by pre-defining the gift architecture. The holiday carton is the system’s secondary architecture at a scaled proportion. The tray carries the hero SKU at the anchor position. The seasonal color comes from the approved palette. Everything the gift set adds &mdash; a ribbon, a sticker, a card &mdash; is specified as a system extension, not a creative choice.</p>

            <Image src="/images/guides/packaging-design-system/kiki-line-system.jpg" alt="KIKI World secondary packaging system showing modular construction across line extensions" width={1600} height={1600} className="guide-img" sizes="(max-width: 960px) 100vw, 650px" />
            <p className="guide-img-caption">KIKI World secondary packaging &mdash; the system that let a launch SKU extend into a Pentawards 2024 shortlisted multi-component kit without a brand redesign.</p>

            <h2 id="pr"><span className="num">06.</span>Gift sets to PR and influencer kits</h2>
            <p>PR mailers and influencer kits are the system’s highest-leverage format and the easiest one to over-design. The question to answer is not &ldquo;how do we make this unforgettable&rdquo; &mdash; it is &ldquo;how do we make this unforgettable <em>as this brand</em>.&rdquo; A PR kit that is unforgettable in a way the rest of the line is not is not a brand moment. It is a one-off.</p>
            <p>The <Link href="/guides/influencer-kit-playbook">Influencer Kit Playbook</Link> covers the PR kit discipline in detail. For the design system, the only question that matters is: does the PR kit extend the system or exit it? If the PR kit’s silhouette, hierarchy, finish stack, and color palette all come from the system, it compounds the brand. If any of those are new on the PR kit, the kit is a separate asset and should be judged as one.</p>

            <figure className="guide-video">
              <video
                src="/videos/guides/luxury-beauty-packaging/kiki-primary-rotation.mp4"
                poster="/videos/guides/luxury-beauty-packaging/kiki-primary-rotation-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="KIKI World Pretty Nail Graffiti primary pack rotating against a gradient background"
              />
              <figcaption>KIKI World&apos;s Pretty Nail Graffiti primary pack &mdash; a Pentawards 2024 shortlist entry whose silhouette, color, and finish stack read as the same brand from the shelf through PR to influencer content.</figcaption>
            </figure>

            <h2 id="rules"><span className="num">07.</span>The rules that fix &mdash; and the rules that flex</h2>

            <h3>Fixed rules (the system’s identity)</h3>
            <ul>
              <li><strong>Silhouette and its scaled variants.</strong> Documented with proportions, radii, and anchor points.</li>
              <li><strong>Hierarchy rules.</strong> How height, proportion, and tray position signal hero, support, and extension.</li>
              <li><strong>Finish stack.</strong> Substrate, coat weight, placement, and approved combinations.</li>
              <li><strong>Typography and lockup.</strong> Brand mark, SKU name treatment, legally required type.</li>
              <li><strong>Supplier roster.</strong> The factories that can hold the system to the written specification.</li>
            </ul>

            <h3>Flexible rules (where variation lives)</h3>
            <ul>
              <li><strong>Color.</strong> Hero palette, variant palette, seasonal palette — defined, with assignment rules.</li>
              <li><strong>Secondary architecture.</strong> Modular carton, tray, insert — scaled to the format.</li>
              <li><strong>Ornament.</strong> Ribbon, sticker, insert card — specified at the system level, not improvised per launch.</li>
            </ul>

            <div className="callout">
              <strong>The 10x rule.</strong> A design system pays off at the tenth SKU, not the first. The system’s cost is paid at launch; the system’s return is paid every time a new SKU, gift set, or PR kit launches faster, cheaper, and with less drift than the one before.
            </div>

            <GuideBottomLine>
              Most beauty brands do not have a packaging design system. They have a packaging. The brands that scale cleanly — from hero to line extensions to gift sets to PR — build a written system before the second SKU, enforce it through one supplier roster and one owner, and reap the compounding payoff as the line grows. We develop the structural system, write the specification, qualify the suppliers who can hold it, and extend it through every SKU, set, and format the brand ships.
            </GuideBottomLine>

            <h2 id="checklist"><span className="num">08.</span>The 10-item design system scorecard</h2>
            <p>Run your current brand through the ten checks below. If more than two or three come back with hesitation, the system is in people’s heads &mdash; not in a specification. That is the gap this guide exists to close.</p>

            <div className="checklist-wrap">
              <div className="checklist-progress">
                <div className="checklist-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />
                <span>{Object.values(checked).filter(Boolean).length} of {scorecardItems.length} in place &middot; {progress}%</span>
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
              <h2>Related guides &amp; references</h2>
              <p className="sources-lede">A design system is the connective tissue across every other packaging decision. These are the guides that each own one layer in detail.</p>
              <ul className="sources-list">
                <li><Link href="/guides/luxury-beauty-packaging-system">Luxury Beauty Packaging System</Link> &mdash; how to design the hero SKU the system will inherit from.</li>
                <li><Link href="/guides/material-decision-framework">Beauty Packaging Material Decision Framework</Link> &mdash; the material layer of the system (silhouette substrate, carton substrate, closure materials).</li>
                <li><Link href="/guides/packaging-finish-guide">Packaging Finish Guide</Link> &mdash; the finish stack layer in depth: soft-touch, foil, spot UV, deboss, emboss.</li>
                <li><Link href="/guides/packaging-brief-template">Packaging Brief Template</Link> &mdash; where the system’s rules get captured so every new SKU inherits them cleanly.</li>
                <li><Link href="/guides/packaging-testing-quality-control">Packaging Testing &amp; Quality Control</Link> &mdash; how to verify a new SKU actually matches the system at pilot and production.</li>
                <li><Link href="/guides/influencer-kit-playbook">Influencer Kit Playbook</Link> &mdash; how PR and influencer kits extend the system without exiting it.</li>
                <li><Link href="/guides/sustainable-packaging-decision-matrix">Sustainable Packaging Decision Matrix</Link> &mdash; when sustainability is a layer in the system vs. an addition to it.</li>
                <li><Link href="/work/epicutis">Epicutis case study</Link> &mdash; a design system scaled from three SKUs to 21+ with one supplier roster and one spec.</li>
                <li><Link href="/work/artilect-packaging-reduction">Artilect packaging reduction</Link> &mdash; a design system engineered to shed weight without losing the brand.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Common questions brand managers ask when they first consider building a packaging design system across their line. For the deeper layer-by-layer material, finish, and testing detail, start with the related guides above.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Building a Packaging Design System"
            faqs={faqs}
            ctaText="Request a Design System Audit"
            ctaProjectType="Guide - Design System Audit"
          />
        </div>
      </section>

      <section className="guide-cta">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--white)' }}>Scale a beauty line without redesigning the brand every launch.</h3>
          <p>We develop packaging design systems that hold from hero SKU through line extensions, gift sets, and PR formats — and manage the suppliers, specifications, and QC that keep them honest.</p>
          <button type="button" className="bi" onClick={() => openModal('Guide - Design System Audit', 'guide-bottom-cta')} style={{ background: 'var(--lime)', color: 'var(--navy)' }}>Request a Design System Audit</button>
        </div>
      </section>
    </>
  )
}
