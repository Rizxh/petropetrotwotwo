/* ------------------------------------------------------------------ */
/* Yanvoir "coming soon" preview cards.                                 */
/*                                                                      */
/* No product photos or names have been supplied yet, so each card is an */
/* empty slot. When they arrive, fill in the fields — a card with an    */
/* `image` shows the photo instead of the placeholder.                  */
/*   image:    path under /public, e.g. '/assets/yanvoir/bag-01.jpg'    */
/*   imageAlt: what the photo shows (required once `image` is set)      */
/*   name:     shown under the card                                     */
/* ------------------------------------------------------------------ */

export type YanvoirCard = {
  id: string
  image: string | null
  imageAlt?: string
  name: string | null
}

export const yanvoirCards: YanvoirCard[] = Array.from({ length: 4 }, (_, i) => ({
  id: `slot-${i + 1}`,
  image: null,
  name: null,
}))
