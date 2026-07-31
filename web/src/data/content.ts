export const company = {
  name: 'PetroTwo Group',
  legalName: 'PT. PetroTwo Energy International',
  tagline: 'Empowering Global Business Through Energy, Investment & Strategic Resources',
  vision2040: 'Legacy 2040 Vision',
  email: 'info@petrotwogroup.com',
  orderEmail: 'order@petrotwoenergy.com',
  web: 'www.petrotwogroup.com',
  whatsapp: ['+62 816.60.9090', '+62 816.100.606'],
  address: {
    line1: 'Wisma BNI 46, 50th Floor (Konsorsium Hijau)',
    line2: 'Jl. Karet Pasar Baru Timur III No. Kav. 1',
    line3: 'Karet Tengsin, Tanah Abang, Jakarta Pusat 10220',
    country: 'Indonesia',
  },
  about:
    'PetroTwo Group is an integrated holding company providing end-to-end solutions across the oil & gas supply chain. From sourcing and trading to logistics, storage, and financial structuring, we ensure seamless execution for partners and clients worldwide.',
  values:
    "PetroTwo Energy believes that earning your trust is paramount and that doing the right thing is always the best course of action. Our Core Values, Code of Ethics, and company policies reflect our commitment to conducting business with integrity.",
  mission: [
    'Deliver reliable and compliant international oil trading services',
    'Develop strategic energy infrastructure in Indonesia',
    'Build long-term partnerships with global stakeholders',
    'Support national and regional energy resilience',
  ],
}

export const primaryNav = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Stories', to: '/stories' },
  { label: 'Capital', to: '/capital' },
  { label: 'International', to: '/international' },
  { label: 'GlobalBiz', to: '/globalbiz' },
  { label: 'Contact Us', to: '/contact' },
]

