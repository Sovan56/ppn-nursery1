import React, { useState } from 'react';
import { Sprout, Phone, Lock, Menu, X, Star, MapPin, Clock, ShieldAlert } from 'lucide-react';
import { useNursery } from '../context/NurseryContext';

export const Header: React.FC = () => {
  const { currentRoute, setCurrentRoute, businessInfo, isAdminLoggedIn } = useNursery();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'About Us', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ] as const;

  const handleNavClick = (id: typeof navItems[number]['id']) => {
    setCurrentRoute(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top Announcement & Quick Info Bar */}
      <div className="bg-emerald-800 text-emerald-50 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap text-emerald-100 font-medium">
            <span className="flex items-center gap-1.5 bg-emerald-700/60 px-2.5 py-0.5 rounded-full text-white text-[11px] font-semibold">
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              {businessInfo.rating} Google Rating ({businessInfo.reviewCount}+ Reviews)
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              {businessInfo.hours}
            </span>
            <span className="hidden lg:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              Battarahalli, Bengaluru
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <a
              href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:text-amber-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{businessInfo.phone}</span>
            </a>

            <span className="text-emerald-500 font-light">|</span>

            {isAdminLoggedIn ? (
              <button
                onClick={() => setCurrentRoute('admin-dashboard')}
                className="flex items-center gap-1 text-amber-300 font-semibold hover:underline"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                Admin Dashboard
              </button>
            ) : (
              <button
                onClick={() => setCurrentRoute('admin-login')}
                className="flex items-center gap-1 text-emerald-200 hover:text-white transition-colors"
              >
                <Lock className="w-3.5 h-3.5" />
                Admin Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setCurrentRoute('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-hidden"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-green-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-emerald-900 font-serif">
                PPN Nursery
              </span>
            </div>
            <p className="text-[11px] font-medium text-emerald-700 tracking-wide uppercase">
              Garden Center • Bengaluru
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentRoute === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-bold shadow-xs border border-emerald-200/80'
                    : 'text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all transform active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
            className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold"
            aria-label="Call Nursery"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-gray-700 hover:bg-emerald-50 border border-gray-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => {
            const isActive = currentRoute === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-base transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-emerald-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-amber-300"></span>}
              </button>
            );
          })}

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold py-3 rounded-xl shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Nursery (087620 43246)</span>
            </a>

            {isAdminLoggedIn ? (
              <button
                onClick={() => {
                  setCurrentRoute('admin-dashboard');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-xl"
              >
                Go to Admin Dashboard
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentRoute('admin-login');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2 text-xs font-medium text-gray-500 hover:text-emerald-700"
              >
                Demo Admin Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
