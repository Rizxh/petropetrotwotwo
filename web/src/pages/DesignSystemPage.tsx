import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/Layout'

/* ------------------------------------------------------------------ */
/* Data for specimens                                                   */
/* ------------------------------------------------------------------ */

const colors = [
  { name: 'Primary / White', token: '--color-bg', hex: '#FFFFFF', border: true },
  { name: 'Secondary / Surface', token: '--color-surface', hex: '#F8F9FB', border: true },
  { name: 'Surface 2', token: '--color-surface-2', hex: '#F1F3F7', border: true },
  { name: 'Accent / Dark Navy', token: '--color-navy', hex: '#0D223F' },
  { name: 'Navy 800', token: '--color-navy-800', hex: '#122C4F' },
  { name: 'Navy 700', token: '--color-navy-700', hex: '#1A3A64' },
  { name: 'Accent 2 / Gold', token: '--color-gold', hex: '#C9A44C' },
  { name: 'Gold 600', token: '--color-gold-600', hex: '#B08D3B' },
  { name: 'Text / Body', token: '--text-body', hex: '#435062' },
  { name: 'Text / Muted', token: '--text-muted', hex: '#6E7A8C' },
  { name: 'Border Subtle', token: '--border-subtle', hex: 'rgba(13,34,63,.08)', border: true },
  { name: 'Gold 100', token: '--color-gold-100', hex: '#F6EFDD', border: true },
]

const spacing = [8, 16, 24, 32, 40, 48, 64, 80]

const shadows = [
  { name: 'shadow-xs', use: 'Resting cards' },
  { name: 'shadow-sm', use: 'Form cards' },
  { name: 'shadow-md', use: 'Hover elevation' },
  { name: 'shadow-lg', use: 'Feature media' },
  { name: 'shadow-xl', use: 'Modal / mega menu' },
]

const motion = [
  { token: '--duration-fast', value: '160ms', use: 'Link & icon hover' },
  { token: '--duration-base', value: '260ms', use: 'Buttons, cards, navbar glass' },
  { token: '--duration-slow', value: '480ms', use: 'Panels, accordion, modal-in' },
  { token: '--duration-reveal', value: '720ms', use: 'Scroll fade-up reveal' },
  { token: '--ease-out', value: 'cubic-bezier(.22,1,.36,1)', use: 'Default easing (enter)' },
  { token: '--ease-inout', value: 'cubic-bezier(.65,0,.35,1)', use: 'Looping / ambient motion' },
]

const breakpoints = [
  { bp: '≥ 1440px', rule: 'Max layout width; content capped at 1280px' },
  { bp: '≤ 1280px', rule: 'Business grid 4 → 3 columns' },
  { bp: '≤ 1024px', rule: 'Nav collapses to menu; grids → 2 cols; timeline vertical' },
  { bp: '≤ 768px', rule: 'Two-column splits stack; forms single column' },
  { bp: '≤ 560px', rule: 'All grids single column; full-width CTAs' },
]

const ratios = [
  { label: '21 : 9', note: 'Hero / banners', ar: '21 / 9' },
  { label: '16 : 10', note: 'News & content cards', ar: '16 / 10' },
  { label: '4 : 3', note: 'Overview media', ar: '4 / 3' },
  { label: '3 : 4', note: 'Business cards', ar: '3 / 4' },
  { label: '1 : 1', note: 'Portraits, logos', ar: '1 / 1' },
]

