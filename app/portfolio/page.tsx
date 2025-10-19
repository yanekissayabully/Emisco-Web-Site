// 'use client'
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Eye, X, ChevronLeft, ChevronRight, Play } from "lucide-react"
// import Link from "next/link"
// import { useI18n } from "@/providers/i18n-providers"
// import TelegramModal from "@/components/TelegramModal"

// // Интерфейс для медиа-элементов
// interface MediaItem {
//   type: 'image' | 'video';
//   url: string;
//   alt?: string;
// }

// interface ProjectMedia {
//   id: string;
//   title: string;
//   category: string;
//   media: MediaItem[];
// }

// export default function PortfolioPage() {
//   const { t } = useI18n()
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
//   const [currentProject, setCurrentProject] = useState<ProjectMedia | null>(null);
//   const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

//   // Данные для проектов
//   const projects: ProjectMedia[] = [
//     {
//       id: 'case-study-1',
//       title: t('caseTitle1'),
//       category: 'residential',
//       media: [
//         { type: 'image', url: '/3s.webp', alt: 'Green Valley Housing Estate' },
//         { type: 'image', url: '/1s.webp', alt: 'Green Valley Interior' },
//         { type: 'image', url: '/2s.webp', alt: 'Green Valley Tour' },
//       ]
//     },
//     {
//       id: 'case-study-2',
//       title: t('caseTitle2'),
//       category: 'residential',
//       media: [
//         { type: 'image', url: '/g1.webp', alt: 'Sustainable Office Complex' },
//         { type: 'image', url: '/g2.webp', alt: 'Office Interior' },
//         { type: 'image', url: '/g3.webp', alt: 'Sustainable Office Complex' },
//         { type: 'image', url: '/g4.webp', alt: 'Office Interior' },
//         { type: 'image', url: '/g5.webp', alt: 'Sustainable Office Complex' },
//         { type: 'image', url: '/g6.webp', alt: 'Office Interior' },
//         { type: 'image', url: '/g7.webp', alt: 'Office Interior' },
//       ]
//     },
//     {
//       id: 'case-study-3',
//       title: t('caseTitle3'),
//       category: 'residential',
//       media: [
//         { type: 'image', url: '/1g.webp', alt: 'Sustainable Office Complex' },
//         { type: 'image', url: '/2g.webp', alt: 'Office Interior' },
//         { type: 'image', url: '/3g.webp', alt: 'Sustainable Office Complex' },
//         { type: 'image', url: '/4g.webp', alt: 'Office Interior' },
//         { type: 'image', url: '/5g.webp', alt: 'Sustainable Office Complex' },
//         { type: 'image', url: '/6g.webp', alt: 'Office Interior' },
//         { type: 'image', url: '/7g.webp', alt: 'Office Interior' },
//         { type: 'image', url: '/8g.webp', alt: 'Office Interior' },
//         { type: 'video', url: '/v1.mp4', alt: 'Campus Tour' },
//       ]
//     },
//   ];

//   const openModal = (projectId: string) => {
//     const project = projects.find(p => p.id === projectId);
//     if (project) {
//       setCurrentProject(project);
//       setCurrentMediaIndex(0);
//       setIsModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCurrentProject(null);
//   };

//   const nextMedia = () => {
//     if (currentProject) {
//       setCurrentMediaIndex((prev) => 
//         prev === currentProject.media.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevMedia = () => {
//     if (currentProject) {
//       setCurrentMediaIndex((prev) => 
//         prev === 0 ? currentProject.media.length - 1 : prev - 1
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
            
//             {/* Стат встроен в заголовок */}
//             <div className="mb-8">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
//                 {t("portfolioTitle")}
//               </h1>
              
//               <div className="inline-flex items-baseline bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20 shadow-sm mb-2">
//                 <span className="text-2xl font-black text-primary mr-2">45%</span>
//                 <span className="text-lg text-muted-foreground">{t("portfolioStat3")}</span>
//               </div>
//             </div>

//             <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
//               {t("portfolioSubtitle")}
//             </p>

//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Projects Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <Card key={project.id} className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div 
//                   className="relative overflow-hidden cursor-pointer"
//                   onClick={() => openModal(project.id)}
//                 >
//                   <img
//                     src={project.media[0].url}
//                     alt={project.title}
//                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
//                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <Eye className="h-10 w-10 text-white" />
//                     </div>
//                   </div>
//                 </div>
//                 <CardContent className="p-6">
//                   <Button 
//                     onClick={() => openModal(project.id)}
//                     variant="outline" 
//                     className="w-full"
//                   >
//                     {t('viewProject')} <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-primary text-primary-foreground">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">{t('portfolioCtaTitle')}</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//             {t('portfolioCtaSubtitle')}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button 
//               size="lg" 
//               variant="secondary" 
//               className="text-lg px-8 py-3"
//               onClick={() => setIsTelegramModalOpen(true)}
//             >
//               {t('portfolioCtaButton1')} <ArrowRight className="ml-2 h-5 w-5" />
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

