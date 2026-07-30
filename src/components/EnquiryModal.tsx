import React, { useState, useEffect } from 'react';
import { X, Send, Sprout, CheckCircle2 } from 'lucide-react';
import { useNursery } from '../context/NurseryContext';

export const EnquiryModal: React.FC = () => {
  const { enquiryModalProduct, setEnquiryModalProduct, addEnquiry } = useNursery();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Indoor Plants');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (enquiryModalProduct) {
      setInterest(enquiryModalProduct.category);
      setMessage(`Hi PPN Nursery, I am interested in purchasing or knowing details about "${enquiryModalProduct.name}" (Indicative price: ${enquiryModalProduct.priceRange}). Please guide me.`);
      setSubmitted(false);
    }
  }, [enquiryModalProduct]);

  if (!enquiryModalProduct) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    addEnquiry({
      name,
      phone,
      email,
      interest,
      message,
      productName: enquiryModalProduct.name
    });

    setSubmitted(true);
    setTimeout(() => {
      setEnquiryModalProduct(null);
      setSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-emerald-100 animate-fadeIn">
        
        {/* Header */}
        <div className="bg-emerald-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Product Enquiry</h3>
              <p className="text-xs text-emerald-200">PPN Nursery • Battarahalli, Bengaluru</p>
            </div>
          </div>
          <button
            onClick={() => setEnquiryModalProduct(null)}
            className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700/50"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 font-serif">Enquiry Sent!</h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>. Our team at PPN Nursery will call you at <strong>{phone}</strong> regarding <strong>{enquiryModalProduct.name}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Product Badge */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
                <img
                  src={enquiryModalProduct.image}
                  alt={enquiryModalProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-cover rounded-lg shrink-0 border border-emerald-300"
                />
                <div>
                  <h4 className="font-bold text-emerald-900 text-sm">{enquiryModalProduct.name}</h4>
                  <p className="text-xs text-emerald-700">{enquiryModalProduct.category} • {enquiryModalProduct.priceRange}</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Reddy"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 09876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
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
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Message / Quantity
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEnquiryModalProduct(null)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
