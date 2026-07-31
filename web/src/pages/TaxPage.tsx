import { Breadcrumb, WaIcon } from '../components/Layout'
import { company, taxFirm } from '../data/content'
import { useLang, type LS } from '../i18n'

/* ------------------------------------------------------------------ */
/* Tax                                                                  */
/*                                                                      */
/* Tax work for the group is handled by PT Aswangga Konsultan Semesta,  */
/* so this page carries Aswangga's identity (logo, blue palette,        */
/* imagery from its company profile) alongside the PetroTwo mark.       */
/*                                                                      */
/* Layout follows pwc.com/id/en/services/tax-services.html: quote-led   */
/* hero, "Who are we" prose, an "Explore further" link list, the three  */
/* service teams, an experience list, a team panel and a contact card.  */
/*                                                                      */
/* ALL COPY IS TAKEN FROM the Aswangga company profile deck             */
/* (File/PT Aswangga Konsultan Semesta - ComPro (sign) (1).pdf).        */
/* ------------------------------------------------------------------ */

const prose: { heading: LS; body: LS }[] = [
  {
    heading: { en: 'Who are we', id: 'Siapa kami' },
    body: {
      en: 'PT Aswangga Konsultan Semesta is an established firm which specialises in accounting, tax, bookkeeping and consulting services. Our people have more than forty years of experience in their respective fields, and we offer one-stop solution services to add value to our clients’ business.',
      id: 'PT Aswangga Konsultan Semesta adalah firma mapan yang berfokus pada layanan akuntansi, perpajakan, pembukuan, dan konsultasi. Tim kami memiliki pengalaman lebih dari empat puluh tahun di bidangnya masing-masing, dan kami menghadirkan layanan solusi satu pintu untuk menambah nilai bagi bisnis klien.',
    },
  },
  {
    heading: { en: 'Our mission', id: 'Misi kami' },
    body: {
      en: 'Our mission focuses on compliance, operational efficiency, dispute resolution, structuring advice, and other services supporting the sustainable growth of your business.',
      id: 'Misi kami berfokus pada kepatuhan, efisiensi operasional, penyelesaian sengketa, saran penataan struktur, serta layanan lain yang mendukung pertumbuhan berkelanjutan bisnis Anda.',
    },
  },
  {
    heading: { en: 'Aswangga as a stakeholder', id: 'Aswangga dalam grup' },
    body: {
      en: 'Tax, accounting and bookkeeping work across PetroTwo Group is handled by PT Aswangga Konsultan Semesta. The same expertise is available to clients and partners of the group — from multinational structures down to MSMEs — through three dedicated service teams.',
      id: 'Pekerjaan perpajakan, akuntansi, dan pembukuan di lingkungan PetroTwo Group ditangani oleh PT Aswangga Konsultan Semesta. Keahlian yang sama tersedia bagi klien dan mitra grup — mulai dari struktur multinasional hingga UMKM — melalui tiga tim layanan khusus.',
    },
  },
]

/* Service lines drawn from the three team pages of the profile. */
const exploreLinks: LS[] = [
  {
    en: 'Monthly Tax Compliance — WHT Art. 21/23/26/4(2)/25',
    id: 'Kepatuhan Pajak Bulanan — PPh Pasal 21/23/26/4(2)/25',
  },
  {
    en: 'Annual Corporate Income Tax Returns (CITR)',
    id: 'SPT Tahunan Pajak Penghasilan Badan (CITR)',
  },
  { en: 'VAT Reporting', id: 'Pelaporan PPN' },
  { en: 'Tax Review and Tax Diagnostic Review', id: 'Tax Review dan Tax Diagnostic Review' },
  {
    en: 'Tax Dispute Resolution — audits, objections and appeals',
    id: 'Penyelesaian Sengketa Pajak — pemeriksaan, keberatan, dan banding',
  },
  { en: 'International Tax Planning', id: 'Perencanaan Pajak Internasional' },
  { en: 'Transfer Pricing', id: 'Transfer Pricing' },
  { en: 'Expatriate Tax', id: 'Pajak Ekspatriat' },
  { en: 'Tax ID (NPWP) Registration and Final Tax Rate Consulting', id: 'Pendaftaran NPWP dan Konsultasi Tarif Pajak Final' },
  { en: 'Bookkeeping and Accounting Services', id: 'Layanan Pembukuan dan Akuntansi' },
  { en: 'Financial Statements — IFRS and PSAK', id: 'Laporan Keuangan — IFRS dan PSAK' },
  { en: 'Business Consulting and Risk Management', id: 'Konsultasi Bisnis dan Manajemen Risiko' },
]

