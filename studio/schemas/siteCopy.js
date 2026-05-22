const navObj = {
  name: "nav",
  title: "Navigasi",
  type: "object",
  fields: [
    { name: "tentang", title: "Label \"Tentang\"", type: "string" },
    { name: "jasa", title: "Label \"Daftar Jasa\"", type: "string" },
    { name: "kontak", title: "Label \"Kontak\"", type: "string" },
    { name: "ctaButton", title: "Tombol CTA", type: "string" },
  ],
};

const heroObj = {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "title", title: "Judul utama", type: "string" },
    { name: "titleAccent", title: "Judul accent (warna)", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text", rows: 3 },
    { name: "ctaPrimary", title: "CTA Primary", type: "string" },
    { name: "ctaSecondary", title: "CTA Secondary", type: "string" },
    { name: "trustBadges", title: "Trust Badges", type: "array", of: [{ type: "string" }] },
  ],
};

const aboutObj = {
  name: "about",
  title: "Tentang",
  type: "object",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "title", title: "Judul", type: "string" },
    { name: "titleAccent", title: "Judul accent", type: "string" },
    { name: "body", title: "Paragraf body", type: "array", of: [{ type: "text", rows: 3 }] },
    {
      name: "stats",
      title: "Statistik",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Nilai", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    },
  ],
};

const sectionHead = (name, title) => ({
  name,
  title,
  type: "object",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "title", title: "Judul", type: "string" },
    { name: "titleAccent", title: "Judul accent", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text", rows: 2 },
  ],
});

const servicesObj = {
  name: "services",
  title: "Section Services",
  type: "object",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "title", title: "Judul", type: "string" },
    { name: "titleAccent", title: "Judul accent", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text", rows: 2 },
    { name: "emptyPriceLabel", title: "Label saat harga kosong", type: "string" },
    { name: "orderButton", title: "Tombol pesan", type: "string" },
  ],
};

const ctaObj = {
  name: "cta",
  title: "CTA Banner",
  type: "object",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "title", title: "Judul", type: "string" },
    { name: "titleAccent", title: "Judul accent", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text", rows: 2 },
    { name: "button", title: "Tombol", type: "string" },
  ],
};

const contactObj = {
  name: "contact",
  title: "Section Contact",
  type: "object",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "title", title: "Judul", type: "string" },
    { name: "titleAccent", title: "Judul accent", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text", rows: 2 },
    {
      name: "form",
      title: "Form",
      type: "object",
      fields: [
        { name: "namaLabel", title: "Label Nama", type: "string" },
        { name: "namaPlaceholder", title: "Placeholder Nama", type: "string" },
        { name: "phoneLabel", title: "Label Phone", type: "string" },
        { name: "phonePlaceholder", title: "Placeholder Phone", type: "string" },
        { name: "serviceLabel", title: "Label Service", type: "string" },
        { name: "servicePlaceholder", title: "Placeholder Service", type: "string" },
        { name: "serviceOther", title: "Opsi \"Lainnya\"", type: "string" },
        { name: "alamatLabel", title: "Label Alamat", type: "string" },
        { name: "alamatPlaceholder", title: "Placeholder Alamat", type: "string" },
        { name: "pesanLabel", title: "Label Pesan", type: "string" },
        { name: "pesanPlaceholder", title: "Placeholder Pesan", type: "string" },
        { name: "submit", title: "Tombol Submit", type: "string" },
      ],
    },
    { name: "infoTitle", title: "Judul Info Kontak", type: "string" },
    { name: "areaTitle", title: "Judul Area Layanan", type: "string" },
    { name: "hoursTitle", title: "Judul Jam Operasional", type: "string" },
  ],
};

const footerObj = {
  name: "footer",
  title: "Footer",
  type: "object",
  fields: [
    { name: "tagline", title: "Tagline footer", type: "text", rows: 2 },
    { name: "quickLinksTitle", title: "Judul Quick Links", type: "string" },
    { name: "contactTitle", title: "Judul Kontak", type: "string" },
    { name: "credit", title: "Credit", type: "string" },
  ],
};

export default {
  name: "siteCopy",
  title: "Teks Halaman",
  type: "document",
  fieldsets: [
    { name: "sections", title: "Section Headings", options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    navObj,
    heroObj,
    aboutObj,
    { ...sectionHead("perks", "Section Perks") },
    servicesObj,
    ctaObj,
    contactObj,
    footerObj,
  ],
  preview: {
    prepare() {
      return { title: "Teks Halaman" };
    },
  },
};
