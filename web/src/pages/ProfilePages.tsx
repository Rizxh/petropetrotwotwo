import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import {
  companyDocs,
  companyProfilePdf,
  globalBizPage,
  profilePagesAfter,
  profilePagesBefore,
  tankFarmStrategy,
  terminalProjects,
} from '../data/content'
import { useLang, useT } from '../i18n'

/* ------------------------------------------------------------------ */
/* Shared switcher between the three company-profile documents          */
/* ------------------------------------------------------------------ */

function DocSwitcher({ active }: { active: string }) {
  return (
    <div className="doc-switcher">
      {companyDocs.map((doc) => (
        <Link
          key={doc.slug}
          to={`/${doc.slug}`}
          className={doc.slug === active ? 'is-active' : ''}
          aria-current={doc.slug === active ? 'page' : undefined}
        >
          {doc.label}
        </Link>
      ))}
    </div>
  )
}

function DeckSlide({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="deck-slide">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  )
}

/* ------------------------------------------------------------------ */
/* /petrotwo-group — The Power Elite Global Biz                         */
/* Full-width presentation slides matching petrotwogroup.com layout.    */
/* ------------------------------------------------------------------ */

export function CompanyProfilePage() {
  const t = useT()

  return (
    <>
      <section className="profile-cover">
        <img src="/assets/master/capital-city.jpeg" alt="" fetchPriority="high" />
        <div className="container profile-cover-inner">
          <Breadcrumb
            trail={[
              { label: t('overviewEyebrow'), to: '/about' },
              { label: 'PetroTwo Group Company Profile' },
            ]}
          />
          <h1>The Power Elite Global Biz</h1>
          <p>INVESTMENTS/GOLD/ENERGY – OIL &amp; GAS/FOOD &amp; WATER SECURITY/DEVELOPMENT</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <DocSwitcher active="petrotwo-group" />
          <div className="deck-stack">
            {profilePagesBefore.map((src, i) => (
              <DeckSlide key={src} src={src} alt={`Company profile page ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <h2 className="section-title">{tankFarmStrategy}</h2>

          <div className="deck-stack" style={{ marginTop: 'var(--space-5)' }}>
            {terminalProjects.map((project) => (
              <div className="terminal-deck" key={project.name}>
                <h3 className="terminal-deck-title">{project.name}</h3>
                {project.sheets.length > 0 ? (
                  project.sheets.map((sheet) => (
                    <DeckSlide key={sheet} src={sheet} alt={project.name} />
                  ))
                ) : (
                  <DeckSlide src={project.image} alt={project.name} />
                )}
                {project.cta && (
                  <div className="btn-row" style={{ marginTop: 'var(--space-3)' }}>
                    <a
                      className="btn btn-primary"
                      href={companyProfilePdf}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.cta}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="deck-stack">
            {profilePagesAfter.map((src, i) => (
              <DeckSlide key={src} src={src} alt={`Company profile page ${i + 8}`} />
            ))}
          </div>

          <div className="btn-row profile-actions">
            <a className="btn btn-primary" href={companyProfilePdf} target="_blank" rel="noreferrer">
              Open the full company profile (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* /company-profile-pdf — the document itself, rendered in-page         */
/* ------------------------------------------------------------------ */

export function CompanyProfilePdfPage() {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'

  return (
    <>
      <section className="page-hero" data-hero="profile">
        <div className="container">
          <Breadcrumb
            trail={[
              { label: t('overviewEyebrow'), to: '/about' },
              { label: 'PetroTwo Group Company Profile (PDF)' },
            ]}
          />
          <h1>PetroTwo Group Company Profile (PDF)</h1>
          <p>
            {id
              ? 'Dokumen profil perusahaan lengkap, ditampilkan langsung di halaman ini.'
              : 'The full company profile document, rendered in-page.'}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <DocSwitcher active="company-profile-pdf" />

          <div className="doc-viewer">
            <object
              data={`${companyProfilePdf}#view=FitH`}
              type="application/pdf"
              aria-label="PetroTwo Group Company Profile"
            >
              <iframe src={`${companyProfilePdf}#view=FitH`} title="PetroTwo Group Company Profile" />
              <div className="doc-fallback">
                <p>
                  {id
                    ? 'Peramban Anda tidak dapat menampilkan PDF secara langsung.'
                    : 'Your browser cannot display this PDF inline.'}
                </p>
                <a className="btn btn-primary" href={companyProfilePdf} target="_blank" rel="noreferrer">
                  {id ? 'Buka PDF' : 'Open PDF'}
                </a>
              </div>
            </object>
          </div>

          <div className="btn-row profile-actions">
            <a className="btn btn-primary" href={companyProfilePdf} target="_blank" rel="noreferrer">
              {id ? 'Buka di Tab Baru' : 'Open in New Tab'}
            </a>
            <a className="btn btn-outline-navy" href={companyProfilePdf} download>
              {id ? 'Unduh PDF' : 'Download PDF'}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* /globalbiz — OUR GLOBALBIZ                                           */
/* Intro content + full-width presentation slides from the reference.   */
/* ------------------------------------------------------------------ */

export function GlobalBizPage() {
  const g = globalBizPage
  const t = useT()

  return (
    <>
      <section className="profile-cover">
        <img src="/assets/master/marine-lng.jpeg" alt="" fetchPriority="high" />
        <div className="container profile-cover-inner">
          <Breadcrumb
            trail={[{ label: t('overviewEyebrow'), to: '/about' }, { label: 'PetroTwo GlobalBiz' }]}
          />
          <span className="profile-eyebrow">{g.eyebrow}</span>
          <h1>{g.heading}</h1>
          <p>{g.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <DocSwitcher active="globalbiz" />

          <div className="gb-counters">
            {g.counters.map((c) => (
              <div className="gb-counter" key={c.label}>
                <strong>
                  {c.value}
                  <span>{c.suffix}</span>
                </strong>
                <span>{c.label}</span>
              </div>
            ))}
            <p className="gb-counter-note">{g.deliveryNote}</p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <h2 className="section-title">{g.expertiseHeading}</h2>
          <div className="gb-expertise">
            {g.expertise.map((e) => (
              <div key={e.label}>
                <strong>{e.value}</strong>
                <span>{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{g.serviceEyebrow}</div>
            <h2 className="section-title">{g.serviceHeading}</h2>
          </div>
          <div className="gb-services">
            {g.services.map((s) => (
              <article key={s.title}>
                <img src={s.image} alt="" loading="lazy" />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <h2 className="section-title">{g.processHeading}</h2>
          <div className="gb-process">
            {g.process.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{g.whyEyebrow}</div>
            <h2 className="section-title">{g.whyHeading}</h2>
          </div>
          <ul className="gb-why">
            {g.why.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PetroTwo Capital — cover (graphic centered, text below) + letter */}
      <section className="section gb-capital-section">
        <div className="container">
          <div className="gb-capital-hero">
            <figure className="gb-capital-graphic">
              <img src={g.capitalGraphic} alt="" loading="lazy" />
            </figure>
            <h2>{g.capitalHeading}</h2>
            <p className="gb-capital-copyright">{g.capitalCopyright}</p>
          </div>

          <div className="gb-capital-letter">
            {g.capitalBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="gb-signoff">
              {g.signOff.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Presentation deck — one continuous stack, no section breaks */}
      <section className="section gb-deck-section">
        <div className="container">
          <div className="deck-stack deck-stack-flush">
            {[...g.capitalPanels, ...g.deck].map((slide) => (
              <DeckSlide key={slide.image} src={slide.image} alt={slide.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
