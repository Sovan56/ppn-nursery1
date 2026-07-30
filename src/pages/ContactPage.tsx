import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare,
  Sprout,
  Sparkles
} from 'lucide-react';
import { useNursery } from '../context/NurseryContext';

export const ContactPage: React.FC = () => {
  const { businessInfo, addEnquiry } = useNursery();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Indoor Plants');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    addEnquiry({
      name,
      phone,
      email,
      interest,
      message
    });

    setIsSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#F8FAf6] space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-md border border-emerald-700/80 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-800 px-3 py-1 rounded-full border border-emerald-700">
            Contact & Directions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-white">
            Get in Touch with PPN Nursery
          </h1>
          <p className="text-emerald-100 text-sm max-w-2xl leading-relaxed">
            Have questions about plant availability, bulk pricing, or home delivery in Bengaluru? Call us directly or fill out our quick message form below.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-emerald-100 shadow-xs space-y-6">
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Send Message
            </span>
            <h2 className="text-2xl font-bold font-serif text-gray-900 pt-1">
              Online Plant & Order Enquiry
            </h2>
            <p className="text-xs text-gray-500">
              Fill out your details and our team will get back to you via phone or WhatsApp.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <div className="w-16 h-16 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 font-serif">Thank you!</h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                Your message has been received. Our team at PPN Nursery will contact you soon on <strong>{phone}</strong>.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setPhone('');
                  setEmail('');
                  setMessage('');
                }}
                className="bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-emerald-800"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 08762043246"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anand@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Interested In
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                >
                  <option value="Indoor Plants">Indoor Plants (Air Purifiers, Palms)</option>
                  <option value="Outdoor Plants">Outdoor Plants & Palms</option>
                  <option value="Flowering Plants">Flowering Plants (Roses, Bougainvillea, Mogra)</option>
                  <option value="Bulk / Wholesale">Bulk / Wholesale Order (Society / Office)</option>
                  <option value="Garden Supplies">Garden Supplies (Pots, Soil, Cocopeat, Fertilizers)</option>
                  <option value="Other">Other Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what plants or garden supplies you are looking for..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-sm"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>Submit Contact Form</span>
              </button>

            </form>
          )}

        </div>

        {/* Contact Details & Quick Info */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-emerald-900 text-white p-8 rounded-3xl space-y-6 shadow-md border border-emerald-800">
            <h3 className="text-xl font-bold font-serif text-white border-b border-emerald-800 pb-3">
              Direct Contact & Timings
            </h3>

            <div className="space-y-4 text-sm text-emerald-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Address</p>
                  <p className="text-xs text-emerald-200 leading-relaxed mt-0.5">
                    {businessInfo.address}
                  </p>
                  <p className="text-[11px] font-mono text-amber-300 mt-1">
                    Google Plus Code: {businessInfo.mapsPlusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">Phone</p>
                  <a href={`tel:${businessInfo.phone}`} className="text-amber-300 font-bold hover:underline">
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">Hours</p>
                  <p className="text-xs text-emerald-200">{businessInfo.hours}</p>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-2 grid grid-cols-1 gap-2.5">
              <a
                href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3 rounded-xl shadow-xs text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now ({businessInfo.phone})</span>
              </a>

              <a
                href={businessInfo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl border border-emerald-600 text-sm"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-amber-300" />
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* Map Embed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-emerald-200 shadow-xs">
          <div className="p-4 bg-emerald-800 text-white flex items-center justify-between">
            <span className="font-bold text-sm font-serif">Google Maps Location — PPN Nursery Battarahalli</span>
            <span className="text-xs text-emerald-200">{businessInfo.mapsPlusCode}</span>
          </div>
          <div className="h-96 w-full">
            <iframe
              title="PPN Nursery Interactive Google Map"
              src={businessInfo.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};
