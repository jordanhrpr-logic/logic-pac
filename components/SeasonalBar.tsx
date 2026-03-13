'use client'

import { useMemo } from 'react'
import { useModal } from './ModalContext'

export default function SeasonalBar() {
  const { openModal } = useModal()

  const seasonalText = useMemo(() => {
    const m = new Date().getMonth()
    const y = new Date().getFullYear()
    if (m <= 4) return 'Holiday kit production slots are open. Start now, ship on time.'
    if (m <= 7) return 'Holiday production is filling fast. Secure your slot before factories close.'
    return `Now booking ${y + 1} holiday programs. Get ahead of the timeline.`
  }, [])

  return (
    <div className="hrbar">
      <span className="hrbt">{seasonalText}</span>
      <button className="hrbc" onClick={() => openModal()}>Secure Your Slot &rarr;</button>
    </div>
  )
}

export function SeasonalStatus() {
  const text = useMemo(() => {
    const m = new Date().getMonth()
    const y = new Date().getFullYear()
    if (m <= 4) return 'Production Slots Open'
    if (m <= 7) return 'Slots Filling Fast'
    return `Booking ${y + 1}`
  }, [])

  return <>{text}</>
}

export function HolidayWindowLabel() {
  const text = useMemo(() => {
    const m = new Date().getMonth()
    const y = new Date().getFullYear()
    if (m <= 4) return 'Prime Production Window'
    if (m <= 7) return 'Limited Slots Remaining'
    return `Now Booking ${y + 1}`
  }, [])

  return <>{text}</>
}
