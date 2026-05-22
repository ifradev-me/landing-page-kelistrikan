// Modul ini dipakai juga di luar komponen React (utilitas murni).
// Phone diset sekali oleh SanityProvider via setSitePhone() saat data Sanity loaded.
let _sitePhone = "";

export function setSitePhone(phoneIntl) {
  _sitePhone = phoneIntl || "";
}

export function buildWhatsAppUrl(message = "", phone = _sitePhone) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}${text ? `?text=${text}` : ""}`;
}

export function buildServiceMessage(serviceTitle) {
  return `Halo Pak Sunami, saya tertarik dengan jasa "${serviceTitle}". Mohon info lebih lanjut. Terima kasih.`;
}

export function buildGenericMessage() {
  return `Halo Pak Sunami, saya tertarik dengan jasa instalasi / perbaikan listrik. Mohon info lebih lanjut.`;
}

export function buildContactFormMessage({ nama, phone, service, alamat, pesan }) {
  return `Halo Pak Sunami, saya ${nama}.
No WhatsApp: ${phone}
Jenis Jasa: ${service}
Alamat: ${alamat || "-"}

${pesan}`;
}

export function openWhatsApp(message) {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
