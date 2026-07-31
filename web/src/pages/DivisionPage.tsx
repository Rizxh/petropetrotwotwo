import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import { businessDivisionsPage, businesses } from '../data/content'
import { divisionBySlug, divisionPath } from '../data/divisions'
import { pick, useLang, useT } from '../i18n'

/* ------------------------------------------------------------------ */
/* Index — every division as a card                                     */
/* ------------------------------------------------------------------ */

export function DivisionsIndexPage() {
  const { lang } = useLang()
  const p = businessDivisionsPage

  return (
    <>
      <section className="page-hero" data-hero="divisions">
        <div className="container">
          <Breadcrumb trail={[{ label: p.title }]} />
          <h1>{p.title}</h1>
          <p>{p.tagline}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container bd-intro">
          <div>
            <div className="eyebrow">{p.introEyebrow}</div>
            <h2 className="section-title">{p.introHeading}</h2>
            {p.introBody.map((paragraph) => (
              <p className="bd-intro-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="bd-list">
            <h3>{p.listHeading}</h3>
            <ol>
              {p.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* Named divisions with their core function lists */}
      {p.entries.map((entry, i) => (
        <section
          className={`section ${i % 2 === 0 ? 'section-surface' : ''}`}
          key={entry.name}
          id={entry.name.toLowerCase().replace(/\s+/g, '-')}
        >
          <div className={`container bd-entry ${i % 2 === 1 ? 'reverse' : ''}`}>
            <figure className="bd-entry-media">
              <img src={entry.image} alt="" loading="lazy" />
            </figure>
            <div>
              <div className="eyebrow">{entry.eyebrow}</div>
              <h2 className="section-title">{entry.name}</h2>
              {entry.body.map((paragraph) => (
                <p className="bd-entry-copy" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <h4 className="bd-entry-list-label">{entry.listLabel}</h4>
              <ul className="bd-entry-list">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* The eleven operating units, each linking to its own page */}
      <section className="section">
        <div className="container">
          <div className="biz-grid">
            {businesses.map((b) => (
              <Link to={divisionPath(b.slug)} className="biz-card" key={b.slug}>
                <img src={b.image} alt="" loading="lazy" />
                <div className="biz-card-body">
                  <h3>{pick(b.label, lang)}</h3>
                  <p>{pick(b.description, lang)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Detail — one page per division: cover, then description + photo      */
/* ------------------------------------------------------------------ */

export function DivisionPage({ slug }: { slug: string }) {
  const { lang } = useLang()
  const t = useT()
  const division = divisionBySlug(slug)

  if (!division) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="section-title">
            {lang === 'id' ? 'Divisi tidak ditemukan' : 'Division not found'}
          </h1>
          <p className="section-lead">
            <Link to="/business-divisions">{t('divisionAll')}</Link>
          </p>
        </div>
      </section>
    )
  }

  const label = pick(division.label, lang)

  return (
    <div className="division-page" data-division={division.theme}>
      {/* Section 1 — full-bleed cover */}
      <section className="division-cover">
        <img src={division.cover} alt="" fetchPriority="high" />
        <div className="container division-cover-inner">
          <Breadcrumb trail={[{ label: t('navDivisions'), to: '/business-divisions' }, { label }]} />
          <h1>{label}</h1>
        </div>
      </section>

      {/* Section 2 — short description beside a single photo */}
      <section className="division-about">
        <div className="container division-about-grid">
          <div className="division-about-copy">
            <p className="division-about-tagline">{pick(division.tagline, lang)}</p>
            <p>{pick(division.description, lang)}</p>
          </div>
          <figure className="division-about-photo">
            <img src={division.photo} alt="" loading="lazy" />
          </figure>
        </div>
      </section>
    </div>
  )
}
