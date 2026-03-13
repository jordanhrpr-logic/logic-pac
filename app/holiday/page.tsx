import type { Metadata } from 'next'
import HolidayClient from './HolidayClient'
import { holidayServiceJsonLd, holidayFaqJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Holiday Gift Set Packaging for Beauty Brands',
  description: 'Holiday gift set manufacturer for beauty and cosmetic brands. Custom rigid boxes, advent calendars, premium finishes, kitting, and retail compliance.',
}

export default function HolidayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(holidayServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(holidayFaqJsonLd) }} />
      <HolidayClient />
    </>
  )
}
