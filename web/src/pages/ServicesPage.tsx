import { Breadcrumb } from '../components/Layout'
import { pricingDocs, pricingOrigin, pricingRows, servicesPage } from '../data/content'
import { useTr } from '../i18n'

/* Copy on this page is transcribed from petrotwogroup.com/services/. */

export function ServicesPage() {
  const tr = useTr()
  const p = servicesPage

  return (
    <>
      <section className="page-hero" data-hero="services">
        <div className="container page-hero-inner">
          <Breadcrumb trail={[{ label: p.title }]} />
          <div className="page-hero-copy">
            <p className="page-hero-label">{tr('Services')}</p>
            <h1>{tr(p.title)}</h1>
            <p className="page-hero-lead">{tr(p.tagline)}</p>
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section className="section">
        <div className="container svc-overview">
          <figure className="svc-overview-media">
            <img src={p.overviewImage} alt="" loading="lazy" />
          </figure>
          <div>
            <div className="eyebrow">{tr(p.overviewEyebrow)}</div>
            <h2 className="section-title">{tr(p.overviewHeading)}</h2>
            {p.overviewBody.map((paragraph) => (
              <p className="svc-copy" key={paragraph}>
                {tr(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Four-service summary */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{tr(p.listEyebrow)}</div>
            <h2 className="section-title">{tr(p.listHeading)}</h2>
            <p className="section-lead">{tr(p.listLead)}</p>
          </div>

          <div className="svc-summary-grid">
            {p.summary.map((item) => (
              <article className="svc-summary" key={item.num}>
                <figure className="svc-summary-media">
                  <img src={item.image} alt="" loading="lazy" />
                  <figcaption>[{tr(item.num)}]</figcaption>
                </figure>
                <div className="svc-summary-body">
                  <h3>{tr(item.title)}</h3>
                  <p>{tr(item.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service blocks */}
      {p.detail.map((block, i) => (
        <section className={`section ${i % 2 === 1 ? 'section-surface' : ''}`} key={block.eyebrow}>
          <div className={`container svc-detail ${i % 2 === 1 ? 'reverse' : ''}`}>
            <figure className="svc-detail-media">
              <img src={block.image} alt="" loading="lazy" />
            </figure>

            <div>
              <div className="eyebrow">{tr(block.eyebrow)}</div>
              <h2 className="section-title">{tr(block.heading)}</h2>
              <p className="svc-copy">{tr(block.body)}</p>

              {block.lists.map((list) => (
                <div className="svc-list" key={list.label}>
                  <h4>{tr(list.label)}</h4>
                  <ul>
                    {list.items.map((item) => (
                      <li key={item}>{tr(item)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Oil & Gas Price                                                      */
/* ------------------------------------------------------------------ */

export function PricingPage() {
  const tr = useTr()
  return (
    <>
      <section className="page-hero" data-hero="pricing">
        <div className="container page-hero-inner">
          <Breadcrumb trail={[{ label: tr('Oil & Gas Price') }]} />
          <div className="page-hero-copy">
            <p className="page-hero-label">{tr('Market')}</p>
            <h1>{tr('Oil & Gas Price')}</h1>
            <p className="page-hero-lead">{tr('Stay informed with PetroTwo oil and gas prices.')}</p>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">{tr('Market & Pricing Snapshot')}</h2>
            <p className="section-lead">{tr('Full Corporate Offer (FCO)')}</p>
            <p className="section-lead" style={{ color: '#c62828' }}>{tr('Expired December 2026')}</p>
          </div>

          {/* data-label feeds the stacked-card layout the table collapses
              into below 640px — see .table-stack in global.css. */}
          <div className="table-wrap table-stack">
            <table>
              <thead>
                <tr>
                  <th>{tr('Items')}</th>
                  <th>{tr('CIF Price')}</th>
                  <th>{tr('FOB Price')}</th>
                  <th>{tr('Note')}</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.item}>
                    <td data-label={tr('Items')}>
                      <strong>{tr(row.item)}</strong>
                    </td>
                    <td data-label={tr('CIF Price')}>{tr(row.cif)}</td>
                    <td data-label={tr('FOB Price')}>{tr(row.fob)}</td>
                    <td data-label={tr('Note')}>
                      <span className="muted">
                        {tr(row.note)}
                        <br />
                        {tr(row.contract)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="form-note" style={{ marginTop: 'var(--space-2)', fontSize: '1.125rem' }}>
            {tr('Country of Origin:')} {tr(pricingOrigin)}
          </p>

          <div className="btn-row profile-actions">
            {pricingDocs.map((doc) => (
              <a
                key={doc.label}
                className="btn btn-outline-navy"
                href={doc.href}
                target="_blank"
                rel="noreferrer"
              >
                {tr(doc.label)}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
