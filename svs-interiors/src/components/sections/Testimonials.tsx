import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Excellent service and on-time delivery. SVS team transformed our 2BHK completely. Very professional.",
    name: "Rajesh K.",
    project: "2BHK Interior",
    initials: "RK"
  },
  {
    quote: "Good quality work, quick response, and reasonable pricing. My kitchen looks stunning now.",
    name: "Priya S.",
    project: "Modular Kitchen",
    initials: "PS"
  },
  {
    quote: "Quality work within our budget. Highly recommend for anyone looking for honest, skilled interior designers in Bangalore.",
    name: "Vikram M.",
    project: "Villa Renovation",
    initials: "VM"
  },
  {
    quote: "Professional execution and smooth experience from start to finish. No surprises on cost.",
    name: "Anitha R.",
    project: "Office Interior",
    initials: "AR"
  },
  {
    quote: "Highly recommended for home interiors. They delivered exactly what they promised, on time.",
    name: "Suresh P.",
    project: "3BHK Interior",
    initials: "SP"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Testimonials</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Client Experiences
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((t, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                <div className="h-full bg-card/30 border border-border/50 p-8 hover:border-primary/30 transition-colors relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                  
                  <div className="flex text-primary mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 italic min-h-[80px]">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-serif font-bold text-lg">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-foreground font-serif font-bold tracking-wide">{t.name}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.project}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}