# Sunami Teknisi Listrik — Landing Page

Single-page landing page untuk jasa instalasi & perbaikan listrik **Sunami** (Banda Aceh & Aceh Besar). Tujuan utama: konversi pengunjung → klik WhatsApp / isi form.

---

## Stack

| Tooling | Versi | Tujuan |
|---|---|---|
| **Vite** | 5 | Dev server & bundler |
| **React** | 18 (JSX) | UI |
| **Tailwind CSS** | 3 | Styling utility-first |
| **shadcn/ui** style | — | Komponen primitif (Button, Card, Input, dst — sudah di-copy ke `src/components/ui`) |
| **lucide-react** | latest | Ikon |
| **GSAP + ScrollTrigger** | 3 | Animasi subtle saat scroll |

---

## Cara Pakai

```bash
# 1. Install dependency (sekali saja)
npm install

# 2. Jalankan dev server (hot reload)
npm run dev
# → buka http://localhost:5173

# 3. Build untuk production
npm run build
# → output di folder dist/

# 4. Preview build production lokal
npm run preview
```

---

## Struktur Folder

```
src/
├── components/
│   ├── ui/          → primitif (button, card, input, textarea, select, sheet, label)
│   ├── layout/      → Navbar, Footer
│   ├── sections/    → Hero, About, Perks, Services, CtaBanner, Contact
│   └── common/      → komponen reusable (WhatsAppButton, ServiceCard, dll)
├── data/            ← KONTEN YANG SERING DIEDIT (site, copy, perks, services)
├── hooks/           → useGsapReveal, useNavScrollState
├── lib/             → whatsapp.js, icons.jsx, utils.js (logic murni)
├── App.jsx          → compose semua section
├── main.jsx         → entry point React
└── index.css        → Tailwind + base styles
```

**Prinsip pemisahan:**
- `components/` = pure UI. Props in, JSX out. **Tidak boleh** hardcode teks/data.
- `data/*.json` = single source of truth untuk semua konten.
- `lib/` = fungsi murni (tidak ada React).
- `hooks/` = side-effect & reusable behavior.

---

## Yang Perlu Diedit Pemilik

👉 **Baca dulu:** [`EDITING_CONTENT.md`](./EDITING_CONTENT.md)

Singkatnya:
- Ganti nomor WA / area / jam → `src/data/site.json`
- Isi harga jasa → `src/data/services.json` (field `price`)
- Ganti copy headline → `src/data/copy.json`

---

## Dokumentasi Lainnya

- [`EDITING_CONTENT.md`](./EDITING_CONTENT.md) — cara edit teks, harga, jasa
- [`ADDING_SECTION.md`](./ADDING_SECTION.md) — cara menambah section baru
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) — deploy ke Vercel / Netlify / cPanel
