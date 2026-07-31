import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'id'

/** Localized string: every translatable field carries both languages. */
export type LS = { en: string; id: string }

export const pick = (ls: LS, lang: Lang) => ls[lang]

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('petrotwo-lang')
    return saved === 'id' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('petrotwo-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/* ------------------------------------------------------------------ */
/* UI copy dictionary                                                   */
/* ------------------------------------------------------------------ */

const strings = {
  /* Header / nav */
  navHome: { en: 'Home', id: 'Home' },
  navAbout: { en: 'About', id: 'About' },
  navDivisions: { en: 'Business Division', id: 'Business Division' },
  navServices: { en: 'Services', id: 'Services' },
  navPricing: { en: 'Oil & Gas Price', id: 'Oil & Gas Price' },
  navContact: { en: 'Contact', id: 'Contact' },
  navProjects: { en: 'Projects', id: 'Proyek' },
  navInvestors: { en: 'Investors', id: 'Investor' },
  navNews: { en: 'News', id: 'Berita' },
  navTax: { en: 'Tax', id: 'Tax' },
  navBusinesses: { en: 'Businesses', id: 'Bisnis Kami' },
  contactUs: { en: 'Contact Us', id: 'Hubungi Kami' },
  featuredDivision: { en: 'Featured Division', id: 'Divisi Unggulan' },
  groupCore: { en: 'Core Operations', id: 'Operasi Inti' },
  groupInvest: { en: 'Investment & Lifestyle', id: 'Investasi & Gaya Hidup' },
  groupGlobal: { en: 'Global Ventures', id: 'Ventura Global' },

  /* Hero — copy reproduced verbatim from petrotwogroup.com */
  heroBadge1: { en: 'Energy', id: 'Energy' },
  heroBadge2: { en: 'Investment', id: 'Investment' },
  heroBadge3: { en: 'Strategic Resources', id: 'Strategic Resources' },
  heroTitle: {
    en: 'Empowering Global Business Through Energy, Investment & Strategic Resources',
    id: 'Empowering Global Business Through Energy, Investment & Strategic Resources',
  },
  heroLead: {
    en: 'PetroTwo Group is a global business entity committed to delivering excellence across the energy, logistics, and investment sectors. With an expansive international network, reliable operational capabilities, and strong governance, we serve clients worldwide with integrity, speed, and precision.',
    id: 'PetroTwo Group adalah entitas bisnis global yang berkomitmen menghadirkan keunggulan di sektor energi, logistik, dan investasi. Dengan jaringan internasional yang luas, kapabilitas operasional yang andal, dan tata kelola yang kuat, kami melayani klien di seluruh dunia dengan integritas, kecepatan, dan presisi.',
  },
  heroCta1: { en: 'Discover PetroTwo', id: 'Jelajahi PetroTwo' },
  heroCta2: { en: 'Contact Us', id: 'Hubungi Kami' },

  /* Partners */
  partnersTitle: {
    en: 'Trusted by Strategic Partners Worldwide',
    id: 'Dipercaya oleh Mitra Strategis di Seluruh Dunia',
  },

  /* Overview — copy reproduced verbatim from petrotwogroup.com */
  overviewEyebrow: { en: 'About', id: 'About' },
  overviewTitle: {
    en: 'A Trusted Global Partner in Energy and Infrastructure',
    id: 'A Trusted Global Partner in Energy and Infrastructure',
  },
  profileDoc1: { en: 'PetroTwo Group Company Profile', id: 'PetroTwo Group Company Profile' },
  profileDoc2: {
    en: 'PetroTwo Group Company Profile (PDF)',
    id: 'PetroTwo Group Company Profile (PDF)',
  },
  profileDoc3: { en: 'PetroTwo GlobalBiz', id: 'PetroTwo GlobalBiz' },
  companyAbout: {
    en: 'PetroTwo Group is an integrated holding company providing end-to-end solutions across the oil & gas supply chain. From sourcing and trading to logistics, storage, and financial structuring, we ensure seamless execution for partners and clients worldwide.',
    id: 'PetroTwo Group adalah perusahaan induk terintegrasi yang menyediakan solusi menyeluruh di sepanjang rantai pasok minyak dan gas. Mulai dari pengadaan dan perdagangan hingga logistik, penyimpanan, dan penataan keuangan, kami memastikan eksekusi yang mulus bagi mitra dan klien di seluruh dunia.',
  },
  missionTitle: { en: 'Our Mission', id: 'Misi Kami' },
  missionText: {
    en: 'Deliver reliable, compliant international trading while developing strategic energy infrastructure and long-term partnerships.',
    id: 'Menyediakan perdagangan internasional yang andal dan patuh regulasi, seraya membangun infrastruktur energi strategis dan kemitraan jangka panjang.',
  },
  visionTitle: { en: 'Our Vision', id: 'Visi Kami' },
  visionText: {
    en: 'To become Asia’s most trusted, asset-backed energy ecosystem by 2040, one that is resilient, diversified, and built on integrity.',
    id: 'Menjadi ekosistem energi berbasis aset yang paling terpercaya di Asia pada 2040, yang tangguh, terdiversifikasi, dan dibangun di atas integritas.',
  },
  readMore: { en: 'Read More', id: 'Selengkapnya' },
  experienceLabel: { en: 'Years Combined Experience', id: 'Tahun Pengalaman Gabungan' },

  /* Value chain */
  v2040Eyebrow: { en: 'Our Value Chain', id: 'Rantai Nilai Kami' },
  v2040Title: {
    en: 'From Global Sourcing to Strategic Investment',
    id: 'Dari Pengadaan Global hingga Investasi Strategis',
  },
  v2040Lead: {
    en: 'Six integrated stages connect energy sourcing regions with key demand markets, with Indonesia as the strategic hub.',
    id: 'Enam tahap terintegrasi menghubungkan kawasan sumber energi dengan pasar permintaan utama, dengan Indonesia sebagai hub strategis.',
  },

  /* Ecosystem — copy reproduced verbatim from petrotwogroup.com/business-divisions */
  ecoEyebrow: { en: 'Business Divisions', id: 'Business Divisions' },
  ecoTitle: {
    en: 'Synergized divisions shaping the future of global energy and development',
    id: 'Synergized divisions shaping the future of global energy and development',
  },
  ecoLead: {
    en: 'A cohesive structure enabling efficient trading, strong investments, and resilient infrastructure',
    id: 'A cohesive structure enabling efficient trading, strong investments, and resilient infrastructure',
  },
  ecoCta: { en: 'View Division', id: 'Lihat Divisi' },

  /* Division pages */
  divisionEyebrow: { en: 'Business Division', id: 'Divisi Bisnis' },
  divisionOverview: { en: 'Division Overview', id: 'Ikhtisar Divisi' },
  divisionDetail: { en: 'In Detail', id: 'Rincian' },
  divisionAll: { en: 'All Business Divisions', id: 'Semua Divisi Bisnis' },

  /* Global presence */
  globalEyebrow: { en: 'Global Presence', id: 'Jejak Global' },
  globalTitle: { en: 'From Jakarta to the World', id: 'Dari Jakarta untuk Dunia' },
  globalLead: {
    en: 'Headquartered at Wisma BNI 46, Jakarta, with operations and partnerships spanning three continents.',
    id: 'Berkantor pusat di Wisma BNI 46, Jakarta, dengan operasi dan kemitraan yang membentang di tiga benua.',
  },

  /* Projects */
  projectsEyebrow: { en: 'Featured Projects', id: 'Proyek Unggulan' },
  projectsTitle: { en: 'Delivered at Enterprise Scale', id: 'Terlaksana dalam Skala Enterprise' },
  projectsCta: { en: 'View All Projects', id: 'Lihat Semua Proyek' },

  /* News */
  newsEyebrow: { en: 'News & Media', id: 'Berita & Media' },
  newsTitle: { en: 'Latest From the Group', id: 'Kabar Terbaru dari Grup' },
  newsCta: { en: 'All News', id: 'Semua Berita' },

  /* CTA band — copy reproduced verbatim from petrotwogroup.com */
  ctaTitle: { en: 'Let’s Work Together', id: 'Let’s Work Together' },
  ctaText: {
    en: 'Whether you’re looking for reliable energy supply, logistics solutions, infrastructure cooperation, or long-term investment opportunities, our team is ready to support your needs with professionalism and speed.',
    id: 'Whether you’re looking for reliable energy supply, logistics solutions, infrastructure cooperation, or long-term investment opportunities, our team is ready to support your needs with professionalism and speed.',
  },
  ctaButton: { en: 'Get in Touch', id: 'Get in Touch' },

  /* Footer */
  footBusinesses: { en: 'Businesses', id: 'Bisnis' },
  footQuickLinks: { en: 'Quick Links', id: 'Tautan Cepat' },
  footGetInTouch: { en: 'Get in Touch', id: 'Hubungi Kami' },
  footContactLead: {
    en: 'Reach our team for inquiries, partnerships, or tailored solutions.',
    id: 'Hubungi tim kami untuk pertanyaan, kemitraan, atau solusi yang disesuaikan.',
  },
  footContactCta: { en: 'Contact Us', id: 'Hubungi Kami' },
  footAbout: { en: 'About Us', id: 'Tentang Kami' },
  footProjects: { en: 'Projects & Services', id: 'Proyek & Layanan' },
  footInvestor: { en: 'Investor Relations', id: 'Hubungan Investor' },
  footSustainability: { en: 'Sustainability', id: 'Keberlanjutan' },
  footNews: { en: 'News & Media', id: 'Berita & Media' },
  footContact: { en: 'Contact', id: 'Kontak' },
  footRights: { en: 'All Rights Reserved.', id: 'Hak Cipta Dilindungi.' },
  footPrivacy: { en: 'Privacy Policy', id: 'Kebijakan Privasi' },
  footScam: { en: 'Scam Alert', id: 'Waspada Penipuan' },
} satisfies Record<string, LS>

export type StringKey = keyof typeof strings

/** Hook returning a translate function bound to the active language. */
export function useT() {
  const { lang } = useLang()
  return (key: StringKey) => strings[key][lang]
}
