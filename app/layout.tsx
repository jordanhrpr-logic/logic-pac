import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ModalProvider } from '@/components/ModalContext'
import { organizationJsonLd, localBusinessJsonLd, websiteJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: {
    default: 'Logic Pac — Custom Packaging for Beauty, Cosmetic & Consumer Brands',
    template: '%s | Logic Pac',
  },
  description: 'Logic Pac is a custom packaging company and development partner for beauty, cosmetic, and consumer brands. Structural design, global sourcing, holiday gift set manufacturing, influencer kit production, and fulfillment. Based in Orange County, CA.',
  keywords: 'custom packaging company, beauty packaging manufacturer, cosmetic packaging supplier, holiday gift set manufacturer, influencer kit producer, PR mailer packaging, folding carton supplier, rigid box manufacturer, packaging vendor, packaging fulfillment services, custom box manufacturer, retail packaging compliance',
  metadataBase: new URL('https://logic-pac.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Logic Pac — Custom Packaging for Brands & Agencies',
    description: 'Custom packaging company for beauty, cosmetic, and consumer brands. Holiday gift set manufacturing, influencer kit production, retail packaging, and fulfillment.',
    url: 'https://logic-pac.com/',
    siteName: 'Logic Pac',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Pac — Custom Packaging for Brands & Agencies',
    description: 'Custom packaging company: structural design, global sourcing, and fulfillment for beauty, cosmetic, and consumer brands.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='11' cy='16' r='8' fill='none' stroke='%23050D1F' stroke-width='2.5'/%3E%3Ccircle cx='21' cy='16' r='8' fill='none' stroke='%23050D1F' stroke-width='2.5'/%3E%3C/svg%3E",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ModalProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <Navigation />
          <main id="main" style={{ paddingTop: 64 }}>
            {children}
          </main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  )
}
