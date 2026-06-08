import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import { Star } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImg} 
          alt="Luxury living room interior design in Bangalore" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-background/40 backdrop-blur-md border border-primary/30 px-4 py-1.5 rounded-full mb-6"
          >
            <div className="flex text-primary">
              <Star size={14} className="fill-primary" />
              <Star size={14} className="fill-primary" />
              <Star size={14} className="fill-primary" />
              <Star size={14} className="fill-primary" />
              <Star size={14} className="fill-primary" />
            </div>
            <span className="text-xs font-medium tracking-wide uppercase text-foreground/90">
              4.9★ Google Rating
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              Transforming Spaces
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-primary italic font-medium"
            >
              Into Stunning Experiences
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 font-light leading-relaxed border-l-2 border-primary pl-4"
          >
            Premium Interior Design Solutions for Homes, Villas, Apartments & Commercial Spaces in Bangalore.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 px-8 text-base font-medium tracking-wide"
              onClick={() => scrollTo("#contact")}
              data-testid="button-hero-consultation"
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 rounded-none h-14 px-8 text-base font-medium tracking-wide bg-transparent"
              onClick={() => scrollTo("#projects")}
              data-testid="button-hero-projects"
            >
              View Projects
            </Button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}