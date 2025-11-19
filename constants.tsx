import { Product, Review } from './types';
import { Droplets, Sparkles, SprayCan } from 'lucide-react';
import React from 'react';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#' },
  { name: 'Tienda', href: '#products' },
  { name: 'Rutinas', href: '#story' },
  { name: 'Ingredientes', href: '#manufacturing' },
  { name: 'Sostenibilidad', href: '#packaging' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Serum Facial de Copaiba',
    category: 'Cuidado Facial',
    price: 89.99,
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    badge: 'Más Vendido'
  },
  {
    id: '2',
    name: 'Base de Maquillaje',
    category: 'Bases',
    price: 34.50,
    oldPrice: 45.00,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Serum de Pestañas',
    category: 'Cuidado Facial',
    price: 28.00,
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Crema Nocturna Reparadora',
    category: 'Cuidado Facial',
    price: 65.00,
    rating: 4.7,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=800',
    badge: 'Nuevo'
  },
  {
    id: '5',
    name: 'Mascarilla Purificante de Arcilla',
    category: 'Cuidado Facial',
    price: 42.00,
    rating: 4.8,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Aceite Corporal Nutritivo',
    category: 'Cuidado Corporal',
    price: 55.99,
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800',
    badge: 'Bestseller'
  },
  {
    id: '7',
    name: 'Tónico Facial Equilibrante',
    category: 'Cuidado Facial',
    price: 38.50,
    rating: 4.7,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '8',
    name: 'Bálsamo Labial Regenerador',
    category: 'Cuidado Labios',
    price: 18.99,
    rating: 4.6,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=800',
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: '1',
    author: 'Sofía Méndez',
    rating: 5,
    text: "El Serum de Copaiba transformó completamente la textura de mi piel en dos semanas. Es suave pero increíblemente eficaz."
  },
  {
    id: '2',
    author: 'Elena Rodríguez',
    rating: 5,
    text: "Me encanta la pureza de Fihizu. Ingredientes botánicos que realmente funcionan. ¡Cliente de por vida!"
  }
];

export const CATEGORY_ICONS = [
  { label: 'SERUMS', icon: <Droplets className="w-8 h-8" /> },
  { label: 'LIMPIADORES', icon: <SprayCan className="w-8 h-8" /> }, 
  { label: 'CREMAS', icon: <Sparkles className="w-8 h-8" /> }, 
];