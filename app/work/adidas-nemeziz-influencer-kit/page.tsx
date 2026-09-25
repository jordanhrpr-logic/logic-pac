import type { Metadata } from 'next'
import AdidasNemezizCaseStudy from './AdidasNemezizCaseStudy'

const SITE_URL = 'https://logic-pac.com'
const path = '/work/adidas-nemeziz-influencer-kit'
const title = 'Adidas Nemeziz Influencer Kit Case Study'
const description = 'How Logic developed a multi-level rigid presentation kit for the Adidas Nemeziz footwear launch, with product-specific compartments and a staged unboxing sequence.'
const image = '/images/portfolio/influencer-adidas-nemesis.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | Logic Pac`,
    description,
    type: 'article',
    url: `${SITE_URL}${path}`,
    images: [{ url: image, width: 1200, height: 797, alt: 'Open Adidas Nemeziz presentation kit with footwear and soccer components' }],
  },
}

export default function AdidasNemezizCaseStudyPage() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [`${SITE_URL}${image}`],
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
    author: { '@type': 'Organization', name: 'Logic Pac', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Logic Pac',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
    about: [
      { '@type': 'Thing', name: 'Influencer kit packaging' },
      { '@type': 'Thing', name: 'PR mailer design' },
      { '@type': 'Organization', name: 'Adidas' },
    ],
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
    articleSection: 'Packaging Case Studies',
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Our Work', item: `${SITE_URL}/work` },
      { '@type': 'ListItem', position: 3, name: 'Adidas Nemeziz Influencer Kit', item: `${SITE_URL}${path}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AdidasNemezizCaseStudy />
    </>
  )
}
