import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import {
  companyDocs,
  companyProfilePdf,
  globalBizPage,
  profileClosingSlide,
  profilePagesAfter,
  profilePagesBefore,
  tankFarmStrategy,
  tankFarmStrategyImage,
  terminalProjects,
} from '../data/content'
import { useLang, useT, useTr } from '../i18n'

/* ------------------------------------------------------------------ */
/* Shared switcher between the three company-profile documents          */
/* ------------------------------------------------------------------ */

function DocSwitcher({ active }: { active: string }) {
  const tr = useTr()
  return (
    <div className="doc-switcher">
      {companyDocs.map((doc) => (
        <Link
          key={doc.slug}
          to={`/${doc.slug}`}
          className={doc.slug === active ? 'is-active' : ''}
          aria-current={doc.slug === active ? 'page' : undefined}
        >
          {tr(doc.label)}
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
  const tr = useTr()
  const t = useT()

  return (
    <>
      <section className="profile-cover" data-cover="group">
        <div className="container profile-cover-inner">
          <Breadcrumb
            trail={[
              { label: t('overviewEyebrow'), to: '/about' },
              { label: tr('PetroTwo Group Company Profile') },
            ]}
          />
          <h1>The Power Elite Global Biz</h1>
          <p>{tr('INVESTMENTS/GOLD/ENERGY – OIL & GAS/FOOD & WATER SECURITY/DEVELOPMENT')}</p>
        </div>
      </section>

      {/* One continuous deck: every board butts against the next, with the
          tank farm heading and terminal titles running inline rather than
          splitting the page into separate blocks. */}
      <section className="section">
        <div className="container">
          <DocSwitcher active="petrotwo-group" />

          <div className="profile-deck">
            {profilePagesBefore.map((src, i) => (
              <DeckSlide key={src} src={src} alt={`Company profile page ${i + 1}`} />
            ))}

            <h2 className="profile-deck-heading">{tr(tankFarmStrategy)}</h2>
            <DeckSlide src={tankFarmStrategyImage} alt={tankFarmStrategy} />

            {terminalProjects.map((project) => (
              <Fragment key={project.name}>
                <h3 className="profile-deck-subheading">{tr(project.name)}</h3>
                {(project.sheets.length > 0 ? project.sheets : [project.image]).map((sheet) => (
                  <DeckSlide key={sheet} src={sheet} alt={project.name} />
                ))}
                {project.cta && (
                  <div className="profile-deck-cta">
                    <a
                      className="btn btn-primary"
                      href={companyProfilePdf}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {tr(project.cta)}
                    </a>
                  </div>
                )}
              </Fragment>
            ))}

            {profilePagesAfter.map((src, i) => (
              <DeckSlide key={src} src={src} alt={`Company profile page ${i + 8}`} />
            ))}
            {/* Network and contact board closes the deck. */}
            <DeckSlide src={profileClosingSlide} alt="PetroTwo Group network and collaborations" />
          </div>

          <div className="btn-row profile-actions">
            <a className="btn btn-primary" href={companyProfilePdf} target="_blank" rel="noreferrer">
              {tr('Open the full company profile (PDF)')}
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
  const tr = useTr()
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'

  return (
    <>
      <section className="page-hero" data-hero="profile">
        <div className="container page-hero-inner">
          <Breadcrumb
            trail={[
              { label: t('overviewEyebrow'), to: '/about' },
              { label: tr('PetroTwo Group Company Profile (PDF)') },
            ]}
          />
          <div className="page-hero-copy">
            <p className="page-hero-label">{id ? 'Dokumen' : 'Document'}</p>
            <h1>{tr('PetroTwo Group Company Profile (PDF)')}</h1>
            <p className="page-hero-lead">
              {id
                ? 'Dokumen profil perusahaan lengkap, ditampilkan langsung di halaman ini.'
                : 'The full company profile document, rendered in-page.'}
            </p>
          </div>
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
  const tr = useTr()
  const g = globalBizPage
  const t = useT()

  /* The full board order, cover first. The letter sits between the cover
     and the rest, so the two are split here. */
  const [deckCover, ...deckRest] = [...g.capitalPanels, ...g.deck]

  return (
    <>
      <section className="profile-cover" data-cover="globalbiz">
        <div className="container profile-cover-inner">
          <Breadcrumb
            trail={[{ label: t('overviewEyebrow'), to: '/about' }, { label: 'PetroTwo GlobalBiz' }]}
          />
          <span className="profile-eyebrow">{tr(g.eyebrow)}</span>
          <h1>{tr(g.heading)}</h1>
          <p>{tr(g.intro)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <DocSwitcher active="globalbiz" />

          <div className="gb-counters">
            {g.counters.map((c) => (
              <div className="gb-counter" key={c.label}>
                <strong>
                  {tr(c.value)}
                  <span>{tr(c.suffix)}</span>
                </strong>
                <span>{tr(c.label)}</span>
              </div>
            ))}
            <p className="gb-counter-note">{tr(g.deliveryNote)}</p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <h2 className="section-title">{tr(g.expertiseHeading)}</h2>
          <div className="gb-expertise">
            {g.expertise.map((e) => (
              <div key={e.label}>
                <strong>{tr(e.value)}</strong>
                <span>{tr(e.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{tr(g.serviceEyebrow)}</div>
            <h2 className="section-title">{tr(g.serviceHeading)}</h2>
          </div>
          <div className="gb-services">
            {g.services.map((s) => (
              <article key={s.title}>
                <img src={s.image} alt="" loading="lazy" />
                <div>
                  <h3>{tr(s.title)}</h3>
                  <p>{tr(s.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <h2 className="section-title">{tr(g.processHeading)}</h2>
          <div className="gb-process">
            {g.process.map((step) => (
              <article key={step.title}>
                <h3>{tr(step.title)}</h3>
                <p>{tr(step.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{tr(g.whyEyebrow)}</div>
            <h2 className="section-title">{tr(g.whyHeading)}</h2>
          </div>
          <ul className="gb-why">
            {g.why.map((item) => (
              <li key={item}>{tr(item)}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* One continuous deck, same structure as /petrotwo-group: every board
          full width, one per row. The CEO letter breaks the run directly
          after the cover board. */}
      <section className="section gb-deck-section">
        <div className="container">
          <div className="profile-deck">
            <DeckSlide src={deckCover.image} alt={deckCover.title} />

            <div className="profile-deck-letter">
              {g.capitalBody.map((paragraph) => (
                <p key={paragraph}>{tr(paragraph)}</p>
              ))}
              <p className="gb-signoff">
                {g.signOff.map((line) => (
                  <span key={line}>{tr(line)}</span>
                ))}
              </p>
            </div>

            {deckRest.map((slide) => (
              <DeckSlide key={slide.image} src={slide.image} alt={slide.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
