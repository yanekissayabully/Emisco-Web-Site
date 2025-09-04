"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { Language } from "@/lib/i18n"
import { useLanguage } from "@/hooks/use-language"

interface I18nContextType {
  language: Language
  changeLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { language, changeLanguage } = useLanguage()
  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    // Динамически импортируем переводы для текущего языка
    import(`@/lib/i18n`).then((module) => {
      setTranslations(module.translations[language])
    })
  }, [language])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // fallback to key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}