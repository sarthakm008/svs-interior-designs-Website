import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = scrollPosition > 50;

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="flex items-center gap-2 group cursor-pointer"
            data-testid="link-logo"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary tracking-wider leading-none">
                SVS
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/80 font-medium">
                Interior Designs
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-6 font-medium tracking-wide"
              data-testid="button-nav-cta"
            >
              Book Free Consultation
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-base font-medium text-foreground hover:text-primary p-2 border-b border-border/50"
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none w-full mt-2"
              data-testid="button-mobile-nav-cta"
            >
              Book Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
