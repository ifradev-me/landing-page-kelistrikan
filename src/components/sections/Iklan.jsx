import { Button } from "../ui/button"
import {  buildWhatsAppUrl } from "@/lib/whatsapp"
import { ArrowRight } from "lucide-react"

export function Iklan(){
    const waUrl= buildWhatsAppUrl("hai kak, aku melihat website milik pak sunami, dan saya tertarik untuk bekerja sama!", 6282260740023)

    const clickWhatsapp = () => {
        if (typeof window === "undefined") return;
  window.open(waUrl, "_blank", "noopener,noreferrer");
    }
    return (
    <article className="bg-brand-navy-900 text-white/90">
        <div className="container py-8 md:py-12">
            <h2 className="text-2xl font-bold">Ingin website yang <span className="text-brand-whatsapp">menarik pembeli dengan cepat?</span> hubungi ifradil.my.id !</h2>
            <Button
        variant="amber"
        size="default"
        className="mt-4 py-8 w-full text-xl"
        onClick={() => clickWhatsapp()}
      >
        atau chat Whatsapp kami!
        <ArrowRight className="h-4 w-4" />
      </Button>
        </div> 
      <div className="mt-4 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/60"></div>
    </article>
      )
}