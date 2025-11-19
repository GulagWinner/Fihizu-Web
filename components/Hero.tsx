import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-bloom-pink pt-24 pb-12 lg:pt-20 overflow-hidden flex items-center">
      
      {/* Background decorative elements (blobs) */}
      <div className="absolute top-20 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-32 h-32 md:w-40 md:h-40 bg-bloom-mauve/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left mt-8 lg:mt-0 order-1 lg:order-1"
        >
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="text-xs font-medium tracking-widest text-gray-600 uppercase">Cosmética Natural</span>
            <div className="h-[1px] w-16 md:w-24 bg-gray-400 ml-4"></div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-900 leading-[0.95]">
            Serum <br />
            <span className="font-light">facial de</span> <br />
            copaiba
          </h1>

          <p className="mt-6 text-sm md:text-base text-gray-700 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
            Descubre el poder de la botánica concentrada. Este serum hidrata profundamente y equilibra el tono de tu piel utilizando extractos 100% naturales, revelando tu luminosidad sin aditivos sintéticos.
          </p>

          <div className="mt-8 flex flex-col items-center lg:items-start">
            <span className="block text-3xl font-bold text-gray-900 font-serif">$89.99</span>
            <div className="h-[1px] w-32 bg-gray-400 my-4"></div>
            <button className="bg-gray-900 text-white px-8 py-3 text-sm font-bold tracking-widest uppercase rounded hover:bg-gray-800 transition-all hover:scale-105 duration-300 shadow-lg">
              Comprar Ahora
            </button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 flex justify-center lg:justify-end h-[350px] md:h-[600px] lg:h-[700px] w-full order-2 lg:order-2"
        >
           {/* Replicating the 'Stone and Flower' aesthetic via composed elements */}
           <div className="relative w-full h-full">
             {/* Main Product Image */}
             <img 
               src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=1000" 
               alt="Serum de Copaiba" 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-72 lg:w-80 z-20 drop-shadow-2xl rounded-full aspect-[1/2] object-cover object-center"
               style={{ maskImage: 'linear-gradient(black 80%, transparent 100%)' }} 
             />
             
             {/* Floating Elements - Animations */}
             <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-4 right-4 lg:top-20 lg:right-20 w-20 h-20 lg:w-32 lg:h-32 bg-white/30 backdrop-blur-sm rounded-full border border-white/20 z-10"
             />
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-2 lg:bottom-32 lg:left-10 w-12 h-12 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full border border-white/10 z-10"
             />
           </div>
        </motion.div>

      </div>
    </section>
  );
};