import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import BeforeAfter from "@/components/sections/BeforeAfter";
import FAQ from "@/components/sections/FAQ";
import LeadForm from "@/components/sections/LeadForm";
import Contact from "@/components/sections/Contact";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <LeadForm />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919620688878" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] z-[100] transition-transform hover:scale-110"
        data-testid="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border z-[90] flex p-2 gap-2 shadow-[0_-5px_15px_rgba(0,0,0,0.5)]">
        <a 
          href="tel:+919620688878" 
          className="flex-1 bg-primary text-primary-foreground py-3 text-center font-medium tracking-wide rounded-sm flex items-center justify-center gap-2"
          data-testid="mobile-sticky-call"
        >
          📞 Call Now
        </a>
        <a 
          href="https://wa.me/919620688878" 
          className="flex-1 bg-[#25D366] text-white py-3 text-center font-medium tracking-wide rounded-sm flex items-center justify-center gap-2"
          data-testid="mobile-sticky-whatsapp"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}