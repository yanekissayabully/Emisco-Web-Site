// export const languages = {
//   en: "English",
//   de: "Deutsch",
//   fr: "Français",
// } as const

import { vi } from "date-fns/locale"
import { send } from "process"

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
    readMore: "View Product",

    // Homepage
    heroTitle: "An Eco-Friendly Solution for Modern Construction",
    heroSubtitle: "We manufacture building blocks and panels made from miscanthus - an innovative biomaterial that combines the strength of concrete with the purity of nature. Build with confidence and care for the environment together with us.",
    featuresTitle: "Why Choose Miscanthus?",
    featuresSubtitle: "Our innovative building panels and blocks harness the power of miscanthus grass to create sustainable, durable materials that exceed industry standards.",
    
    // Features
    ecoFriendly: "100% Eco-Friendly",
    ecoDescription: "Natural raw materials with a reduced carbon footprint.",
    reliable: "Reliable",
    reliableDescription: "Exceptional strength and long-lasting performance.",
    innovative: "Innovative", 
    innovativeDescription: "Cutting-edge bioconcrete technology based on miscanthus.",
    energyEfficient: "Energy-Efficient",
    energyDescription: "Outstanding thermal insulation and energy performance.",

    // About section
    aboutSectionTitle: "Build Your Future with EmisCO",
    aboutSectionDescription: "EmisCO is a pioneer in sustainable construction. We combine advanced technologies with natural materials to create homes that are both environmentally responsible and comfortable to live in. Our mission is to make eco-friendly building accessible and profitable for every client.",
    expertTeam: "Expert Team",
    industrySpecialists: "Industry professionals.",
    certifiedQuality: "Certified Quality",
    isoStandards: "ISO and EMPA standards.",

    // Product section  
    whyUsTitle: "Why Choose Us?",
    whyUsDescription: "Our miscanthus-based building blocks offer the perfect balance between sustainability and performance. Each element is precisely engineered to provide outstanding insulation, structural integrity, and environmental benefits.",
    fireResistance: "Fire Resistance",
    fireDescription: "Miscanthus panels do not burn — they are classified as low-combustible and flame-retardant building materials. They do not propagate fire and produce minimal smoke.",
    lightWeight: "Lightweight",
    lightDescription: "The low weight of miscanthus walls allows for lighter foundations on virtually any type of soil. One cubic meter of miscanthus panels weighs four times less than a cubic meter of brick — the difference is remarkable!",
    breathable: "Breathable",
    breathableDescription: "High vapor permeability ensures a naturally balanced indoor climate. The closest equivalent among building materials is wood.",

    // CTA
    ctaTitle: "Ready to build your sustainable future?",
    ctaDescription: "Get in touch with us for a consultation and project estimate.",
    submitRequest: "Send a request",
    writeToUs: "Contact us",

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
    storyDescription1: "For over 30 years, we have been working with miscanthus — a unique renewable resource — discovering new applications for this remarkable plant. Building on decades of research, we have developed and implemented a production technology for construction blocks that match traditional materials in strength, energy efficiency, and durability — and often surpass them.",
    storyDescription2: "Today, EmisCO is a leader in sustainable construction in Switzerland. We offer architects, developers, and clients innovative solutions that meet the highest quality standards while contributing to global sustainability goals.",
    storyDescription3: "EmisCO Founding Team",

    // Mission
    missionTitle: "Our Mission",
    missionDescription: "We bring eco-friendly construction technologies to projects of any scale, helping our partners create modern, healthy, and energy-efficient buildings. Our focus is on solutions that not only enhance living comfort but also optimize costs and increase long-term asset value.",
    cardTitle1: "Sustainability & Quality Control",
    cardDescription1: "We use only renewable resources and minimize waste at every stage of production. Both manufacturing and installation fully comply with Swiss SIA standards and EMPA requirements.",
    cardTitle2: "Innovation & R&D",
    cardDescription2: "We work continuously with research institutions to refine our technology. New concrete formulas, optimized fiber structures, and advanced bonding systems make our panels even stronger and more energy-efficient.",
    cardTitle3: "Partnership & Transparency",
    cardDescription3: "We operate through open dialogue — providing clients with full technical documentation, individual calculations, and professional support at every stage. For us, it’s essential that architects and developers see EmisCO as a trusted long-term partner.",

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
    whySubtitle: "Our commitment to innovation and sustainability has been recognized by industry leaders.",
    awardTitle1: "In-House Production",
    awardDescription1: "Complete quality control at our own manufacturing facility.",
    awardTitle2: "Construction Expertise",
    awardDescription2: "Proven experience in delivering turnkey projects.",
    awardTitle3: "Eco-Efficiency",
    awardDescription3: "Buildings made from our blocks ensure a comfortable indoor climate while reducing energy costs.",
    awardTitle4: "Certified Quality",
    awardDescription4: "Our products are tested and certified according to EMPA standards.",

    // AboutCta
    aboutCtaTitle: "Want to learn more or explore collaboration? ",
    aboutCtaDescription: "Join us in building a more sustainable future. Let’s discuss how EmisCO can support your next project.",
    aboutCtaButton: "Contact us",


    //ProductionPage
    ProductionTitle: "How We Produce Our Miscanthus Concrete Panels ",
    ProductionSubtitle: "Discover our high-tech production process that transforms miscanthus chips and cement into an innovative, sustainable building material.",
    ProductionStepsTitle: "Production Stages",
    ProductionStepsSubtitle: "From the careful selection of raw materials to final quality control. ",
    ProductionHarvestingTitle: "Miscanthus Harvesting Stages", 

    ProductionStep1Title: "Wooden Frame Preparation",
    ProductionStep1Description: "The process begins with forming a wooden frame. It serves as the structural base, giving the panel its static strength and long-term stability.",
    ProductionStep2Title: "Miscanthus Shredding",
    ProductionStep2Description: "Miscanthus stems are processed into fine chips of optimal size. This texture ensures perfect bonding with the cement component.",
    ProductionStep3Title: "Mixing the Compound",
    ProductionStep3Description: "The miscanthus chips are thoroughly mixed with water and 10% concrete. The result is an eco-friendly composition containing 90% natural material and only 10% binder.",
    ProductionStep4Title: "Panel Moulding",
    ProductionStep4Description: "The prepared mixture is poured into the wooden frame placed on a moulding table. Every millimetre is carefully filled to ensure uniform density.",
    ProductionStep5Title: "Compaction",
    ProductionStep5Description: "The mixture is gently compacted inside the frame, removing air pockets and guaranteeing consistent panel density.",
    ProductionStep6Title: "Horizontal Drying",
    ProductionStep6Description: "The panels are kept in a horizontal position for seven days to complete the initial drying phase.",
    ProductionStep7Title: "Vertical Curing",
    ProductionStep7Description: "They are then placed vertically for the final curing stage. The entire process takes 21 days.",
    ProductionStep8Title: "Ready for Installation",
    ProductionStep8Description: "After curing, the panel is fully ready for installation. On site, it is lifted by crane and assembled using structural screws, forming durable and long-lasting walls.",

    HarvestingStep1Title: "Harvesting",
    HarvestingStep1Description: "The harvest takes place in February and March, when agricultural machinery is not required for other operations — making the process efficient and convenient.",
    HarvestingStep2Title: "Drying",
    HarvestingStep2Description: "After cutting, the miscanthus is left to dry naturally for a period of time.",
    HarvestingStep3Title: "Packaging", 
    HarvestingStep3Description: "The dried miscanthus is packed either into Big Bags of 400–500 kg or into 25 kg bags, depending on the intended use.",
    HarvestingStep4Title: "Shredding",
    HarvestingStep4Description: "The material is then processed to the optimal particle size for use in the production of construction panels and blocks.",

    ProductionEquipmentTitle: "State-of-the-Art Equipment ",
    ProductionEquipmentDescription: "Our production facility is equipped with fully automated European-grade lines, ensuring consistent quality in every panel. Computerized monitoring of all parameters minimizes human error and guarantees stability.",
    ProductionEquipmentFeature1: "Automated component dispensers",
    ProductionEquipmentFeature2: "Automatic hydraulic presses",
    ProductionEquipmentFeature3: "Climate chambers for curing",
    ProductionEquipmentFeature4: "Robotic packaging lines",

    QualityControlTitle: "Quality Control ",
    QualityControlSubtitle: "A multi-stage inspection system at every step of production.",

    QualityControlStep1Title: "Incoming Control",
    QualityControlStep1Description: "Each batch of raw material is tested — chip size distribution, cement grade, additive activity.",
    QualityControlStep2Title: "Process Control",
    QualityControlStep2Description: "Continuous monitoring of parameters such as moisture, density, and mixing time.",
    QualityControlStep3Title: "Final Control",
    QualityControlStep3Description: "Finished panels are tested for strength, thermal conductivity, humidity, and dimensional accuracy.",

    QualityControlLabTitle: "Testing Laboratory",
    QualityControlLabDescription: "At our in-house laboratory, we conduct regular performance tests, including:",
    QualityControlTest1: "Compressive and flexural strength",
    QualityControlTest2: "Thermal conductivity coefficient",
    QualityControlTest3: "Frost resistance and water absorption",
    QualityControlTest4: "Fire resistance testing",
    QualityControlTest5: "Acoustic insulation performance",

    AdvantagesTitle: "Advantages of Our Production",
    AdvantagesSubtitle: "Technologies that make our panels superior",

    Advantage1Title: "Energy Efficiency",
    Advantage1Description: "Our production process requires 70% less energy than traditional concrete block manufacturing.",
    Advantage2Title: "Zero-Waste Production",
    Advantage2Description: "All trimmings and rejected materials are recycled and reintroduced into the process.",
    Advantage3Title: "Consistent Quality",
    Advantage3Description: "Automation ensures identical properties across every batch of panels.",



    ServicesTitle: "What We Offer",
    ServicesSubtitle: "EmisCO provides a full range of services for sustainable construction — from material production to turnkey building delivery. Our experience allows us to support your project at every stage with precision, reliability, and expertise.",
    CoreServicesTitle: "Core Services",
    CoreServicesSubtitle: "Everything you need for successful, sustainable construction projects.",
    
    Service1Title: "Design Consultation",
    Service1Description: "Collaborate with our expert team to optimize your building design for maximum performance and sustainability using miscanthus blocks and panels.",
    Service1Feature1: "Architectural integration planning",
    Service1Feature2: "Thermal performance optimization",
    Service1Feature3: "Sustainability certification support",

    Service2Title: "Supply & Logistics",
    Service2Description: "Reliable delivery of high-quality miscanthus blocks and panels with flexible scheduling to meet your project timeline and budget.",
    Service2Feature1: "Just-in-time delivery planning",
    Service2Feature2: "Quality assurance testing",
    Service2Feature3: "Inventory management support",

    Service3Title: "Installation",
    Service3Description: "Professional on-site installation of panels and blocks to ensure optimal construction quality and performance.",
    Service3Feature1: "On-site installation services",
    Service3Feature2: "Quality control inspections",
    Service3Feature3: "",

    Service4Title: "Technical Support",
    Service4Description: "Ongoing technical assistance throughout your project’s lifecycle with expert guidance on best practices and troubleshooting.",
    Service4Feature1: "Remote consultation services",
    Service4Feature2: "Performance monitoring and support",
    Service4Feature3: "",

    Service5Title: "Cost Estimation",
    Service5Description: "Comprehensive cost analysis and budgeting assistance to help you make informed decisions about your sustainable construction investment.",
    Service5Feature1: "Detailed project cost breakdowns",
    Service5Feature2: "ROI and payback analysis",
    Service5Feature3: "Financing guidance",

    ProcessTitle: "Our Process",
    ProcessSubtitle: "A streamlined approach to ensure your project’s success — from concept to completion.",
    ProcessStep1Title: "Initial Consultation",
    ProcessStep1Description: "We discuss your project goals, sustainability objectives, and technical requirements to understand your vision.",
    ProcessStep2Title: "Design & Planning",
    ProcessStep2Description: "Our experts work closely with your team to refine the design for maximum performance and environmental impact.",
    ProcessStep3Title: "Supply & Support",
    ProcessStep3Description: "We deliver high-quality blocks on schedule and provide on-site technical assistance during construction.",
    ProcessStep4Title: "Ongoing Partnership",
    ProcessStep4Description: "We maintain a long-term relationship, offering continued performance monitoring and technical support even after project completion.",
    CTATitle: "Ready to Get Started?",
    CTASubtitle: "Contact our team today to discuss your project requirements and discover how EmisCO can help you build more sustainably.",
    CTAButton1: "Get a Free Consultation",
    CTAButton2: "View Our Projects",


     // ProductPage 
    productBadge: "Revolutionary Building Material",
    productTitle: "Miscanthus Block",
    productDescription:
      "A modern bio-composite wall block made from natural miscanthus fibers and a special cement binder. It offers high strength for low-rise construction while being significantly lighter than traditional concrete blocks.",
    productTitle2: "Miscanthus Panel",
    productDescription2:
      "The panels can be installed both vertically and horizontally. Each panel features a triangular joint groove along the perimeter for sealing mortar and two through-holes for mounting.",
      productButton1: "View Specifications",
    productButton2: "Download",

    // ProductAdvantage
    advantageTitle: "Material Advantages",
    advantageSubtitle:
      "Discover what makes our miscanthus blocks the superior choice for sustainable construction.",
    advTitle1: "Vapor Permeability",
    advDescr1:
      "A “breathing” material that regulates indoor humidity — no condensation buildup, ensuring a naturally healthy microclimate.",
    advTitle2: "Fire Resistance",
    advDescr2:
      "Thanks to fiber mineralization and the cement binder, the material is flame-retardant and safer in case of fire than wooden structures.",
    advTitle3: "Eco-Friendliness",
    advDescr3:
      "The blocks are made entirely from natural and mineral components. Growing miscanthus helps restore poor soils and absorbs CO₂, converting it into biomass. Production requires far less energy than brick or aerated concrete, reducing the carbon footprint of construction.",
    advTitle4: "Energy Efficiency & Acoustic Comfort",
    advDescr4:
      "Exceptional thermal insulation helps miscanthus walls retain heat better than conventional concrete. Homes built with these blocks require less heating in winter and less cooling in summer. The porous structure also provides excellent sound insulation, creating a quiet and comfortable living space.",

    // ProductSpecs
    specsTitle: "Technical Specifications and Composition",
    specsSubtitle:
      "Detailed technical data and performance characteristics of our miscanthus building blocks",
    specsTitle1: "Thermal",
    specsTitle2: "Structural",
    specsTitle3: "Ecological",
    specsTitle4: "Composition",

    // ProductUsage
    usageTitle: "Applications",
    usageSubtitle: "Discover where miscanthus blocks can be used.",
    usageTitle1: "Low-Rise Residential Construction",
    usageDescr1:
      "Ideal for houses, cottages, and townhomes up to 2–3 stories.",
    usageTitle2: "Commercial and Agricultural Buildings",
    usageDescr2:
      "Perfect for eco-offices, warehouses, and farm buildings where natural materials and a stable indoor climate matter.",
    usageTitle3: "Renovation and Insulation",
    usageDescr3:
      "Can be used for extensions, additional floors, or as an insulating layer in retrofitting projects.",

    SpecificationsTitle: "Technical Specifications of Panels",