const chartData = [
  { label: 'Energy', v: 92 },
  { label: 'Marine', v: 64 },
  { label: 'Storage', v: 58 },
  { label: 'Capital', v: 41 },
  { label: 'Trading', v: 33 },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function DesignSystemPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [accordionOpen, setAccordionOpen] = useState(0)

  return (
    <>
      <PageHero
        label="Foundation"
        title="PetroTwo Enterprise Design System"
        lead="One visual language across every touchpoint — white clean theme, navy authority, gold restraint. Token naming follows --{category}-{property}-{variant}."
      />

      {/* COLOR */}
      <section className="ds-section">
        <div className="container">
          <h2>Color Palette</h2>
          <p className="ds-desc">
            White is the canvas, navy carries authority, gold is used sparingly for emphasis.
            Gold fails 3:1 contrast on white — never use it for text under 18px or as a data color.
          </p>
          <div className="ds-grid">
            {colors.map((c) => (
              <div className="swatch" key={c.token}>
                <div
                  className="swatch-color"
                  style={{ background: c.hex, borderBottom: c.border ? '1px solid var(--border-subtle)' : 'none' }}
                />
                <div className="swatch-meta">
                  <strong>{c.name}</strong>
                  <code>
                    {c.token} · {c.hex}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="ds-section">
        <div className="container">
          <h2>Typography</h2>
          <p className="ds-desc">
            Manrope for display and UI (600–800), Inter for body copy (400–600). Headings track
            −0.02em; eyebrows track +0.22em uppercase.
          </p>
          <div className="type-specimen">
            <code>Display · Manrope 800 · clamp(40–72px)</code>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1.1, color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
              Global Energy Ecosystem
            </div>
          </div>
          <div className="type-specimen">
            <code>H2 · Manrope 700 · 32–48px</code>
            <h2 style={{ fontSize: '2.25rem' }}>A Trusted Partner Across the Value Chain</h2>
          </div>
          <div className="type-specimen">
            <code>H3 · Manrope 700 · 19–22px</code>
            <h3 style={{ fontSize: '1.25rem' }}>Business Division Card Title</h3>
          </div>
          <div className="type-specimen">
            <code>Eyebrow · Manrope 700 · 12px · +0.22em</code>
            <div className="eyebrow" style={{ marginBottom: 0 }}>
              Section Eyebrow
            </div>
          </div>
          <div className="type-specimen">
            <code>Body · Inter 400 · 16px / 1.7</code>
            <p style={{ maxWidth: '60ch' }}>
              PetroTwo Group is an integrated holding company providing end-to-end solutions across
              the oil &amp; gas supply chain, from sourcing and trading to storage and financing.
            </p>
          </div>
          <div className="type-specimen">
            <code>Caption · Inter 500 · 13px · muted</code>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Figures shown are illustrative. Updated quarterly.
            </p>
          </div>
        </div>
      </section>

      {/* SPACING + GRID + RADIUS */}
      <section className="ds-section">
        <div className="container">
          <h2>Spacing · Grid · Radius</h2>
          <p className="ds-desc">
            8px base unit — every gap, padding, and offset is a multiple of 8. Layout: 12 columns,
            1440px max frame, 1280px content width, gutters clamp(40–80px). Corners are 12px
            everywhere (<code>--radius</code>); pills use <code>--radius-pill</code>.
          </p>
          <div className="space-demo">
            {spacing.map((s) => (
              <div key={s} style={{ width: s, height: s }}>
                {s}
              </div>
            ))}
          </div>
          <div className="ds-grid-3" style={{ marginTop: 'var(--space-4)' }}>
            <div className="shadow-demo" style={{ border: '1px solid var(--border-subtle)' }}>
              border-radius: 12px
            </div>
            <div className="shadow-demo" style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)' }}>
              pill · 999px
            </div>
            <div className="shadow-demo" style={{ border: '1px solid var(--border-subtle)' }}>
              container: min(100% − gutter, 1280px)
            </div>
          </div>
        </div>
      </section>

      {/* BUTTONS */}
      <section className="ds-section">
        <div className="container">
          <h2>Buttons &amp; States</h2>
          <p className="ds-desc">
            Hover lifts −2px with elevation; active returns to rest; focus-visible draws a 2px gold
            outline offset 3px; disabled/loading drops to 60% opacity and blocks pointer events.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-gold">Gold Accent</button>
            <button className="btn btn-outline-navy">Outline</button>
            <button className="btn btn-ghost">Ghost →</button>
            <button className="btn btn-primary btn-lg">Large CTA</button>
            <button className="btn btn-primary is-loading">
              <span className="spinner" /> Loading
            </button>
            <button className="btn btn-primary" disabled>
              Disabled
            </button>
          </div>
          <div style={{ marginTop: 16, background: 'var(--color-navy)', borderRadius: 'var(--radius)', padding: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button className="btn btn-outline">On-Image Outline</button>
            <button className="btn btn-gold">On-Image Gold</button>
          </div>
        </div>
      </section>

      {/* INPUTS */}
      <section className="ds-section">
        <div className="container">
          <h2>Inputs</h2>
          <p className="ds-desc">
            48px min height, 12px radius, navy focus ring at 12% opacity. Labels 13px/600 above the
            field; hints 12px muted below.
          </p>
          <div className="ds-grid-3">
            <div className="field">
              <label htmlFor="ds-name">Full Name</label>
              <input id="ds-name" className="input" placeholder="e.g. Amina Rahman" />
              <div className="hint">As written on official documents.</div>
            </div>
            <div className="field">
              <label htmlFor="ds-email">Business Email</label>
              <input id="ds-email" className="input" type="email" placeholder="name@company.com" />
            </div>
            <div className="field">
              <label htmlFor="ds-topic">Inquiry Type</label>
              <select id="ds-topic" className="input" defaultValue="Partnership">
                <option>Partnership</option>
                <option>Investment</option>
                <option>Trading</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS + BADGES */}
      <section className="ds-section">
        <div className="container">
          <h2>Cards &amp; Badges</h2>
          <p className="ds-desc">
            Cards rest on <code>shadow-xs</code> with a subtle border; hover lifts −4px to{' '}
            <code>shadow-md</code>. Image cards use the dark overlay rule below for text safety.
          </p>
          <div className="ds-grid-3">
            <article className="news-card">
              <img src="/assets/master/storage-tankfarm.jpeg" alt="" loading="lazy" />
              <div className="news-card-body">
                <small>Content Card</small>
                <h3>Standard 16:10 media card</h3>
                <p>Body copy stays muted; category eyebrow in gold-600.</p>
              </div>
            </article>
            <a className="biz-card" href="#!" style={{ aspectRatio: '3 / 4' }} onClick={(e) => e.preventDefault()}>
              <img src="/assets/master/bullion-gold.jpeg" alt="" loading="lazy" />
              <span className="biz-card-arrow" aria-hidden>
                ↗
              </span>
              <span className="biz-card-body">
                <h3>Image Card</h3>
                <p style={{ maxHeight: 90, opacity: 1 }}>Hover reveals description + arrow.</p>
              </span>
            </a>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <span className="badge badge-gold">Gold</span>
                <span className="badge badge-navy">Navy</span>
                <span className="badge badge-outline">Outline</span>
                <span className="chip">Filter Chip</span>
              </div>
              <div style={{ marginTop: 24, background: 'var(--color-navy)', borderRadius: 12, padding: 20 }}>
                <span className="badge badge-inverse">HQ · Inverse</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section className="ds-section">
        <div className="container">
          <h2>Tables</h2>
          <p className="ds-desc">
            Navy header, zebra rows on surface, gold-tinted hover. Tables scroll horizontally inside
            their container below 640px content width.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Commodity</th>
                  <th>CIF</th>
                  <th>FOB</th>
                  <th>Contract</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Petroleum Coke</td>
                  <td>$205 / $195</td>
                  <td>$120 / $110</td>
                  <td>≥ 2 years</td>
                </tr>
                <tr>
                  <td>Urea</td>
                  <td>$245 / $235</td>
                  <td>$220 / $210</td>
                  <td>≥ 2 years</td>
                </tr>
                <tr>
                  <td>LNG</td>
                  <td>$345 / $335</td>
                  <td>$325 / $315</td>
                  <td>≥ 2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="ds-section">
        <div className="container">
          <h2>Navigation · Dropdown · Mega Menu</h2>
          <p className="ds-desc">
            The sticky navbar starts transparent over the hero and becomes glass on scroll
            (rgba(255,255,255,.78) + blur 18px). “Businesses” opens a Microsoft-style mega menu:
            three grouped link columns plus a featured image on the right that follows hover. Try it
            in the header above. Dropdown panels share the 12px radius, <code>shadow-xl</code>, and
            a 10px slide-in.
          </p>
          <div className="ds-grid-2">
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>Breadcrumb</h3>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/sectors/energy">Businesses</Link>
                <span className="sep">/</span>
                <span aria-current="page">Energy</span>
              </nav>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>Pagination</h3>
              <div className="pagination">
                <button aria-label="Previous">‹</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button aria-label="Next">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL + ACCORDION */}
      <section className="ds-section">
        <div className="container">
          <h2>Modal &amp; Accordion</h2>
          <p className="ds-desc">
            Modal overlay: rgba(13,34,63,.55) + 6px blur; panel enters with a 480ms fade-scale.
            Accordions rotate a gold caret and keep one item open at a time.
          </p>
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
            Open Modal
          </button>
          {modalOpen && (
            <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="ds-modal-title" onClick={() => setModalOpen(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h3 id="ds-modal-title">Request Company Profile</h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  The 2026 corporate profile will be sent to your business email after verification.
                </p>
                <div className="modal-actions">
                  <button className="btn btn-outline-navy" onClick={() => setModalOpen(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={() => setModalOpen(false)}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="accordion" style={{ marginTop: 'var(--space-4)' }}>
            {['What does PetroTwo Group do?', 'Where are you headquartered?', 'How do partnerships begin?'].map(
              (q, i) => (
                <div className={`accordion-item ${accordionOpen === i ? 'open' : ''}`} key={q}>
                  <button
                    className="accordion-trigger"
                    aria-expanded={accordionOpen === i}
                    onClick={() => setAccordionOpen(accordionOpen === i ? -1 : i)}
                  >
                    {q}
                    <span className="caret" aria-hidden />
                  </button>
                  {accordionOpen === i && (
                    <div className="accordion-body">
                      An integrated holding company across energy, marine, storage, capital, and
                      eight further pillars — headquartered at Wisma BNI 46, Jakarta, with
                      partnership onboarding through NDA &amp; MOU.
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* TIMELINE + STATS + CHART */}
      <section className="ds-section">
        <div className="container">
          <h2>Timeline · Statistics · Charts</h2>
          <p className="ds-desc">
            Statistics use tabular numerals with a gold suffix and a 1.6s ease-out count-up (once,
            on 60% visibility). Charts are single-hue navy — magnitude reads through length, not
            color; gold is never a data color (2.36:1 on white). Values label selectively, never on
            every mark.
          </p>
          <div className="ds-grid-2">
            <div className="ds-chart" role="img" aria-label="Illustrative revenue contribution by division: Energy 92, Marine 64, Storage 58, Capital 41, Trading 33 (index)">
              {chartData.map((d, i) => (
                <div className="bar" key={d.label} style={{ height: `${d.v}%` }}>
                  {i === 0 && <span>92</span>}
                </div>
              ))}
            </div>
            <div>
              <div className="stat" style={{ borderLeftColor: 'var(--color-gold)' }}>
                <span className="stat-value">
                  120<span className="suffix">+</span>
                </span>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: 16, maxWidth: '44ch' }}>
                Bar chart specimen: 4px rounded data-ends, 16px gaps, recessive axes, direct label
                on the lead value only. Multi-series charts step down the navy ramp and always ship
                a legend plus table view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ELEVATION + GLASS + OVERLAY */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <h2>Elevation · Glass · Dark Overlay Rules</h2>
          <p className="ds-desc">
            Shadows are navy-tinted and grow with interaction, never with decoration. Glass surfaces
            pair 78% white with saturate(1.4) blur(18px). Overlays guarantee white text ≥ 4.5:1 on
            imagery.
          </p>
          <div className="ds-grid" style={{ alignItems: 'stretch' }}>
            {shadows.map((s) => (
              <div className="shadow-demo" key={s.name} style={{ boxShadow: `var(--${s.name})` }}>
                <strong style={{ display: 'block', color: 'var(--text-heading)' }}>{s.name}</strong>
                {s.use}
              </div>
            ))}
          </div>
          <div className="ds-grid-3" style={{ marginTop: 'var(--space-4)' }}>
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', minHeight: 180 }}>
              <img src="/assets/master/marine-lng.jpeg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-hero)' }} />
              <div style={{ position: 'relative', color: '#fff', padding: 20, fontSize: '0.8125rem' }}>
                <strong>--overlay-hero</strong>
                <br />
                55% → 35% → 72% navy gradient
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', minHeight: 180 }}>
              <img src="/assets/master/energy-refinery.jpeg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-card)' }} />
              <div style={{ position: 'absolute', bottom: 0, color: '#fff', padding: 20, fontSize: '0.8125rem' }}>
                <strong>--overlay-card</strong>
                <br />
                transparent → 82% navy, bottom-anchored
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', minHeight: 180, background: 'var(--color-navy)' }}>
              <img src="/assets/master/hotels-hq.jpeg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
              <div style={{ position: 'absolute', inset: 16, borderRadius: 12, background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', display: 'grid', placeItems: 'center', fontSize: '0.8125rem', color: 'var(--text-heading)' }}>
                <span>
                  <strong>Glass</strong> · white 78% + blur 18px
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOADING */}
      <section className="ds-section">
        <div className="container">
          <h2>Loading &amp; Skeleton</h2>
          <p className="ds-desc">
            Skeletons shimmer at 1.4s on surface-2 and mirror the final layout exactly — no spinners
            for content, spinners only inside buttons.
          </p>
          <div className="ds-grid-3">
            <div>
              <div className="skeleton" style={{ aspectRatio: '16 / 10' }} />
              <div className="skeleton skeleton-text" style={{ marginTop: 12, width: '40%' }} />
              <div className="skeleton skeleton-text" style={{ marginTop: 8, width: '85%' }} />
              <div className="skeleton skeleton-text" style={{ marginTop: 8, width: '70%' }} />
            </div>
            <div>
              <div className="skeleton" style={{ height: 96 }} />
              <div className="skeleton skeleton-text" style={{ marginTop: 12, width: '60%' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <button className="btn btn-primary is-loading">
                <span className="spinner" /> Submitting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RATIOS + ICONS */}
      <section className="ds-section">
        <div className="container">
          <h2>Image Ratios &amp; Icons</h2>
          <p className="ds-desc">
            Photography is large, industrial, and real — no stock illustration, no cartoons. Icons
            are 24px line icons at 1.5px stroke, gold on navy chips inside image cards.
          </p>
          <div className="ds-grid" style={{ alignItems: 'start' }}>
            {ratios.map((r) => (
              <div key={r.label}>
                <div className="ratio-demo" style={{ aspectRatio: r.ar }}>
                  {r.label}
                </div>
                <p style={{ fontSize: '0.78125rem', color: 'var(--text-muted)', marginTop: 8 }}>{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTION + RESPONSIVE + A11Y + TOKENS */}
      <section className="ds-section">
        <div className="container">
          <h2>Motion · Responsive · Accessibility · Tokens</h2>
          <p className="ds-desc">
            Animations are few and purposeful: fade-up reveals, image de-zoom, hover elevation,
            counter count-up, marquee. Everything honours <code>prefers-reduced-motion</code>.
            Focus is always visible (2px gold outline); interactive targets are ≥ 44px; body copy
            holds ≥ 4.5:1 contrast.
          </p>
          <div className="ds-grid-2">
            <div className="table-wrap ds-token-table">
              <table style={{ minWidth: 0 }}>
                <thead>
                  <tr>
                    <th>Motion Token</th>
                    <th>Value</th>
                    <th>Use</th>
                  </tr>
                </thead>
                <tbody>
                  {motion.map((m) => (
                    <tr key={m.token}>
                      <td>
                        <code>{m.token}</code>
                      </td>
                      <td>{m.value}</td>
                      <td>{m.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-wrap ds-token-table">
              <table style={{ minWidth: 0 }}>
                <thead>
                  <tr>
                    <th>Breakpoint</th>
                    <th>Rule</th>
                  </tr>
                </thead>
                <tbody>
                  {breakpoints.map((b) => (
                    <tr key={b.bp}>
                      <td>
                        <code>{b.bp}</code>
                      </td>
                      <td>{b.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p style={{ marginTop: 'var(--space-3)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Token naming: <code>--color-*</code>, <code>--text-*</code>, <code>--border-*</code>,{' '}
            <code>--space-*</code> (8px steps), <code>--radius</code>, <code>--shadow-*</code>,{' '}
            <code>--glass-*</code>, <code>--duration-*</code>, <code>--ease-*</code>,{' '}
            <code>--overlay-*</code>, <code>--layout-*</code>. Components consume tokens only —
            never raw hex values.
          </p>
        </div>
      </section>
    </>
  )
}
