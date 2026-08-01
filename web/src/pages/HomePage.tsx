import { Link } from 'react-router-dom'
import { useEffect, useRef, type ReactNode } from 'react'
import { CtaBand } from '../components/Layout'
import {
  businesses,
  companyDocs,
  pricingDocs,
  pricingOrigin,
  pricingRows,
  projects,
  services,
  team,
  type BusinessGroup,
} from '../data/content'
import { divisionPath } from '../data/divisions'
import { pick, useLang, useT, type StringKey } from '../i18n'

/* ---------------------------------------------------------- */
/* Scroll reveal                                               */
/* ---------------------------------------------------------- */

function useRevealAll<T extends HTMLElement>(rerunKey?: unknown) {
  const ref = useRef<T>(null)

  // Re-runs when rerunKey changes (e.g. language switch remounts the subtree
  // via key={lang}); otherwise the fresh .reveal elements would never be
  // observed and stay at opacity 0.
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [rerunKey])

  return ref
}

/* ---------------------------------------------------------- */
/* Business icons — minimal line set                           */
/* ---------------------------------------------------------- */

const iconPaths: Record<string, ReactNode> = {
  Energy: (
    <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9z" strokeLinejoin="round" />
  ),
  Marine: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <path d="M12 7.5V21M5 12c0 5 3 9 7 9s7-4 7-9M3.5 14.5 5 12l1.5 2.5M18.5 14.5 20 12l1.5 2.5" strokeLinecap="round" />
    </>
  ),
  Storage: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </>
  ),
  Technology: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 7V3.5M14 7V3.5M10 20.5V17M14 20.5V17M7 10H3.5M7 14H3.5M20.5 10H17M20.5 14H17" strokeLinecap="round" />
    </>
  ),
  Capital: (
    <path d="M4 20h16M6 20v-7M10 20V9M14 20v-8M18 20V5M15 5h3v3" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Hotels: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18" strokeLinecap="round" />
      <path d="M7.5 8h2M7.5 12h2M7.5 16h2" strokeLinecap="round" />
    </>
  ),
  Bullion: (
    <>
      <path d="M6 10h6l1.5 5h-9L6 10zM12.5 10h5.5l1.5 5h-6M9 5h6l1 3.5H8L9 5z" strokeLinejoin="round" />
    </>
  ),
  Food: (
    <path d="M12 21c-5 0-8-3.5-8-8 0-5.5 4-9 10-9 3 0 6 1 6 1s-.5 3.5-2 6.5C16.5 15 15 21 12 21zM6 18c3-4 7-7 11-9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  International: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9z" />
    </>
  ),
  Plantation: (
    <path d="M12 21v-8M12 13c0-4-3-7-8-7 0 4 3 7 8 7zM12 10c0-3.5 2.5-6 7-6 0 3.5-2.5 6-7 6z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Pharmaceutical: (
    <>
      <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)" />
      <path d="M8.5 15.5 15.5 8.5" />
    </>
  ),
}

function BizIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      {iconPaths[name] ?? iconPaths.Energy}
    </svg>
  )
}

/* ---------------------------------------------------------- */
/* Business unit sections                                      */
/* ---------------------------------------------------------- */

const bizGroups: { key: BusinessGroup; labelKey: StringKey }[] = [
  { key: 'core', labelKey: 'groupCore' },
  { key: 'invest', labelKey: 'groupInvest' },
  { key: 'global', labelKey: 'groupGlobal' },
]

/**
 * Business unit cards. The full write-up for each unit now lives on its own
 * page (/divisions/<slug>), so the homepage only teases them.
 */
