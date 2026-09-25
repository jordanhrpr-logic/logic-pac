'use client'

import { createContext, useCallback, useContext, ReactNode } from 'react'

type ModalContextType = {
  openModal: (projectType?: string) => void
}

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {} })

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const openModal = useCallback((projectType = 'General') => {
    const analyticsWindow = window as AnalyticsWindow
    analyticsWindow.gtag?.('event', 'consultation_click', {
      project_type: projectType,
      page_path: window.location.pathname,
    })
    window.open('https://calendly.com/sean-logicagencyinc/30min', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
    </ModalContext.Provider>
  )
}
