'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type ModalContextType = {
  openModal: (projectType?: string) => void
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {} })

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const openModal = useCallback((_projectType?: string) => {
    window.open('https://calendly.com/sean-logicagencyinc/30min?month=2026-03', '_blank', 'noopener,noreferrer')
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      if (res.ok) {
        setShowSuccess(true)
        form.reset()
      } else {
        const d = await res.json()
        throw new Error(d.errors ? d.errors.map((x: { message: string }) => x.message).join(', ') : 'Failed')
      }
    } catch {
      setError('Something went wrong. Please email sean@logicagencyinc.com directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
      return
    }
    if (e.key === 'Tab') {
      const modal = document.querySelector('.modal') as HTMLElement
      if (!modal) return
      const focusable = modal.querySelectorAll<HTMLElement>('button,input,select,textarea,[tabindex]:not([tabindex="-1"])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
  }, [closeModal])

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <div
        className={`overlay${isOpen ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Book a consultation"
      >
        <div className="modal">
          <button className="mx" onClick={closeModal}>&#x2715;</button>
          {!showSuccess ? (
            <div id="mf">
              <div className="mey">Free Consultation</div>
              <h2>Book a Call<br />with Logic Pac</h2>
              <p>Tell us about your project. We&apos;ll come to the call prepared.</p>
              <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleSubmit}>
                <div className="fr2">
                  <div className="fr"><label htmlFor="fn">First Name</label><input type="text" id="fn" name="firstName" placeholder="Jane" required autoComplete="given-name" /></div>
                  <div className="fr"><label htmlFor="ln">Last Name</label><input type="text" id="ln" name="lastName" placeholder="Smith" required autoComplete="family-name" /></div>
                </div>
                <div className="fr"><label htmlFor="co">Brand / Company</label><input type="text" id="co" name="company" placeholder="Your brand name or agency" autoComplete="organization" /></div>
                <div className="fr"><label htmlFor="em">Work Email</label><input type="email" id="em" name="email" placeholder="jane@yourbrand.com" required autoComplete="email" /></div>
                <div className="fr">
                  <label htmlFor="pt">Project Type</label>
                  <select id="pt" name="projectType" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
                    <option value="">Select project type...</option>
                    <option>Holiday Gift Set / Seasonal Kit</option>
                    <option>Influencer / PR Kit</option>
                    <option>Custom Retail Packaging</option>
                    <option>Folding Carton Program</option>
                    <option>Agency / Multiple Clients</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>
                <div className="fr"><label htmlFor="msg">Tell us about your project</label><textarea id="msg" name="message" placeholder="What are you building? Timeline, quantity, any context..."></textarea></div>
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="_subject" value="New Logic Pac Consultation Request" />
                <button type="submit" className="fsub" disabled={submitting}>{submitting ? 'Sending...' : 'Request My Consultation \u2192'}</button>
                {error && <div className="ferr">{error}</div>}
              </form>
              <p className="fnote">We respond within one business day. No sales pressure.</p>
            </div>
          ) : (
            <div className="succ">
              <div className="ck">&#x2705;</div>
              <h3>You&apos;re on the calendar.</h3>
              <p>We&apos;ll reach out within one business day.<br />Email: <strong><a href="mailto:sean@logicagencyinc.com">sean@logicagencyinc.com</a></strong></p>
              <button className="bo" onClick={closeModal} style={{ marginTop: 20 }}>Close</button>
            </div>
          )}
        </div>
      </div>
    </ModalContext.Provider>
  )
}
