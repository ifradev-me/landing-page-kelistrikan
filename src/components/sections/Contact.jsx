import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { openWhatsApp, buildContactFormMessage } from "@/lib/whatsapp";
import copy from "@/data/copy.json";
import site from "@/data/site.json";
import services from "@/data/services.json";

const initialState = {
  nama: "",
  phone: "",
  service: "",
  alamat: "",
  pesan: "",
};

export function Contact() {
  const ref = useGsapReveal({ stagger: 0.08, y: 24 });
  const [form, setForm] = useState(initialState);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildContactFormMessage(form);
    openWhatsApp(message);
  };

  const infoForm = copy.contact.form;

  return (
    <section
      id="kontak"
      ref={ref}
      className="scroll-mt-24 py-20 md:py-28 bg-white"
    >
      <div className="container">
        <SectionHeading
          eyebrow={copy.contact.eyebrow}
          title={copy.contact.title}
          accent={copy.contact.titleAccent}
          subtitle={copy.contact.subtitle}
        />

        <div className="mt-12 md:mt-16 grid gap-8 lg:grid-cols-5">
          {/* LEFT: contact info */}
          <div data-reveal className="lg:col-span-2 rounded-2xl bg-brand-navy text-white p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand-amber/20 blur-3xl" aria-hidden="true" />

            <div className="relative">
              <h3 className="text-2xl font-bold">{copy.contact.infoTitle}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Lebih cepat? Langsung WhatsApp atau telepon — saya respon cepat di jam operasional.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-amber text-brand-navy shrink-0">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-brand-amber">
                      WhatsApp / Telepon
                    </div>
                    <a
                      href={`tel:${site.phone}`}
                      className="mt-1 block text-lg font-bold hover:text-brand-amber transition-colors"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-amber text-brand-navy shrink-0">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-brand-amber">
                      {copy.contact.areaTitle}
                    </div>
                    <div className="mt-1 text-base font-semibold leading-snug">
                      {site.areas.join(", ")}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-amber text-brand-navy shrink-0">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-brand-amber">
                      {copy.contact.hoursTitle}
                    </div>
                    <div className="mt-1 text-base font-semibold">{site.hours}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: form */}
          <form
            data-reveal
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 lg:p-10 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nama">{infoForm.namaLabel}</Label>
                <Input
                  id="nama"
                  required
                  placeholder={infoForm.namaPlaceholder}
                  value={form.nama}
                  onChange={update("nama")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{infoForm.phoneLabel}</Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\-\s]{8,}"
                  required
                  placeholder={infoForm.phonePlaceholder}
                  value={form.phone}
                  onChange={update("phone")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">{infoForm.serviceLabel}</Label>
              <Select
                id="service"
                required
                value={form.service}
                onChange={update("service")}
              >
                <option value="" disabled>
                  {infoForm.servicePlaceholder}
                </option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value={infoForm.serviceOther}>{infoForm.serviceOther}</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="alamat">{infoForm.alamatLabel}</Label>
              <Input
                id="alamat"
                placeholder={infoForm.alamatPlaceholder}
                value={form.alamat}
                onChange={update("alamat")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pesan">{infoForm.pesanLabel}</Label>
              <Textarea
                id="pesan"
                required
                placeholder={infoForm.pesanPlaceholder}
                value={form.pesan}
                onChange={update("pesan")}
              />
            </div>

            <Button type="submit" size="xl" variant="whatsapp" className="w-full">
              <Send className="h-5 w-5" />
              {infoForm.submit}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              Tombol kirim akan membuka WhatsApp dengan pesan terformat ke{" "}
              <span className="font-semibold text-brand-navy">{site.phoneDisplay}</span>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