export const secondaryNav = [
  { label: 'Investor Relations', to: '/investor-relations' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Storage', to: '/storage' },
  { label: 'News & Media', to: '/news' },
  { label: 'SubHolding', to: '/subholding' },
  { label: 'Oil & Gas Price', to: '/pricing' },
]

import { pick, type Lang, type LS } from '../i18n'

export type BusinessGroup = 'core' | 'invest' | 'global'

export type Business = {
  label: LS
  to: string
  image: string
  group: BusinessGroup
  description: LS
}

const businessList: Business[] = [
  {
    label: { en: 'Energy', id: 'Energi' },
    to: '/sectors/energy',
    image: '/assets/master/energy-refinery.jpeg',
    group: 'core',
    description: {
      en: 'Crude, refined products, and integrated oil & gas trading across global markets.',
      id: 'Perdagangan minyak mentah, produk olahan, serta migas terintegrasi di pasar global.',
    },
  },
  {
    label: { en: 'Marine', id: 'Maritim' },
    to: '/sectors/marine',
    image: '/assets/master/marine-lng.jpeg',
    group: 'core',
    description: {
      en: 'Tanker fleets, LNG shipping, and ship-to-ship operations with full compliance.',
      id: 'Armada tanker, pengapalan LNG, dan operasi ship-to-ship dengan kepatuhan penuh.',
    },
  },
  {
    label: { en: 'Storage', id: 'Penyimpanan' },
    to: '/sectors/storage',
    image: '/assets/master/storage-tankfarm.jpeg',
    group: 'core',
    description: {
      en: 'Tank farms and terminal infrastructure across strategic trade corridors.',
      id: 'Tank farm dan infrastruktur terminal di koridor perdagangan strategis.',
    },
  },
  {
    label: { en: 'Technology', id: 'Teknologi' },
    to: '/sectors/technology',
    image: '/assets/master/technology-collage.jpeg',
    group: 'core',
    description: {
      en: 'Digital platforms and industrial technology powering the group ecosystem.',
      id: 'Platform digital dan teknologi industri yang menggerakkan ekosistem grup.',
    },
  },
  {
    label: { en: 'Capital', id: 'Permodalan' },
    to: '/sectors/capital',
    image: '/assets/master/capital-city.jpeg',
    group: 'invest',
    description: {
      en: 'Structured finance and strategic investment across energy and infrastructure.',
      id: 'Pembiayaan terstruktur dan investasi strategis di sektor energi dan infrastruktur.',
    },
  },
  {
    label: { en: 'Hotels', id: 'Perhotelan' },
    to: '/sectors/hotels',
    image: '/assets/master/hotels-hq.jpeg',
    group: 'invest',
    description: {
      en: 'Hospitality assets and premium property development in growth cities.',
      id: 'Aset perhotelan dan pengembangan properti premium di kota-kota bertumbuh.',
    },
  },
  {
    label: { en: 'Bullion', id: 'Emas Batangan' },
    to: '/sectors/bullion',
    image: '/assets/master/bullion-gold.jpeg',
    group: 'invest',
    description: {
      en: 'Physical gold trading and asset-backed bullion programs.',
      id: 'Perdagangan emas fisik dan program bullion berbasis aset.',
    },
  },
  {
    label: { en: 'Food', id: 'Pangan' },
    to: '/sectors/food',
    image: '/assets/master/food-aquaculture.jpeg',
    group: 'invest',
    description: {
      en: 'Food security ventures spanning aquaculture, sourcing, and distribution.',
      id: 'Ventura ketahanan pangan yang mencakup akuakultur, pengadaan, dan distribusi.',
    },
  },
  {
    label: { en: 'International', id: 'Internasional' },
    to: '/sectors/international',
    image: '/assets/master/international-aviation.jpeg',
    group: 'global',
    description: {
      en: 'Cross-border trading, aviation, and logistics connecting global partners.',
      id: 'Perdagangan lintas negara, aviasi, dan logistik yang menghubungkan mitra global.',
    },
  },
  {
    label: { en: 'Plantation', id: 'Perkebunan' },
    to: '/sectors/plantation',
    image: '/assets/master/plantation-farm.jpeg',
    group: 'global',
    description: {
      en: 'Sustainable agriculture and integrated smart-farming estates.',
      id: 'Pertanian berkelanjutan dan kawasan smart farming terintegrasi.',
    },
  },
  {
    label: { en: 'Pharmaceutical', id: 'Farmasi' },
    to: '/sectors/pharmaceutical',
    image: '/assets/master/pharma-farmasi.jpeg',
    group: 'global',
    description: {
      en: 'Healthcare and pharmaceutical distribution through the FARMASI network.',
      id: 'Distribusi kesehatan dan farmasi melalui jaringan FARMASI.',
    },
  },
]

/** Each business unit now has its own page, so carry the slug on the record. */
export const businesses = businessList.map((b) => ({
  ...b,
  slug: b.to.split('/').pop() ?? '',
}))

// Backwards-compatible alias used by legacy views.
export const sectors = businesses

/* ------------------------------------------------------------------ */
/* Company profile documents — the three buttons in the homepage About  */
/* section, mirroring petrotwogroup.com. Each opens its own page that   */
/* renders the document inline.                                         */
/* ------------------------------------------------------------------ */

/** The three buttons under the homepage About block, labels verbatim. */
export const companyDocs = [
  { slug: 'petrotwo-group', label: 'PetroTwo Group Company Profile' },
  { slug: 'company-profile-pdf', label: 'PetroTwo Group Company Profile (PDF)' },
  { slug: 'globalbiz', label: 'PetroTwo GlobalBiz' },
]

/** The company profile PDF published on petrotwogroup.com. */
export const companyProfilePdf = '/assets/Company-Profile-2024.pdf'

/* ------------------------------------------------------------------ */
/* Business Divisions page — copy transcribed from                      */
/* petrotwogroup.com/business-divisions/                                */
/* ------------------------------------------------------------------ */

export const businessDivisionsPage = {
  title: 'Business Divisions',
  tagline: 'Synergized divisions shaping the future of global energy and development',
  introEyebrow: 'Introduction to Our Business Ecosystem',
  introHeading:
    'A cohesive structure enabling efficient trading, strong investments, and resilient infrastructure',
  introBody: [
    'PetroTwo Group operates through a fully integrated ecosystem consisting of a global holding entity, investment arm, infrastructure companies, and a dedicated oil trading division.',
    'Each division plays a critical role in supporting our mission to deliver reliable energy, world-class infrastructure, and sustainable long-term value for partners around the world.',
  ],
  listHeading: 'Our Business Divisions',
  list: [
    'PetroTwo International (Holding Company)',
    'PetroTwo Capital (Investment Division)',
    'Infrastructure & Tank Farm Division',
    'Oil Trading Division',
  ],
  entries: [
    {
      eyebrow: 'Holding COmpany',
      name: 'PetroTwo International',
      image: '/assets/svc/invest-detail.jpg',
      body: [
        'PetroTwo International serves as the parent and strategic command center of all PetroTwo Group operations. The holding company oversees governance, corporate finance, compliance, and global strategic partnerships across multiple regions.',
        'With strong leadership and a global network, PetroTwo International ensures that every subsidiary and business unit operates with excellence, transparency, and alignment to long-term corporate objectives.',
      ],
      listLabel: 'Core Functions:',
      items: [
        'Corporate governance & strategic direction',
        'Global partnerships & investor relations',
        'Compliance, risk, and group financial oversight',
        'Expansion into new markets and sectors',
        'Coordination across all business divisions',
      ],
    },
    {
      eyebrow: 'Investment division',
      name: 'PetroTwo Capital',
      image: '/assets/highlight-city.jpeg',
      body: [
        'PetroTwo Capital focuses on high-impact investments in the fields of energy, commodities, infrastructure, food & water security, and strategic development projects.',
        'The division provides capital structuring, project financing, and advisory services to support long-term sustainable ventures.',
        'PetroTwo Capital focuses on high-impact investments in the fields of energy, commodities, infrastructure, food & water security, and strategic development projects. The division provides capital structuring, project financing, and advisory services to support long-term sustainable ventures.',
      ],
      listLabel: 'Core Activities:',
      items: [
        'Project financing & structured investment',
        'Energy & commodity investment strategies',
        'Infrastructure and terminal development funding',
        'Acquisitions & joint venture structuring',
        'Portfolio management for long-term value creation',
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Services page — copy transcribed from petrotwogroup.com/services/    */
/* ------------------------------------------------------------------ */

export const servicesPage = {
  title: 'Services',
  tagline: 'Energy. Infrastructure. Investment. Logistics. Excellence.',
  overviewEyebrow: 'Service Overview',
  overviewHeading: 'Integrated Services for Global Energy & Infrastructure',
  overviewImage: '/assets/svc/overview.jpg',
  overviewBody: [
    'PetroTwo Group provides a comprehensive suite of services designed to support global energy trading, logistics, infrastructure development, and strategic investments. Our divisions work collaboratively to ensure seamless execution from sourcing to delivery, from investment planning to large-scale infrastructure development.',
    'We combine operational capability, financial expertise, and international partnerships to deliver professional, reliable, and high-value services to governments, corporations, refineries, and private sector clients worldwide.',
  ],
  listEyebrow: 'Our Services',
  listHeading: 'Integrated Services for Global Energy & Infrastructure',
  listLead:
    'We combine decades of experience with modern technology to provide services that keep industries moving forward.',
  summary: [
    {
      num: '1',
      image: '/assets/svc/trading-card.jpg',
      title: 'Oil & Gas Supply, Trading & Market Solutions',
      text: 'Through PT Motiolabs Energi Indonesia, PetroTwo Group provides full-spectrum oil and refined petroleum product trading services. Supported by global suppliers, refinery partners, and logistics operators, we ensure transparent, compliant, and timely delivery.',
    },
    {
      num: '2',
      image: '/assets/svc/logistics-card.jpg',
      title: 'Fuel Transport, Logistics & Distribution',
      text: 'PetroTwo Group coordinates logistics and transportation for petroleum products through trusted shipping partners, vessel operators, and port facilities. Our logistics team ensures safe, timely, and compliant movement of cargo across international routes.',
    },
    {
      num: '3',
      image: '/assets/svc/infra-card.jpg',
      title: 'Tank Farm & Infrastructure Development Services',
      text: 'Through its infrastructure subsidiaries, PetroTwo Group develops strategic energy infrastructure including tank farms, terminals, and regional storage hubs. These projects play a vital role in national and international energy security.',
    },
    {
      num: '4',
      image: '/assets/svc/invest-card.jpg',
      title: 'Investment, Financing & Project Structuring Services',
      text: 'PetroTwo Capital leads our investment and funding initiatives across energy, infrastructure, and strategic commodity projects. The division partners with global investors to support multi-million-dollar ventures and provide structured financial solutions.',
    },
  ],
  detail: [
    {
      eyebrow: 'Oil & Gas Supply and Trading Services',
      heading: 'Oil & Gas Supply, Trading & Market Solutions',
      image: '/assets/svc/trading-detail.jpg',
      body: 'Through PT Motiolabs Energi Indonesia, PetroTwo Group provides full-spectrum oil and refined petroleum product trading services. Supported by global suppliers, refinery partners, and logistics operators, we ensure transparent, compliant, and timely delivery.',
      lists: [
        {
          label: 'Our Trading Services Include:',
          items: [
            'Supply of EN590 Diesel, Gasoline (RON 91/92/95), Jet Fuel, Crude Oil',
            'LNG, LPG, LCO, and other petroleum derivatives',
            'CIF and FOB delivery terms (ASWP)',
            'Spot and long-term contract structures',
            'FCO issuance, contract documentation & compliance',
            'Buyer–seller coordination & communication',
            'MT799 / MT760 bank instrument procedures (high-level only)',
          ],
        },
        {
          label: 'Value Delivered:',
          items: [
            'Competitive pricing',
            'Strong documentation process',
            'Reliable shipment coordination',
            'International compliance & anti-fraud standards',
          ],
        },
      ],
    },
    {
      eyebrow: 'Fuel Transport & Logistics Services',
      heading: 'Fuel Transport, Logistics & Distribution',
      image: '/assets/svc/logistics-detail.jpg',
      body: 'PetroTwo Group coordinates logistics and transportation for petroleum products through trusted shipping partners, vessel operators, and port facilities. Our logistics team ensures safe, timely, and compliant movement of cargo across international routes.',
      lists: [
        {
          label: 'Our Logistics Capabilities:',
          items: [
            'Marine fuel transportation (tanker vessels, chartering, coordination)',
            'Port handling, ship-to-ship (STS) operations & documentation',
            'Terminal & storage access through infrastructure division',
            'Cargo scheduling, tracking, and delivery assurance',
            'Integrated supply chain & risk management',
          ],
        },
        {
          label: 'Benefits:',
          items: [
            'Safe & efficient logistics execution',
            'Coordination with terminal operators',
            'Reduced delays & optimized shipping routes',
            'Professional compliance with maritime regulations',
          ],
        },
      ],
    },
    {
      eyebrow: 'Tank Farm & Infrastructure Development Services',
      heading: 'Infrastructure Development & Terminal Engineering',
      image: '/assets/svc/infra-detail.jpg',
      body: 'Through its infrastructure subsidiaries, PetroTwo Group develops strategic energy infrastructure including tank farms, terminals, and regional storage hubs. These projects play a vital role in national and international energy security.',
      lists: [
        {
          label: 'Our Development Services:',
          items: [
            'Feasibility studies & master planning',
            'Engineering, construction & procurement',
            'Land development & regulatory compliance',
            'Terminal layout, tank design & safety systems',
            'Operational planning & long-term management',
          ],
        },
        {
          label: 'Strategic Advantages:',
          items: [
            'Strengthening regional energy distribution',
            'Enabling large-volume storage & logistics',
            'Supporting refinery and trading partners',
            'Enhancing national energy resilience',
          ],
        },
      ],
    },
    {
      eyebrow: 'Investment, Financing & Project Structuring Services',
      heading: 'Investment, Financing & Strategic Project Structuring',
      image: '/assets/master/capital-city.jpeg',
      body: 'PetroTwo Capital leads our investment and funding initiatives across energy, infrastructure, and strategic commodity projects. The division partners with global investors to support multi-million-dollar ventures and provide structured financial solutions.',
      lists: [
        {
          label: 'Investment Services:',
          items: [
            'Project financing (equity & debt structures)',
            'Joint venture creation & strategic partnerships',
            'Commodity-backed transaction structuring',
            'Acquisition support & portfolio management',
            'Energy and resource sector investment strategies',
          ],
        },
        {
          label: 'Who We Serve:',
          items: [
            'Institutional investors',
            'Private equity groups',
            'Refineries & producers',
            'Government and private sector clients',
          ],
        },
        {
          label: 'Value Proposition:',
          items: [
            'Strong financial modeling & risk management',
            'Access to international capital networks',
            'Sustainable long-term growth strategies',
            'Partnerships that create measurable impact',
          ],
        },
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* About page — copy transcribed from petrotwogroup.com/about/          */
/* ------------------------------------------------------------------ */

export const aboutPage = {
  title: 'About',
  tagline:
    'PetroTwoGroup delivering reliable energy solutions and long-term strategic value worldwide',
  introEyebrow: 'About',
  introHeading: 'Advancing Global Energy and Infrastructure Through Integrity and Partnership',
  introBody: [
    'PetroTwo Group is a global corporate entity operating across energy trading, fuel transportation, infrastructure development, and strategic investments. Built on strong governance, international partnerships, and reliable operational capability, we serve clients across Asia, the Middle East, Europe, and global markets with professionalism and integrity.',
    'Our mission is to provide comprehensive and reliable solutions that support global energy supply, sustainable infrastructure, and long-term value creation for our partners.',
  ],
  introCta: 'Contact Us',
  visionLabel: 'Vision',
  vision:
    'To become a trusted global partner that delivers sustainable energy, strategic resources, and world-class infrastructure solutions for the future economy.',
  missionLabel: 'Mission',
  missionHeading: 'Deliver reliable, transparent energy solutions',
  missionLead:
    'Our mission is to deliver reliable, transparent energy solutions and create long-term value through strong governance, integrated supply chains, and strategic investments.',
  missionPillars: [
    {
      title: 'Logistics Solutions',
      text: 'To provide reliable, transparent energy trading and logistics solutions that support our partners and strengthen global supply continuity.',
      image: '/assets/mission/logistics.jpg',
    },
    {
      title: 'Global Partners Support',
      text: 'To support global partners through integrated supply chain and infrastructure development.',
      image: '/assets/mission/partners.jpg',
    },
    {
      title: 'Strategic Investments',
      text: 'To create lasting value through strategic investments in high-impact sectors that drive growth, innovation, and long-term sustainability.',
      image: '/assets/mission/investments.jpg',
    },
    {
      title: 'International Compliance Standards',
      text: 'To uphold strong governance, transparency, and international compliance to ensure responsible and trusted operations.',
      image: '/assets/mission/compliance.jpg',
    },
  ],
  valuesLabel: 'Core Values',
  valuesLead:
    'Our core values define how we operate, make decisions, and build trust with partners around the world.',
  valuesLead2:
    'We combine decades of expertise with innovation, safety, and precision to deliver results that last.',
  values: [
    {
      title: 'Integrity',
      text: '30+ years in industrial engineering with hundreds of successful projects.',
    },
    {
      title: 'Excellence',
      text: 'Strict adherence to international standards and safety-first culture.',
    },
    {
      title: 'Reliability',
      text: 'On-time, on-budget delivery backed by strong client relationships.',
    },
    { title: 'Innovation', text: 'Modern technologies and smarter processes that improve results.' },
    {
      title: 'Collaboration',
      text: 'Modern technologies and smarter processes that improve results.',
    },
  ],
  entitiesHeading: 'Corporate Structures & Business Entities',
  entities: [
    {
      num: '1',
      title: 'PetroTwo GlobalBiz',
      text: 'Handles global oil & gas trading, fuel transport coordination, and logistics operations.',
    },
    {
      num: '2',
      title: 'PetroTwo Capital',
      text: 'Focuses on investment strategies across energy, commodities, infrastructure, and high-value projects.',
    },
    {
      num: '3',
      title: 'Infrastructure & Terminal Development Unit',
      text: 'Develops and manages strategic energy facilities such as tank farms, terminals, and storage systems.',
    },
    {
      num: '4',
      title: 'Digital & Settlement Services',
      text: 'Provides digital support, contract settlement, and administrative systems for corporate transactions.',
    },
  ],
  expertiseEyebrow: 'Our Expertise & Capabilities',
  expertiseHeading: 'What Sets Us Apart',
  expertiseLead:
    'We combine industry expertise, strong governance, and trusted global networks to ensure consistent results for our partners.',
  expertise: [
    {
      num: '1',
      title: 'Global Supply Network',
      text: 'Access to refineries, producers, and suppliers across multiple continents.',
    },
    {
      num: '2',
      title: 'End-to-End Energy Trading Services',
      text: 'From compliance, documentation, and logistics to settlement and delivery.',
    },
    {
      num: '3',
      title: 'Experienced Operations Team',
      text: 'Skilled professionals handling major international trading and shipping activities.',
    },
    {
      num: '4',
      title: 'Infrastructure Development Expertise',
      text: 'Capabilities in planning, managing, and delivering terminal projects.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Terminal projects shown on petrotwogroup.com/petrotwo-group          */
/* ------------------------------------------------------------------ */

export const terminalProjects: { name: string; cta?: string; image: string; sheets: string[] }[] = [
  {
    name: 'PetroTwo Aceh Terminal Project',
    cta: 'More About PetroTwo Aceh Terminal Project',
    image: '/assets/profile/terminals/PT2-Energi-Aceh-Terminal-Project-Brief-x.jpg',
    sheets: [
      '/assets/profile/terminals/PT2-Energi-Aceh-Terminal-Project-Brief-x.jpg',
      '/assets/profile/terminals/PT2-Energi-Aceh-Terminal-Project-Brief-Sept-2025_page-0002-x.jpg',
      '/assets/profile/terminals/PT2-Energi-Aceh-Terminal-Conclusion.jpg',
    ],
  },
  {
    name: 'PetroTwo Pidie Terminal Energi',
    image: '/assets/profile/terminals/Petrotwo-Pidie-Terminal-Energi.jpg',
    sheets: [
      '/assets/profile/terminals/Petrotwo-Pidie-Terminal-Energi.jpg',
      '/assets/profile/terminals/BPT-Terminal-Concept-x.jpg',
      '/assets/profile/terminals/Pidie-Terminal-Energi-Loc-x.jpg',
      '/assets/profile/terminals/Pidie-Terminal-Energi-LocB-x.jpg',
    ],
  },
  {
    name: 'PetroTwo Karimun Terminal',
    image: '/assets/profile/terminals/PetroTwo-Karimun-Terminal.jpg',
    sheets: [
      '/assets/profile/terminals/PetroTwo-Karimun-Terminal.jpg',
      '/assets/profile/terminals/Land-Allocation-Karimun-Terminal.jpg',
      '/assets/profile/terminals/Land-Proposal-ALL-2_page-0005-scaled.jpg',
      '/assets/profile/terminals/Land-Proposal-ALL-2_page-0006-scaled.jpg',
      '/assets/profile/terminals/Land-Proposal-ALL-2_page-0007-scaled.jpg',
      '/assets/profile/terminals/Land-Proposal-ALL-2_page-0011-scaled.jpg',
      '/assets/profile/terminals/Land-Proposal-ALL-2_page-0012-scaled.jpg',
      '/assets/profile/terminals/Land-Proposal-ALL-2_page-0013-scaled.jpg',
      '/assets/profile/terminals/Land-Proposal-ALL-2_page-0014-scaled.jpg',
      '/assets/profile/terminals/Land-Proposal-ALL-2_page-0015-scaled.jpg',
    ],
  },
  {
    name: 'PetroTwo Karawang Oil Terminal',
    cta: 'More About PetroTwo Karawang Terminal Project',
    image: '/assets/cta-tanks.jpeg',
    sheets: [],
  },
]

/** Heading above the terminal gallery on /petrotwo-group. */
export const tankFarmStrategy = 'Indonesia Tank Farm Strategy'

/* The reference page publishes the profile deck as page images either side of
   the terminal section. The deck is rendered locally from the source PDF. */
export const profilePages = Array.from(
  { length: 38 },
  (_, i) => `/assets/profile/page-${String(i + 1).padStart(2, '0')}.jpg`,
)
export const profilePagesBefore = profilePages.slice(0, 7)
export const profilePagesAfter = profilePages.slice(7)

/* ------------------------------------------------------------------ */
/* Tax — handled by the group's tax consultancy                         */
/* ------------------------------------------------------------------ */

export const taxFirm = {
  name: 'PT Aswangga Konsultan Semesta',
  logo: '/assets/aswangga/logo-aswangga.png',
  tagline: 'Excellence in Financial Integrity and Business Growth',
  address: 'AD Premier Lantai 17 Suite 04 B, Jl. TB. Simatupang No. 5, Jakarta',
  phoneDisplay: '+62 858-8247-9895',
  phoneDial: '6285882479895',
}

/* ------------------------------------------------------------------ */
/* WhatsApp contacts                                                    */
/*   Order Oil : +62 816.60.9090                                        */
/*   Info Oil  : +62 816.100.606                                        */
/* Every contact CTA opens WhatsApp directly with a short prefilled     */
/* message matching its purpose.                                        */
/* ------------------------------------------------------------------ */

export type WaContact = {
  label: LS
  display: string
  number: string
  message: LS
}

export const waContacts: Record<'order' | 'info', WaContact> = {
  order: {
    label: { en: 'Order Oil', id: 'Order Oil' },
    display: '+62 816.60.9090',
    number: '62816609090',
    message: {
      en: 'Hello PetroTwo Group, I would like to place an oil order. Please assist me with the details.',
      id: 'Halo PetroTwo Group, saya ingin melakukan order oil. Mohon dibantu untuk informasi selengkapnya.',
    },
  },
  info: {
    label: { en: 'Info Oil', id: 'Info Oil' },
    display: '+62 816.100.606',
    number: '62816100606',
    message: {
      en: 'Hello PetroTwo Group, I would like to ask for information about your oil products and services.',
      id: 'Halo PetroTwo Group, saya ingin bertanya mengenai informasi produk dan layanan oil Anda.',
    },
  },
}

export const waHref = (contact: WaContact, lang: Lang = 'id') =>
  `https://wa.me/${contact.number}?text=${encodeURIComponent(pick(contact.message, lang))}`

/** General "Contact Us" target → Info Oil desk. */
export const waLink = waHref(waContacts.info)
/** Direct order target → Order Oil desk. */
export const waOrderLink = waHref(waContacts.order)

/* ------------------------------------------------------------------ */
/* Sector detail content — taken verbatim from the 2026 Company        */
/* Profile PDF (EN); Indonesian is a faithful translation.             */
/* ------------------------------------------------------------------ */

export type SectorDetail = {
  heading: LS
  intro?: LS
  groups: { title: LS; points: LS[] }[]
  note?: LS
}

export const sectorDetails: Record<string, SectorDetail> = {
  energy: {
    heading: { en: 'Core Business: International Oil Trading', id: 'Bisnis Inti: Perdagangan Minyak Internasional' },
    intro: {
      en: 'Petro Two Energy operates as an international physical oil trader, focusing on reliable, contract-based supply supported by robust logistics and storage integration.',
      id: 'Petro Two Energy beroperasi sebagai pedagang minyak fisik internasional, berfokus pada pasokan berbasis kontrak yang andal, didukung integrasi logistik dan penyimpanan yang kokoh.',
    },
    groups: [
      {
        title: { en: 'Key Trading Products', id: 'Produk Perdagangan Utama' },
        points: [
          { en: 'Light Crude Oil', id: 'Light Crude Oil (Minyak Mentah Ringan)' },
          { en: 'Gasoline (RON 90)', id: 'Gasoline (RON 90)' },
          {
            en: 'Refined Petroleum Products (EN 590 10 ppm, Jet A1)',
            id: 'Produk Petroleum Olahan (EN 590 10 ppm, Jet A1)',
          },
        ],
      },
      {
        title: { en: 'Trading Model', id: 'Model Perdagangan' },
        points: [
          { en: 'Physical, delivery-based transactions', id: 'Transaksi fisik berbasis pengiriman' },
          { en: 'Long term and spot supply contracts', id: 'Kontrak pasokan jangka panjang dan spot' },
          {
            en: 'Integrated with storage, STS and maritime logistics',
            id: 'Terintegrasi dengan penyimpanan, STS, dan logistik maritim',
          },
          {
            en: 'Risk managed and compliance driven execution',
            id: 'Eksekusi dengan manajemen risiko dan berbasis kepatuhan',
          },
        ],
      },
    ],
  },
  marine: {
    heading: { en: 'Ship To Ship (STS) Operations', id: 'Operasi Ship To Ship (STS)' },
    groups: [
      {
        title: { en: 'Key Highlights', id: 'Sorotan Utama' },
        points: [
          {
            en: 'Since early 2026, Petro Two has provided Ship-to-Ship (STS) facilities in Indonesia to support international oil trading activities',
            id: 'Sejak awal 2026, Petro Two menyediakan fasilitas Ship-to-Ship (STS) di Indonesia untuk mendukung aktivitas perdagangan minyak internasional',
          },
          {
            en: 'End-to-end STS coordination, including vessel scheduling, cargo transfer, and operational supervision',
            id: 'Koordinasi STS menyeluruh, mencakup penjadwalan kapal, transfer kargo, dan pengawasan operasional',
          },
          {
            en: 'Operations conducted under strict safety, maritime, and regulatory compliance standards',
            id: 'Operasi dijalankan di bawah standar keselamatan, maritim, dan kepatuhan regulasi yang ketat',
          },
        ],
      },
      {
        title: { en: 'STS Operation Coordinates', id: 'Koordinat Operasi STS' },
        points: [
          { en: '1°11′39.00″ N / 103°57′39.00″ E', id: '1°11′39.00″ N / 103°57′39.00″ E' },
          { en: '1°10′24.55″ N / 103°57′39.00″ E', id: '1°10′24.55″ N / 103°57′39.00″ E' },
          { en: '1°10′24.55″ N / 103°58′32.00″ E', id: '1°10′24.55″ N / 103°58′32.00″ E' },
          { en: '1°11′45.30″ N / 103°58′32.00″ E', id: '1°11′45.30″ N / 103°58′32.00″ E' },
        ],
      },
    ],
  },
  storage: {
    heading: { en: 'Tank Farm Development', id: 'Pengembangan Tank Farm' },
    intro: {
      en: 'Petro Two Energy is developing a multi-location tank farm infrastructure strategy across Indonesia, including a strategic development in the Arun area, to support international oil trading, storage optimization, and regional energy security. This integrated tank farm network is designed to strengthen Petro Two’s physical trading capabilities while positioning Indonesia as a regional energy storage and logistics hub.',
      id: 'Petro Two Energy sedang mengembangkan strategi infrastruktur tank farm multi-lokasi di seluruh Indonesia, termasuk pengembangan strategis di kawasan Arun, untuk mendukung perdagangan minyak internasional, optimalisasi penyimpanan, dan ketahanan energi regional. Jaringan tank farm terintegrasi ini dirancang untuk memperkuat kapabilitas perdagangan fisik Petro Two sekaligus memosisikan Indonesia sebagai hub penyimpanan energi dan logistik regional.',
    },
    groups: [
      {
        title: { en: 'Location Plan', id: 'Rencana Lokasi' },
        points: [
          { en: 'Pidie, Aceh', id: 'Pidie, Aceh' },
          { en: 'Weh Island, Aceh', id: 'Pulau Weh, Aceh' },
          { en: 'Arun, Aceh', id: 'Arun, Aceh' },
          { en: 'Karimun, Kepulauan Riau', id: 'Karimun, Kepulauan Riau' },
          { en: 'Karawang, West Java', id: 'Karawang, Jawa Barat' },
        ],
      },
      {
        title: { en: 'Strategic Objectives', id: 'Sasaran Strategis' },
        points: [
          {
            en: 'Support International Oil Trading and Storage Operations',
            id: 'Mendukung Perdagangan Minyak Internasional dan Operasi Penyimpanan',
          },
          {
            en: 'Enhance logistics efficiency and supply reliability',
            id: 'Meningkatkan efisiensi logistik dan keandalan pasokan',
          },
          { en: 'Enable STS and FSU integration', id: 'Memungkinkan integrasi STS dan FSU' },
          {
            en: 'Deliver scalable, long term, asset backed infrastructure',
            id: 'Menghadirkan infrastruktur berbasis aset yang skalabel dan berjangka panjang',
          },
        ],
      },
    ],
  },
  capital: {
    heading: {
      en: 'Non Oil Strategic Investment (PPP)',
      id: 'Investasi Strategis Non-Migas (PPP)',
    },
    intro: {
      en: 'Beyond its core oil trading and energy infrastructure business, Petro Two Energy selectively invests in non-oil strategic sectors through Public-Private Partnership (PPP) frameworks. These investments are designed to support national development priorities while maintaining strong alignment with Petro Two’s long-term asset strategy and governance standards.',
      id: 'Di luar bisnis inti perdagangan minyak dan infrastruktur energi, Petro Two Energy berinvestasi secara selektif di sektor strategis non-migas melalui kerangka Kerja Sama Pemerintah dan Badan Usaha (PPP). Investasi ini dirancang untuk mendukung prioritas pembangunan nasional dengan tetap selaras kuat pada strategi aset jangka panjang dan standar tata kelola Petro Two.',
    },
    groups: [
      {
        title: { en: 'Investment Principles', id: 'Prinsip Investasi' },
        points: [
          {
            en: 'Infrastructure led projects with tangible, long term assets',
            id: 'Proyek berbasis infrastruktur dengan aset nyata jangka panjang',
          },
          {
            en: 'Government aligned programs supporting national and regional development',
            id: 'Program selaras pemerintah yang mendukung pembangunan nasional dan regional',
          },
          {
            en: 'Focus on long term economic impact and sustainability',
            id: 'Fokus pada dampak ekonomi jangka panjang dan keberlanjutan',
          },
          {
            en: 'Risk sharing structures with transparent and accountable governance',
            id: 'Struktur berbagi risiko dengan tata kelola yang transparan dan akuntabel',
          },
        ],
      },
    ],
    note: {
      en: 'All investments remain aligned with Petro Two’s energy-led infrastructure strategy.',
      id: 'Seluruh investasi tetap selaras dengan strategi infrastruktur berbasis energi Petro Two.',
    },
  },
  international: {
    heading: {
      en: 'Global Network & Strategic Partnerships',
      id: 'Jaringan Global & Kemitraan Strategis',
    },
    intro: {
      en: 'Petro Two Energy is a globally connected energy company, originating from Thailand, operating and collaborating with partners across multiple regions to support international oil trading and strategic energy investments. With extensive cross-border experience, Petro Two leverages its global network to connect energy sourcing regions with key demand markets, using Indonesia as a strategic operational and logistics hub.',
      id: 'Petro Two Energy adalah perusahaan energi yang terhubung secara global, berasal dari Thailand, beroperasi dan berkolaborasi dengan mitra di berbagai kawasan untuk mendukung perdagangan minyak internasional dan investasi energi strategis. Dengan pengalaman lintas negara yang luas, Petro Two memanfaatkan jaringan globalnya untuk menghubungkan kawasan sumber energi dengan pasar permintaan utama, menjadikan Indonesia sebagai hub operasional dan logistik strategis.',
    },
    groups: [
      {
        title: { en: 'Key Regions of Experience', id: 'Kawasan Pengalaman Utama' },
        points: [
          {
            en: 'The Middle East serves as our primary hub for crude oil sourcing and international energy trading networks.',
            id: 'Timur Tengah menjadi hub utama kami untuk pengadaan minyak mentah dan jaringan perdagangan energi internasional.',
          },
          {
            en: 'Africa strengthens our supply origination capabilities and cross-border petroleum trading operations.',
            id: 'Afrika memperkuat kapabilitas originasi pasokan dan operasi perdagangan petroleum lintas negara kami.',
          },
          {
            en: 'Southeast Asia integrates our oil trading, maritime logistics, and energy infrastructure activities.',
            id: 'Asia Tenggara mengintegrasikan aktivitas perdagangan minyak, logistik maritim, dan infrastruktur energi kami.',
          },
          {
            en: 'The Caspian Region reflects our long-standing track record and credibility in the global energy industry.',
            id: 'Kawasan Kaspia mencerminkan rekam jejak panjang dan kredibilitas kami di industri energi global.',
          },
        ],
      },
      {
        title: { en: 'Group Companies & Partnerships', id: 'Perusahaan Grup & Kemitraan' },
        points: [
          {
            en: 'We maintain active partnerships with oil producers, commodity traders, infrastructure operators, and government-linked entities.',
            id: 'Kami menjalin kemitraan aktif dengan produsen minyak, pedagang komoditas, operator infrastruktur, dan entitas terkait pemerintah.',
          },
          {
            en: 'PT Pidie Terminal Energi leads our tank farm development and energy storage operations in Indonesia.',
            id: 'PT Pidie Terminal Energi memimpin pengembangan tank farm dan operasi penyimpanan energi kami di Indonesia.',
          },
          {
            en: 'PT Motiolabs Energi Indonesia operates the group’s energy technology and trading administration platform.',
            id: 'PT Motiolabs Energi Indonesia mengoperasikan platform teknologi energi dan administrasi perdagangan grup.',
          },
        ],
      },
    ],
  },
  technology: {
    heading: {
      en: 'Integrated Delivery & Trading Technology',
      id: 'Teknologi Perdagangan & Pengiriman Terintegrasi',
    },
    intro: {
      en: 'PetroTwo uses an integrated delivery system across its projects to create a better environment for employees and partners, and to deliver better to customers. The group’s digital backbone is operated through PT Motiolabs Energi Indonesia.',
      id: 'PetroTwo menggunakan sistem pengiriman terintegrasi pada seluruh proyeknya untuk menciptakan lingkungan kerja yang lebih baik bagi karyawan dan mitra, serta memberikan layanan terbaik kepada pelanggan. Tulang punggung digital grup dioperasikan melalui PT Motiolabs Energi Indonesia.',
    },
    groups: [
      {
        title: { en: 'Platform Capabilities', id: 'Kapabilitas Platform' },
        points: [
          {
            en: 'Energy trading and administration platform for the group ecosystem',
            id: 'Platform perdagangan energi dan administrasi untuk ekosistem grup',
          },
          {
            en: 'Integrated delivery system with cargo and fleet monitoring',
            id: 'Sistem pengiriman terintegrasi dengan pemantauan kargo dan armada',
          },
          {
            en: 'Modern technology applied across equipment and operations',
            id: 'Teknologi modern yang diterapkan pada seluruh peralatan dan operasi',
          },
        ],
      },
      {
        title: { en: 'Service Standards', id: 'Standar Layanan' },
        points: [
          {
            en: '100% equipment readiness and allocation guarantee',
            id: 'Kesiapan peralatan dan jaminan alokasi 100%',
          },
          {
            en: 'Professional management and services on every engagement',
            id: 'Manajemen dan layanan profesional pada setiap kerja sama',
          },
          {
            en: 'On-time progress with transparent reporting to partners',
            id: 'Progres tepat waktu dengan pelaporan transparan kepada mitra',
          },
        ],
      },
    ],
  },
  hotels: {
    heading: {
      en: 'Hospitality & Premium Property Investment',
      id: 'Investasi Perhotelan & Properti Premium',
    },
    intro: {
      en: 'Through Hospitality Capital, PetroTwo invests selectively in hospitality assets and premium property development in growth cities, complementing the group’s energy-led portfolio with tangible, long-term assets.',
      id: 'Melalui Hospitality Capital, PetroTwo berinvestasi secara selektif pada aset perhotelan dan pengembangan properti premium di kota-kota bertumbuh, melengkapi portofolio berbasis energi grup dengan aset nyata jangka panjang.',
    },
    groups: [
      {
        title: { en: 'Portfolio Focus', id: 'Fokus Portofolio' },
        points: [
          {
            en: 'Hospitality assets in strategic growth cities',
            id: 'Aset perhotelan di kota-kota bertumbuh yang strategis',
          },
          {
            en: 'Premium property development near the group’s operational hubs',
            id: 'Pengembangan properti premium di sekitar hub operasional grup',
          },
          {
            en: 'Business accommodation supporting partner and investor activities',
            id: 'Akomodasi bisnis yang mendukung aktivitas mitra dan investor',
          },
        ],
      },
      {
        title: { en: 'Investment Approach', id: 'Pendekatan Investasi' },
        points: [
          {
            en: 'Asset-backed, long-term value creation aligned with Vision 2040',
            id: 'Penciptaan nilai jangka panjang berbasis aset selaras Visi 2040',
          },
          {
            en: 'Transparent and accountable governance on every project',
            id: 'Tata kelola yang transparan dan akuntabel pada setiap proyek',
          },
        ],
      },
    ],
  },
  bullion: {
    heading: { en: 'Gold & Bullion Trading', id: 'Perdagangan Emas & Bullion' },
    intro: {
      en: 'Gold is one of PetroTwo GlobalBiz’s core investment pillars — Investments / Gold / Energy. The group runs physical gold trading and asset-backed bullion programs, including the Prioritas Gold priority channel.',
      id: 'Emas merupakan salah satu pilar investasi inti PetroTwo GlobalBiz — Investments / Gold / Energy. Grup menjalankan perdagangan emas fisik dan program bullion berbasis aset, termasuk kanal prioritas Prioritas Gold.',
    },
    groups: [
      {
        title: { en: 'Programs', id: 'Program' },
        points: [
          { en: 'Physical gold trading', id: 'Perdagangan emas fisik' },
          { en: 'Asset-backed bullion programs', id: 'Program bullion berbasis aset' },
          {
            en: 'Prioritas Gold — priority gold & bullion channel',
            id: 'Prioritas Gold — kanal emas & bullion prioritas',
          },
        ],
      },
      {
        title: { en: 'Principles', id: 'Prinsip' },
        points: [
          { en: 'Verified sourcing and documentation', id: 'Pengadaan dan dokumentasi terverifikasi' },
          { en: 'Secure storage and logistics', id: 'Penyimpanan dan logistik yang aman' },
          {
            en: 'Compliance-driven, transparent transactions',
            id: 'Transaksi transparan yang berbasis kepatuhan',
          },
        ],
      },
    ],
  },
  food: {
    heading: { en: 'Food & Water Security', id: 'Ketahanan Pangan & Air' },
    intro: {
      en: 'Food & water security is a strategic pillar of PetroTwo GlobalBiz. Through Food Capital, the group develops ventures spanning aquaculture, sourcing, and distribution to support national and regional food resilience.',
      id: 'Ketahanan pangan & air merupakan pilar strategis PetroTwo GlobalBiz. Melalui Food Capital, grup mengembangkan ventura yang mencakup akuakultur, pengadaan, dan distribusi untuk mendukung ketahanan pangan nasional dan regional.',
    },
    groups: [
      {
        title: { en: 'Focus Areas', id: 'Area Fokus' },
        points: [
          { en: 'Aquaculture and fisheries ventures', id: 'Ventura akuakultur dan perikanan' },
          {
            en: 'Food sourcing and cross-border distribution',
            id: 'Pengadaan pangan dan distribusi lintas negara',
          },
          {
            en: 'Water security programs for growing regions',
            id: 'Program ketahanan air untuk kawasan bertumbuh',
          },
        ],
      },
      {
        title: { en: 'Strategic Objectives', id: 'Sasaran Strategis' },
        points: [
          {
            en: 'Support national food security priorities',
            id: 'Mendukung prioritas ketahanan pangan nasional',
          },
          {
            en: 'Government-aligned programs through PPP frameworks',
            id: 'Program selaras pemerintah melalui kerangka PPP',
          },
        ],
      },
    ],
  },
  plantation: {
    heading: { en: 'Integrated Smart Plantation', id: 'Perkebunan Pintar Terintegrasi' },
    intro: {
      en: 'Through Plantation Capital, PetroTwo develops solar-powered, integrated smart-farming estates in Indonesia that combine crops, livestock, and aquaculture in one sustainable ecosystem.',
      id: 'Melalui Plantation Capital, PetroTwo mengembangkan kawasan smart farming terintegrasi bertenaga surya di Indonesia yang memadukan tanaman, peternakan, dan akuakultur dalam satu ekosistem berkelanjutan.',
    },
    groups: [
      {
        title: { en: 'Development Model', id: 'Model Pengembangan' },
        points: [
          {
            en: 'Solar-powered agriculture estates',
            id: 'Kawasan pertanian bertenaga surya',
          },
          {
            en: 'Integrated crops, livestock, and aquaculture cycles',
            id: 'Siklus terintegrasi tanaman, peternakan, dan akuakultur',
          },
          {
            en: 'Modern technology for irrigation, monitoring, and yield',
            id: 'Teknologi modern untuk irigasi, pemantauan, dan hasil panen',
          },
        ],
      },
      {
        title: { en: 'Objectives', id: 'Sasaran' },
        points: [
          {
            en: 'Sustainable, long-term agricultural assets',
            id: 'Aset pertanian berkelanjutan jangka panjang',
          },
          {
            en: 'Contribution to regional food security and rural economies',
            id: 'Kontribusi pada ketahanan pangan regional dan ekonomi pedesaan',
          },
        ],
      },
    ],
  },
  pharmaceutical: {
    heading: {
      en: 'Healthcare & Pharmaceutical Distribution',
      id: 'Distribusi Kesehatan & Farmasi',
    },
    intro: {
      en: 'PetroTwo participates in the healthcare sector through the FARMASI network, focusing on reliable pharmaceutical distribution and partnership-driven growth.',
      id: 'PetroTwo berpartisipasi di sektor kesehatan melalui jaringan FARMASI, berfokus pada distribusi farmasi yang andal dan pertumbuhan berbasis kemitraan.',
    },
    groups: [
      {
        title: { en: 'Network & Distribution', id: 'Jaringan & Distribusi' },
        points: [
          {
            en: 'Pharmaceutical distribution through the FARMASI network',
            id: 'Distribusi farmasi melalui jaringan FARMASI',
          },
          {
            en: 'Partnerships with healthcare providers and suppliers',
            id: 'Kemitraan dengan penyedia layanan kesehatan dan pemasok',
          },
          {
            en: 'Compliance with health and distribution regulations',
            id: 'Kepatuhan pada regulasi kesehatan dan distribusi',
          },
        ],
      },
    ],
  },
}

/* ------------------------------------------------------------------ */
/* GlobalBiz — content sourced from petrotwogroup.com/globalbiz and     */
/* petrotwogroup.com/petrotwo-group                                     */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* GlobalBiz page — every string below is transcribed character-for-    */
/* character from petrotwogroup.com/globalbiz/, including its original  */
/* typos ("deliverin", "ocus", "combination on").                       */
/* ------------------------------------------------------------------ */

export const globalBizPage = {
  eyebrow: 'OUR GLOBALBIZ',
  heading: 'We Have a Proud Tradition of Service as Fuel Transporter Since 2012',
  intro:
    'Running since 12+ years ago in Asia Pacific by young professionals with experience in Energy Trading and Investment. The knowledge they have gained from previous companies makes them full of good and bad experiences and can achieve business targets with precision.',
  counters: [
    { value: '12', suffix: '+', label: 'Years Of Experience' },
    { value: '600', suffix: '+', label: 'Completed Deliveries' },
  ],
  deliveryNote:
    'We use an integrated delivery system on our project to create a better environment for our employees and partners, and deliver better to our customers.',
  expertiseHeading: 'This is Our Expertise',
  expertise: [
    { value: '100%', label: 'Equipment Used' },
    { value: '100%', label: 'Allocation Guarantee' },
    { value: '100%', label: 'Management & Services' },
    { value: '100%', label: 'Modern Technology' },
  ],
  serviceEyebrow: 'Our Service',
  serviceHeading: 'We Provide Best Services',
  services: [
    {
      title: 'Oil & Gas',
      text: 'PetroTwo Group engaging in oil and gas trade based in Dubai - United Arab Emirates. These region are the largest trading source for petroleum refine products such as Diesel, Gasoline, Jet A1, Crude, LPG, LNG and so on.',
      image: '/assets/globalbiz/Oil-Rig-Offshore.jpg',
    },
    {
      title: 'Fuel Transporting',
      text: 'Consisting of 2 aframax, we are ready to deliver your fuel needs to every port that can be reached by our fleet throughout ASWP (Any Safe World Port).',
      image: '/assets/globalbiz/Oil-Transport-.jpg',
    },
  ],
  processHeading: 'We Constructed Secure Experience For You',
  process: [
    {
      title: '1. Select Your Service',
      text: 'Please choose our service, we will provide an extraordinary experience for you',
    },
    {
      title: '2. Make Appointment',
      text: 'Schedule a meeting to discuss what you want to achieve in your business, we will provide the best solution.',
    },
    {
      title: '3. Complete Your Data',
      text: 'After your service is selected, complete your company information data.',
    },
    {
      title: '4. Amazing Services',
      text: 'Our professional services are ready to make your dreams come true.',
    },
  ],
  whyEyebrow: 'Why Choose Us',
  whyHeading: 'Experience Work With Global Industries',
  why: [
    'WE ARE ALWAYS READY TO SERVE',
    'We Have Professional Workers',
    'Friendly To Serve Customers',
    'On Time in Progress',
    'Give The Best & Fair',
  ],
  capitalHeading: 'PetroTwo Capital',
  capitalGraphic: '/assets/globalbiz/PetroTwoCapital-Graphic.png',
  capitalCopyright:
    'All rights reserved. Any information or materials are proprietary of PetroTwo Capital. No part of this document may be reproduced, utilised, stored in a retrieval system, or transmitted in any form or by any means, (electronic, mechanical, photocopying, recording or otherwise) without the permission in writing of the copyright owner.',
  capitalBody: [
    'At PetroTwo Capital, we believe that a clear vision, commitment to excellence, and strong values are the keys to achieving long-term success. Since its establishment, we have solidified our reputation as a reliable and innovative solution provider.',
    'As a value-oriented company, we understand the importance of deliverin outstanding services to our customers. With a ocus on customer satisfaction, we continuously strive to address complex challenges and meet diverse needs.',
    'Our excellence lies in the combination on talented human resources and continuously improved processes. Our team consists of the best professionals in their fields, driven by a passion to deliver the best results and create positive impacts in every project we undertake.',
    'We invite you to join us on our journey towards sustainable success. Let’s together create a bright future and make a real positive impact on the world around us.',
    'Thank you for your support and enthusiasm.',
  ],
  signOff: ['Regards,', 'Mr. Yanvi Alex', 'Chief Executive Officer'],
  /* The reference page renders these as full-width deck slides. The source
     images sit behind the site's bot protection, so each panel carries the
     original filename to make swapping in the real artwork unambiguous. */
  capitalPanels: [
    { title: 'Our Services', image: '/assets/globalbiz/PetroTwoCapital-Services.jpg' },
    { title: 'Company Experiences', image: '/assets/globalbiz/PetroTwoCapital-Experience.jpg' },
    { title: 'Company Value', image: '/assets/globalbiz/Company-Value.jpg' },
  ],
  deck: [
    { title: 'Business Area', image: '/assets/globalbiz/Business-Area.jpg' },
    { title: 'Industri 1', image: '/assets/globalbiz/Industri1.jpg' },
    { title: 'Industri 2', image: '/assets/globalbiz/Industri2.jpg' },
    { title: 'Industri 3', image: '/assets/globalbiz/Industri-3.jpg' },
    { title: 'Network 1', image: '/assets/globalbiz/Network1.jpg' },
    { title: 'Network 2', image: '/assets/globalbiz/Network2.jpg' },
    { title: 'Network 3', image: '/assets/globalbiz/Network3.jpg' },
    { title: 'GSA · PSA · Shop', image: '/assets/globalbiz/GSA-PSA-SHOP.jpg' },
    { title: 'Portfolio Project — Emas Batangan', image: '/assets/globalbiz/PortfolioProject-EmasBatangan.jpg' },
    { title: 'Portfolio Project — Pos', image: '/assets/globalbiz/PortfolioProject-Pos.jpg' },
    { title: 'GlobalBiz', image: '/assets/globalbiz/GlobalBiz1.jpg' },
    { title: 'GlobalBiz — Kingsford', image: '/assets/globalbiz/GlobalBiz-Kingsford.jpg' },
    { title: 'Product Examples', image: '/assets/globalbiz/Product-Examples1.jpg' },
    { title: 'Top Portfolio Project — Aksesoris Emas', image: '/assets/globalbiz/Top-Portfolio-Project-AksesorisEmas.jpg' },
    { title: 'Top Portfolio Project — Private Jet', image: '/assets/globalbiz/Top-Portfolio-Project-PrivateJet.jpg' },
    { title: 'Top Portfolio Project — Network UMKM', image: '/assets/globalbiz/Top-Portfolio-Project-NetworkUMKM.jpg' },
    { title: 'Top Portfolio Project — UMKM', image: '/assets/globalbiz/Top-Portfolio-Project-UMKM.jpg' },
    { title: 'Top Portfolio Project — Event Organizer', image: '/assets/globalbiz/Top-Portfolio-Project-EventOrganizer.jpg' },
    { title: 'Top Portfolio Project — Rice Thailand', image: '/assets/globalbiz/Top-Portfolio-Project-Rice-Thailand.jpg' },
    { title: 'Top Business Project — Jawa Barat', image: '/assets/globalbiz/Top-Business-Project-JawaBarat.jpg' },
  ],
}

export const globalBiz = {
  heading: {
    en: 'A Proud Tradition of Service as Fuel Transporter Since 2012',
    id: 'Tradisi Layanan yang Membanggakan sebagai Fuel Transporter Sejak 2012',
  } as LS,
  intro: {
    en: 'Running for more than 12 years across Asia Pacific, driven by young professionals with deep experience in energy trading and investment. We use an integrated delivery system on our projects to create a better environment for employees and partners, and to deliver better to our customers.',
    id: 'Berjalan lebih dari 12 tahun di Asia Pasifik, digerakkan oleh para profesional muda dengan pengalaman mendalam di bidang perdagangan dan investasi energi. Kami menggunakan sistem pengiriman terintegrasi pada setiap proyek untuk menciptakan lingkungan kerja yang lebih baik bagi karyawan dan mitra, serta memberikan layanan terbaik kepada pelanggan.',
  } as LS,
  tagline: {
    en: 'Investments · Gold · Energy – Oil & Gas · Food & Water Security · Development',
    id: 'Investasi · Emas · Energi – Migas · Ketahanan Pangan & Air · Pembangunan',
  } as LS,
  stats: [
    { value: 12, suffix: '+', label: { en: 'Years of Experience', id: 'Tahun Pengalaman' } },
    { value: 600, suffix: '+', label: { en: 'Completed Deliveries', id: 'Pengiriman Selesai' } },
    { value: 2, suffix: '', label: { en: 'Aframax Tankers', id: 'Tanker Aframax' } },
    { value: 100, suffix: '%', label: { en: 'Allocation Guarantee', id: 'Jaminan Alokasi' } },
  ] as { value: number; suffix: string; label: LS }[],
  services: [
    {
      title: { en: 'Oil & Gas Trading', id: 'Perdagangan Minyak & Gas' },
      text: {
        en: 'PetroTwo Group engages in oil and gas trade based in Dubai – United Arab Emirates, the largest trading source for refined petroleum products such as Diesel, Gasoline, Jet A1, Crude, LPG, and LNG.',
        id: 'PetroTwo Group menjalankan perdagangan minyak dan gas yang berbasis di Dubai – Uni Emirat Arab, sumber perdagangan terbesar untuk produk petroleum olahan seperti Diesel, Gasoline, Jet A1, Crude, LPG, dan LNG.',
      },
    },
    {
      title: { en: 'Fuel Transporting', id: 'Transportasi BBM' },
      text: {
        en: 'With a fleet of two Aframax tankers, we are ready to deliver your fuel needs to every port reachable by our fleet throughout ASWP (Any Safe World Port).',
        id: 'Dengan armada dua tanker Aframax, kami siap mengantarkan kebutuhan bahan bakar Anda ke setiap pelabuhan yang dapat dijangkau armada kami di seluruh ASWP (Any Safe World Port).',
      },
    },
  ] as { title: LS; text: LS }[],
  whyUs: [
    { en: 'Always ready to serve', id: 'Selalu siap melayani' },
    { en: 'Professional workers', id: 'Tenaga kerja profesional' },
    { en: 'Friendly customer service', id: 'Ramah dalam melayani pelanggan' },
    { en: 'On time in progress', id: 'Tepat waktu dalam pengerjaan' },
    { en: 'Give the best & fair', id: 'Memberikan yang terbaik & adil' },
  ] as LS[],
  terminals: [
    {
      name: 'PetroTwo Aceh Terminal',
      location: { en: 'Aceh, Indonesia', id: 'Aceh, Indonesia' },
    },
    {
      name: 'PetroTwo Pidie Terminal Energi',
      location: { en: 'Pidie, Aceh', id: 'Pidie, Aceh' },
    },
    {
      name: 'PetroTwo Karimun Terminal',
      location: { en: 'Karimun, Riau Islands', id: 'Karimun, Kepulauan Riau' },
    },
    {
      name: 'PetroTwo Karawang Terminal',
      location: { en: 'Karawang, West Java', id: 'Karawang, Jawa Barat' },
    },
  ] as { name: string; location: LS }[],
}

export const stats: { value: number; suffix: string; label: LS }[] = [
  { value: 120, suffix: '+', label: { en: 'Projects Delivered', id: 'Proyek Terselesaikan' } },
  { value: 15, suffix: '+', label: { en: 'Countries of Operation', id: 'Negara Operasi' } },
  { value: 1200, suffix: '+', label: { en: 'People Worldwide', id: 'Tim di Seluruh Dunia' } },
  { value: 60, suffix: '+', label: { en: 'Strategic Partners', id: 'Mitra Strategis' } },
  { value: 25, suffix: '', label: { en: 'Years Combined Experience', id: 'Tahun Pengalaman Gabungan' } },
]

export const visionTimeline: { year: string; title: LS; text: LS; milestone: boolean }[] = [
  {
    year: '01',
    title: { en: 'Global Energy Sourcing', id: 'Pengadaan Energi Global' },
    text: {
      en: 'Trusted producers across the Middle East, Africa, and the Caspian.',
      id: 'Produsen terpercaya di Timur Tengah, Afrika, dan Kaspia.',
    },
    milestone: true,
  },
  {
    year: '02',
    title: { en: 'International Oil Trading', id: 'Perdagangan Minyak Internasional' },
    text: {
      en: 'Physical, contract-based trading to key demand markets.',
      id: 'Perdagangan fisik berbasis kontrak ke pasar utama.',
    },
    milestone: false,
  },
  {
    year: '03',
    title: { en: 'Ship-to-Ship Operations', id: 'Operasi Ship-to-Ship' },
    text: {
      en: 'STS transfers in Indonesian waters, fully compliant.',
      id: 'Transfer STS di perairan Indonesia, patuh penuh regulasi.',
    },
    milestone: false,
  },
  {
    year: '04',
    title: { en: 'Tank Farm Infrastructure', id: 'Infrastruktur Tank Farm' },
    text: {
      en: 'Multi-location storage for supply reliability.',
      id: 'Penyimpanan multi-lokasi untuk keandalan pasokan.',
    },
    milestone: false,
  },
  {
    year: '05',
    title: { en: 'Regional Distribution', id: 'Distribusi Regional' },
    text: {
      en: 'Efficient delivery across Southeast Asian markets.',
      id: 'Penyaluran efisien ke pasar Asia Tenggara.',
    },
    milestone: false,
  },
  {
    year: '06',
    title: { en: 'Strategic Investment', id: 'Investasi Strategis' },
    text: {
      en: 'Asset-backed growth into new sectors.',
      id: 'Pertumbuhan berbasis aset ke sektor baru.',
    },
    milestone: true,
  },
]

export const featuredProjects: { title: LS; location: LS; summary: LS; image: string }[] = [
  {
    title: {
      en: 'SATORP Refinery (Saudi Aramco / Total)',
      id: 'Kilang SATORP (Saudi Aramco / Total)',
    },
    location: { en: 'Jubail, Saudi Arabia', id: 'Jubail, Arab Saudi' },
    summary: {
      en: '70 atmospheric & bullet tanks delivered for one of the region’s flagship refineries.',
      id: '70 tangki atmosferik & bullet untuk salah satu kilang unggulan di kawasan.',
    },
    image: '/assets/master/energy-refinery.jpeg',
  },
  {
    title: { en: 'Jurong Port Universal Terminal', id: 'Terminal Universal Jurong Port' },
    location: { en: 'Singapore', id: 'Singapura' },
    summary: {
      en: '65 atmospheric tanks, the largest single tank terminal in Asia Pacific.',
      id: '65 tangki atmosferik, terminal tangki tunggal terbesar di Asia Pasifik.',
    },
    image: '/assets/master/storage-tankfarm.jpeg',
  },
  {
    title: { en: 'LNG Marine Terminal Operations', id: 'Operasi Terminal LNG Maritim' },
    location: { en: 'Southeast Asia', id: 'Asia Tenggara' },
    summary: {
      en: 'Jetty-integrated LNG carrier berthing, transfer, and marine support services.',
      id: 'Layanan sandar, transfer, dan dukungan maritim kapal LNG yang terintegrasi dermaga.',
    },
    image: '/assets/master/marine-lng.jpeg',
  },
  {
    title: { en: 'Oman Strategic Corridor', id: 'Koridor Strategis Oman' },
    location: { en: 'Sohar · Seeb · Bir Bira', id: 'Sohar · Seeb · Bir Bira' },
    summary: {
      en: 'Headquarters and tank farm development options along the Gulf of Oman.',
      id: 'Opsi pengembangan kantor pusat dan tank farm di sepanjang Teluk Oman.',
    },
    image: '/assets/master/oman-map.jpeg',
  },
  {
    title: { en: 'Integrated Smart Plantation', id: 'Perkebunan Pintar Terintegrasi' },
    location: { en: 'Indonesia', id: 'Indonesia' },
    summary: {
      en: 'Solar-powered agriculture estate combining crops, livestock, and aquaculture.',
      id: 'Kawasan pertanian bertenaga surya yang memadukan tanaman, peternakan, dan akuakultur.',
    },
    image: '/assets/master/plantation-farm.jpeg',
  },
]

export const partners = [
  'Bhumibol Group',
  'Money Station Capital',
  'FARMASI',
  'Pertamina Arun Gas',
  'Holding Capital',
  'Jurong Port',
  'SATORP',
  'Advario Helios',
  'Asia Petroleum Hub',
]

export const globalPresence: { name: LS; role: LS; hq: boolean }[] = [
  {
    name: { en: 'Indonesia', id: 'Indonesia' },
    role: { en: 'Operational Hub, Jakarta', id: 'Hub Operasional, Jakarta' },
    hq: true,
  },
  {
    name: { en: 'Oman', id: 'Oman' },
    role: { en: 'Middle East Corridor & Tank Farms', id: 'Koridor Timur Tengah & Tank Farm' },
    hq: false,
  },
  {
    name: { en: 'Malaysia', id: 'Malaysia' },
    role: { en: 'Trading & Terminal Network', id: 'Jaringan Perdagangan & Terminal' },
    hq: false,
  },
  {
    name: { en: 'Thailand', id: 'Thailand' },
    role: { en: 'Regional Partnerships', id: 'Kemitraan Regional' },
    hq: false,
  },
  {
    name: { en: 'Switzerland', id: 'Swiss' },
    role: { en: 'European Trading Desk', id: 'Meja Perdagangan Eropa' },
    hq: false,
  },
  {
    name: { en: 'Saudi Arabia', id: 'Arab Saudi' },
    role: { en: 'Project Delivery & Alliances', id: 'Eksekusi Proyek & Aliansi' },
    hq: false,
  },
  {
    name: { en: 'Africa', id: 'Afrika' },
    role: { en: 'Emerging Market Ventures', id: 'Ventura Pasar Berkembang' },
    hq: false,
  },
]

/* Titles and descriptions reproduced verbatim from petrotwogroup.com. Each
   card deep-links to the matching business division page. */
export const services = [
  {
    id: '01',
    title: 'Oil & Gas Trading',
    description:
      'From design to execution, SteelCore provides end-to-end engineering solutions that keep industries moving forward.',
    image: '/assets/svc/home-01-trading.jpg',
    division: 'energy',
  },
  {
    id: '02',
    title: 'Fuel Transport & Logistic',
    description:
      'Reliable coordination and movement of fuel cargo through trusted shipping partners and fleet operations.',
    image: '/assets/svc/home-02-transport.jpg',
    division: 'marine',
  },
  {
    id: '03',
    title: 'Terminal & Infrastructure Projects',
    description:
      'Development of tank farms, terminals, and storage facilities to strengthen regional and international energy networks',
    image: '/assets/svc/home-03-terminal.jpg',
    division: 'storage',
  },
  {
    id: '04',
    title: 'Investments & Strategic Resources',
    description:
      'Participation in high-value investment projects across energy, metals, food & water security, and infrastructure.',
    image: '/assets/svc/home-04-investment.jpg',
    division: 'capital',
  },
]

export const team: { name: string; role: LS; image: string; bio: LS }[] = [
  {
    name: 'Yanvi Alex',
    role: { en: 'Director', id: 'Direktur' },
    image: '/assets/master/team-yanvi.jpeg',
    bio: { en: '', id: '' },
  },
  {
    name: 'Dr. Abdul Malek',
    role: { en: 'Commissioner', id: 'Komisaris' },
    image: '/assets/master/team-abdul.jpeg',
    bio: {
      en: 'Dr. Malek brings more than 25 years of experience in the Energy industry, particularly in offshore, upstream projects as well as downstream hydrocarbon processing, storage & distribution. He as extended and broad expertise in various state-of-the-art technologies related to the Energy industry, having published numerous applied research papers spanning the hydrocarbon, power and water industries. He has led numerous fast-track, highly-technical MOPEX projects worldwide.',
      id: 'Dr. Malek brings more than 25 years of experience in the Energy industry, particularly in offshore, upstream projects as well as downstream hydrocarbon processing, storage & distribution. He as extended and broad expertise in various state-of-the-art technologies related to the Energy industry, having published numerous applied research papers spanning the hydrocarbon, power and water industries. He has led numerous fast-track, highly-technical MOPEX projects worldwide.',
    },
  },
  {
    name: 'Dr. Nanprapha Kawinrutaipreeda',
    role: { en: 'Independent Commissioner', id: 'Komisaris Independen' },
    image: '/assets/master/team-nanprapha.jpeg',
    bio: { en: '', id: '' },
  },
]

/* Reproduced verbatim from the Project Experiences list on petrotwogroup.com. */
export const projects: LS[] = [
  {
    en: 'Saudi Aramco / Total Refinery Project (SATORP) , Saudi Arabia (70 Atmospheric & Bullet Tanks)',
    id: 'Saudi Aramco / Total Refinery Project (SATORP) , Saudi Arabia (70 Atmospheric & Bullet Tanks)',
  },
  {
    en: 'Jurong Port (formerly Universal Terminal) , Singapore (65 Atmospheric Tanks; Largest single tank terminal in Asia Pacific)',
    id: 'Jurong Port (formerly Universal Terminal) , Singapore (65 Atmospheric Tanks; Largest single tank terminal in Asia Pacific)',
  },
  { en: 'Advario Helios Terminal', id: 'Advario Helios Terminal' },
  { en: 'Merak Tank Farm', id: 'Merak Tank Farm' },
  {
    en: 'Map Tha Put Olefins Company , Thailand (30 Atmospheric & Spherical Tanks)',
    id: 'Map Tha Put Olefins Company , Thailand (30 Atmospheric & Spherical Tanks)',
  },
  { en: 'Asia Petroleum Hub , Malaysia', id: 'Asia Petroleum Hub , Malaysia' },
]

/** Document links published under the FCO pricing table. */
export const pricingDocs = [
  { label: 'SALES KIT STS 2026', href: '/assets/Petrotwo-Sales-Kit-RED-with-STS-V1-10.pdf' },
  { label: 'CIF STANDARD PROCEDURE', href: '/assets/CIF-SOP-V.2.2.pdf' },
  { label: 'FOB STANDARD PROCEDURE', href: '/assets/FOB-web-v2.2.pdf' },
]

export const pricingOrigin = 'Kazakhstan/Indonesia/Dubai/Afrika/Oman/Nigeria'

export const tankFarms = [
  { name: 'Tank Farm Oman', region: 'Middle East' },
  { name: 'Tank Farm Brunei', region: 'Southeast Asia' },
  { name: 'Tank Farm Aceh', region: 'Indonesia' },
  { name: 'Tank Farm Arun', region: 'Indonesia' },
  { name: 'Tank Farm Malaysia', region: 'Southeast Asia' },
  { name: 'Tank Farm Thailand', region: 'Southeast Asia' },
]

export const locations = [
  { name: 'PetroTwo Indonesia', region: 'Southeast Asia' },
  { name: 'PetroTwo Malaysia', region: 'Southeast Asia' },
  { name: 'PetroTwo Oman', region: 'Middle East' },
  { name: 'PetroTwo Afrika', region: 'Africa' },
  { name: 'PetroTwo Swiss', region: 'Europe' },
  { name: 'PetroTwo Arabia', region: 'Middle East' },
]

export const capitalUnits = [
  'Energy Capital',
  'Food Capital',
  'Plantation Capital',
  'Logistic Capital',
  'Hospitality Capital',
  'PPP Capital',
]

export const subholdings: { name: string; desc: LS }[] = [
  { name: 'PSA', desc: { en: 'Personal Sales Agent', id: 'Agen Penjualan Personal' } },
  { name: 'GSA', desc: { en: 'General Sales Agent', id: 'Agen Penjualan Umum' } },
  {
    name: 'Private Company',
    desc: { en: 'Private investment vehicles', id: 'Kendaraan investasi privat' },
  },
  {
    name: 'Black Oil & Gas',
    desc: { en: 'Core hydrocarbon portfolio', id: 'Portofolio inti hidrokarbon' },
  },
  { name: 'Prioritas Gold', desc: { en: 'Priority gold & bullion', id: 'Emas & bullion prioritas' } },
]

export type NewsItem = {
  slug: string
  title: LS
  category: LS
  date: LS
  image: string
  excerpt: LS
}

export const newsItems: NewsItem[] = [
  {
    slug: 'nda-mou-signing-bhumibol',
    title: {
      en: 'NDA & MOU Signing Ceremony with Bhumibol Group',
      id: 'Seremoni Penandatanganan NDA & MOU bersama Bhumibol Group',
    },
    category: { en: 'Corporate', id: 'Korporasi' },
    date: { en: 'March 2026', id: 'Maret 2026' },
    image: '/assets/news/signing.jpg',
    excerpt: {
      en: 'PetroTwo and partners formalize strategic cooperation for petroleum factory, storage facilities, and MRO.',
      id: 'PetroTwo dan para mitra meresmikan kerja sama strategis untuk pabrik petroleum, fasilitas penyimpanan, dan MRO.',
    },
  },
  {
    slug: 'strategic-dialogue-pertamina-arun',
    title: {
      en: 'Strategic Dialogue with Pertamina Arun Gas',
      id: 'Dialog Strategis bersama Pertamina Arun Gas',
    },
    category: { en: 'Partnership', id: 'Kemitraan' },
    date: { en: 'February 2026', id: 'Februari 2026' },
    image: '/assets/news/dialogue.jpg',
    excerpt: {
      en: 'Executive discussions on LNG infrastructure cooperation and regional gas distribution.',
      id: 'Diskusi eksekutif mengenai kerja sama infrastruktur LNG dan distribusi gas regional.',
    },
  },
  {
    slug: 'regional-stakeholder-forum',
    title: {
      en: 'Regional Stakeholder Alignment Forum',
      id: 'Forum Penyelarasan Pemangku Kepentingan Regional',
    },
    category: { en: 'Operations', id: 'Operasional' },
    date: { en: 'January 2026', id: 'Januari 2026' },
    image: '/assets/news/forum.jpg',
    excerpt: {
      en: 'Cross-border coordination with producers, traders, and infrastructure operators.',
      id: 'Koordinasi lintas negara bersama produsen, pedagang, dan operator infrastruktur.',
    },
  },
  {
    slug: 'technical-briefing-downstream',
    title: {
      en: 'Technical Briefing on Downstream Expansion',
      id: 'Paparan Teknis Ekspansi Downstream',
    },
    category: { en: 'Infrastructure', id: 'Infrastruktur' },
    date: { en: 'December 2025', id: 'Desember 2025' },
    image: '/assets/news/briefing.jpg',
    excerpt: {
      en: 'Multi-location tank farm strategy across Indonesia to support energy security.',
      id: 'Strategi tank farm multi-lokasi di Indonesia untuk mendukung ketahanan energi.',
    },
  },
  {
    slug: 'partner-appreciation-gathering',
    title: { en: 'Partner Appreciation Gathering', id: 'Temu Apresiasi Mitra' },
    category: { en: 'Corporate', id: 'Korporasi' },
    date: { en: 'November 2025', id: 'November 2025' },
    image: '/assets/news/gathering.jpg',
    excerpt: {
      en: 'Strengthening long-term relationships across the PetroTwo partner network.',
      id: 'Mempererat hubungan jangka panjang di seluruh jaringan mitra PetroTwo.',
    },
  },
  {
    slug: 'vision-2040-progress-review',
    title: { en: 'Vision 2040 Progress Review', id: 'Tinjauan Kemajuan Visi 2040' },
    category: { en: 'Vision', id: 'Visi' },
    date: { en: 'October 2025', id: 'Oktober 2025' },
    image: '/assets/news/vision.jpg',
    excerpt: {
      en: 'Long-term roadmap for asset-backed energy trading and strategic infrastructure growth.',
      id: 'Peta jalan jangka panjang untuk perdagangan energi berbasis aset dan pertumbuhan infrastruktur strategis.',
    },
  },
]

export const omanOptions = [
  { code: 'A', name: 'Sohar', note: 'Industrial port & logistics corridor' },
  { code: 'B', name: 'Seeb (Block 367)', note: 'Strategic development option' },
  { code: 'C', name: 'Bir Bira', note: 'Coastal growth opportunity' },
]

export type PriceRow = {
  item: string
  cif: string
  fob: string
  note: string
  /** Second line of the Note cell, shown under `note`. */
  contract: string
}

/* Transcribed character-for-character from the FCO table on
   petrotwogroup.com, including its irregular spacing. */
const CONTRACT = '*Contract of at least 2 years.'
const MT_LIMIT = 'Minimum 100,000 MT Trial Shipment / Maximum 500,000 MT Monthly.'
const KZ = 'KAZAKHSTAN/ DUBAI/ OMAN/ IRAN/ INDONESIA/ US/ RUSIA'

export const pricingRows: PriceRow[] = [
  {
    item: 'PETROLEUM COKE',
    cif: '$205 Gross / $195 Net',
    fob: '$120 Gross / $110 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: 'UREA',
    cif: '$245 Gross / $235 Net',
    fob: '$220 Gross / $210 Net',
    note: 'Minimum 100,000 MT Trial Shipment / Maximum 500,000 MT Monthly',
    contract: CONTRACT,
  },
  {
    item: 'AGO-AUTOMOTIVE GAS OIL',
    cif: '$300 Gross / $290 Net',
    fob: '$245 Gross / $235 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: 'GASOLINE 91-92-95 OCTANES',
    cif: '$355 Gross / $345 Net',
    fob: '$250 Gross / $240 Net',
    note: `-${MT_LIMIT}`,
    contract: CONTRACT,
  },
  {
    item: `${KZ} GAS L0.2/26 GHOST 305-82`,
    cif: '$365 Gross / $355 Net',
    fob: '$245 Gross / $240 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: `${KZ} MAZUT M100 10585/75`,
    cif: '$365 Gross / $355 Net',
    fob: '$325 Gross / $315 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: `${KZ} LPG`,
    cif: '$345 Gross / $335 Net',
    fob: '$255 Gross / $245 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: 'LIGHT CYCLE OIL (LCO)',
    cif: '$375 Gross / $365 Net',
    fob: '$335 Gross / $325 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: 'BONNY LIGHT CRUDE OIL (BLCO)',
    cif: '$73 Gross / $72 Net',
    fob: '$71 Gross / $70Net',
    note: 'Minimum 1,000,000 Barrel Trial Shipment / Maximum 5,000,000 Barrel Monthly.',
    contract: CONTRACT,
  },
  {
    item: 'East-Siberia-Pacific-Ocean (ESPO)',
    cif: '$84.5 Gross / $82.5 Net',
    fob: '$71.5 Gross / $67.5 Net',
    note: 'Minimum 500,000 Barrels Trial Shipment and 2,000,000 Barrels Monthly x 12 Months.',
    contract: CONTRACT,
  },
  {
    item: 'VIRGIN D6 FUEL OIL',
    cif: '$5.15 Gross / $5.13 Net',
    fob: '$4.80 Gross / $4.78  Net',
    note: 'Minimum 10,000,000 Gallons Trial Shipment and 30,000,000 Gallons Monthly x 12 Months.',
    contract: CONTRACT,
  },
  {
    item: 'LIQUIFIED NATURAL GAS',
    cif: '$345 Gross / $335 Net',
    fob: '$325 Gross / $315 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: 'VIRGIN D2 FUEL OIL',
    cif: '$335 Gross / $325 Per MT',
    fob: '$295 Gross / $285 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: 'EN590 GOST 52368-2005',
    cif: '$375 Gross / $365 Net',
    fob: '$335 Gross / $325 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: 'LIGHT CRUDE OIL',
    cif: '$375 Gross / $365 Net',
    fob: '$335 Gross / $325 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: `${KZ} EURO-5`,
    cif: '$375 Gross / $365 Net',
    fob: '$335 Gross / $325 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: `${KZ} JP54`,
    cif: '$132 Gross / $129 Net',
    fob: '$92 Gross / $88 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: `${KZ} PHOSPHATE`,
    cif: '$295 Gross / $285 Net',
    fob: '$235 Gross / $225 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
  {
    item: `${KZ} BITUMEN`,
    cif: '$375 Gross / $365 Net',
    fob: '$335 Gross / $325 Net',
    note: MT_LIMIT,
    contract: CONTRACT,
  },
]

export const groupSites = [
  { label: 'PetroTwo Group', href: 'https://petrotwogroup.com' },
  { label: 'PetroTwo Energy', href: 'https://www.petrotwoenergy.com' },
  { label: 'PetroTwo Capital', href: 'https://www.petrotwocapital.com' },
  { label: 'PetroTwo GlobalBiz', href: 'https://www.petrotwoglobalbiz.com' },
  { label: 'Bhumibol Holding', href: 'https://www.bhumibolholding.com' },
]
