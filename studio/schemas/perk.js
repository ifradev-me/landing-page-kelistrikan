export default {
  name: "perk",
  title: "Keunggulan",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Urutan",
      type: "number",
      description: "Angka kecil = tampil dulu",
      validation: (R) => R.required(),
    },
    {
      name: "icon",
      title: "Ikon (nama lucide-react)",
      type: "string",
      description: "Contoh: ShieldCheck, Wrench, Sparkles, BadgeCheck",
      validation: (R) => R.required(),
    },
    { name: "title", title: "Judul", type: "string", validation: (R) => R.required() },
    { name: "desc", title: "Deskripsi", type: "text", rows: 3, validation: (R) => R.required() },
  ],
  orderings: [
    {
      title: "Urutan tampil",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "desc", order: "order" },
    prepare({ title, subtitle, order }) {
      return { title: `${order ?? "?"}. ${title}`, subtitle };
    },
  },
};
