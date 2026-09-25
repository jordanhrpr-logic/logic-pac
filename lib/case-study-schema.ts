const SITE_URL = 'https://logic-pac.com'

export function buildCaseStudySchema(input: { slug: string; headline: string; description: string; image: string; client: string }) {
  const url = `${SITE_URL}/work/${input.slug}`
  return {
    article: {
      '@context': 'https://schema.org', '@type': 'Article', headline: input.headline, description: input.description,
      image: [`${SITE_URL}${input.image}`], author: { '@type': 'Organization', name: 'Logic Pac', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'Logic Pac', url: SITE_URL }, about: { '@type': 'Organization', name: input.client },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url }, datePublished: '2026-09-25', dateModified: '2026-09-25', articleSection: 'Client Work',
    },
    breadcrumb: {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Our Work', item: `${SITE_URL}/work` },
        { '@type': 'ListItem', position: 3, name: input.client, item: url },
      ],
    },
  }
}
