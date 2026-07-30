import React from 'react';
import { 
  Sprout, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Users, 
  Sparkles,
  ExternalLink,
  Flower2,
  Trees,
  Package
} from 'lucide-react';
import { useNursery } from '../context/NurseryContext';
import { ProductCategory } from '../types';

export const HomePage: React.FC = () => {
  const { 
    setCurrentRoute, 
    setActiveCategoryFilter, 
    businessInfo, 
    reviews, 
    products, 
    setEnquiryModalProduct 
  } = useNursery();

  const handleCategoryClick = (cat: ProductCategory) => {
    setActiveCategoryFilter(cat);
    setCurrentRoute('products');
  };

  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  const categoryCards: { title: string; category: ProductCategory; icon: any; img: string; desc: string }[] = [
    {
      title: "Indoor Plants",
      category: "Indoor",
      icon: Sprout,
      img: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800",
      desc: "Air-purifying palms, snake plants, ZZ plants, money plants & succulents."
    },
    {
      title: "Outdoor Plants",
      category: "Outdoor",
      icon: Trees,
      img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
      desc: "Landscape palms, crotons, hedges & sun-loving balcony foliage."
    },
    {
      title: "Flowering Plants",
      category: "Flowering",
      icon: Flower2,
      img: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=800",
      desc: "Bougainvillea, roses, Jasmine (Mogra), hibiscus & multi-color annuals."
    },
    {
      title: "Garden Supplies",
      category: "Garden Supplies",
      icon: Package,
      img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800",
      desc: "Cocopeat 5kg, organic vermicompost, ceramic pots, soil & tool kits."
    }
  ];

  return (
    <div className="space-y-16 pb-16 bg-[#F8FAf6]">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 text-white overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Rating Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-800/90 border border-emerald-600/70 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-300 shadow-inner">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>5.0 ★ Rated Garden Center in Bengaluru ({businessInfo.reviewCount}+ Google Reviews)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight">
              Premium Plants & <span className="text-amber-400 underline decoration-amber-500/50 decoration-4">Garden Solutions</span> in Bengaluru
            </h1>

            <p className="text-base sm:text-lg text-emerald-100 max-w-2xl font-light leading-relaxed">
              Indoor plants, outdoor foliage, flowering shrubs, ceramic pots, cocopeat, and organic fertilizers — with fast doorstep delivery and in-store pick-up in Battarahalli, Virgo Nagar, KR Puram, and Whitefield.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setCurrentRoute('products')}
                className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>View Products Catalog</span>
              </button>

              <button
                onClick={() => setCurrentRoute('contact')}
                className="flex items-center gap-2 bg-emerald-700/80 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-emerald-500/80 shadow-sm transition-all hover:border-emerald-400 text-base"
              >
                <MapPin className="w-5 h-5 text-amber-300" />
                <span>Visit Us & Contact</span>
              </button>
            </div>

            {/* Quick Badge List */}
            <div className="pt-6 border-t border-emerald-700/60 grid grid-cols-3 gap-3 text-emerald-200 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>In-Store Shopping</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Delivery Available</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Healthy Guaranteed</span>
              </div>
            </div>

          </div>

          {/* Hero Banner Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-600/30 group">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200"
                alt="Indoor plants at PPN Nursery Bengaluru"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-emerald-900/90 backdrop-blur-md rounded-2xl border border-emerald-700/80 text-white space-y-1">
                <p className="text-xs font-bold uppercase text-amber-400 tracking-wider">PPN Nursery • TC Palya Cross Rd</p>
                <p className="text-sm font-semibold text-white">Battarahalli, Old Madras Road, Bengaluru</p>
                <p className="text-xs text-emerald-200">Open Daily 9:00 AM – 8:00 PM • Phone: 087620 43246</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. About Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-emerald-100/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/80 px-3 py-1 rounded-full">
              <Sprout className="w-3.5 h-3.5" />
              <span>About PPN Nursery</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-gray-900">
              Your Trusted Local Garden Center in Battarahalli, Bengaluru
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              PPN Nursery is a top-rated garden center located on Kithaganur Main Road, TC Palya Cross, near Indus Valley School. We specialize in providing healthy indoor and outdoor plants, decorative ceramic pots, organic potting soil, vermicompost, cocopeat, and complete gardening essentials for homes, offices, housing societies, and landscape projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-gray-800 font-medium">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />
                <span>5.0★ Rated on Google (321+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <ShoppingBag className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>In-Store Shopping & Pick-Up</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <Truck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Fast Doorstep Delivery</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <Sparkles className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Wide Variety of Plants & Supplies</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentRoute('about')}
                className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-900 font-bold text-sm underline underline-offset-4 decoration-emerald-500 hover:decoration-emerald-700"
              >
                <span>Read Full About Story & Service Areas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white rounded-2xl p-6 shadow-md border border-emerald-700 space-y-4">
              <h3 className="font-bold text-lg font-serif text-amber-300">Quick Store Info</h3>
              <ul className="space-y-3 text-sm text-emerald-100">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{businessInfo.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={`tel:${businessInfo.phone}`} className="font-bold text-white hover:underline">
                    {businessInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{businessInfo.hours}</span>
                </li>
              </ul>
              <a
                href={businessInfo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 rounded-xl transition-colors text-sm"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Explore Categories
          </span>
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            What You Will Find at PPN Nursery
          </h2>
          <p className="text-gray-600 text-sm">
            Click on any category to view our complete plant catalog and garden supplies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                onClick={() => handleCategoryClick(card.category)}
                className="group bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-emerald-900 font-bold text-xs flex items-center gap-1.5 shadow-sm">
                      <Icon className="w-4 h-4 text-emerald-700" />
                      <span>{card.category}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-lg font-serif text-gray-900 group-hover:text-emerald-800 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <span className="w-full flex items-center justify-between text-xs font-bold text-emerald-800 bg-emerald-50 group-hover:bg-emerald-700 group-hover:text-white px-3.5 py-2.5 rounded-xl transition-all">
                    <span>View {card.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Featured Plants Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-emerald-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Popular Selections
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mt-2">
              Featured Plants & Best Sellers
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveCategoryFilter('All');
              setCurrentRoute('products');
            }}
            className="flex items-center gap-1.5 text-sm font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-100/80 px-4 py-2 rounded-xl"
          >
            <span>View All {products.length} Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-800 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                    {prod.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-extrabold text-[11px] px-2.5 py-1 rounded-lg shadow-sm">
                    {prod.priceRange}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-base text-gray-900 font-serif">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  {prod.careInstructions && (
                    <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-800 bg-emerald-50/80 p-2 rounded-lg">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Care: {prod.careInstructions.light || 'Easy care'}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setEnquiryModalProduct(prod)}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>Enquire for Price & Stock</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-800 px-3 py-1 rounded-full border border-emerald-700">
              Why Choose PPN Nursery
            </span>
            <h2 className="text-3xl font-bold font-serif text-white">
              Why Gardeners & Homeowners Love Us
            </h2>
            <p className="text-emerald-200 text-sm">
              Dedicated to bringing healthy greens and expert gardening guidance to Bengaluru homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-emerald-800/80 border border-emerald-700 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-serif">High-Quality Healthy Plants</h3>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Nurtured with organic soil, proper sunlight, and care. Healthy roots and green foliage guaranteed.
              </p>
            </div>

            <div className="bg-emerald-800/80 border border-emerald-700 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-serif">Helpful Staff & Guidance</h3>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Our knowledgeable staff provides free guidance on watering schedules, sunlight needs, and potting mix.
              </p>
            </div>

            <div className="bg-emerald-800/80 border border-emerald-700 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-serif">Bulk Orders & Delivery</h3>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Special wholesale pricing and direct doorstep delivery for apartment societies, offices, and landscapers.
              </p>
            </div>

            <div className="bg-emerald-800/80 border border-emerald-700 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-serif">Convenient Location</h3>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Located near TC Palya Cross and Indus Valley School, easily accessible from Old Madras Road and Virgo Nagar.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials / Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Customer Reviews
          </span>
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-sm">
            Read real feedback from plant lovers across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-gray-900">{rev.author}</p>
                  <p className="text-emerald-700 font-medium">{rev.date}</p>
                </div>
                {rev.verified && (
                  <span className="bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-full text-[10px]">
                    ✓ Google Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Location & Contact Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-emerald-200 shadow-md grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Visit PPN Nursery Today
              </span>
              <h3 className="text-2xl font-bold font-serif text-gray-900">
                Store Location & Directions
              </h3>
              
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    {businessInfo.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-700 shrink-0" />
                  <a href={`tel:${businessInfo.phone}`} className="font-bold text-emerald-900 hover:underline">
                    {businessInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>{businessInfo.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href={businessInfo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3 rounded-xl transition-colors shadow-sm text-sm"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setCurrentRoute('contact')}
                className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl transition-colors text-sm"
              >
                <span>Send Online Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] bg-gray-100 relative">
            <iframe
              title="PPN Nursery Location Map"
              src={businessInfo.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[320px]"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
};
