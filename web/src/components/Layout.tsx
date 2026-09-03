import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { businesses, company, waContacts, waHref } from '../data/content'
import { divisionPath } from '../data/divisions'
import { pick, useLang, useT } from '../i18n'

const LOGO = '/assets/master/logo-emblem.jpeg'

/** WhatsApp glyph used on every WA call-to-action. */
export function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.87-9.9 9.87zm8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41z" />
    </svg>
  )
}

export function Header() {
  const [solid, setSolid] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { lang, setLang } = useLang()
  const t = useT()

  const navLinks = [
    { label: t('navAbout'), to: '/about' },
    { label: t('navDivisions'), to: '/business-divisions' },
    { label: t('navServices'), to: '/services' },
    { label: t('navPricing'), to: '/pricing' },
    { label: t('navContact'), to: '/contact' },
  ]

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const headerSolid = solid || !isHome || mobileOpen

  return (
    <header className={`site-header ${headerSolid ? 'is-solid' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="PetroTwo Group Home">
          <span className="brand-mark">
            <img src={LOGO} alt="" />
          </span>
          <span className="brand-text">
            <strong>Petro Two Energy</strong>
            <span>Capital International</span>
          </span>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          <NavLink to="/" end>
            {t('navHome')}
          </NavLink>
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" aria-label="Language">
            <button
              type="button"
              className={lang === 'id' ? 'active' : ''}
              aria-pressed={lang === 'id'}
              onClick={() => setLang('id')}
            >
              ID
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <a
            href={waHref(waContacts.info, lang)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-wa header-cta"
          >
            <WaIcon /> WhatsApp
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <nav className="biz-strip" aria-label={t('navBusinesses')}>
        {businesses.map((b) => (
          <Link key={b.slug} to={divisionPath(b.slug)}>
            {pick(b.label, lang)}
          </Link>
        ))}
        {/* Tax sits last in the strip and links to its own coloured page. */}
        <Link to="/tax" className="biz-strip-tax">
          {t('navTax')}
        </Link>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={() => setMobileOpen(false)}>
          {t('navHome')}
        </NavLink>
        {navLinks.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>
            {item.label}
          </NavLink>
        ))}

        <p className="mobile-group-label">{t('navBusinesses')}</p>
        <div className="mobile-biz">
          {businesses.map((b) => (
            <Link key={b.slug} to={divisionPath(b.slug)} onClick={() => setMobileOpen(false)}>
              {pick(b.label, lang)}
            </Link>
          ))}
          <Link to="/tax" onClick={() => setMobileOpen(false)}>
            {t('navTax')}
          </Link>
        </div>

        <p className="mobile-group-label">WhatsApp</p>
        <a
          href={waHref(waContacts.order, lang)}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          Order Oil · {waContacts.order.display}
        </a>
        <a
          href={waHref(waContacts.info, lang)}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          Info Oil · {waContacts.info.display}
        </a>
      </div>
    </header>
  )
}

function SocialIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  )
}

const socials = [
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    path: 'M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.08-.14 1.62.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.39A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.48 1.39 2.13a5.88 5.88 0 0 0 2.13 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.39 5.88 5.88 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.39-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    path: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z',
  },
]

export function Footer() {
  const { lang } = useLang()
  const t = useT()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark">
              <img src={LOGO} alt="PetroTwo Group logo" />
            </span>
            <strong>{company.legalName}</strong>
            <p>
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.line3}
            </p>
            <div className="footer-social" aria-label="Social media">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <SocialIcon path={s.path} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footBusinesses')}</h4>
            {businesses.slice(0, 6).map((b) => (
              <Link key={b.slug} to={divisionPath(b.slug)}>
                {pick(b.label, lang)}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>{t('footQuickLinks')}</h4>
            <Link to="/about">{t('footAbout')}</Link>
            <Link to="/business-divisions">{t('navDivisions')}</Link>
            <Link to="/pricing">{t('navPricing')}</Link>
            <Link to="/services">{t('footProjects')}</Link>
            <Link to="/tax">{t('navTax')}</Link>
            <Link to="/news">{t('footNews')}</Link>
            <a href={waHref(waContacts.info, lang)} target="_blank" rel="noreferrer">
              {t('footContact')}
            </a>
          </div>

          <div className="footer-col footer-contact">
            <h4>{t('footGetInTouch')}</h4>
            <p className="footer-contact-lead">{t('footContactLead')}</p>

            <Link to="/contact" className="btn btn-gold footer-contact-cta">
              {t('footContactCta')}
            </Link>

            {/* Each channel gets its own labelled row (label above value) so
                long email addresses and phone numbers stay scannable and wrap
                cleanly on narrow screens instead of running together. */}
            <ul className="footer-contact-list">
              <li>
                <span>CEO</span>
                <a href="mailto:ceo.yanvialex@gmail.com">ceo.yanvialex@gmail.com</a>
              </li>
              <li>
                <span>Order</span>
                <a href="mailto:order.petrotwoenergy@gmail.com">order.petrotwoenergy@gmail.com</a>
              </li>
              <li>
                <span>Order Oil</span>
                <a href={waHref(waContacts.info, lang)} target="_blank" rel="noreferrer">
                  {waContacts.info.display}
                </a>
              </li>
              <li>
                <span>Info Oil</span>
                <a href={waHref(waContacts.order, lang)} target="_blank" rel="noreferrer">
                  {waContacts.order.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Petrotwoenergy | Group | International |
            Bhunibol Capital. {t('footRights')}
          </span>
          <span>
            <Link to="/privacy">{t('footPrivacy')}</Link>
            {'  ·  '}
            <Link to="/scam-alert">{t('footScam')}</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export type Crumb = { label: string; to?: string }

export function Breadcrumb({ trail }: { trail: Crumb[] }) {
  const t = useT()
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">{t('navHome')}</Link>
      {trail.map((crumb) => (
        <span key={crumb.label} style={{ display: 'contents' }}>
          <span className="sep" aria-hidden>
            /
          </span>
          {crumb.to ? (
            <Link to={crumb.to}>{crumb.label}</Link>
          ) : (
            <span aria-current="page">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export function PageHero({
  label,
  title,
  lead,
  crumbs,
  hero,
}: {
  label?: string
  title: string
  lead: string
  crumbs?: Crumb[]
  /** Colour variant key — see `.page-hero[data-hero]` in global.css. */
  hero?: string
}) {
  return (
    <section className="page-hero" data-hero={hero}>
      <div className="container page-hero-inner">
        {crumbs && <Breadcrumb trail={crumbs} />}
        <div className="page-hero-copy">
          {label && <p className="page-hero-label">{label}</p>}
          <h1>{title}</h1>
          <p className="page-hero-lead">{lead}</p>
        </div>
      </div>
    </section>
  )
}

export function SubPageIntro({
  title,
  desc,
  image,
  crumbs,
}: {
  label?: string
  title: string
  desc: string
  image?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="subpage-intro">
      <div className="container">
        {crumbs && <Breadcrumb trail={crumbs} />}
        <h1>{title}</h1>
        {image && (
          <figure className="subpage-figure">
            <img src={image} alt="" fetchPriority="high" />
          </figure>
        )}
        <p className="subpage-desc">{desc}</p>
      </div>
    </section>
  )
}

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 400
      setVisible(nearBottom && window.scrollY > 300)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export function CtaBand() {
  const { lang } = useLang()
  const t = useT()
  return (
    <section className="cta-band">
      <img src="/assets/news/cta-band.jpg" alt="" loading="lazy" />
      <div className="container">
        <h2>{t('ctaTitle')}</h2>
        <p>{t('ctaText')}</p>
        <div className="btn-row btn-row-center cta-band-actions">
          <Link to="/contact" className="btn btn-gold btn-lg">
            {t('ctaButton')}
          </Link>
          <a
            href={waHref(waContacts.order, lang)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-wa btn-lg"
          >
            <WaIcon /> Order Oil
          </a>
        </div>
      </div>
    </section>
  )
}
