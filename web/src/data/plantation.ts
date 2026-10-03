/* ------------------------------------------------------------------ */
/* Plantation documents — shown as tabs under the Plantation template.  */
/* Each PDF is rendered page by page to public/assets/plantation/<dir>/ */
/* (page-01.jpg, page-02.jpg, …). `portrait` documents are A4/Letter;   */
/* the rest are 16:9 slides.                                            */
/* ------------------------------------------------------------------ */

const pages = (dir: string, count: number) =>
  Array.from(
    { length: count },
    (_, i) => `/assets/plantation/${dir}/page-${String(i + 1).padStart(2, '0')}.jpg`,
  )

export type PlantationDoc = {
  id: string
  label: { en: string; id: string }
  portrait: boolean
  slides: string[]
}

export const plantationDocs: PlantationDoc[] = [
  {
    id: 'proposal',
    label: { en: 'Investment Financing Proposal', id: 'Proposal Pembiayaan Investasi' },
    portrait: true,
    slides: pages('proposal-pembiayaan', 3),
  },
  {
    id: 'cashflow',
    label: { en: 'Cashflow Appendix', id: 'Lampiran Cashflow' },
    portrait: true,
    slides: pages('lampiran-cashflow', 1),
  },
  {
    id: 'offer',
    label: { en: 'Partnership Offer', id: 'Penawaran Kerja Sama' },
    portrait: false,
    slides: pages('penawaran-kerjasama', 9),
  },
  {
    id: 'executive-summary',
    label: { en: 'Executive Summary', id: 'Ringkasan Eksekutif' },
    portrait: true,
    slides: [
      '/assets/plantation/executive-summary/ringkasan-proyek.jpg',
      ...pages('executive-summary', 3),
    ],
  },
]