SpecificationsSubtitle: "Comparison of Hemp Blocks, Diffutehrm, M-ISOI and Emisco 101-0",
TabThermal: "Thermal Values",
TabStructural: "Mechanical Values",
TabEnvironmental: "Building Physics",
TabCertifications: "Tests",
Property: "Property",
Material1: "Hanfsteine",
Material2: "Diffutehrm",
Material3: "M-ISOI",
Material4: "Emisco 101-0",
ThermalTitle: "Thermal Properties",
Density: "Bulk Density (kg/m³)",
DensityValue1: "300",
DensityValue2: "190",
DensityValue3: "115,5",
DensityValue4: "400",
ThermalConductivity: "Thermal Conductivity λ (W/mK)",
ConductivityValue1: "0.070",
ConductivityValue2: "0.043",
ConductivityValue3: "0.051",
ConductivityValue4: "0.085",
HeatCapacity: "Specific Heat Capacity (J/kgK)",
CapacityValue1: "2100",
CapacityValue2: "1244",
CapacityValue3: "1087",
CapacityValue4: "–",
MuValue: "μ-Value",
MuValue1: "5",
MuValue2: "1,7",
MuValue3: "3,67",
MuValue4: "–",
StructuralTitle: "Mechanical Properties",
CompressionStrength: "Compressive Stress (10% compression, kPa)",
CompressionValue1: "70",
CompressionValue2: "80",
CompressionValue3: "121",
CompressionValue4: "536",
TensileStrength: "Tensile Strength ⟂ (kPa)",
TensileValue1: "7,5",
TensileValue2: "10",
TensileValue3: "6,7",
TensileValue4: "29,3",
EnvironmentalTitle: "Building Physics Assessment",
ThermalProtection: "Thermal Protection",
MoistureProtection: "Moisture Protection",
HeatProtection: "Heat Protection",
RatingVeryGood: "Very Good",
RatingPoor: "Poor",
CertificationsTitle: "Test Reports & Classification",
FireBehavior: "Fire Behavior (EN 13501-1)",
FireClass1: "Class B-s1",
FireClass2: "Class E",
FireClass3: "Class e",
FireClass4: "Class B-s1",
TestingInstitutes: "Testing Institutes",
Institutes1: "EMPA, VKFZIP",
Institutes2: "TüV",
Institutes3: "M-Isol",
Institutes4: "EMPA, VKFZIP",


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
      "Interested in our material? We’ll be happy to answer your questions and prepare a tailored offer.",
    productCtaButton1: "Get an offer",
    productCtaButton2: "View portfolio",


    // PortfolioPage
portfolioTitle: "Our Portfolio",
portfolioSubtitle: "We take pride in every project built with our materials. This section showcases examples of homes and buildings constructed using EmisCO miscanthus blocks.",
portfolioStat1: "Projects Completed",
portfolioStat2: "Blocks Delivered",
portfolioStat3: "Average Energy Savings",
viewProject: "View Project",

