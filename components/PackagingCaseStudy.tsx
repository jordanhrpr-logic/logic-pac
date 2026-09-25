'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'

type Study = {
  client: string
  eyebrow: string
  title: string
  lede: string
  heroImage: string
  heroAlt: string
  meta: Array<[string, string]>
  overviewTitle: string
  overview: string[]
  constraints: Array<[string, string]>
  solutionTitle: string
  solutions: Array<[string, string]>
  outcomeTitle: string
  outcomes: string[]
  proof?: Array<[string, string]>
  secondaryImage: string
  secondaryAlt: string
  evidence: string
  relatedHref: string
  relatedLabel: string
  projectType: string
}

export default function PackagingCaseStudy({ study }: { study: Study }) {
  const { openModal } = useModal()
  return <>
    <header className="case-hero">
      <div className="case-hero-copy">
        <nav className="case-breadcrumb" aria-label="Breadcrumb"><Link href="/work">Our Work</Link><span aria-hidden="true">/</span><span>{study.client}</span></nav>
        <div className="ey inv">{study.eyebrow}</div>
        <h1>{study.title}</h1>
        <p>{study.lede}</p>
        <div className="case-meta" aria-label="Project summary">{study.meta.map(([label, value]) => <span key={label}><strong>{label}</strong>{value}</span>)}</div>
      </div>
      <div className="case-hero-image"><Image src={study.heroImage} alt={study.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 52vw" /></div>
    </header>

    <main className="case-body">
      <section className="case-intro">
        <div><div className="ey">The Project</div><h2>{study.overviewTitle}</h2></div>
        <div>{study.overview.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <section className="case-panel">
        <div className="case-panel-label">01</div><div><h2>What the packaging had to solve</h2><ul className="case-list">{study.constraints.map(([title, copy]) => <li key={title}><strong>{title}</strong> {copy}</li>)}</ul></div>
      </section>

      <section className="case-panel case-panel-dark">
        <div className="case-panel-label">02</div><div><h2>{study.solutionTitle}</h2><div className="case-feature-grid">{study.solutions.map(([title, copy]) => <article key={title}><span>{title}</span><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="case-outcome">
        <div className="ey">The Outcome</div><h2>{study.outcomeTitle}</h2>{study.outcomes.map((p) => <p key={p}>{p}</p>)}
        {study.proof && <div className="case-proof-grid">{study.proof.map(([metric, label]) => <div key={metric}><strong>{metric}</strong><span>{label}</span></div>)}</div>}
        <div className="case-inline-image"><Image src={study.secondaryImage} alt={study.secondaryAlt} width={1600} height={1000} sizes="(max-width: 900px) 100vw, 900px" /></div>
        <p className="case-proof-note"><strong>Evidence note:</strong> {study.evidence}</p>
      </section>

      <section className="case-related">
        <div><div className="ey">Apply the Pattern</div><h2>Planning a packaging program with similar constraints?</h2><p>Bring us the product, channel, quantity, target cost, and launch date. We’ll help identify the structure and production path worth developing.</p></div>
        <div className="case-related-actions"><button className="bp" onClick={() => openModal(study.projectType)}>Discuss the Packaging</button><Link href={study.relatedHref} className="bo">{study.relatedLabel}</Link></div>
      </section>
    </main>
  </>
}
