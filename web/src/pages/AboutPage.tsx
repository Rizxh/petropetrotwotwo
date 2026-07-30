import { CtaBand, PageHero } from '../components/Layout'
import { company, team, waLink } from '../data/content'
import { pick, useLang, useT } from '../i18n'

export function AboutPage() {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'

  const missionItems = id
    ? [
        'Menyediakan layanan perdagangan minyak internasional yang andal dan patuh regulasi',
        'Mengembangkan infrastruktur energi strategis di Indonesia',
        'Membangun kemitraan jangka panjang dengan pemangku kepentingan global',
        'Mendukung ketahanan energi nasional dan regional',
      ]
    : company.mission

  return (
    <>
      <PageHero
        label={t('navAbout')}
        title={
          id
            ? 'Mitra Global Terpercaya di Bidang Energi dan Infrastruktur'
            : 'A Trusted Global Partner in Energy and Infrastructure'
        }
        lead={t('companyAbout')}
        crumbs={[{ label: t('navAbout') }]}
      />

      <section className="section">
        <div className="container split-2">
          <div>
            <div className="eyebrow">{id ? 'Sekilas' : 'Overview'}</div>
            <h2 className="section-title">{id ? 'Potret Korporasi' : 'Corporate Snapshot'}</h2>
            <p className="section-lead">
              {id
                ? 'Perdagangan minyak internasional dan investasi energi strategis, berfokus pada pasokan energi fisik, operasi berbasis logistik, dan pengembangan infrastruktur jangka panjang.'
                : 'International oil trading and strategic energy investment, focused on physical energy supply, logistics-backed operations, and long-term infrastructure development.'}
            </p>
            <div className="profile-actions">
              <a
                className="btn btn-primary"
                href="/assets/PetroTwo-Company-Profile-2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {id ? 'Profil Perusahaan (PDF)' : 'Company Profile PDF'}
              </a>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-outline-navy">
                {id ? 'Bicara dengan Kami' : 'Speak With Us'}
              </a>
            </div>
          </div>
          <div className="vision-panel" style={{ minHeight: 380 }}>
            <img src="/assets/master/hotels-hq.jpeg" alt="" />
            <div className="vision-panel-content">
              <div className="vision-year">2040</div>
              <p className="vision-copy">
                {id
                  ? 'Memperkuat ketahanan energi melalui keunggulan perdagangan dan infrastruktur berbasis aset.'
                  : 'Powering energy security through trading excellence and asset-backed infrastructure.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{id ? 'Arah Perusahaan' : 'Direction'}</div>
            <h2 className="section-title">{id ? 'Visi & Misi' : 'Vision & Mission'}</h2>
          </div>
          <div className="split-2">
            <div className="info-panel">
              <h3>{t('visionTitle')}</h3>
              <p>{t('visionText')}</p>
            </div>
            <div className="info-panel">
              <h3>{t('missionTitle')}</h3>
              <ul>
                {missionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-2">
          <div>
            <div className="eyebrow">{id ? 'Nilai Kami' : 'Our Values'}</div>
            <h2 className="section-title">{id ? 'Beroperasi dengan Integritas' : 'Operating With Integrity'}</h2>
            <p className="section-lead">
              {id
                ? 'PetroTwo Energy meyakini bahwa kepercayaan Anda adalah hal utama, dan melakukan hal yang benar selalu menjadi pilihan terbaik. Nilai Inti, Kode Etik, dan kebijakan perusahaan kami mencerminkan komitmen menjalankan bisnis dengan integritas.'
                : company.values}
            </p>
          </div>
          <div className="mv-grid" style={{ marginTop: 0 }}>
            <div className="mv-item">
              <h4>{id ? 'Integritas' : 'Integrity'}</h4>
              <p>
                {id
                  ? 'Kepatuhan penuh terhadap regulasi di setiap yurisdiksi tempat kami beroperasi.'
                  : 'Full regulatory compliance in every jurisdiction where we operate.'}
              </p>
            </div>
            <div className="mv-item">
              <h4>{id ? 'Presisi' : 'Precision'}</h4>
              <p>
                {id
                  ? 'Eksekusi yang akurat dan tepat waktu di seluruh rantai pasok.'
                  : 'Accurate, on-time execution across the entire supply chain.'}
              </p>
            </div>
            <div className="mv-item">
              <h4>{id ? 'Kemitraan' : 'Partnership'}</h4>
              <p>
                {id
                  ? 'Hubungan jangka panjang yang dibangun di atas kepercayaan dan hasil nyata.'
                  : 'Long-term relationships built on trust and delivered results.'}
              </p>
            </div>
            <div className="mv-item">
              <h4>{id ? 'Ketahanan' : 'Resilience'}</h4>
              <p>
                {id
                  ? 'Portofolio terdiversifikasi yang tangguh menghadapi siklus pasar.'
                  : 'A diversified portfolio resilient through market cycles.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{id ? 'Kepemimpinan' : 'Leadership'}</div>
            <h2 className="section-title">{id ? 'Dewan & Manajemen' : 'Board & Management'}</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-card-body">
                  <span>{pick(member.role, lang)}</span>
                  <h3>{member.name}</h3>
                </div>
              </article>
            ))}
          </div>

          <p className="team-note">
            {id
              ? 'Membawa lebih dari 25 tahun pengalaman di sektor energi pada operasi hidrokarbon lepas pantai, hulu, dan hilir, dengan rekam jejak terbukti memimpin proyek MOPEX fast-track yang kompleks secara teknis di pasar internasional.'
              : 'Brings over 25 years of experience in the energy sector across offshore, upstream, and downstream hydrocarbon operations, with a proven track record in leading fast-track, technically complex MOPEX projects across international markets.'}
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
