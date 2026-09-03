import { Link } from 'react-router-dom'
import { Breadcrumb, CtaBand, PageHero, SubPageIntro } from '../components/Layout'
import {
  capitalUnits,
  company,
  locations,
  newsItems,
  subholdings,
  tankFarms,
  waContacts,
  waHref,
} from '../data/content'
import { pick, useLang, useT } from '../i18n'

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

export function ContactPage() {
  const t = useT()

  return (
    <>
      <section className="page-hero" data-hero="contact">
        <div className="container page-hero-inner">
          <Breadcrumb trail={[{ label: t('navContact') }]} />
          <div className="page-hero-copy">
            <p className="page-hero-label">We&rsquo;re Here</p>
            <h1>Get in Touch With PetroTwo Group</h1>
            <p className="page-hero-lead">
              Partner with us to explore collaboration opportunities and learn how our divisions
              can support your goals. Reach out to our team for inquiries, partnerships, or
              tailored solutions that move your business forward.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-info">
          <div className="contact-block">
            <h2>Head Office</h2>
            <p>
              Wisma BNI 50th Floor (Konsorsium Hijau) Jl. Karet Pasar Baru Timur III No.Kav. 1,
              RT.1/RW.8, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus
              Ibukota Jakarta 10220
            </p>
          </div>

          <div className="contact-block">
            <h2>Official Website</h2>
            <p>
              <a href="https://www.petrotwoenergy.com" target="_blank" rel="noreferrer">
                www.petrotwoenergy.com
              </a>
            </p>
          </div>

          <div className="contact-block">
            <h2>Business Email</h2>
            <p>
              <a href="mailto:info@petrotwogroup.com">info@petrotwogroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Storage                                                              */
/* ------------------------------------------------------------------ */

const regionId: Record<string, string> = {
  'Middle East': 'Timur Tengah',
  'Southeast Asia': 'Asia Tenggara',
  Indonesia: 'Indonesia',
  Africa: 'Afrika',
  Europe: 'Eropa',
}

export function StoragePage() {
  const { lang } = useLang()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        hero="storage"
        label={id ? 'Penyimpanan' : 'Storage'}
        title={id ? 'Jaringan Tank Farm & Penyimpanan' : 'Tank Farm & Storage Network'}
        lead={
          id
            ? 'Strategi tank farm multi-lokasi yang mendukung perdagangan minyak internasional, optimalisasi penyimpanan, dan ketahanan energi regional.'
            : 'Multi-location tank farm strategy supporting international oil trading, storage optimization, and regional energy security.'
        }
        crumbs={[{ label: id ? 'Penyimpanan' : 'Storage' }]}
      />
      <section className="section section-navy">
        <div className="container">
          <div className="storage-grid">
            {tankFarms.map((item) => (
              <article className="storage-card" key={item.name}>
                <span>{id ? (regionId[item.region] ?? item.region) : item.region}</span>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* International                                                        */
/* ------------------------------------------------------------------ */

export function InternationalPage() {
  const { lang } = useLang()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        hero="international"
        label={id ? 'Internasional' : 'International'}
        title={id ? 'Jejak Global' : 'Global Presence'}
        lead={
          id
            ? 'Beroperasi dan berkolaborasi di Timur Tengah, Afrika, Asia Tenggara, dan Eropa, dengan Indonesia sebagai hub strategis.'
            : 'Operating and collaborating across Middle East, Africa, Southeast Asia, and Europe, with Indonesia as strategic hub.'
        }
        crumbs={[{ label: id ? 'Internasional' : 'International' }]}
      />
      <section className="section section-navy">
        <div className="container">
          <div className="locations-grid">
            {locations.map((item) => (
              <article className="location-card" key={item.name}>
                <span>{id ? (regionId[item.region] ?? item.region) : item.region}</span>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Capital                                                              */
/* ------------------------------------------------------------------ */

export function CapitalPage() {
  const { lang } = useLang()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        hero="capital"
        label={id ? 'Permodalan' : 'Capital'}
        title={id ? 'Platform PetroTwo Capital' : 'PetroTwo Capital Platforms'}
        lead={
          id
            ? 'Kendaraan permodalan sektoral yang menyelaraskan infrastruktur berbasis energi dengan investasi strategis non-migas terpilih.'
            : 'Sector capital vehicles aligning energy-led infrastructure with selective non-oil strategic investments.'
        }
        crumbs={[{ label: id ? 'Permodalan' : 'Capital' }]}
      />
      <section className="section section-navy">
        <div className="container">
          <div className="locations-grid">
            {capitalUnits.map((unit) => (
              <article className="location-card" key={unit}>
                <span>Capital</span>
                <h3>{unit}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* GlobalBiz                                                            */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* News                                                                 */
/* ------------------------------------------------------------------ */

export function NewsPage() {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        hero="news"
        label={t('newsEyebrow')}
        title={id ? 'Kabar Korporasi Terkini' : 'Latest Corporate Updates'}
        lead={
          id
            ? 'Pengumuman, kemitraan, sorotan operasional, dan perkembangan Visi 2040.'
            : 'Announcements, partnerships, operations highlights, and Vision 2040 progress.'
        }
        crumbs={[{ label: t('newsEyebrow') }]}
      />
      <section className="section">
        <div className="container">
          <div className="news-grid">
            {newsItems.map((item) => (
              <article className="news-card" key={item.slug}>
                <img src={item.image} alt="" loading="lazy" />
                <div className="news-card-body">
                  <small>{pick(item.category, lang)}</small>
                  <h3>{pick(item.title, lang)}</h3>
                  <p style={{ marginTop: '0.45rem' }}>{pick(item.excerpt, lang)}</p>
                  <time>{pick(item.date, lang)}</time>
                  <Link to={`/news/${item.slug}`} className="news-readmore">
                    {id ? 'Baca Selengkapnya' : 'Read More'} <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* SubHolding                                                           */
/* ------------------------------------------------------------------ */

export function SubholdingPage() {
  const { lang } = useLang()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        hero="subholding"
        label="SubHolding"
        title={id ? 'Struktur SubHolding' : 'SubHolding Structure'}
        lead={
          id
            ? 'Kerangka keagenan penjualan dan kanal portofolio prioritas yang mendukung jaringan komersial PetroTwo.'
            : 'Sales agency frameworks and priority portfolio channels supporting PetroTwo’s commercial network.'
        }
        crumbs={[{ label: 'SubHolding' }]}
      />
      <section className="section section-navy">
        <div className="container">
          <div className="locations-grid">
            {subholdings.map((item) => (
              <article className="location-card" key={item.name}>
                <span>{pick(item.desc, lang)}</span>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Investor Relations                                                   */
/* ------------------------------------------------------------------ */

export function InvestorPage() {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        hero="investor"
        label={t('footInvestor')}
        title={id ? 'Pertumbuhan Berbasis Aset' : 'Asset-Backed Growth'}
        lead={
          id
            ? 'Keterlibatan yang transparan bagi mitra yang menjajaki jalur investasi tank farm, produk maritim, dan minyak mentah.'
            : 'Transparent engagement for partners exploring tank farm, marine product, and crude oil investment pathways.'
        }
        crumbs={[{ label: t('footInvestor') }]}
      />
      <section className="section section-navy">
        <div className="container split-2">
          <div className="info-panel">
            <h3>{id ? 'Area Fokus' : 'Focus Areas'}</h3>
            <ul>
              <li>{id ? 'Pengembangan tank farm & kapasitas penyimpanan' : 'Tank Farm development & storage capacity'}</li>
              <li>{id ? 'Logistik produk maritim & STS' : 'Marine product logistics & STS'}</li>
              <li>{id ? 'Platform perdagangan minyak mentah' : 'Crude oil trading platforms'}</li>
              <li>{id ? 'Partisipasi infrastruktur PPP' : 'PPP infrastructure participation'}</li>
            </ul>
          </div>
          <div className="info-panel">
            <h3>{id ? 'Keterlibatan' : 'Engagement'}</h3>
            <ul>
              <li>{id ? 'Profil perusahaan & diskusi FCO' : 'Corporate profile & FCO discussion'}</li>
              <li>{id ? 'Paparan proyek bagi mitra strategis' : 'Project briefing for strategic partners'}</li>
              <li>{id ? 'Struktur investasi selaras tata kelola' : 'Governance-aligned investment structures'}</li>
              <li>
                {id ? 'Hubungi IR melalui ' : 'Contact IR via '}
                <a href={`mailto:${company.email}`} style={{ color: 'var(--color-gold)' }}>
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Sustainability                                                       */
/* ------------------------------------------------------------------ */

export function SustainabilityPage() {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        hero="sustainability"
        label={t('footSustainability')}
        title={id ? 'Pertumbuhan Energi yang Bertanggung Jawab' : 'Responsible Energy Growth'}
        lead={
          id
            ? 'Membangun sistem energi yang tangguh melalui operasi yang patuh regulasi dan pemikiran infrastruktur jangka panjang.'
            : 'Building resilient energy systems with compliance-driven operations and long-term infrastructure thinking.'
        }
        crumbs={[{ label: t('footSustainability') }]}
      />
      <section className="section">
        <div className="container split-2">
          <div>
            <div className="eyebrow">{id ? 'Komitmen' : 'Commitment'}</div>
            <h2 className="section-title">{id ? 'Beroperasi dengan Integritas' : 'Operating With Integrity'}</h2>
            <p className="section-lead">
              {id
                ? 'PetroTwo Energy meyakini bahwa kepercayaan Anda adalah hal utama, dan melakukan hal yang benar selalu menjadi pilihan terbaik. Nilai Inti, Kode Etik, dan kebijakan perusahaan kami mencerminkan komitmen menjalankan bisnis dengan integritas.'
                : company.values}
            </p>
          </div>
          <div className="vision-panel" style={{ minHeight: 320 }}>
            <img src="/assets/master/plantation-farm.jpeg" alt="" loading="lazy" />
            <div className="vision-panel-content">
              <p className="vision-copy">
                {id
                  ? 'Keselamatan, kepatuhan, dan kemitraan yang berkelanjutan.'
                  : 'Safety, compliance, and durable partnerships.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Stories                                                              */
/* ------------------------------------------------------------------ */

export function StoriesPage() {
  const { lang } = useLang()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        hero="stories"
        label={id ? 'Kisah Kami' : 'Our Stories'}
        title={id ? 'Merajut Perjalanan PetroTwo' : 'Building the PetroTwo Journey'}
        lead={
          id
            ? 'Dari meja perdagangan hingga proyek terminal, kisah eksekusi lintas kawasan dan lini bisnis.'
            : 'From trading desks to terminal projects, stories of execution across regions and business lines.'
        }
        crumbs={[{ label: id ? 'Kisah Kami' : 'Our Stories' }]}
      />
      <section className="section">
        <div className="container">
          <div className="news-grid">
            {newsItems.slice(0, 4).map((item) => (
              <article className="news-card" key={item.title.en}>
                <img src={item.image} alt="" loading="lazy" />
                <div className="news-card-body">
                  <small>{pick(item.category, lang)}</small>
                  <h3>{pick(item.title, lang)}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* News detail                                                          */
/* ------------------------------------------------------------------ */

export function NewsDetailPage({ slug }: { slug: string }) {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'
  const item = newsItems.find((n) => n.slug === slug) ?? newsItems[0]

  return (
    <>
      <SubPageIntro
        title={pick(item.title, lang)}
        desc={pick(item.excerpt, lang)}
        image={item.image}
        crumbs={[{ label: t('newsEyebrow'), to: '/news' }, { label: pick(item.title, lang) }]}
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container article-body">
          <div className="article-meta">
            <span className="badge badge-gold">{pick(item.category, lang)}</span>
            <time>{pick(item.date, lang)}</time>
          </div>
          <p>
            {id
              ? 'Perkembangan ini merupakan bagian dari komitmen berkelanjutan PetroTwo Group terhadap komunikasi yang transparan dengan mitra, investor, dan pemangku kepentingan. Setiap langkah strategis grup dirancang untuk memperkuat rantai nilai energi serta membuka peluang kolaborasi jangka panjang di seluruh kawasan operasi kami.'
              : 'This development is part of PetroTwo Group’s ongoing commitment to transparent communication with partners, investors, and stakeholders. Every strategic step the group takes is designed to strengthen the energy value chain and open long-term collaboration opportunities across our regions of operation.'}
          </p>
          <p>
            {id
              ? `Untuk pertanyaan media atau informasi lebih lanjut mengenai kabar ini, silakan hubungi tim komunikasi korporat kami di ${company.email}.`
              : `For media inquiries or further information regarding this update, please contact our corporate communications team at ${company.email}.`}
          </p>
          <div className="btn-row btn-row-center profile-actions">
            <Link to="/news" className="btn btn-outline-navy">
              {id ? '← Semua Berita' : '← All News'}
            </Link>
            <a
              href={waHref(waContacts.info, lang)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

const legalCopy = {
  privacy: {
    title: { en: 'Privacy Policy', id: 'Kebijakan Privasi' },
    body: {
      en: 'PetroTwo respects your privacy. Inquiry forms open your local email client and do not store personal data on this website.',
      id: 'PetroTwo menghormati privasi Anda. Formulir permintaan hanya membuka aplikasi email di perangkat Anda dan tidak menyimpan data pribadi apa pun di situs ini.',
    },
  },
  scam: {
    title: { en: 'Scam Alert', id: 'Waspada Penipuan' },
    body: {
      en: 'PetroTwo never requests advance fees, seed money, or confidential banking passwords via social media or unverified channels.',
      id: 'PetroTwo tidak pernah meminta biaya di muka, dana awal, ataupun kata sandi perbankan rahasia melalui media sosial atau kanal yang tidak terverifikasi.',
    },
  },
} as const

export function LegalPage({ page }: { page: keyof typeof legalCopy }) {
  const { lang } = useLang()
  const id = lang === 'id'
  const copy = legalCopy[page]
  const title = pick(copy.title, lang)
  const body = pick(copy.body, lang)
  return (
    <>
      <PageHero title={title} lead={body} crumbs={[{ label: title }]} />
      <section className="section">
        <div className="container">
          <p className="section-lead" style={{ maxWidth: '70ch' }}>
            {id
              ? `Untuk hal mendesak, hubungi ${company.email}. Jangan pernah membagikan kredensial perbankan atau biaya di muka kepada pihak tak terverifikasi yang mengaku mewakili PetroTwo.`
              : `For urgent matters, contact ${company.email}. Never share banking credentials or advance fees with unverified parties claiming to represent PetroTwo.`}
          </p>
        </div>
      </section>
    </>
  )
}
