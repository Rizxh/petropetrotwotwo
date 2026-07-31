import { Breadcrumb } from '../components/Layout'
import { pricingDocs, pricingOrigin, pricingRows, servicesPage } from '../data/content'

/* Copy on this page is transcribed from petrotwogroup.com/services/. */

export function ServicesPage() {
  const p = servicesPage

  return (
    <>
      <section className="page-hero" data-hero="services">
        <div className="container page-hero-inner">
          <Breadcrumb trail={[{ label: p.title }]} />
          <div className="page-hero-copy">
            <p className="page-hero-label">Services</p>
            <h1>{p.title}</h1>
            <p className="page-hero-lead">{p.tagline}</p>
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
            <div className="eyebrow">{p.overviewEyebrow}</div>
            <h2 className="section-title">{p.overviewHeading}</h2>
            {p.overviewBody.map((paragraph) => (
              <p className="svc-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Four-service summary */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{p.listEyebrow}</div>
            <h2 className="section-title">{p.listHeading}</h2>
            <p className="section-lead">{p.listLead}</p>
          </div>

          <div className="svc-summary-grid">
            {p.summary.map((item) => (
              <article className="svc-summary" key={item.num}>
                <figure className="svc-summary-media">
                  <img src={item.image} alt="" loading="lazy" />
                  <figcaption>[{item.num}]</figcaption>
                </figure>
                <div className="svc-summary-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
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
              <div className="eyebrow">{block.eyebrow}</div>
              <h2 className="section-title">{block.heading}</h2>
              <p className="svc-copy">{block.body}</p>

              {block.lists.map((list) => (
                <div className="svc-list" key={list.label}>
                  <h4>{list.label}</h4>
                  <ul>
                    {list.items.map((item) => (
                      <li key={item}>{item}</li>
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
  return (
    <>
      <section className="page-hero" data-hero="pricing">
        <div className="container page-hero-inner">
          <Breadcrumb trail={[{ label: 'Oil & Gas Price' }]} />
          <div className="page-hero-copy">
            <p className="page-hero-label">Market</p>
            <h1>Oil &amp; Gas Price</h1>
            <p className="page-hero-lead">Stay informed with PetroTwo oil and gas prices.</p>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Market &amp; Pricing Snapshot</h2>
            <p className="section-lead">Full Corporate Offer (FCO)</p>
            <p className="section-lead" style={{ color: '#c62828' }}>Expired December 2026</p>
          </div>

          <div className="table-wrap">
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
                    <td>
                      <strong>{row.item}</strong>
                    </td>
                    <td>{row.cif}</td>
                    <td>{row.fob}</td>
                    <td>
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

          <div className="btn-row profile-actions">
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
    </>
  )
}
