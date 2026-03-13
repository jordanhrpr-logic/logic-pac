'use client'

import { useMemo } from 'react'

export default function Timeline() {
  const steps = useMemo(() => {
    const now = new Date()
    const month = now.getMonth()
    const mn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const defs = [
      { o: 0, d: 2, l: 'Brief & Sourcing', desc: 'Scope project, factory quotes, initial samples' },
      { o: 1, d: 2, l: 'Design & Sample', desc: 'Structural design, 3D renders, physical approval' },
      { o: 3, d: 3, l: 'Production', desc: 'Mass run, inline QC, pre-shipment inspection' },
      { o: 5, d: 2, l: 'Freight & Customs', desc: 'Ocean freight, US customs, inland delivery' },
      { o: 7, d: 2, l: 'In-Market', desc: 'Retail floor, DTC ship, influencer send' },
    ]
    return defs.map((s, i) => {
      const sm = (month + s.o) % 12
      const em = (month + s.o + s.d - 1) % 12
      return {
        num: `0${i + 1}`,
        range: `${mn[sm]} \u2013 ${mn[em]}`,
        label: s.l,
        desc: s.desc,
        active: i < 2,
      }
    })
  }, [])

  return (
    <div className="tltr" id="timelineSteps">
      {steps.map((s, i) => (
        <div key={i} className={`tlstep${s.active ? ' on' : ''}`}>
          <div className="tldot">{s.num}</div>
          <div className="tlmo">{s.range}</div>
          <div className="tltt">{s.label}</div>
          <div className="tlde">{s.desc}</div>
        </div>
      ))}
    </div>
  )
}
