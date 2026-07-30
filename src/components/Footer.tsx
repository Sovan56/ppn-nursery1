import React from 'react';
import { Sprout, Phone, Mail, MapPin, Clock, ExternalLink, Star, Lock } from 'lucide-react';
import { useNursery } from '../context/NurseryContext';

export const Footer: React.FC = () => {
  const { businessInfo, setCurrentRoute, isAdminLoggedIn } = useNursery();

  return (
    <footer className="bg-emerald-900 text-emerald-100 pt-14 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-serif">
                PPN Nursery
              </span>
            </div>
            <p className="text-sm text-emerald-200/90 leading-relaxed">
              {businessInfo.tagline}
            </p>
            <div className="inline-flex items-center gap-1.5 bg-emerald-800/80 border border-emerald-700/60 px-3 py-1.5 rounded-lg text-xs font-medium text-amber-300">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>{businessInfo.rating} / 5.0 Rating on Google ({businessInfo.reviewCount}+ Reviews)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-b border-emerald-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-200">
              <li>
                <button
                  onClick={() => setCurrentRoute('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('products')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Plant & Supply Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  About Our Nursery
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('gallery')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Nursery Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('contact')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute(isAdminLoggedIn ? 'admin-dashboard' : 'admin-login')}
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-amber-300 transition-colors text-xs pt-1"
                >
                  <Lock className="w-3 h-3" />
                  {isAdminLoggedIn ? 'Admin Panel (Logged In)' : 'Admin Portal Login'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-b border-emerald-800 pb-2">
              Contact & Address
            </h3>
            <ul className="space-y-3 text-sm text-emerald-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {businessInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
                  className="hover:text-amber-300 transition-colors font-semibold text-white"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-amber-300 transition-colors">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-b border-emerald-800 pb-2">
              Hours & Services
            </h3>
            <div className="space-y-3 text-sm text-emerald-200">
              <div className="flex items-center gap-2 text-white font-semibold bg-emerald-800/60 p-2.5 rounded-lg border border-emerald-700">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{businessInfo.hours}</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-300 font-bold mb-1.5">
                  Available Services:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {businessInfo.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-emerald-800 text-emerald-100 px-2 py-1 rounded-md border border-emerald-700/50"
                    >
                      ✓ {srv}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={businessInfo.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-3 py-2 rounded-lg transition-colors shadow-xs"
                >
                  <span>Google Maps Plus Code: {businessInfo.mapsPlusCode}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <p>© {new Date().getFullYear()} PPN Nursery, Bengaluru. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Battarahalli • Virgo Nagar • KR Puram • Whitefield</span>
            <span>|</span>
            <button
              onClick={() => setCurrentRoute('contact')}
              className="text-amber-300 hover:underline"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
