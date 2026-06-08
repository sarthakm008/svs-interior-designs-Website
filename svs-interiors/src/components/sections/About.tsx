
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import livingRoomImg from "@/assets/living-room.jpg";

export default function About() {
  const features = [
    "Experienced Team",
    "Transparent Pricing",
    "Quality Workmanship",
    "Timely Completion",
    "End-to-End Solutions"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src={livingRoomImg} 
                alt="Premium living room interior in Bangalore" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-primary/30 -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/5 -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Why Choose SVS Interior Designs?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-light">
              SVS Interior Designs specializes in creating beautiful, functional, and personalized interiors that reflect each client's lifestyle and vision. We combine creativity, quality craftsmanship, and project management excellence to deliver spaces that exceed expectations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-border/50 bg-card/30">
              <p className="font-serif text-xl italic text-foreground/80 leading-relaxed">
                "Our goal is not just to design spaces, but to curate environments where life unfolds beautifully."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}