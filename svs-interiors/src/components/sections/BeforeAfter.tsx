import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.png";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // Prevent default behavior (like text selection) while dragging globally
  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "auto";
    }
  }, [isDragging]);

  return (
    <section className="py-24 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Transformation</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Before & After
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] overflow-hidden border-2 border-border/50 select-none cursor-ew-resize"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img src={afterImg} alt="After Transformation" className="w-full h-full object-cover" draggable={false} />
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur text-foreground px-3 py-1 text-xs uppercase tracking-widest font-medium border border-border/50">
              After
            </div>
          </div>

          {/* Before Image (Foreground, clipped) */}
          <div 
            className="absolute inset-0 border-r-2 border-primary"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img src={beforeImg} alt="Before Transformation" className="w-full h-full object-cover" draggable={false} />
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground px-3 py-1 text-xs uppercase tracking-widest font-medium border border-border/50">
              Before
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize shadow-[0_0_10px_rgba(201,169,110,0.5)] flex items-center justify-center -ml-0.5"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
              <MoveHorizontal size={20} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
