import { useState } from 'react'
import { foodPhotos, foodVideos, topUpSlides, ujiCobaSlides } from '../data/food'
import { useLang, useT } from '../i18n'
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
  const { lang } = useLang()
  const id = lang === 'id'
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

      <section className="section food-video-section" aria-labelledby="food-video-title">
        <div className="container">
          <h2 id="food-video-title" className="food-heading">
            Video
          </h2>
          <ul className="food-videos">
            {foodVideos.map((v, i) => (
              <li key={v.src} className={v.landscape ? 'is-landscape' : undefined}>
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={v.poster}
                  aria-label={`Video ${i + 1}`}
                >
                  <source src={v.src} type="video/mp4" />
                </video>
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

      <section className="section" aria-labelledby="food-uji-title">
        <div className="container">
          <h2 id="food-uji-title" className="food-heading">
            {id ? 'Uji Coba POC-AGN — Hamparan 1000 Ha Indramayu' : 'POC-AGN Trial — 1000 Ha Indramayu'}
          </h2>
          <div className="profile-deck">
            {ujiCobaSlides.map((src, i) => (
              <figure className="deck-slide" key={src}>
                <img
                  src={src}
                  alt={`${id ? 'Uji Coba' : 'Trial'}, ${t('pageWord')} ${i + 1}`}
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

      <Lightbox
        images={foodPhotos}
        index={open}
        onChange={setOpen}
        label={(i) => `${t('meetupPhoto')} ${i + 1}`}
      />
    </>
  )
}
