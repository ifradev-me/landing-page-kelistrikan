// Query GROQ untuk ambil semua data landing page sekaligus.
// id slug services dikembalikan flat (services[].id) supaya kompatibel
// dengan struktur JSON lama.
export const ALL_DATA_QUERY = `{
  "site": *[_type == "site" && _id == "site"][0]{
    brand, brandSuffix, tagline, phone, phoneDisplay, phoneIntl,
    areas, hours, experienceYears, yearFounded
  },
  "copy": *[_type == "siteCopy" && _id == "siteCopy"][0]{
    nav, hero, about, perks, services, cta, contact, footer
  },
  "perks": *[_type == "perk"] | order(order asc){
    icon, title, desc
  },
  "services": *[_type == "service"] | order(order asc){
    "id": id.current, icon, title, desc, price
  }
}`;
