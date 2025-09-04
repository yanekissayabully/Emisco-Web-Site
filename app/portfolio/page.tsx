// "use client"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, MapPin, Calendar, Star, Quote } from "lucide-react"
// import Link from "next/link"
// import { useI18n } from "@/providers/i18n-providers"

// export default function PortfolioPage() {
//   const { t } = useI18n()
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">{t("portfolioTitle")}</h1>
//             <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
//               {t("portfolioSubtitle")}
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//               <div className="text-center">
//                 <div className="text-3xl font-serif font-black text-primary mb-2">150+</div>
//                 <p className="text-muted-foreground">{t("portfolioStat1")}</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-serif font-black text-secondary mb-2">2.5M</div>
//                 <p className="text-muted-foreground">{t("portfolioStat2")}</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-serif font-black text-primary mb-2">45%</div>
//                 <p className="text-muted-foreground">{t("portfolioStat3")}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('portfolioBestTitle')}</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               {t('portfolioBestSubtitle')}
//             </p>
//           </div>

//           <div className="space-y-16">
//             {/* Project 1 - Eco Housing Development */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{t('caseBadge1')}</Badge>
//                 <h3 className="text-2xl sm:text-3xl font-serif font-black text-primary mb-4">
//                   {t('caseTitle1')}
//                 </h3>
//                 <div className="flex items-center gap-4 text-muted-foreground mb-6">
//                   <div className="flex items-center gap-1">
//                     <MapPin className="h-4 w-4" />
//                     <span className="text-sm">{t('caseLocation1')}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Calendar className="h-4 w-4" />
//                     <span className="text-sm">2023</span>
//                   </div>
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                   {t('caseDescr1')}
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div>
//                     <div className="text-2xl font-serif font-bold text-secondary mb-1">65%</div>
//                     <p className="text-sm text-muted-foreground">{t('caseStat1')}</p>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-serif font-bold text-primary mb-1">-450t</div>
//                     <p className="text-sm text-muted-foreground">{t('caseStat2')} </p>
//                   </div>
//                 </div>
//                 <Button asChild>
//                   <Link href="#case-study-1">
//                     {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//               <div className="relative">
//                 <img
//                   src="/1d.jpg"
//                   alt="Green Valley Housing Estate"
//                   className="rounded-lg shadow-2xl w-full h-auto"
//                 />
//               </div>
//             </div>

//             {/* Project 2 - Commercial Building */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div className="order-2 lg:order-1 relative">
//                 <img
//                   src="/2d.jpg"
//                   alt="Sustainable Office Complex"
//                   className="rounded-lg shadow-2xl w-full h-auto"
//                 />
//               </div>
//               <div className="order-1 lg:order-2">
//                 <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">{t('caseBadge2')}</Badge>
//                 <h3 className="text-2xl sm:text-3xl font-serif font-black text-primary mb-4">{t('caseTitle2')}</h3>
//                 <div className="flex items-center gap-4 text-muted-foreground mb-6">
//                   <div className="flex items-center gap-1">
//                     <MapPin className="h-4 w-4" />
//                     <span className="text-sm">{t('caseLocation2')}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Calendar className="h-4 w-4" />
//                     <span className="text-sm">2022</span>
//                   </div>
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                   {t('caseDescr2')}
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div>
//                     <div className="text-2xl font-serif font-bold text-primary mb-1">LEED</div>
//                     <p className="text-sm text-muted-foreground">{t('caseStat3')}</p>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-serif font-bold text-secondary mb-1">40%</div>
//                     <p className="text-sm text-muted-foreground">{t('caseStat4')}</p>
//                   </div>
//                 </div>
//                 <Button asChild variant="outline">
//                   <Link href="#case-study-2">
//                     {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>