type Team = {
  tone: 'green' | 'blue' | 'orange'
  name: LS
  scope: LS
  theme: LS
  lines: { label: LS; body: LS }[]
}

const teams: Team[] = [
  {
    tone: 'green',
    name: { en: 'Team Green', id: 'Team Green' },
    scope: { en: 'Multinational Companies', id: 'Perusahaan Multinasional' },
    theme: { en: 'Global Standards & Complexity', id: 'Standar Global & Kompleksitas' },
    lines: [
      {
        label: { en: 'Taxation', id: 'Perpajakan' },
        body: {
          en: 'Monthly Tax Compliance — Withholding Tax (WHT) Art. 21/23/26/4(2)/25, Annual Corporate Income Tax Returns (CITR), tax dispute resolution, tax review, international tax planning, transfer pricing, and expatriate tax.',
          id: 'Kepatuhan Pajak Bulanan — PPh Pasal 21/23/26/4(2)/25, SPT Tahunan PPh Badan (CITR), penyelesaian sengketa pajak, tax review, perencanaan pajak internasional, transfer pricing, dan pajak ekspatriat.',
        },
      },
      {
        label: { en: 'Bookkeeping', id: 'Pembukuan' },
        body: {
          en: 'Multi-entity transaction recording, AR/AP management, and fixed asset registers.',
          id: 'Pencatatan transaksi multi-entitas, pengelolaan piutang/utang usaha, dan register aset tetap.',
        },
      },
      {
        label: { en: 'Accounting', id: 'Akuntansi' },
        body: {
          en: 'Consolidated financial statements, IFRS, PSAK, management reporting, and budgeting.',
          id: 'Laporan keuangan konsolidasi, IFRS, PSAK, pelaporan manajemen, dan penganggaran.',
        },
      },
      {
        label: { en: 'Consulting', id: 'Konsultasi' },
        body: {
          en: 'Internal control, ERP implementation, due diligence, and risk management.',
          id: 'Pengendalian internal, implementasi ERP, uji tuntas, dan manajemen risiko.',
        },
      },
    ],
  },
  {
    tone: 'blue',
    name: { en: 'Team Blue', id: 'Team Blue' },
    scope: { en: 'Local Companies', id: 'Perusahaan Lokal' },
    theme: { en: 'Growth & Operational Efficiency', id: 'Pertumbuhan & Efisiensi Operasional' },
    lines: [
      {
        label: { en: 'Taxation', id: 'Perpajakan' },
        body: {
          en: 'Monthly Tax Compliance — Withholding Tax (WHT) Art. 21/23/26/4(2)/25, Annual Corporate Income Tax Returns (CITR), VAT reporting, tax reviews, and tax dispute resolution.',
          id: 'Kepatuhan Pajak Bulanan — PPh Pasal 21/23/26/4(2)/25, SPT Tahunan PPh Badan (CITR), pelaporan PPN, tax review, dan penyelesaian sengketa pajak.',
        },
      },
      {
        label: { en: 'Bookkeeping', id: 'Pembukuan' },
        body: {
          en: 'Daily transaction recording, bank reconciliation, and debt/receivable management.',
          id: 'Pencatatan transaksi harian, rekonsiliasi bank, dan pengelolaan utang/piutang.',
        },
      },
      {
        label: { en: 'Accounting', id: 'Akuntansi' },
        body: {
          en: 'Monthly and annual financial statements, budgeting, and profitability analysis.',
          id: 'Laporan keuangan bulanan dan tahunan, penganggaran, serta analisis profitabilitas.',
        },
      },
      {
        label: { en: 'Consulting', id: 'Konsultasi' },
        body: {
          en: 'Operational efficiency, cash flow management, financial SOPs, and business planning.',
          id: 'Efisiensi operasional, pengelolaan arus kas, SOP keuangan, dan perencanaan bisnis.',
        },
      },
    ],
  },
  {
    tone: 'orange',
    name: { en: 'Team Orange', id: 'Team Orange' },
    scope: { en: 'MSMEs (UMKM) and Startups', id: 'UMKM dan Startup' },
    theme: { en: 'Foundation & Scaling Up', id: 'Fondasi & Peningkatan Skala' },
    lines: [
      {
        label: { en: 'Taxation', id: 'Perpajakan' },
        body: {
          en: 'Tax ID (NPWP) registration, final tax rate consulting, Monthly Tax Compliance — Withholding Tax (WHT) Art. 21/23/26/4(2)/25, Annual Corporate Income Tax Returns (CITR), and tax dispute resolution.',
          id: 'Pendaftaran NPWP, konsultasi tarif pajak final, Kepatuhan Pajak Bulanan — PPh Pasal 21/23/26/4(2)/25, SPT Tahunan PPh Badan (CITR), dan penyelesaian sengketa pajak.',
        },
      },
      {
        label: { en: 'Bookkeeping', id: 'Pembukuan' },
        body: {
          en: 'Income and expense recording, simple inventory tracking, and cash reconciliation.',
          id: 'Pencatatan pemasukan dan pengeluaran, pemantauan persediaan sederhana, dan rekonsiliasi kas.',
        },
      },
      {
        label: { en: 'Accounting', id: 'Akuntansi' },
        body: {
          en: 'Profit and loss statements, simple balance sheets, and cash flow monitoring.',
          id: 'Laporan laba rugi, neraca sederhana, dan pemantauan arus kas.',
        },
      },
      {
        label: { en: 'Consulting', id: 'Konsultasi' },
        body: {
          en: 'Business mentoring, pricing strategies, and business development.',
          id: 'Pendampingan bisnis, strategi penetapan harga, dan pengembangan usaha.',
        },
      },
    ],
  },
]

