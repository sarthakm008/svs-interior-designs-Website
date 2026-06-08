import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Eye, X } from "lucide-react";

import bedroomImg from "@/assets/bedroom.png";
import wardrobeImg from "@/assets/wardrobe.png";
import afterImg from "@/assets/after.png";
import kitchenImg from "@/assets/kitchen.jpg";
import livingRoomImg from "@/assets/living-room.jpg";
import officeImg from "@/assets/office.jpg";

const categories = ["All", "Modern Kitchens", "Luxury Bedrooms", "Living Rooms", "Wardrobes", "Office Interiors"];

const portfolioItems = [
  { id: 1, category: "Luxury Bedrooms", title: "Master Bedroom Suite", img: bedroomImg },
  { id: 2, category: "Modern Kitchens", title: "Modular Kitchen", img: kitchenImg },
  { id: 3, category: "Living Rooms", title: "Premium Living Space", img: livingRoomImg },
  { id: 4, category: "Wardrobes", title: "Walk-in Wardrobe", img: wardrobeImg },
  { id: 5, category: "Office Interiors", title: "Corporate Office", img: officeImg },
  { id: 6, category: "Living Rooms", title: "Luxury Apartment", img: afterImg },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-background border-y border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Portfolio</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Featured Projects
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium tracking-wide transition-all border ${
                activeCategory === category 
                  ? "bg-primary border-primary text-primary-foreground" 
                  : "bg-transparent border-border text-foreground hover:border-primary/50"
              }`}
              data-testid={`portfolio-filter-${category.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden border border-border/50 cursor-pointer"
                onClick={() => setSelectedImage(item.img)}
                data-testid={`portfolio-item-${item.id}`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="text-primary w-5 h-5" />
                  </div>
                  <span className="text-primary text-xs uppercase tracking-widest font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              data-testid="button-lightbox-close"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Project detail"
              className="max-w-full max-h-[90vh] object-contain border border-border/50"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}