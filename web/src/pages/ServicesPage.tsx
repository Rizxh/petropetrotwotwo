import { CtaBand, PageHero, WaIcon } from '../components/Layout'
import { company, pricingRows, projects, services, waContacts, waHref } from '../data/content'
import { pick, useLang, useT } from '../i18n'

/** Translate recurring pricing-note patterns to Indonesian. */
function noteId(note: string) {
  return note
    .replace('Min ', 'Min. ')
    .replace('Max ', 'Maks. ')
    .replace(' trial', ' uji coba')
    .replace(' monthly', ' per bulan')
    .replace('× 12 months', '× 12 bulan')
    .replace('Contract ≥ 2 years.', 'Kontrak ≥ 2 tahun.')
}

const serviceCopyId: Record<string, { title: string; description: string }> = {
  '01': {
    title: 'Perdagangan Minyak & Gas',
    description:
      'Perdagangan minyak fisik berbasis pengiriman dengan kontrak jangka panjang maupun spot, mencakup minyak mentah dan produk olahan.',
  },
  '02': {
    title: 'Transportasi & Logistik BBM',
    description:
      'Koordinasi kargo bahan bakar yang andal melalui mitra pelayaran terpercaya, operasi STS, dan dukungan armada.',
  },
  '03': {
    title: 'Terminal & Infrastruktur',
    description:
      'Pengembangan tank farm, terminal, dan fasilitas penyimpanan untuk memperkuat jaringan energi regional.',
  },
  '04': {
    title: 'Investasi & Sumber Daya Strategis',
    description:
      'Partisipasi dalam proyek investasi bernilai tinggi di sektor energi, logam, ketahanan pangan & air, dan infrastruktur.',
  },
}

export function ServicesPage() {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'

  return (
    <>
      <PageHero
        title={id ? 'Proyek & Layanan Kami' : 'Our Projects & Services'}
        lead={
          id
            ? 'Empat lini layanan inti yang menopang rantai nilai energi, didukung rekam jejak proyek berskala kawasan.'
            : 'Four core service lines supporting the energy value chain, backed by a regional-scale project track record.'
        }
        crumbs={[{ label: t('navProjects') }]}
      />

      <section className="section section-surface">
        <div className="container">
          <div className="section-head section-head-center">
            <div className="eyebrow">{id ? 'Apa yang Kami Lakukan' : 'What We Do'}</div>
            <h2 className="section-title">{id ? 'Empat Lini Layanan Inti' : 'Four Core Service Lines'}</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const copy = id ? serviceCopyId[service.id] : null
              return (
                <article className="service-card" key={service.id}>
                  <img src={service.image} alt="" loading="lazy" />
                  <div className="service-card-body">
                    <div className="num">[{service.id}]</div>
                    <h3>{copy ? copy.title : service.title}</h3>
                    <p style={{ marginTop: '0.45rem', color: 'rgba(255,255,255,0.72)' }}>
                      {copy ? copy.description : service.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{id ? 'Kapabilitas' : 'Capability'}</div>
            <h2 className="section-title">{id ? 'Rekam Jejak Proyek' : 'Project Experiences'}</h2>
            <p className="section-lead">
              {id
                ? 'Pengalaman tim kami mencakup proyek tangki dan terminal unggulan di berbagai kawasan.'
                : 'Our team’s experience spans flagship tank and terminal projects across regions.'}
            </p>
          </div>
          <ul className="projects-list">
            {projects.map((item) => (
              <li key={item.en}>{pick(item, lang)}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export function PricingPage() {
  const { lang } = useLang()
  const id = lang === 'id'

  return (
    <>
      <PageHero
        label={id ? 'Harga Minyak & Gas' : 'Oil & Gas Price'}
        title={id ? 'Ringkasan Pasar & Harga' : 'Market & Pricing Snapshot'}
        lead={
          id
            ? 'Harga referensi Full Corporate Offer (FCO). Hubungi meja perdagangan kami untuk konfirmasi terkini dan prosedur.'
            : 'Full Corporate Offer (FCO) reference pricing. Contact our desk for live confirmation and procedures.'
        }
        crumbs={[{ label: id ? 'Harga Minyak & Gas' : 'Oil & Gas Price' }]}
      />

      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-meta">
            <span className="chip">Full Corporate Offer (FCO)</span>
            <span className="chip">
              {id ? 'Asal' : 'Origin'}: Kazakhstan / Indonesia / Dubai / {id ? 'Afrika' : 'Africa'} / Oman /
              Nigeria
            </span>
            <span className="chip">CIF & FOB</span>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>{id ? 'Komoditas' : 'Items'}</th>
                  <th>{id ? 'Harga CIF' : 'CIF Price'}</th>
                  <th>{id ? 'Harga FOB' : 'FOB Price'}</th>
                  <th>{id ? 'Catatan' : 'Note'}</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.item}>
                    <td>
                      <strong>{row.item}</strong>
                    </td>
                    <td>{row.cif}</td>
                    <td>{row.fob}</td>
                    <td>
                      <span className="muted">{id ? noteId(row.note) : row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="form-note" style={{ marginTop: 'var(--space-2)' }}>
            {id
              ? 'Harga bersifat indikatif dan dapat berubah mengikuti kondisi pasar. Konfirmasi akhir melalui meja perdagangan.'
              : 'Prices are indicative and subject to market movement. Final confirmation via our trading desk.'}
          </p>

          <div className="profile-actions" style={{ marginTop: 'var(--space-3)' }}>
            <a className="btn btn-primary" href="/assets/PetroTwo-Company-Profile-2026.pdf">
              {id ? 'Sales Kit STS 2026' : 'Sales Kit STS 2026'}
            </a>
            <a className="btn btn-outline-navy" href={`mailto:${company.orderEmail}`}>
              {id ? 'Minta Prosedur CIF' : 'Request CIF Procedure'}
            </a>
            <a className="btn btn-outline-navy" href={`mailto:${company.orderEmail}`}>
              {id ? 'Minta Prosedur FOB' : 'Request FOB Procedure'}
            </a>
            <a
              href={waHref(waContacts.order, lang)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
            >
              <WaIcon /> Order Oil via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
