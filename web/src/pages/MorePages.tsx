import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CtaBand, PageHero, SubPageIntro, WaIcon } from '../components/Layout'
import {
  capitalUnits,
  company,
  globalBiz,
  locations,
  newsItems,
  sectorDetails,
  sectors,
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
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (!name || !email || !message) return
    const subject = encodeURIComponent(`Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${data.get('company') || '-'}\n\n${message}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <>
      <PageHero
        label={t('contactUs')}
        title={id ? 'Terhubung dengan PetroTwo' : 'Connect With PetroTwo'}
        lead={
          id
            ? 'Hubungi kantor pusat kami di Jakarta atau meja regional untuk kebutuhan perdagangan, logistik, dan investasi.'
            : 'Reach our Jakarta headquarters or regional desks for trading, logistics, and investment inquiries.'
        }
        crumbs={[{ label: t('contactUs') }]}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <h3>{id ? 'Kantor Pusat' : 'Headquarters'}</h3>
            <ul className="contact-list">
              <li>
                <strong>{id ? 'Alamat' : 'Office'}</strong>
                <br />
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.line3}
              </li>
              <li>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${company.email}`}>{company.email}</a>
                <br />
                <a href={`mailto:${company.orderEmail}`}>{company.orderEmail}</a>
              </li>
              <li>
                <strong>WhatsApp</strong>
                <div className="wa-buttons">
                  <a
                    href={waHref(waContacts.order, lang)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-wa"
                  >
                    <WaIcon /> Order Oil · {waContacts.order.display}
                  </a>
                  <a
                    href={waHref(waContacts.info, lang)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-wa"
                  >
                    <WaIcon /> Info Oil · {waContacts.info.display}
                  </a>
                </div>
                <span className="wa-note">
                  {id
                    ? 'Klik untuk langsung terhubung ke WhatsApp kami dengan pesan otomatis.'
                    : 'Tap to open WhatsApp directly with a prefilled message.'}
                </span>
              </li>
              <li>
                <strong>Web</strong>
                <br />
                {company.web}
              </li>
            </ul>
          </div>

          <div className="form-card">
            <h3>{id ? 'Kirim Permintaan' : 'Send an Inquiry'}</h3>
            <form className="form-grid" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="c-name">{id ? 'Nama Lengkap' : 'Full Name'}</label>
                <input id="c-name" className="input" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" className="input" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field" style={{ gridColumn: '1 / -1' }}>
                <label htmlFor="c-company">{id ? 'Perusahaan' : 'Company'}</label>
                <input id="c-company" className="input" name="company" autoComplete="organization" />
              </div>
              <div className="field" style={{ gridColumn: '1 / -1' }}>
                <label htmlFor="c-message">{id ? 'Pesan' : 'Message'}</label>
                <textarea id="c-message" name="message" required />
              </div>
              <button className="btn btn-primary" type="submit">
                {id ? 'Kirim Permintaan' : 'Submit Inquiry'}
              </button>
            </form>
            <p className="form-note">
              {sent
                ? id
                  ? 'Aplikasi email Anda akan terbuka dengan draf permintaan yang sudah terisi.'
                  : 'Your mail client should open with the inquiry drafted.'
                : id
                  ? 'Formulir membuka aplikasi email Anda secara aman. Tidak ada data yang disimpan di situs ini.'
                  : 'Form opens your email client securely. No data is stored on this site.'}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
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

export function GlobalBizPage() {
  const { lang } = useLang()
  const id = lang === 'id'
  return (
    <>
      <PageHero
        label="GlobalBiz"
        title="PetroTwo GlobalBiz — The Power Elite Global Biz"
        lead={pick(globalBiz.tagline, lang)}
        crumbs={[{ label: 'GlobalBiz' }]}
      />

      {/* Tradition & track record */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head-center">
            <h2 className="section-title">{pick(globalBiz.heading, lang)}</h2>
            <p className="section-lead">{pick(globalBiz.intro, lang)}</p>
          </div>
          <div className="stats-band">
            {globalBiz.stats.map((s) => (
              <div className="stat" key={s.label.en}>
                <span className="stat-value">
                  {s.value.toLocaleString('en-US')}
                  <span className="suffix">{s.suffix}</span>
                </span>
                <div className="stat-label">{pick(s.label, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & why us */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head section-head-center">
            <h2 className="section-title">
              {id ? 'Layanan Terbaik Kami' : 'We Provide Best Services'}
            </h2>
          </div>
          <div className="split-2">
            {globalBiz.services.map((s) => (
              <div className="info-panel light" style={{ background: '#fff' }} key={s.title.en}>
                <h3>{pick(s.title, lang)}</h3>
                <p>{pick(s.text, lang)}</p>
              </div>
            ))}
          </div>
          <div
            className="info-panel light"
            style={{ background: '#fff', marginTop: 'var(--space-3)' }}
          >
            <h3>{id ? 'Mengapa Memilih Kami' : 'Why Choose Us'}</h3>
            <ul>
              {globalBiz.whyUs.map((point) => (
                <li key={point.en}>{pick(point, lang)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Terminal projects */}
      <section className="section section-navy">
        <div className="container">
          <div className="section-head section-head-center">
            <h2 className="section-title" style={{ color: '#fff' }}>
              {id ? 'Proyek Terminal' : 'Terminal Projects'}
            </h2>
          </div>
          <div className="locations-grid">
            {globalBiz.terminals.map((terminal) => (
              <article className="location-card" key={terminal.name}>
                <span>{pick(terminal.location, lang)}</span>
                <h3>{terminal.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Group network */}
      <section className="section section-navy" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head section-head-center">
            <h2 className="section-title" style={{ color: '#fff' }}>
              {id ? 'Jaringan Grup' : 'Group Network'}
            </h2>
          </div>
          <div className="locations-grid">
            {[
              'PetroTwo Capital',
              'PetroTwo Energy',
              'PetroTwo International',
              'PetroTwo Marine',
              'PetroTwo Trading',
              'PetroTwo GlobalBiz',
            ].map((name) => (
              <article className="location-card" key={name}>
                <span>{id ? 'Jaringan' : 'Network'}</span>
                <h3>{name}</h3>
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
/* News                                                                 */
/* ------------------------------------------------------------------ */

export function NewsPage() {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'
  return (
    <>
      <PageHero
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
/* Sector detail                                                        */
/* ------------------------------------------------------------------ */

export function SectorPage({ slug }: { slug: string }) {
  const { lang } = useLang()
  const t = useT()
  const sector = sectors.find((s) => s.to.endsWith(slug)) ?? sectors[0]
  const label = pick(sector.label, lang)
  const description = pick(sector.description, lang)
  const id = lang === 'id'
  const detail = sectorDetails[slug]

  return (
    <>
      <SubPageIntro
        label={id ? 'Divisi Bisnis' : 'Business Division'}
        title={label}
        desc={description}
        image={sector.image}
        crumbs={[{ label: t('navBusinesses') }, { label }]}
      />

      {detail && (
        <section className="section section-surface">
          <div className="container">
            <div className="section-head section-head-center">
              <h2 className="section-title">{pick(detail.heading, lang)}</h2>
              {detail.intro && <p className="section-lead">{pick(detail.intro, lang)}</p>}
            </div>
            <div className="split-2">
              {detail.groups.map((group) => (
                <div className="info-panel light" style={{ background: '#fff' }} key={group.title.en}>
                  <h3>{pick(group.title, lang)}</h3>
                  <ul>
                    {group.points.map((point) => (
                      <li key={point.en}>{pick(point, lang)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {detail.note && (
              <p
                className="section-lead"
                style={{ textAlign: 'center', marginInline: 'auto', marginTop: 'var(--space-4)' }}
              >
                {pick(detail.note, lang)}
              </p>
            )}
          </div>
        </section>
      )}

      <section className={`section ${detail ? '' : 'section-surface'}`}>
        <div className="container">
          <div
            className="info-panel light"
            style={{ background: detail ? 'var(--color-surface)' : '#fff', maxWidth: 720, marginInline: 'auto', textAlign: 'center' }}
          >
            <h3>{id ? 'Peluang Kerja Sama' : 'Partnership Opportunities'}</h3>
            <p>
              {id
                ? `Jelajahi peluang kemitraan, permintaan komersial, dan kolaborasi proyek dalam portofolio ${label}.`
                : `Explore partnership opportunities, commercial inquiries, and project collaboration under the ${label} portfolio.`}
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Legal                                                                */
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
          <div className="profile-actions" style={{ justifyContent: 'center' }}>
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
