import React from 'react';
import { NurseryProvider, useNursery } from './context/NurseryContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { CheckCircle2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentRoute, toastMessage } = useNursery();

  const isAdminPage = currentRoute === 'admin-login' || currentRoute === 'admin-dashboard';

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-[#F8FAf6] selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-emerald-500/50 flex items-center gap-3 animate-fadeIn max-w-sm text-xs font-semibold">
          <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Public Header */}
      <Header />

      {/* Page Body Router */}
      <main className="flex-1">
        {currentRoute === 'home' && <HomePage />}
        {currentRoute === 'products' && <ProductsPage />}
        {currentRoute === 'about' && <AboutPage />}
        {currentRoute === 'gallery' && <GalleryPage />}
        {currentRoute === 'contact' && <ContactPage />}
        {currentRoute === 'admin-login' && <AdminLogin />}
        {currentRoute === 'admin-dashboard' && <AdminDashboard />}
      </main>

      {/* Public Footer (Hidden on Admin Dashboard for clean UI, or shown on public) */}
      {!isAdminPage && <Footer />}

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Global Product Enquiry Modal */}
      <EnquiryModal />

    </div>
  );
};

export default function App() {
  return (
    <NurseryProvider>
      <AppContent />
    </NurseryProvider>
  );
}
