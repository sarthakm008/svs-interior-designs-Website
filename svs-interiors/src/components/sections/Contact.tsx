import { MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Location</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Visit Our Studio
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center bg-card/30 border border-border/50 p-4 md:p-8">
          
          <div className="w-full h-[400px] md:h-[500px] bg-muted/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0402905123583!2d77.6641977!3d12.840672999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c85f60f97dd%3A0xe2f225c34e94e459!2s89a%2C%20Hosur%20Rd%2C%20Electronic%20City%20Phase%20I%2C%20Electronic%20City%2C%20Konappana%20Agrahara%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1780580568908!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SVS Interior Designs Location"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

          <div className="p-4 md:p-8 flex flex-col justify-center h-full space-y-8">
            <div>
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">SVS Interior Designs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Electronic City, our design studio is where ideas take shape. We invite you to visit us and explore materials, discuss your vision, and see our process firsthand.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm text-foreground/70 uppercase tracking-widest font-medium mb-1">Address</p>
                <p className="text-foreground">Electronic City Phase 1, Bangalore – 560100</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm text-foreground/70 uppercase tracking-widest font-medium mb-1">Hours</p>
                <p className="text-foreground">Open 24 Hours</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm text-foreground/70 uppercase tracking-widest font-medium mb-1">Phone</p>
                <a href="tel:+919620688878" className="text-foreground hover:text-primary transition-colors">+91 96206 88878</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}