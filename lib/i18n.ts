// export const languages = {
//   en: "English",
//   de: "Deutsch",
//   fr: "Français",
// } as const

// export type Language = keyof typeof languages

// export const translations = {
//   en: {
//     // Navigation
//     home: "Home",
//     about: "About Us",
//     whyEmisco: "Why Emisco",
//     product: "Product",
//     portfolio: "Portfolio",
//     services: "Services",

//     // Common
//     learnMore: "Learn More",
//     getStarted: "Get Started",
//     contactUs: "Contact Us",
//     readMore: "Read More",

//     // Homepage
//     heroTitle: "Экологичные решения в строительстве",
//     heroSubtitle:
//       "Revolutionary eco-friendly building materials that combine durability with environmental responsibility",

//     // About
//     aboutTitle: "About Emisco",
//     aboutDescription:
//       "Leading the future of sustainable construction with innovative miscanthus-based building solutions.",

//     // Product
//     productTitle: "Our Miscanthus Construction Blocks",
//     productDescription:
//       "Discover the benefits of our eco-friendly building materials made from renewable miscanthus grass.",
//   },
//   de: {
//     // Navigation
//     home: "Startseite",
//     about: "Über uns",
//     whyEmisco: "Warum Emisco",
//     product: "Produkt",
//     portfolio: "Portfolio",
//     services: "Dienstleistungen",

//     // Common
//     learnMore: "Mehr erfahren",
//     getStarted: "Loslegen",
//     contactUs: "Kontakt",
//     readMore: "Weiterlesen",

//     // Homepage
//     heroTitle: "Nachhaltiges Bauen mit Miscanthus-Blöcken",
//     heroSubtitle: "Revolutionäre umweltfreundliche Baumaterialien, die Langlebigkeit mit Umweltverantwortung verbinden",

//     // About
//     aboutTitle: "Über Emisco",
//     aboutDescription:
//       "Wir führen die Zukunft des nachhaltigen Bauens mit innovativen Miscanthus-basierten Baulösungen an.",

//     // Product
//     productTitle: "Unsere Miscanthus-Bausteine",
//     productDescription:
//       "Entdecken Sie die Vorteile unserer umweltfreundlichen Baumaterialien aus erneuerbarem Miscanthus-Gras.",
//   },
//   fr: {
//     // Navigation
//     home: "Accueil",
//     about: "À propos",
//     whyEmisco: "Pourquoi Emisco",
//     product: "Produit",
//     portfolio: "Portfolio",
//     services: "Services",

//     // Common
//     learnMore: "En savoir plus",
//     getStarted: "Commencer",
//     contactUs: "Nous contacter",
//     readMore: "Lire la suite",

//     // Homepage
//     heroTitle: "Construction Durable avec des Blocs de Miscanthus",
//     heroSubtitle:
//       "Matériaux de construction écologiques révolutionnaires qui allient durabilité et responsabilité environnementale",

//     // About
//     aboutTitle: "À propos d'Emisco",
//     aboutDescription:
//       "Nous menons l'avenir de la construction durable avec des solutions de construction innovantes à base de miscanthus.",

//     // Product
//     productTitle: "Nos Blocs de Construction en Miscanthus",
//     productDescription:
//       "Découvrez les avantages de nos matériaux de construction écologiques fabriqués à partir d'herbe de miscanthus renouvelable.",
//   },
// } as const

// export function useTranslation(lang: Language = "en") {
//   return translations[lang]
// }

export const languages = {
  en: "English",
  de: "Deutsch", 
  fr: "Français",
  ru: "Русский"
} as const

export type Language = keyof typeof languages

