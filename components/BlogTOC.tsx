'use client'

import { useEffect, useState, useRef } from 'react'

type Section = { id: string; label: string }

export default function BlogTOC({ sections }: { sections: Section[] }) {
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
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current?.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [sections])

  return (
    <aside className="gtoc">
      <h4>Contents</h4>
      {sections.map(s => (
        <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
      ))}
    </aside>
  )
}
