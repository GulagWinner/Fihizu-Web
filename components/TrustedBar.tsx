import React from 'react';
import { Star } from 'lucide-react';

export const TrustedBar: React.FC = () => {
  return (
    <div className="bg-bloom-mauve w-full py-12 px-4 relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-white">
        
        {/* Left Text */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="font-sans text-xl md:text-2xl font-semibold leading-tight">
            Confianza de más de 350,000+ clientes desde 2008
          </h3>
        </div>

        {/* Middle Rating */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold font-serif mb-2">4.6</span>
          <div className="flex space-x-1 mb-1 text-yellow-300">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current text-yellow-300/50" />
          </div>
          <span className="text-xs font-medium opacity-90 tracking-wide">3,350 Valoraciones</span>
        </div>

        {/* Right Stats */}
        <div className="col-span-1 flex flex-col items-center md:items-end text-center md:text-right">
          <span className="text-5xl font-bold font-serif mb-2">6M+</span>
          <span className="text-sm font-medium opacity-90 max-w-[150px]">
            Ventas de productos globales por año
          </span>
        </div>

      </div>
    </div>
  );
};