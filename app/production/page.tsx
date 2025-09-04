"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Factory, Settings, CheckSquare, Truck, Shield, Recycle, Zap } from "lucide-react"
import Link from "next/link"

export default function ProductionProcessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
              Как мы производим наши арболитовые панели
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Узнайте о нашем высокотехнологичном процессе производства, который превращает древесную щепу и цемент в инновационный строительный материал
            </p>
          </div>
        </div>
      </section>

      {/* Production Steps Section */}
      <section className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Этапы производства</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        От тщательного отбора сырья до контроля качества готовой продукции
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
            <div className="text-2xl font-bold text-primary">1</div>
          </div>
          <h3 className="text-xl font-serif font-bold mb-4">Подготовка сырья</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Древесная щепа определенных пород дерева проходит калибровку и минерализацию для повышения адгезии с цементом
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
            <div className="text-2xl font-bold text-primary">2</div>
          </div>
          <h3 className="text-xl font-serif font-bold mb-4">Смешивание</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Точное дозирование щепы, цемента и модифицирующих добавок в высокоскоростных смесителях
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
            <div className="text-2xl font-bold text-primary">3</div>
          </div>
          <h3 className="text-xl font-serif font-bold mb-4">Формование</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Смесь уплотняется в формах под высоким давлением для достижения однородной плотности
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
            <div className="text-2xl font-bold text-primary">4</div>
          </div>
          <h3 className="text-xl font-serif font-bold mb-4">Сушка и отверждение</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Контролируемый процесс сушки в камерах с оптимальной температурой и влажностью
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Видео процесса производства */}
    <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
      <div className="aspect-video bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer mx-auto mb-4 hover:bg-primary transition-colors" 
                 onClick={() => document.getElementById('production-video').classList.toggle('hidden')}>
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-lg font-medium text-foreground">Посмотрите наш процесс производства</p>
          </div>
        </div>
        <div id="production-video" className="hidden absolute inset-0">
          <iframe 
            className="w-full h-full" 
            src="https://www.youtube.com/embed/RyIgqpwG9lM" 
            title="Процесс производства арболитовых панелей" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>

    {/* Лента фотографий производства */}
    <div className="mb-16">
      <h3 className="text-2xl font-serif font-black text-primary mb-8 text-center">Наше производство в деталях</h3>
      <div className="relative">
        <div className="flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="mx-2 w-80 h-56 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={`/production/production-${item}.jpg`} 
                  alt={`Производственный процесс ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
      <div className="relative">
        <div className="rounded-lg shadow-2xl overflow-hidden">
          <img
            src="/lupa2.jpeg"
            alt="Производственная линия арболитовых панелей"
            className="w-full h-auto transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
          <div className="text-3xl font-bold">15+ лет</div>
          <div className="text-sm">на рынке</div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-serif font-black text-primary mb-6">Современное оборудование</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Наше производство оснащено автоматизированными линиями европейского качества, 
          что обеспечивает стабильность характеристик каждой панели. Компьютеризированный 
          контроль всех параметров позволяет минимизировать человеческий фактор.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center">
            <CheckSquare className="h-5 w-5 text-primary mr-2" />
            <span>Автоматические дозаторы компонентов</span>
          </li>
          <li className="flex items-center">
            <CheckSquare className="h-5 w-5 text-primary mr-2" />
            <span>Гидравлические прессы с ЧПУ</span>
          </li>
          <li className="flex items-center">
            <CheckSquare className="h-5 w-5 text-primary mr-2" />
            <span>Климатические камеры для отверждения</span>
          </li>
          <li className="flex items-center">
            <CheckSquare className="h-5 w-5 text-primary mr-2" />
            <span>Роботизированные линии упаковки</span>
          </li>
        </ul>
        
        {/* Интерактивная статистика */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-muted p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">панелей в день</div>
          </div>
          <div className="bg-muted p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">соответствие стандартам</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
  `}</style>
</section>

      {/* Quality Control Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Контроль качества</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Многоступенчатая система проверки на каждом этапе производства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Входной контроль</h3>
                <p className="text-muted-foreground text-sm">
                  Проверка каждой партии сырья: фракционный состав щепы, марка цемента, активность добавок
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Операционный контроль</h3>
                <p className="text-muted-foreground text-sm">
                  Постоянный мониторинг параметров на всех этапах: влажность, плотность, время смешивания
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CheckSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Приёмочный контроль</h3>
                <p className="text-muted-foreground text-sm">
                  Испытания готовой продукции на прочность, теплопроводность, влажность и геометрию
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-black text-primary mb-6 text-center">Испытательная лаборатория</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  На собственном испытательном центре мы проводим регулярные тесты продукции:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Испытания на прочность при сжатии и изгибе</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Определение коэффициента теплопроводности</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Тесты на морозостойкость и влагопоглощение</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Огневые испытания на пожаробезопасность</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Акустические tests для оценки звукоизоляции</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/laba.jpg"
                  alt="Испытательная лаборатория"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Преимущества нашего производства</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Технологии, которые делают наши арболитовые панели лучше
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Энергоэффективность</h3>
                <p className="text-muted-foreground text-sm">
                  Процесс производства требует на 70% меньше энергии compared to traditional concrete blocks
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Безотходное производство</h3>
                <p className="text-muted-foreground text-sm">
                  Все обрезки и брак перерабатываются и возвращаются в производственный цикл
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Стабильное качество</h3>
                <p className="text-muted-foreground text-sm">
                  Автоматизация обеспечивает одинаковые характеристики каждой партии продукции
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black mb-4">Сертификаты и соответствие</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Наша продукция соответствует всем требованиям российских и международных стандартов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">ГОСТ</div>
              <p className="text-sm opacity-80">19222-84</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">СТО</div>
              <p className="text-sm opacity-80">96557188-001-2021</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">Ф
              <div className="text-3xl font-bold mb-2">ISO</div>
              <p className="text-sm opacity-80">14001:2015</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">ФЗ</div>
              <p className="text-sm opacity-80">№ 123-ФЗ</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Все наши арболитовые панели имеют технические свидетельства, сертификаты пожарной безопасности и санитарно-эпидемиологические заключения.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/certificates">
                Посмотреть сертификаты <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-6">Узнайте больше о нашей продукции</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Изучите технические характеристики и возможности применения наших арболитовых панелей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/product">
                Технические характеристики <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3">
              <Link href="/contact">Запросить консультацию</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}