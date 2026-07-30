import { CtaBand, PageHero, WaIcon } from '../components/Layout'
import { company, waContacts, waHref } from '../data/content'
import { pick, useLang, type LS } from '../i18n'

/* ------------------------------------------------------------------ */
/* PLACEHOLDER CONTENT — all body copy is lorem ipsum.                  */
/* Replace with reviewed tax content before publishing. Structure       */
/* follows Big-4 tax service pages (EY / KPMG / Deloitte Indonesia),    */
/* adapted to the PetroTwo design system.                               */
/* ------------------------------------------------------------------ */

const LOREM_S = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
const LOREM_M =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.'
const LOREM_L =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'

const pillars: { title: LS; points: string[] }[] = [
  {
    title: { en: 'Corporate Income Tax', id: 'Pajak Penghasilan Badan' },
    points: [LOREM_S, LOREM_S, LOREM_S],
  },
  {
    title: { en: 'Oil & Gas / PSC Taxation', id: 'Perpajakan Migas / PSC' },
    points: [LOREM_S, LOREM_S, LOREM_S],
  },
  {
    title: {
      en: 'International Tax & Transfer Pricing',
      id: 'Pajak Internasional & Transfer Pricing',
    },
    points: [LOREM_S, LOREM_S, LOREM_S],
  },
  {
    title: { en: 'VAT & Indirect Tax', id: 'PPN & Pajak Tidak Langsung' },
    points: [LOREM_S, LOREM_S, LOREM_S],
  },
  {
    title: { en: 'Withholding & Employment Taxes', id: 'Pemotongan & Pajak Karyawan' },
    points: [LOREM_S, LOREM_S, LOREM_S],
  },
  {
    title: {
      en: 'Tax Governance, Disputes & Incentives',
      id: 'Tata Kelola, Sengketa & Insentif Pajak',
    },
    points: [LOREM_S, LOREM_S, LOREM_S],
  },
]

const calendarRows: { obligation: LS; frequency: string; deadline: string; note: string }[] = [
  {
    obligation: { en: 'Corporate Income Tax Return', id: 'SPT Tahunan PPh Badan' },
    frequency: 'Lorem ipsum',
    deadline: 'Lorem ipsum',
    note: LOREM_S,
  },
  {
    obligation: { en: 'Monthly VAT Return', id: 'SPT Masa PPN' },
    frequency: 'Lorem ipsum',
    deadline: 'Lorem ipsum',
    note: LOREM_S,
  },
  {
    obligation: { en: 'Employee Withholding (Art. 21)', id: 'PPh Pasal 21 Karyawan' },
    frequency: 'Lorem ipsum',
    deadline: 'Lorem ipsum',
    note: LOREM_S,
  },
  {
    obligation: { en: 'Withholding Tax (Art. 23/26)', id: 'PPh Pasal 23/26' },
    frequency: 'Lorem ipsum',
    deadline: 'Lorem ipsum',
    note: LOREM_S,
  },
  {
    obligation: { en: 'Transfer Pricing Documentation', id: 'Dokumentasi Transfer Pricing' },
    frequency: 'Lorem ipsum',
    deadline: 'Lorem ipsum',
    note: LOREM_S,
  },
]

const alerts: { tag: string; title: string; text: string }[] = [
  { tag: 'Lorem · 2026', title: 'Lorem ipsum dolor sit amet', text: LOREM_M },
  { tag: 'Lorem · 2026', title: 'Consectetur adipiscing elit', text: LOREM_M },
  { tag: 'Lorem · 2025', title: 'Sed do eiusmod tempor', text: LOREM_M },
  { tag: 'Lorem · 2025', title: 'Ut labore et dolore magna', text: LOREM_M },
  { tag: 'Lorem · 2025', title: 'Quis nostrud exercitation', text: LOREM_M },
  { tag: 'Lorem · 2024', title: 'Duis aute irure dolor', text: LOREM_M },
]