//             {/* Project 3 - Educational Facility */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{t('caseBadge3')}</Badge>
//                 <h3 className="text-2xl sm:text-3xl font-serif font-black text-primary mb-4">
//                   {t('caseTitle3')}
//                 </h3>
//                 <div className="flex items-center gap-4 text-muted-foreground mb-6">
//                   <div className="flex items-center gap-1">
//                     <MapPin className="h-4 w-4" />
//                     <span className="text-sm">{t('caseLocation3')}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Calendar className="h-4 w-4" />
//                     <span className="text-sm">2023</span>
//                   </div>
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                   {t('caseDescr3')}
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div>
//                     <div className="text-2xl font-serif font-bold text-secondary mb-1">800</div>
//                     <p className="text-sm text-muted-foreground">{t('caseStat5')}</p>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-serif font-bold text-primary mb-1">Zero</div>
//                     <p className="text-sm text-muted-foreground">{t('caseStat6')}</p>
//                   </div>
//                 </div>
//                 <Button asChild>
//                   <Link href="#case-study-3">
//                     {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//               <div className="relative">
//                 <img
//                   src="/3d.jpg"
//                   alt="Future Learning Academy"
//                   className="rounded-lg shadow-2xl w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Categories */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('categoryTitle')}</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               {t('categorySubtitle')}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-6">
//                 <img
//                   src="/res.jpg"
//                   alt="Residential Projects"
//                   className="w-full h-32 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-serif font-bold mb-2">{t('category1')}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {t('categorydescr1')}
//                 </p>
//                 <div className="text-2xl font-serif font-bold text-primary mb-1">85</div>
//                 <p className="text-xs text-muted-foreground">{t('categoryComp')}</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-6">
//                 <img
//                   src="/com.jpg"
//                   alt="Commercial Projects"
//                   className="w-full h-32 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-serif font-bold mb-2">{t('category2')}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {t('categorydescr2')}
//                 </p>
//                 <div className="text-2xl font-serif font-bold text-secondary mb-1">42</div>
//                 <p className="text-xs text-muted-foreground">{t('categoryComp')}</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-6">
//                 <img
//                   src="/ed.jpg"
//                   alt="Institutional Projects"
//                   className="w-full h-32 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-serif font-bold mb-2">{t('category3')}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">{t('categorydescr3')}</p>
//                 <div className="text-2xl font-serif font-bold text-primary mb-1">18</div>
//                 <p className="text-xs text-muted-foreground">{t('categoryComp')}</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-6">
//                 <img
//                   src="/in.jpg"
//                   alt="Industrial Projects"
//                   className="w-full h-32 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-serif font-bold mb-2">{t('category4')}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">{t('categorydescr4')}</p>
//                 <div className="text-2xl font-serif font-bold text-secondary mb-1">12</div>
//                 <p className="text-xs text-muted-foreground">{t('categoryComp')}</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>


//       {/* CTA Section */}
//       <section className="py-20 bg-primary text-primary-foreground">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">{t('portfolioCtaTitle')}</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//             {t('portfolioCtaSubtitle')}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
//               <Link href="/services">
//                 {t('portfolioCtaButton1')} <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 bg-transparent"
//             >
//               <Link href="/product">{t('portfolioCtaButton2')}</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }







"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Star, Quote, Eye, X, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/providers/i18n-providers"

// Добавим интерфейс для медиа-элементов
interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

interface ProjectMedia {
  id: string;
  title: string;
  media: MediaItem[];
}

