'use client'

import { useState } from 'react'
import { useModal } from './ModalContext'

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
    setOpenIndex(openIndex === i ? null : i)
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
      <button
        className="bi"
        onClick={() => openModal(ctaProjectType)}
        style={{ width: '100%', marginTop: 28, textAlign: 'center' }}
      >
        {ctaText}
      </button>
    </div>
  )
}