// PortfolioBest
portfolioBestTitle: "Featured Projects",
portfolioBestSubtitle: "Explore our most innovative and impactful sustainable construction projects",
caseBadge1: "Residential Development",
caseTitle1: "Saint Blaise 1",
caseLocation1: "Amsterdam, Netherlands",
caseDescr1: "A pioneering 120-unit residential development that achieved carbon-negative status using our high-insulation miscanthus blocks. The project demonstrates how sustainable materials can create comfortable, energy-efficient homes.",
caseStat1:"Energy Reduction",
caseStat2: "CO2 Sequestered",
caseButton: "View Case Study",
caseBadge2: "Commercial Building",
caseTitle2: "Gals 1",
caseLocation2: "Berlin, Germany",
caseDescr2: "A 5-story office building showcasing the structural capabilities of our miscanthus blocks. The building achieved LEED Platinum certification and serves as a model for sustainable commercial construction.",
caseStat3:"Platinum Certified",
caseStat4: "Lower Construction Cost",
caseBadge3: "Educational Facility",
caseTitle3: "Gals 2",
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
portfolioCtaSubtitle: "Join our growing portfolio of successful sustainable construction projects. Let’s discuss how EmisCO can help bring your vision to life.",
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
footerInfo: "© 2025 Emisco. All rights reserved. Building a sustainable future.",


  "nameMinError": "The name must contain at least 2 characters",
  "requiredField": "Required field",
  "emailError": "Invalid email",
  "phoneError": "Invalid phone number",
  "submitRequest2": "Submit a request",
  "nameField": "Name",
  "emailField": "Email",
  "phoneField": "Phone",
  "cancelButton": "Cancel",
  "submitting": "Submitting...",
  "sendButton": "Send",
  "submitSuccess": "Thank you! Your request has been sent.",
  "submitError": "Error while sending. Please try again.",
      namePlaceholder: "John Doe",
    emailPlaceholder: "example@mail.com",
    phonePlaceholder: "+44 44 4444 4444"

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
    readMore: "Zum Produkt",

    // Homepage
    heroTitle: "Eine umweltfreundliche Lösung für den modernen Bau",
    heroSubtitle: "Wir produzieren Baublöcke und Paneele aus Miscanthus - einem innovativen Biomaterial, das die Festigkeit von Beton mit der Umweltfreundlichkeit der Natur vereint. Bauen Sie zuverlässig und umweltbewusst - gemeinsam mit uns.",
    featuresTitle: "Warum Miscanthus wählen?",
    featuresSubtitle: "Unsere innovativen Baupaneele und -blöcke nutzen die Kraft des Miscanthusgrases, um nachhaltige und robuste Baustoffe zu schaffen, die die Branchenstandards übertreffen.",

    // Features
    ecoFriendly: "100 % umweltfreundlich",
    ecoDescription: "Natürliche Rohstoffe und ein reduzierter CO₂-Fußabdruck.",
    reliable: "Zuverlässig",
    reliableDescription: "Hohe Festigkeit und lange Lebensdauer der Paneele.",
    innovative: "Innovativ",
    innovativeDescription: "Modernste Biobeton-Technologie auf Miscanthus-Basis.",
    energyEfficient: "Energieeffizient", 
    energyDescription: "Ausgezeichnete Wärmedämmung und Energieeinsparung.",

    // About section
    aboutSectionTitle: "Bauen Sie Ihre Zukunft mit EmisCO ",
    aboutSectionDescription: "EmisCO ist ein Pionier im Bereich des grünen Bauens. Wir verbinden modernste Technologien mit natürlichen Materialien, um Häuser zu schaffen, die umweltfreundlich und zugleich komfortabel sind. Unser Ziel ist es, ökologisches Bauen für jeden Kunden zugänglich und wirtschaftlich attraktiv zu machen.",
    expertTeam: "Expertenteam",
    industrySpecialists: "Fachleute mit Branchenerfahrung.", 
    certifiedQuality: "Zertifizierte Qualität",
    isoStandards: "ISO- und EMPA-Standards",

    // Product section
    whyUsTitle: "Warum wir?",
    whyUsDescription: "Unsere Miscanthus-Baublöcke bieten die perfekte Kombination aus Nachhaltigkeit und Leistung. Jedes Element ist präzise entwickelt, um hervorragende Dämmung, strukturelle Stabilität und ökologische Vorteile zu gewährleisten.",
    fireResistance: "Feuerbeständig",
    fireDescription: "Miscanthus-Paneele sind schwer entflammbar und nicht brennbar. Sie verbreiten kein Feuer und erzeugen nur sehr wenig Rauch.",
    lightWeight: "Leichtgewicht",
    lightDescription: "Das geringe Gewicht der Miscanthus-Wände ermöglicht leichtere Fundamente auf nahezu allen Bodentypen. Ein Kubikmeter Miscanthus-Paneele wiegt viermal weniger als ein Kubikmeter Ziegel – ein enormer Unterschied!",
    breathable: "Atmungsaktiv",
    breathableDescription: "Die hohe Dampfdurchlässigkeit sorgt für ein angenehmes und gesundes Raumklima. Das nächstähnliche Material ist Holz.",

    // CTA
    ctaTitle: "Bereit, Ihre nachhaltige Zukunft zu bauen?",
    ctaDescription: "Kontaktieren Sie uns für eine Beratung und eine Projektkalkulation.",
    submitRequest: "Anfrage senden",
    writeToUs: "Kontakt aufnehmen",

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
    storyDescription1: "Seit über 30 Jahren arbeiten wir mit Miscanthus – einer einzigartigen, erneuerbaren Ressource – und entdecken ständig neue Einsatzmöglichkeiten für dieses außergewöhnliche Material. Auf Basis jahrelanger Forschung haben wir eine Produktionstechnologie entwickelt und umgesetzt, mit der wir Baustoffe herstellen, die in Festigkeit, Energieeffizienz und Langlebigkeit traditionellen Materialien ebenbürtig sind – und sie in vielen Aspekten sogar übertreffen.",
    storyDescription2: "Heute ist EmisCO ein führendes Unternehmen im Bereich des nachhaltigen Bauens in der Schweiz. Wir bieten Architekten, Entwicklern und Bauherren innovative Lösungen, die höchsten Qualitätsstandards entsprechen und gleichzeitig zur Erreichung globaler Nachhaltigkeitsziele beitragen.",
    storyDescription3: "EmisCO Gründerteam",

    // Mission
    missionTitle: "Unsere Mission",
    missionDescription: "Wir integrieren ökologische Bautechnologien in Projekte jeder Größenordnung und unterstützen unsere Partner dabei, moderne, gesunde und energieeffiziente Gebäude zu realisieren. Unser Ziel ist es, Innovationen zu schaffen, die nicht nur den Wohnkomfort erhöhen, sondern auch Kosten optimieren und den langfristigen Wert des Objekts steigern.",
    cardTitle1: "Nachhaltigkeit & Qualitätskontrolle",
    cardDescription1: "Wir verwenden ausschließlich erneuerbare Rohstoffe und minimieren Abfälle in allen Produktionsphasen. Herstellung und Montage entsprechen den Schweizer SIA-Normen und den Anforderungen der EMPA.",
    cardTitle2: "Innovation & Forschung",
    cardDescription2: "In enger Zusammenarbeit mit Forschungsinstituten entwickeln wir unsere Technologie kontinuierlich weiter. Neue Betonrezepturen, optimierte Faserstrukturen und verbesserte Klebesysteme machen unsere Paneele noch robuster und energieeffizienter.",
    cardTitle3: "Partnerschaft & Transparenz",
    cardDescription3: "Wir arbeiten im offenen Dialog und stellen unseren Kunden vollständige technische Unterlagen, individuelle Berechnungen und Begleitung in jeder Projektphase zur Verfügung. Unser Anspruch ist, dass Architekten und Entwickler EmisCO als langfristigen und verlässlichen Partner sehen.",

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
    whySubtitle: "Unser Engagement für Innovation und Nachhaltigkeit wird von Branchenführern anerkannt.",
    awardTitle1: "Eigene Produktion",
    awardDescription1: "Volle Qualitätskontrolle in unserem Werk.",
    awardTitle2: "Baukompetenz",
    awardDescription2: "Erfahrung in der Realisierung von schlüsselfertigen Projekten.",
    awardTitle3: "Öko-Effizienz",
    awardDescription3: "Gebäude aus unseren Blöcken bieten ein angenehmes Raumklima und senken den Energieverbrauch.",
    awardTitle4: "Zertifizierte Qualität",
    awardDescription4: "Unsere Produkte sind nach EMPA-Standards geprüft und zertifiziert.",

    // AboutCta
    aboutCtaTitle: "Möchten Sie mehr über unsere Arbeit erfahren oder eine Zusammenarbeit besprechen?",
    aboutCtaDescription: "Gestalten Sie mit uns eine nachhaltigere Zukunft. Lassen Sie uns besprechen, wie EmisCO Ihr nächstes Projekt unterstützen kann.",
    aboutCtaButton: "Kontakt aufnehmen",



    //ProductionPage
    ProductionTitle: "Wie wir unsere Miscanthus-Leichtbetonpaneele herstellen",
    ProductionSubtitle: "Erfahren Sie mehr über unseren hochmodernen Produktionsprozess, der Miscanthus-Häcksel und Zement in ein innovatives, nachhaltiges Baumaterial verwandelt.",
    ProductionStepsTitle: "Produktionsschritte",
    ProductionStepsSubtitle: "Von der sorgfältigen Rohstoffauswahl bis zur Endkontrolle der fertigen Paneele.",
    ProductionHarvestingTitle: "Phasen der Miscanthus-Ernte",

    ProductionStep1Title: "Vorbereitung des Holzrahmens",
    ProductionStep1Description: "Zu Beginn des Prozesses wird ein Holzrahmen gefertigt. Er dient als tragende Basis und verleiht dem Paneel seine statische Festigkeit und langfristige Stabilität.",
    ProductionStep2Title: "Zerkleinerung des Miscanthu",
    ProductionStep2Description: "Die Miscanthus-Halme werden zu feinen Spänen verarbeitet und auf die optimale Größe gebracht. Diese Struktur gewährleistet eine ideale Verbindung mit dem Zementanteil.",
    ProductionStep3Title: "Herstellung der Mischung",
    ProductionStep3Description: "Die Miscanthus-Späne werden sorgfältig mit Wasser und 10 % Beton vermischt. Das Ergebnis ist eine ökologische Mischung aus 90 % Naturmaterial und nur 10 % Bindemittel.",
    ProductionStep4Title: "Formgebung des Paneels",
    ProductionStep4Description: "Die fertige Mischung wird in den Holzrahmen gegossen, der auf einem Formtisch montiert ist. Jede Stelle wird gleichmäßig ausgefüllt.",
    ProductionStep5Title: "Verdichtung",
    ProductionStep5Description: "Die Masse wird behutsam verdichtet, um Luftblasen zu entfernen und eine gleichmäßige Dichte sicherzustellen.",
    ProductionStep6Title: "Horizontaltrocknung",
    ProductionStep6Description: "Die Paneele bleiben sieben Tage lang in horizontaler Position, um die erste Trocknungsphase abzuschließen.",
    ProductionStep7Title: "Vertikaltrocknung",
    ProductionStep7Description: "Anschließend werden sie vertikal aufgestellt und vollständig ausgehärtet. Der gesamte Zyklus dauert 21 Tage.",
    ProductionStep8Title: "Montagebereit",
    ProductionStep8Description: "Nach Abschluss des Zyklus ist das Paneel vollständig montagebereit. Auf der Baustelle wird es mit einem Kran positioniert und mit Spezialschrauben verbunden – für stabile und langlebige Wände.",

    HarvestingStep1Title: "Ernte",
    HarvestingStep1Description: "Die Ernte erfolgt im Februar und März, wenn landwirtschaftliche Maschinen anderweitig kaum benötigt werden – das macht den Prozess effizient und einfach.",
    HarvestingStep2Title: "Nachtrocknung",
    HarvestingStep2Description: "Nach der Ernte bleibt der Miscanthus einige Zeit auf dem Feld zum natürlichen Trocknen liegen.",
    HarvestingStep3Title: "Verpackung", 
    HarvestingStep3Description: "Der getrocknete Miscanthus wird je nach Verwendungszweck entweder in Big Bags zu 400–500 kg oder in Säcke zu 25 kg verpackt.",
    HarvestingStep4Title: "Zerkleinerung",
    HarvestingStep4Description: "Das Material wird anschließend auf die optimale Korngröße für die Herstellung von Baupaneelen und -blöcken zerkleinert.",

    ProductionEquipmentTitle: "Modernste Ausstattung",
    ProductionEquipmentDescription: "Unsere Produktion ist mit vollautomatischen Anlagen europäischer Qualität ausgestattet und gewährleistet konstante Eigenschaften jeder Paneele. Ein computergestütztes Überwachungssystem aller Parameter minimiert den menschlichen Einfluss und sichert höchste Präzision.",
    ProductionEquipmentFeature1: "Automatische Dosieranlagen",
    ProductionEquipmentFeature2: "Automatisch gesteuerte Hydraulikpressen",
    ProductionEquipmentFeature3: "Klimakammern zur Aushärtung",
    ProductionEquipmentFeature4: "Robotergesteuerte Verpackungslinien",

    QualityControlTitle: "Qualitätskontrolle",
    QualityControlSubtitle: "Ein mehrstufiges Kontrollsystem begleitet jeden Produktionsschritt.",

    QualityControlStep1Title: "Eingangskontrolle",
    QualityControlStep1Description: "Prüfung jeder Rohstoffcharge auf Spangröße, Zementqualität und Additivaktivität.",
    QualityControlStep2Title: "Prozesskontrolle",
    QualityControlStep2Description: "Kontinuierliche Überwachung von Feuchtigkeit, Dichte und Mischzeit.",
    QualityControlStep3Title: "Endkontrolle",
    QualityControlStep3Description: "Tests der fertigen Produkte auf Festigkeit, Wärmeleitfähigkeit, Feuchtigkeit und Maßhaltigkeit.",

    QualityControlLabTitle: "Prüflabor",
    QualityControlLabDescription: "In unserem eigenen Labor führen wir regelmäßig Tests durch:",
    QualityControlTest1: "Druck- und Biegefestigkeit ",
    QualityControlTest2: "Wärmeleitfähigkeit ",
    QualityControlTest3: "Frost- und Wasseraufnahmeprüfung ",
    QualityControlTest4: "Brandverhalten ",
    QualityControlTest5: "Akustische Schalldämmung ",

    AdvantagesTitle: "Vorteile unserer Produktion",
    AdvantagesSubtitle: "Technologien, die unsere Paneele überlegen machen",

    Advantage1Title: "Energieeffizienz",
    Advantage1Description: "Der Produktionsprozess benötigt 70 % weniger Energie als die Herstellung herkömmlicher Betonblöcke.",
    Advantage2Title: "Abfallfreie Produktion",
    Advantage2Description: "Alle Schnittreste und Ausschüsse werden recycelt und in den Produktionskreislauf zurückgeführt.",
    Advantage3Title: "Stabile Qualität",
    Advantage3Description: "Die Automatisierung garantiert gleichbleibende Eigenschaften jeder Produktionscharge.",


    ServicesTitle: "Was wir anbieten",
    ServicesSubtitle: "EmisCO bietet ein umfassendes Leistungspaket für ökologisches Bauen – von der Herstellung der Materialien bis zur schlüsselfertigen Realisierung von Gebäuden. Unsere Erfahrung ermöglicht es uns, Ihr Projekt in jeder Phase professionell zu begleiten.",
    CoreServicesTitle: "Kernleistungen",
    CoreServicesSubtitle: "Alles, was Sie für erfolgreiche, nachhaltige Bauprojekte benötigen.",
    
    Service1Title: "Designberatung",
    Service1Description: "Arbeiten Sie mit unserem Expertenteam zusammen, um Ihr Gebäudedesign in Bezug auf Nachhaltigkeit und Leistung mit Miscanthus-Blöcken und -Paneelen zu optimieren.",
    Service1Feature1: "Planung der architektonischen Integration",
    Service1Feature2: "Optimierung der thermischen Leistung",
    Service1Feature3: "Unterstützung bei Nachhaltigkeitszertifizierungen",

    Service2Title: "Lieferung & Logistik",
    Service2Description: "Zuverlässige Lieferung hochwertiger Miscanthus-Blöcke und -Paneele mit flexibler Terminplanung, abgestimmt auf Zeitrahmen und Budget Ihres Projekts.",
    Service2Feature1: "Just-in-Time-Lieferplanung",
    Service2Feature2: "Qualitätssicherungstests",
    Service2Feature3: "Unterstützung bei Lagerverwaltung",

    Service3Title: "Montage",
    Service3Description: "Installation der Paneele und Blöcke vor Ort für optimale Bauqualität und Leistung.",
    Service3Feature1: "Installation auf der Baustelle",
    Service3Feature2: "Qualitätskontrollen",
    Service3Feature3: "",

    Service4Title: "Technischer Support",
    Service4Description: "Kontinuierliche technische Unterstützung über den gesamten Projektzyklus hinweg – mit Expertenberatung zu Best Practices und Problemlösungen.",
    Service4Feature1: "Remote-Beratungsservices",
    Service4Feature2: "Leistungsüberwachung und technische Begleitung",
    Service4Feature3: "",

    Service5Title: "Kostenschätzung",
    Service5Description: "Detaillierte Kostenanalysen und Budgetplanung, um fundierte Entscheidungen für Ihre nachhaltige Bauinvestition zu treffen.",
    Service5Feature1: "Aufschlüsselung der Projektkosten",
    Service5Feature2: "ROI- und Amortisationsanalyse",
    Service5Feature3: "Beratung zu Finanzierungsoptionen",

    ProcessTitle: "Unser Prozess",
    ProcessSubtitle: "Ein klar strukturierter Ansatz, um den Erfolg Ihres Projekts von Anfang bis Ende sicherzustellen.",
    ProcessStep1Title: "Erstberatung",
    ProcessStep1Description: "Wir besprechen Ihre Projektanforderungen, Nachhaltigkeitsziele und technischen Spezifikationen, um Ihre Vision zu verstehen.",
    ProcessStep2Title: "Planung & Design",
    ProcessStep2Description: "Unsere Experten arbeiten mit Ihrem Team zusammen, um das Design auf maximale Effizienz und Nachhaltigkeit abzustimmen.",
    ProcessStep3Title: "Lieferung & Unterstützung",
    ProcessStep3Description: "Wir liefern hochwertige Blöcke termingerecht und bieten technische Unterstützung während der Bauphase.",
    ProcessStep4Title: "Langfristige Partnerschaft",
    ProcessStep4Description: "Wir begleiten Sie auch nach Abschluss mit Leistungsüberwachung und fortlaufendem technischen Support.",
    CTATitle: "Bereit, Ihr Projekt zu starten?",
    CTASubtitle: "Kontaktieren Sie unser Team, um Ihre Projektanforderungen zu besprechen und zu erfahren, wie EmisCO Sie beim nachhaltigen Bauen unterstützen kann.",
    CTAButton1: "Kostenlose Beratung anfordern",
    CTAButton2: "Unsere Projekte ansehen",



    // ProductPage
    productBadge: "Revolutionäres Baumaterial",
    productTitle: "Miscanthus-Block",
    productDescription:
      "Ein moderner biokompositiver Wandbaustein aus natürlichen Miscanthusfasern und einem speziellen Zementbinder. Er bietet hohe Festigkeit für den Niedrigbau und ist deutlich leichter als herkömmliche Betonblöcke.",
    productTitle2: "Miscanthus-Paneel",
    productDescription2:
      "Die Paneele können sowohl vertikal als auch horizontal montiert werden. Rundum befindet sich eine dreieckige Nut für Fugenmörtel sowie zwei durchgehende Montageöffnungen.",
      productButton1: "Eigenschaften ansehen",
    productButton2: "Herunterladen",

    // ProductAdvantage
    advantageTitle: "Vorteile des Materials",
    advantageSubtitle:
      "Erfahren Sie, warum unsere Miscanthus-Blöcke die beste Wahl für nachhaltiges Bauen sind.",
    advTitle1: "Dampfdurchlässigkeit",
    advDescr1:
      "Ein „atmendes“ Material, das die Luftfeuchtigkeit reguliert – keine Kondensbildung, gesundes Raumklima.",
    advTitle2: "Feuerbeständigkeit",
    advDescr2:
      "Durch die Mineralisierung der Fasern und den Zementbinder ist das Material schwer entflammbar und brandsicherer als Holzkonstruktionen.",
    advTitle3: "Umweltfreundlichkeit",
    advDescr3:
      "Die Blöcke bestehen zu 100 % aus natürlichen und mineralischen Komponenten. Der Anbau von Miscanthus verbessert ausgelaugte Böden und bindet CO₂, das in Biomasse umgewandelt wird. Die Herstellung erfordert deutlich weniger Energie als Ziegel oder Porenbeton und reduziert so den ökologischen Fußabdruck.",
    advTitle4: "Energieeffizienz & Schalldämmung",
    advDescr4:
      "Dank hervorragender Wärmedämmung speichern Wände aus Miscanthus-Blöcken Wärme besser als herkömmlicher Beton. Gebäude benötigen im Winter weniger Heizung und im Sommer weniger Kühlung. Die poröse Struktur bietet zudem eine ausgezeichnete Schallisolierung – für Ruhe und Komfort im Haus.",

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
    usageSubtitle: "Entdecken Sie die Einsatzmöglichkeiten unserer Miscanthus-Blöcke.",
    usageTitle1: "Wohnbau im Niedriggeschoss",
    usageDescr1:
      "Ideal für Einfamilienhäuser, Ferienhäuser und Reihenhäuser bis zu 2–3 Stockwerken.",
    usageTitle2: "Gewerbe- und Landwirtschaftsbauten",
    usageDescr2:
      "Perfekt für Öko-Büros, Lager oder landwirtschaftliche Gebäude mit Fokus auf Umwelt und Raumklima.",
    usageTitle3: "Sanierung & Dämmung",
    usageDescr3:
      "Einsetzbar für Anbauten, Aufstockungen oder als zusätzliche Dämmschicht bei Renovierungen.",

    SpecificationsTitle: "Technische Daten der Paneele",
