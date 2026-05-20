# Editing Content (Untuk Pemilik)

Semua teks, harga, dan info kontak ada di **`src/data/`**. Ubah file JSON di sana — **jangan sentuh** kode `.jsx` di folder `components/`.

Setelah edit JSON, simpan file lalu refresh browser (kalau `npm run dev` jalan, auto-refresh).

---

## 1. Mengganti Nomor WhatsApp / Telepon / Area / Jam

File: **`src/data/site.json`**

```json
{
  "brand": "Sunami",
  "brandSuffix": "Teknisi Listrik",
  "tagline": "Instalasi & Perbaikan Listrik",
  "phone": "082223586495",
  "phoneDisplay": "0822-2358-6495",
  "phoneIntl": "6282223586495",
  "areas": ["Banda Aceh", "Aceh Besar", "dan sekitarnya"],
  "hours": "Setiap hari · 08.00 – 21.00 WIB",
  "experienceYears": 4
}
```

**Penting saat mengganti nomor HP:**
- `phone` = format Indonesia (mulai 08…) — untuk link `tel:`
- `phoneDisplay` = tampilan ke pengunjung (boleh pakai tanda strip)
- `phoneIntl` = format internasional **tanpa +** (62…) — untuk link `wa.me/<phoneIntl>`

Contoh kalau nomor baru `085812345678`:
- `phone`: `"085812345678"`
- `phoneDisplay`: `"0858-1234-5678"`
- `phoneIntl`: `"6285812345678"`

---

## 2. Mengisi / Mengubah Harga Jasa

File: **`src/data/services.json`**

Tiap object adalah 1 service card. Isi field `price` dengan string bebas (boleh kosong = tampil "Hubungi untuk harga").

```json
{
  "id": "rumah-baru",
  "icon": "Home",
  "title": "Instalasi Listrik Rumah Baru",
  "desc": "Pemasangan instalasi lengkap rumah baru...",
  "price": "Rp 75.000 / titik"
}
```

Contoh format harga yang valid:
- `"Rp 75.000 / titik"`
- `"Mulai Rp 250.000"`
- `"Survey lokasi dulu"`
- `""`  ← string kosong → otomatis tampil "Hubungi untuk harga"

---

## 3. Menambah / Menghapus Jasa

File: **`src/data/services.json`** — tambah/hapus object dalam array.

Field wajib tiap jasa:
- `id` (unik, huruf kecil + tanda strip, dipakai untuk React key)
- `icon` (nama ikon dari [lucide.dev/icons](https://lucide.dev/icons/) — lihat daftar yang terdaftar di **`src/lib/icons.jsx`**)
- `title`
- `desc`
- `price` (boleh string kosong)

**Kalau pakai ikon baru** yang belum terdaftar:
1. Buka `src/lib/icons.jsx`
2. Tambah import-nya: `import { NamaIkonBaru, ... } from "lucide-react";`
3. Tambah ke `iconMap`: `iconMap = { ..., NamaIkonBaru }`

---

## 4. Mengubah Copywriting / Headline

File: **`src/data/copy.json`**

Berisi semua teks heading, subheading, tombol, dan label form. Struktur per section:

```json
{
  "hero":     { "eyebrow": "...", "title": "...", "titleAccent": "...", "subtitle": "..." },
  "about":    { "eyebrow": "...", "title": "...", "body": ["paragraf 1", "paragraf 2"] },
  "perks":    { ... },
  "services": { ... },
  "cta":      { ... },
  "contact":  { "form": { ... } }
}
```

**Tip:** `titleAccent` adalah bagian headline yang berwarna kuning/amber. Pisahkan dari `title` agar warna otomatis kena di bagian itu saja.

---

## 5. Mengubah Perks (Aman, Handal, Rapi, Profesional)

File: **`src/data/perks.json`**

Perks dipakai di **2 tempat sekaligus**:
1. Floating badge di sekitar foto pada section "Tentang"
2. Grid card di section "Kenapa Pilih Saya"

Edit di sini = update di kedua tempat otomatis. Maks 4 item (karena di About hanya 4 sudut foto).

```json
[
  {
    "icon": "ShieldCheck",
    "title": "Aman",
    "desc": "Pengerjaan sesuai standar SNI / PUIL..."
  }
]
```

---

## 6. Mengganti Gambar

Letakkan gambar baru di folder `public/` lalu rujuk dari kode dengan path absolut:

- Foto profile: `public/profile-no-bg.png` (background transparan)
- Background hero: `public/stock-photo.jpg`
- Cadangan: `public/profile-w-bg.png`, `public/poster.png`

Kalau nama file diubah, sesuaikan path di:
- `src/components/sections/Hero.jsx` (background hero)
- `src/components/sections/About.jsx` (foto profile)

---

## FAQ Singkat

**Q: Saya edit JSON tapi web tidak berubah.**
A: Cek syntax JSON (koma, kutip dua). Buka browser DevTools (F12) → Console untuk error.

**Q: Boleh edit `.jsx` langsung untuk ubah teks?**
A: Boleh, tapi sebaiknya tidak. JSON dibuat agar teks terpisah dari kode — lebih aman dari sisi maintenance.

**Q: Pesan WhatsApp dari form formatnya apa?**
A: Lihat / edit di `src/lib/whatsapp.js` fungsi `buildContactFormMessage`.
