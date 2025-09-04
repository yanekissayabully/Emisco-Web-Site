"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/providers/i18n-providers"

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-serif font-black text-cyan-400 mb-4">Emisco</h2>
              <p className="text-slate-300 max-w-md">
                {t('footerSubtitle')}
              </p>
            </div>
            <div className="space-y-3 mt-6">
              <Link href="https://maps.google.com/?q=Britschenmattstrasse 29, 3238 Gals" target="_blank" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>Britschenmattstrasse 29, 3238 Gals</span>
              </Link>
              <Link href="tel:+41795760405" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>+41795760405</span>
              </Link>
              <Link href="mailto:info@emisco.com" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>info@emisco.com</span>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">{t('footerNavTitle1')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors block py-1">
                  {t('footerNav1')}
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-slate-300 hover:text-cyan-400 transition-colors block py-1">
                  {t('footerNav2')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-cyan-400 transition-colors block py-1">
                  {t('footerNav3')}
                </Link>
              </li>
              <li>
                <Link href="/why-emisco" className="text-slate-300 hover:text-cyan-400 transition-colors block py-1">
                  {t('footerNav4')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">{t('footerNavTitle2')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors block py-1">
                  {t('footerNav5')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-cyan-400 transition-colors block py-1">
                  {t('footerNav6')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-cyan-400 transition-colors block py-1">
                  {t('footerNav7')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-cyan-400 transition-colors block py-1">
                  {t('footerNav8')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              {t('footerInfo')}
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}