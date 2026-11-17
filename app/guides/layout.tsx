import CalendlyBadge from '@/components/CalendlyBadge'

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CalendlyBadge />
      {children}
    </>
  )
}
