'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language } from '@/lib/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.nl
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language')
      return (saved as Language) || 'nl'
    }
    return 'nl'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
