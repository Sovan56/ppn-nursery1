import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useNursery } from '../context/NurseryContext';

export const WhatsAppButton: React.FC = () => {
  const { businessInfo } = useNursery();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phoneClean = businessInfo.whatsappNumber.replace(/\D/g, '');

  const handleSendWhatsApp = (msgText: string) => {
    const encoded = encodeURIComponent(msgText || "Hi PPN Nursery, I would like to enquire about plants and garden supplies.");
    window.open(`https://wa.me/${phoneClean}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white border border-emerald-400">
                🌱
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">PPN Nursery Support</h4>
                <p className="text-[11px] text-emerald-100">Usually replies within 15 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-200 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-emerald-50/50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs text-gray-700 leading-relaxed">
              Hello! 🌿 Welcome to PPN Nursery, Bengaluru. How can we help you today with plants, pots, or garden supplies?
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Quick Enquiries:</p>
              <button
                onClick={() => handleSendWhatsApp("Hi! I want to check availability for Indoor Plants like Snake Plant & Areca Palm.")}
                className="w-full text-left p-2 rounded-lg bg-emerald-100/70 hover:bg-emerald-200 text-emerald-900 text-xs font-medium transition-colors"
              >
                🪴 Enquire about Indoor Plants
              </button>
              <button
                onClick={() => handleSendWhatsApp("Hi! Looking for bulk plants & soil compost for our apartment garden.")}
                className="w-full text-left p-2 rounded-lg bg-emerald-100/70 hover:bg-emerald-200 text-emerald-900 text-xs font-medium transition-colors"
              >
                🏢 Bulk Enquiry for Housing Society
              </button>
              <button
                onClick={() => handleSendWhatsApp("Hi! What are your current opening hours and nursery address?")}
                className="w-full text-left p-2 rounded-lg bg-emerald-100/70 hover:bg-emerald-200 text-emerald-900 text-xs font-medium transition-colors"
              >
                📍 Store Location & Timings
              </button>
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center gap-1.5 border-t border-gray-200">
              <input
                type="text"
                placeholder="Type a message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && customMsg.trim()) {
                    handleSendWhatsApp(customMsg);
                    setCustomMsg('');
                  }
                }}
                className="flex-1 bg-white border border-emerald-200 rounded-lg px-3 py-1.5 text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
              />
              <button
                onClick={() => {
                  if (customMsg.trim()) {
                    handleSendWhatsApp(customMsg);
                    setCustomMsg('');
                  }
                }}
                className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 border-2 border-emerald-400"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="text-sm hidden sm:inline">Chat with Nursery</span>
      </button>
    </div>
  );
};
