import type { LS } from '../i18n'

/* ------------------------------------------------------------------ */
/* Business division pages                                              */
/*                                                                      */
/* Each division has its own route (/divisions/<slug>) and exactly two   */
/* sections: a full-bleed cover image, then a short description beside   */
/* a single photo. Nothing else.                                        */
/*                                                                      */
/* English copy for Energy / Marine / Storage / Capital comes from       */
/* petrotwogroup.com/services/; the rest follow the 2026 Company         */
/* Profile. Indonesian is a faithful translation.                        */
/* ------------------------------------------------------------------ */

export type DivisionPage = {
  slug: string
  /** Drives the page's accent colour — see [data-division] in global.css. */
  theme: string
  label: LS
  tagline: LS
  /** Full-bleed cover for section one. */
  cover: string
  /** Supporting photo shown beside the description in section two. */
  photo: string
  description: LS
}

export const divisions: DivisionPage[] = [
  {
    slug: 'energy',
    theme: 'energy',
    label: { en: 'Energy', id: 'Energi' },
    tagline: {
      en: 'Oil & Gas Supply, Trading & Market Solutions',
      id: 'Pasokan, Perdagangan & Solusi Pasar Minyak & Gas',
    },
    /* energy-cover / energy-photo now run in the homepage hero, so this
       cover uses a different upstream shot to keep the two distinct. */
    cover: '/assets/svc/trading-detail.jpg',
    photo: '/assets/div/energy-photo.jpg',
    description: {
      en: 'Through PT Motiolabs Energi Indonesia, PetroTwo Group provides full-spectrum oil and refined petroleum product trading services. Supported by global suppliers, refinery partners, and logistics operators, we ensure transparent, compliant, and timely delivery.',
      id: 'Melalui PT Motiolabs Energi Indonesia, PetroTwo Group menyediakan layanan perdagangan minyak dan produk petroleum olahan secara menyeluruh. Didukung pemasok global, mitra kilang, dan operator logistik, kami memastikan pengiriman yang transparan, patuh regulasi, dan tepat waktu.',
    },
  },
  {
    slug: 'marine',
    theme: 'marine',
    label: { en: 'Marine', id: 'Maritim' },
    tagline: {
      en: 'Fuel Transport, Logistics & Distribution',
      id: 'Transportasi, Logistik & Distribusi BBM',
    },
    cover: '/assets/div/marine-cover.jpg',
    photo: '/assets/div/marine-photo.jpg',
    description: {
      en: 'PetroTwo Group coordinates logistics and transportation for petroleum products through trusted shipping partners, vessel operators, and port facilities. Our logistics team ensures safe, timely, and compliant movement of cargo across international routes.',
      id: 'PetroTwo Group mengoordinasikan logistik dan transportasi produk petroleum melalui mitra pelayaran, operator kapal, dan fasilitas pelabuhan terpercaya. Tim logistik kami memastikan pergerakan kargo yang aman, tepat waktu, dan patuh regulasi di seluruh rute internasional.',
    },
  },
  {
    slug: 'storage',
    theme: 'storage',
    label: { en: 'Storage', id: 'Penyimpanan' },
    tagline: {
      en: 'Tank Farm & Infrastructure Development Services',
      id: 'Layanan Pengembangan Tank Farm & Infrastruktur',
    },
    cover: '/assets/div/storage-cover.jpg',
    photo: '/assets/div/storage-photo.jpg',
    description: {
      en: 'Through its infrastructure subsidiaries, PetroTwo Group develops strategic energy infrastructure including tank farms, terminals, and regional storage hubs. These projects play a vital role in national and international energy security.',
      id: 'Melalui anak usaha infrastrukturnya, PetroTwo Group mengembangkan infrastruktur energi strategis mencakup tank farm, terminal, dan hub penyimpanan regional. Proyek-proyek ini berperan vital bagi ketahanan energi nasional dan internasional.',
    },
  },
  {
    slug: 'technology',
    theme: 'technology',
    label: { en: 'Technology', id: 'Teknologi' },
    tagline: {
      en: 'Integrated Delivery & Trading Technology',
      id: 'Teknologi Perdagangan & Pengiriman Terintegrasi',
    },
    cover: '/assets/div/technology-cover.jpg',
    photo: '/assets/div/technology-photo.jpg',
    description: {
      en: 'PetroTwo uses an integrated delivery system across its projects to create a better environment for employees and partners, and to deliver better to customers. The group’s digital backbone is operated through PT Motiolabs Energi Indonesia.',
      id: 'PetroTwo menggunakan sistem pengiriman terintegrasi pada seluruh proyeknya untuk menciptakan lingkungan kerja yang lebih baik bagi karyawan dan mitra, serta memberikan layanan terbaik kepada pelanggan. Tulang punggung digital grup dioperasikan melalui PT Motiolabs Energi Indonesia.',
    },
  },
  {
    slug: 'capital',
    theme: 'capital',
    label: { en: 'Capital', id: 'Permodalan' },
    tagline: {
      en: 'Investment, Financing & Project Structuring Services',
      id: 'Layanan Investasi, Pembiayaan & Penataan Proyek',
    },
    cover: '/assets/div/capital-cover.jpg',
    photo: '/assets/div/capital-photo.jpg',
    description: {
      en: 'PetroTwo Capital leads our investment and funding initiatives across energy, infrastructure, and strategic commodity projects. The division partners with global investors to support multi-million-dollar ventures and provide structured financial solutions.',
      id: 'PetroTwo Capital memimpin inisiatif investasi dan pendanaan kami di sektor energi, infrastruktur, dan proyek komoditas strategis. Divisi ini bermitra dengan investor global untuk mendukung ventura bernilai jutaan dolar dan menghadirkan solusi keuangan terstruktur.',
    },
  },
  {
    slug: 'hotels',
    theme: 'hotels',
    label: { en: 'Hotels', id: 'Perhotelan' },
    tagline: {
      en: 'Hospitality & Premium Property Investment',
      id: 'Investasi Perhotelan & Properti Premium',
    },
    cover: '/assets/div/hotels-cover.jpg',
    photo: '/assets/div/hotels-photo.jpg',
    description: {
      en: 'Through Hospitality Capital, PetroTwo invests selectively in hospitality assets and premium property development in growth cities, complementing the group’s energy-led portfolio with tangible, long-term assets.',
      id: 'Melalui Hospitality Capital, PetroTwo berinvestasi secara selektif pada aset perhotelan dan pengembangan properti premium di kota-kota bertumbuh, melengkapi portofolio berbasis energi grup dengan aset nyata jangka panjang.',
    },
  },
  {
    slug: 'bullion',
    theme: 'bullion',
    label: { en: 'Bullion', id: 'Emas Batangan' },
    tagline: { en: 'Gold & Bullion Trading', id: 'Perdagangan Emas & Bullion' },
    cover: '/assets/div/bullion-cover.jpg',
    photo: '/assets/div/bullion-photo.jpg',
    description: {
      en: 'Gold is one of PetroTwo GlobalBiz’s core investment pillars — Investments / Gold / Energy. The group runs physical gold trading and asset-backed bullion programs, including the Prioritas Gold priority channel.',
      id: 'Emas merupakan salah satu pilar investasi inti PetroTwo GlobalBiz — Investments / Gold / Energy. Grup menjalankan perdagangan emas fisik dan program bullion berbasis aset, termasuk kanal prioritas Prioritas Gold.',
    },
  },
  {
    slug: 'food',
    theme: 'food',
    label: { en: 'Food', id: 'Pangan' },
    tagline: { en: 'Food & Water Security', id: 'Ketahanan Pangan & Air' },
    cover: '/assets/div/food-cover.jpg',
    photo: '/assets/div/food-photo.jpg',
    description: {
      en: 'Food & water security is a strategic pillar of PetroTwo GlobalBiz. Through Food Capital, the group develops ventures spanning aquaculture, sourcing, and distribution to support national and regional food resilience.',
      id: 'Ketahanan pangan & air merupakan pilar strategis PetroTwo GlobalBiz. Melalui Food Capital, grup mengembangkan ventura yang mencakup akuakultur, pengadaan, dan distribusi untuk mendukung ketahanan pangan nasional dan regional.',
    },
  },
  {
    slug: 'international',
    theme: 'international',
    label: { en: 'International', id: 'Internasional' },
    tagline: {
      en: 'Global Network & Strategic Partnerships',
      id: 'Jaringan Global & Kemitraan Strategis',
    },
    cover: '/assets/div/international-cover.jpg',
    photo: '/assets/div/international-photo.jpg',
    description: {
      en: 'Petro Two Energy is a globally connected energy company, originating from Thailand, operating and collaborating with partners across multiple regions to support international oil trading and strategic energy investments, using Indonesia as a strategic operational and logistics hub.',
      id: 'Petro Two Energy adalah perusahaan energi yang terhubung secara global, berasal dari Thailand, beroperasi dan berkolaborasi dengan mitra di berbagai kawasan untuk mendukung perdagangan minyak internasional dan investasi energi strategis, menjadikan Indonesia sebagai hub operasional dan logistik strategis.',
    },
  },
  {
    slug: 'plantation',
    theme: 'plantation',
    label: { en: 'Plantation', id: 'Perkebunan' },
    tagline: { en: 'Integrated Smart Plantation', id: 'Perkebunan Pintar Terintegrasi' },
    cover: '/assets/div/plantation-cover.jpg',
    photo: '/assets/div/plantation-photo.jpg',
    description: {
      en: 'Through Plantation Capital, PetroTwo develops solar-powered, integrated smart-farming estates in Indonesia that combine crops, livestock, and aquaculture in one sustainable ecosystem.',
      id: 'Melalui Plantation Capital, PetroTwo mengembangkan kawasan smart farming terintegrasi bertenaga surya di Indonesia yang memadukan tanaman, peternakan, dan akuakultur dalam satu ekosistem berkelanjutan.',
    },
  },
  {
    slug: 'pharmaceutical',
    theme: 'pharmaceutical',
    label: { en: 'Pharmaceutical', id: 'Farmasi' },
    tagline: {
      en: 'Healthcare & Pharmaceutical Distribution',
      id: 'Distribusi Kesehatan & Farmasi',
    },
    cover: '/assets/div/pharmaceutical-cover.jpg',
    photo: '/assets/div/pharmaceutical-photo.jpg',
    description: {
      en: 'PetroTwo participates in the healthcare sector through the FARMASI network, focusing on reliable pharmaceutical distribution and partnership-driven growth.',
      id: 'PetroTwo berpartisipasi di sektor kesehatan melalui jaringan FARMASI, berfokus pada distribusi farmasi yang andal dan pertumbuhan berbasis kemitraan.',
    },
  },
]

export const divisionBySlug = (slug: string) => divisions.find((d) => d.slug === slug)

/** Path for a division page. Kept in one place so nav and cards stay in sync. */
export const divisionPath = (slug: string) => `/divisions/${slug}`
