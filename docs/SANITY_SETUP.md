# Setup Sanity CMS — Sunami Landing Page

Konten landing page (`site`, `copy`, `perks`, `services`) sekarang diambil dari Sanity CMS secara live di runtime. Berikut langkah setup dari nol.

## 1. Bikin akun & project Sanity (sekali saja)

1. Buka https://www.sanity.io/ → **Get started** (gratis, login via Google/GitHub).
2. Setelah masuk dashboard, klik **Create new project**:
   - **Project name**: Sunami Teknisi Listrik
   - **Dataset**: `production` (default)
3. Catat **Project ID** (format: 8 karakter, misal `abc123xy`) — ada di Settings → API.

## 2. Install Studio dependencies & link project

```powershell
cd studio
npm install
```

Bikin file `studio/.env` (copy dari `studio/.env.example`):

```
SANITY_STUDIO_PROJECT_ID=abc123xy
SANITY_STUDIO_DATASET=production
SANITY_API_TOKEN=...  # diisi nanti di step 4
```

## 3. Jalankan Studio (lokal)

```powershell
cd studio
npm run dev
```

Buka http://localhost:3333. Login sekali. Sekarang Studio sudah connect ke project Sanity-mu — tapi datasetnya masih kosong.

## 4. Import data JSON yang ada ke Sanity

Butuh **API token write**:

1. Di https://www.sanity.io/manage → pilih project → **API** → **Tokens** → **Add API token**.
2. Name: `Import Script`, Permissions: **Editor** atau **Write**.
3. Copy token, paste ke `studio/.env` di baris `SANITY_API_TOKEN=...`.

Jalankan import:

```powershell
cd studio
npm run import
```

Output: `✓ Imported N dokumen ke dataset "production"`.

Refresh Studio — sekarang semua konten dari `src/data/*.json` sudah muncul di dashboard.

## 5. Setup main app (landing page) untuk fetch dari Sanity

Di root project (bukan /studio):

```powershell
npm install
```

(Akan install `@sanity/client` yang baru ditambahkan.)

Bikin `.env.local` di root (copy dari `.env.example`):

```
VITE_SANITY_PROJECT_ID=abc123xy
VITE_SANITY_DATASET=production
```

Jalankan dev:

```powershell
npm run dev
```

Buka http://localhost:5173 — sekarang landing page fetch konten dari Sanity. Coba edit teks di Studio → refresh → langsung berubah (CDN cache ~1 menit, atau langsung kalau `useCdn: false`).

## 6. Deploy

- **Landing page** (Netlify/Vercel): set env vars `VITE_SANITY_PROJECT_ID` dan `VITE_SANITY_DATASET` di dashboard hosting, lalu deploy seperti biasa.
- **Studio** (opsional, public dashboard editor): `cd studio && npx sanity deploy` — pilih hostname (misal `sunami.sanity.studio`).

## File-file penting

| File | Fungsi |
|------|--------|
| `studio/sanity.config.js` | Konfigurasi Studio + structure |
| `studio/schemas/*.js` | Definisi tipe dokumen |
| `studio/scripts/import.js` | Migrasi JSON → Sanity (one-time) |
| `src/lib/sanity.js` | Sanity client (browser, read-only) |
| `src/lib/queries.js` | Query GROQ |
| `src/context/SanityContext.jsx` | Provider + `useSanity()` hook |
| `src/data/*.json` | **Backup**. Sudah tidak dipakai runtime, tapi simpan dulu sebagai cadangan kalau Sanity down. Aman untuk dihapus setelah deploy sukses. |

## Edit konten

Cukup buka Studio → ubah field → klik **Publish**. Perubahan langsung live di landing page (refresh).

## Catatan

- File `src/data/*.json` tidak lagi diimport runtime — boleh dihapus kapan saja setelah dipastikan Sanity berjalan baik.
- Skema `perk` dan `service` punya field `order` (number) — pakai itu untuk atur urutan tampil.
- Field `icon` di Studio masih manual ketik nama lucide (contoh: `Plug`, `Home`, `ShieldCheck`). Daftar lengkap: https://lucide.dev/icons/
