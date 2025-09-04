"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Heart, Award } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/providers/i18n-providers"

export default function AboutPage() {
  const { t } = useI18n()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
{/* <section
  className="relative py-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/miscanthus-field-golden-light.png')" }}
>
  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-white mb-6">
        {t('aboutTitle')}
      </h1>
      <p className="text-xl sm:text-2xl text-gray-100 mb-8 leading-relaxed">
        {t('aboutSubtitle')}
      </p>
    </div>
  </div>
</section> */}


      {/* Company Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-6">{t('storyTitle')}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('storyDescription1')}
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('storyDescription2')}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('storyDescription3')}
              </p>
            </div>
            <div className="relative">
              <img
                src="/first.jpg"
                alt="Emisco founding team"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">
              {t('missionTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('missionDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{t('cardTitle1')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cardDescription1')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{t('cardTitle2')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cardDescription2')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{t('cardTitle3')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cardDescription3')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('teamTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('teamDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <img
                  src="/placeholder-user.jpg"
                  alt="CEO Portrait"
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-serif font-bold mb-2">{t('name1')}</h3>
                <p className="text-secondary font-medium mb-4">{t('position1')}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('description1')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <img
                  src="/placeholder-user.jpg"
                  alt="CTO Portrait"
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-serif font-bold mb-2">{t('name2')}</h3>
                <p className="text-secondary font-medium mb-4">{t('position2')}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('description2')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <img
                  src="/placeholder-user.jpg"
                  alt="Head of Production Portrait"
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-serif font-bold mb-2">{t('name3')}</h3>
                <p className="text-secondary font-medium mb-4">{t('position3')}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('description3')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('whyTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('whySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold mb-2">{t('awardTitle1')}</h3>
              <p className="text-sm text-muted-foreground">{t('awardDescription1')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif font-bold mb-2">{t('awardTitle2')}</h3>
              <p className="text-sm text-muted-foreground">{t('awardDescription2')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold mb-2">{t('awardTitle3')}</h3>
              <p className="text-sm text-muted-foreground">{t('awardDescription3')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif font-bold mb-2">{t('awardTitle4')}</h3>
              <p className="text-sm text-muted-foreground">{t('awardDescription4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">{t('aboutCtaTitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('aboutCtaDescription')}
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link href="/services">
              {t('aboutCtaButton')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
