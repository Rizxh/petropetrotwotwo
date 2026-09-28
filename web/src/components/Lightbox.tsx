import { useCallback, useEffect, useRef } from 'react'
import { useT } from '../i18n'

/**
 * In-page image pop-up. Images are shown here only — there is no link to the
 * file, no new-tab route, and right-click / drag are disabled on the picture.
 */
export function Lightbox({
  images,
  index,
  onChange,
  label,
}: {
  images: string[]
  index: number | null
  onChange: (next: number | null) => void
  label: (i: number) => string
}) {
  const t = useT()
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = index !== null

  const step = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return
      onChange((index + dir + images.length) % images.length)
    },
    [index, images.length, onChange],
  )

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onChange(null)
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onChange, step])

  if (index === null) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={label(index)}
      onClick={() => onChange(null)}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox-close"
        aria-label={t('lbClose')}
        onClick={() => onChange(null)}
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            aria-label={t('lbPrev')}
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            aria-label={t('lbNext')}
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
          >
            ›
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt={label(index)}
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      />
      <span className="lightbox-count" aria-hidden="true">
        {index + 1} / {images.length}
      </span>
    </div>
  )
}
