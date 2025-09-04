"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/providers/i18n-providers"
import type { Language } from "@/lib/i18n"

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
      case "ru":
        return "Русский"
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
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
              <Leaf
                className={cn(
                  "relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12",
                  isScrolled ? "h-7 w-7 text-primary" : "h-8 w-8 text-primary" // Убрал белый цвет для непрокрученного состояния
                )}
              />
            </div>
            <span
              className={cn(
                "font-serif font-black text-xl transition-all duration-300 group-hover:text-primary",
                isScrolled ? "text-primary" : "text-primary" // Убрал белый цвет для непрокрученного состояния
              )}
            >
              Emisco
            </span>
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
                    { code: "ru" as Language, label: "Русский" },
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




// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Leaf, ChevronDown, X } from "lucide-react"
// import { cn } from "@/lib/utils"

// const navigationItems = [
//   { href: "/", label: "Home", labelDe: "Startseite", labelFr: "Accueil" },
//   { href: "/about", label: "About Us", labelDe: "Über uns", labelFr: "À propos" },
//   { href: "/why-emisco", label: "Why Emisco", labelDe: "Warum Emisco", labelFr: "Pourquoi Emisco" },
//   { href: "/product", label: "Product", labelDe: "Produkt", labelFr: "Produit" },
//   { href: "/portfolio", label: "Portfolio", labelDe: "Portfolio", labelFr: "Portfolio" },
//   { href: "/services", label: "Services", labelDe: "Dienstleistungen", labelFr: "Services" },
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [currentLang, setCurrentLang] = useState("ru")
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [showLangDropdown, setShowLangDropdown] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Блокировка скролла при открытом меню
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'unset'
//     }
    
//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [isOpen])

//   const getLangLabel = () => {
//     switch (currentLang) {
//       case "kz":
//         return "ҚАЗ"
//       case "en":
//         return "ENG"
//       default:
//         return "РУС"
//     }
//   }

//   const handleLinkClick = () => {
//     setIsOpen(false)
//     setShowLangDropdown(false)
//   }

//   return (
//     <>
//       <nav
//         className={cn(
//           "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
//           isScrolled
//             ? "bg-white/95 backdrop-blur-xl border-b border-[#2a554e]/20 shadow-lg"
//             : "bg-transparent",
//         )}
//       >
//         <div className="container mx-auto px-4 sm:px-6">
//           <div
//             className={cn(
//               "flex justify-between items-center transition-all duration-300", 
//               isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
//             )}
//           >
//             {/* Logo */}
//             <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group z-50">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#2a554e]/20 to-[#d9b144]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
//                 <Leaf
//                   className={cn(
//                     "relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12",
//                     isScrolled ? "h-6 w-6 sm:h-7 sm:w-7 text-[#2a554e]" : "h-7 w-7 sm:h-8 sm:w-8 text-white",
//                   )}
//                 />
//               </div>
//               <span
//                 className={cn(
//                   "font-serif font-bold text-lg sm:text-xl transition-all duration-300 group-hover:text-[#2a554e]",
//                   isScrolled ? "text-[#2a554e]" : "text-white",
//                 )}
//               >
//                 Ювелир
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-1">
//               {navigationItems.map((item, index) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={cn(
//                     "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group text-sm",
//                     "hover:bg-white/10 hover:backdrop-blur-sm",
//                     isScrolled 
//                       ? "text-[#1c140a]/70 hover:text-[#2a554e] hover:bg-[#2a554e]/5" 
//                       : "text-white/90 hover:text-white",
//                   )}
//                 >
//                   <span className="relative z-10">{item.label}</span>
//                   <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2a554e] to-[#d9b144] transition-all duration-300 group-hover:w-full group-hover:left-0" />
//                 </Link>
//               ))}
//             </div>

//             {/* Right side controls */}
//             <div className="flex items-center space-x-2 sm:space-x-4 z-50">
//               {/* Language Switcher - Desktop */}
//               <div className="relative hidden sm:block">
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setShowLangDropdown(!showLangDropdown)}
//                   className={cn(
//                     "flex items-center space-x-1 sm:space-x-2 transition-all duration-300 hover:scale-105 px-2 sm:px-3 py-1 sm:py-2 h-8 sm:h-9",
//                     isScrolled
//                       ? "text-[#1c140a]/70 hover:text-[#2a554e] hover:bg-[#2a554e]/5"
//                       : "text-white/90 hover:text-white hover:bg-white/10",
//                   )}
//                 >
//                   <span className="text-xs sm:text-sm font-medium">{getLangLabel()}</span>
//                   <ChevronDown
//                     className={cn("h-3 w-3 transition-transform duration-200", showLangDropdown && "rotate-180")}
//                   />
//                 </Button>

