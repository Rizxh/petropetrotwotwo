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
  '/assets/food/food-05.jpeg',
  '/assets/food/food-06.jpeg',
  '/assets/food/food-07.jpeg',
  '/assets/food/food-08.jpeg',
  '/assets/food/food-09.jpeg',
  '/assets/food/food-10.jpeg',
  '/assets/food/food-11.jpeg',
]

/* Videos: public/assets/food/videos/video-NN.mp4 + a poster video-NN.jpg.
   `landscape` clips are shown wide on their own row; the rest are portrait. */
export const foodVideos = Array.from({ length: 8 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    src: `/assets/food/videos/video-${n}.mp4`,
    poster: `/assets/food/videos/video-${n}.jpg`,
    landscape: n === '05',
  }
})

/* PDF "UJI COBA POC-AGN — Hamparan 1000 Ha Indramayu": pages rendered to
   public/assets/food/uji-coba-poc/page-01.jpg … page-11.jpg. */
export const ujiCobaSlides = Array.from(
  { length: 11 },
  (_, i) => `/assets/food/uji-coba-poc/page-${String(i + 1).padStart(2, '0')}.jpg`,
)

export const topUpPages = 10

export const topUpSlides = Array.from(
  { length: topUpPages },
  (_, i) => `/assets/food/top-up-ppp/page-${String(i + 1).padStart(2, '0')}.jpg`,
)
