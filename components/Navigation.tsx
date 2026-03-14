'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useModal } from './ModalContext'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { openModal } = useModal()

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname === path
  }

  const links = [
    { href: '/', label: 'Home', id: 'nv-home' },
    { href: '/work', label: 'Our Work', id: 'nv-work' },
    { href: '/capabilities', label: 'Capabilities', id: 'nv-capabilities' },
    { href: '/holiday', label: 'Holiday Kits', id: 'nv-holiday' },
    { href: '/influencer', label: 'Influencer Kits', id: 'nv-influencer' },
    { href: '/guides', label: 'Guides', id: 'nv-guides' },
  ]

  return (
    <>
      <nav className="scrolled">
        <Link href="/" className="nav-logo">
          <div className="lm"><span></span><span></span></div>
          <div className="lt">Logic Pac <small>by Logic Agency Inc.</small></div>
        </Link>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.id}>
              <Link href={l.href} id={l.id} className={isActive(l.href) ? 'act' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li><a onClick={() => openModal()} className="ncta" style={{ cursor: 'pointer' }}>Book a Call</a></li>
        </ul>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <Link key={l.id} href={l.href} onClick={closeMenu}>{l.label}</Link>
        ))}
        <button className="ncta-m" onClick={() => { openModal(); closeMenu() }}>Book a Call</button>
      </div>
    </>
  )
}
