import CalendlyBadge from '@/components/CalendlyBadge'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CalendlyBadge />
      {children}
    </>
  )
}
