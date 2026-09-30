import { Suspense, lazy, useEffect, type ComponentType } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { Footer, Header, ScrollTopButton } from './components/Layout'
import { HomePage } from './pages/HomePage'

/* Every page except Home is split into its own chunk, so a first visit only
   downloads the code for the page being opened. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = ComponentType<any>

const page = <M extends Record<string, unknown>, K extends keyof M>(
  load: () => Promise<M>,
  name: K,
) => lazy(() => load().then((m) => ({ default: m[name] as AnyComponent })))

const AboutPage = page(() => import('./pages/AboutPage'), 'AboutPage')
const DesignSystemPage = page(() => import('./pages/DesignSystemPage'), 'DesignSystemPage')
const DivisionPage = page(() => import('./pages/DivisionPage'), 'DivisionPage')
const DivisionsIndexPage = page(() => import('./pages/DivisionPage'), 'DivisionsIndexPage')
const PlantationPage = page(() => import('./pages/PlantationPage'), 'PlantationPage')
const FoodPage = page(() => import('./pages/FoodPage'), 'FoodPage')
const NotFoundPage = page(() => import('./pages/NotFoundPage'), 'NotFoundPage')
const CompanyProfilePage = page(() => import('./pages/ProfilePages'), 'CompanyProfilePage')
const CompanyProfilePdfPage = page(() => import('./pages/ProfilePages'), 'CompanyProfilePdfPage')
const GlobalBizPage = page(() => import('./pages/ProfilePages'), 'GlobalBizPage')
const CapitalPage = page(() => import('./pages/MorePages'), 'CapitalPage')
const ContactPage = page(() => import('./pages/MorePages'), 'ContactPage')
const InternationalPage = page(() => import('./pages/MorePages'), 'InternationalPage')
const InvestorPage = page(() => import('./pages/MorePages'), 'InvestorPage')
const LegalPage = page(() => import('./pages/MorePages'), 'LegalPage')
const NewsDetailPage = page(() => import('./pages/MorePages'), 'NewsDetailPage')
const NewsPage = page(() => import('./pages/MorePages'), 'NewsPage')
const StoragePage = page(() => import('./pages/MorePages'), 'StoragePage')
const StoriesPage = page(() => import('./pages/MorePages'), 'StoriesPage')
const SubholdingPage = page(() => import('./pages/MorePages'), 'SubholdingPage')
const SustainabilityPage = page(() => import('./pages/MorePages'), 'SustainabilityPage')
const PricingPage = page(() => import('./pages/ServicesPage'), 'PricingPage')
const ServicesPage = page(() => import('./pages/ServicesPage'), 'ServicesPage')
const TaxPage = page(() => import('./pages/TaxPage'), 'TaxPage')
const YanvoirPage = page(() => import('./pages/YanvoirPage'), 'YanvoirPage')

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

/**
 * Route → colour theme. The key lands on <main data-theme> and drives the
 * palette in global.css (see PAGE THEMES), so every nav destination reads as
 * its own place instead of one continuous navy. Keys match the `data-hero`
 * values on the page heroes.
 */
function themeFor(pathname: string) {
  const p = pathname.toLowerCase()
  const at = (...prefixes: string[]) => prefixes.some((s) => p === s || p.startsWith(`${s}/`))

  if (at('/about')) return 'about'
  if (at('/business-divisions', '/divisions', '/sectors', '/food', '/yanvoir')) return 'divisions'
  if (at('/services')) return 'services'
  if (at('/pricing', '/oil-gas-price')) return 'pricing'
  if (at('/contact')) return 'contact'
  if (at('/storage')) return 'storage'
  if (at('/international')) return 'international'
  if (at('/capital')) return 'capital'
  if (at('/investor-relations')) return 'investor'
  if (at('/sustainability')) return 'sustainability'
  if (at('/stories')) return 'stories'
  if (at('/news')) return 'news'
  if (at('/subholding')) return 'subholding'
  if (at('/petrotwo-group', '/company-profile-pdf', '/globalbiz')) return 'profile'
  // Home, /tax and the legal pages ship their own colour treatment.
  return 'home'
}

function DivisionRoute() {
  const { slug = 'energy' } = useParams()
  // Food has its own page (same template plus gallery and document).
  if (slug === 'food') return <Navigate to="/food" replace />
  // Plantation adds a tab per document under the same template.
  if (slug === 'plantation') return <PlantationPage />
  return <DivisionPage slug={slug} />
}

function NewsDetailRoute() {
  const { slug = '' } = useParams()
  return <NewsDetailPage slug={slug} />
}

export default function App() {
  const { pathname } = useLocation()

  return (
    <div className="app-shell">
      <ScrollManager />
      <Header />
      <main className="main-content" data-theme={themeFor(pathname)}>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/oil-gas-price" element={<Navigate to="/pricing" replace />} />
          <Route path="/tax" element={<TaxPage />} />
          <Route path="/taxation" element={<Navigate to="/tax" replace />} />
          <Route path="/yanvoir" element={<YanvoirPage />} />
          <Route path="/food" element={<FoodPage />} />
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
        </Suspense>
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  )
}
