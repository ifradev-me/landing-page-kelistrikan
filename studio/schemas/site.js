export default {
  name: "site",
  title: "Info Bisnis",
  type: "document",
  fields: [
    { name: "brand", title: "Brand", type: "string" },
    { name: "brandSuffix", title: "Brand Suffix", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "phone", title: "Nomor HP (display lokal)", type: "string" },
    { name: "phoneDisplay", title: "Nomor HP (format rapi)", type: "string" },
    { name: "phoneIntl", title: "Nomor HP Internasional (untuk wa.me)", type: "string", description: "Tanpa + dan tanpa 0 awal. Contoh: 6282223586495" },
    { name: "areas", title: "Area Layanan", type: "array", of: [{ type: "string" }] },
    { name: "hours", title: "Jam Operasional", type: "string" },
    { name: "experienceYears", title: "Tahun Pengalaman", type: "number" },
    { name: "yearFounded", title: "Tahun Berdiri", type: "number" },
  ],
  preview: {
    select: { title: "brand", subtitle: "tagline" },
  },
};
