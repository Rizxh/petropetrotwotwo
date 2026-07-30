# PetroTwo Group — Corporate Website

Premium corporate website (React 19 + Vite + TypeScript). Bilingual EN/ID via
the language switch in the navbar. Design system: white clean theme, navy
`#0D223F`, gold `#C9A44C`, Manrope + Inter, 8px spacing, 12px radius.
Living spec at `/design-system`.

## Scripts

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve production build locally
npm run lint      # oxlint
```

## Deploy ke Vercel (dengan custom domain)

### 1. Push ke Git (disarankan)

```bash
git init
git add .
git commit -m "PetroTwo Group website"
git remote add origin https://github.com/USERNAME/petrotwo-web.git
git push -u origin main
```

### 2. Import ke Vercel

1. Buka [vercel.com/new](https://vercel.com/new) → import repository.
2. **Root Directory**: pilih folder `web` (kalau repo berisi folder lain).
3. Framework preset **Vite** terdeteksi otomatis (build `npm run build`, output `dist`).
4. Klik **Deploy**. Tidak ada environment variable yang dibutuhkan.

Alternatif tanpa Git: `npm i -g vercel`, lalu jalankan `vercel` di folder `web`.

### 3. Hubungkan domain .com

1. Project → **Settings → Domains** → tambahkan `domainanda.com` dan `www.domainanda.com`.
2. Di registrar domain, set DNS:
   - `A` record apex (`@`) → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`
3. Tunggu propagasi; SSL diterbitkan otomatis oleh Vercel.
4. Pilih canonical (mis. `www`); Vercel me-redirect yang satunya.

### 4. Setelah domain final — WAJIB disesuaikan

URL produksi di-hardcode sebagai `https://www.petrotwogroup.com` di:

- `index.html` → `canonical`, `og:url`, `og:image`, `twitter:image`
- `public/robots.txt` → baris `Sitemap:`
- `public/sitemap.xml` → semua `<loc>`

Kalau domain final berbeda, cari-ganti `www.petrotwogroup.com`, lalu deploy ulang.

### 5. Checklist pasca-deploy

- [ ] Buka semua route utama dan refresh di route dalam (mis. `/sectors/energy`)
      untuk memastikan SPA rewrite bekerja.
- [ ] Test share link di WhatsApp/LinkedIn → preview Open Graph muncul.
- [ ] Daftarkan sitemap di [Google Search Console](https://search.google.com/search-console).
- [ ] Cek skor [PageSpeed Insights](https://pagespeed.web.dev).
- [ ] Aktifkan 2FA di akun Vercel dan registrar domain.

## Keamanan

Situs statis tanpa backend/database; tidak menyimpan data pengunjung. Header
keamanan di `vercel.json`: CSP, HSTS, nosniff, X-Frame-Options DENY,
Referrer-Policy, Permissions-Policy. Cache: bundle JS/CSS ber-hash immutable
1 tahun; aset publik lain 1 hari + stale-while-revalidate.

## Struktur

```
web/
├── public/
│   ├── assets/master/     # aset foto & logo dari MASTER Web PDF
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/Layout.tsx   # navbar glass + mega menu, footer, CTA band
│   ├── data/content.ts         # konten bilingual (bisnis, proyek, berita, statistik)
│   ├── i18n.tsx                # provider bahasa + kamus EN/ID
│   ├── pages/                  # Home, About, DesignSystem, dll.
│   └── styles/global.css       # design tokens + seluruh styling
└── vercel.json                 # SPA rewrites + security headers + cache
```
