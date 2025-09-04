"use client"

import { useState, useEffect } from "react"
import type { Language } from "@/lib/i18n"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLang = localStorage.getItem("emisco-language") as Language
    if (savedLang && ["en", "de", "fr"].includes(savedLang)) {
      setLanguage(savedLang)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0] as Language
      if (["en", "de", "fr"].includes(browserLang)) {
        setLanguage(browserLang)
      }
    }
  }, [])

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang)
    localStorage.setItem("emisco-language", newLang)
  }

  return { language, changeLanguage }
}
