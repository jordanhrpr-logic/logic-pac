import type { Metadata } from 'next'
import BriefClient from './BriefClient'

export const metadata: Metadata = {
  title: 'The Packaging Brief Template Every Brand Manager Needs',
  description: 'The ten sections every packaging brief should contain, common omissions that cost weeks, and a downloadable template you can adapt for your next project.',
  alternates: { canonical: '/guides/packaging-brief-template' },
}

export default function BriefPage() {
  return <BriefClient />
}
