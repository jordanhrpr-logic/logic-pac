'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'

export default function AdidasNemezizCaseStudy() {
  const { openModal } = useModal()

  return (
    <>
      <header className="case-hero">
        <div className="case-hero-copy">
          <nav className="case-breadcrumb" aria-label="Breadcrumb">
            <Link href="/work">Our Work</Link><span aria-hidden="true">/</span><span>Adidas Nemeziz</span>
          </nav>
          <div className="ey inv">Influencer &amp; PR Kit</div>
          <h1>How to turn a product launch into a <em>clear unboxing story.</em></h1>
          <p>A multi-level rigid presentation system for Adidas Nemeziz—built to help a launch team organize multiple products, control the reveal, and give recipients a coherent story to open and film.</p>
          <div className="case-meta" aria-label="Project summary">
            <span><strong>Client</strong>Adidas</span>
            <span><strong>Format</strong>Rigid presentation kit</span>
            <span><strong>Use</strong>Product launch</span>
          </div>
        </div>
        <div className="case-hero-image">
          <Image src="/images/portfolio/influencer-adidas-nemesis.jpg" alt="Adidas Nemeziz rigid presentation kit opened to show footwear, soccer ball, and branded compartments" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
      </header>

      <main className="case-body">
        <section className="case-intro" aria-labelledby="case-overview">
          <div>
            <div className="ey">The Project</div>
            <h2 id="case-overview">A useful reference for brand and PR teams planning complex launch kits.</h2>
          </div>
          <div>
            <p>The Nemeziz kit had to present several product components without flattening them into one crowded tray. That is a common problem for beauty, wellness, and consumer launches too: one hero product, supporting items, campaign messaging, and limited attention from the recipient.</p>
            <p>The finished structure uses stacked levels and a pull-out drawer to separate those moments. Each component has a defined place, while the black exterior and restrained branding keep attention on the bright Nemeziz product palette.</p>
          </div>
        </section>

        <section className="case-panel" aria-labelledby="case-constraints">
          <div className="case-panel-label">01</div>
          <div>
            <h2 id="case-constraints">The packaging constraints</h2>
            <ul className="case-list">
              <li><strong>Multiple irregular products.</strong> Footwear, a soccer ball, apparel, and printed campaign materials required different depths and retention methods—the same structural issue that appears in multi-SKU beauty and wellness kits.</li>
              <li><strong>A deliberate sequence.</strong> The recipient needed to encounter the launch story in stages, not see every component at once.</li>
              <li><strong>Presentation without visual noise.</strong> The structure had to support an expressive product design while maintaining a disciplined exterior.</li>
              <li><strong>Transit-ready organization.</strong> Every element needed a dedicated position so the intended presentation survived handling.</li>
            </ul>
          </div>
        </section>

        <section className="case-panel case-panel-dark" aria-labelledby="case-solution">
          <div className="case-panel-label">02</div>
          <div>
            <h2 id="case-solution">The structural solution</h2>
            <div className="case-feature-grid">
              <article><span>Layered reveal</span><p>A removable upper presentation level introduces the ball and supporting product before the lower drawer is opened.</p></article>
              <article><span>Dedicated compartments</span><p>Custom-fit cavities organize the footwear and campaign components instead of relying on loose fill or a generic insert.</p></article>
              <article><span>Drawer architecture</span><p>The lower pull-out drawer adds a second interaction and expands usable presentation space without increasing the footprint in one direction.</p></article>
              <article><span>Campaign integration</span><p>Nemeziz graphics, the “Unlock Contest” message, and coordinated printed material turn the packaging into part of the launch communication.</p></article>
            </div>
          </div>
        </section>

        <section className="case-outcome" aria-labelledby="case-outcome">
          <div className="ey">The Outcome</div>
          <h2 id="case-outcome">One system. Several distinct product moments—and a repeatable lesson for launch teams.</h2>
          <p>The completed kit brings the footwear, soccer components, and campaign material into one coherent presentation. The layered construction controls what appears first, what comes next, and how the recipient moves through the story.</p>
          <p>For brand managers and agencies, the transferable lesson is simple: define the reveal sequence before selecting finishes. The structure should explain product priority, protect every component, and make kitting and fulfillment practical. Decoration comes after that system works.</p>
          <p className="case-proof-note"><strong>Evidence note:</strong> This case study describes the finished packaging shown in approved project photography. Campaign quantity, timing, reach, and engagement metrics are not published because verified figures were not available.</p>
        </section>

        <section className="case-related" aria-labelledby="case-related">
          <div>
            <div className="ey">Build the Next One</div>
            <h2 id="case-related">Planning an influencer kit or product-launch mailer?</h2>
            <p>Start with the products, the audience, and the reveal you want to create. We’ll pressure-test the structure, production path, and fulfillment plan.</p>
          </div>
          <div className="case-related-actions">
            <button className="bp" onClick={() => openModal('Influencer / PR Kit')}>Book a Consultation</button>
            <Link href="/guides/influencer-kit-playbook" className="bo">Read the Influencer Kit Playbook</Link>
          </div>
        </section>
      </main>
    </>
  )
}
