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
  navHome: { en: 'Home', id: 'Beranda' },
  navAbout: { en: 'About', id: 'Tentang Kami' },
  navProjects: { en: 'Projects', id: 'Proyek' },
  navInvestors: { en: 'Investors', id: 'Investor' },
  navNews: { en: 'News', id: 'Berita' },
  navTax: { en: 'Taxation', id: 'Perpajakan' },
  navBusinesses: { en: 'Businesses', id: 'Bisnis Kami' },
  contactUs: { en: 'Contact Us', id: 'Hubungi Kami' },
  featuredDivision: { en: 'Featured Division', id: 'Divisi Unggulan' },
  groupCore: { en: 'Core Operations', id: 'Operasi Inti' },
  groupInvest: { en: 'Investment & Lifestyle', id: 'Investasi & Gaya Hidup' },
  groupGlobal: { en: 'Global Ventures', id: 'Ventura Global' },

  /* Hero */
  heroKicker: { en: 'PetroTwo Group · Jakarta, Indonesia', id: 'PetroTwo Group · Jakarta, Indonesia' },
  heroTitle: {
    en: 'Building Tomorrow’s Global Energy Ecosystem',
    id: 'Membangun Ekosistem Energi Global Masa Depan',
  },
  heroLead: {
    en: 'An integrated holding company operating across energy, marine, storage, capital, and eight further business pillars. We serve investors, governments, and international partners with integrity and precision.',
    id: 'Perusahaan induk terintegrasi yang bergerak di sektor energi, maritim, penyimpanan, permodalan, serta delapan pilar bisnis lainnya. Kami melayani investor, pemerintah, dan mitra internasional dengan integritas dan presisi.',
  },
  heroCta1: { en: 'Discover PetroTwo', id: 'Jelajahi PetroTwo' },
  heroCta2: { en: 'Partner With Us', id: 'Bermitra dengan Kami' },

  /* Partners */
  partnersTitle: {
    en: 'Trusted by Strategic Partners Worldwide',
    id: 'Dipercaya oleh Mitra Strategis di Seluruh Dunia',
  },

  /* Overview */
  overviewEyebrow: { en: 'Company Overview', id: 'Profil Perusahaan' },
  overviewTitle: {
    en: 'A Trusted Partner Across the Global Energy Value Chain',
    id: 'Mitra Terpercaya di Sepanjang Rantai Nilai Energi Global',
  },
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

  /* Ecosystem */
  ecoEyebrow: { en: 'Business Ecosystem', id: 'Ekosistem Bisnis' },
  ecoTitle: { en: 'Eleven Pillars, One Group', id: 'Sebelas Pilar, Satu Grup' },
  ecoLead: {
    en: 'Diversified operations that reinforce one another, with energy at the core and capital and trade extending our reach.',
    id: 'Operasi terdiversifikasi yang saling memperkuat, dengan energi sebagai inti serta permodalan dan perdagangan yang memperluas jangkauan kami.',
  },

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

  /* CTA band */
  ctaEyebrow: { en: 'Become Our Partner', id: 'Jadilah Mitra Kami' },
  ctaTitle: {
    en: 'Let’s Build the Next Generation of Energy, Together',
    id: 'Mari Bangun Generasi Energi Berikutnya, Bersama',
  },
  ctaText: {
    en: 'Whether you need reliable energy supply, logistics solutions, infrastructure cooperation, or long-term investment opportunities, our team is ready to support you with precision and speed.',
    id: 'Baik Anda membutuhkan pasokan energi yang andal, solusi logistik, kerja sama infrastruktur, maupun peluang investasi jangka panjang, tim kami siap mendukung Anda dengan presisi dan kecepatan.',
  },
  ctaButton: { en: 'Get in Touch', id: 'Hubungi Kami' },

  /* Footer */
  footBusinesses: { en: 'Businesses', id: 'Bisnis' },
  footQuickLinks: { en: 'Quick Links', id: 'Tautan Cepat' },
  footStayInformed: { en: 'Stay Informed', id: 'Tetap Terinformasi' },
  footNewsletter: {
    en: 'Corporate updates and market insights, delivered quarterly.',
    id: 'Informasi korporasi dan wawasan pasar, dikirim setiap kuartal.',
  },
  footEmailPlaceholder: { en: 'Business email', id: 'Email bisnis' },
  footSubscribe: { en: 'Subscribe', id: 'Berlangganan' },
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
