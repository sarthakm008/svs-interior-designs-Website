import { motion } from "framer-motion";
import { Home, Building2, Paintbrush, Hammer, Sofa, Grid2X2 } from "lucide-react";

const services = [
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Residential Interior Design",
    description: "Complete interior solutions for your dream home.",
    subServices: ["Bedroom Design", "Living Room Design", "Kitchen Design", "Wardrobe Design"]
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Commercial Interior Design",
    description: "Professional workspaces that boost productivity.",
    subServices: ["Office Interiors", "Commercial Spaces", "Factory Layout Design"]
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Custom Design Solutions",
    description: "Tailor-made designs fitting your specific needs.",
    subServices: ["Space Planning", "Design Consultancy", "Interior Furnishing", "Design & Build"]
  },
  {
    icon: <Hammer className="w-8 h-8 text-primary" />,
    title: "Renovation & Refurbishment",
    description: "Transform your old spaces into modern masterpieces.",
    subServices: ["Home Renovation", "Refurbishment", "Modern Upgrades"]
  },
  {
    icon: <Sofa className="w-8 h-8 text-primary" />,
    title: "Furniture & Finishing",
    description: "Premium custom furniture and exquisite finishes.",
    subServices: ["Custom Furniture", "Office Furniture", "Window Blinds & Curtains", "Soft Furnishing"]
  },
  {
    icon: <Grid2X2 className="w-8 h-8 text-primary" />,
    title: "Flooring & Decor",
    description: "High-quality flooring and aesthetic decorative elements.",
    subServices: ["Laminate Flooring", "Decorative Elements", "Finishing Solutions"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Expertise</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Comprehensive Interior Services
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            From conceptualization to execution, we offer a complete suite of interior design and contracting services tailored to your vision and budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border/50 p-8 hover:border-primary transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
              data-testid={`service-card-${index}`}
            >
              <div className="bg-card w-16 h-16 flex items-center justify-center border border-border/50 mb-6 group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 font-light">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.subServices.map((sub, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {sub}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}