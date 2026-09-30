import { useState } from 'react'
import { plantationDocs } from '../data/plantation'
import { pick, useLang, useT } from '../i18n'
import { useDocumentTitle } from '../useDocumentTitle'
import { DivisionPage } from './DivisionPage'

/* ------------------------------------------------------------------ */
/* Plantation — the standard business-unit template (cover +           */
/* description + photo), followed by one tab per document, each shown   */
/* page by page like the other PDF previews.                            */
/* ------------------------------------------------------------------ */

export function PlantationPage() {
  useDocumentTitle('Plantation | PetroTwo Energy')
  const { lang } = useLang()
  const t = useT()
  const [active, setActive] = useState(plantationDocs[0].id)
  const doc = plantationDocs.find((d) => d.id === active) ?? plantationDocs[0]

  return (
    <>
      <DivisionPage slug="plantation" />

      <section className="section section-surface" aria-label={t('documentWord')}>
        <div className="container">
          <div className="doc-tabs" role="tablist" aria-label={t('documentWord')}>
            {plantationDocs.map((d) => (
              <button
                key={d.id}
                type="button"
                role="tab"
                id={`tab-${d.id}`}
                aria-selected={d.id === doc.id}
                aria-controls={`panel-${d.id}`}
                className="doc-tab"
                onClick={() => setActive(d.id)}
              >
                {pick(d.label, lang)}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${doc.id}`}
            aria-labelledby={`tab-${doc.id}`}
            className={`profile-deck${doc.portrait ? ' profile-deck-portrait' : ''}`}
          >
            {doc.slides.map((src, i) => (
              <figure className="deck-slide" key={src}>
                <img
                  src={src}
                  alt={`${pick(doc.label, lang)}, ${t('pageWord')} ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
