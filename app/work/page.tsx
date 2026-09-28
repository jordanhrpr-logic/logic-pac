import type { Metadata } from 'next'
import WorkClient from './WorkClient'

const SITE_URL = 'https://logic-pac.com'

export const metadata: Metadata = {
  title: 'Our Work — Portfolio & Case Studies',
  description: 'Custom packaging portfolio from a leading beauty packaging manufacturer: holiday gift sets, influencer kits, retail packaging, and specialty finishes.',
  alternates: { canonical: '/work' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Our Work', item: `${SITE_URL}/work` },
  ],
}

export default function WorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <WorkClient />
    </>
  )
}
