'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'holiday', label: 'Holiday Kits' },
  { key: 'influencer', label: 'Influencer & PR' },
  { key: 'beauty', label: 'Beauty & Cosmetics' },
  { key: 'retail', label: 'Retail Packaging' },
  { key: 'specialty', label: 'Specialty Finishes' },
]

const workItems = [
  { cat: 'holiday', cls: 'tall', gradient: 'linear-gradient(135deg,#1a1a2e,#0f3460)', category: 'Holiday Kits', name: 'Premium Beauty Holiday Gift Set', desc: 'Multi-component beauty set, magnetic closure, soft-touch lam. 2,500 units.' },
  { cat: 'influencer', cls: '', gradient: 'linear-gradient(135deg,#0f2027,#2c5364)', category: 'Influencer & PR', name: 'Skincare Launch PR Mailer', desc: 'Rigid interior box, ribbon lift, custom tissue. 500 units, direct fulfillment.' },
  { cat: 'beauty', cls: '', gradient: 'linear-gradient(135deg,#360033,#0b8793)', category: 'Beauty & Cosmetics', name: 'Cosmetics Folding Carton \u2014 Ulta Compliant', desc: 'Foil stamp, emboss, Ulta retail compliance. 50,000 units.' },
  { cat: 'holiday', cls: 'wide', gradient: 'linear-gradient(135deg,#2d1b69,#11998e)', category: 'Holiday Kits', name: '24-Door Advent Calendar \u2014 Beauty Brand', desc: 'Flip-door advent structure, retail shelf display. 3,000 units.' },
  { cat: 'specialty', cls: '', gradient: 'linear-gradient(135deg,#1e3c72,#2a5298)', category: 'Specialty Finishes', name: 'Gold Foil-Stamp Cylinder', desc: 'Custom cylinder, gold foil, matte lam, die-cut lid. Fragrance brand.' },
  { cat: 'influencer', cls: '', gradient: 'linear-gradient(135deg,#0a0a0a,#434343)', category: 'Influencer & PR', name: 'Velvet Interior Unboxing Kit', desc: 'Two-piece rigid box, black velvet interior, gold ribbon. 1,200 units.' },
  { cat: 'retail', cls: '', gradient: 'linear-gradient(135deg,#16222a,#3a6073)', category: 'Retail', name: 'Shelf-Ready Display \u2014 Mass Market', desc: 'PDQ display, floor-standing unit. Target and Walmart. 10,000 units.' },
  { cat: 'specialty', cls: '', gradient: 'linear-gradient(135deg,#141e30,#243b55)', category: 'Specialty Finishes', name: 'Soft-Touch + Spot UV Skincare', desc: 'Folding carton with soft-touch lam, tactical spot UV on logo.' },
  { cat: 'beauty', cls: '', gradient: 'linear-gradient(135deg,#2b0a3d,#0d324d)', category: 'Beauty & Cosmetics', name: 'Wellness Brand Tube & Carton Program', desc: 'Coordinated tube + carton, kraft material, FSC certified.' },
  { cat: 'holiday', cls: 'wide', gradient: 'linear-gradient(135deg,#1e3c72,#0f2027)', category: 'Holiday Kits', name: 'Holiday Gift Set Collection \u2014 Multi-SKU Program', desc: 'Three-piece holiday collection, lift-lid rigid boxes. Sephora compliant. 5,000 sets.' },
  { cat: 'influencer', cls: '', gradient: 'linear-gradient(135deg,#141e30,#360033)', category: 'Influencer & PR', name: 'Personalized Name Foil Campaign', desc: 'Foil-stamped names, layered interior reveal. 300 units, PR agency.' },
  { cat: 'retail', cls: '', gradient: 'linear-gradient(135deg,#1a1a2e,#3d5a80)', category: 'Retail', name: 'Fragrance Retail Carton', desc: 'Rigid carton, die-cut window, soft-touch exterior, embossed logo.' },
]

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { openModal } = useModal()

  return (
    <>
      <div className="wph">
        <h1>Work That Lives on Shelves,<br />Feeds, &amp; <em>Gift Tables</em></h1>
        <p>Holiday gift sets, influencer kits, retail programs, specialty finishes &mdash; every project built from brief to delivery.</p>
      </div>
      <div className="fbar" role="tablist" aria-label="Filter projects">
        {categories.map(c => (
          <button
            key={c.key}
            className={`fbi${activeFilter === c.key ? ' act' : ''}`}
            role="tab"
            aria-selected={activeFilter === c.key}
            onClick={() => setActiveFilter(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="wgrid" id="workGrid">
        {workItems.map((item, i) => (
          <div
            key={i}
            className={`wgi${item.cls ? ' ' + item.cls : ''}`}
            data-cat={item.cat}
            style={{ display: activeFilter === 'all' || item.cat === activeFilter ? '' : 'none' }}
          >
            <div className="img-placeholder" style={{ background: item.gradient, height: '100%' }}></div>
            <div className="wgov">
              <div className="wgcat">{item.category}</div>
              <div className="wgnm">{item.name}</div>
              <div className="wgdesc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="gcta">
        <h2>Your Work Could Be Here Next</h2>
        <p>Every project started with a brief and a phone call. Bring us yours.</p>
        <div className="gcta-a">
          <button className="bp" onClick={() => openModal()}>Book a Consultation</button>
          <Link href="/capabilities" className="bo">View Capabilities</Link>
        </div>
      </div>
    </>
  )
}