SpecificationsSubtitle: "Vergleich von Hanfsteine, Diffutehrm, M-ISOI und Emisco 101-0",
TabThermal: "Thermische Werte",
TabStructural: "Mechanische Werte",
TabEnvironmental: "Bauphysik",
TabCertifications: "Prüfungen",
Property: "Eigenschaft",
Material1: "Hanfsteine",
Material2: "Diffutehrm",
Material3: "M-ISOI",
Material4: "Emisco 101-0",
ThermalTitle: "Thermische Eigenschaften",
Density: "Rohdichte (kg/m³)",
DensityValue1: "300",
DensityValue2: "190",
DensityValue3: "115,5",
DensityValue4: "400",
ThermalConductivity: "Wärmeleitfähigkeit λ (W/mK)",
ConductivityValue1: "0.070",
ConductivityValue2: "0.043",
ConductivityValue3: "0.051",
ConductivityValue4: "0.085",
HeatCapacity: "Spez. Wärmekapazität (J/kgK)",
CapacityValue1: "2100",
CapacityValue2: "1244",
CapacityValue3: "1087",
CapacityValue4: "–",
MuValue: "μ-Wert",
MuValue1: "5",
MuValue2: "1,7",
MuValue3: "3,67",
MuValue4: "–",
StructuralTitle: "Mechanische Eigenschaften",
CompressionStrength: "Druckspannung (10% Stauchung, kPa)",
CompressionValue1: "70",
CompressionValue2: "80",
CompressionValue3: "121",
CompressionValue4: "536",
TensileStrength: "Zugfestigkeit ⟂ (kPa)",
TensileValue1: "7,5",
TensileValue2: "10",
TensileValue3: "6,7",
TensileValue4: "29,3",
EnvironmentalTitle: "Bauphysikalische Bewertung",
ThermalProtection: "Wärmeschutz",
MoistureProtection: "Feuchteschutz",
HeatProtection: "Hitzeschutz",
RatingVeryGood: "Sehr gut",
RatingPoor: "mangelhaft",
CertificationsTitle: "Prüfberichte & Klassifizierung",
FireBehavior: "Brandverhalten (EN 13501-1)",
FireClass1: "Klasse B-s1",
FireClass2: "Klasse E",
FireClass3: "Klasse e",
FireClass4: "Klasse B-s1",
TestingInstitutes: "Prüfinstitute",
Institutes1: "EMPA, VKFZIP",
Institutes2: "TüV",
Institutes3: "M-Isol",
Institutes4: "EMPA, VKFZIP",


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
      "Interessiert an unserem Material? Wir beantworten gerne alle Ihre Fragen und erstellen ein individuelles Angebot.",
    productCtaButton1: "Angebot anfordern",
    productCtaButton2: "Portfolio ansehen",


    // PortfolioPage
