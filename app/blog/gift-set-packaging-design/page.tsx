import type { Metadata } from 'next'
import PostClient from './PostClient'

export const metadata: Metadata = {
  title: 'Gift Set Packaging Design: Structures, Inserts, and Cost Decisions for Multi-Product Kits',
  description: 'Gift set packaging design for beauty brands: rigid box, folding carton, and sleeve+tray structures. Insert types, cost drivers, and retailer display requirements.',
  alternates: { canonical: '/blog/gift-set-packaging-design' },
  openGraph: {
    title: 'Gift Set Packaging Design: Structures, Inserts, and Cost Decisions for Multi-Product Kits | Logic Pac',
    description: 'Gift set packaging design for beauty brands: rigid box, folding carton, and sleeve+tray structures. Insert types, cost drivers, and retailer display r',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Jordan Harper'],
  },
}

export default function GiftSetPackagingDesignPost() {
  return <PostClient />
}
