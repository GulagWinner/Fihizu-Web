import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Fihizu<span className="text-bloom-mauve">.</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Belleza limpia para el alma moderna. Creamos productos que honran tu belleza natural utilizando ingredientes puros.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-bloom-pink">Tienda</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Todo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidado Facial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidado Capilar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sets & Regalos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-bloom-pink">Ayuda</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contáctanos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tiendas</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-bloom-pink">Mantente al día</h4>
            <p className="text-gray-400 text-sm mb-4">Suscríbete para recibir ofertas exclusivas y tips de belleza.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-bloom-pink transition-colors"
              />
              <button className="bg-bloom-mauve text-white px-4 py-3 text-sm font-bold uppercase hover:bg-bloom-darkPink transition-colors">
                Suscribirse
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © 2024 Fihizu. Creado por <span className="text-gray-400 font-semibold">Felipe Fonseca</span>. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-gray-500 text-xs">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};