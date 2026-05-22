import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Perks } from "@/components/sections/Perks";
import { Services } from "@/components/sections/Services";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";
import { Iklan } from "@/components/sections/Iklan"
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { SanityProvider } from "@/context/SanityContext";

export default function App() {
  return (
    <SanityProvider>
      <div className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Perks />
          <Services />
          <CtaBanner />
          <Contact />
        </main>
        <Iklan />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </SanityProvider>
  );
}