//       {/* Модальное окно галереи */}
//       {isModalOpen && currentProject && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6">
//           <div className="relative w-full max-w-6xl max-h-[95vh] mx-auto flex flex-col">
            
//             {/* Кнопка закрытия */}
//             <button
//               onClick={closeModal}
//               className="absolute -top-12 right-2 sm:right-0 z-50 p-3 bg-black/50 text-white rounded-full 
//                          hover:bg-black/70 transition-all duration-200 hover:scale-110 backdrop-blur-sm
//                          border border-white/20 shadow-lg"
//             >
//               <X className="h-6 w-6 sm:h-7 sm:w-7" />
//             </button>
            
//             {/* Основной контейнер */}
//             <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full border border-white/20">
              
//               {/* Заголовок и описание */}
//               <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 border-b border-gray-200">
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
//                   <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
//                     {currentProject.title}
//                   </h2>
//                   <span className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full 
//                                   font-medium whitespace-nowrap self-start sm:self-auto">
//                     {currentMediaIndex + 1} из {currentProject.media.length}
//                   </span>
//                 </div>
                
//                 {/* Описание проекта */}
//                 <div className="max-h-16 sm:max-h-20 md:max-h-24 overflow-y-auto">
//                   <p className="text-sm sm:text-base text-gray-600 leading-relaxed pr-2">
//                     {currentProject.id === 'case-study-1' && t('caseDescr1')}
//                     {currentProject.id === 'case-study-2' && t('caseDescr2')}
//                     {currentProject.id === 'case-study-3' && t('caseDescr3')}
//                   </p>
//                 </div>
//               </div>

//               {/* Медиа контент */}
//               <div className="relative flex-1 bg-gray-900 flex items-center justify-center 
//                              min-h-[250px] sm:min-h-[350px] lg:min-h-[60vh] xl:min-h-[70vh] overflow-hidden">
//                 {currentProject.media[currentMediaIndex].type === 'image' ? (
//                   <img
//                     src={currentProject.media[currentMediaIndex].url}
//                     alt={currentProject.media[currentMediaIndex].alt || currentProject.title}
//                     className="w-auto h-full max-h-[70vh] object-contain"
//                   />
//                 ) : (
//                   <video
//                     src={currentProject.media[currentMediaIndex].url}
//                     className="w-auto h-full max-h-[70vh] object-contain"
//                     controls
//                     autoPlay
//                     muted
//                     playsInline
//                   />
//                 )}

//                 {/* Навигация по медиа */}
//                 {currentProject.media.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevMedia}
//                       className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 
//                                bg-black/60 text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-black/80 
//                                transition-all duration-200 hover:scale-110 border border-white/20 shadow-lg"
//                     >
//                       <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//                     </button>
//                     <button
//                       onClick={nextMedia}
//                       className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 
//                                bg-black/60 text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-black/80 
//                                transition-all duration-200 hover:scale-110 border border-white/20 shadow-lg"
//                     >
//                       <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Миниатюры и действия */}
//               <div className="p-2 sm:p-3 md:p-4 lg:p-5 bg-gray-50/90 backdrop-blur-sm">
//                 <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 sm:pb-3 md:pb-4">
//                   {currentProject.media.map((media, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentMediaIndex(index)}
//                       className={`flex-shrink-0 relative group transition-all duration-200 ${
//                         index === currentMediaIndex 
//                           ? 'ring-2 sm:ring-3 ring-primary ring-offset-1 sm:ring-offset-2 scale-105 shadow-md' 
//                           : 'opacity-70 hover:opacity-100 hover:scale-105'
//                       }`}
//                     >
//                       {media.type === 'image' ? (
//                         <img
//                           src={media.url}
//                           alt=""
//                           className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-cover rounded-lg"
//                         />
//                       ) : (
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
//                           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
//                           <Play className="h-4 w-4 sm:h-5 sm:w-5" />
//                         </div>
//                       )}

//                       {media.type === 'video' && (
//                         <div className="absolute top-1 right-1 bg-black/80 text-white p-1 rounded">
//                           <Play className="h-2 w-2 sm:h-3 sm:w-3" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-gray-300/50">
//                   <Button 
//                     onClick={closeModal}
//                     variant="outline" 
//                     size="lg"
//                     className="flex-1 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold"
//                   >
//                     Закрыть
//                   </Button>
//                   <Button 
//                     onClick={() => {
//                       closeModal();
//                       setTimeout(() => setIsTelegramModalOpen(true), 300);
//                     }}
//                     size="lg"
//                     className="flex-1 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-primary hover:bg-primary/90"
//                   >
//                     Обсудить проект
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Модалка для заявки в Telegram */}
//       <TelegramModal 
//         isOpen={isTelegramModalOpen} 
//         onClose={() => setIsTelegramModalOpen(false)} 
//       />
//     </div>
//   )
// }









