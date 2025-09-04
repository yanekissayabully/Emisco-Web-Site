"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Download, CheckCircle, Thermometer, Shield, Leaf, Ruler, Weight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/providers/i18n-providers"

export default function ProductPage() {
  const { t } = useI18n()
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
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                  <Link href="#download">
                    <Download className="mr-2 h-5 w-5" />
                    {t("productButton2")}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/product-showcase-blocks.png"
                alt="Emisco miscanthus construction blocks"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
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
                {/* <p className="text-xs text-muted-foreground">Natural silica content provides protection</p> */}
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('advTitle3')}</h3>
                <p className="text-muted-foreground text-sm mb-2">{t('advDescr3')}</p>
                {/* <p className="text-xs text-muted-foreground">Actively removes carbon from atmosphere</p> */}
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Weight className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('advTitle4')}</h3>
                <p className="text-muted-foreground text-sm mb-2">{t('advDescr4')}</p>
                {/* <p className="text-xs text-muted-foreground">Reduces structural load requirements</p> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Variants */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Product Range</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of miscanthus blocks designed for different construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <img
                  src="/product-standard-block.png"
                  alt="Standard Miscanthus Block"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl font-serif">Standard Block</CardTitle>
                <p className="text-muted-foreground">General construction applications</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Dimensions:</span>
                    <span className="text-sm font-medium">400×200×200mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Weight:</span>
                    <span className="text-sm font-medium">8.5 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">R-Value:</span>
                    <span className="text-sm font-medium">R-25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Compressive Strength:</span>
                    <span className="text-sm font-medium">12 MPa</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ring-2 ring-primary/20">
              <CardHeader className="text-center pb-4">
                <img
                  src="/product-insulation-block.png"
                  alt="High-Insulation Miscanthus Block"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl font-serif">High-Insulation Block</CardTitle>
                <p className="text-muted-foreground">Maximum thermal performance</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Dimensions:</span>
                    <span className="text-sm font-medium">400×200×300mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Weight:</span>
                    <span className="text-sm font-medium">10.2 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">R-Value:</span>
                    <span className="text-sm font-medium text-primary font-bold">R-35</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Compressive Strength:</span>
                    <span className="text-sm font-medium">10 MPa</span>
                  </div>
                </div>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <img
                  src="/product-structural-block.png"
                  alt="Structural Miscanthus Block"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl font-serif">Structural Block</CardTitle>
                <p className="text-muted-foreground">Load-bearing applications</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Dimensions:</span>
                    <span className="text-sm font-medium">400×200×200mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Weight:</span>
                    <span className="text-sm font-medium">12.8 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">R-Value:</span>
                    <span className="text-sm font-medium">R-20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Compressive Strength:</span>
                    <span className="text-sm font-medium text-secondary font-bold">18 MPa</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Technical Specifications */}
      <section id="specifications" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('specsTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('specsSubtitle')}
            </p>
          </div>

          <Tabs defaultValue="thermal" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="thermal">{t('specsTitle1')}</TabsTrigger>
              <TabsTrigger value="structural">{t('specsTitle2')}</TabsTrigger>
              <TabsTrigger value="environmental">{t('specsTitle3')}</TabsTrigger>
              <TabsTrigger value="certifications">{t('specsTitle4')}</TabsTrigger>
            </TabsList>

            <TabsContent value="thermal" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-primary" />
                    Thermal Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Thermal Conductivity (λ)</span>
                        <span>0.045 W/mK</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">R-Value (200mm)</span>
                        <span>R-25 m²K/W</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Specific Heat Capacity</span>
                        <span>1,800 J/kgK</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Thermal Diffusivity</span>
                        <span>2.1 × 10⁻⁷ m²/s</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Operating Temperature</span>
                        <span>-40°C to +80°C</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Thermal Expansion</span>
                        <span>8 × 10⁻⁶ /K</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Freeze-Thaw Resistance</span>
                        <span>Excellent</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Moisture Regulation</span>
                        <span>Natural breathability</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structural" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-primary" />
                    Structural Properties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Compressive Strength</span>
                        <span>12-18 MPa</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Flexural Strength</span>
                        <span>2.5 MPa</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Tensile Strength</span>
                        <span>1.8 MPa</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Modulus of Elasticity</span>
                        <span>3,200 MPa</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Density</span>
                        <span>420-640 kg/m³</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Water Absorption</span>
                        <span>12-15%</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Dimensional Stability</span>
                        <span>±2mm</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Durability</span>
                        <span>100+ years</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="environmental" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Environmental Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Carbon Footprint</span>
                        <span className="text-primary font-bold">-2.3 kg CO2/block</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Embodied Energy</span>
                        <span>85 MJ/m³</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Renewable Content</span>
                        <span className="text-secondary font-bold">100%</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Recyclability</span>
                        <span>Fully biodegradable</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">VOC Emissions</span>
                        <span>Zero</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Formaldehyde</span>
                        <span>None</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Indoor Air Quality</span>
                        <span>Excellent</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">End of Life</span>
                        <span>Compostable</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Certifications & Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-serif font-bold mb-2">CE Marking</h4>
                      <p className="text-sm text-muted-foreground">European Conformity</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-secondary" />
                      </div>
                      <h4 className="font-serif font-bold mb-2">ISO 14001</h4>
                      <p className="text-sm text-muted-foreground">Environmental Management</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-serif font-bold mb-2">LEED Credits</h4>
                      <p className="text-sm text-muted-foreground">Green Building Points</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-secondary" />
                      </div>
                      <h4 className="font-serif font-bold mb-2">BREEAM</h4>
                      <p className="text-sm text-muted-foreground">Sustainability Assessment</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-serif font-bold mb-2">Fire Safety</h4>
                      <p className="text-sm text-muted-foreground">Class A Rating</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-secondary" />
                      </div>
                      <h4 className="font-serif font-bold mb-2">Cradle to Cradle</h4>
                      <p className="text-sm text-muted-foreground">Gold Certified</p>
                    </div>
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


      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">{t('documentationTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('documentationSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('docTitle1')}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t('docDescr1')}</p>
                <Button className="w-full">{t('docButton1')}</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('docTitle2')}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t('docDescr2')}</p>
                <Button className="w-full bg-transparent" variant="outline">
                  {t('docButton2')}
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold mb-2">{t('docTitle3')}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t('docDescr3')}</p>
                <Button className="w-full bg-transparent" variant="outline">
                  {t('docButton3')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-black mb-6">{t('productCtaTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/services">
                {t('productCtaButton1')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
    </div>
  )
}
