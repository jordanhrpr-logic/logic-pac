'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useModal } from './ModalContext'

const capabilitiesLinks = [
  { href: '/capabilities', label: 'Overview' },
  { href: '/holiday', label: 'Holiday Gift Sets' },
  { href: '/influencer', label: 'Influencer Kits' },
  { href: '/jewelry', label: 'Jewelry Packaging' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const pathname = usePathname()
  const { openModal } = useModal()
  const ddTimer = useRef<NodeJS.Timeout | null>(null)

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

  const isCapActive = capabilitiesLinks.some(l => pathname === l.href)

  const handleDdEnter = useCallback(() => {
    if (ddTimer.current) clearTimeout(ddTimer.current)
    setDdOpen(true)
  }, [])

  const handleDdLeave = useCallback(() => {
    ddTimer.current = setTimeout(() => setDdOpen(false), 150)
  }, [])

  useEffect(() => {
    return () => { if (ddTimer.current) clearTimeout(ddTimer.current) }
  }, [])

  const topLinks = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Our Work' },
    { href: '/guides', label: 'Guides' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <>
      <nav className="scrolled">
        <Link href="/" className="nav-logo">
          <div className="lm"><span></span><span></span></div>
          <div className="lt">Logic Pac <small>by Logic Agency Inc.</small></div>
        </Link>
        <ul className="nav-links">
          {topLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'act' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li
            className="nav-dd"
            onMouseEnter={handleDdEnter}
            onMouseLeave={handleDdLeave}
          >
            <span className={`nav-dd-trigger${isCapActive ? ' act' : ''}`}>
              Capabilities <span className="nav-dd-arrow">&#9662;</span>
            </span>
            <div className={`nav-dd-menu${ddOpen ? ' open' : ''}`}>
              {capabilitiesLinks.map(l => (
                <Link key={l.href} href={l.href} className={pathname === l.href ? 'act' : ''}>
                  {l.label}
                </Link>
              ))}
            </div>
          </li>
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
        {topLinks.map(l => (
          <Link key={l.href} href={l.href} onClick={closeMenu}>{l.label}</Link>
        ))}
        <div className="mobile-dd-label">Capabilities</div>
        {capabilitiesLinks.map(l => (
          <Link key={l.href} href={l.href} onClick={closeMenu} className="mobile-dd-item">
            {l.label}
          </Link>
        ))}
        <button className="ncta-m" onClick={() => { openModal(); closeMenu() }}>Book a Call</button>
      </div>
    </>
  )
}
