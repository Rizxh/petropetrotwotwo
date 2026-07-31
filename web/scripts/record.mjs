/**
 * Records a walkthrough video of every page on the site.
 *
 *   npm run record                      # records against http://localhost:5173
 *   npm run record -- --base http://localhost:4173
 *   npm run record -- --only /,/about   # just these routes
 *   npm run record -- --mobile          # 390x844 instead of 1920x1080
 *   npm run record -- --lang id         # switch the site to Indonesian first
 *
 * One .webm per route lands in web/recordings/. Playwright only finalises a
 * video when its context closes, so each route gets its own context and the
 * file is renamed afterwards.
 */

import { chromium } from 'playwright'
import { mkdir, readdir, rename, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'recordings')

/* Ordered as a company story, not as the router declares them: overview, then
   divisions, then services, then the documents, then contact. */
const ROUTES = [
  '/',
  '/about',
  '/stories',
  '/business-divisions',
  '/divisions/energy',
  '/divisions/marine',
  '/divisions/storage',
  '/divisions/technology',
  '/divisions/capital',
  '/divisions/hotels',
  '/divisions/bullion',
  '/divisions/food',
  '/divisions/international',
  '/divisions/plantation',
  '/divisions/pharmaceutical',
  '/services',
  '/pricing',
  '/storage',
  '/international',
  '/capital',
  '/tax',
  '/subholding',
  '/investor-relations',
  '/sustainability',
  '/news',
  '/petrotwo-group',
  '/globalbiz',
  '/contact',
]

/* --- args ---------------------------------------------------------- */

function arg(name, fallback = null) {
  const i = process.argv.indexOf(`--${name}`)
  if (i === -1) return fallback
  const next = process.argv[i + 1]
  return next && !next.startsWith('--') ? next : true
}

const BASE = String(arg('base', 'http://localhost:5173')).replace(/\/$/, '')
const MOBILE = Boolean(arg('mobile', false))
const LANG = arg('lang', null)
const ONLY = arg('only', null)

/**
 * Git Bash rewrites any argument that starts with "/" into an MSYS Windows
 * path, so `--only /,/about` arrives as `C:/Program Files/Git/,/about`.
 * Undo that, and accept routes written with or without a leading slash.
 */
function normalizeRoute(input) {
  let s = String(input).trim().replace(/\\/g, '/')
  const mangled = s.match(/^[A-Za-z]:\/.*?\/Git\/?(.*)$/)
  if (mangled) s = mangled[1]
  s = s.replace(/^\/+/, '')
  return s === '' || s.toLowerCase() === 'home' ? '/' : `/${s}`
}

const routes = ONLY ? String(ONLY).split(',').map(normalizeRoute) : ROUTES

const SIZE = MOBILE ? { width: 390, height: 844 } : { width: 1920, height: 1080 }

/* How long to sit still on the hero before scrolling. The homepage hero
   cycles three frames on a 6s loop, so it needs a full pass. */
const heroHold = (route) => (route === '/' ? 7000 : 1800)

/** Filename-safe name for a route: '/divisions/energy' -> '02-divisions-energy'. */
const slug = (route, i) => {
  const body =
    route === '/'
      ? 'home'
      : route
          .replace(/^\//, '')
          .replace(/\//g, '-')
          .replace(/[^a-zA-Z0-9._-]/g, '')
  return `${String(i + 1).padStart(2, '0')}-${body || 'page'}`
}

/* --- recording ----------------------------------------------------- */

/**
 * Scrolls to the bottom in small steps so reveal-on-scroll animations get a
 * chance to fire, then pauses on the footer.
 */
async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.45)
    const pause = (ms) => new Promise((r) => setTimeout(r, ms))
    let last = -1

    while (window.scrollY !== last) {
      last = window.scrollY
      window.scrollBy({ top: step, behavior: 'smooth' })
      await pause(650)
      // Stop once we're within a step of the bottom.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - step) break
    }

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    await pause(1200)
  })
}

async function recordRoute(browser, route, index) {
  const context = await browser.newContext({
    viewport: SIZE,
    recordVideo: { dir: OUT, size: SIZE },
    deviceScaleFactor: 1,
    // Respect the site's motion; we want the animations on camera.
    reducedMotion: 'no-preference',
  })

  if (LANG) {
    await context.addInitScript(
      (lang) => localStorage.setItem('petrotwo-lang', lang),
      String(LANG),
    )
  }

  const page = await context.newPage()
  const name = slug(route, index)

  try {
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 60000 })
  } catch {
    // networkidle can time out on the image-heavy decks; the page is usually
    // still usable, so carry on rather than losing the take.
    console.warn(`  (${route} did not reach networkidle — recording anyway)`)
  }

  await page.waitForTimeout(heroHold(route))
  await scrollThrough(page)

  const video = page.video()
  await context.close() // flushes the video to disk
  if (video) await rename(await video.path(), path.join(OUT, `${name}.webm`))

  return name
}

/* --- main ---------------------------------------------------------- */

const res = await fetch(BASE).catch(() => null)
if (!res) {
  console.error(
    `\nCannot reach ${BASE}.\nStart the site first:  npm run dev   (or npm run preview)\n`,
  )
  process.exit(1)
}

if (existsSync(OUT)) await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

console.log(`\nRecording ${routes.length} pages from ${BASE}`)
console.log(`Viewport ${SIZE.width}x${SIZE.height}${LANG ? ` · lang=${LANG}` : ''}\n`)

const browser = await chromium.launch()
const started = Date.now()

for (const [i, route] of routes.entries()) {
  process.stdout.write(`[${i + 1}/${routes.length}] ${route} ... `)
  const t = Date.now()
  try {
    const name = await recordRoute(browser, route, i)
    console.log(`${name}.webm (${((Date.now() - t) / 1000).toFixed(0)}s)`)
  } catch (err) {
    console.log(`FAILED — ${err.message}`)
  }
}

await browser.close()

const files = (await readdir(OUT)).filter((f) => f.endsWith('.webm')).sort()
console.log(`\nDone in ${((Date.now() - started) / 1000 / 60).toFixed(1)} min.`)
console.log(`${files.length} videos in ${OUT}\n`)
