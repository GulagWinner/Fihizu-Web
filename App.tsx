import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustedBar } from './components/TrustedBar';
import { CategoryIcons } from './components/CategoryIcons';
import { BestSellers } from './components/BestSellers';
import { Philosophy } from './components/Philosophy';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white selection:bg-bloom-pink selection:text-bloom-dark">
      <Header />
      
      <main>
        {/* Stack components to match visual flow */}
        <Hero />
        
        {/* The TrustedBar acts as a visual divider immediately after Hero */}
        <div className="-mt-8 relative z-20">
           <TrustedBar />
        </div>
        
        <CategoryIcons />
        <BestSellers />
        <Philosophy />
        
        {/* Simple Testimonial Banner */}
        <section className="bg-bloom-pink/20 py-20 text-center px-4">
          <div className="max-w-3xl mx-auto">
             <h3 className="font-serif text-2xl md:text-3xl italic text-gray-800 mb-6">"La experiencia de cuidado más lujosa. Mi piel se siente profundamente hidratada gracias a la pureza de sus ingredientes naturales."</h3>
             <p className="font-bold uppercase tracking-widest text-sm text-gray-600">— Jessica M., Compra Verificada</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;