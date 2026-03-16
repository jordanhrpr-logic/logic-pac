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
          <p>Custom packaging company for beauty, cosmetic, and consumer brands. Structural design, global manufacturing, holiday gift sets, influencer kits, and fulfillment.<br /><br /><span style={{ color: 'rgba(255,255,255,.12)', fontSize: 11 }}>Orange County, CA &middot; Salt Lake City, UT</span></p>
        </div>
        <div className="ftrc">
          <h4>Capabilities</h4>
          <Link href="/capabilities">Structural Design</Link>
          <Link href="/capabilities">Global Sourcing</Link>
          <Link href="/capabilities">Quality Control</Link>
          <Link href="/capabilities">Compliance</Link>
          <Link href="/capabilities">Kitting &amp; Fulfillment</Link>
        </div>
        <div className="ftrc">
          <h4>Programs</h4>
          <Link href="/holiday">Holiday Gift Sets</Link>
          <Link href="/influencer">Influencer Kits</Link>
          <Link href="/influencer">PR Mailers</Link>
          <Link href="/work">Our Work</Link>
        </div>
        <div className="ftrc">
          <h4>Guides</h4>
          <Link href="/guides">Packaging Guides</Link>
          <Link href="/guides/influencer-kit-playbook">Influencer Kit Playbook</Link>
          <Link href="/guides/packaging-finish-guide">Finish Guide</Link>
        </div>
        <div className="ftrc">
          <h4>Company</h4>
          <a href="https://logicagencyinc.com" target="_blank" rel="noopener">Logic Agency Inc.</a>
          <a onClick={() => openModal()} style={{ cursor: 'pointer' }}>Book a Call</a>
          <a href="mailto:sean@logicagencyinc.com">sean@logicagencyinc.com</a>
          <a href="tel:8012516225">(801) 251-6225</a>
        </div>
      </div>
      <div className="ftrb">
        <p>&copy; {new Date().getFullYear()} Logic Pac. A Logic Agency Inc. company.</p>
        <a href="https://logicagencyinc.com" target="_blank" rel="noopener">logicagencyinc.com</a>
      </div>
    </footer>
  )
}
