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







// "use client"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, MapPin, Calendar, Star, Quote, Eye, X, ChevronLeft, ChevronRight, Play } from "lucide-react"
// import Link from "next/link"
// import { useI18n } from "@/providers/i18n-providers"

// // Добавим интерфейс для медиа-элементов
// interface MediaItem {
//   type: 'image' | 'video';
//   url: string;
//   alt?: string;
// }

// interface ProjectMedia {
//   id: string;
//   title: string;
//   media: MediaItem[];
// }

// export default function PortfolioPage() {
//   const { t } = useI18n()
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProject, setCurrentProject] = useState<ProjectMedia | null>(null);
//   const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

//   // Данные для медиа каждого проекта
//   const projectsMedia: Record<string, ProjectMedia> = {
//     'case-study-1': {
//       id: 'case-study-1',
//       title: t('caseTitle1'),
//       media: [
//         { type: 'image', url: '/1d.jpg', alt: 'Green Valley Housing Estate' },
//         { type: 'image', url: '/1d.jpg', alt: 'Green Valley Interior' },
//         { type: 'video', url: '/video1.mp4', alt: 'Green Valley Tour' },
//         // Добавьте другие изображения/видео
//       ]
//     },
//     'case-study-2': {
//       id: 'case-study-2',
//       title: t('caseTitle2'),
//       media: [
//         { type: 'image', url: '/2d.jpg', alt: 'Sustainable Office Complex' },
//         { type: 'image', url: '/2d.jpg', alt: 'Office Interior' },
//         // Добавьте другие изображения/видео
//       ]
//     },
//     'case-study-3': {
//       id: 'case-study-3',
//       title: t('caseTitle3'),
//       media: [
//         { type: 'image', url: '/3d.jpg', alt: 'Future Learning Academy' },
//         { type: 'video', url: '/3d-video.mp4', alt: 'Campus Tour' },
//         // Добавьте другие изображения/видео
//       ]
//     }
//   };

//   const openModal = (projectId: string) => {
//     setCurrentProject(projectsMedia[projectId]);
//     setCurrentMediaIndex(0);
//     setIsModalOpen(true);
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
//                 <Button onClick={() => openModal('case-study-1')}>
//                   {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//               <div 
//                 className="relative cursor-pointer group"
//                 onClick={() => openModal('case-study-1')}
//               >
//                 <img
//                   src="/1d.jpg"
//                   alt="Green Valley Housing Estate"
//                   className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* Project 2 - Commercial Building */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div 
//                 className="order-2 lg:order-1 relative cursor-pointer group"
//                 onClick={() => openModal('case-study-2')}
//               >
//                 <img
//                   src="/2d.jpg"
//                   alt="Sustainable Office Complex"
//                   className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
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
//                 <Button variant="outline" onClick={() => openModal('case-study-2')}>
//                   {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
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
//                 <Button onClick={() => openModal('case-study-3')}>
//                   {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//               <div 
//                 className="relative cursor-pointer group"
//                 onClick={() => openModal('case-study-3')}
//               >
//                 <img
//                   src="/3d.jpg"
//                   alt="Future Learning Academy"
//                   className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
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

//       {/* Модальное окно галереи */}
//       {isModalOpen && currentProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-6xl w-full max-h-full">
//             {/* Кнопка закрытия */}
//             <button
//               onClick={closeModal}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
//             >
//               <X className="h-8 w-8" />
//             </button>
            
//             {/* Контент модалки */}
//             <div className="bg-white rounded-lg overflow-hidden">
//               <div className="relative">
//                 {currentProject.media[currentMediaIndex].type === 'image' ? (
//                   <img
//                     src={currentProject.media[currentMediaIndex].url}
//                     alt={currentProject.media[currentMediaIndex].alt || currentProject.title}
//                     className="w-full h-auto max-h-[70vh] object-contain"
//                   />
//                 ) : (
//                   <video
//                     src={currentProject.media[currentMediaIndex].url}
//                     className="w-full h-auto max-h-[70vh] object-contain"
//                     controls
//                     autoPlay
//                   />
//                 )}
                
//                 {/* Кнопки навигации */}
//                 {currentProject.media.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevMedia}
//                       className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//                     >
//                       <ChevronLeft className="h-6 w-6" />
//                     </button>
//                     <button
//                       onClick={nextMedia}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//                     >
//                       <ChevronRight className="h-6 w-6" />
//                     </button>
//                   </>
//                 )}
//               </div>
              
//               {/* Подпись и индикаторы */}
//               <div className="p-4 bg-white">
//                 <h3 className="text-xl font-bold mb-2">{currentProject.title}</h3>
//                 <p className="text-sm text-gray-600">
//                   {currentMediaIndex + 1} / {currentProject.media.length}
//                 </p>
                
//                 {/* Миниатюры */}
//                 <div className="flex gap-2 mt-4 overflow-x-auto">
//                   {currentProject.media.map((media, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentMediaIndex(index)}
//                       className={`w-16 h-16 flex-shrink-0 border-2 ${
//                         index === currentMediaIndex ? 'border-primary' : 'border-transparent'
//                       }`}
//                     >
//                       {media.type === 'image' ? (
//                         <img
//                           src={media.url}
//                           alt=""
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                           <Play className="h-6 w-6" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }






// 'use client'
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, MapPin, Calendar, Star, Quote, Eye, X, ChevronLeft, ChevronRight, Play } from "lucide-react"
// import Link from "next/link"
// import { useI18n } from "@/providers/i18n-providers"
// import TelegramModal from "@/components/TelegramModal"

// // Добавим интерфейс для медиа-элементов
// interface MediaItem {
//   type: 'image' | 'video';
//   url: string;
//   alt?: string;
// }

// interface ProjectMedia {
//   id: string;
//   title: string;
//   media: MediaItem[];
// }

// export default function PortfolioPage() {
//   const { t } = useI18n()
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
//   const [currentProject, setCurrentProject] = useState<ProjectMedia | null>(null);
//   const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

//   // Данные для медиа каждого проекта
//   const projectsMedia: Record<string, ProjectMedia> = {
//     'case-study-1': {
//       id: 'case-study-1',
//       title: t('caseTitle1'),
//       media: [
//         { type: 'image', url: '/1d.jpg', alt: 'Green Valley Housing Estate' },
//         { type: 'image', url: '/1d.jpg', alt: 'Green Valley Interior' },
//         { type: 'video', url: '/video1.mp4', alt: 'Green Valley Tour' },
//         // Добавьте другие изображения/видео
//       ]
//     },
//     'case-study-2': {
//       id: 'case-study-2',
//       title: t('caseTitle2'),
//       media: [
//         { type: 'image', url: '/2d.jpg', alt: 'Sustainable Office Complex' },
//         { type: 'image', url: '/2d.jpg', alt: 'Office Interior' },
//         // Добавьте другие изображения/видео
//       ]
//     },
//     'case-study-3': {
//       id: 'case-study-3',
//       title: t('caseTitle3'),
//       media: [
//         { type: 'image', url: '/3d.jpg', alt: 'Future Learning Academy' },
//         { type: 'video', url: '/3d-video.mp4', alt: 'Campus Tour' },
//         // Добавьте другие изображения/видео
//       ]
//     }
//   };

//   const openModal = (projectId: string) => {
//     setCurrentProject(projectsMedia[projectId]);
//     setCurrentMediaIndex(0);
//     setIsModalOpen(true);
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
//                 <Button onClick={() => openModal('case-study-1')}>
//                   {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//               <div 
//                 className="relative cursor-pointer group"
//                 onClick={() => openModal('case-study-1')}
//               >
//                 <img
//                   src="/1d.jpg"
//                   alt="Green Valley Housing Estate"
//                   className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* Project 2 - Commercial Building */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div 
//                 className="order-2 lg:order-1 relative cursor-pointer group"
//                 onClick={() => openModal('case-study-2')}
//               >
//                 <img
//                   src="/2d.jpg"
//                   alt="Sustainable Office Complex"
//                   className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
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
//                 <Button variant="outline" onClick={() => openModal('case-study-2')}>
//                   {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
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
//                 <Button onClick={() => openModal('case-study-3')}>
//                   {t('caseButton')} <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//               <div 
//                 className="relative cursor-pointer group"
//                 onClick={() => openModal('case-study-3')}
//               >
//                 <img
//                   src="/3d.jpg"
//                   alt="Future Learning Academy"
//                   className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
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
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-6xl w-full max-h-full">
//             {/* Кнопка закрытия */}
//             <button
//               onClick={closeModal}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
//             >
//               <X className="h-8 w-8" />
//             </button>
            
//             {/* Контент модалки */}
//             <div className="bg-white rounded-lg overflow-hidden">
//               <div className="relative">
//                 {currentProject.media[currentMediaIndex].type === 'image' ? (
//                   <img
//                     src={currentProject.media[currentMediaIndex].url}
//                     alt={currentProject.media[currentMediaIndex].alt || currentProject.title}
//                     className="w-full h-auto max-h-[70vh] object-contain"
//                   />
//                 ) : (
//                   <video
//                     src={currentProject.media[currentMediaIndex].url}
//                     className="w-full h-auto max-h-[70vh] object-contain"
//                     controls
//                     autoPlay
//                   />
//                 )}
                
//                 {/* Кнопки навигации */}
//                 {currentProject.media.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevMedia}
//                       className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//                     >
//                       <ChevronLeft className="h-6 w-6" />
//                     </button>
//                     <button
//                       onClick={nextMedia}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//                     >
//                       <ChevronRight className="h-6 w-6" />
//                     </button>
//                   </>
//                 )}
//               </div>
              
//               {/* Подпись и индикаторы */}
//               <div className="p-4 bg-white">
//                 <h3 className="text-xl font-bold mb-2">{currentProject.title}</h3>
//                 <p className="text-sm text-gray-600">
//                   {currentMediaIndex + 1} / {currentProject.media.length}
//                 </p>
                