'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Eye, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/providers/i18n-providers"
import TelegramModal from "@/components/TelegramModal"

// Интерфейс для медиа-элементов
interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

interface ProjectMedia {
  id: string;
  title: string;
  category: string;
  media: MediaItem[];
}

export default function PortfolioPage() {
  const { t } = useI18n()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectMedia | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Данные для проектов
  const projects: ProjectMedia[] = [
    {
      id: 'case-study-1',
      title: t('caseTitle1'),
      category: 'residential',
      media: [
        { type: 'image', url: '/3s.webp', alt: 'Green Valley Housing Estate' },
        { type: 'image', url: '/1s.webp', alt: 'Green Valley Interior' },
        { type: 'image', url: '/2s.webp', alt: 'Green Valley Tour' },
      ]
    },
    {
      id: 'case-study-2',
      title: t('caseTitle2'),
      category: 'residential',
      media: [
        { type: 'image', url: '/g1.webp', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/g2.webp', alt: 'Office Interior' },
        { type: 'image', url: '/g3.webp', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/g4.webp', alt: 'Office Interior' },
        { type: 'image', url: '/g5.webp', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/g6.webp', alt: 'Office Interior' },
        { type: 'image', url: '/g7.webp', alt: 'Office Interior' },
      ]
    },
    {
      id: 'case-study-3',
      title: t('caseTitle3'),
      category: 'residential',
      media: [
        { type: 'image', url: '/1g.webp', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/2g.webp', alt: 'Office Interior' },
        { type: 'image', url: '/3g.webp', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/4g.webp', alt: 'Office Interior' },
        { type: 'image', url: '/5g.webp', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/6g.webp', alt: 'Office Interior' },
        { type: 'image', url: '/7g.webp', alt: 'Office Interior' },
        { type: 'image', url: '/8g.webp', alt: 'Office Interior' },
        { type: 'video', url: '/v1.mp4', alt: 'Campus Tour' },
      ]
    },
  ];

  const openModal = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setCurrentProject(project);
      setCurrentMediaIndex(0);
      setIsModalOpen(true);
    }
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
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Стат встроен в заголовок */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
                {t("portfolioTitle")}
              </h1>
              
              <div className="inline-flex items-baseline bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20 shadow-sm mb-2">
                <span className="text-2xl font-black text-primary mr-2">45%</span>
                <span className="text-lg text-muted-foreground">{t("portfolioStat3")}</span>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              {t("portfolioSubtitle")}
            </p>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div 
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => openModal(project.id)}
                >
                  <img
                    src={project.media[0].url}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button 
                    onClick={() => openModal(project.id)}
                    variant="outline" 
                    className="w-full"
                  >
                    {t('viewProject')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">{t('portfolioCtaTitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('portfolioCtaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3"
              onClick={() => setIsTelegramModalOpen(true)}
            >
              {t('portfolioCtaButton1')} <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Модальное окно галереи - ТОЛЬКО ФОТО */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6">
          <div className="relative w-full max-w-6xl max-h-[95vh] mx-auto">
            
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-2 sm:right-0 z-50 p-3 bg-black/50 text-white rounded-full 
                         hover:bg-black/70 transition-all duration-200 hover:scale-110 backdrop-blur-sm
                         border border-white/20 shadow-lg"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
            
            {/* Основной контейнер */}
            <div className="bg-black rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">

              {/* Медиа контент */}
              <div className="relative bg-black flex items-center justify-center 
                             min-h-[70vh] sm:min-h-[80vh] overflow-hidden">
                {currentProject.media[currentMediaIndex].type === 'image' ? (
                  <img
                    src={currentProject.media[currentMediaIndex].url}
                    alt={currentProject.media[currentMediaIndex].alt || currentProject.title}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                ) : (
                  <video
                    src={currentProject.media[currentMediaIndex].url}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                )}

                {/* Навигация по медиа */}
                {currentProject.media.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 
                               bg-black/60 text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-black/80 
                               transition-all duration-200 hover:scale-110 border border-white/20 shadow-lg"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 
                               bg-black/60 text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-black/80 
                               transition-all duration-200 hover:scale-110 border border-white/20 shadow-lg"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    </button>
                  </>
                )}

                {/* Счетчик фото */}
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                  {currentMediaIndex + 1} / {currentProject.media.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Модалка для заявки в Telegram */}
      <TelegramModal 
        isOpen={isTelegramModalOpen} 
        onClose={() => setIsTelegramModalOpen(false)} 
      />
    </div>
  )
}