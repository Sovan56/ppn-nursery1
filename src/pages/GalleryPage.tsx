import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sprout, 
  Filter 
} from 'lucide-react';
import { useNursery } from '../context/NurseryContext';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const { gallery } = useNursery();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Nursery Layout', 'Indoor Collection', 'Outdoor & Palms', 'Supplies & Pots'];

  const filteredGallery = gallery.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null && filteredGallery[activeLightboxIndex]
      ? filteredGallery[activeLightboxIndex]
      : null;

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === 0 ? filteredGallery.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === filteredGallery.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <div className="py-12 bg-[#F8FAf6] min-h-screen space-y-10">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-3xl p-8 sm:p-12 shadow-md border border-emerald-700/80 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-800 px-3 py-1 rounded-full border border-emerald-700">
            Photo Gallery
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-white">
            PPN Nursery Visual Tour
          </h1>
          <p className="text-emerald-100 text-sm max-w-2xl leading-relaxed">
            Take a look at our nursery layout, lush plant collections, decorative pottery, and garden supply displays in Battarahalli, Bengaluru. Click any photo to enlarge.
          </p>
        </div>
      </section>

      {/* Main Gallery Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar bg-white p-3 rounded-2xl border border-emerald-100 shadow-xs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                <span className="absolute top-3 left-3 bg-emerald-900/90 text-emerald-100 font-bold text-[10px] px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  {item.category}
                </span>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="font-bold text-sm font-serif line-clamp-1">{item.title}</h3>
                  <p className="text-[11px] text-emerald-200 line-clamp-2 leading-relaxed">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Card */}
          <div className="max-w-4xl w-full max-h-[90vh] bg-slate-900 text-white rounded-2xl overflow-hidden border border-emerald-800/60 shadow-2xl flex flex-col">
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded-md">
                  {activeItem.category}
                </span>
                <span className="text-xs text-slate-400">
                  Photo {(activeLightboxIndex as number) + 1} of {filteredGallery.length}
                </span>
              </div>
              <h3 className="font-bold text-lg font-serif text-white">{activeItem.title}</h3>
              <p className="text-xs text-emerald-200/80 leading-relaxed">{activeItem.caption}</p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