portfolioTitle: "Unser Portfolio",
portfolioSubtitle: "Wir sind stolz auf jedes Projekt, das mit unseren Materialien realisiert wurde. In diesem Abschnitt finden Sie Beispiele für Häuser und Gebäude, die mit Miscanthus-Blöcken von EmisCO gebaut wurden.",
portfolioStat1: "Abgeschlossene Projekte",
portfolioStat2: "Gelieferte Blöcke",
portfolioStat3: "Durchschnittliche Energieeinsparung",
viewProject: "Projekt ansehen",

// PortfolioBest
portfolioBestTitle: "Ausgewählte Projekte",
portfolioBestSubtitle: "Entdecken Sie unsere innovativsten und bedeutendsten nachhaltigen Bauprojekte",
caseBadge1: "Wohnbau",
caseTitle1: "Saint Blaise 1",
caseLocation1: "Amsterdam, Niederlande",
caseDescr1: "Ein wegweisendes 120-Einheiten-Wohnprojekt, das mit unseren hochisolierenden Miscanthusblöcken einen kohlenstoffnegativen Status erreichte. Das Projekt zeigt, wie nachhaltige Materialien komfortable, energieeffiziente Häuser schaffen können.",
caseStat1:"Energieeinsparung",
caseStat2: "CO2 gebunden",
caseButton: "Fallstudie ansehen",
caseBadge2: "Gewerbegebäude",
caseTitle2: "Gals 1",
caseLocation2: "Berlin, Deutschland",
caseDescr2: "Ein 5-stöckiges Bürogebäude, das die strukturellen Fähigkeiten unserer Miscanthusblöcke zeigt. Das Gebäude erhielt die LEED Platinum-Zertifizierung und dient als Modell für nachhaltiges kommerzielles Bauen.",
caseStat3:"Platin Zertifiziert",
caseStat4: "Geringere Baukosten",
caseBadge3: "Bildungseinrichtung",
caseTitle3: "Gals 2",
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
portfolioCtaTitle: "Starten Sie Ihr nachhaltiges Projekt",
portfolioCtaSubtitle: "Werden Sie Teil unseres wachsenden Portfolios erfolgreicher nachhaltiger Bauprojekte. Lassen Sie uns besprechen, wie EmisCO Ihre Idee zum Leben erwecken kann.",
portfolioCtaButton1: "Jetzt starten",
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
footerInfo: "© 2025 Emisco. Alle Rechte vorbehalten. Wir bauen eine nachhaltige Zukunft.",



