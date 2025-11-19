import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-800 hover:text-bloom-mauve transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Logo (Absolute center on desktop) */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
           <h1 className="font-serif text-2xl font-bold text-gray-900 tracking-tighter">
             Fihizu<span className="text-bloom-mauve">.</span>
           </h1>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-800 hover:text-bloom-mauve transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-800 hover:text-bloom-mauve transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="hidden sm:block text-gray-800 hover:text-bloom-mauve transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden overflow-hidden"
          >
            <div className="py-6 px-6 flex flex-col space-y-4 border-t border-gray-100">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-medium text-gray-800 uppercase hover:text-bloom-mauve transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};