/* "Our Experience" table from the profile — sector and assignment. */
const experience: { sector: LS; assignment: LS }[] = [
  {
    sector: { en: 'Drilling', id: 'Pengeboran' },
    assignment: {
      en: 'Corporate Income Tax, VAT, Withholding Taxes, Tax Audits, Tax Objection, Tax Appeal, Tax Diagnostic Review, Tax Advisory, Tax Consultation',
      id: 'PPh Badan, PPN, PPh Potong Pungut, Pemeriksaan Pajak, Keberatan, Banding, Tax Diagnostic Review, Tax Advisory, Konsultasi Pajak',
    },
  },
  {
    sector: { en: 'Education', id: 'Pendidikan' },
    assignment: {
      en: 'Corporate Income Tax, VAT, Withholding Taxes, Tax Diagnostic Review, Tax Advisory, Tax Consultation',
      id: 'PPh Badan, PPN, PPh Potong Pungut, Tax Diagnostic Review, Tax Advisory, Konsultasi Pajak',
    },
  },
  {
    sector: { en: 'Finance & Technology', id: 'Keuangan & Teknologi' },
    assignment: {
      en: 'Corporate Income Tax, VAT, Withholding Taxes, Tax Diagnostic Review, Tax Advisory, Tax Consultation',
      id: 'PPh Badan, PPN, PPh Potong Pungut, Tax Diagnostic Review, Tax Advisory, Konsultasi Pajak',
    },
  },
  {
    sector: { en: 'Manufacture', id: 'Manufaktur' },
    assignment: {
      en: 'Corporate Income Tax, VAT, Withholding Taxes, Tax Audits, Tax Objection, Tax Appeal, Tax Diagnostic Review, Tax Advisory, Tax Consultation',
      id: 'PPh Badan, PPN, PPh Potong Pungut, Pemeriksaan Pajak, Keberatan, Banding, Tax Diagnostic Review, Tax Advisory, Konsultasi Pajak',
    },
  },
  {
    sector: { en: 'Mining', id: 'Pertambangan' },
    assignment: {
      en: 'Tax Audits, Tax Objection, Tax Appeal, Tax Advisory, Tax Consultation',
      id: 'Pemeriksaan Pajak, Keberatan, Banding, Tax Advisory, Konsultasi Pajak',
    },
  },
  {
    sector: { en: 'Oil and Gas', id: 'Minyak dan Gas' },
    assignment: {
      en: 'Corporate Income Tax, VAT, Withholding Taxes, Tax Audits, Tax Objection, Tax Appeal',
      id: 'PPh Badan, PPN, PPh Potong Pungut, Pemeriksaan Pajak, Keberatan, Banding',
    },
  },
]