"nameMinError": "Der Name muss mindestens 2 Zeichen enthalten",
  "requiredField": "Pflichtfeld",
  "emailError": "Ungültige E-Mail",
  "phoneError": "Ungültige Telefonnummer",
  "submitRequest2": "Anfrage senden",
  "nameField": "Name",
  "emailField": "E-Mail",
  "phoneField": "Telefon",
  "cancelButton": "Abbrechen",
  "submitting": "Wird gesendet...",
  "sendButton": "Senden",
  "submitSuccess": "Danke! Ihre Anfrage wurde gesendet.",
  "submitError": "Fehler beim Senden. Bitte versuchen Sie es erneut.",
      namePlaceholder: "Karl Müller",
    emailPlaceholder: "example@mail.com",
    phonePlaceholder: "+49 999 9999 9999"


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
    readMore: "Voir le produit",

    // Homepage
    heroTitle: "Une solution écologique pour la construction moderne",
    heroSubtitle: "Nous fabriquons des blocs et des panneaux de construction en miscanthus – un biomatériau innovant qui allie la solidité du béton à l’écologie de la nature. Construisez durablement et dans le respect de l’environnement avec nous.",
    featuresTitle: "Pourquoi choisir le miscanthus ?",
    featuresSubtitle: "Nos panneaux et blocs de construction innovants exploitent la puissance du miscanthus pour créer des matériaux durables et résistants, qui dépassent les normes du secteur.",

    // Features
    ecoFriendly: "100 % écologique",
    ecoDescription: "Matières premières naturelles et empreinte carbone réduite.",
    reliable: "Fiable", 
    reliableDescription: "Grande solidité et longévité des panneaux.",
    innovative: "Innovant",
    innovativeDescription: "Technologie de biobéton de dernière génération à base de miscanthus.",
    energyEfficient: "Économe en énergie",
    energyDescription: "Excellente isolation thermique et performance énergétique.",

    // About section
    aboutSectionTitle: "Construisez votre avenir avec Emisco", 
    aboutSectionDescription: "EmisCO est un pionnier de la construction durable. Nous associons les technologies les plus avancées à des matériaux naturels pour créer des habitations respectueuses de l’environnement et agréables à vivre. Notre objectif : rendre la construction écologique accessible et avantageuse pour chaque client.",
    expertTeam: "Équipe d'experts",
    industrySpecialists: "Professionnels du secteur.",
    certifiedQuality: "Qualité certifiée", 
    isoStandards: "Normes ISO et EMPA.",

    // Product section
    whyUsTitle: "Pourquoi nous choisir ?",
    whyUsDescription: "Nos blocs de construction en miscanthus offrent l’équilibre parfait entre durabilité et performance. Chaque élément est conçu avec précision pour garantir une isolation optimale, une excellente stabilité structurelle et des avantages environnementaux concrets.",
    fireResistance: "Résistance au feu",
    fireDescription: "Les panneaux en miscanthus ne brûlent pas – ils sont classés comme matériaux faiblement combustibles et difficilement inflammables. Ils ne propagent pas la flamme et produisent très peu de fumée.",
    lightWeight: "Légèreté", 
    lightDescription: "Le faible poids des murs en miscanthus permet la construction de fondations allégées sur presque tous les types de sols. Un mètre cube de panneaux en miscanthus pèse quatre fois moins qu’un mètre cube de brique – une différence considérable !",
    breathable: "Respirant",
    breathableDescription: "La grande perméabilité à la vapeur assure un climat intérieur sain et naturel. Le matériau équivalent le plus proche est le bois.",

    // CTA
    ctaTitle: "Prêt à construire votre avenir durable ?",
    ctaDescription: "Contactez-nous pour une consultation et une estimation de votre projet.",
    submitRequest: "Envoyer une demande",
    writeToUs: "Nous écrire",

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
    storyDescription1: "Depuis plus de 30 ans, nous travaillons avec le miscanthus – une ressource renouvelable unique – en explorant sans cesse de nouveaux domaines d’application pour cette plante exceptionnelle. Forts de nombreuses années de recherche, nous avons développé et mis en œuvre une technologie de production de blocs de construction qui égale les matériaux traditionnels en solidité, efficacité énergétique et durabilité – et les surpasse souvent.",
    storyDescription2: "Aujourd’hui, EmisCO est un acteur de référence dans le domaine de la construction durable en Suisse. Nous proposons aux architectes, promoteurs et clients des solutions innovantes répondant aux normes de qualité les plus exigeantes tout en contribuant aux objectifs du développement durable.",
    storyDescription3: "Équipe fondatrice EmisCO",

    // Mission
    missionTitle: "Notre mission",
    missionDescription: "Nous intégrons des technologies de construction écologiques dans des projets de toute envergure, en aidant nos partenaires à créer des bâtiments modernes, sains et performants sur le plan énergétique. Nous veillons à ce que nos innovations servent à la fois le confort des occupants, l’optimisation des coûts et la valeur à long terme des bâtiments.",
    cardTitle1: "Écologie & contrôle de la qualité",
    cardDescription1: "Nous utilisons exclusivement des ressources renouvelables et réduisons les déchets à chaque étape du processus. La production et le montage respectent rigoureusement les normes suisses SIA et les exigences de l’EMPA.",
    cardTitle2: "Innovation & recherche",
    cardDescription2: "Nous collaborons en permanence avec des centres de recherche afin d’améliorer nos technologies. De nouvelles formulations de béton, une structure de fibres optimisée et un système d’assemblage perfectionné rendent nos panneaux encore plus solides et efficaces sur le plan énergétique.",
    cardTitle3: "Partenariat & transparence",
    cardDescription3: "Nous privilégions un dialogue ouvert, en fournissant à nos clients toute la documentation technique, des calculs personnalisés et un accompagnement complet à chaque étape. Pour nous, il est essentiel que les architectes et les promoteurs considèrent EmisCO comme un partenaire fiable et durable.",

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
    whySubtitle: "Notre engagement envers l’innovation et le développement durable est reconnu par les acteurs majeurs du secteur.",
    awardTitle1: "Production interne",
    awardDescription1: "Contrôle total de la qualité dans notre propre usine.",
    awardTitle2: "Expertise en construction",
    awardDescription2: "Expérience confirmée dans la réalisation de projets clés en main.",
    awardTitle3: "Éco-efficacité",
    awardDescription3: "Les bâtiments réalisés avec nos blocs offrent un climat intérieur confortable tout en réduisant la consommation d’énergie.",
    awardTitle4: "Qualité certifiée",
    awardDescription4: "Nos produits sont testés et certifiés selon les normes de l’EMPA.",

    // AboutCta
    aboutCtaTitle: "Vous souhaitez en savoir plus ou envisager une collaboration ?",
    aboutCtaDescription: "Participez avec nous à la construction d’un avenir plus durable. Discutons ensemble de la manière dont EmisCO peut contribuer à votre prochain projet.",
    aboutCtaButton: "Nous contacter",


    //ProductionPage
    ProductionTitle: "Comment nous fabriquons nos panneaux en béton de miscanthus ",
    ProductionSubtitle: "Découvrez notre processus de production de haute technologie qui transforme les copeaux de miscanthus et le ciment en un matériau de construction innovant et durable. ",
    ProductionStepsTitle: "Les étapes de fabrication",
    ProductionStepsSubtitle: "De la sélection minutieuse des matières premières au contrôle qualité final.",
    ProductionHarvestingTitle: "Étapes de la récolte du miscanthus", 

    ProductionStep1Title: "Préparation du cadre en bois",
    ProductionStep1Description: "Le processus débute par la fabrication d’un cadre en bois. Il sert de base structurelle et confère au panneau sa résistance statique et sa stabilité dans le temps.",
    ProductionStep2Title: "Broyage du miscanthus",
    ProductionStep2Description: "Les tiges de miscanthus sont transformées en copeaux calibrés à la taille optimale, garantissant une parfaite adhérence avec le liant cimentaire.",
    ProductionStep3Title: "Préparation du mélange",
    ProductionStep3Description: "Les copeaux de miscanthus sont soigneusement mélangés avec de l’eau et 10 % de béton. Le résultat est une composition écologique contenant 90 % de matière naturelle et seulement 10 % de liant.",
    ProductionStep4Title: "Moulage du panneau",
    ProductionStep4Description: "Le mélange est versé dans le cadre en bois posé sur la table de moulage. Chaque espace est rempli avec précision pour assurer une densité homogène.",
    ProductionStep5Title: "Compactage",
    ProductionStep5Description: "Le mélange est délicatement tassé afin d’éliminer les poches d’air et d’obtenir une densité uniforme.",
    ProductionStep6Title: "Séchage horizontal",
    ProductionStep6Description: "Les panneaux restent en position horizontale pendant sept jours pour le séchage initial.",
    ProductionStep7Title: "Séchage vertical",
    ProductionStep7Description: "Ils sont ensuite placés verticalement pour la phase finale de séchage. Le cycle complet dure 21 jours.",
    ProductionStep8Title: "Prêt pour l’installation",
    ProductionStep8Description: "À la fin du processus, le panneau est entièrement prêt à être installé. Sur le chantier, il est levé à l’aide d’une grue et fixé avec des vis spéciales pour former des murs solides et durables.",

    HarvestingStep1Title: "Récolte",
    HarvestingStep1Description: "La récolte a lieu en février et mars, lorsque les machines agricoles ne sont pas mobilisées pour d’autres activités — ce qui rend le processus simple et efficace.",
    HarvestingStep2Title: "Séchage",
    HarvestingStep2Description: "Le miscanthus coupé est laissé à sécher naturellement pendant un certain temps.",
    HarvestingStep3Title: "Conditionnement", 
    HarvestingStep3Description: "Le miscanthus séché est emballé soit dans des Big Bags de 400 à 500 kg, soit dans des sacs de 25 kg, selon son usage final.",
    HarvestingStep4Title: "Broyage",
    HarvestingStep4Description: "Le matériau est ensuite broyé à la granulométrie optimale pour la fabrication de panneaux et blocs de construction.",

    ProductionEquipmentTitle: "Équipements de pointe",
    ProductionEquipmentDescription: "Notre unité de production est équipée de lignes automatisées de qualité européenne, garantissant une constance parfaite des caractéristiques de chaque panneau. Le contrôle informatisé de tous les paramètres réduit au minimum le facteur humain.",
    ProductionEquipmentFeature1: "Doseurs automatiques de composants",
    ProductionEquipmentFeature2: "Presses hydrauliques automatiques",
    ProductionEquipmentFeature3: "Chambres climatiques pour la cure",
    ProductionEquipmentFeature4: "Lignes d’emballage robotisées",

    QualityControlTitle: "Contrôle de la qualité",
    QualityControlSubtitle: "Un système de contrôle à plusieurs niveaux accompagne chaque étape de production.",

    QualityControlStep1Title: "Contrôle des matières premières",
    QualityControlStep1Description: "Vérification de chaque lot : granulométrie des copeaux, type de ciment, activité des additifs.",
    QualityControlStep2Title: "Contrôle en cours de production",
    QualityControlStep2Description: "Suivi continu de l’humidité, de la densité et du temps de mélange.",
    QualityControlStep3Title: "Contrôle final",
    QualityControlStep3Description: "Tests des produits finis : résistance, conductivité thermique, taux d’humidité et géométrie.",

    QualityControlLabTitle: "Laboratoire d’essais",
    QualityControlLabDescription: "Dans notre propre centre de test, nous réalisons régulièrement des essais de performance :",
    QualityControlTest1: "Résistance à la compression et à la flexion",
    QualityControlTest2: "Coefficient de conductivité thermique",
    QualityControlTest3: "Résistance au gel et absorption d’eau",
    QualityControlTest4: "Tests de résistance au feu",
    QualityControlTest5: "Tests acoustiques d’isolation phonique",

    AdvantagesTitle: "Avantages de notre production",
    AdvantagesSubtitle: "Des technologies qui rendent nos panneaux supérieurs",

    Advantage1Title: "Efficacité énergétique",
    Advantage1Description: "Le processus de fabrication nécessite 70 % d’énergie en moins que la production de blocs de béton traditionnels.",
    Advantage2Title: "Production sans déchets",
    Advantage2Description: "Toutes les chutes et rebuts sont recyclés et réintégrés dans le cycle de production.",
    Advantage3Title: "Qualité constante",
    Advantage3Description: "L’automatisation garantit des caractéristiques identiques pour chaque lot de production.",


    ServicesTitle: "Ce que nous proposons",
    ServicesSubtitle: "EmisCO offre un service complet pour la construction écologique — de la production des matériaux à la réalisation clé en main. Notre expertise nous permet d’accompagner votre projet à chaque étape.",
    CoreServicesTitle: "Services principaux",
    CoreServicesSubtitle: "Tout ce dont vous avez besoin pour réussir vos projets de construction durable.",
    
    Service1Title: "Conseil en conception",
    Service1Description: "Collaborez avec notre équipe d’experts pour optimiser la conception de votre bâtiment en termes de durabilité et de performance, grâce à l’utilisation de blocs et panneaux en miscanthus.",
    Service1Feature1: "Intégration architecturale",
    Service1Feature2: "Optimisation de la performance thermique",
    Service1Feature3: "Accompagnement pour la certification durable",

    Service2Title: "Approvisionnement & logistique",
    Service2Description: "Livraison fiable de blocs et panneaux en miscanthus de haute qualité, avec une planification flexible adaptée à votre calendrier et à votre budget.",
    Service2Feature1: "Planification des livraisons Just-in-Time",
    Service2Feature2: "Tests d’assurance qualité",
    Service2Feature3: "Gestion des stocks et du suivi logistique",

    Service3Title: "Installation",
    Service3Description: "Installation sur site des panneaux et blocs pour garantir des performances optimales de la construction.",
    Service3Feature1: "Pose sur chantier",
    Service3Feature2: "Contrôles de qualité",
    Service3Feature3: "",

    Service4Title: "Assistance technique",
    Service4Description: "Soutien technique continu tout au long du cycle de vie du projet, avec des conseils d’experts et un accompagnement personnalisé.",
    Service4Feature1: "Consultations à distance",
    Service4Feature2: "Suivi de la performance du bâtiment",
    Service4Feature3: "",

    Service5Title: "Estimation des coûts",
    Service5Description: "Analyse détaillée des coûts et aide à la planification budgétaire pour une décision d’investissement éclairée dans la construction durable.",
    Service5Feature1: "Détail des coûts du projet",
    Service5Feature2: "Analyse du retour sur investissement",
    Service5Feature3: "Conseils sur les options de financement",

    ProcessTitle: "Notre processus",
    ProcessSubtitle: "Une approche fluide et structurée pour garantir la réussite de votre projet du début à la fin.",
    ProcessStep1Title: "Consultation initiale",
    ProcessStep1Description: "Nous analysons vos besoins, vos objectifs de durabilité et vos spécifications techniques afin de comprendre votre vision",
    ProcessStep2Title: "Conception & planification",
    ProcessStep2Description: "Nos experts travaillent avec votre équipe pour optimiser le design en termes de performance et d’impact environnemental.",
    ProcessStep3Title: "Approvisionnement & assistance",
    ProcessStep3Description: "Nous livrons des blocs de qualité dans les délais prévus et assurons un suivi technique sur site pendant la construction.",
    ProcessStep4Title: "Partenariat à long terme",
    ProcessStep4Description: "Nous restons à vos côtés avec un suivi de performance et un support technique continu.",
    CTATitle: "Prêt à commencer votre projet ?",
    CTASubtitle: "Contactez notre équipe pour discuter de vos besoins et découvrir comment EmisCO peut vous aider à construire durablement.",
    CTAButton1: "Obtenir une consultation gratuite",
    CTAButton2: "Voir nos réalisations",


    // ProductPage
    productBadge: "Matériau de construction révolutionnaire",
    productTitle: "Bloc de miscanthus",
    productDescription:
      "Un bloc mural biocomposite moderne, composé de fibres naturelles de miscanthus et d’un liant cimentaire spécial. Il offre une excellente résistance pour la construction de bâtiments bas tout en étant beaucoup plus léger que le béton traditionnel.",
    productTitle2: "Panneau de miscanthus",
    productDescription2:
      "Les panneaux peuvent être installés verticalement ou horizontalement. Une rainure triangulaire périphérique permet le coulage du mortier de joint, et deux ouvertures traversantes facilitent le montage.",
      productButton1: "Voir les caractéristiques",
    productButton2: "Télécharger",

    // ProductAdvantage
    advantageTitle: "Avantages du matériau",
    advantageSubtitle:
      "Découvrez pourquoi nos blocs en miscanthus sont le choix idéal pour une construction durable.",
    advTitle1: "Perméabilité à la vapeur",
    advDescr1:
      "Un matériau « respirant » qui régule naturellement l’humidité — pas de condensation, et un climat intérieur sain.",
    advTitle2: "Résistance au feu",
    advDescr2:
      "Grâce à la minéralisation des fibres et au liant cimentaire, le matériau est difficilement inflammable et plus sûr que les structures en bois.",
    advTitle3: "Écologique",
    advDescr3:
      "Les blocs sont composés à 100 % d’éléments naturels et minéraux. La culture du miscanthus restaure les sols appauvris et capte le CO₂ en le transformant en biomasse. Sa production consomme bien moins d’énergie que la fabrication de briques ou de béton cellulaire, réduisant ainsi l’empreinte carbone du bâtiment.",
    advTitle4: "Efficacité énergétique & isolation acoustique",
    advDescr4:
      "Les propriétés isolantes du miscanthus permettent aux murs de conserver la chaleur plus efficacement que le béton classique. Les maisons nécessitent moins de chauffage en hiver et moins de climatisation en été. La structure poreuse offre également une excellente isolation phonique — calme et confort garantis.",

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
    usageSubtitle: "Découvrez où les blocs de miscanthus peuvent être utilisés.",
    usageTitle1: "Construction résidentielle basse",
    usageDescr1:
      "Idéaux pour les maisons individuelles, pavillons et petits immeubles jusqu’à 2–3 étages.",
    usageTitle2: "Bâtiments commerciaux et agricoles",
    usageDescr2:
      "Conviennent parfaitement aux bureaux écologiques, entrepôts ou bâtiments agricoles où le climat intérieur et l’écologie sont essentiels.",
    usageTitle3: "Rénovation et isolation",
    usageDescr3:
      "Peuvent être utilisés pour les extensions, surélévations ou comme couche isolante supplémentaire.",


    SpecificationsTitle: "Spécifications techniques des panneaux",
