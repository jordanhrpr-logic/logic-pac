'use client'

import { useState } from 'react'
import { useModal } from './ModalContext'

type FAQItem = {
  question: string
  answer: string
}

export default function BlogFAQ({
  eyebrow = 'Quick Answers',
  title,
  faqs,
  ctaText = 'Book a Packaging Consultation',
  ctaProjectType,
}: {
  eyebrow?: string
  title: string
  faqs: FAQItem[]
  ctaText?: string
  ctaProjectType?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { openModal } = useModal()

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: title,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <section className="blog-faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="blog-faq-inner">
        <div className="ey inv" style={{ marginBottom: 4 }}>{eyebrow}</div>
        <h2>{title}</h2>
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
    </section>
  )
}
