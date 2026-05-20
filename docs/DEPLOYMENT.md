# Deployment

Output build (`dist/`) adalah static site — bisa di-host di mana saja.

---

## 1. Build Production

```bash
npm install        # sekali saja, kalau belum
npm run build
```

Hasil build ada di folder **`dist/`**. Folder ini yang di-upload ke hosting.

Cek lokal sebelum upload:
```bash
npm run preview
# → buka http://localhost:4173
```

---

## 2. Pilihan Hosting (urut dari paling mudah)

### A. Vercel (rekomendasi — gratis, paling cepat)

1. Buat akun di [vercel.com](https://vercel.com)
2. Klik **Add New → Project**
3. Connect ke GitHub / GitLab repo, atau drag-drop folder project
4. Vercel auto-detect Vite. Klik **Deploy**. Selesai.

Atau via CLI:
```bash
npm i -g vercel
vercel
```

### B. Netlify

1. Buat akun di [netlify.com](https://netlify.com)
2. Drag-drop folder **`dist/`** ke halaman dashboard, atau connect repo
3. Kalau connect repo, isi:
   - Build command: `npm run build`
   - Publish directory: `dist`

### C. cPanel / Shared Hosting (Niagahoster, Hostinger, dll)

1. Build lokal: `npm run build`
2. Buka File Manager cPanel → masuk ke `public_html/` (atau subfolder kalau pakai subdomain)
3. Upload **seluruh isi** folder `dist/` (bukan folder `dist/` itu sendiri)
4. Selesai — akses via domain.

**Catatan:** karena ini single-page, tidak butuh konfigurasi rewrite/htaccess khusus.

### D. GitHub Pages

```bash
npm run build
# upload isi dist/ ke branch gh-pages, atau pakai action
```

Kalau domain GitHub Pages-nya `user.github.io/repo-name/`, edit `vite.config.js`:
```js
export default defineConfig({
  base: "/repo-name/",
  // ...
});
```

---

## 3. Custom Domain

Setelah deploy, semua provider di atas mendukung custom domain. Caranya:
1. Tambah domain di dashboard hosting
2. Update DNS A/CNAME record di pengelola domain (Namecheap, Niagahoster, dll) sesuai instruksi
3. Tunggu propagasi DNS (5 menit – 24 jam)

---

## 4. Setelah Deploy — Yang Perlu Dicek

- [ ] Hero tampil dengan benar (background panel listrik)
- [ ] 3 link navbar (Tentang, Daftar Jasa, Kontak) scroll ke section yang tepat
- [ ] Klik tombol WhatsApp → buka WhatsApp web/app dengan pesan otomatis
- [ ] Floating WA button muncul saat scroll
- [ ] Form kontak: isi → submit → buka WhatsApp dengan pesan terformat
- [ ] Tampilan mobile (cek di HP beneran, bukan hanya DevTools)
- [ ] Speed: buka [pagespeed.web.dev](https://pagespeed.web.dev/) → target ≥ 90 mobile

---

## 5. Update Konten Setelah Live

Tiap kali ubah `src/data/*.json` atau file lainnya:
1. `npm run build`
2. Upload ulang isi `dist/` ke hosting (atau push ke git kalau pakai Vercel/Netlify — auto-redeploy)
