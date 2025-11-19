import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORY_ICONS } from '../constants';

export const CategoryIcons: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-end gap-12 md:gap-8">
          {CATEGORY_ICONS.map((item, index) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon Container with Border Effect */}
              <div className="w-16 h-24 md:w-20 md:h-32 border-2 border-gray-900 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white group-hover:-translate-y-2">
                 {/* Custom shape simulation */}
                 <div className="transform scale-125">
                   {item.icon}
                 </div>
              </div>
              <span className="font-bold text-bloom-darkPink text-lg tracking-widest uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};