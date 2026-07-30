import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Sprout, 
  Phone, 
  Sparkles, 
  Check, 
  SlidersHorizontal, 
  X, 
  Info,
  Droplets,
  Sun,
  PackageCheck
} from 'lucide-react';
import { useNursery } from '../context/NurseryContext';
import { ProductCategory, Product } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const ProductsPage: React.FC = () => {
  const { 
    products, 
    activeCategoryFilter, 
    setActiveCategoryFilter, 
    setEnquiryModalProduct,
    setCurrentRoute 
  } = useNursery();

  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedCareProduct, setSelectedCareProduct] = useState<Product | null>(null);

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Indoor',
    'Outdoor',
    'Flowering',
    'Garden Supplies'
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      activeCategoryFilter === 'All' || p.category === activeCategoryFilter;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStock = !inStockOnly || p.inStock;

    return matchesCategory && matchesSearch && matchesStock;
  });

  return (
    <div className="py-10 bg-[#F8FAf6] min-h-screen space-y-10">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-3xl p-8 sm:p-12 shadow-lg border border-emerald-700/80 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-8 translate-y-8">
            <Sprout className="w-80 h-80 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-800 px-3 py-1 rounded-full border border-emerald-700">
              Plant & Supply Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-white">
              Explore Our Plants & Nursery Supplies
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Browse healthy indoor plants, vibrant flowering shrubs, outdoor palms, ceramic pots, cocopeat, and organic vermicompost. Doorstep delivery available across Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Bulk Order Callout Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-amber-950 text-sm sm:text-base">
                Looking for Bulk Orders for Apartment Societies or Landscaping Projects?
              </h3>
              <p className="text-xs text-amber-900/80">
                We supply plants, compost & pots in wholesale quantities with fast transport in Bengaluru.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentRoute('contact')}
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            Get Wholesale Quote
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-emerald-100 shadow-xs space-y-4">
          
          {/* Top Row: Search & Stock Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search plants, soil, pots..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm bg-gray-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* In-Stock Filter Toggle */}
            <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-700 bg-emerald-50/80 px-3.5 py-2 rounded-xl border border-emerald-200">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded-md text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
              <span>In-Stock Items Only</span>
            </label>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-emerald-50/80 text-emerald-900 hover:bg-emerald-100 border border-emerald-200/60'
                  }`}
                >
                  {cat === 'All' ? 'All Products' : cat}
                  <span className="ml-1.5 opacity-70 text-[10px]">
                    ({cat === 'All' ? products.length : products.filter((p) => p.category === cat).length})
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-600 font-medium px-1">
          <p>
            Showing <span className="font-bold text-emerald-900">{filteredProducts.length}</span> items
            {activeCategoryFilter !== 'All' && <span> in <strong>{activeCategoryFilter}</strong></span>}
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </p>

          {(searchQuery || activeCategoryFilter !== 'All' || inStockOnly) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryFilter('All');
                setInStockOnly(false);
              }}
              className="text-emerald-700 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-emerald-100 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Sprout className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif text-gray-800">No products found</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              We couldn't find any plant matching your filter criteria. Try searching for "Snake Plant" or "Cocopeat".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryFilter('All');
                setInStockOnly(false);
              }}
              className="bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 bg-emerald-900/90 text-emerald-100 font-bold text-[10px] px-2.5 py-1 rounded-lg backdrop-blur-xs">
                      {product.category}
                    </span>

                    {/* Price Range Pill */}
                    <span className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-extrabold text-[11px] px-2.5 py-1 rounded-lg shadow-sm">
                      {product.priceRange}
                    </span>

                    {/* Out of stock overlay */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center">
                        <span className="bg-rose-600 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-sm">
                          Temporarily Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base text-gray-900 font-serif group-hover:text-emerald-800 transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Care Quick Info */}
                    {product.careInstructions && (
                      <div className="pt-2 flex items-center justify-between text-[11px] text-emerald-800 bg-emerald-50/80 px-2.5 py-1.5 rounded-lg border border-emerald-100">
                        <span className="flex items-center gap-1 font-medium">
                          <Sun className="w-3 h-3 text-amber-500" />
                          {product.careInstructions.light || 'Sunlight care'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedCareProduct(product)}
                          className="text-emerald-700 hover:underline font-bold text-[10px] flex items-center gap-0.5"
                        >
                          <Info className="w-3 h-3" />
                          Care Tips
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setEnquiryModalProduct(product)}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-xs active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>Enquire for Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Care Details Modal */}
      {selectedCareProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-emerald-100 animate-fadeIn">
            <div className="bg-emerald-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sprout className="w-5 h-5 text-amber-300" />
                <h3 className="font-bold text-sm text-white font-serif">
                  Care Guide: {selectedCareProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCareProduct(null)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs text-gray-700">
              <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-xl">
                <ImageWithFallback
                  src={selectedCareProduct.image}
                  alt={selectedCareProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-lg object-cover border border-emerald-200"
                />
                <div>
                  <h4 className="font-bold text-sm text-emerald-900">{selectedCareProduct.name}</h4>
                  <p className="text-[11px] text-emerald-700">{selectedCareProduct.category} • Indicative Price: {selectedCareProduct.priceRange}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-amber-50/60 border border-amber-100">
                  <Sun className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-900">Sunlight Requirement</p>
                    <p className="text-gray-600">{selectedCareProduct.careInstructions?.light || 'Prefers bright indirect light.'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-blue-50/60 border border-blue-100">
                  <Droplets className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-blue-900">Watering Schedule</p>
                    <p className="text-gray-600">{selectedCareProduct.careInstructions?.water || 'Water when soil feels dry to touch.'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-emerald-900">Difficulty & Maintenance</p>
                    <p className="text-gray-600">{selectedCareProduct.careInstructions?.difficulty || 'Easy maintenance plant.'}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    const p = selectedCareProduct;
                    setSelectedCareProduct(null);
                    setEnquiryModalProduct(p);
                  }}
                  className="w-full bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs"
                >
                  Proceed to Enquire about {selectedCareProduct.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
