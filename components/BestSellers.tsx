import React from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../constants';

export const BestSellers: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-bloom-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Más Vendidos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Descubre nuestros productos más amados, creados con ingredientes puros para resultados visibles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border border-gray-900 text-gray-900 px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300">
            Ver Todo
          </button>
        </div>
      </div>
    </section>
  );
};