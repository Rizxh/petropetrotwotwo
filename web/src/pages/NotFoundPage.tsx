import { Link } from 'react-router-dom'
import { waLink } from '../data/content'
import { useLang } from '../i18n'

export function NotFoundPage() {
  const { lang } = useLang()
  const id = lang === 'id'

  return (
    <section className="notfound">
      <div className="container notfound-inner">
        <div className="notfound-code" aria-hidden>
          404
        </div>
        <div className="eyebrow">{id ? 'Halaman Tidak Ditemukan' : 'Page Not Found'}</div>
        <h1>{id ? 'Halaman yang Anda Cari Tidak Tersedia' : 'The Page You Are Looking For Does Not Exist'}</h1>
        <p>
          {id
            ? 'Tautan mungkin sudah berubah atau halaman telah dipindahkan. Silakan kembali ke beranda atau hubungi tim kami bila Anda membutuhkan bantuan.'
            : 'The link may have changed or the page has been moved. Please return to the homepage, or contact our team if you need assistance.'}
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-gold btn-lg">
            {id ? 'Kembali ke Beranda' : 'Back to Homepage'}
          </Link>
          <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-outline btn-lg">
            {id ? 'Hubungi Kami' : 'Contact Us'}
          </a>
        </div>
      </div>
    </section>
  )
}
