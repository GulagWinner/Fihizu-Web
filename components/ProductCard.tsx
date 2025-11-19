import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      className="group relative bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-4 left-4 bg-bloom-darkPink text-white text-xs font-bold px-3 py-1 rounded-full z-20">
          {product.badge}
        </span>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center p-4">
           <motion.button
             initial={{ opacity: 0, y: 20 }}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-white text-gray-900 w-full py-3 rounded shadow-lg font-medium text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
           >
             <ShoppingCart className="w-4 h-4" /> Añadir al Carrito
           </motion.button>
        </div>

        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-bloom-mauve transition-colors z-20">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="font-serif text-lg text-gray-900 font-medium mb-2">{product.name}</h3>
        
        <div className="flex items-center justify-center gap-3">
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center justify-center gap-1">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs text-gray-600">{product.rating} ({product.reviews})</span>
        </div>
      </div>
    </motion.div>
  );
};