const SITE_URL = 'https://logic-pac.com'

type GuideSchemaInput = {
  slug: string
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
}

function absoluteUrl(path: string) {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildGuideArticleSchema({
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified = datePublished,
}: GuideSchemaInput) {
  const url = `${SITE_URL}/guides/${slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: 'Sean Klein',
      jobTitle: 'Packaging Development and Production',
      worksFor: {
        '@type': 'Organization',
        name: 'Logic Pac',
        url: SITE_URL,
      },
      sameAs: ['https://www.linkedin.com/in/sean-klein-75a312235/'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Logic Pac',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
    datePublished,
    dateModified,
    image: [absoluteUrl(image)],
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: 'Packaging Guides',
  }
}

export function buildGuideBreadcrumbSchema(slug: string, title: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}/guides/${slug}` },
    ],
  }
}