//                 {showLangDropdown && (
//                   <div className="absolute top-full right-0 mt-2 w-32 sm:w-36 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#2a554e]/20 py-2 animate-in slide-in-from-top-2 duration-200">
//                     {[
//                       { code: "ru", label: "Русский" },
//                       { code: "kz", label: "Қазақша" },
//                       { code: "en", label: "English" },
//                     ].map((lang) => (
//                       <button
//                         key={lang.code}
//                         onClick={() => {
//                           setCurrentLang(lang.code)
//                           setShowLangDropdown(false)
//                         }}
//                         className={cn(
//                           "w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#2a554e]/5 hover:text-[#2a554e]",
//                           currentLang === lang.code && "bg-[#2a554e]/10 text-[#2a554e] font-medium",
//                         )}
//                       >
//                         {lang.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile menu button */}
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className={cn(
//                   "lg:hidden transition-all duration-300 hover:scale-110 p-1.5 sm:p-2 h-8 w-8 sm:h-9 sm:w-9",
//                   isScrolled
//                     ? "text-[#1c140a]/70 hover:text-[#2a554e] hover:bg-[#2a554e]/5"
//                     : "text-white/90 hover:text-white hover:bg-white/10",
//                 )}
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 {isOpen ? (
//                   <X className="h-4 w-4 sm:h-5 sm:w-5" />
//                 ) : (
//                   <div className="relative w-4 h-4 sm:w-5 sm:h-5">
//                     <span className="absolute block w-4 sm:w-5 h-0.5 bg-current top-1 transition-all duration-300" />
//                     <span className="absolute block w-4 sm:w-5 h-0.5 bg-current top-2 transition-all duration-300" />
//                     <span className="absolute block w-4 sm:w-5 h-0.5 bg-current top-3 transition-all duration-300" />
//                   </div>
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Mobile Navigation Menu */}
//       <div
//         className={cn(
//           "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl",
//           isOpen ? "translate-x-0" : "translate-x-full"
//         )}
//       >
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="flex items-center justify-between p-4 border-b border-[#2a554e]/10">
//             <h2 className="text-lg font-semibold text-[#2a554e]">Меню</h2>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(false)}
//               className="p-2 text-[#1c140a]/70 hover:text-[#2a554e] hover:bg-[#2a554e]/5"
//             >
//               <X className="h-5 w-5" />
//             </Button>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex-1 px-4 py-6">
//             <div className="space-y-3">
//               {navigationItems.map((item, index) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="block px-4 py-3 text-[#1c140a]/70 hover:text-[#2a554e] hover:bg-[#2a554e]/5 rounded-xl transition-all duration-300 font-medium group"
//                   onClick={handleLinkClick}
//                   style={{
//                     animationDelay: `${index * 50}ms`,
//                     animation: isOpen ? `slideInRight 0.3s ease-out ${index * 50}ms both` : "none",
//                   }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span>{item.label}</span>
//                     <div className="w-0 h-0.5 bg-gradient-to-r from-[#2a554e] to-[#d9b144] transition-all duration-300 group-hover:w-6" />
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Mobile Language Switcher */}
//             <div className="mt-8 pt-6 border-t border-[#2a554e]/10">
//               <h3 className="text-sm font-medium text-[#1c140a]/70 mb-3 px-4">Язык</h3>
//               <div className="space-y-2">
//                 {[
//                   { code: "ru", label: "Русский" },
//                   { code: "kz", label: "Қазақша" },
//                   { code: "en", label: "English" },
//                 ].map((lang) => (
//                   <button
//                     key={lang.code}
//                     onClick={() => {
//                       setCurrentLang(lang.code)
//                       setIsOpen(false)
//                     }}
//                     className={cn(
//                       "w-full text-left px-4 py-3 text-sm transition-colors duration-200 rounded-xl",
//                       currentLang === lang.code 
//                         ? "bg-[#2a554e]/10 text-[#2a554e] font-medium" 
//                         : "text-[#1c140a]/70 hover:text-[#2a554e] hover:bg-[#2a554e]/5",
//                     )}
//                   >
//                     {lang.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="p-4 border-t border-[#2a554e]/10">
//             <div className="flex items-center space-x-3">
//               <Leaf className="h-6 w-6 text-[#2a554e]" />
//               <span className="text-sm text-[#1c140a]/70">© 2024 Ювелир</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </>
//   )
// }