export function BusinessCards() {
  const { lang } = useLang()
  const t = useT()

  return (
    <>
      {bizGroups.map((group) => (
        <div className="biz-group" key={group.key}>
          <div className="biz-group-divider reveal">
            <span>{t(group.labelKey)}</span>
          </div>

          <div className="biz-grid">
            {businesses
              .filter((b) => b.group === group.key)
              .map((b, i) => (
                <Link
                  to={divisionPath(b.slug)}
                  className={`biz-card reveal biz-theme-${b.slug}`}
                  key={b.slug}
                  style={{ ['--reveal-delay' as string]: `${(i % 4) * 80}ms` }}
                >
                  <img src={b.image} alt="" loading="lazy" />
                  <div className="biz-card-body">
                    <div className="biz-card-icon">
                      <BizIcon name={b.label.en} />
                    </div>
                    <h3>{pick(b.label, lang)}</h3>
                    <p>{pick(b.description, lang)}</p>
                    <span className="biz-card-arrow">
                      {t('ecoCta')} <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </>
  )
}

/* ---------------------------------------------------------- */
/* Page                                                        */
/* ---------------------------------------------------------- */

export function HomePage() {
  const { lang } = useLang()
  const t = useT()
  const id = lang === 'id'
  const pageRef = useRevealAll<HTMLDivElement>(lang)

  return (
    <div ref={pageRef} key={lang}>
      {/* 1 — HERO */}
      <section className="hero">
        {/* Extraction and processing rather than a vessel. Three frames
            crossfade on a loop (see .hero-media in global.css). All three are
            1920x1080 — the smaller stock in /assets/master tops out around
            800px wide and visibly softens across a full-height hero. */}
        <div className="hero-media" aria-hidden>
          <img src="/assets/div/energy-cover.jpg" alt="" fetchPriority="high" />
          <img src="/assets/div/energy-photo.jpg" alt="" loading="lazy" />
          <img src="/assets/div/storage-cover.jpg" alt="" loading="lazy" />
        </div>
        <div className="hero-content">
          <ul className="hero-badges reveal">
            <li>{t('heroBadge1')}</li>
            <li>{t('heroBadge2')}</li>
            <li>{t('heroBadge3')}</li>
          </ul>
          <h1 className="reveal" style={{ ['--reveal-delay' as string]: '120ms' }}>
            {t('heroTitle')}
          </h1>
          <p className="hero-lead reveal" style={{ ['--reveal-delay' as string]: '240ms' }}>
            {t('heroLead')}
          </p>
          <div
            className="btn-row hero-actions reveal"
            style={{ ['--reveal-delay' as string]: '360ms' }}
          >
            <Link to="/about" className="btn btn-gold btn-lg">
              {t('heroCta1')}
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              {t('heroCta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — ABOUT */}
      <section className="section" id="about">
        <div className="container overview-grid">
          <div className="overview-media reveal">
            <div className="photo-main reveal-image">
              <img src="/assets/div/home-about.jpg" alt="Oil Rig" />
            </div>
          </div>

          <div>
            <div className="eyebrow reveal">{t('overviewEyebrow')}</div>
            <h2 className="section-title reveal">{t('overviewTitle')}</h2>
            <p className="section-lead reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
              {t('companyAbout')}
            </p>

            {/* Three company-profile documents, exactly as on petrotwogroup.com. */}
            <div
              className="btn-row btn-row-stack overview-actions reveal"
              style={{ ['--reveal-delay' as string]: '200ms' }}
            >
              {companyDocs.map((doc) => (
                <Link key={doc.slug} to={`/${doc.slug}`} className="btn btn-primary btn-block">
                  {doc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — OUR SERVICES */}
      <section className="section section-surface" id="services">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <div className="eyebrow reveal">{id ? 'Layanan Kami' : 'Our Services'}</div>
              <h2 className="section-title reveal">{id ? 'Apa yang Kami Lakukan' : 'What We Do'}</h2>
              <p className="section-lead reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
                Integrated Energy, Logistics, and Strategic Investments for a Connected World
              </p>
            </div>
            <Link to="/services" className="btn btn-outline-navy reveal">
              All Services
            </Link>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <Link
                to={divisionPath(service.division)}
                className="service-card reveal"
                key={service.id}
                style={{ ['--reveal-delay' as string]: `${(i % 2) * 90}ms` }}
              >
                <img src={service.image} alt="" loading="lazy" />
                <div className="service-card-body">
                  <div className="num">[{service.id}]</div>
                  <h3>{service.title}</h3>
                  <p style={{ marginTop: '0.45rem', color: 'rgba(255,255,255,0.72)' }}>
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — BUSINESS DIVISIONS */}
      <section className="section" id="business-divisions">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <div className="eyebrow reveal">{t('ecoEyebrow')}</div>
              <h2 className="section-title reveal">{t('ecoTitle')}</h2>
              <p className="section-lead reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
                {t('ecoLead')}
              </p>
            </div>
            <Link to="/business-divisions" className="btn btn-outline-navy reveal">
              {t('divisionAll')}
            </Link>
          </div>

          <BusinessCards />
        </div>
      </section>

      {/* 5 — OUR TEAM */}
      <section className="section section-surface team-section" id="team">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">{id ? 'Tim Kami' : 'Our Team'}</div>
            <h2 className="section-title reveal">PetroTwo Energy International Team</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <article
                className="team-card reveal"
                key={member.name}
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
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

      {/* 6 — PROJECT EXPERIENCES */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title reveal">Project Experiences</h2>
          </div>
          <ul className="projects-list">
            {projects.map((item, i) => (
              <li
                className="reveal"
                key={item.en}
                style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
              >
                {pick(item, lang)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 — MARKET & PRICING SNAPSHOT */}
      <section className="section section-surface pricing-section" id="pricing">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title reveal">Market &amp; Pricing Snapshot</h2>
            <p className="section-lead reveal">Full Corporate Offer (FCO)</p>
            <p className="section-lead reveal" style={{ color: '#c62828' }}>Expired December 2026</p>
          </div>

          {/* data-label feeds the stacked-card layout the table collapses
              into below 640px — see .table-stack in global.css. */}
          <div className="table-wrap table-stack reveal">
            <table>
              <thead>
                <tr>
                  <th>Items</th>
                  <th>CIF Price</th>
                  <th>FOB Price</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.item}>
                    <td data-label="Items">
                      <strong>{row.item}</strong>
                    </td>
                    <td data-label="CIF Price">{row.cif}</td>
                    <td data-label="FOB Price">{row.fob}</td>
                    <td data-label="Note">
                      <span className="muted">
                        {row.note}
                        <br />
                        {row.contract}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="form-note" style={{ marginTop: 'var(--space-2)', fontSize: '1.125rem' }}>
            Country of Origin: {pricingOrigin}
          </p>

          <div className="btn-row" style={{ marginTop: 'var(--space-3)' }}>
            {pricingDocs.map((doc) => (
              <a
                key={doc.label}
                className="btn btn-outline-navy"
                href={doc.href}
                target="_blank"
                rel="noreferrer"
              >
                {doc.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — LET'S WORK TOGETHER */}
      <CtaBand />
    </div>
  )
}
