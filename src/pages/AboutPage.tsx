import React from 'react';
import { 
  Sprout, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Truck, 
  ShoppingBag, 
  ShieldCheck, 
  Heart, 
  Users, 
  Award, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useNursery } from '../context/NurseryContext';

export const AboutPage: React.FC = () => {
  const { businessInfo, gallery, setCurrentRoute } = useNursery();

  return (
    <div className="py-12 bg-[#F8FAf6] space-y-16">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-14 shadow-lg border border-emerald-700/80 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-800 px-3 py-1 rounded-full border border-emerald-700">
              About PPN Nursery
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-white leading-tight">
              Bringing Vibrant Greens & Fresh Life to Bengaluru Homes
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed font-light">
              Located on Kithaganur Main Road, TC Palya Cross in Battarahalli, PPN Nursery is your local neighborhood destination for healthy plants, pots, organic manure, and expert gardening consultation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xs border border-emerald-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
              <Sprout className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-gray-900 leading-snug">
              Rooted in Quality, Guided by Gardening Passion
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              PPN Nursery is a garden center located in Battarahalli, Bengaluru, near Indus Valley School on Old Madras Road. We specialize in providing healthy indoor and outdoor plants, flowering plants, and complete garden supplies to retail customers, housing societies, landscapers, and businesses.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              Managed by plant enthusiasts with practical gardening experience, our team takes pride in helping beginner and experienced gardeners select plants suited for Bengaluru’s weather, balcony lighting, and indoor spaces.
            </p>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                🌿 Management & Team Vision
              </p>
              <p className="text-xs text-emerald-800 italic">
                "We believe every home, balcony, and workspace deserves the calming presence of fresh green plants. We curate plants with strong root systems and offer simple, honest care guidance."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-md border-4 border-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=1200"
                alt="PPN Nursery plants garden center"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Our Core Values
          </span>
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            What Drives PPN Nursery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 font-serif">1. Quality Plants</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every plant is nurtured in disease-free organic soil with balanced organic nutrients to ensure strong growth after you take it home.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 font-serif">2. Customer Guidance</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We guide you on ideal light exposure, watering frequency, and repotting so your plants flourish for years to come.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 font-serif">3. Fair Pricing</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Honest and transparent pricing across all plant saplings, ceramic pots, cocopeat, and fertilizers with wholesale rates for bulk buyers.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Services & Service Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-800 px-3 py-1 rounded-full border border-emerald-700">
              Services Offered
            </span>
            <h3 className="text-2xl font-bold font-serif text-white">How You Can Shop With Us</h3>
            
            <ul className="space-y-3 text-sm text-emerald-100">
              <li className="flex items-center gap-3 bg-emerald-800/80 p-3 rounded-xl border border-emerald-700">
                <ShoppingBag className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">In-Store Shopping</p>
                  <p className="text-xs text-emerald-200">Walk around our green outdoor and indoor canopy at Battarahalli.</p>
                </div>
              </li>

              <li className="flex items-center gap-3 bg-emerald-800/80 p-3 rounded-xl border border-emerald-700">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">In-Store Pick-Up</p>
                  <p className="text-xs text-emerald-200">Order by phone and collect your potted plants ready to go.</p>
                </div>
              </li>

              <li className="flex items-center gap-3 bg-emerald-800/80 p-3 rounded-xl border border-emerald-700">
                <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">Doorstep Delivery</p>
                  <p className="text-xs text-emerald-200">Safe plant transport and delivery across East Bengaluru.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-800 px-3 py-1 rounded-full border border-emerald-700">
              Service Areas
            </span>
            <h3 className="text-2xl font-bold font-serif text-white">Primary Delivery & Customer Locations</h3>
            <p className="text-xs text-emerald-200 leading-relaxed">
              We primarily serve customers, residential apartment societies, and office parks in and around:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-emerald-100">
              {businessInfo.serviceAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-emerald-800 p-2.5 rounded-xl border border-emerald-700">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentRoute('contact')}
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3 rounded-xl text-sm transition-colors"
              >
                Inquire about Delivery to Your Location
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Nursery Gallery Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Photo Snapshot
            </span>
            <h2 className="text-2xl font-bold font-serif text-gray-900 mt-1">
              Glimpse of PPN Nursery
            </h2>
          </div>
          <button
            onClick={() => setCurrentRoute('gallery')}
            className="flex items-center gap-1 text-sm font-bold text-emerald-800 hover:underline"
          >
            <span>View All Photos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => setCurrentRoute('gallery')}
              className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-xs border border-emerald-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center text-white text-xs font-bold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
