import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  BusinessInfo, 
  Product, 
  CustomerReview, 
  GalleryItem, 
  CustomerEnquiry, 
  PageRoute, 
  ProductCategory 
} from '../types';
import { 
  INITIAL_BUSINESS_INFO, 
  INITIAL_PRODUCTS, 
  INITIAL_REVIEWS, 
  INITIAL_GALLERY, 
  INITIAL_ENQUIRIES 
} from '../data/initialData';

const LOCAL_STORAGE_KEY = 'ppn_nursery_data_v2';
const ADMIN_AUTH_KEY = 'ppn_nursery_admin_auth';

interface NurseryContextType {
  // Navigation & Routing
  currentRoute: PageRoute;
  setCurrentRoute: (route: PageRoute) => void;
  activeCategoryFilter: ProductCategory | 'All';
  setActiveCategoryFilter: (category: ProductCategory | 'All') => void;
  
  // Business Info
  businessInfo: BusinessInfo;
  updateBusinessInfo: (info: Partial<BusinessInfo>) => void;
  resetBusinessInfo: () => void;
  
  // Products
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'addedDate'>) => void;
  updateProduct: (id: string, updatedFields: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  resetProducts: () => void;
  
  // Reviews & Gallery
  reviews: CustomerReview[];
  addReview: (review: Omit<CustomerReview, 'id' | 'date' | 'verified'>) => void;
  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  
  // Enquiries
  enquiries: CustomerEnquiry[];
  addEnquiry: (enquiry: Omit<CustomerEnquiry, 'id' | 'date' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: 'New' | 'Contacted' | 'Resolved') => void;
  deleteEnquiry: (id: string) => void;
  
  // Admin Auth
  isAdminLoggedIn: boolean;
  loginAdmin: (user: string, pass: string) => boolean;
  logoutAdmin: () => void;
  
  // Modals & UI Helpers
  enquiryModalProduct: Product | null;
  setEnquiryModalProduct: (prod: Product | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const NurseryContext = createContext<NurseryContextType | undefined>(undefined);

export const NurseryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Routing sync with hash
  const [currentRoute, setCurrentRouteState] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'products', 'about', 'gallery', 'contact', 'admin-login', 'admin-dashboard'].includes(hash)) {
      return hash as PageRoute;
    }
    return 'home';
  });

  const [activeCategoryFilter, setActiveCategoryFilter] = useState<ProductCategory | 'All'>('All');
  const [enquiryModalProduct, setEnquiryModalProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const setCurrentRoute = (route: PageRoute) => {
    setCurrentRouteState(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'products', 'about', 'gallery', 'contact', 'admin-login', 'admin-dashboard'].includes(hash)) {
        setCurrentRouteState(hash as PageRoute);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Admin Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  });

  const loginAdmin = (user: string, pass: string): boolean => {
    if (user.trim() === 'admin' && pass.trim() === 'admin123') {
      setIsAdminLoggedIn(true);
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      showToast('Welcome back, Admin! Demo session active.');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem(ADMIN_AUTH_KEY);
    showToast('Logged out of Admin Panel.');
    setCurrentRoute('home');
  };

  // Main Persistent State
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(INITIAL_BUSINESS_INFO);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [reviews, setReviews] = useState<CustomerReview[]>(INITIAL_REVIEWS);
  const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [enquiries, setEnquiries] = useState<CustomerEnquiry[]>(INITIAL_ENQUIRIES);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.businessInfo) setBusinessInfo(parsed.businessInfo);
        if (parsed.products) setProducts(parsed.products);
        if (parsed.reviews) setReviews(parsed.reviews);
        if (parsed.gallery) setGallery(parsed.gallery);
        if (parsed.enquiries) setEnquiries(parsed.enquiries);
      }
    } catch (e) {
      console.error('Failed to parse saved PPN Nursery data from localStorage', e);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      const dataToSave = {
        businessInfo,
        products,
        reviews,
        gallery,
        enquiries
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.error('Failed to save PPN Nursery data to localStorage', e);
    }
  }, [businessInfo, products, reviews, gallery, enquiries]);

  // Actions
  const updateBusinessInfo = (info: Partial<BusinessInfo>) => {
    setBusinessInfo((prev) => ({ ...prev, ...info }));
    showToast('Business information updated successfully! (Reflected live on site)');
  };

  const resetBusinessInfo = () => {
    setBusinessInfo(INITIAL_BUSINESS_INFO);
    showToast('Business info reset to default listing values.');
  };

  const addProduct = (newProd: Omit<Product, 'id' | 'addedDate'>) => {
    const product: Product = {
      ...newProd,
      id: `prod-${Date.now()}`,
      addedDate: new Date().toISOString().split('T')[0]
    };
    setProducts((prev) => [product, ...prev]);
    showToast(`Product "${product.name}" added to nursery catalog!`);
  };

  const updateProduct = (id: string, updatedFields: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
    showToast('Product updated successfully!');
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    showToast('Product removed from catalog.');
  };

  const resetProducts = () => {
    setProducts(INITIAL_PRODUCTS);
    showToast('Product catalog reset to original default items.');
  };

  const addReview = (newRev: Omit<CustomerReview, 'id' | 'date' | 'verified'>) => {
    const rev: CustomerReview = {
      ...newRev,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      verified: true
    };
    setReviews((prev) => [rev, ...prev]);
    showToast('Thank you for your rating & review!');
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: `gal-${Date.now()}`
    };
    setGallery((prev) => [newItem, ...prev]);
    showToast('New photo added to nursery gallery!');
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((item) => item.id !== id));
    showToast('Photo removed from gallery.');
  };

  const addEnquiry = (enquiryData: Omit<CustomerEnquiry, 'id' | 'date' | 'status'>) => {
    const newEnquiry: CustomerEnquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setEnquiries((prev) => [newEnquiry, ...prev]);
    showToast('Thank you! Your enquiry has been received. Our nursery team will contact you shortly.');
  };

  const updateEnquiryStatus = (id: string, status: 'New' | 'Contacted' | 'Resolved') => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
    showToast(`Enquiry marked as ${status}.`);
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
    showToast('Enquiry record deleted.');
  };

  return (
    <NurseryContext.Provider
      value={{
        currentRoute,
        setCurrentRoute,
        activeCategoryFilter,
        setActiveCategoryFilter,
        businessInfo,
        updateBusinessInfo,
        resetBusinessInfo,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        resetProducts,
        reviews,
        addReview,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        enquiryModalProduct,
        setEnquiryModalProduct,
        toastMessage,
        showToast
      }}
    >
      {children}
    </NurseryContext.Provider>
  );
};

export const useNursery = () => {
  const context = useContext(NurseryContext);
  if (!context) {
    throw new Error('useNursery must be used within a NurseryProvider');
  }
  return context;
};
