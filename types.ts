export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
}