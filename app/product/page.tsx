'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Download, CheckCircle, Thermometer, Shield, Leaf, Ruler, Weight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/providers/i18n-providers"
import TelegramModal from "@/components/TelegramModal"

export default function ProductPage() {
  const { t } = useI18n()
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                {t("productBadge")}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
                {t("productTitle")}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t("productDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-3">
                  <Link href="#specifications">
                    {t("productButton1")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/product-showcase-blocks.webp"
                alt="Emisco miscanthus construction blocks"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/panels.webp"
                alt="Emisco miscanthus construction blocks"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                {t("productBadge")}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
                {t("productTitle2")}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t("productDescription2")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-3">
                  <Link href="#specifications">
                    {t("productButton1")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('advantageTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('advantageSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('advTitle1')}</h3>
                <p className="text-muted-foreground text-sm mb-2">{t('advDescr1')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('advTitle2')}</h3>
                <p className="text-muted-foreground text-sm mb-2">{t('advDescr2')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('advTitle3')}</h3>
                <p className="text-muted-foreground text-sm mb-2">{t('advDescr3')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Weight className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('advTitle4')}</h3>
                <p className="text-muted-foreground text-sm mb-2">{t('advDescr4')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
<section id="specifications" className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">
        {t('SpecificationsTitle')}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {t('SpecificationsSubtitle')}
      </p>
    </div>

    <Tabs defaultValue="thermal" className="w-full">
      <TabsList
        className="
          grid w-full gap-2 mb-8
          grid-cols-2 sm:grid-cols-4
        "
      >
        <TabsTrigger
          value="thermal"
          className="w-full bg-gray-100 rounded-lg data-[state=active]:bg-gray-300"
        >
          {t('TabThermal')}
        </TabsTrigger>
        <TabsTrigger
          value="structural"
          className="w-full bg-gray-100 rounded-lg data-[state=active]:bg-gray-300"
        >
          {t('TabStructural')}
        </TabsTrigger>
        <TabsTrigger
          value="environmental"
          className="w-full bg-gray-100 rounded-lg data-[state=active]:bg-gray-300"
        >
          {t('TabEnvironmental')}
        </TabsTrigger>
        <TabsTrigger
          value="certifications"
          className="w-full bg-gray-100 rounded-lg data-[state=active]:bg-gray-300"
        >
          {t('TabCertifications')}
        </TabsTrigger>
      </TabsList>

      {/* Thermische Werte */}
      <TabsContent value="thermal">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-green-600" />
              {t('ThermalTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">{t('Property')}</th>
                    <th className="p-2">{t('Material1')}</th>
                    <th className="p-2">{t('Material2')}</th>
                    <th className="p-2">{t('Material3')}</th>
                    <th className="p-2 bg-green-50 font-bold text-green-700 border-l-2 border-r-2 border-green-300">
                      {t('Material4')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">{t('Density')}</td>
                    <td className="p-2">{t('DensityValue1')}</td>
                    <td className="p-2">{t('DensityValue2')}</td>
                    <td className="p-2">{t('DensityValue3')}</td>
                    <td className="p-2 bg-green-50 font-semibold text-green-700 border-l-2 border-r-2 border-green-200">
                      {t('DensityValue4')}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">{t('ThermalConductivity')}</td>
                    <td className="p-2">{t('ConductivityValue1')}</td>
                    <td className="p-2">{t('ConductivityValue2')}</td>
                    <td className="p-2">{t('ConductivityValue3')}</td>
                    <td className="p-2 bg-green-50 font-semibold text-green-700 border-l-2 border-r-2 border-green-200">
                      {t('ConductivityValue4')}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">{t('HeatCapacity')}</td>
                    <td className="p-2">{t('CapacityValue1')}</td>
                    <td className="p-2">{t('CapacityValue2')}</td>
                    <td className="p-2">{t('CapacityValue3')}</td>
                    <td className="p-2 bg-green-50 font-semibold text-green-700 border-l-2 border-r-2 border-green-200">
                      {t('CapacityValue4')}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">{t('MuValue')}</td>
                    <td className="p-2">{t('MuValue1')}</td>
                    <td className="p-2">{t('MuValue2')}</td>
                    <td className="p-2">{t('MuValue3')}</td>
                    <td className="p-2 bg-green-50 font-semibold text-green-700 border-l-2 border-r-2 border-green-200">
                      {t('MuValue4')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Mechanische Werte */}
      <TabsContent value="structural">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="h-5 w-5 text-green-600" />
              {t('StructuralTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">{t('Property')}</th>
                    <th className="p-2">{t('Material1')}</th>
                    <th className="p-2">{t('Material2')}</th>
                    <th className="p-2">{t('Material3')}</th>
                    <th className="p-2 bg-green-50 font-bold text-green-700 border-l-2 border-r-2 border-green-300">
                      {t('Material4')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">{t('CompressionStrength')}</td>
                    <td className="p-2">{t('CompressionValue1')}</td>
                    <td className="p-2">{t('CompressionValue2')}</td>
                    <td className="p-2">{t('CompressionValue3')}</td>
                    <td className="p-2 bg-green-50 font-semibold text-green-700 border-l-2 border-r-2 border-green-200">
                      {t('CompressionValue4')}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">{t('TensileStrength')}</td>
                    <td className="p-2">{t('TensileValue1')}</td>
                    <td className="p-2">{t('TensileValue2')}</td>
                    <td className="p-2">{t('TensileValue3')}</td>
                    <td className="p-2 bg-green-50 font-semibold text-green-700 border-l-2 border-r-2 border-green-200">
                      {t('TensileValue4')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Bauphysik */}
      <TabsContent value="environmental">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              {t('EnvironmentalTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">{t('Property')}</th>
                    <th className="p-2">{t('Material1')}</th>
                    <th className="p-2">{t('Material2')}</th>
                    <th className="p-2">{t('Material3')}</th>
                    <th className="p-2 bg-green-50 font-bold text-green-700 border-l-2 border-r-2 border-green-300">
                      {t('Material4')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">{t('ThermalProtection')}</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-green-600 text-xs">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-green-600 text-xs">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-green-600 text-xs">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                    <td className="p-2 bg-green-50 border-l-2 border-r-2 border-green-200">
                      <span className="px-2 py-1 rounded-full text-white bg-green-700 text-xs font-semibold">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">{t('MoistureProtection')}</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-green-600 text-xs">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-green-600 text-xs">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-red-600 text-xs">
                        {t('RatingPoor')}
                      </span>
                    </td>
                    <td className="p-2 bg-green-50 border-l-2 border-r-2 border-green-200">
                      <span className="px-2 py-1 rounded-full text-white bg-green-700 text-xs font-semibold">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">{t('HeatProtection')}</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-green-600 text-xs">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-green-600 text-xs">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-white bg-green-600 text-xs">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                    <td className="p-2 bg-green-50 border-l-2 border-r-2 border-green-200">
                      <span className="px-2 py-1 rounded-full text-white bg-green-700 text-xs font-semibold">
                        {t('RatingVeryGood')}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Prüfungen */}
      <TabsContent value="certifications">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              {t('CertificationsTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">{t('Property')}</th>
                    <th className="p-2">{t('Material1')}</th>
                    <th className="p-2">{t('Material2')}</th>
                    <th className="p-2">{t('Material3')}</th>
                    <th className="p-2 bg-green-50 font-bold text-green-700 border-l-2 border-r-2 border-green-300">
                      {t('Material4')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">{t('FireBehavior')}</td>
                    <td className="p-2">{t('FireClass1')}</td>
                    <td className="p-2">{t('FireClass2')}</td>
                    <td className="p-2">{t('FireClass3')}</td>
                    <td className="p-2 bg-green-50 font-semibold text-green-700 border-l-2 border-r-2 border-green-200">
                      {t('FireClass4')}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">{t('TestingInstitutes')}</td>
                    <td className="p-2">{t('Institutes1')}</td>
                    <td className="p-2">{t('Institutes2')}</td>
                    <td className="p-2">{t('Institutes3')}</td>
                    <td className="p-2 bg-green-50 font-semibold text-green-700 border-l-2 border-r-2 border-green-200">
                      {t('Institutes4')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</section>



      {/* Installation Guide */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t("usageTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("usageSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-serif font-bold mb-2">{t("usageTitle1")}</h3>
              <p className="text-muted-foreground text-sm">
                {t("usageDescr1")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-serif font-bold mb-2">{t("usageTitle2")}</h3>
              <p className="text-muted-foreground text-sm">
                {t("usageDescr2")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-serif font-bold mb-2">{t("usageTitle3")}</h3>
              <p className="text-muted-foreground text-sm">
                {t("usageDescr3")}
              </p>
            </div>
          </div>
        </div>
      </section>


    
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">{t('productCtaTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3"
              onClick={() => setIsModalOpen(true)}
            >
              {t('productCtaButton1')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/portfolio">{t('productCtaButton2')}</Link>
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