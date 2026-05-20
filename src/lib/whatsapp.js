import site from "@/data/site.json";

export function buildWhatsAppUrl(message = "", phone = site.phoneIntl) {
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
