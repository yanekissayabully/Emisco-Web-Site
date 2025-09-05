// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, CheckCircle, Users, Truck, Wrench, HeadphonesIcon, Calculator, FileText } from "lucide-react"
// import Link from "next/link"

// export default function ServicesPage() {
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
//                   using miscanthus blocks.
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
//                 <Button className="w-full">Learn More</Button>
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
//                   Reliable delivery of high-quality miscanthus blocks with flexible scheduling to meet your project
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
//                 <Button className="w-full bg-transparent" variant="outline">
//                   Learn More
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Wrench className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl font-serif">Installation Support</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   On-site technical assistance and training to ensure proper installation and optimal performance of
//                   your miscanthus block construction.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     On-site technical supervision
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     Contractor training programs
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                     Quality control inspections
//                   </li>
//                 </ul>
//                 <Button className="w-full">Learn More</Button>
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
//                     24/7 technical helpline
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Remote consultation services
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Performance monitoring guidance
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-transparent" variant="outline">
//                   Learn More
//                 </Button>
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
//                 <Button className="w-full">Learn More</Button>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <FileText className="h-8 w-8 text-secondary" />
//                 </div>
//                 <CardTitle className="text-xl font-serif">Certification Assistance</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   Support for achieving green building certifications and compliance with environmental standards and
//                   regulations.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     LEED and BREEAM documentation
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Environmental impact assessments
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
//                     Regulatory compliance support
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-transparent" variant="outline">
//                   Learn More
//                 </Button>
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

//       {/* Service Packages */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Service Packages</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Choose the level of support that best fits your project needs and budget
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <Badge className="mb-4 bg-muted text-muted-foreground">Essential</Badge>
//                 <CardTitle className="text-2xl font-serif">Basic Support</CardTitle>
//                 <p className="text-muted-foreground">Perfect for experienced contractors</p>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <div className="text-center mb-6">
//                   <div className="text-3xl font-serif font-black text-primary mb-2">€2,500</div>
//                   <p className="text-sm text-muted-foreground">per project</p>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     Product specification consultation
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     Technical documentation package
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     Email and phone support
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     Quality assurance testing
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-transparent" variant="outline">
//                   Get Started
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ring-2 ring-primary/20">
//               <CardHeader className="text-center pb-4">
//                 <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Most Popular</Badge>
//                 <CardTitle className="text-2xl font-serif">Professional Support</CardTitle>
//                 <p className="text-muted-foreground">Comprehensive project assistance</p>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <div className="text-center mb-6">
//                   <div className="text-3xl font-serif font-black text-primary mb-2">€7,500</div>
//                   <p className="text-sm text-muted-foreground">per project</p>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     Everything in Basic Support
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     Design optimization consultation
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     On-site installation training
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     Performance monitoring setup
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
//                     Certification assistance
//                   </li>
//                 </ul>
//                 <Button className="w-full">Get Started</Button>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="text-center pb-4">
//                 <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Premium</Badge>
//                 <CardTitle className="text-2xl font-serif">Enterprise Support</CardTitle>
//                 <p className="text-muted-foreground">Full-service project partnership</p>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <div className="text-center mb-6">
//                   <div className="text-3xl font-serif font-black text-secondary mb-2">Custom</div>
//                   <p className="text-sm text-muted-foreground">tailored pricing</p>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
//                     Everything in Professional Support
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
//                     Dedicated project manager
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
//                     Full on-site supervision
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
//                     Custom training programs
//                   </li>
//                   <li className="flex items-center text-sm">
//                     <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
//                     Long-term performance warranty
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-transparent" variant="outline">
//                   Contact Us
//                 </Button>
//               </CardContent>
//             </Card>
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
//             <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
//               <Link href="#contact">
//                 Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
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
//     </div>
//   )
// }




'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Truck, Wrench, HeadphonesIcon, Calculator, FileText } from "lucide-react"
import Link from "next/link"
import TelegramModal from "@/components/TelegramModal"

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">Что мы предлагаем? </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              EmisCO предоставляет полный комплекс услуг для экологичного строительства – от производства материалов до возведения домов “под ключ”. Наш опыт позволяет нам сопровождать проект на всех этапах.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful sustainable construction projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Design Consultation</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Work with our expert team to optimize your building design for maximum sustainability and performance
                  using miscanthus blocks.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Architectural integration planning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Thermal performance optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Sustainability certification support
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Supply & Logistics</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Reliable delivery of high-quality miscanthus blocks with flexible scheduling to meet your project
                  timeline and budget requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Just-in-time delivery scheduling
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Quality assurance testing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Inventory management support
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Installation Support</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  On-site technical assistance and training to ensure proper installation and optimal performance of
                  your miscanthus block construction.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    On-site technical supervision
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Contractor training programs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Quality control inspections
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Technical Support</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ongoing technical assistance throughout your project lifecycle with expert guidance on best practices
                  and troubleshooting.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    24/7 technical helpline
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Remote consultation services
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Performance monitoring guidance
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Cost Estimation</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Detailed cost analysis and budgeting support to help you make informed decisions about your
                  sustainable construction investment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Detailed project cost breakdowns
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    ROI and payback analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Financing options guidance
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Certification Assistance</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Support for achieving green building certifications and compliance with environmental standards and
                  regulations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    LEED and BREEAM documentation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Environmental impact assessments
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Regulatory compliance support
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to ensure your project's success from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-serif font-bold mb-2 text-lg">Initial Consultation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We discuss your project requirements, sustainability goals, and technical specifications to understand
                your vision.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-serif font-bold mb-2 text-lg">Design & Planning</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our experts work with your team to optimize the design for maximum performance and sustainability
                benefits.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-serif font-bold mb-2 text-lg">Supply & Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We deliver high-quality blocks on schedule and provide on-site technical support during construction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-serif font-bold mb-2 text-lg">Ongoing Partnership</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We maintain a long-term relationship with performance monitoring and continued technical assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Service Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the level of support that best fits your project needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <Badge className="mb-4 bg-muted text-muted-foreground">Essential</Badge>
                <CardTitle className="text-2xl font-serif">Basic Support</CardTitle>
                <p className="text-muted-foreground">Perfect for experienced contractors</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-3xl font-serif font-black text-primary mb-2">€2,500</div>
                  <p className="text-sm text-muted-foreground">per project</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Product specification consultation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Technical documentation package
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Email and phone support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Quality assurance testing
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ring-2 ring-primary/20">
              <CardHeader className="text-center pb-4">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Most Popular</Badge>
                <CardTitle className="text-2xl font-serif">Professional Support</CardTitle>
                <p className="text-muted-foreground">Comprehensive project assistance</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-3xl font-serif font-black text-primary mb-2">€7,500</div>
                  <p className="text-sm text-muted-foreground">per project</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Everything in Basic Support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Design optimization consultation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    On-site installation training
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Performance monitoring setup
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Certification assistance
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Premium</Badge>
                <CardTitle className="text-2xl font-serif">Enterprise Support</CardTitle>
                <p className="text-muted-foreground">Full-service project partnership</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-3xl font-serif font-black text-secondary mb-2">Custom</div>
                  <p className="text-sm text-muted-foreground">tailored pricing</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                    Everything in Professional Support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                    Dedicated project manager
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                    Full on-site supervision
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                    Custom training programs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                    Long-term performance warranty
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team today to discuss your project requirements and discover how Emisco can help you build
            sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3"
              onClick={() => setIsModalOpen(true)}
            >
              Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
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