/* Directory lists at the bottom: the sectors served and the four
   disciplines. Links point at the contact card until dedicated pages
   exist. */
const taxIndustries: LS[] = experience.map((row) => row.sector)

const taxServices: LS[] = [
  { en: 'Taxation', id: 'Perpajakan' },
  { en: 'Bookkeeping', id: 'Pembukuan' },
  { en: 'Accounting', id: 'Akuntansi' },
  { en: 'Consulting', id: 'Konsultasi' },
  { en: 'Transfer Pricing', id: 'Transfer Pricing' },
  { en: 'Tax Dispute Resolution', id: 'Penyelesaian Sengketa Pajak' },
  { en: 'International Tax Planning', id: 'Perencanaan Pajak Internasional' },
  { en: 'Expatriate Tax', id: 'Pajak Ekspatriat' },
  { en: 'Risk Management', id: 'Manajemen Risiko' },
]

export function TaxPage() {
  const { lang } = useLang()
  const id = lang === 'id'
  const t = (s: LS) => s[lang]

  return (
    <div className="tax-page">
      {/* ---- Hero: quote-led, like the PwC service banner ---- */}
      <section className="tax-hero">
        <img className="tax-hero-bg" src="/assets/aswangga/hero-network.jpg" alt="" fetchPriority="high" />
        <div className="container tax-hero-inner">
          <Breadcrumb trail={[{ label: 'Tax' }]} />
          <p className="tax-hero-quote">{taxFirm.tagline}</p>
          <h1>Tax</h1>
          <div className="tax-hero-marks">
            <img
              className="tax-hero-logo"
              src={taxFirm.logo}
              alt={`${taxFirm.name} logo`}
              width="180"
              height="180"
            />
            <span className="tax-hero-divider" aria-hidden />
            <span className="tax-hero-parent">
              <small>{id ? 'Bagian dari' : 'Part of'}</small>
              <strong>{company.legalName}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ---- Prose + contact rail ---- */}
      <section className="section tax-body">
        <div className="container tax-body-grid">
          <div className="tax-prose">
            {prose.map((block) => (
              <article key={block.heading.en}>
                <h2>{t(block.heading)}</h2>
                <p>{t(block.body)}</p>
              </article>
            ))}

            <h2 className="tax-explore-heading">{id ? 'Telusuri lebih lanjut' : 'Explore further'}</h2>
            <ul className="tax-explore">
              {exploreLinks.map((link) => (
                <li key={link.en}>
                  <a href="#contact">
                    {t(link)}
                    <span aria-hidden>›</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside className="tax-contact-card" id="contact">
            <img src={taxFirm.logo} alt="" width="120" height="120" />
            <h3>{id ? 'Hubungi kami' : 'Contact us'}</h3>
            <p className="tax-contact-name">{taxFirm.name}</p>
            <p className="tax-contact-role">{taxFirm.tagline}</p>
            <dl>
              <dt>Tel</dt>
              <dd>
                <a href={`tel:+${taxFirm.phoneDial}`}>{taxFirm.phoneDisplay}</a>
              </dd>
              <dt>WhatsApp</dt>
              <dd>
                <a
                  className="tax-contact-wa"
                  href={`https://wa.me/${taxFirm.phoneDial}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WaIcon /> {taxFirm.phoneDisplay}
                </a>
              </dd>
              <dt>{id ? 'Kantor' : 'Office'}</dt>
              <dd>{taxFirm.address}</dd>
            </dl>
          </aside>
        </div>
      </section>

      {/* ---- Three service teams, straight from the Aswangga profile ---- */}
      <section className="section tax-teams-section">
        <div className="container">
          <h2 className="tax-h2">{id ? 'Layanan kami' : 'Our Services'}</h2>
          <p className="tax-section-lead">
            {id
              ? 'PT Aswangga Konsultan Semesta menyediakan layanan profesional di bidang akuntansi, perpajakan, pembukuan, dan konsultasi. Keahlian kami dibagi ke dalam tiga tim khusus agar dampaknya maksimal.'
              : 'PT Aswangga Konsultan Semesta provides professional accounting, tax, bookkeeping and consulting services. We divide our expertise into three dedicated teams to provide maximum impact.'}
          </p>
          <div className="tax-team-grid">
            {teams.map((team) => (
              <article className="tax-team" data-tone={team.tone} key={team.tone}>
                <h3>{t(team.name)}</h3>
                <p className="tax-team-scope">{t(team.scope)}</p>
                <p className="tax-team-theme">{t(team.theme)}</p>
                <dl className="tax-team-lines">
                  {team.lines.map((line) => (
                    <div key={line.label.en}>
                      <dt>{t(line.label)}</dt>
                      <dd>{t(line.body)}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Experience by sector ---- */}
      <section className="section tax-experience-section">
        <div className="container">
          <h2 className="tax-h2">{id ? 'Pengalaman kami' : 'Our Experience'}</h2>
          <p className="tax-section-lead">
            {id
              ? 'Pengalaman kami di berbagai industri sebagai berikut.'
              : 'Our experience in various industries is as follows.'}
          </p>
          <ul className="tax-exp-list">
            {experience.map((row) => (
              <li key={row.sector.en}>
                <strong>{t(row.sector)}</strong>
                <p>{t(row.assignment)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Professional team panel ---- */}
      <section className="section tax-publication-section">
        <div className="container tax-publication">
          <img src="/assets/aswangga/team-meeting.jpeg" alt="" loading="lazy" />
          <div>
            <h2>{id ? 'Tim profesional kami' : 'Our Professional Team'}</h2>
            <p>
              {id
                ? 'Tim profesional kami terdiri dari Partner, Director, Senior Manager, Manager, Assistant Manager, Senior Associate, dan Associate. Seluruh jenjang memberikan yang terbaik sesuai kebutuhan klien dan karakter industrinya. Para Partner kami memiliki pengalaman lebih dari empat puluh tahun di bidangnya masing-masing.'
                : 'Our professional team consists of Partner, Director, Senior Manager, Manager, Assistant Manager, Senior Associate and Associate. Every level gives their best to serve based on client needs and industry specifics. Our partners have more than forty years of experience in their respective fields.'}
            </p>
            <a className="tax-btn tax-btn-solid" href="#contact">
              {id ? 'Hubungi tim kami' : 'Talk to our team'}
            </a>
          </div>
        </div>
      </section>

      {/* ---- Industries / Services directory (PwC-style) ---- */}
      <section className="tax-directory">
        <div className="container tax-directory-grid">
          <div>
            <h2>{id ? 'Industri' : 'Industries'}</h2>
            <ul>
              {taxIndustries.map((item) => (
                <li key={item.en}>
                  <a href="#contact">{t(item)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{id ? 'Layanan' : 'Services'}</h2>
            <ul>
              {taxServices.map((item) => (
                <li key={item.en}>
                  <a href="#contact">{t(item)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
