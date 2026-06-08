import { motion } from "framer-motion";

const steps = [
  {
    title: "Free Consultation",
    desc: "We understand your vision, budget, and requirements."
  },
  {
    title: "Site Visit & Requirement Analysis",
    desc: "Our team visits your space for detailed assessment."
  },
  {
    title: "Design & Planning",
    desc: "3D designs, layouts, and material boards created."
  },
  {
    title: "Material Selection",
    desc: "Premium materials chosen within your budget."
  },
  {
    title: "Execution",
    desc: "Expert craftsmen bring your design to life."
  },
  {
    title: "Final Handover",
    desc: "Walkthrough, snag fixing, and handover."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-card/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">How We Work</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Our Interior Design Process
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2"></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* Number Node */}
                <div className={`absolute left-0 md:left-1/2 w-14 h-14 bg-background border-2 border-primary rounded-full flex items-center justify-center text-primary font-serif text-xl font-bold md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(201,169,110,0.2)]`}>
                  {index + 1}
                </div>

                {/* Content Box */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16"}`}>
                  <div className="bg-background border border-border p-6 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}