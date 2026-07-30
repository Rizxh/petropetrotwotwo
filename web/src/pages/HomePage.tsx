import { Link } from 'react-router-dom'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { CtaBand } from '../components/Layout'
import {
  businesses,
  featuredProjects,
  globalPresence,
  newsItems,
  partners,
  sectorDetails,
  stats,
  visionTimeline,
  waContacts,
  waHref,
  type BusinessGroup,
} from '../data/content'
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
/* Animated counter                                            */
/* ---------------------------------------------------------- */

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setDisplay(value)
          return
        }
        const duration = 1600
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(Math.round(value * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref} className="stat-value">
      {display.toLocaleString('en-US')}
      <span className="suffix">{suffix}</span>
    </span>
  )
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

function BusinessSections() {
  const { lang } = useLang()
  const t = useT()

  return (
    <>
      {bizGroups.map((group) => (
        <div className="biz-group" key={group.key}>
          <div className="biz-group-divider reveal">
            <span>{t(group.labelKey)}</span>
          </div>

          {businesses
            .filter((b) => b.group === group.key)
            .map((b) => {
              const slug = b.to.split('/').pop() ?? ''
              const detail = sectorDetails[slug]
              const reverse = businesses.indexOf(b) % 2 === 1

              return (
                <article className={`biz-detail ${reverse ? 'reverse' : ''}`} id={slug} key={b.to}>
                  <div className="biz-detail-media reveal reveal-image">
                    <img src={b.image} alt={pick(b.label, lang)} loading="lazy" />
                  </div>

                  <div className="biz-detail-body">
                    <div className="biz-detail-head reveal">
                      <div className="biz-card-icon">
                        <BizIcon name={b.label.en} />
                      </div>
                      <h3>{pick(b.label, lang)}</h3>
                    </div>
                    <p className="biz-detail-desc reveal" style={{ ['--reveal-delay' as string]: '80ms' }}>
                      {pick(b.description, lang)}
                    </p>

                    {detail && (
                      <div className="reveal" style={{ ['--reveal-delay' as string]: '160ms' }}>
                        <h4 className="biz-detail-heading">{pick(detail.heading, lang)}</h4>
                        {detail.intro && <p className="biz-detail-intro">{pick(detail.intro, lang)}</p>}

                        <div className="biz-detail-points">
                          {detail.groups.map((pointGroup) => (
                            <div className="biz-detail-panel" key={pointGroup.title.en}>
                              <h5>{pick(pointGroup.title, lang)}</h5>
                              <ul>
                                {pointGroup.points.map((point) => (
                                  <li key={point.en}>{pick(point, lang)}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {detail.note && <p className="biz-detail-note">{pick(detail.note, lang)}</p>}
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
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
  const pageRef = useRevealAll<HTMLDivElement>(lang)

  return (
    <div ref={pageRef} key={lang}>
      {/* 2 — HERO */}
      <section className="hero">
        <div className="hero-media" aria-hidden>
          <img src="/assets/master/marine-lng.jpeg" alt="" fetchPriority="high" />
        </div>
        <div className="hero-content">
          <div className="hero-kicker reveal">{t('heroKicker')}</div>
          <h1 className="reveal" style={{ ['--reveal-delay' as string]: '120ms' }}>
            {t('heroTitle')}
          </h1>
          <p className="hero-lead reveal" style={{ ['--reveal-delay' as string]: '240ms' }}>
            {t('heroLead')}
          </p>
          <div className="hero-actions reveal" style={{ ['--reveal-delay' as string]: '360ms' }}>
            <Link to="/about" className="btn btn-gold btn-lg">
              {t('heroCta1')}
            </Link>
            <a
              href={waHref(waContacts.info, lang)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-lg"
            >
              {t('heroCta2')}
            </a>
          </div>
        </div>
      </section>

      {/* 3 — STRATEGIC PARTNERS */}
      <section className="partners-band" aria-label={t('partnersTitle')}>
        <p className="partners-title">{t('partnersTitle')}</p>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div className="marquee-track" key={dup} aria-hidden={dup === 1}>
              {partners.map((name) => (
                <span className="partner-mark" key={`${dup}-${name}`}>
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 3 — COMPANY OVERVIEW */}
      <section className="section" id="overview">
        <div className="container overview-grid">
          <div className="overview-media reveal">
            <div className="photo-main reveal-image">
              <img src="/assets/master/news-signing.jpeg" alt="PetroTwo Group NDA & MOU signing ceremony" />
            </div>
            <div className="photo-float">
              <img src="/assets/master/hotels-hq.jpeg" alt="PetroTwo headquarters development" />
            </div>
            <div className="experience-chip">
              <strong>25</strong>
              <span>{t('experienceLabel')}</span>
            </div>
          </div>

          <div>
            <div className="eyebrow reveal">{t('overviewEyebrow')}</div>
            <h2 className="section-title reveal">{t('overviewTitle')}</h2>
            <p className="section-lead reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
              {t('companyAbout')}
            </p>

            <div className="mv-grid">
              <div className="mv-item reveal" style={{ ['--reveal-delay' as string]: '160ms' }}>
                <h4>{t('missionTitle')}</h4>
                <p>{t('missionText')}</p>
              </div>
              <div className="mv-item reveal" style={{ ['--reveal-delay' as string]: '240ms' }}>
                <h4>{t('visionTitle')}</h4>
                <p>{t('visionText')}</p>
              </div>
            </div>

            <div className="overview-actions reveal" style={{ ['--reveal-delay' as string]: '320ms' }}>
              <Link to="/about" className="btn btn-primary">
                {t('readMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — VISION 2040 */}
      <section className="section section-navy">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">{t('v2040Eyebrow')}</div>
            <h2 className="section-title reveal">{t('v2040Title')}</h2>
            <p className="section-lead reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
              {t('v2040Lead')}
            </p>
          </div>

          <div className="timeline">
            {visionTimeline.map((item, i) => (
              <div
                key={item.year}
                className={`timeline-item reveal ${item.milestone ? 'is-milestone' : ''}`}
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
                <div className="timeline-year">{item.year}</div>
                <h4>{pick(item.title, lang)}</h4>
                <p>{pick(item.text, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — BUSINESS ECOSYSTEM */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <div className="eyebrow reveal">{t('ecoEyebrow')}</div>
              <h2 className="section-title reveal">{t('ecoTitle')}</h2>
              <p className="section-lead reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
                {t('ecoLead')}
              </p>
            </div>
          </div>

          <BusinessSections />
        </div>
      </section>

      {/* 6 — GLOBAL PRESENCE */}
      <section className="section section-navy">
        <div className="container globe-grid">
          <div className="globe-map reveal reveal-image">
            <img src="/assets/master/world-map.jpeg" alt="PetroTwo Group global network map" />
          </div>

          <div>
            <div className="eyebrow reveal">{t('globalEyebrow')}</div>
            <h2 className="section-title reveal">{t('globalTitle')}</h2>
            <p className="section-lead reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
              {t('globalLead')}
            </p>

            <div className="globe-list" style={{ marginTop: 'var(--space-4)' }}>
              {globalPresence.map((loc, i) => (
                <div
                  key={loc.name.en}
                  className="globe-row reveal"
                  style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
                >
                  <strong>{pick(loc.name, lang)}</strong>
                  <span>{pick(loc.role, lang)}</span>
                  {loc.hq && <span className="badge badge-inverse">HQ</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — STATISTICS */}
      <section className="section">
        <div className="container">
          <div className="stats-band">
            {stats.map((s, i) => (
              <div key={s.label.en} className="stat reveal" style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}>
                <Counter value={s.value} suffix={s.suffix} />
                <div className="stat-label">{pick(s.label, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — FEATURED PROJECTS */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <div className="eyebrow reveal">{t('projectsEyebrow')}</div>
              <h2 className="section-title reveal">{t('projectsTitle')}</h2>
            </div>
            <Link to="/services" className="btn btn-outline-navy reveal">
              {t('projectsCta')}
            </Link>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((p, i) => {
              const span = i === 0 ? 'span-7' : i === 1 ? 'span-5' : 'span-4'
              return (
                <Link
                  key={p.title.en}
                  to="/services"
                  className={`project-card ${span} reveal`}
                  style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}
                >
                  <img src={p.image} alt="" loading="lazy" />
                  <div className="project-card-body">
                    <small>{pick(p.location, lang)}</small>
                    <h3>{pick(p.title, lang)}</h3>
                    <p>{pick(p.summary, lang)}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 9 — LATEST NEWS */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <div className="eyebrow reveal">{t('newsEyebrow')}</div>
              <h2 className="section-title reveal">{t('newsTitle')}</h2>
            </div>
            <Link to="/news" className="btn btn-outline-navy reveal">
              {t('newsCta')}
            </Link>
          </div>

          <div className="news-grid">
            {newsItems.slice(0, 3).map((item, i) => (
              <article
                className="news-card reveal"
                key={item.title.en}
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
                <img src={item.image} alt="" loading="lazy" />
                <div className="news-card-body">
                  <small>{pick(item.category, lang)}</small>
                  <h3>{pick(item.title, lang)}</h3>
                  <p>{pick(item.excerpt, lang)}</p>
                  <time>{pick(item.date, lang)}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — CTA */}
      <CtaBand />
    </div>
  )
}
