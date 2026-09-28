import { useState } from 'react'
import { foodPhotos, topUpSlides } from '../data/food'
import { useT } from '../i18n'
import { useDocumentTitle } from '../useDocumentTitle'
import { Lightbox } from '../components/Lightbox'
import { DivisionPage } from './DivisionPage'

/* ------------------------------------------------------------------ */
/* /food — the standard business-unit template (cover + description +  */
/* photo), followed by the Food photo gallery and the TOP UP - PPP      */
/* document laid out page by page, like the other PDF previews.         */
/* ------------------------------------------------------------------ */

export function FoodPage() {
  useDocumentTitle('Food | PetroTwo Energy')
  const t = useT()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <DivisionPage slug="food" />

      <section className="section food-gallery-section" aria-labelledby="food-gallery-title">
        <div className="container">
          <h2 id="food-gallery-title" className="food-heading">
            Meetup
          </h2>
          <ul className="food-gallery">
            {foodPhotos.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  aria-label={`${t('enlargePhoto')} ${i + 1}`}
                  onClick={() => setOpen(i)}
                >
                  <img
                    src={src}
                    alt={`${t('meetupPhoto')} ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-surface" aria-label={t('documentWord')}>
        <div className="container">
          {topUpSlides.length > 0 ? (
            <div className="profile-deck">
              {topUpSlides.map((src, i) => (
                <figure className="deck-slide" key={src}>
                  <img
                    src={src}
                    alt={`${t('documentWord')}, ${t('pageWord')} ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </figure>
              ))}
            </div>
          ) : (
            <p className="food-empty">{t('documentSoon')}</p>
          )}
        </div>
      </section>

      <Lightbox
        images={foodPhotos}
        index={open}
        onChange={setOpen}
        label={(i) => `${t('meetupPhoto')} ${i + 1}`}
      />
    </>
  )
}