export default function PortfolioPage() {
  const { t } = useI18n()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectMedia | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Данные для медиа каждого проекта
  const projectsMedia: Record<string, ProjectMedia> = {
    'case-study-1': {
      id: 'case-study-1',
      title: t('caseTitle1'),
      media: [
        { type: 'image', url: '/1d.jpg', alt: 'Green Valley Housing Estate' },
        { type: 'image', url: '/1d.jpg', alt: 'Green Valley Interior' },
        { type: 'video', url: '/video1.mp4', alt: 'Green Valley Tour' },
        // Добавьте другие изображения/видео
      ]
    },
    'case-study-2': {
      id: 'case-study-2',
      title: t('caseTitle2'),
      media: [
        { type: 'image', url: '/2d.jpg', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/2d.jpg', alt: 'Office Interior' },
        // Добавьте другие изображения/видео
      ]
    },
    'case-study-3': {
      id: 'case-study-3',
      title: t('caseTitle3'),
      media: [
        { type: 'image', url: '/3d.jpg', alt: 'Future Learning Academy' },
        { type: 'video', url: '/3d-video.mp4', alt: 'Campus Tour' },
        // Добавьте другие изображения/видео
      ]
    }
  };

  const openModal = (projectId: string) => {
    setCurrentProject(projectsMedia[projectId]);
    setCurrentMediaIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const nextMedia = () => {
    if (currentProject) {
      setCurrentMediaIndex((prev) => 
        prev === currentProject.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (currentProject) {
      setCurrentMediaIndex((prev) => 
        prev === 0 ? currentProject.media.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">{t("portfolioTitle")}</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t("portfolioSubtitle")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-serif font-black text-primary mb-2">150+</div>
                <p className="text-muted-foreground">{t("portfolioStat1")}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-black text-secondary mb-2">2.5M</div>
                <p className="text-muted-foreground">{t("portfolioStat2")}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-black text-primary mb-2">45%</div>
                <p className="text-muted-foreground">{t("portfolioStat3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('portfolioBestTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('portfolioBestSubtitle')}
            </p>
          </div>

          <div className="space-y-16">
            {/* Project 1 - Eco Housing Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{t('caseBadge1')}</Badge>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-primary mb-4">
                  {t('caseTitle1')}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{t('caseLocation1')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">2023</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('caseDescr1')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-serif font-bold text-secondary mb-1">65%</div>
                    <p className="text-sm text-muted-foreground">{t('caseStat1')}</p>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-primary mb-1">-450t</div>
                    <p className="text-sm text-muted-foreground">{t('caseStat2')} </p>
                  </div>
                </div>
                <Button onClick={() => openModal('case-study-1')}>
                  {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div 
                className="relative cursor-pointer group"
                onClick={() => openModal('case-study-1')}
              >
                <img
                  src="/1d.jpg"
                  alt="Green Valley Housing Estate"
                  className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Project 2 - Commercial Building */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                className="order-2 lg:order-1 relative cursor-pointer group"
                onClick={() => openModal('case-study-2')}
              >
                <img
                  src="/2d.jpg"
                  alt="Sustainable Office Complex"
                  className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">{t('caseBadge2')}</Badge>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-primary mb-4">{t('caseTitle2')}</h3>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{t('caseLocation2')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">2022</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('caseDescr2')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-serif font-bold text-primary mb-1">LEED</div>
                    <p className="text-sm text-muted-foreground">{t('caseStat3')}</p>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-secondary mb-1">40%</div>
                    <p className="text-sm text-muted-foreground">{t('caseStat4')}</p>
                  </div>
                </div>
                <Button variant="outline" onClick={() => openModal('case-study-2')}>
                  {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Project 3 - Educational Facility */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{t('caseBadge3')}</Badge>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-primary mb-4">
                  {t('caseTitle3')}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{t('caseLocation3')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">2023</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('caseDescr3')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-serif font-bold text-secondary mb-1">800</div>
                    <p className="text-sm text-muted-foreground">{t('caseStat5')}</p>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-primary mb-1">Zero</div>
                    <p className="text-sm text-muted-foreground">{t('caseStat6')}</p>
                  </div>
                </div>
                <Button onClick={() => openModal('case-study-3')}>
                  {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div 
                className="relative cursor-pointer group"
                onClick={() => openModal('case-study-3')}
              >
                <img
                  src="/3d.jpg"
                  alt="Future Learning Academy"
                  className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('categoryTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('categorySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <img
                  src="/res.jpg"
                  alt="Residential Projects"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif font-bold mb-2">{t('category1')}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('categorydescr1')}
                </p>
                <div className="text-2xl font-serif font-bold text-primary mb-1">85</div>
                <p className="text-xs text-muted-foreground">{t('categoryComp')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <img
                  src="/com.jpg"
                  alt="Commercial Projects"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif font-bold mb-2">{t('category2')}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('categorydescr2')}
                </p>
                <div className="text-2xl font-serif font-bold text-secondary mb-1">42</div>
                <p className="text-xs text-muted-foreground">{t('categoryComp')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <img
                  src="/ed.jpg"
                  alt="Institutional Projects"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif font-bold mb-2">{t('category3')}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t('categorydescr3')}</p>
                <div className="text-2xl font-serif font-bold text-primary mb-1">18</div>
                <p className="text-xs text-muted-foreground">{t('categoryComp')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <img
                  src="/in.jpg"
                  alt="Industrial Projects"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif font-bold mb-2">{t('category4')}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t('categorydescr4')}</p>
                <div className="text-2xl font-serif font-bold text-secondary mb-1">12</div>
                <p className="text-xs text-muted-foreground">{t('categoryComp')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">{t('portfolioCtaTitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('portfolioCtaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/services">
                {t('portfolioCtaButton1')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/product">{t('portfolioCtaButton2')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Модальное окно галереи */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            {/* Контент модалки */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                {currentProject.media[currentMediaIndex].type === 'image' ? (
                  <img
                    src={currentProject.media[currentMediaIndex].url}
                    alt={currentProject.media[currentMediaIndex].alt || currentProject.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <video
                    src={currentProject.media[currentMediaIndex].url}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    controls
                    autoPlay
                  />
                )}
                
                {/* Кнопки навигации */}
                {currentProject.media.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Подпись и индикаторы */}
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold mb-2">{currentProject.title}</h3>
                <p className="text-sm text-gray-600">
                  {currentMediaIndex + 1} / {currentProject.media.length}
                </p>
                
                {/* Миниатюры */}
                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {currentProject.media.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`w-16 h-16 flex-shrink-0 border-2 ${
                        index === currentMediaIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      {media.type === 'image' ? (
                        <img
                          src={media.url}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <Play className="h-6 w-6" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}