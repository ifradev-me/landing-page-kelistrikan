export default {
  name: "service",
  title: "Jasa",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Urutan",
      type: "number",
      validation: (R) => R.required(),
    },
    {
      name: "id",
      title: "ID (slug)",
      type: "slug",
      options: { source: "title", maxLength: 60 },
      validation: (R) => R.required(),
    },
    {
      name: "icon",
      title: "Ikon (nama lucide-react)",
      type: "string",
      description: "Contoh: Home, Plug, Lightbulb, LayoutGrid, Building2",
      validation: (R) => R.required(),
    },
    { name: "title", title: "Judul Jasa", type: "string", validation: (R) => R.required() },
    { name: "desc", title: "Deskripsi", type: "text", rows: 3, validation: (R) => R.required() },
    {
      name: "price",
      title: "Harga",
      type: "string",
      description: "Kosongkan untuk \"Hubungi untuk harga\". Contoh: 'Rp 75.000 / titik' atau 'Mulai dari Rp 3.000.000'",
    },
  ],
  orderings: [
    {
      title: "Urutan tampil",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "price", order: "order" },
    prepare({ title, subtitle, order }) {
      return { title: `${order ?? "?"}. ${title}`, subtitle: subtitle || "Hubungi untuk harga" };
    },
  },
};
