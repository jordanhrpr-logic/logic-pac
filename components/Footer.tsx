'use client'

import Link from 'next/link'
import { useModal } from './ModalContext'

export default function Footer() {
  const { openModal } = useModal()

  return (
    <footer>
      <div className="ftr">
        <div className="ftrbr">
          <div className="nav-logo">
            <div className="lm"><span></span><span></span></div>
            <div className="lt">Logic Pac <small>by Logic Agency Inc.</small></div>
          </div>
          <p>Custom packaging company for beauty, cosmetic, and consumer brands. Structural design, global manufacturing, holiday gift sets, influencer kits, and fulfillment.<br /><br /><span style={{ color: 'rgba(255,255,255,.6)', fontSize: 11 }}>Orange County, CA &middot; Salt Lake City, UT</span></p>
        </div>
        <nav className="ftrc" aria-label="Capabilities">
          <div className="ftrc-label" aria-hidden="true">Capabilities</div>
          <Link href="/capabilities">Structural Design</Link>
          <Link href="/capabilities">Global Sourcing</Link>
          <Link href="/capabilities">Quality Control</Link>
          <Link href="/capabilities">Compliance</Link>
          <Link href="/capabilities">Kitting &amp; Fulfillment</Link>
        </nav>
        <nav className="ftrc" aria-label="Programs">
          <div className="ftrc-label" aria-hidden="true">Programs</div>
          <Link href="/holiday">Holiday Gift Sets</Link>
          <Link href="/influencer">Influencer Kits</Link>
          <Link href="/jewelry">Jewelry Packaging</Link>
          <Link href="/influencer">PR Mailers</Link>
          <Link href="/work">Our Work</Link>
        </nav>
        <nav className="ftrc" aria-label="Resources">
          <div className="ftrc-label" aria-hidden="true">Resources</div>
          <Link href="/guides">Packaging Guides</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/guides/influencer-kit-playbook">Influencer Kit Playbook</Link>
          <Link href="/guides/packaging-finish-guide">Finish Guide</Link>
        </nav>
        <nav className="ftrc" aria-label="Company">
          <div className="ftrc-label" aria-hidden="true">Company</div>
          <a href="https://logicagencyinc.com" target="_blank" rel="noopener">Logic Agency Inc.</a>
          <button type="button" onClick={() => openModal()} className="ftr-cta-btn">Book a Call</button>
          <a href="mailto:sean@logicagencyinc.com">sean@logicagencyinc.com</a>
          <a href="tel:9492845134">(949) 284-5134</a>
        </nav>
      </div>
      <div className="ftrb">
        <p>&copy; {new Date().getFullYear()} Logic Pac. A Logic Agency Inc. company.</p>
        <div className="ftrb-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="https://logicagencyinc.com" target="_blank" rel="noopener">logicagencyinc.com</a>
        </div>
      </div>
    </footer>
  )
}
