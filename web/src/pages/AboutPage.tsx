import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import { aboutPage, team } from '../data/content'
import { pick, useLang } from '../i18n'

/* Copy on this page is transcribed from petrotwogroup.com/about/. */

export function AboutPage() {
  const { lang } = useLang()
  const id = lang === 'id'
  const p = aboutPage

  return (
    <>
      <section className="page-hero" data-hero="about">
        <div className="container page-hero-inner">
          <Breadcrumb trail={[{ label: p.title }]} />
          <div className="page-hero-copy">
            <p className="page-hero-label">{id ? 'Tentang Kami' : 'About Us'}</p>
            <h1>{p.title}</h1>
            <p className="page-hero-lead">{p.tagline}</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container ab-intro">
          <figure className="ab-intro-media">
            <img src="/assets/master/news-signing.jpeg" alt="" loading="lazy" />
          </figure>
          <div>
            <div className="eyebrow">{p.introEyebrow}</div>
            <h2 className="section-title">{p.introHeading}</h2>
            {p.introBody.map((paragraph) => (
              <p className="ab-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="btn-row" style={{ marginTop: 'var(--space-4)' }}>
              <Link to="/contact" className="btn btn-primary">
                {p.introCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-navy">
        <div className="container">
          <div className="ab-vision">
            <span className="ab-label">{p.visionLabel}</span>
            <p>{p.vision}</p>
          </div>

          <div className="ab-mission-head">
            <span className="ab-label">{p.missionLabel}</span>
            <h2 className="section-title">{p.missionHeading}</h2>
            <p className="section-lead">{p.missionLead}</p>
          </div>

          <div className="ab-pillars">
            {p.missionPillars.map((pillar) => (
              <article key={pillar.title}>
                {/* alt is empty on purpose — the heading below already names
                    the pillar, so alt text would only duplicate it. */}
                <figure className="ab-pillar-media">
                  <img src={pillar.image} alt="" loading="lazy" />
                </figure>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">{p.valuesLabel}</h2>
            <p className="section-lead">{p.valuesLead}</p>
            <p className="section-lead">{p.valuesLead2}</p>
          </div>

          <div className="ab-values">
            {p.values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate structures */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">{p.entitiesHeading}</h2>
          </div>
          <div className="ab-numbered">
            {p.entities.map((entity) => (
              <article key={entity.num}>
                <span className="svc-num">[{entity.num}]</span>
                <h3>{entity.title}</h3>
                <p>{entity.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{p.expertiseEyebrow}</div>
            <h2 className="section-title">{p.expertiseHeading}</h2>
            <p className="section-lead">{p.expertiseLead}</p>
          </div>
          <div className="ab-numbered">
            {p.expertise.map((item) => (
              <article key={item.num}>
                <span className="svc-num">[{item.num}]</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section-surface team-section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">PetroTwo Energy International Team</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-card-media">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  {member.bio.en ? (
                    <p className="team-card-bio">{pick(member.bio, lang)}</p>
                  ) : null}
                </div>
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <span>{pick(member.role, lang)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
