'use client'

import { createContext, useCallback, useContext, ReactNode } from 'react'
import { trackConsultationClick } from '@/lib/analytics'

type ModalContextType = {
  openModal: (projectType?: string, ctaLocation?: string) => void
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {} })

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const openModal = useCallback((projectType = 'General', ctaLocation = 'unknown') => {
    trackConsultationClick({ projectType, ctaLocation })
    window.open('https://calendly.com/sean-logicagencyinc/30min', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
    </ModalContext.Provider>
  )
}
