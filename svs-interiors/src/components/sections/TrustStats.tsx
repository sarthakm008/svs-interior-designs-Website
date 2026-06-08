import { motion } from "framer-motion";
import { Star, Smile, Clock, Gem, IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { icon: <Star className="w-8 h-8 text-primary" />, value: "4.9★", label: "Google Rating" },
  { icon: <Smile className="w-8 h-8 text-primary" />, value: "57+", label: "Happy Clients", isCount: true, target: 57 },
  { icon: <Clock className="w-8 h-8 text-primary" />, value: "100%", label: "On-Time Delivery", isCount: true, target: 100, suffix: "%" },
  { icon: <Gem className="w-8 h-8 text-primary" />, value: "Premium", label: "Quality Materials" },
  { icon: <IndianRupee className="w-8 h-8 text-primary" />, value: "Budget", label: "Friendly Solutions" },
];

function CountUp({ target, suffix = "" }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // ease out expo
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return <>{count}{suffix}</>;
}

export default function TrustStats() {
  return (
    <section className="py-12 bg-background border-b border-border/30 relative z-30 -mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-card-border p-6 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
              data-testid={`stat-card-${index}`}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                {stat.isCount && stat.target ? (
                  <CountUp target={stat.target} suffix={stat.suffix || "+"} />
                ) : (
                  stat.value
                )}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}