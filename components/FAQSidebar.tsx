'use client'

import { useState } from 'react'
import { useModal } from './ModalContext'
import { trackFaqExpand } from '@/lib/analytics'

type FAQItem = {
  question: string
  answer: string
}

export default function FAQSidebar({
  eyebrow,
  title,
  faqs,
  ctaText,
  ctaProjectType,
}: {
  eyebrow: string
  title: string
  faqs: FAQItem[]
  ctaText: string
  ctaProjectType?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { openModal } = useModal()

  const toggle = (i: number) => {
    const nowOpen = openIndex !== i
    setOpenIndex(nowOpen ? i : null)
    if (nowOpen) trackFaqExpand({ question: faqs[i].question, ctaLocation: 'faq-sidebar' })
  }

  return (
    <div className="sb">
      <div className="ey inv" style={{ marginBottom: 4 }}>{eyebrow}</div>
      <h3>{title}</h3>
      {faqs.map((faq, i) => (
        <div key={i} className={`fqi${openIndex === i ? ' open' : ''}`}>
          <button
            type="button"
            className="fqbtn"
            aria-expanded={openIndex === i}
            onClick={() => toggle(i)}
          >
            <span>{faq.question}</span>
            <span className="fqtog" aria-hidden="true">+</span>
          </button>
          <div className="fqa" role="region">{faq.answer}</div>
        </div>
      ))}
      <button type="button"
        className="bi"
        onClick={() => openModal(ctaProjectType, 'faq-sidebar')}
        style={{ width: '100%', marginTop: 28, textAlign: 'center' }}
      >
        {ctaText}
      </button>
    </div>
  )
}
