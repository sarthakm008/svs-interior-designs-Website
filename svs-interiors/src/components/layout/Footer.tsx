import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-primary tracking-wider leading-none">
                SVS
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/80 mt-1">
                Interior Designs
              </span>
            </div>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed pr-4">
              Premium interior design solutions for homes, villas, apartments & commercial spaces in Bangalore. Smooth & hassle-free transformation.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://wa.me/919620688878" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" data-testid="link-social-whatsapp">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" data-testid="link-social-facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" data-testid="link-social-instagram">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Process', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-footer-${link.toLowerCase()}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3">
              {['Residential Interiors', 'Commercial Interiors', 'Custom Furniture', 'Modular Kitchens', 'Wardrobe Designs', 'Renovation'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-footer-service-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-muted-foreground text-sm flex flex-col gap-1">
                <span className="text-foreground/80 font-medium">Address:</span>
                SVS Interior Designs,<br/>Electronic City Phase 1,<br/>Bangalore – 560100
              </li>
              <li className="text-muted-foreground text-sm flex flex-col gap-1">
                <span className="text-foreground/80 font-medium">Phone:</span>
                <a href="tel:+919620688878" className="hover:text-primary transition-colors" data-testid="link-footer-phone">+91 96206 88878</a>
              </li>
              <li className="text-muted-foreground text-sm flex flex-col gap-1">
                <span className="text-foreground/80 font-medium">Business Hours:</span>
                Open 24 Hours
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} SVS Interior Designs. All Rights Reserved. | Electronic City, Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}