//                 {/* Миниатюры */}
//                 <div className="flex gap-2 mt-4 overflow-x-auto">
//                   {currentProject.media.map((media, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentMediaIndex(index)}
//                       className={`w-16 h-16 flex-shrink-0 border-2 ${
//                         index === currentMediaIndex ? 'border-primary' : 'border-transparent'
//                       }`}
//                     >
//                       {media.type === 'image' ? (
//                         <img
//                           src={media.url}
//                           alt=""
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                           <Play className="h-6 w-6" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
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
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, X, ChevronLeft, ChevronRight, Play } from "lucide-react"
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
        { type: 'image', url: '/3s.png', alt: 'Green Valley Housing Estate' },
        { type: 'image', url: '/1s.jpg', alt: 'Green Valley Interior' },
        { type: 'image', url: '/2s.jpg', alt: 'Green Valley Tour' },
      ]
    },
    {
      id: 'case-study-2',
      title: t('caseTitle2'),
      category: 'residential',
      media: [
        { type: 'image', url: '/g1.jpeg', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/g2.jpeg', alt: 'Office Interior' },
        { type: 'image', url: '/g3.jpeg', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/g4.jpeg', alt: 'Office Interior' },
        { type: 'image', url: '/g5.jpeg', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/g6.jpeg', alt: 'Office Interior' },
        { type: 'image', url: '/g7.jpeg', alt: 'Office Interior' },
      ]
    },
    {
      id: 'case-study-3',
      title: t('caseTitle3'),
      category: 'residential',
      media: [
        { type: 'image', url: '/1g.jpeg', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/2g.jpg', alt: 'Office Interior' },
        { type: 'image', url: '/3g.jpg', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/4g.jpg', alt: 'Office Interior' },
        { type: 'image', url: '/5g.jpeg', alt: 'Sustainable Office Complex' },
        { type: 'image', url: '/6g.jpeg', alt: 'Office Interior' },
        { type: 'image', url: '/7g.jpeg', alt: 'Office Interior' },
        { type: 'image', url: '/8g.jpeg', alt: 'Office Interior' },
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
                  <Badge className="absolute top-4 left-4">
                    {project.category === 'residential' && t('category1')}
                    {project.category === 'commercial' && t('category2')}
                    {project.category === 'institutional' && t('category3')}
                    {project.category === 'industrial' && t('category4')}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.id === 'case-study-1' && t('caseDescr1Short')}
                    {project.id === 'case-study-2' && t('caseDescr2Short')}
                    {project.id === 'case-study-3' && t('caseDescr3Short')}
                  </p>
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

      {/* Модальное окно галереи */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6">
          <div className="relative w-full max-w-6xl max-h-[95vh] mx-auto flex flex-col">
            
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
            <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full border border-white/20">
              
              {/* Заголовок и описание */}
              <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    {currentProject.title}
                  </h2>
                  <span className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full 
                                  font-medium whitespace-nowrap self-start sm:self-auto">
                    {currentMediaIndex + 1} из {currentProject.media.length}
                  </span>
                </div>
                
                {/* Описание проекта */}
                <div className="max-h-16 sm:max-h-20 md:max-h-24 overflow-y-auto">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed pr-2">
                    {currentProject.id === 'case-study-1' && t('caseDescr1')}
                    {currentProject.id === 'case-study-2' && t('caseDescr2')}
                    {currentProject.id === 'case-study-3' && t('caseDescr3')}
                  </p>
                </div>
              </div>

              {/* Медиа контент */}
              <div className="relative flex-1 bg-gray-900 flex items-center justify-center 
                             min-h-[250px] sm:min-h-[350px] lg:min-h-[60vh] xl:min-h-[70vh] overflow-hidden">
                {currentProject.media[currentMediaIndex].type === 'image' ? (
                  <img
                    src={currentProject.media[currentMediaIndex].url}
                    alt={currentProject.media[currentMediaIndex].alt || currentProject.title}
                    className="w-auto h-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <video
                    src={currentProject.media[currentMediaIndex].url}
                    className="w-auto h-full max-h-[70vh] object-contain"
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
              </div>

              {/* Миниатюры и действия */}
              <div className="p-2 sm:p-3 md:p-4 lg:p-5 bg-gray-50/90 backdrop-blur-sm">
                <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 sm:pb-3 md:pb-4">
                  {currentProject.media.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`flex-shrink-0 relative group transition-all duration-200 ${
                        index === currentMediaIndex 
                          ? 'ring-2 sm:ring-3 ring-primary ring-offset-1 sm:ring-offset-2 scale-105 shadow-md' 
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      {media.type === 'image' ? (
                        <img
                          src={media.url}
                          alt=""
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                          <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      )}

                      {media.type === 'video' && (
                        <div className="absolute top-1 right-1 bg-black/80 text-white p-1 rounded">
                          <Play className="h-2 w-2 sm:h-3 sm:w-3" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-gray-300/50">
                  <Button 
                    onClick={closeModal}
                    variant="outline" 
                    size="lg"
                    className="flex-1 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold"
                  >
                    Закрыть
                  </Button>
                  <Button 
                    onClick={() => {
                      closeModal();
                      setTimeout(() => setIsTelegramModalOpen(true), 300);
                    }}
                    size="lg"
                    className="flex-1 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-primary hover:bg-primary/90"
                  >
                    Обсудить проект
                  </Button>
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