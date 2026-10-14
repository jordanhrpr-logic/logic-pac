import type { Metadata } from 'next'
import PostClient from './PostClient'
import { buildBlogArticleSchema, buildBlogBreadcrumbSchema } from '@/lib/blog-schemas'

export const metadata: Metadata = {
  title: 'HDPE vs PET: Which Plastic for Beauty?',
  description: 'HDPE and PET are the two most common plastics in beauty packaging. Compare chemical resistance, clarity, weight, recyclability, PCR availability, and cost.',
  alternates: { canonical: '/blog/hdpe-vs-pet-packaging-comparison' },
  openGraph: {
    url: 'https://logic-pac.com/blog/hdpe-vs-pet-packaging-comparison',
    title: 'HDPE vs PET Packaging: Which Plastic Is Right for Your Beauty Brand? | Logic Pac',
    description: 'HDPE and PET are the two most common plastics in beauty packaging. Compare chemical resistance, clarity, weight, recyclability, PCR availability, and cost.',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
    images: [{ url: '/images/portfolio/holiday-kits.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDPE vs PET Packaging: Which Plastic Is Right for Your Beauty Brand? | Logic Pac',
    description: 'HDPE and PET are the two most common plastics in beauty packaging. Compare chemical resistance, clarity, weight, recyclability, PCR availability, and cost.',
    images: ['/images/portfolio/holiday-kits.jpeg'],
  },
}

const hdpePetFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'HDPE vs PET Packaging FAQ',
  mainEntity: [
    { '@type': 'Question', name: 'Is HDPE or PET better for skincare packaging?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the formula. PET is better for serums, toners, and products where clarity matters and the formula is primarily aqueous. HDPE is better for cleansers, body washes, and products with essential oils or strong surfactants. Neither is universally better for skincare — the formula chemistry determines the correct material.' } },
    { '@type': 'Question', name: 'Can PET bottles hold essential oils?', acceptedAnswer: { '@type': 'Answer', text: 'PET is generally not recommended for products with high essential oil content. Essential oils — particularly citrus and tea tree — can cause environmental stress cracking in PET over time. HDPE is the more chemically resistant choice for essential oil formulas.' } },
    { '@type': 'Question', name: 'Which plastic is more sustainable — HDPE or PET?', acceptedAnswer: { '@type': 'Answer', text: 'Both are highly recyclable and widely accepted in curbside recycling programs. PET has a slightly higher recycling rate and a more established rPET supply chain. HDPE has more affordable PCR resin availability. The most impactful decision is designing for recyclability rather than choosing one resin over the other.' } },
    { '@type': 'Question', name: 'Does PET packaging look more premium than HDPE?', acceptedAnswer: { '@type': 'Answer', text: 'PET optical clarity creates a glass-like appearance that many consumers associate with premium quality. HDPE opaque or translucent appearance reads as more utilitarian. However, with the right decoration strategy, HDPE containers can achieve premium shelf presence.' } },
    { '@type': 'Question', name: 'What is the cost difference between HDPE and PET for beauty containers?', acceptedAnswer: { '@type': 'Answer', text: 'The cost difference is typically $0.05–0.20 per unit for equivalent container sizes, with PET being slightly more expensive. This difference is small enough that it should not drive the material decision.' } },
  ],
}

export default function HdpeVsPetPackagingComparisonPost() {
  const slug = 'hdpe-vs-pet-packaging-comparison'
  const articleJsonLd = buildBlogArticleSchema(slug)
  const breadcrumbJsonLd = buildBlogBreadcrumbSchema(slug)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hdpePetFaqJsonLd) }} />
      <PostClient />
    </>
  )
}
