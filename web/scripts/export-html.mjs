/**
 * Exports every page as a standalone static HTML file, for pasting into
 * WordPress or uploading as flat files.
 *
 *   npm run build            # the export prerenders the built site
 *   npm run preview          # in another terminal
 *   npm run export:html      # writes ../html-export/
 *
 * Each route is rendered in a real browser, then the React bundle is stripped
 * so what lands on disk is plain HTML — no JavaScript needed to display it.
 * Internal links are rewritten to the sibling .html files and asset URLs are
 * made relative, so the folder works from any directory on any host.
 *
 * Two forms are written per route:
 *   html-export/<slug>.html            full document, opens in a browser
 *   html-export/fragments/<slug>.html  body markup only, for a WP Custom HTML block
 */

import { chromium } from 'playwright'
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')
const OUT = path.resolve(ROOT, '..', 'html-export')

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
  '/company-profile-pdf',
  '/globalbiz',
  '/contact',
  '/privacy',
  '/scam-alert',
]

function arg(name, fallback = null) {
  const i = process.argv.indexOf(`--${name}`)
  if (i === -1) return fallback
  const next = process.argv[i + 1]
  return next && !next.startsWith('--') ? next : true
}

const BASE = String(arg('base', 'http://localhost:4173')).replace(/\/$/, '')

/** '/' -> 'index', '/divisions/energy' -> 'divisions-energy'. */
const slugFor = (route) =>
  route === '/' ? 'index' : route.replace(/^\//, '').replace(/\//g, '-')

const ROUTE_TO_FILE = new Map(ROUTES.map((r) => [r, `${slugFor(r)}.html`]))

/* --- checks -------------------------------------------------------- */

if (!existsSync(DIST)) {
  console.error('\nNo dist/ found. Run "npm run build" first.\n')
  process.exit(1)
}

if (!(await fetch(BASE).catch(() => null))) {
  console.error(`\nCannot reach ${BASE}.\nRun "npm run preview" in another terminal first.\n`)
  process.exit(1)
}

/* --- 1. copy the built site as the asset base ---------------------- */

if (existsSync(OUT)) await rm(OUT, { recursive: true, force: true })
await mkdir(path.join(OUT, 'fragments'), { recursive: true })

await cp(DIST, OUT, { recursive: true })
await rm(path.join(OUT, 'index.html'), { force: true }) // replaced by the prerender

/* The bundle is dead weight once the pages are static. */
for (const f of await readdir(path.join(OUT, 'assets'))) {
  if (f.endsWith('.js')) await rm(path.join(OUT, 'assets', f), { force: true })
}

/* CSS sits in assets/, so an absolute "/assets/x.jpg" becomes just "x.jpg". */
for (const f of await readdir(path.join(OUT, 'assets'))) {
  if (!f.endsWith('.css')) continue
  const p = path.join(OUT, 'assets', f)
  const css = await readFile(p, 'utf8')
  await writeFile(p, css.replaceAll('url(/assets/', 'url('), 'utf8')
}

/* --- 2. prerender each route --------------------------------------- */

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } })
const page = await context.newPage()

console.log(`\nExporting ${ROUTES.length} pages from ${BASE}`)
console.log(`Into ${OUT}\n`)

let ok = 0
for (const [i, route] of ROUTES.entries()) {
  const file = ROUTE_TO_FILE.get(route)
  process.stdout.write(`[${i + 1}/${ROUTES.length}] ${route} -> ${file} ... `)

  try {
    await page.goto(`${BASE}${route}`, { waitUntil: 'load', timeout: 60000 })
    // Let React paint and lazy images resolve their src.
    await page.waitForTimeout(1200)
    await page.evaluate(async () => {
      // Force every lazy image to load so the static file isn't blank.
      document.querySelectorAll('img[loading="lazy"]').forEach((el) => {
        el.setAttribute('loading', 'eager')
      })
      await new Promise((r) => setTimeout(r, 400))
    })

    const { full, fragment } = await page.evaluate((routeMap) => {
      // Drop the SPA bundle — these pages are static from here on.
      document.querySelectorAll('script').forEach((s) => s.remove())

      // Vite stamps crossorigin on its tags. Over http that is harmless, but
      // it makes the browser refuse the stylesheet when the file is opened
      // straight from disk (file://), which is how these get previewed.
      document.querySelectorAll('[crossorigin]').forEach((el) => {
        el.removeAttribute('crossorigin')
      })

      // Absolute asset URLs -> relative, so the folder can live anywhere.
      document.querySelectorAll('[src], [href]').forEach((el) => {
        for (const attr of ['src', 'href']) {
          const v = el.getAttribute(attr)
          if (v && v.startsWith('/assets/')) el.setAttribute(attr, v.slice(1))
        }
      })

      // Internal route links -> the sibling .html files.
      document.querySelectorAll('a[href]').forEach((a) => {
        const href = a.getAttribute('href')
        if (!href || !href.startsWith('/') || href.startsWith('//')) return
        const [pathname, hash = ''] = href.split('#')
        const target = routeMap[pathname]
        a.setAttribute('href', target ? target + (hash ? `#${hash}` : '') : `index.html`)
      })

      return {
        full: '<!doctype html>\n' + document.documentElement.outerHTML,
        fragment: document.getElementById('root')?.innerHTML ?? document.body.innerHTML,
      }
    }, Object.fromEntries(ROUTE_TO_FILE))

    await writeFile(path.join(OUT, file), full, 'utf8')
    await writeFile(path.join(OUT, 'fragments', file), fragment, 'utf8')
    ok++
    console.log('ok')
  } catch (err) {
    console.log(`FAILED — ${err.message}`)
  }
}

await browser.close()

/* --- 3. an index so the folder is browsable ------------------------ */

const cssFile = (await readdir(path.join(OUT, 'assets'))).find((f) => f.endsWith('.css'))
const links = ROUTES.map(
  (r) => `      <li><a href="${ROUTE_TO_FILE.get(r)}">${r}</a></li>`,
).join('\n')

await writeFile(
  path.join(OUT, '_pages.html'),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>PetroTwo Group — exported pages</title>
    ${cssFile ? `<link rel="stylesheet" href="assets/${cssFile}" />` : ''}
    <style>
      body { font-family: system-ui, sans-serif; margin: 3rem auto; max-width: 46rem; padding: 0 1.5rem; }
      li { margin: .35rem 0; }
    </style>
  </head>
  <body>
    <h1>Exported pages</h1>
    <p>${ok} of ${ROUTES.length} pages. Full documents below; body-only markup is in <code>fragments/</code>.</p>
    <ul>
${links}
    </ul>
  </body>
</html>
`,
  'utf8',
)

console.log(`\nDone — ${ok}/${ROUTES.length} pages written.`)
console.log(`Open ${path.join(OUT, '_pages.html')} to browse them.\n`)
