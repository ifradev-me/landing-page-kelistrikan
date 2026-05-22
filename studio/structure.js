export const structure = (S) =>
  S.list()
    .title("Konten")
    .items([
      S.listItem()
        .title("Info Bisnis")
        .id("site")
        .child(
          S.document().schemaType("site").documentId("site").title("Info Bisnis")
        ),
      S.listItem()
        .title("Teks Halaman")
        .id("siteCopy")
        .child(
          S.document().schemaType("siteCopy").documentId("siteCopy").title("Teks Halaman")
        ),
      S.divider(),
      S.documentTypeListItem("perk").title("Keunggulan (Perks)"),
      S.documentTypeListItem("service").title("Daftar Jasa"),
    ]);
