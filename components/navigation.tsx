"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/providers/i18n-providers"
import type { Language } from "@/lib/i18n"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLangDropdown, setShowLangDropdown] = useState(false)
  const { language, changeLanguage, t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/", key: "home" },
    { href: "/about", key: "about" },
    { href: "/production", key: "production" },
    { href: "/product", key: "product" },
    { href: "/portfolio", key: "portfolio" },
    { href: "/services", key: "services" },
  ]

  const getLangLabel = (lang: Language) => {
    switch (lang) {
      case "de":
        return "Deutsch"
      case "fr":
        return "Français"
      // case "ru":
      //   return "Русский"
      default:
        return "English"
    }
  }

  const handleLanguageChange = (newLang: Language) => {
    changeLanguage(newLang)
    setShowLangDropdown(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5"
          : "bg-white/90 backdrop-blur-md" // Увеличена непрозрачность
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn("flex justify-between items-center transition-all duration-500", isScrolled ? "h-16" : "h-20")}
        >
          {/* Logo */}
          {/* Logo */}
<Link href="/" className="flex items-center group">
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
    <div className={cn(
      "relative z-10 transition-all duration-300 group-hover:scale-105",
      isScrolled ? "h-8 w-16 -mt-6" : "h-10 w-20 -mt-8" // добавил -mt-1
    )}>
      <Image
        src="/logo.webp"
        alt="Emisco"
        width={isScrolled ? 128 : 160}
        height={isScrolled ? 32 : 40}
        className="object-contain"
      />
    </div>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group",
                  "hover:bg-white/10 hover:backdrop-blur-sm",
                  isScrolled ? "text-gray-700 hover:text-primary hover:bg-primary/5" : "text-gray-700 hover:text-primary hover:bg-primary/5" // Убрал белый цвет для непрокрученного состояния
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{t(`navigation.${item.key}`)}</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Modern Language Switcher */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={cn(
                  "flex items-center space-x-2 transition-all duration-300 hover:scale-105",
                  isScrolled
                    ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5" // Убрал белый цвет для непрокрученного состояния
                )}
              >
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDown
                  className={cn("h-3 w-3 transition-transform duration-200", showLangDropdown && "rotate-180")}
                />
              </Button>

              {showLangDropdown && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 py-2 animate-in slide-in-from-top-2 duration-200 z-50">
                  {[
                    { code: "en" as Language, label: "English" },
                    { code: "de" as Language, label: "Deutsch" },
                    { code: "fr" as Language, label: "Français" },
                    // { code: "ru" as Language, label: "Русский" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm transition-colors duration-200 hover:bg-primary/5 hover:text-primary",
                        language === lang.code && "bg-primary/10 text-primary font-medium",
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "lg:hidden transition-all duration-300 hover:scale-110 p-2",
                isScrolled
                  ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5" // Убрал белый цвет для непрокрученного состояния
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-5 h-5">
                <span
                  className={cn(
                    "absolute block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "top-2 rotate-45" : "top-1",
                  )}
                />
                <span
                  className={cn(
                    "absolute block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out top-2",
                    isOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "top-2 -rotate-45" : "top-3",
                  )}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden" // Улучшено отображение мобильного меню
          )}
        >
          <div className="px-4 py-6 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-xl">
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium group"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? `slideInLeft 0.3s ease-out ${index * 50}ms both` : "none",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{t(`navigation.${item.key}`)}</span>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-6" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10" onClick={() => setIsOpen(false)} />
      )}
    </nav>
  )
}
