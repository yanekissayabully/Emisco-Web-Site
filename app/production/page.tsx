'use client'
import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Factory, Settings, CheckSquare, Truck, Shield, Recycle, Zap } from "lucide-react"
import Link from "next/link"
import TelegramModal from "@/components/TelegramModal"
import Image from 'next/image'
import { useI18n } from '@/providers/i18n-providers';

// Оптимизированные размеры для разных экранов
const IMAGE_SIZES = {
  marquee: {
    mobile: '320px',
    tablet: '400px',
    desktop: '480px'
  },
  featured: {
    mobile: '600px',
    tablet: '700px',
    desktop: '800px'
  }
};

// В компоненте заменим все t('production.title') на соответствующие ключи из твоего формата

export default function ProductionProcessPage() {
  const { t } = useI18n()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Функция для безопасной загрузки изображений с оптимизированными путями
  const getImagePath = useCallback((basePath: string, index: number) => {
    return `${basePath}-${index}.webp`;
  }, []);

  // Оптимизированные данные для карточек
  const productionSteps = [
    {
      step: 1,
      title: t('ProductionStep1Title'),
      description: t('ProductionStep1Description')
    },
    {
      step: 2,
      title: t('ProductionStep2Title'),
      description: t('ProductionStep2Description')
    },
    {
      step: 3,
      title: t('ProductionStep3Title'),
      description: t('ProductionStep3Description')
    },
    {
      step: 4,
      title: t('ProductionStep4Title'),
      description: t('ProductionStep4Description')
    },
    {
      step: 5,
      title: t('ProductionStep5Title'),
      description: t('ProductionStep5Description')
    },
    {
      step: 6,
      title: t('ProductionStep6Title'),
      description: t('ProductionStep6Description')
    },
    {
      step: 7,
      title: t('ProductionStep7Title'),
      description: t('ProductionStep7Description')
    },
    {
      step: 8,
      title: t('ProductionStep8Title'),
      description: t('ProductionStep8Description')
    }
  ];

  const harvestingSteps = [
    {
      step: 1,
      title: t('HarvestingStep1Title'),
      description: t('HarvestingStep1Description')
    },
    {
      step: 2,
      title: t('HarvestingStep2Title'),
      description: t('HarvestingStep2Description')
    },
    {
      step: 3,
      title: t('HarvestingStep3Title'),
      description: t('HarvestingStep3Description')
    },
    {
      step: 4,
      title: t('HarvestingStep4Title'),
      description: t('HarvestingStep4Description')
    }
  ];

  // Оптимизированные изображения для бегущей строки
  const productionImages1 = [7, 8, 9, 10, 11, 12];
  const productionImages2 = [1, 2, 3, 4, 5, 6];

  // Базовый blur data URL для всех изображений
  const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhosHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6WUuey6o2mg+JpX6HFBpw6kY//2Q==';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
              {t('ProductionTitle')}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t('ProductionSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Production Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('ProductionStepsTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('ProductionStepsSubtitle')}
            </p>
          </div>

          {/* Лента фотографий производства - часть 1 */}
          <div className="mb-16">
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex animate-marquee-slow whitespace-nowrap py-4">
                  {productionImages1.map((item) => (
                    <div
                      key={item}
                      className="mx-2 w-64 h-48 sm:w-80 sm:h-56 bg-muted rounded-lg overflow-hidden flex-shrink-0 relative"
                    >
                      <Image
                        src={getImagePath("/production2/production", item)}
                        alt={`${t('ProductionImageAlt')} ${item}`}
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        fill
                        sizes={`(max-width: 640px) 256px, (max-width: 768px) 320px, 384px`}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        loading="lazy"
                        quality={75}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Карточки этапов производства */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {productionSteps.map((item) => (
              <Card key={item.step} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <div className="text-lg sm:text-2xl font-bold text-primary">{item.step}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Видео процесса производства */}
          {/* <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-muted relative">
              {!showVideo ? (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer" 
                     onClick={() => setShowVideo(true)}>
                  <div className="text-center p-4 sm:p-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors mx-auto mb-3 sm:mb-4">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0">
                  <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/RyIgqpwG9lM" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div> */}

          {/* Лента фотографий добычи мискантуса */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-black text-primary mb-8 text-center">
              {t('ProductionHarvestingTitle')}
            </h3>
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex animate-marquee-fast whitespace-nowrap py-4">
                  {productionImages2.map((item) => (
                    <div
                      key={item}
                      className="mx-2 w-64 h-48 sm:w-80 sm:h-56 bg-muted rounded-lg overflow-hidden flex-shrink-0 relative"
                    >
                      <Image
                        src={getImagePath("/production/production", item)}
                        alt={`${t('HarvestingImageAlt')} ${item}`}
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        fill
                        sizes={`(max-width: 640px) 256px, (max-width: 768px) 320px, 384px`}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        loading="lazy"
                        quality={75}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Карточки этапов добычи */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {harvestingSteps.map((item) => (
              <Card key={item.step} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <div className="text-lg sm:text-2xl font-bold text-primary">{item.step}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Оборудование */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12">
            <div className="relative">
              <div className="rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="/lupa2.webp"
                  alt={t('ProductionEquipmentImageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                  sizes={`(max-width: 1024px) 100vw, 50vw`}
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  quality={80}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-black text-primary mb-6">{t('ProductionEquipmentTitle')}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('ProductionEquipmentDescription')}
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  t('ProductionEquipmentFeature1'),
                  t('ProductionEquipmentFeature2'),
                  t('ProductionEquipmentFeature3'),
                  t('ProductionEquipmentFeature4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Интерактивная статистика */}
              
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes marquee-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-slow {
            animation: marquee-slow 40s linear infinite;
          }
          .animate-marquee-fast {
            animation: marquee-fast 35s linear infinite;
          }
        `}</style>
      </section>

      {/* Quality Control Section */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-primary mb-4">{t('QualityControlTitle')}</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('QualityControlSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{t('QualityControlStep1Title')}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {t('QualityControlStep1Description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{t('QualityControlStep2Title')}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {t('QualityControlStep2Description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <CheckSquare className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{t('QualityControlStep3Title')}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {t('QualityControlStep3Description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 sm:mt-16 bg-card p-6 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif font-black text-primary mb-4 sm:mb-6 text-center">{t('QualityControlLabTitle')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {t('QualityControlLabDescription')}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    t('QualityControlTest1'),
                    t('QualityControlTest2'),
                    t('QualityControlTest3'),
                    t('QualityControlTest4'),
                    t('QualityControlTest5')
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/laba.webp"
                  alt={t('QualityControlLabImageAlt')}
                  width={500}
                  height={350}
                  className="rounded-lg shadow-xl w-full h-auto"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-primary mb-4">{t('AdvantagesTitle')}</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('AdvantagesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{t('Advantage1Title')}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {t('Advantage1Description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Recycle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{t('Advantage2Title')}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {t('Advantage2Description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{t('Advantage3Title')}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {t('Advantage3Description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-primary mb-4 sm:mb-6">{t('CTATitle')}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t('CTASubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
              <Link href="/product">
                {t('CTAButton1')} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3"
              onClick={() => setIsModalOpen(true)}
            >
              {t('CTAButton2')}
            </Button>
          </div>
        </div>
      </section> */}

      <TelegramModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}