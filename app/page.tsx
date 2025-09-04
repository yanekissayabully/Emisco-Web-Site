"use client"
import StatsSection from "@/components/stats"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Leaf, Recycle, Shield, Zap, Star, Users, Award } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/providers/i18n-providers"

export default function HomePage() {
  const { t } = useI18n()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with enhanced overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/10.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-black mb-6 sm:mb-8 leading-tight animate-in slide-in-from-bottom-4 duration-1000">
{t('heroTitle')}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom-4 duration-1000 delay-500">
{t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-700">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Link href="/product">
                {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-white/10 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Link href="/about">{t('readMore')}</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>


      <StatsSection/>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-primary mb-4 sm:mb-6 animate-in slide-in-from-bottom-4 duration-1000">
              {t('featuresTitle')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-200">
              {t('featuresSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 group animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4 text-gray-900">{t('ecoFriendly')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('ecoDescription')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 group animate-in slide-in-from-bottom-4 duration-1000 delay-400">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4 text-gray-900">
                  {t('reliable')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('reliableDescription')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 group animate-in slide-in-from-bottom-4 duration-1000 delay-500">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Recycle className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4 text-gray-900">{t('innovative')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('innovativeDescription')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 group animate-in slide-in-from-bottom-4 duration-1000 delay-600">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4 text-gray-900">{t('energyEfficient')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('energyDescription')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-primary mb-6 sm:mb-8 leading-tight animate-in slide-in-from-left-4 duration-1000">
                  {t('aboutSectionTitle')}
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed animate-in slide-in-from-left-4 duration-1000 delay-200">
                 {t('aboutSectionDescription')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-in slide-in-from-left-4 duration-1000 delay-400">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{t('expertTeam')}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{t('industrySpecialists')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{t('certifiedQuality')}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{t('isoStandards')}</div>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-in slide-in-from-left-4 duration-1000 delay-500"
              >
                <Link href="/about">
                  {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-in slide-in-from-right-4 duration-1000 delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/1.png"
                  alt="Sustainable construction with Emisco blocks"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="order-2 lg:order-1 relative animate-in slide-in-from-left-4 duration-1000 delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img src="/2.png" alt="Miscanthus construction blocks" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-secondary to-primary rounded-full opacity-20 blur-xl"></div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-primary mb-6 sm:mb-8 leading-tight animate-in slide-in-from-right-4 duration-1000">
                  {t('whyUsTitle')}
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed animate-in slide-in-from-right-4 duration-1000 delay-200">
                  {t('whyUsDescription')}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-4 duration-1000 delay-300">
                <div className="flex items-start space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('fireResistance')}</p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {t('fireDescription')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent border-l-4 border-secondary">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('lightWeight')}</p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {t('lightDescription')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('breathable')}</p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {t('breathableDescription')}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-in slide-in-from-right-4 duration-1000 delay-400"
              >
                <Link href="/product">
                  {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black mb-6 sm:mb-8 animate-in slide-in-from-bottom-4 duration-1000">
              {t('ctaTitle')}
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-200">
              {t('ctaDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Link href="/services">{t('submitRequest')}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 border-white/40 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Link href="/portfolio">{t('writeToUs')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