export function TaxationPage() {
  const { lang } = useLang()
  const id = lang === 'id'

  return (
    <>
      <PageHero
        label={id ? 'Perpajakan' : 'Taxation'}
        title={id ? 'Strategi, Kepatuhan & Transparansi Pajak' : 'Tax Strategy, Compliance & Transparency'}
        lead={LOREM_M}
        crumbs={[{ label: id ? 'Perpajakan' : 'Taxation' }]}
      />

      {/* 1 — Approach overview */}
      <section className="section">
        <div className="container split-2">
          <div>
            <div className="eyebrow">{id ? 'Pendekatan Kami' : 'Our Approach'}</div>
            <h2 className="section-title">
              {id ? 'Pajak sebagai Bagian dari Tata Kelola' : 'Tax as Part of Good Governance'}
            </h2>
            <p className="section-lead">{LOREM_L}</p>
            <p className="section-lead">{LOREM_M}</p>
          </div>
          <div className="vision-panel" style={{ minHeight: 320 }}>
            <img src="/assets/master/capital-city.jpeg" alt="" loading="lazy" />
            <div className="vision-panel-content">
              <p className="vision-copy">{LOREM_S}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Tax pillars */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head section-head-center">
            <div className="eyebrow">{id ? 'Pilar Perpajakan' : 'Tax Pillars'}</div>
            <h2 className="section-title">
              {id ? 'Enam Area Pengelolaan Pajak' : 'Six Areas of Tax Management'}
            </h2>
            <p className="section-lead">{LOREM_M}</p>
          </div>
          <div className="split-2">
            {pillars.map((pillar) => (
              <div className="info-panel light" style={{ background: '#fff' }} key={pillar.title.en}>
                <h3>{pick(pillar.title, lang)}</h3>
                <ul>
                  {pillar.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Compliance calendar */}
      <section className="section pricing-section">
        <div className="container">
          <div className="section-head section-head-center">
            <div className="eyebrow">{id ? 'Kalender Kepatuhan' : 'Compliance Calendar'}</div>
            <h2 className="section-title">
              {id ? 'Kewajiban Pelaporan Utama' : 'Key Filing Obligations'}
            </h2>
          </div>

          <div className="pricing-meta">
            <span className="chip">{id ? 'Indonesia' : 'Indonesia'}</span>
            <span className="chip">{id ? 'Internasional' : 'International'}</span>
            <span className="chip">Lorem ipsum</span>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>{id ? 'Kewajiban' : 'Obligation'}</th>
                  <th>{id ? 'Frekuensi' : 'Frequency'}</th>
                  <th>{id ? 'Batas Waktu' : 'Deadline'}</th>
                  <th>{id ? 'Catatan' : 'Notes'}</th>
                </tr>
              </thead>
              <tbody>
                {calendarRows.map((row) => (
                  <tr key={row.obligation.en}>
                    <td>
                      <strong>{pick(row.obligation, lang)}</strong>
                    </td>
                    <td>{row.frequency}</td>
                    <td>{row.deadline}</td>
                    <td>
                      <span className="muted">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="form-note" style={{ marginTop: 'var(--space-2)' }}>
            {id
              ? 'Konten di halaman ini masih placeholder (lorem ipsum) dan bukan nasihat pajak. Konfirmasikan setiap kewajiban dengan konsultan pajak resmi.'
              : 'Content on this page is placeholder (lorem ipsum) and not tax advice. Confirm every obligation with a licensed tax advisor.'}
          </p>
        </div>
      </section>

      {/* 4 — Tax alerts */}
      <section className="section section-navy">
        <div className="container">
          <div className="section-head section-head-center">
            <div className="eyebrow">{id ? 'Info Terkini' : 'Tax Alerts'}</div>
            <h2 className="section-title" style={{ color: '#fff' }}>
              {id ? 'Pembaruan Regulasi' : 'Regulatory Updates'}
            </h2>
          </div>
          <div className="storage-grid">
            {alerts.map((alert) => (
              <article className="storage-card" key={alert.title}>
                <span>{alert.tag}</span>
                <h3>{alert.title}</h3>
                <p>{alert.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Guide & contact */}
      <section className="section">
        <div className="container">
          <div
            className="info-panel light"
            style={{ background: '#fff', maxWidth: 720, marginInline: 'auto', textAlign: 'center' }}
          >
            <h3>{id ? 'Panduan Pajak & Konsultasi' : 'Tax Guide & Consultation'}</h3>
            <p>{LOREM_M}</p>
            <div className="profile-actions" style={{ justifyContent: 'center' }}>
              <a className="btn btn-primary" href="#" aria-disabled>
                {id ? 'Panduan Pajak 2026 (PDF)' : 'Tax Guide 2026 (PDF)'}
              </a>
              <a className="btn btn-outline-navy" href={`mailto:${company.email}`}>
                {id ? 'Email Tim Pajak' : 'Email Tax Team'}
              </a>
              <a
                className="btn btn-wa"
                href={waHref(waContacts.info, lang)}
                target="_blank"
                rel="noreferrer"
              >
                <WaIcon /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
