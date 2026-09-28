import { useT } from '../i18n'
import { yanvoirCards } from '../data/yanvoir'
import { useDocumentTitle } from '../useDocumentTitle'
import { DivisionPage } from './DivisionPage'

/* ------------------------------------------------------------------ */
/* /yanvoir — the standard business-unit template (cover + description */
/* + photo), followed by a quiet "coming soon" preview of the range.    */
/* ------------------------------------------------------------------ */

export function YanvoirPage() {
  useDocumentTitle('Yanvoir | PetroTwo Energy')
  const t = useT()

  return (
    <>
      <DivisionPage slug="yanvoir" />

      <section className="yv-soon" aria-labelledby="yv-soon-title">
        <div className="container">
          <header className="yv-soon-head">
            <h2 id="yv-soon-title">{t('comingSoon')}</h2>
            <span aria-hidden="true" />
          </header>

          <ul className="yv-soon-grid">
            {yanvoirCards.map((card) => (
              <li className="yv-soon-card" key={card.id}>
                <div className="yv-soon-media">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.imageAlt ?? ''}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="yv-soon-empty" aria-hidden="true">
                      <span className="yv-soon-mark">Y</span>
                      <span className="yv-soon-label">{t('comingSoon')}</span>
                    </div>
                  )}
                </div>
                {card.name && <p className="yv-soon-name">{card.name}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
