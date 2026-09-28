/* ------------------------------------------------------------------ */
/* Food page assets — everything lives in public/assets/food/.          */
/*                                                                      */
/* Photos: add a file there and list it below (shown in the gallery,    */
/*   opens in an in-page pop-up only).                                  */
/* PDF "TOP UP - PPP": each page is rendered to an image in             */
/*   public/assets/food/top-up-ppp/page-01.jpg, page-02.jpg, …           */
/*   Set `topUpPages` to the page count and the deck appears.           */
/* ------------------------------------------------------------------ */

export const foodPhotos = [
  '/assets/food/food-01.jpeg',
  '/assets/food/food-02.jpeg',
  '/assets/food/food-03.jpeg',
  '/assets/food/food-04.jpeg',
]

export const topUpPages = 10

export const topUpSlides = Array.from(
  { length: topUpPages },
  (_, i) => `/assets/food/top-up-ppp/page-${String(i + 1).padStart(2, '0')}.jpg`,
)
