import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Store, 
  MessageSquare, 
  Image as ImageIcon, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  RotateCcw, 
  Save, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Sparkles, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Sprout
} from 'lucide-react';
import { useNursery } from '../../context/NurseryContext';
import { Product, ProductCategory, AdminTab, CustomerEnquiry } from '../../types';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const AdminDashboard: React.FC = () => {
  const { 
    isAdminLoggedIn, 
    logoutAdmin, 
    setCurrentRoute, 
    products, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    resetProducts, 
    businessInfo, 
    updateBusinessInfo, 
    resetBusinessInfo, 
    enquiries, 
    updateEnquiryStatus, 
    deleteEnquiry, 
    gallery, 
    addGalleryItem, 
    deleteGalleryItem 
  } = useNursery();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  // Product Modal State
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const [prodName, setProdName] = useState('');
  const [prodCategory, setProdCategory] = useState<ProductCategory>('Indoor');
  const [prodDesc, setProdDesc] = useState('');
  const [prodPriceRange, setProdPriceRange] = useState('₹150 – ₹350');
  const [prodInStock, setProdInStock] = useState(true);
  const [prodFeatured, setProdFeatured] = useState(false);
  const [prodImage, setProdImage] = useState('https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800');
  const [prodLight, setProdLight] = useState('Bright indirect sunlight');
  const [prodWater, setProdWater] = useState('Water weekly when soil is dry');
  const [prodDifficulty, setProdDifficulty] = useState<'Easy' | 'Moderate' | 'Expert'>('Easy');

  // Product Search Filter
  const [prodSearch, setProdSearch] = useState('');

  // Business Form State
  const [bizName, setBizName] = useState(businessInfo.name);
  const [bizTagline, setBizTagline] = useState(businessInfo.tagline);
  const [bizDesc, setBizDesc] = useState(businessInfo.description);
  const [bizPhone, setBizPhone] = useState(businessInfo.phone);
  const [bizEmail, setBizEmail] = useState(businessInfo.email);
  const [bizAddress, setBizAddress] = useState(businessInfo.address);
  const [bizHours, setBizHours] = useState(businessInfo.hours);
  const [bizWhatsapp, setBizWhatsapp] = useState(businessInfo.whatsappNumber);
  const [bizAnnouncement, setBizAnnouncement] = useState(businessInfo.announcement);

  // Gallery Modal State
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galTitle, setGalTitle] = useState('');
  const [galCategory, setGalCategory] = useState<'Nursery Layout' | 'Indoor Collection' | 'Outdoor & Palms' | 'Supplies & Pots'>('Indoor Collection');
  const [galImage, setGalImage] = useState('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200');
  const [galCaption, setGalCaption] = useState('');

  // Protect Admin Route
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-serif text-gray-900">Access Restricted</h2>
        <p className="text-sm text-gray-600 max-w-md">
          You need to login to view the PPN Nursery demo admin dashboard.
        </p>
        <button
          onClick={() => setCurrentRoute('admin-login')}
          className="bg-emerald-800 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md"
        >
          Go to Admin Login Page
        </button>
      </div>
    );
  }

  // Open Product Modal for Create
  const handleOpenNewProduct = () => {
    setEditingProductId(null);
    setProdName('');
    setProdCategory('Indoor');
    setProdDesc('');
    setProdPriceRange('₹150 – ₹350');
    setProdInStock(true);
    setProdFeatured(false);
    setProdImage('https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800');
    setProdLight('Bright indirect sunlight');
    setProdWater('Water weekly');
    setProdDifficulty('Easy');
    setIsProductModalOpen(true);
  };

  // Open Product Modal for Edit
  const handleOpenEditProduct = (prod: Product) => {
    setEditingProductId(prod.id);
    setProdName(prod.name);
    setProdCategory(prod.category);
    setProdDesc(prod.description);
    setProdPriceRange(prod.priceRange);
    setProdInStock(prod.inStock);
    setProdFeatured(prod.featured);
    setProdImage(prod.image);
    setProdLight(prod.careInstructions?.light || 'Bright indirect light');
    setProdWater(prod.careInstructions?.water || 'Water weekly');
    setProdDifficulty(prod.careInstructions?.difficulty || 'Easy');
    setIsProductModalOpen(true);
  };

  // Save Product
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodName.trim()) return;

    const productPayload = {
      name: prodName,
      category: prodCategory,
      description: prodDesc,
      priceRange: prodPriceRange,
      inStock: prodInStock,
      featured: prodFeatured,
      image: prodImage,
      careInstructions: {
        light: prodLight,
        water: prodWater,
        difficulty: prodDifficulty
      }
    };

    if (editingProductId) {
      updateProduct(editingProductId, productPayload);
    } else {
      addProduct(productPayload);
    }

    setIsProductModalOpen(false);
  };

  // Save Business Info
  const handleSaveBusinessInfo = (e: React.FormEvent) => {
    e.preventDefault();
    updateBusinessInfo({
      name: bizName,
      tagline: bizTagline,
      description: bizDesc,
      phone: bizPhone,
      email: bizEmail,
      address: bizAddress,
      hours: bizHours,
      whatsappNumber: bizWhatsapp,
      announcement: bizAnnouncement
    });
  };

  // Save Gallery Item
  const handleSaveGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galTitle.trim()) return;

    addGalleryItem({
      title: galTitle,
      category: galCategory,
      imageUrl: galImage,
      caption: galCaption
    });

    setIsGalleryModalOpen(false);
    setGalTitle('');
    setGalCaption('');
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(prodSearch.toLowerCase()) ||
    p.category.toLowerCase().includes(prodSearch.toLowerCase())
  );

  const newEnquiriesCount = enquiries.filter((e) => e.status === 'New').length;

  return (
    <div className="bg-[#F8FAf6] min-h-screen py-8 pb-16">
      
      {/* Top Demo Alert Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-amber-400/90 text-slate-950 font-semibold px-4 py-3 rounded-2xl border border-amber-300 shadow-xs flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-900 shrink-0" />
            <span>
              <strong>Demo Admin Mode Active:</strong> Any product edits, business details, or gallery updates are saved in browser storage (`localStorage`) and will immediately reflect across the public website.
            </span>
          </div>
          <button
            onClick={() => setCurrentRoute('home')}
            className="bg-slate-900 text-white font-bold px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            View Live Public Site →
          </button>
        </div>
      </div>

      {/* Main Admin Dashboard Window */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden">
          
          {/* Admin Header */}
          <div className="bg-emerald-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-emerald-800">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                <Sprout className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-serif text-white">PPN Nursery Management</h1>
                <p className="text-xs text-emerald-200">Admin Control Center • Bengaluru</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentRoute('home')}
                className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 text-xs font-bold px-4 py-2.5 rounded-xl border border-emerald-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-amber-300" />
                <span>Public Website</span>
              </button>

              <button
                onClick={logoutAdmin}
                className="flex items-center gap-1.5 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>

          </div>

          {/* Admin Navigation Tabs */}
          <div className="bg-emerald-950 text-emerald-100 px-6 pt-3 flex items-center gap-2 overflow-x-auto border-b border-emerald-800 no-scrollbar">
            
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-xs font-bold transition-all border-t-2 ${
                activeTab === 'overview'
                  ? 'bg-white text-emerald-900 border-amber-400 shadow-md'
                  : 'text-emerald-300 hover:text-white border-transparent'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-xs font-bold transition-all border-t-2 ${
                activeTab === 'products'
                  ? 'bg-white text-emerald-900 border-amber-400 shadow-md'
                  : 'text-emerald-300 hover:text-white border-transparent'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products ({products.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-xs font-bold transition-all border-t-2 ${
                activeTab === 'business'
                  ? 'bg-white text-emerald-900 border-amber-400 shadow-md'
                  : 'text-emerald-300 hover:text-white border-transparent'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Business Info</span>
            </button>

            <button
              onClick={() => setActiveTab('enquiries')}
              className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-xs font-bold transition-all border-t-2 ${
                activeTab === 'enquiries'
                  ? 'bg-white text-emerald-900 border-amber-400 shadow-md'
                  : 'text-emerald-300 hover:text-white border-transparent'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquiries</span>
              {newEnquiriesCount > 0 && (
                <span className="bg-rose-500 text-white font-extrabold px-2 py-0.5 rounded-full text-[10px]">
                  {newEnquiriesCount} New
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-xs font-bold transition-all border-t-2 ${
                activeTab === 'gallery'
                  ? 'bg-white text-emerald-900 border-amber-400 shadow-md'
                  : 'text-emerald-300 hover:text-white border-transparent'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Gallery ({gallery.length})</span>
            </button>

          </div>

          {/* Admin Tab Content Area */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fadeIn">
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Total Products</span>
                      <Package className="w-5 h-5 text-emerald-700" />
                    </div>
                    <p className="text-3xl font-black font-serif text-emerald-950">{products.length}</p>
                    <p className="text-[11px] text-emerald-700">
                      {products.filter((p) => p.inStock).length} in-stock • {products.filter((p) => p.featured).length} featured
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">Customer Enquiries</span>
                      <MessageSquare className="w-5 h-5 text-amber-700" />
                    </div>
                    <p className="text-3xl font-black font-serif text-amber-950">{enquiries.length}</p>
                    <p className="text-[11px] text-amber-800">
                      {newEnquiriesCount} new unread enquiries
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Google Rating</span>
                      <Star className="w-5 h-5 text-blue-700 fill-amber-400" />
                    </div>
                    <p className="text-3xl font-black font-serif text-blue-950">{businessInfo.rating} ★</p>
                    <p className="text-[11px] text-blue-800">{businessInfo.reviewCount}+ Google Customer Reviews</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">Gallery Photos</span>
                      <ImageIcon className="w-5 h-5 text-purple-700" />
                    </div>
                    <p className="text-3xl font-black font-serif text-purple-950">{gallery.length}</p>
                    <p className="text-[11px] text-purple-800">Nursery & Collection Photos</p>
                  </div>

                </div>

                {/* Quick Action Bar */}
                <div className="p-6 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-2xl space-y-4 shadow-md">
                  <h3 className="font-bold text-lg font-serif text-amber-300">Quick Administrative Actions</h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        setActiveTab('products');
                        handleOpenNewProduct();
                      }}
                      className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Product</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('business')}
                      className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs border border-emerald-600"
                    >
                      <Store className="w-4 h-4 text-amber-300" />
                      <span>Edit Phone / Hours / Address</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('enquiries')}
                      className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs border border-emerald-600"
                    >
                      <MessageSquare className="w-4 h-4 text-amber-300" />
                      <span>View Recent Messages ({newEnquiriesCount} New)</span>
                    </button>
                  </div>
                </div>

                {/* Recent Products Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg font-serif text-gray-900">Current Catalog Highlights</h3>
                    <button
                      onClick={() => setActiveTab('products')}
                      className="text-emerald-800 font-bold text-xs hover:underline"
                    >
                      Manage All Products →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.slice(0, 4).map((p) => (
                      <div key={p.id} className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3">
                        <ImageWithFallback
                          src={p.image}
                          alt={p.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-lg object-cover border border-gray-300 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-xs text-gray-900 truncate">{p.name}</p>
                          <p className="text-[11px] text-emerald-700 font-semibold">{p.category} • {p.priceRange}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: PRODUCTS MANAGEMENT */}
            {activeTab === 'products' && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Header Controls */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold font-serif text-gray-900">Product Catalog Management</h2>
                    <p className="text-xs text-gray-500">Add, edit, or remove products displayed on the public website.</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={resetProducts}
                      className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-gray-300"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Defaults</span>
                    </button>

                    <button
                      onClick={handleOpenNewProduct}
                      className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md"
                    >
                      <Plus className="w-4 h-4 text-amber-300" />
                      <span>Add New Product</span>
                    </button>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-md">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by product name or category..."
                    value={prodSearch}
                    onChange={(e) => setProdSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-emerald-800 text-white font-bold">
                        <th className="p-3.5 pl-4">Product</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Price Range</th>
                        <th className="p-3.5">Stock Status</th>
                        <th className="p-3.5">Featured</th>
                        <th className="p-3.5 text-right pr-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {filteredProducts.map((prod) => (
                        <tr key={prod.id} className="hover:bg-emerald-50/50 transition-colors">
                          <td className="p-3.5 pl-4">
                            <div className="flex items-center gap-3">
                              <ImageWithFallback
                                src={prod.image}
                                alt={prod.name}
                                referrerPolicy="no-referrer"
                                className="w-10 h-10 rounded-lg object-cover border border-gray-200 shrink-0"
                              />
                              <div>
                                <p className="font-bold text-gray-900 text-xs">{prod.name}</p>
                                <p className="text-[11px] text-gray-500 line-clamp-1">{prod.description}</p>
                              </div>
                            </div>
                          </td>

                          <td className="p-3.5 font-semibold text-emerald-800">
                            {prod.category}
                          </td>

                          <td className="p-3.5 font-mono text-gray-800 font-bold">
                            {prod.priceRange}
                          </td>

                          <td className="p-3.5">
                            <button
                              onClick={() => updateProduct(prod.id, { inStock: !prod.inStock })}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                prod.inStock
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : 'bg-rose-100 text-rose-800 border border-rose-300'
                              }`}
                            >
                              {prod.inStock ? '✓ In Stock' : '✕ Out of Stock'}
                            </button>
                          </td>

                          <td className="p-3.5">
                            <button
                              onClick={() => updateProduct(prod.id, { featured: !prod.featured })}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                prod.featured
                                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                  : 'bg-gray-100 text-gray-600 border border-gray-200'
                              }`}
                            >
                              {prod.featured ? '★ Featured' : 'Standard'}
                            </button>
                          </td>

                          <td className="p-3.5 text-right pr-4">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleOpenEditProduct(prod)}
                                className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                                title="Edit Product"
                              >
                                <Edit className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => {
                                  if (confirm(`Are you sure you want to delete "${prod.name}"?`)) {
                                    deleteProduct(prod.id);
                                  }
                                }}
                                className="p-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 transition-colors"
                                title="Delete Product"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

            {/* TAB 3: BUSINESS INFO MANAGEMENT */}
            {activeTab === 'business' && (
              <div className="space-y-6 animate-fadeIn">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold font-serif text-gray-900">Manage Business Information</h2>
                    <p className="text-xs text-gray-500">
                      Update address, phone number, hours, and banners. Changes reflect live on the website.
                    </p>
                  </div>

                  <button
                    onClick={resetBusinessInfo}
                    className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-gray-300"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Info</span>
                  </button>
                </div>

                <form onSubmit={handleSaveBusinessInfo} className="space-y-6 bg-white p-6 rounded-2xl border border-emerald-100">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        required
                        value={bizName}
                        onChange={(e) => setBizName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Tagline
                      </label>
                      <input
                        type="text"
                        required
                        value={bizTagline}
                        onChange={(e) => setBizTagline(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        required
                        value={bizPhone}
                        onChange={(e) => setBizPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="text"
                        required
                        value={bizWhatsapp}
                        onChange={(e) => setBizWhatsapp(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={bizEmail}
                        onChange={(e) => setBizEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Store Address
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={bizAddress}
                      onChange={(e) => setBizAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Opening Hours
                      </label>
                      <input
                        type="text"
                        required
                        value={bizHours}
                        onChange={(e) => setBizHours(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Top Announcement Banner Text
                      </label>
                      <input
                        type="text"
                        value={bizAnnouncement}
                        onChange={(e) => setBizAnnouncement(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Business Description
                    </label>
                    <textarea
                      rows={3}
                      value={bizDesc}
                      onChange={(e) => setBizDesc(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md"
                  >
                    <Save className="w-4 h-4 text-amber-300" />
                    <span>Save & Publish Changes Live</span>
                  </button>

                </form>

              </div>
            )}

            {/* TAB 4: ENQUIRIES INBOX */}
            {activeTab === 'enquiries' && (
              <div className="space-y-6 animate-fadeIn">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold font-serif text-gray-900">Customer Enquiries Inbox</h2>
                    <p className="text-xs text-gray-500">Messages and quote requests submitted via website forms.</p>
                  </div>
                </div>

                {enquiries.length === 0 ? (
                  <div className="p-12 text-center bg-gray-50 rounded-2xl border border-gray-200 text-gray-500 space-y-2">
                    <MessageSquare className="w-8 h-8 text-gray-400 mx-auto" />
                    <p className="font-bold text-sm">No enquiries yet</p>
                    <p className="text-xs">When visitors submit contact forms, they will appear here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {enquiries.map((enq) => (
                      <div
                        key={enq.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          enq.status === 'New'
                            ? 'bg-amber-50/70 border-amber-300 shadow-xs'
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-200/60 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-gray-900">{enq.name}</span>
                            <span className="text-xs text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full">
                              {enq.interest}
                            </span>
                            {enq.productName && (
                              <span className="text-[11px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full font-mono">
                                Prod: {enq.productName}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-mono">{enq.date}</span>

                            <select
                              value={enq.status}
                              onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                              className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                                enq.status === 'New'
                                  ? 'bg-rose-100 text-rose-800 border-rose-300'
                                  : enq.status === 'Contacted'
                                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                                  : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              }`}
                            >
                              <option value="New">🔴 New</option>
                              <option value="Contacted">🟡 Contacted</option>
                              <option value="Resolved">🟢 Resolved</option>
                            </select>

                            <button
                              onClick={() => deleteEnquiry(enq.id)}
                              className="p-1.5 rounded-lg bg-gray-100 hover:bg-rose-100 text-gray-500 hover:text-rose-700"
                              title="Delete Enquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="pt-3 space-y-2 text-xs">
                          <p className="text-gray-800 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-200/80">
                            "{enq.message}"
                          </p>

                          <div className="flex items-center gap-4 text-xs font-semibold text-gray-700 pt-1">
                            <a href={`tel:${enq.phone}`} className="flex items-center gap-1 text-emerald-800 hover:underline">
                              <Phone className="w-3.5 h-3.5 text-amber-500" />
                              <span>{enq.phone}</span>
                            </a>
                            {enq.email && (
                              <a href={`mailto:${enq.email}`} className="flex items-center gap-1 text-emerald-800 hover:underline">
                                <Mail className="w-3.5 h-3.5 text-amber-500" />
                                <span>{enq.email}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}

            {/* TAB 5: GALLERY MANAGEMENT */}
            {activeTab === 'gallery' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold font-serif text-gray-900">Nursery Gallery Management</h2>
                    <p className="text-xs text-gray-500">Upload or remove photos shown in the public gallery.</p>
                  </div>

                  <button
                    onClick={() => setIsGalleryModalOpen(true)}
                    className="flex items-center gap-2 bg-emerald-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs"
                  >
                    <Plus className="w-4 h-4 text-amber-300" />
                    <span>Add Photo</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs relative group">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-44 object-cover"
                      />
                      <div className="p-3 space-y-1">
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {item.category}
                        </span>
                        <p className="font-bold text-xs text-gray-900">{item.title}</p>
                        <p className="text-[11px] text-gray-500 line-clamp-1">{item.caption}</p>
                      </div>

                      <button
                        onClick={() => deleteGalleryItem(item.id)}
                        className="absolute top-2 right-2 p-2 rounded-xl bg-rose-600 text-white shadow-md hover:bg-rose-700 opacity-90 hover:opacity-100"
                        title="Delete photo"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Add / Edit Product Modal */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 animate-fadeIn my-8 max-h-[90vh] flex flex-col">
            
            <div className="bg-emerald-900 text-white p-5 flex items-center justify-between">
              <h3 className="font-bold text-lg font-serif">
                {editingProductId ? 'Edit Product Details' : 'Add New Product to Catalog'}
              </h3>
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="p-6 space-y-4 overflow-y-auto text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">
                    Product Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                    placeholder="e.g. Ficus Lyrata (Fiddle Leaf)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Category</label>
                  <select
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value as ProductCategory)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Flowering">Flowering</option>
                    <option value="Garden Supplies">Garden Supplies</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Indicative Price Range</label>
                  <input
                    type="text"
                    required
                    value={prodPriceRange}
                    onChange={(e) => setProdPriceRange(e.target.value)}
                    placeholder="e.g. ₹150 – ₹350"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-6 pt-5">
                  <label className="inline-flex items-center gap-2 cursor-pointer font-bold text-gray-700">
                    <input
                      type="checkbox"
                      checked={prodInStock}
                      onChange={(e) => setProdInStock(e.target.checked)}
                      className="rounded-md text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                    />
                    <span>In Stock</span>
                  </label>

                  <label className="inline-flex items-center gap-2 cursor-pointer font-bold text-amber-900">
                    <input
                      type="checkbox"
                      checked={prodFeatured}
                      onChange={(e) => setProdFeatured(e.target.checked)}
                      className="rounded-md text-amber-500 focus:ring-amber-500 w-4 h-4"
                    />
                    <span>Featured on Home</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">Description</label>
                <textarea
                  rows={2}
                  value={prodDesc}
                  onChange={(e) => setProdDesc(e.target.value)}
                  placeholder="Short description of plant benefits or supply specifications..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              {/* Image Input + Live Preview */}
              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">Image URL</label>
                <input
                  type="text"
                  required
                  value={prodImage}
                  onChange={(e) => setProdImage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500"
                />

                <div className="mt-2 flex items-center gap-3 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                  <ImageWithFallback
                    src={prodImage}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover border border-gray-300 shrink-0"
                  />
                  <div className="text-[11px] text-gray-500">
                    <p className="font-bold text-gray-700">Live Image Preview</p>
                    <p className="truncate max-w-xs">{prodImage}</p>
                  </div>
                </div>
              </div>

              {/* Care Instructions */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <p className="font-bold text-emerald-900 uppercase">Plant Care Instructions (Optional)</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600">Sunlight Needed</label>
                    <input
                      type="text"
                      value={prodLight}
                      onChange={(e) => setProdLight(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-emerald-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600">Watering Schedule</label>
                    <input
                      type="text"
                      value={prodWater}
                      onChange={(e) => setProdWater(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-emerald-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600">Difficulty Level</label>
                    <select
                      value={prodDifficulty}
                      onChange={(e) => setProdDifficulty(e.target.value as any)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-emerald-200 text-xs bg-white"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl shadow-md"
                >
                  Save Product
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* Add Gallery Photo Modal */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-emerald-100 animate-fadeIn">
            <div className="bg-emerald-900 text-white p-4 flex items-center justify-between">
              <h3 className="font-bold text-sm">Add New Photo to Gallery</h3>
              <button onClick={() => setIsGalleryModalOpen(false)} className="text-emerald-200 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGalleryItem} className="p-5 space-y-3 text-xs">
              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={galTitle}
                  onChange={(e) => setGalTitle(e.target.value)}
                  placeholder="e.g. Ceramic Pots Display"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">Category</label>
                <select
                  value={galCategory}
                  onChange={(e) => setGalCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-white"
                >
                  <option value="Nursery Layout">Nursery Layout</option>
                  <option value="Indoor Collection">Indoor Collection</option>
                  <option value="Outdoor & Palms">Outdoor & Palms</option>
                  <option value="Supplies & Pots">Supplies & Pots</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">Image URL</label>
                <input
                  type="text"
                  required
                  value={galImage}
                  onChange={(e) => setGalImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">Caption</label>
                <input
                  type="text"
                  value={galCaption}
                  onChange={(e) => setGalCaption(e.target.value)}
                  placeholder="Short caption describing the photo..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-300"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-emerald-800 text-white font-bold px-5 py-2 rounded-xl"
                >
                  Add Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
