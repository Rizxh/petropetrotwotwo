import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { Footer, Header, ScrollTopButton } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { DesignSystemPage } from './pages/DesignSystemPage'
import { DivisionPage, DivisionsIndexPage } from './pages/DivisionPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import {
  CompanyProfilePage,
  CompanyProfilePdfPage,
  GlobalBizPage,
} from './pages/ProfilePages'
import {
  CapitalPage,
  ContactPage,
  InternationalPage,
  InvestorPage,
  LegalPage,
  NewsDetailPage,
  NewsPage,
  StoragePage,
  StoriesPage,
  SubholdingPage,
  SustainabilityPage,
} from './pages/MorePages'
import { PricingPage, ServicesPage } from './pages/ServicesPage'
import { TaxPage } from './pages/TaxPage'

/**
 * React Router doesn't scroll to #hash targets on navigation; the business
 * links in the header point at homepage sections, so handle it here.
 */
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location])

  return null
}

function DivisionRoute() {
  const { slug = 'energy' } = useParams()
  return <DivisionPage slug={slug} />
}

function NewsDetailRoute() {
  const { slug = '' } = useParams()
  return <NewsDetailPage slug={slug} />
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollManager />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/oil-gas-price" element={<Navigate to="/pricing" replace />} />
          <Route path="/tax" element={<TaxPage />} />
          <Route path="/taxation" element={<Navigate to="/tax" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/storage" element={<StoragePage />} />
          <Route path="/international" element={<InternationalPage />} />
          <Route path="/capital" element={<CapitalPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailRoute />} />
          <Route path="/subholding" element={<SubholdingPage />} />
          <Route path="/investor-relations" element={<InvestorPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />

          {/* Business divisions — one page per unit. */}
          <Route path="/business-divisions" element={<DivisionsIndexPage />} />
          <Route path="/divisions/:slug" element={<DivisionRoute />} />
          <Route path="/sectors/:slug" element={<DivisionRoute />} />

          {/* Company profile documents linked from the homepage About block. */}
          <Route path="/petrotwo-group" element={<CompanyProfilePage />} />
          <Route path="/company-profile-pdf" element={<CompanyProfilePdfPage />} />
          <Route path="/globalbiz" element={<GlobalBizPage />} />

          <Route path="/design-system" element={<DesignSystemPage />} />
          <Route path="/privacy" element={<LegalPage page="privacy" />} />
          <Route path="/scam-alert" element={<LegalPage page="scam" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  )
}