export const translations = {
  en: {
    // Navigation
    navigation: {
      home: "Home",
      about: "About Us",
      whyEmisco: "Why Emisco",
      product: "Product",
      portfolio: "Portfolio",
      services: "Services",
      production: "Production",
    },

    // Common
    learnMore: "Learn More",
    getStarted: "Get Started",
    contactUs: "Contact Us",
    readMore: "Read More",

    // Homepage
    heroTitle: "Eco-friendly construction solutions",
    heroSubtitle: "We produce construction blocks from miscanthus - an innovative biomaterial that combines the strength of concrete and the environmental friendliness of nature. Build reliably and with care for the environment together with us.",
    featuresTitle: "Why choose miscanthus?",
    featuresSubtitle: "Our innovative construction blocks use the power of miscanthus grass to create sustainable, durable building materials that exceed industry standards",
    
    // Features
    ecoFriendly: "100% Eco-friendly",
    ecoDescription: "Natural raw materials, reduced carbon footprint.",
    reliable: "Reliable",
    reliableDescription: "Strength and long service life of blocks.",
    innovative: "Innovative", 
    innovativeDescription: "Latest bio-concrete technologies based on miscanthus.",
    energyEfficient: "Energy efficient",
    energyDescription: "Latest bio-concrete technologies based on miscanthus.",

    // About section
    aboutSectionTitle: "Build your future with Emisco",
    aboutSectionDescription: "EmisCO is a pioneer in green construction. We combine advanced technologies and natural materials to create homes that are safe for the environment and comfortable for living. Our goal is to make ecological construction accessible and profitable for every client.",
    expertTeam: "Expert Team",
    industrySpecialists: "Industry specialists",
    certifiedQuality: "Certified Quality",
    isoStandards: "ISO standards",

    // Product section  
    whyUsTitle: "Why exactly us?",
    whyUsDescription: "Our construction blocks from miscanthus offer the perfect combination of sustainability and performance. Each block is carefully designed to provide superior insulation, structural integrity and environmental benefits.",
    fireResistance: "Fire resistance",
    fireDescription: "Miscanthus panels do not burn - our material belongs to weakly burning and flame-retardant building materials. Does not spread flame and has low smoke-forming ability.",
    lightWeight: "Light weight",
    lightDescription: "The light weight of miscanthus walls allows building a lightweight foundation on any type of soil. The weight of a cubic meter of miscanthus panel is 4 times less than a cubic meter of brick. The difference is colossal!",
    breathable: "Breathable",
    breathableDescription: "High vapor permeability and the ability to breathe make the microclimate in a miscanthus house pleasant. The closest equivalent among building materials is wood.",

    // CTA
    ctaTitle: "Ready to build your ecological future?",
    ctaDescription: "Contact us for consultation and project calculation.",
    submitRequest: "Submit Request",
    writeToUs: "Write to us",

    // Stats
    stats1: "Projects Completed",
    stats2: "CO₂ Reduction",
    stats3: "Countries We Operate In",
    stats4: "Support",


    // About Page
    aboutTitle: "About Us",
    aboutSubtitle: "Innovating in construction for a sustainable future",

    // Story
    storyTitle: "Our Story",
    storyDescription1: "For over 30 years, we have been working with miscanthus, finding applications in various fields. One of these fields has become construction.",
    storyDescription2: "Through years of research and development, we have perfected the process of transforming this remarkable resource into highly efficient building blocks that not only match traditional materials but surpass them in many ways.",
    storyDescription3: "Today, Emisco is at the forefront of the green building revolution, providing architects, builders, and homeowners with sustainable solutions that do not compromise on quality or performance.",

    // Mission
    missionTitle: "Our Mission",
    missionDescription: "To implement eco-friendly materials and technologies in construction, creating comfortable and healthy living spaces. We believe that innovation in construction can go hand in hand with environmental care and comfort.",
    cardTitle1: "Sustainability and Quality",
    cardDescription1: "Priority use of renewable resources, minimization of waste and emissions, and strict control at every stage of production and construction in compliance with SIA standards.",
    cardTitle2: "Innovation",
    cardDescription2: "Collaboration with research centers and continuous R&D to bring the latest solutions to the market. Since the start of this project, we have adopted new-generation concrete and reduced chip size for higher quality.",
    cardTitle3: "Openness and Partnership",
    cardDescription3: "Transparency in client relations, personalized approach, and building a community around green construction.",

    // Team
    teamTitle: "Our Team",
    teamDescription: "Passionate experts behind Emisco’s innovative solutions in sustainable construction",
    name1: "Misha Krug",
    position1: "CEO",
    description1: "Environmental engineer with over 15 years of experience in sustainable materials. PhD in Biomaterials from MIT.",
    name2: "Vova Vovan",
    position2: "CTO",
    description2: "Materials scientist specializing in bio-based construction materials. Former researcher at CERN.",
    name3: "Andrew Bro",
    position3: "Head of Production",
    description3: "Production expert with over 20 years of experience in optimizing sustainable processes in the construction industry.",

    // Why
    whyTitle: "Why EmisCO?",
    whySubtitle: "Our commitment to innovation and sustainability has been recognized by industry leaders",
    awardTitle1: "Own Production",
    awardDescription1: "Full quality control of blocks at the factory.",
    awardTitle2: "Construction Expertise",
    awardDescription2: "Experience in turnkey project implementation.",
    awardTitle3: "Eco-Efficiency",
    awardDescription3: "Houses made from our blocks provide a comfortable microclimate while reducing energy consumption.",
    awardTitle4: "Quality Certificates",
    awardDescription4: "Our products are certified according to EMPA standards.",

    // AboutCta
    aboutCtaTitle: "Want to learn more about our work or discuss collaboration?",
    aboutCtaDescription: "Join us in creating a more sustainable future. Let’s discuss how Emisco can support your next project.",
    aboutCtaButton: "Contact Us",


     // ProductPage
    productBadge: "Revolutionary Building Material",
    productTitle: "Miscanthus Block",
    productDescription:
      "A modern biocomposite wall block made of natural miscanthus fibers and a special cement binder. Strong enough for low-rise construction and significantly lighter than traditional concrete blocks.",
    productButton1: "View Specifications",
    productButton2: "Download",

    // ProductAdvantage
    advantageTitle: "Material Advantages",
    advantageSubtitle:
      "Discover what makes our miscanthus blocks the superior choice for sustainable construction",
    advTitle1: "Breathability",
    advDescr1:
      "A 'breathing' material – regulates humidity, prevents condensation in walls, ensuring a healthy indoor climate.",
    advTitle2: "Fire Resistance",
    advDescr2:
      "Thanks to fiber mineralization and cement binder, the material is flame-retardant and safer than wooden structures.",
    advTitle3: "Eco-Friendliness",
    advDescr3:
      "Blocks are made 100% from natural and mineral components. Miscanthus cultivation restores poor soils and absorbs CO₂. Production requires less energy than brick or aerated concrete, reducing the carbon footprint.",
    advTitle4: "Energy Efficiency",
    advDescr4:
      "High thermal insulation allows miscanthus block walls to retain heat better than standard concrete. Homes require less heating in winter and cooling in summer. Porous structure also ensures excellent soundproofing.",

    // ProductSpecs
    specsTitle: "Technical Specifications and Composition",
    specsSubtitle:
      "Detailed technical data and performance characteristics of our miscanthus building blocks",
    specsTitle1: "Thermal",
    specsTitle2: "Structural",
    specsTitle3: "Ecological",
    specsTitle4: "Composition",

    // ProductUsage
    usageTitle: "Areas of Application",
    usageSubtitle: "Learn about the uses of miscanthus blocks",
    usageTitle1: "Low-Rise Residential Construction",
    usageDescr1:
      "Ideal for cottages, country houses, and townhouses up to 2–3 stories.",
    usageTitle2: "Commercial and Agricultural Buildings",
    usageDescr2:
      "Eco-offices, warehouses, farm buildings where sustainability and indoor climate matter.",
    usageTitle3: "Renovation and Insulation",
    usageDescr3:
      "Can be used for extensions, additional floors, or as an insulating layer.",

    // Documentation
    documentationTitle: "Technical Documentation",
    documentationSubtitle:
      "Download complete technical documentation and installation guides",
    docTitle1: "Technical Datasheet",
    docDescr1: "Full specifications and data",
    docTitle2: "Installation Guide",
    docDescr2: "Step-by-step building instructions",
    docTitle3: "CAD Files",
    docDescr3: "3D models and technical drawings",
    docButton1: "Download PDF",
    docButton2: "Download PDF",
    docButton3: "Download ZIP",

    // ProductCTA
    productCtaTitle:
      "Interested in our material? We’ll answer all questions and prepare a proposal.",
    productCtaButton1: "Get a Proposal",
    productCtaButton2: "View Portfolio",


    // PortfolioPage
portfolioTitle: "Our Portfolio",
portfolioSubtitle: "We take pride in every project completed using our materials. This section showcases examples of homes and buildings constructed with EmisCO miscanthus blocks.",
portfolioStat1: "Projects Completed",
portfolioStat2: "Blocks Delivered",
portfolioStat3: "Average Energy Savings",

// PortfolioBest
portfolioBestTitle: "Featured Projects",
portfolioBestSubtitle: "Explore our most innovative and impactful sustainable construction projects",
caseBadge1: "Residential Development",
caseTitle1: "Green Valley Housing Estate",
caseLocation1: "Amsterdam, Netherlands",
caseDescr1: "A pioneering 120-unit residential development that achieved carbon-negative status using our high-insulation miscanthus blocks. The project demonstrates how sustainable materials can create comfortable, energy-efficient homes.",
caseStat1:"Energy Reduction",
caseStat2: "CO2 Sequestered",
caseButton: "View Case Study",
caseBadge2: "Commercial Building",
caseTitle2: "EcoTech Office Complex",
caseLocation2: "Berlin, Germany",
caseDescr2: "A 5-story office building showcasing the structural capabilities of our miscanthus blocks. The building achieved LEED Platinum certification and serves as a model for sustainable commercial construction.",
caseStat3:"Platinum Certified",
caseStat4: "Lower Construction Cost",
caseBadge3: "Educational Facility",
caseTitle3: "Future Learning Academy",
caseLocation3: "Lyon, France",
caseDescr3: "An innovative school building designed to teach sustainability through its very construction. The project features exposed miscanthus walls as educational elements while providing exceptional indoor air quality for students.",
caseStat5:"Students Served",
caseStat6: "VOC Emissions",

// Portfolio Category
categoryTitle: "Project Categories",
categorySubtitle: "Our miscanthus blocks are versatile for any construction project",
category1: "Residential Buildings",
category2: "Commercial Buildings",
category3: "Educational Facilities",
category4: "Infrastructure Projects",
categorydescr1: "Single-family homes, apartments, and housing developments",
categorydescr2: "Office buildings, retail spaces, and mixed-use developments",
categorydescr3: "Schools, universities, and research facilities",
categorydescr4: "Bridges, roads, and public transportation systems",
categoryComp: "Projects Completed",

// PortfolioCTA
portfolioCtaTitle: "Create Your Sustainable Project",
portfolioCtaSubtitle: "Join our growing portfolio of successful sustainable construction projects. Let’s discuss how Emisco can help bring your idea to life.",
portfolioCtaButton1: "Get Started",
portfolioCtaButton2: "View Products",


    // Footer
footerSubtitle: "Building solutions of the future. Innovative, sustainable, and efficient materials for modern construction.",
footerNav1: "Home",
footerNav2: "Products",
footerNav3: "About Us",
footerNav4: "Why Emisco",
footerNav5: "Portfolio",
footerNav6: "Services",
footerNav7: "Specifications",
footerNav8: "Installation Guide",
footerNavTitle1: "Navigation",
footerNavTitle2: "Resources",
footerInfo: "© 2024 Emisco. All rights reserved. Building a sustainable future.",

  },

  de: {
    // Navigation
    navigation: {
      home: "Startseite",
      about: "Über uns",
      whyEmisco: "Warum Emisco",
      product: "Produkt",
      portfolio: "Portfolio",
      services: "Dienstleistungen",
      production: "Produktion",
    },

    // Common
    learnMore: "Mehr erfahren",
    getStarted: "Loslegen",
    contactUs: "Kontakt",
    readMore: "Weiterlesen",

    // Homepage
    heroTitle: "Umweltfreundliche Baulösungen",
    heroSubtitle: "Wir produzieren Bausteine aus Miscanthus - einem innovativen Biomaterial, das die Festigkeit von Beton mit der Umweltfreundlichkeit der Natur verbindet. Bauen Sie zuverlässig und umweltbewusst mit uns zusammen.",
    featuresTitle: "Warum Miscanthus wählen?",
    featuresSubtitle: "Unsere innovativen Bausteine nutzen die Kraft von Miscanthus-Gras, um nachhaltige, langlebige Baumaterialien zu schaffen, die Branchenstandards übertreffen",

    // Features
    ecoFriendly: "100% Umweltfreundlich",
    ecoDescription: "Natürliche Rohstoffe, reduzierter CO2-Fußabdruck.",
    reliable: "Zuverlässig",
    reliableDescription: "Festigkeit und lange Lebensdauer der Blöcke.",
    innovative: "Innovativ",
    innovativeDescription: "Neueste Bio-Beton-Technologien auf Miscanthus-Basis.",
    energyEfficient: "Energieeffizient", 
    energyDescription: "Neueste Bio-Beton-Technologien auf Miscanthus-Basis.",

    // About section
    aboutSectionTitle: "Bauen Sie Ihre Zukunft mit Emisco",
    aboutSectionDescription: "EmisCO ist Pionier im grünen Bauwesen. Wir kombinieren fortschrittliche Technologien und natürliche Materialien, um Häuser zu schaffen, die umweltsicher und komfortabel zum Leben sind. Unser Ziel ist es, ökologisches Bauen für jeden Kunden zugänglich und profitabel zu machen.",
    expertTeam: "Expertenteam",
    industrySpecialists: "Branchenspezialisten", 
    certifiedQuality: "Zertifizierte Qualität",
    isoStandards: "ISO-Standards",

    // Product section
    whyUsTitle: "Warum genau wir?",
    whyUsDescription: "Unsere Bausteine aus Miscanthus bieten die perfekte Kombination aus Nachhaltigkeit und Leistung. Jeder Block ist sorgfältig entworfen, um überlegene Isolierung, strukturelle Integrität und Umweltvorteile zu bieten.",
    fireResistance: "Brandbeständigkeit",
    fireDescription: "Miscanthus-Paneele brennen nicht - unser Material gehört zu schwach brennenden und flammhemmenden Baustoffen. Breitet keine Flamme aus und hat geringe Rauchentwicklung.",
    lightWeight: "Geringes Gewicht",
    lightDescription: "Das geringe Gewicht von Miscanthus-Wänden ermöglicht den Bau eines leichten Fundaments auf jedem Bodentyp. Das Gewicht eines Kubikmeters Miscanthus-Paneel ist 4-mal geringer als ein Kubikmeter Ziegel. Der Unterschied ist kolossal!",
    breathable: "Atmungsaktiv",
    breathableDescription: "Hohe Dampfdurchlässigkeit und Atmungsaktivität machen das Mikroklima in einem Miscanthus-Haus angenehm. Das nächste Äquivalent unter Baumaterialien ist Holz.",

    // CTA
    ctaTitle: "Bereit, Ihre ökologische Zukunft zu bauen?",
    ctaDescription: "Kontaktieren Sie uns für Beratung und Projektberechnung.",
    submitRequest: "Anfrage senden",
    writeToUs: "Schreiben Sie uns",

    // Stats
    stats1: "Abgeschlossene Projekte",
    stats2: "CO₂-Reduzierung",
    stats3: "Länder, in denen wir tätig sind",
    stats4: "Unterstützung",

    // About Page
    aboutTitle: "Über uns",
    aboutSubtitle: "Innovation im Bauwesen für eine nachhaltige Zukunft",

    // Story
    storyTitle: "Unsere Geschichte",
    storyDescription1: "Seit über 30 Jahren arbeiten wir mit Miscanthus und finden Anwendungen in verschiedenen Bereichen. Einer dieser Bereiche ist das Bauwesen.",
    storyDescription2: "Im Laufe der Jahre haben wir den Prozess der Umwandlung dieses bemerkenswerten Rohstoffs verbessert und hochwirksame Baublöcke entwickelt, die traditionellen Materialien nicht nur entsprechen, sondern sie in vielerlei Hinsicht übertreffen.",
    storyDescription3: "Heute steht Emisco an der Spitze der grünen Baurevolution und bietet Architekten, Bauherren und Hausbesitzern nachhaltige Lösungen, die Qualität und Leistung nicht beeinträchtigen.",

    // Mission
    missionTitle: "Unsere Mission",
    missionDescription: "Wir setzen umweltfreundliche Materialien und Technologien im Bauwesen ein, um komfortable und gesunde Lebensräume zu schaffen. Wir glauben, dass Innovation im Bauwesen Hand in Hand mit Umweltschutz und Komfort gehen kann.",
    cardTitle1: "Nachhaltigkeit und Qualität",
    cardDescription1: "Priorität auf erneuerbare Ressourcen, Minimierung von Abfällen und Emissionen sowie strenge Kontrolle in allen Produktions- und Bauphasen gemäß SIA-Standards.",
    cardTitle2: "Innovationskraft",
    cardDescription2: "Zusammenarbeit mit Forschungszentren und kontinuierliche F&E, um den Markt mit den neuesten Lösungen zu versorgen. Seit Beginn des Projekts setzen wir modernen Beton ein und verkleinerten die Spangröße für höhere Qualität.",
    cardTitle3: "Offenheit und Partnerschaft",
    cardDescription3: "Transparenz in der Zusammenarbeit mit Kunden, individuelle Ansätze und Aufbau einer Gemeinschaft rund um grünes Bauen.",

    // Team
    teamTitle: "Unser Team",
    teamDescription: "Leidenschaftliche Experten hinter den innovativen Lösungen von Emisco im nachhaltigen Bauen",
    name1: "Misha Krug",
    position1: "Geschäftsführer",
    description1: "Umweltingenieur mit über 15 Jahren Erfahrung in nachhaltigen Materialien. Promotion in Biomaterialien am MIT.",
    name2: "Vova Vovan",
    position2: "Technischer Direktor",
    description2: "Materialwissenschaftler, spezialisiert auf biobasierte Baustoffe. Ehemaliger Forscher am CERN.",
    name3: "Andrey Bro",
    position3: "Produktionsleiter",
    description3: "Experte für Produktionsprozesse mit über 20 Jahren Erfahrung in der Optimierung nachhaltiger Verfahren im Bauwesen.",

    // Why
    whyTitle: "Warum EmisCO?",
    whySubtitle: "Unser Engagement für Innovation und Nachhaltigkeit wurde von Branchenführern anerkannt",
    awardTitle1: "Eigene Produktion",
    awardDescription1: "Volle Qualitätskontrolle der Blöcke im Werk.",
    awardTitle2: "Bauexpertise",
    awardDescription2: "Erfahrung in der Umsetzung von Projekten „schlüsselfertig“.",
    awardTitle3: "Öko-Effizienz",
    awardDescription3: "Häuser aus unseren Blöcken sorgen für ein angenehmes Raumklima und senken den Energieverbrauch.",
    awardTitle4: "Qualitätszertifikate",
    awardDescription4: "Unsere Produkte sind nach EMPA-Standards zertifiziert.",

    // AboutCta
    aboutCtaTitle: "Möchten Sie mehr über unsere Arbeit erfahren oder eine Zusammenarbeit besprechen?",
    aboutCtaDescription: "Schließen Sie sich uns beim Aufbau einer nachhaltigeren Zukunft an. Lassen Sie uns besprechen, wie Emisco Ihr nächstes Projekt unterstützen kann.",
    aboutCtaButton: "Kontaktieren Sie uns",


    // ProductPage
    productBadge: "Revolutionäres Baumaterial",
    productTitle: "Miscanthus-Block",
    productDescription:
      "Ein moderner biobasierter Wandbaustein aus natürlichen Miscanthusfasern und einem speziellen Zementbinder. Er ist hochfest für den Niedrigbau und deutlich leichter als herkömmliche Betonblöcke.",
    productButton1: "Eigenschaften ansehen",
    productButton2: "Herunterladen",

    // ProductAdvantage
    advantageTitle: "Materialvorteile",
    advantageSubtitle:
      "Erfahren Sie, warum unsere Miscanthus-Blöcke die beste Wahl für nachhaltiges Bauen sind",
    advTitle1: "Dampfdurchlässigkeit",
    advDescr1:
      "Ein 'atmendes' Material – reguliert die Luftfeuchtigkeit, die Wände sammeln kein Kondensat, gesundes Raumklima im Haus.",
    advTitle2: "Feuerbeständigkeit",
    advDescr2:
      "Dank mineralisierter Fasern und Zementbinder schwer entflammbar. Sicherer im Brandfall als Holzkonstruktionen.",
    advTitle3: "Umweltfreundlichkeit",
    advDescr3:
      "Blöcke bestehen zu 100 % aus natürlichen und mineralischen Komponenten. Der Anbau von Miscanthus schont die Umwelt, verbessert Böden und bindet CO₂. Die Herstellung erfordert weniger Energie als die Produktion von Ziegeln oder Porenbeton.",
    advTitle4: "Energieeffizienz",
    advDescr4:
      "Hohe Wärmedämmung hält Wärme besser als herkömmlicher Beton. Weniger Heiz- und Kühlbedarf. Zudem exzellente Schalldämmung dank poröser Struktur – ruhig und komfortabel.",

    // ProductSpecs
    specsTitle: "Technische Eigenschaften und Zusammensetzung",
    specsSubtitle:
      "Detaillierte technische Daten und Leistungsmerkmale unserer Miscanthus-Baublöcke",
    specsTitle1: "Wärmetechnisch",
    specsTitle2: "Strukturell",
    specsTitle3: "Ökologisch",
    specsTitle4: "Zusammensetzung",

    // ProductUsage
    usageTitle: "Anwendungsbereiche",
    usageSubtitle: "Erfahren Sie, wo Miscanthus-Blöcke eingesetzt werden",
    usageTitle1: "Niedriggeschossiger Wohnungsbau",
    usageDescr1:
      "Ideal für Cottages, Ferienhäuser und Stadthäuser bis 2–3 Etagen.",
    usageTitle2: "Gewerbe- und Landwirtschaftsbauten",
    usageDescr2:
      "Öko-Büros, Lagerhallen, landwirtschaftliche Gebäude mit Fokus auf Raumklima und Nachhaltigkeit.",
    usageTitle3: "Rekonstruktion und Dämmung",
    usageDescr3:
      "Einsetzbar für Anbauten, Aufstockungen oder als zusätzliche Dämmschicht.",

    // Documentation
    documentationTitle: "Technische Dokumentation",
    documentationSubtitle:
      "Laden Sie vollständige technische Unterlagen und Montageanleitungen herunter",
    docTitle1: "Technisches Datenblatt",
    docDescr1: "Vollständige Spezifikationen und Daten",
    docTitle2: "Montageanleitung",
    docDescr2: "Schritt-für-Schritt-Anleitung für den Bau",
    docTitle3: "CAD-Dateien",
    docDescr3: "3D-Modelle und technische Zeichnungen",
    docButton1: "PDF herunterladen",
    docButton2: "PDF herunterladen",
    docButton3: "ZIP herunterladen",

    // ProductCTA
    productCtaTitle:
      "Interessiert an unserem Material? Wir beantworten alle Fragen und erstellen ein Angebot.",
    productCtaButton1: "Angebot anfordern",
    productCtaButton2: "Portfolio ansehen",


    // PortfolioPage
portfolioTitle: "Unser Portfolio",
portfolioSubtitle: "Wir sind stolz auf jedes Projekt, das mit unseren Materialien realisiert wurde. In diesem Abschnitt werden Beispiele für Häuser und Gebäude gezeigt, die mit EmisCO-Miscanthusblöcken gebaut wurden.",
portfolioStat1: "Abgeschlossene Projekte",
portfolioStat2: "Gelieferte Blöcke",
portfolioStat3: "Durchschnittliche Energieeinsparung",

// PortfolioBest
portfolioBestTitle: "Ausgewählte Projekte",
portfolioBestSubtitle: "Entdecken Sie unsere innovativsten und bedeutendsten nachhaltigen Bauprojekte",
caseBadge1: "Wohnbau",
caseTitle1: "Green Valley Wohnanlage",
caseLocation1: "Amsterdam, Niederlande",
caseDescr1: "Ein wegweisendes 120-Einheiten-Wohnprojekt, das mit unseren hochisolierenden Miscanthusblöcken einen kohlenstoffnegativen Status erreichte. Das Projekt zeigt, wie nachhaltige Materialien komfortable, energieeffiziente Häuser schaffen können.",
caseStat1:"Energieeinsparung",
caseStat2: "CO2 gebunden",
caseButton: "Fallstudie ansehen",
caseBadge2: "Gewerbegebäude",
caseTitle2: "EcoTech Bürokomplex",
caseLocation2: "Berlin, Deutschland",
caseDescr2: "Ein 5-stöckiges Bürogebäude, das die strukturellen Fähigkeiten unserer Miscanthusblöcke zeigt. Das Gebäude erhielt die LEED Platinum-Zertifizierung und dient als Modell für nachhaltiges kommerzielles Bauen.",
caseStat3:"Platin Zertifiziert",
caseStat4: "Geringere Baukosten",
caseBadge3: "Bildungseinrichtung",
caseTitle3: "Future Learning Academy",
caseLocation3: "Lyon, Frankreich",
caseDescr3: "Ein innovatives Schulgebäude, das Nachhaltigkeit durch seine Konstruktion vermittelt. Das Projekt zeigt freiliegende Miscanthuswände als Lehrmittel und sorgt für hervorragende Luftqualität im Innenraum.",
caseStat5:"Betreute Schüler",
caseStat6: "VOC-Emissionen",

// Portfolio Category
categoryTitle: "Projektkategorien",
categorySubtitle: "Unsere Miscanthusblöcke sind vielseitig einsetzbar für jedes Bauprojekt",
category1: "Wohngebäude",
category2: "Gewerbegebäude",
category3: "Bildungseinrichtungen",
category4: "Infrastrukturprojekte",
categorydescr1: "Einfamilienhäuser, Wohnungen und Wohnanlagen",
categorydescr2: "Bürogebäude, Einzelhandelsflächen und gemischt genutzte Projekte",
categorydescr3: "Schulen, Universitäten und Forschungseinrichtungen",
categorydescr4: "Brücken, Straßen und öffentliche Verkehrssysteme",
categoryComp: "Abgeschlossene Projekte",

// PortfolioCTA
portfolioCtaTitle: "Erstellen Sie Ihr nachhaltiges Projekt",
portfolioCtaSubtitle: "Schließen Sie sich unserem wachsenden Portfolio erfolgreicher nachhaltiger Bauprojekte an. Lassen Sie uns besprechen, wie Emisco Ihre Idee umsetzen kann.",
portfolioCtaButton1: "Loslegen",
portfolioCtaButton2: "Produkte ansehen",


// Footer
footerSubtitle: "Baulösungen der Zukunft. Innovative, nachhaltige und effiziente Materialien für modernes Bauen.",
footerNav1: "Startseite",
footerNav2: "Produkte",
footerNav3: "Über uns",
footerNav4: "Warum Emisco",
footerNav5: "Portfolio",
footerNav6: "Dienstleistungen",
footerNav7: "Technische Daten",
footerNav8: "Installationsanleitung",
footerNavTitle1: "Navigation",
footerNavTitle2: "Ressourcen",
footerInfo: "© 2024 Emisco. Alle Rechte vorbehalten. Wir bauen eine nachhaltige Zukunft.",


  },

  fr: {
    // Navigation  
    navigation: {
    home: "Accueil",
    about: "À propos",
    whyEmisco: "Pourquoi Emisco", 
    product: "Produit",
    portfolio: "Portfolio",
    services: "Services",
    production: "Production",
    },

    // Common
    learnMore: "En savoir plus",
    getStarted: "Commencer", 
    contactUs: "Nous contacter",
    readMore: "Lire la suite",

    // Homepage
    heroTitle: "Solutions de construction écologiques",
    heroSubtitle: "Nous produisons des blocs de construction à partir de miscanthus - un biomatériau innovant qui combine la résistance du béton et le respect de l'environnement de la nature. Construisez de manière fiable et respectueuse de l'environnement avec nous.",
    featuresTitle: "Pourquoi choisir le miscanthus?",
    featuresSubtitle: "Nos blocs de construction innovants utilisent la puissance de l'herbe de miscanthus pour créer des matériaux de construction durables et résistants qui dépassent les normes de l'industrie",

    // Features
    ecoFriendly: "100% Écologique",
    ecoDescription: "Matières premières naturelles, empreinte carbone réduite.",
    reliable: "Fiable", 
    reliableDescription: "Résistance et longue durée de vie des blocs.",
    innovative: "Innovant",
    innovativeDescription: "Technologies de béton bio les plus récentes à base de miscanthus.",
    energyEfficient: "Économe en énergie",
    energyDescription: "Technologies de béton bio les plus récentes à base de miscanthus.",

    // About section
    aboutSectionTitle: "Construisez votre avenir avec Emisco", 
    aboutSectionDescription: "EmisCO est un pionnier de la construction verte. Nous combinons des technologies avancées et des matériaux naturels pour créer des maisons sûres pour l'environnement et confortables pour la vie. Notre objectif est de rendre la construction écologique accessible et rentable pour chaque client.",
    expertTeam: "Équipe d'experts",
    industrySpecialists: "Spécialistes de l'industrie",
    certifiedQuality: "Qualité certifiée", 
    isoStandards: "Normes ISO",

    // Product section
    whyUsTitle: "Pourquoi exactement nous?",
    whyUsDescription: "Nos blocs de construction en miscanthus offrent la combinaison parfaite de durabilité et de performance. Chaque bloc est soigneusement conçu pour fournir une isolation supérieure, une intégrité structurelle et des avantages environnementaux.",
    fireResistance: "Résistance au feu",
    fireDescription: "Les panneaux de miscanthus ne brûlent pas - notre matériau appartient aux matériaux de construction faiblement combustibles et ignifuges. Ne propage pas la flamme et a une faible capacité de formation de fumée.",
    lightWeight: "Poids léger", 
    lightDescription: "Le poids léger des murs en miscanthus permet de construire une fondation légère sur tout type de sol. Le poids d'un mètre cube de panneau de miscanthus est 4 fois moindre qu'un mètre cube de brique. La différence est colossale!",
    breathable: "Respirant",
    breathableDescription: "La haute perméabilité à la vapeur et la capacité de respirer rendent le microclimat dans une maison en miscanthus agréable. L'équivalent le plus proche parmi les matériaux de construction est le bois.",

    // CTA
    ctaTitle: "Prêt à construire votre avenir écologique?",
    ctaDescription: "Contactez-nous pour une consultation et un calcul de projet.",
    submitRequest: "Soumettre une demande",
    writeToUs: "Écrivez-nous",

    // Stats
    stats1: "Projets réalisés",
    stats2: "Réduction de CO₂",
    stats3: "Pays dans lesquels nous opérons",
    stats4: "Assistance",

    // About Page
    aboutTitle: "À propos de nous",
    aboutSubtitle: "Innover dans la construction pour un avenir durable",

    // Story
    storyTitle: "Notre histoire",
    storyDescription1: "Depuis plus de 30 ans, nous travaillons avec le miscanthus et trouvons des applications dans différents secteurs. L’un de ces domaines est la construction.",
    storyDescription2: "Au fil des années, nous avons perfectionné le processus de transformation de cette ressource remarquable en blocs de construction très performants, qui non seulement égalent les matériaux traditionnels, mais les surpassent à bien des égards.",
    storyDescription3: "Aujourd’hui, Emisco est à l’avant-garde de la révolution de la construction verte, offrant aux architectes, constructeurs et propriétaires des solutions durables sans compromis sur la qualité et la performance.",

    // Mission
    missionTitle: "Notre mission",
    missionDescription: "Intégrer des matériaux et technologies écologiques dans la construction afin de créer des espaces de vie confortables et sains. Nous croyons que l’innovation peut aller de pair avec le respect de l’environnement et le confort.",
    cardTitle1: "Durabilité et qualité",
    cardDescription1: "Priorité aux ressources renouvelables, réduction des déchets et des émissions, et contrôle rigoureux à toutes les étapes de la production et de la construction selon les normes SIA.",
    cardTitle2: "Innovation",
    cardDescription2: "Collaboration avec des centres de recherche et R&D continue pour offrir au marché les dernières solutions. Depuis le début du projet, nous utilisons du béton de nouvelle génération et réduisons la taille des copeaux pour une meilleure qualité.",
    cardTitle3: "Ouverture et partenariat",
    cardDescription3: "Transparence dans les relations clients, approche individualisée et création d’une communauté autour de la construction verte.",

    // Team
    teamTitle: "Notre équipe",
    teamDescription: "Des experts passionnés derrière les solutions innovantes d’Emisco dans le domaine de la construction durable",
    name1: "Micha Krug",
    position1: "Directeur général",
    description1: "Ingénieur environnemental avec plus de 15 ans d’expérience dans les matériaux durables. Doctorat en biomatériaux du MIT.",
    name2: "Vova Vovan",
    position2: "Directeur technique",
    description2: "Spécialiste des matériaux biosourcés. Ancien chercheur au CERN.",
    name3: "André Bro",
    position3: "Directeur de production",
    description3: "Expert en production avec plus de 20 ans d’expérience dans l’optimisation des processus durables dans la construction.",

    // Why
    whyTitle: "Pourquoi EmisCO ?",
    whySubtitle: "Notre engagement envers l’innovation et le développement durable a été reconnu par les leaders du secteur",
    awardTitle1: "Production interne",
    awardDescription1: "Contrôle total de la qualité des blocs à l’usine.",
    awardTitle2: "Expertise en construction",
    awardDescription2: "Expérience dans la réalisation de projets clés en main.",
    awardTitle3: "Éco-efficacité",
    awardDescription3: "Les maisons construites avec nos blocs offrent un microclimat confortable tout en réduisant la consommation d’énergie.",
    awardTitle4: "Certificats de qualité",
    awardDescription4: "Nos produits sont certifiés selon les normes EMPA.",

    // AboutCta
    aboutCtaTitle: "Vous souhaitez en savoir plus sur notre travail ou discuter d’un partenariat ?",
    aboutCtaDescription: "Rejoignez-nous pour construire un avenir plus durable. Voyons ensemble comment Emisco peut contribuer à votre prochain projet.",
    aboutCtaButton: "Nous contacter",


    // ProductPage
    productBadge: "Matériau de construction révolutionnaire",
    productTitle: "Bloc de miscanthus",
    productDescription:
      "Bloc mural biocomposite moderne composé de fibres naturelles de miscanthus et d’un liant cimentaire spécial. Haute résistance pour la construction basse et nettement plus léger que les blocs de béton traditionnels.",
    productButton1: "Voir les caractéristiques",
    productButton2: "Télécharger",

    // ProductAdvantage
    advantageTitle: "Avantages du matériau",
    advantageSubtitle:
      "Découvrez pourquoi nos blocs de miscanthus sont un excellent choix pour une construction durable",
    advTitle1: "Perméabilité à la vapeur",
    advDescr1:
      "Un matériau 'respirant' – régule l’humidité, les murs ne retiennent pas la condensation, assurant un climat intérieur sain.",
    advTitle2: "Résistance au feu",
    advDescr2:
      "Grâce à la minéralisation des fibres et au liant cimentaire, le matériau est difficilement inflammable. Plus sûr que les constructions en bois.",
    advTitle3: "Écologique",
    advDescr3:
      "Les blocs sont composés à 100 % de composants naturels et minéraux. La culture du miscanthus améliore les sols et capte le CO₂. La production consomme moins d’énergie que la fabrication de briques ou de béton cellulaire.",
    advTitle4: "Efficacité énergétique",
    advDescr4:
      "Excellentes propriétés d’isolation thermique, meilleur maintien de la chaleur que le béton classique. Moins de chauffage en hiver, moins de climatisation en été. Structure poreuse assurant aussi une bonne isolation acoustique.",

    // ProductSpecs
    specsTitle: "Caractéristiques techniques et composition",
    specsSubtitle:
      "Données techniques détaillées et performances de nos blocs de miscanthus",
    specsTitle1: "Thermiques",
    specsTitle2: "Structurelles",
    specsTitle3: "Écologiques",
    specsTitle4: "Composition",

    // ProductUsage
    usageTitle: "Domaines d’application",
    usageSubtitle: "Découvrez les domaines d’utilisation des blocs de miscanthus",
    usageTitle1: "Construction résidentielle de faible hauteur",
    usageDescr1:
      "Idéal pour cottages, maisons de campagne, maisons de ville jusqu’à 2–3 étages.",
    usageTitle2: "Bâtiments commerciaux et agricoles",
    usageDescr2:
      "Bureaux écologiques, entrepôts, bâtiments agricoles axés sur l’écologie et le climat intérieur.",
    usageTitle3: "Rénovation et isolation",
    usageDescr3:
      "Utilisable pour les extensions, surélévations ou comme couche isolante.",

    // Documentation
    documentationTitle: "Documentation technique",
    documentationSubtitle:
      "Téléchargez la documentation complète et les instructions d’installation",
    docTitle1: "Fiche technique",
    docDescr1: "Spécifications et données complètes",
    docTitle2: "Guide d’installation",
    docDescr2: "Instructions de construction étape par étape",
    docTitle3: "Fichiers CAD",
    docDescr3: "Modèles 3D et dessins techniques",
    docButton1: "Télécharger PDF",
    docButton2: "Télécharger PDF",
    docButton3: "Télécharger ZIP",

    // ProductCTA
    productCtaTitle:
      "Intéressé par notre matériau ? Nous répondrons à toutes vos questions et préparerons une offre.",
    productCtaButton1: "Obtenir une offre",
    productCtaButton2: "Voir le portfolio",


    // PortfolioPage
portfolioTitle: "Notre Portfolio",
portfolioSubtitle: "Nous sommes fiers de chaque projet réalisé avec nos matériaux. Cette section présente des exemples de maisons et de bâtiments construits avec les blocs de miscanthus EmisCO.",
portfolioStat1: "Projets réalisés",
portfolioStat2: "Blocs livrés",
portfolioStat3: "Économie d'énergie moyenne",

// PortfolioBest
portfolioBestTitle: "Projets Sélectionnés",
portfolioBestSubtitle: "Découvrez nos projets les plus innovants et significatifs dans le domaine de la construction durable",
caseBadge1: "Développement résidentiel",
caseTitle1: "Green Valley Housing Estate",
caseLocation1: "Amsterdam, Pays-Bas",
caseDescr1: "Un projet résidentiel pionnier de 120 unités qui a atteint un statut carbone négatif grâce à nos blocs de miscanthus à haute isolation. Le projet montre comment les matériaux durables peuvent créer des maisons confortables et économes en énergie.",
caseStat1:"Réduction énergétique",
caseStat2: "CO2 séquestré",
caseButton: "Voir l'étude de cas",
caseBadge2: "Bâtiment commercial",
caseTitle2: "EcoTech Office Complex",
caseLocation2: "Berlin, Allemagne",
caseDescr2: "Un bâtiment de bureaux de 5 étages démontrant les capacités structurelles de nos blocs de miscanthus. Le bâtiment a obtenu la certification LEED Platinum et sert de modèle pour la construction commerciale durable.",
caseStat3:"Certification Platinum",
caseStat4: "Coût de construction réduit",
caseBadge3: "Établissement éducatif",
caseTitle3: "Future Learning Academy",
caseLocation3: "Lyon, France",
caseDescr3: "Un bâtiment scolaire innovant conçu pour enseigner la durabilité à travers sa construction. Le projet comprend des murs en miscanthus exposés comme éléments éducatifs tout en offrant une qualité d'air intérieur exceptionnelle pour les élèves.",
caseStat5:"Étudiants servis",
caseStat6: "Émissions de COV",

// Portfolio Category
categoryTitle: "Catégories de projets",
categorySubtitle: "Nos blocs de miscanthus sont suffisamment polyvalents pour tout projet de construction",
category1: "Bâtiments résidentiels",
category2: "Bâtiments commerciaux",
category3: "Établissements éducatifs",
category4: "Projets d'infrastructure",
categorydescr1: "Maisons individuelles, appartements et lotissements",
categorydescr2: "Bureaux, espaces commerciaux et développements mixtes",
categorydescr3: "Écoles, universités et centres de recherche",
categorydescr4: "Ponts, routes et systèmes de transport public",
categoryComp: "Projets réalisés",

// PortfolioCTA
portfolioCtaTitle: "Créez votre projet durable",
portfolioCtaSubtitle: "Rejoignez notre portfolio croissant de projets de construction durable réussis. Discutons de la façon dont Emisco peut aider à concrétiser votre idée.",
portfolioCtaButton1: "Commencer",
portfolioCtaButton2: "Voir les produits",


// Footer
footerSubtitle: "Les solutions de construction de demain. Des matériaux innovants, durables et efficaces pour la construction moderne.",
footerNav1: "Accueil",
footerNav2: "Produits",
footerNav3: "À propos",
footerNav4: "Pourquoi Emisco",
footerNav5: "Portfolio",
footerNav6: "Services",
footerNav7: "Spécifications",
footerNav8: "Guide d'installation",
footerNavTitle1: "Navigation",
footerNavTitle2: "Ressources",
footerInfo: "© 2024 Emisco. Tous droits réservés. Construisons un avenir durable.",

  },

  ru: {
    // Navigation
    navigation: {
      home: "Главная",
      about: "О нас",
      production: "Производство",
      product: "Продукт",
      portfolio: "Портфолио",
      services: "Услуги",
    },

    // Common
    learnMore: "Узнать больше",
    getStarted: "Начать",
    contactUs: "Связаться с нами", 
    readMore: "Перейти к продукту",

    // Homepage
    heroTitle: "Экологичное решение в строительстве",
    heroSubtitle: "Мы производим строительные блоки из мискантуса — инновационного биоматериала, объединяющего прочность бетона и экологичность природы. Стройте надёжно и с заботой об экологии вместе с нами.",
    featuresTitle: "Почему выбирают мискантус?",
    featuresSubtitle: "Наши инновационные строительные блоки используют силу травы мискантус для создания устойчивых, прочных строительных материалов, которые превосходят отраслевые стандарты",

    // Features
    ecoFriendly: "100% экологичность",
    ecoDescription: "Натуральное сырьё, снижение углеродного следа.",
    reliable: "Надёжно", 
    reliableDescription: "Прочность и длительный срок службы блоков.",
    innovative: "Инновационно",
    innovativeDescription: "Новейшие технологии биобетона на основе мискантуса.",
    energyEfficient: "Энергоэффективно",
    energyDescription: "Новейшие технологии биобетона на основе мискантуса.",

    // About section
    aboutSectionTitle: "Стройте своё будущее с Emisco",
    aboutSectionDescription: "EmisCO — пионер в сфере зелёного строительства. Мы совмещаем передовые технологии и природные материалы для создания домов, которые безопасны для экологии и комфортны для жизни. Наша цель — сделать экологическое строительство доступным и выгодным для каждого клиента.",
    expertTeam: "Команда экспертов",
    industrySpecialists: "Отраслевые специалисты",
    certifiedQuality: "Сертифицированное качество",
    isoStandards: "Стандарты ISO",

    // Product section
    whyUsTitle: "Почему именно мы?",
    whyUsDescription: "Наши строительные блоки из мискантуса предлагают идеальное сочетание устойчивости и производительности. Каждый блок тщательно спроектирован, чтобы обеспечить превосходную изоляцию, структурную целостность и экологические преимущества.",
    fireResistance: "Пожароустойчивость",
    fireDescription: "Мискантусные панели не горят — наш материал относится к слабогорючим и трудновоспламеняемым строительным материалам. Не распространяет пламя и отличается малой дымообразующей способностью.",
    lightWeight: "Малый вес",
    lightDescription: "Лёгкий вес стен из мискантуса позволяет строить облегчённый фундамент на любых типах грунтов. Вес кубометра панели из мискантуса в 4 раза меньше кубометра кирпича. Разница колоссальная!",
    breathable: "Паропроницаем",
    breathableDescription: "Высокая паропроницаемость и способность дышать делают микроклимат в доме из мискантуса приятным. Ближайший эквивалент среди строительных материалов — дерево.",

    // CTA
    ctaTitle: "Готовы построить своё экологичное будущее?",
    ctaDescription: "Свяжитесь с нами для консультации и расчёта проекта.",
    submitRequest: "Оставить заявку", 
    writeToUs: "Написать нам",

    // Stats
    stats1: "Проектов завершено",
    stats2: "Снижение CO2",
    stats3: "Стран, в которых мы работаем",
    stats4: "Поддержка",


    // About Page
    aboutTitle: "О нас",
    aboutSubtitle: "Инновации в строительстве ради устойчивого будущего",

    // Story
    storyTitle: "Наша история",
    storyDescription1: "Вот уже более 30 лет мы работаем с мискантусом и находим ему применение в разных сферах деятельности. Одной из таких сфер стало направление строительства.",
    storyDescription2: "За годы исследований и разработок мы усовершенствовали процесс преобразования этого замечательного превращать их в высокоэффективные строительные блоки, которые не только соответствуют традиционным материалам, но и превосходят их во многих отношениях.",
    storyDescription3: "Сегодня Emisco находится в авангарде революции в области зеленого строительства, предоставляя архитекторам, строителям, и домовладельцы, предлагающие устойчивые решения, которые не ставят под угрозу качество и производительность.",

    // Mission
    missionTitle: "Наша миссия",
    missionDescription: "Внедрять экологичные материалы и технологии в строительство, создавая комфортные и здоровые пространства для жизни. Мы верим, что инновации в строительстве могут идти рука об руку с заботой об окружающей среде и комфортом.",
    cardTitle1: "Экологичность и качество",
    cardDescription1: "Приоритет использования возобновляемых ресурсов, минимизация отходов и выбросов, а также строгий контроль на всех этапах производства и строительства с соответствием стандартам SIA.",
    cardTitle2: "Инновационность",
    cardDescription2: "Сотрудничество с научными центрами и постоянный R&D, чтобы предлагать рынку новейшие решения. С момента начала данного проекта, мы стали использовать новейший бетон для склейки и уменьшили размер используемой щепы, для большего качества.",
    cardTitle3: "Открытость и партнёрство",
    cardDescription3: "Прозрачность в работе с клиентами, индивидуальный подход, образование сообщества вокруг зелёного строительства.",

    // Team
    teamTitle: "Наша команда",
    teamDescription: "Страстные эксперты, стоящие за инновационными решениями Emisco в области устойчивого строительства",
    name1: "Миша Круг",
    position1: "Генеральный директор",
    description1: "Экологический инженер с более чем 15-летним опытом в области исследований устойчивых материалов. Докторская степень в области биоматериалов из MIT.",
    name2: "Вова Вован",
    position2: "Технический директор",
    description2: "Материаловед, специализирующийся на биооснованных строительных материалах. Бывший исследователь в CERN.",
    name3: "Андрюха Бро",
    position3: "Руководитель производства",
    description3: "Эксперт в области производства с более чем 20-летним опытом оптимизации устойчивых производственных процессов в строительной отрасли.",

    // Why
    whyTitle: "Почему EmisCO ?",
    whySubtitle: "Наша приверженность инновациям и устойчивому развитию была признана лидерами отрасли",
    awardTitle1: "Собственное производство",
    awardDescription1: "Полный контроль качества блоков на заводе.",
    awardTitle2: "Экспертиза в строительстве",
    awardDescription2: "Опыт реализации проектов “под ключ”.",
    awardTitle3: "Эко-эффективность",
    awardDescription3: "Дома из наших блоков обеспечивают комфортный микроклимат, снижая расходы на энергопотребление.",
    awardTitle4: "Сертификаты качества",
    awardDescription4: "Наша продукция прошла сертифицирование по стандартам EMPA.",

    // AboutCta
    aboutCtaTitle: "Хотите узнать больше о нашей работе или обсудить сотрудничество?",
    aboutCtaDescription: "Присоединяйтесь к нам в создании более устойчивого будущего. Давайте обсудим, как Emisco может помочь с вашим следующим проектом.",
    aboutCtaButton: "Связаться с нами",


    // ProductPage
    productBadge: "Революционный строительный материал",
    productTitle: "Мискантус-блок",
    productDescription: "Это современный биокомпозитный стеновой блок, состоящий из природных волокон мискантуса и специального цементного связующего. Он обладает высокой прочностью для малоэтажного строительства и значительно легче традиционных бетонных блоков.",
    productButton1: "Посмотреть характеристики",
    productButton2: "Скачать",

    // ProductAdvantage
    advantageTitle: "Преимущества материала",
    advantageSubtitle: "Узнайте, что делает наши блоки из мискантуса превосходным выбором для устойчивого строительства",
    advTitle1: "Паропроницаемость",
    advDescr1: "'Дышащий' материал – регулирует влажность, стены не накапливают конденсат, в доме здоровый микроклимат.",
    advTitle2: "Огнестойкость",
    advDescr2:"Благодаря минерализации волокон и цементному связующему, материал трудновоспламеняемый. Он безопаснее в пожарном отношении, чем деревянные конструкции.",
    advTitle3: "Экологичность",
    advDescr3:"Блоки на 100% состоят из природных и минеральных компонентов. Выращивание мискантуса не вредит экологии – наоборот, эта культура восстанавливает бедные почвы и поглощает CO₂, превращая его в биомассу. Производство блоков требует меньше энергии, чем выплавка кирпича или пенобетона, что снижает углеродный след строительства.",
    advTitle4: "Энергоэффективность",
    advDescr4:"Высокие теплоизоляционные свойства позволяют стенам из мискантус-блоков удерживать тепло лучше, чем обычный бетон. Дом из таких блоков требует меньше отопления зимой и кондиционирования летом. Кроме тепла, упомянуть звукоизоляцию: пористая структура отлично гасит шумы – в доме тихо и комфортно.",

    // ProductSpecs
    specsTitle: "Технические характеристики и состав",
    specsSubtitle: "Подробные технические данные и характеристики производительности наших строительных блоков из мискантуса",
    specsTitle1: "Теплотехнические",
    specsTitle2: "Структурные",
    specsTitle3: "Экологические",
    specsTitle4: "Состав",

    // ProductUsage
    usageTitle:"Сфера применения",
    usageSubtitle:"Узнайте о сферах применения блоков из мискантуса",
    usageTitle1: "Малоэтажное жилищное строительство",
    usageDescr1: "Идеальны для коттеджей, дачных домов, таунхаусов до 2-3 этажей.",
    usageTitle2: "Коммерческие и сельскохозяйственные постройки",
    usageDescr2: "Эко-офисы, склады, фермерские постройки, где важна экологичность и климат внутри",
    usageTitle3: "Реконструкция и утепление",
    usageDescr3: "Блоки можно использовать для пристроек, надстроек или как утепляющий слой",

    // Documentation
    documentationTitle: "Техническая документация",
    documentationSubtitle: "Скачайте полную техническую документацию и инструкции по установке",
    docTitle1: "Технический паспорт",
    docDescr1: "Полные спецификации и данные",
    docTitle2: "Инструкция по установке",
    docDescr2: "Пошаговые инструкции по строительству",
    docTitle3: "CAD файлы",
    docDescr3: "3D модели и технические чертежи",
    docButton1: "Скачать PDF",
    docButton2: "Скачать PDF",
    docButton3: "Скачать ZIP",

    //ProductCTA
    productCtaTitle: "Заинтересованы в нашем материале? Мы ответим на все вопросы и подготовим предложение.",
    productCtaButton1: "Получить предложение",
    productCtaButton2: "Посмотреть портфолио",
  

// PortfolioPage
portfolioTitle: "Наше портфолио",
portfolioSubtitle: "Мы гордимся каждым проектом, выполненным с применением наших материалов. В этом разделе представлены примеры домов и зданий, построенных с использованием мискантус-блоков EmisCO",
portfolioStat1: "Проектов завершено",
portfolioStat2: "Блоков доставлено",
portfolioStat3: "Средняя экономия энергии",

// PortfolioBest
portfolioBestTitle: "Избранные проекты",
portfolioBestSubtitle: "Ознакомьтесь с нашими самыми инновационными и значимыми проектами в области устойчивого строительства",
caseBadge1: "Жилые проекты",
caseTitle1: "Жилой комплекс Green Valley",
caseLocation1: "Амстердам, Нидерланды",
caseDescr1: "Пионерский жилой комплекс на 120 квартир с использованием высокоизолирующих блоков из мискантуса, достигший углеродно-отрицательного статуса. Проект демонстрирует, как устойчивые материалы создают комфортные, энергоэффективные дома.",
caseStat1:"Снижение энергии",
caseStat2: "Углерод захвачен",
caseButton: "Посмотреть кейс",
caseBadge2: "Коммерческое здание",
caseTitle2: "Офисный комплекс EcoTech",
caseLocation2: "Берлин, Германия",
caseDescr2: "5-этажное офисное здание, демонстрирующее конструкционные возможности наших блоков из мискантуса. Здание сертифицировано по стандарту LEED Platinum и служит примером устойчивого коммерческого строительства.",
caseStat3:"Платиновый сертификат",
caseStat4: "Снижение стоимости строительства",
caseBadge3: "Образовательное учреждение",
caseTitle3: "Академия Future Learning",
caseLocation3: "Лион, Франция",
caseDescr3: "Инновационное школьное здание, обучающее устойчивости через конструкцию. Проект использует открытые стены из мискантуса как образовательный элемент, обеспечивая отличное качество воздуха внутри помещений.",
caseStat5:"Обслужено студентов",
caseStat6: "Эмиссия ЛОС",

// Portfolio Category
categoryTitle: "Категории проектов",
categorySubtitle: "Наши блоки из мискантуса достаточно универсальны для любого строительного проекта",
category1: "Жилые дома",
category2: "Коммерческие здания",
category3: "Образовательные учреждения",
category4: "Инфраструктурные проекты",
categorydescr1: "Дома для одной семьи, квартиры и жилые комплексы",
categorydescr2: "Офисные здания, торговые площади и многофункциональные объекты",
categorydescr3: "Школы, университеты и исследовательские центры",
categorydescr4: "Мосты, дороги и системы общественного транспорта",
categoryComp: "Проектов завершено",

// PortfolioCTA
portfolioCtaTitle: "Создайте свой устойчивый проект",
portfolioCtaSubtitle: "Присоединяйтесь к нашему растущему портфолио успешных проектов устойчивого строительства. Давайте обсудим, как Emisco может помочь воплотить вашу идею в жизнь.",
portfolioCtaButton1: "Начать",
portfolioCtaButton2: "Посмотреть продукты",


    //Footer
    footerSubtitle: "Строительные решения будущего. Инновационные, устойчивые и эффективные материалы для современного строительства.",
    footerNav1: "Главная",
    footerNav2: "Продукция",
    footerNav3: "О нас",
    footerNav4: "Почему Emisco",
    footerNav5: "Портфолио",
    footerNav6: "Услуги",
    footerNav7: "Технические характеристики",
    footerNav8: "Руководство по установке",
    footerNavTitle1: "Навигация",
    footerNavTitle2: "Ресурсы",
    footerInfo: "© 2024 Emisco. Все права защищены. Строим устойчивое будущее.",


    
  }
} as const

export function useTranslation(lang: Language = "ru") {
  return translations[lang]
}