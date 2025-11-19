import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ROUTINES = [
  {
    title: "Ritual de Mañana",
    description: "Despierta tu piel con luminosidad y protección natural para enfrentar el día.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600",
    step: "01"
  },
  {
    title: "Reparación Nocturna",
    description: "Ingredientes botánicos concentrados que regeneran mientras descansas.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600",
    step: "02"
  },
  {
    title: "Calma Pura",
    description: "Para pieles sensibles que necesitan el toque suave del serum botánico.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=600",
    step: "03"
  }
];

export const Philosophy: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      // Check if container is scrollable (i.e. mobile view where scrollWidth > clientWidth)
      // On desktop grid, this condition is usually false, preventing unwanted scrolling
      if (container.scrollWidth <= container.clientWidth) return;

      const itemWidth = container.firstElementChild?.clientWidth || 0;
      const gap = 24; // gap-6 is 1.5rem which is ~24px
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      let nextScroll = container.scrollLeft + itemWidth + gap;

      // If we've reached the end (or very close to it), reset to 0 (loop)
      if (container.scrollLeft >= maxScroll - 10) {
        nextScroll = 0;
      }

      container.scrollTo({
        left: nextScroll,
        behavior: 'smooth'
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="story" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            Rutinas Recomendadas
          </h2>
          <p className="text-gray-600 font-light max-w-xl mx-auto">
            Encuentra tu equilibrio. Hemos diseñado estos rituales utilizando nuestros ingredientes naturales más puros para cada necesidad de tu piel.
          </p>
        </div>

        {/* Carousel/Grid Layout */}
        {/* Mobile: Horizontal Scroll (Carousel), Desktop: Grid */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          
          {ROUTINES.map((routine, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-0 snap-center group cursor-pointer relative"
            >
              <div className="relative h-[450px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={routine.image} 
                  alt={routine.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Step Number */}
                <span className="absolute top-6 right-6 font-serif text-6xl text-white/20 font-bold">
                  {routine.step}
                </span>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-8 w-full text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                   <h3 className="font-serif text-3xl mb-3">{routine.title}</h3>
                   <div className="h-[1px] w-12 bg-bloom-pink mb-4"></div>
                   <p className="text-base text-white/90 mb-6 font-light">
                     {routine.description}
                   </p>
                   <div className="flex items-center text-sm font-bold uppercase tracking-widest text-bloom-pink hover:text-white transition-colors">
                     Ver Productos <ArrowRight className="w-4 h-4 ml-2" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="flex md:hidden justify-center space-x-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
};