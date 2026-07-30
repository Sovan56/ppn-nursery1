export type ProductCategory = 'Indoor' | 'Outdoor' | 'Flowering' | 'Garden Supplies';

export interface CareInstructions {
  light?: string;
  water?: string;
  difficulty?: 'Easy' | 'Moderate' | 'Expert';
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  priceRange: string;
  inStock: boolean;
  featured: boolean;
  image: string;
  careInstructions?: CareInstructions;
  addedDate?: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  rating: number;
  reviewCount: number;
  address: string;
  mapsPlusCode: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
  phone: string;
  email: string;
  hours: string;
  services: string[];
  serviceAreas: string[];
  whatsappNumber: string;
  announcement: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Nursery Layout' | 'Indoor Collection' | 'Outdoor & Palms' | 'Supplies & Pots';
  imageUrl: string;
  caption: string;
}

export interface CustomerEnquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  interest: string;
  message: string;
  productName?: string;
  date: string;
  status: 'New' | 'Contacted' | 'Resolved';
}

export type PageRoute = 'home' | 'products' | 'about' | 'gallery' | 'contact' | 'admin-login' | 'admin-dashboard';

export type AdminTab = 'overview' | 'products' | 'business' | 'enquiries' | 'gallery';
