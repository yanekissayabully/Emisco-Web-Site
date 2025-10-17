// 'use client'
// import { useState } from 'react';
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { ArrowRight, CheckCircle, Users, Truck, Wrench, HeadphonesIcon, Calculator, FileText } from "lucide-react"
// import Link from "next/link"
// import TelegramModal from "@/components/TelegramModal"

// export default function ServicesPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">Что мы предлагаем? </h1>
//             <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
//               EmisCO предоставляет полный комплекс услуг для экологичного строительства – от производства материалов до возведения домов “под ключ”. Наш опыт позволяет нам сопровождать проект на всех этапах.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Core Services */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Core Services</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Everything you need for successful sustainable construction projects
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Users className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl font-serif">Design Consultation</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   Work with our expert team to optimize your building design for maximum sustainability and performance
//                   using miscanthus blocks and panels.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     Architectural integration planning
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     Thermal performance optimization
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     Sustainability certification support
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Truck className="h-8 w-8 text-secondary" />
//                 </div>
//                 <CardTitle className="text-xl font-serif">Supply & Logistics</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   Reliable delivery of high-quality miscanthus blocks and panels with flexible scheduling to meet your project
//                   timeline and budget requirements.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Just-in-time delivery scheduling
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Quality assurance testing
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Inventory management support
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Wrench className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl font-serif">Installation</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   Installation panels and blocks on site to ensure proper performance of your construction.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     On-site installation
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     Quality control inspections
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <HeadphonesIcon className="h-8 w-8 text-secondary" />
//                 </div>
//                 <CardTitle className="text-xl font-serif">Technical Support</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   Ongoing technical assistance throughout your project lifecycle with expert guidance on best practices
//                   and troubleshooting.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Remote consultation services
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Performance monitoring guidance
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Calculator className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl font-serif">Cost Estimation</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   Detailed cost analysis and budgeting support to help you make informed decisions about your
//                   sustainable construction investment.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     Detailed project cost breakdowns
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     ROI and payback analysis
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     Financing options guidance
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//           </div>
//         </div>
//       </section>

//       {/* Service Process */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Our Process</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               A streamlined approach to ensure your project's success from start to finish
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
//                 1
//               </div>
//               <h3 className="font-serif font-bold mb-2 text-lg">Initial Consultation</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 We discuss your project requirements, sustainability goals, and technical specifications to understand
//                 your vision.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
//                 2
//               </div>
//               <h3 className="font-serif font-bold mb-2 text-lg">Design & Planning</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 Our experts work with your team to optimize the design for maximum performance and sustainability
//                 benefits.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
//                 3
//               </div>
//               <h3 className="font-serif font-bold mb-2 text-lg">Supply & Support</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 We deliver high-quality blocks on schedule and provide on-site technical support during construction.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
//                 4
//               </div>
//               <h3 className="font-serif font-bold mb-2 text-lg">Ongoing Partnership</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 We maintain a long-term relationship with performance monitoring and continued technical assistance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* CTA Section */}
//       <section className="py-20 bg-primary text-primary-foreground">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">Ready to Get Started?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//             Contact our team today to discuss your project requirements and discover how Emisco can help you build
//             sustainably.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button 
//               size="lg" 
//               variant="secondary" 
//               className="text-lg px-8 py-3"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 bg-transparent"
//             >
//               <Link href="/portfolio">View Our Work</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Модалка для заявки */}
//       <TelegramModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//       />
//     </div>
//   )
// }









'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Truck, Wrench, HeadphonesIcon, Calculator, FileText } from "lucide-react"
import Link from "next/link"
import TelegramModal from "@/components/TelegramModal"
import { useI18n } from '@/providers/i18n-providers';

export default function ServicesPage() {
  const { t } = useI18n()
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">{t('ServicesTitle')}</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t('ServicesSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('CoreServicesTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('CoreServicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{t('Service1Title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('Service1Description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {t('Service1Feature1')}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {t('Service1Feature2')}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {t('Service1Feature3')}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">{t('Service2Title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('Service2Description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    {t('Service2Feature1')}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    {t('Service2Feature2')}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    {t('Service2Feature3')}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{t('Service3Title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('Service3Description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {t('Service3Feature1')}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {t('Service3Feature2')}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">{t('Service4Title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('Service4Description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    {t('Service4Feature1')}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    {t('Service4Feature2')}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{t('Service5Title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('Service5Description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {t('Service5Feature1')}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {t('Service5Feature2')}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {t('Service5Feature3')}
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('ProcessTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('ProcessSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-serif font-bold mb-2 text-lg">{t('ProcessStep1Title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('ProcessStep1Description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-serif font-bold mb-2 text-lg">{t('ProcessStep2Title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('ProcessStep2Description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-serif font-bold mb-2 text-lg">{t('ProcessStep3Title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('ProcessStep3Description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-serif font-bold mb-2 text-lg">{t('ProcessStep4Title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('ProcessStep4Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">{t('CTATitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('CTASubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3"
              onClick={() => setIsModalOpen(true)}
            >
              {t('CTAButton1')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/portfolio">{t('CTAButton2')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Модалка для заявки */}
      <TelegramModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}