SpecificationsSubtitle: "Comparaison des blocs de chanvre, Diffutehrm, M-ISOI et Emisco 101-0",
TabThermal: "Valeurs thermiques",
TabStructural: "Valeurs mécaniques",
TabEnvironmental: "Physique du bâtiment",
TabCertifications: "Tests",
Property: "Propriété",
Material1: "Hanfsteine",
Material2: "Diffutehrm",
Material3: "M-ISOI",
Material4: "Emisco 101-0",
ThermalTitle: "Propriétés thermiques",
Density: "Masse volumique (kg/m³)",
DensityValue1: "300",
DensityValue2: "190",
DensityValue3: "115,5",
DensityValue4: "400",
ThermalConductivity: "Conductivité thermique λ (W/mK)",
ConductivityValue1: "0.070",
ConductivityValue2: "0.043",
ConductivityValue3: "0.051",
ConductivityValue4: "0.085",
HeatCapacity: "Capacité thermique spécifique (J/kgK)",
CapacityValue1: "2100",
CapacityValue2: "1244",
CapacityValue3: "1087",
CapacityValue4: "–",
MuValue: "μ-Value",
MuValue1: "5",
MuValue2: "1,7",
MuValue3: "3,67",
MuValue4: "–",
StructuralTitle: "Propriétés mécaniques",
CompressionStrength: "Contrainte de compression (10% de compression, kPa)",
CompressionValue1: "70",
CompressionValue2: "80",
CompressionValue3: "121",
CompressionValue4: "536",
TensileStrength: "Résistance à la traction ⟂ (kPa)",
TensileValue1: "7,5",
TensileValue2: "10",
TensileValue3: "6,7",
TensileValue4: "29,3",
EnvironmentalTitle: "Évaluation de la physique du bâtiment",
ThermalProtection: "Protection thermique",
MoistureProtection: "Protection contre l'humidité",
HeatProtection: "Protection contre la chaleur",
RatingVeryGood: "Très bon",
RatingPoor: "Médiocre",
CertificationsTitle: "Rapports de test & classification",
FireBehavior: "Comportement au feu (EN 13501-1)",
FireClass1: "Classe B-s1",
FireClass2: "Classe E",
FireClass3: "Classe e",
FireClass4: "Classe B-s1",
TestingInstitutes: "Instituts de test",
Institutes1: "EMPA, VKFZIP",
Institutes2: "TüV",
Institutes3: "M-Isol",
Institutes4: "EMPA, VKFZIP",


    

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
      "Intéressé par notre matériau ? Nous répondrons à toutes vos questions et préparerons une offre adaptée.",
    productCtaButton1: "Obtenir une offre",
    productCtaButton2: "Voir le portfolio",


    // PortfolioPage
