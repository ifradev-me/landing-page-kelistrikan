# Menambah Section Baru

Template untuk menambah section baru (mis. Testimoni, FAQ, Galeri).

---

## 1. Buat File Section

Buat file baru di `src/components/sections/Nama.jsx`. Pola standar:

```jsx
import { SectionHeading } from "@/components/common/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import copy from "@/data/copy.json";

export function Testimoni() {
  const ref = useGsapReveal({ stagger: 0.08, y: 24 });

  return (
    <section
      id="testimoni"
      ref={ref}
      className="scroll-mt-24 py-20 md:py-28 bg-white"
    >
      <div className="container">
        <SectionHeading
          eyebrow={copy.testimoni.eyebrow}
          title={copy.testimoni.title}
          accent={copy.testimoni.titleAccent}
          subtitle={copy.testimoni.subtitle}
        />

        <div className="mt-12 md:mt-16 grid gap-5 md:grid-cols-3">
          {/* Item-item section, beri attribute data-reveal supaya kena animasi */}
          <div data-reveal>...</div>
        </div>
      </div>
    </section>
  );
}
```

**Convention penting:**
- Wrapper section pakai class `scroll-mt-24` agar offset anchor cocok dengan tinggi navbar.
- Wajib pakai `<div className="container">` di dalam — ini global container Tailwind (lihat `tailwind.config.js`).
- Beri attribute `data-reveal` pada elemen yang ingin di-animasi saat scroll.
- Background section bergantian (`bg-white` ↔ `bg-slate-50`) untuk visual rhythm.

---

## 2. Tambah Konten ke copy.json

Tambah block baru di `src/data/copy.json`:

```json
{
  "testimoni": {
    "eyebrow": "Testimoni",
    "title": "Kata Mereka",
    "titleAccent": "Tentang Kerja Saya",
    "subtitle": "..."
  }
}
```

Kalau ada data berulang (list testimoni, list FAQ), buat file JSON terpisah di `src/data/testimoni.json` dengan array of object — pola sama seperti `services.json` / `perks.json`.

---

## 3. Import & Pasang di App.jsx

Buka `src/App.jsx`:

```jsx
import { Testimoni } from "@/components/sections/Testimoni";

export default function App() {
  return (
    <div className="...">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Perks />
        <Services />
        <Testimoni />   {/* ← tambah di urutan yang masuk akal */}
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
```

---

## 4. (Opsional) Tambah Link Navbar

Edit `src/components/layout/Navbar.jsx`, tambah ke array `NAV_LINKS`:

```jsx
const NAV_LINKS = [
  { href: "#tentang",   labelKey: "tentang" },
  { href: "#jasa",      labelKey: "jasa" },
  { href: "#testimoni", labelKey: "testimoni" },
  { href: "#kontak",    labelKey: "kontak" },
];
```

Lalu tambah label di `src/data/copy.json` `nav`:

```json
"nav": {
  "tentang": "Tentang",
  "jasa": "Daftar Jasa",
  "testimoni": "Testimoni",
  "kontak": "Kontak",
  ...
}
```

---

## Animasi GSAP

Hook `useGsapReveal` memasang fade-up + stagger ke semua child dengan `data-reveal` di dalam section. Cukup ini untuk 90% kasus.

Kalau butuh animasi custom (mis. sequenced timeline seperti About section), tulis langsung pakai `gsap.timeline` di dalam `useEffect` dengan `gsap.context(...)` cleanup. Lihat `src/components/sections/About.jsx` sebagai referensi.

**Aturan:**
- Selalu wrap di `gsap.context(() => { ... }, ref)` dan return `ctx.revert()` di cleanup → mencegah memory leak.
- Selalu `gsap.set()` initial state (opacity 0, dll) **sebelum** animasi `.to(...)` agar tidak ada flash saat first paint.
- Pakai `scrollTrigger: { trigger: el, start: "top 75%", once: true }` agar reveal sekali saja (tidak re-trigger bolak-balik saat scroll naik turun).