portfolioTitle: "Notre Portfolio",
portfolioSubtitle: "Nous sommes fiers de chaque projet réalisé avec nos matériaux. Cette section présente des exemples de maisons et de bâtiments construits avec les blocs de miscanthus EmisCO.",
portfolioStat1: "Projets réalisés",
portfolioStat2: "Blocs livrés",
portfolioStat3: "d’économie d’énergie moyenne",
viewProject: "Voir le projet",

// PortfolioBest
portfolioBestTitle: "Projets Sélectionnés",
portfolioBestSubtitle: "Découvrez nos projets les plus innovants et significatifs dans le domaine de la construction durable",
caseBadge1: "Développement résidentiel",
caseTitle1: "Saint Blaise 1",
caseLocation1: "Amsterdam, Pays-Bas",
caseDescr1: "Un projet résidentiel pionnier de 120 unités qui a atteint un statut carbone négatif grâce à nos blocs de miscanthus à haute isolation. Le projet montre comment les matériaux durables peuvent créer des maisons confortables et économes en énergie.",
caseStat1:"Réduction énergétique",
caseStat2: "CO2 séquestré",
caseButton: "Voir l'étude de cas",
caseBadge2: "Bâtiment commercial",
caseTitle2: "Gals 1",
caseLocation2: "Berlin, Allemagne",
caseDescr2: "Un bâtiment de bureaux de 5 étages démontrant les capacités structurelles de nos blocs de miscanthus. Le bâtiment a obtenu la certification LEED Platinum et sert de modèle pour la construction commerciale durable.",
caseStat3:"Certification Platinum",
caseStat4: "Coût de construction réduit",
caseBadge3: "Établissement éducatif",
caseTitle3: "Gals 2",
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
portfolioCtaSubtitle: "Rejoignez notre portfolio croissant de projets de construction durable réussis. Discutons ensemble de la manière dont EmisCO peut donner vie à votre idée.",
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
footerInfo: "© 2025 Emisco. Tous droits réservés. Construisons un avenir durable.",



"nameMinError": "Le nom doit contenir au moins 2 caractères",
  "requiredField": "Champ obligatoire",
  "emailError": "Email invalide",
  "phoneError": "Numéro de téléphone invalide",
  "submitRequest2": "Envoyer une demande",
  "nameField": "Nom",
  "emailField": "Email",
  "phoneField": "Téléphone",
  "cancelButton": "Annuler",
  "submitting": "Envoi en cours...",
  "sendButton": "Envoyer",
  "submitSuccess": "Merci ! Votre demande a été envoyée.",
  "submitError": "Erreur lors de l’envoi. Veuillez réessayer.",
    namePlaceholder: "Olivier Dupont",
    emailPlaceholder: "example@mail.com",
    phonePlaceholder: "+33 3 33 33 33 33"

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
    storyDescription1: "Более 30 лет мы работаем с мискантусом – уникальным возобновляемым ресурсом, открывая для него всё новые сферы применения. На основе многолетних исследований мы разработали и внедрили технологию производства строительных блоков, которые по прочности, энергоэффективности и долговечности не уступают традиционным материалам, а во многих параметрах превосходят их.",
    storyDescription2: "Сегодня Emisco — лидер в области зелёного строительства в Швейцарии. Мы предлагаем архитекторам, девелоперам и остальным заказчикам инновационные решения, которые одновременно отвечают строгим стандартам качества и способствуют достижению целей устойчивого развития.",
    storyDescription3: "Сегодня Emisco находится в авангарде революции в области зеленого строительства, предоставляя архитекторам, строителям, и домовладельцы, предлагающие устойчивые решения, которые не ставят под угрозу качество и производительность.",

    // Mission
    missionTitle: "Наша миссия",
    missionDescription: "Мы внедряем экологичные строительные технологии в проекты любой сложности, помогая партнёрам создавать современные, здоровые и энергоэффективные здания. Для нас важно, чтобы инновации работали не только на комфорт жильцов, но и на оптимизацию затрат и долгосрочную ценность объекта.",
    cardTitle1: "Экологичность и контроль качества",
    cardDescription1: "Мы используем только возобновляемые ресурсы и минимизируем отходы на всех этапах. Производство и монтаж строго соответствуют швейцарским стандартам SIA и требованиям EMPA.",
    cardTitle2: "Инновации и R&D",
    cardDescription2: "Мы постоянно сотрудничаем с научными центрами и совершенствуем технологию. Новые составы бетона, оптимизированная структура щепы и усовершенствованная система склейки делают наши панели ещё более прочными и энергоэффективными.",
    cardTitle3: "Партнёрство и прозрачность",
    cardDescription3: "Мы работаем в формате открытого диалога: предоставляем заказчикам полную техническую документацию, индивидуальные расчёты и сопровождение на каждом этапе. Для нас важно, чтобы архитектор и девелопер видели в Emisco надёжного долгосрочного партнёра.",

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
caseTitle1: "Saint Blaise 1",
caseLocation1: "Амстердам, Нидерланды",
caseDescr1: "Пионерский жилой комплекс на 120 квартир с использованием высокоизолирующих блоков из мискантуса, достигший углеродно-отрицательного статуса. Проект демонстрирует, как устойчивые материалы создают комфортные, энергоэффективные дома.",
caseStat1:"Снижение энергии",
caseStat2: "Углерод захвачен",
caseButton: "Посмотреть кейс",
caseBadge2: "Коммерческое здание",
caseTitle2: "Gals 1",
caseLocation2: "Берлин, Германия",
caseDescr2: "5-этажное офисное здание, демонстрирующее конструкционные возможности наших блоков из мискантуса. Здание сертифицировано по стандарту LEED Platinum и служит примером устойчивого коммерческого строительства.",
caseStat3:"Платиновый сертификат",
caseStat4: "Снижение стоимости строительства",
caseBadge3: "Образовательное учреждение",
caseTitle3: "Gals 2",
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



  "allProjects": "Все проекты",
  "viewProject": "Смотреть проект",
  "portfolioStat4": "Довольных клиентов",
  "processTitle": "Наш процесс работы",
  "processSubtitle": "Как мы создаем наши проекты от идеи до реализации",
  "processStep1": "Консультация",
  "processStep1Desc": "Обсуждаем ваши потребности и идеи",
  "processStep2": "Проектирование",
  "processStep2Desc": "Создаем детальный план и 3D-визуализацию",
  "processStep3": "Реализация",
  "processStep3Desc": "Выполняем строительные работы с контролем качества",
  "processStep4": "Сдача проекта",
  "processStep4Desc": "Передаем готовый объект с гарантией",
  "caseTitle4": "Эко-деревня 'Зеленый берег'",
  "caseTitle5": "Бизнес-центр 'Стандарт'",
  "caseTitle6": "Завод 'Эко-тек'",
  "caseDescr1Short": "Современный жилой комплекс с экологическим подходом",
  "caseDescr2Short": "Офисное здание с энергоэффективными технологиями",
  "caseDescr3Short": "Образовательное учреждение нового поколения",
  "caseDescr4Short": "Эко-поселение с автономными коммуникациями",
  "caseDescr5Short": "Современный бизнес-центр класса А",
  "caseDescr6Short": "Промышленное предприятие с нулевым выбросом",

  

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
    footerInfo: "© 2025 Emisco. Все права защищены. Строим устойчивое будущее.",


    //ModalForm
    nameMinError: "Имя должно содержать не менее 2 символов",
    requiredField: "Обязательное поле",
    emailError: "Некорректный email",
    phoneError: "Некорректный номер телефона",
    submitRequest2: "Оставить заявку",
    nameField: "Имя",
    emailField: "Email",
    phoneField: "Телефон",
    cancelButton: "Отмена",
    submitting: "Отправка...",
    sendButton: "Отправить",
    submitSuccess: "Спасибо! Ваша заявка отправлена.",
    submitError: "Ошибка при отправке. Попробуйте ещё раз.",

    namePlaceholder: "Андрей",
    emailPlaceholder: "example@mail.com",
    phonePlaceholder: "+7 (999) 999-99-99"
  }
} as const

export function useTranslation(lang: Language = "ru") {
  return translations[lang]
}