import React, { useState } from 'react';
import { Sprout, Lock, User, Key, ArrowLeft, ShieldAlert } from 'lucide-react';
import { useNursery } from '../../context/NurseryContext';

export const AdminLogin: React.FC = () => {
  const { loginAdmin, setCurrentRoute } = useNursery();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const success = loginAdmin(username, password);
    if (success) {
      setCurrentRoute('admin-dashboard');
    } else {
      setError('Invalid credentials. Please use username: admin and password: admin123');
    }
  };

  return (
    <div className="min-h-[80vh] bg-[#F8FAf6] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-emerald-900 text-white p-8 text-center space-y-3 relative">
          <button
            onClick={() => setCurrentRoute('home')}
            className="absolute top-4 left-4 text-emerald-200 hover:text-white flex items-center gap-1 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Public Site</span>
          </button>

          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold mx-auto shadow-md">
            <Sprout className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-bold font-serif text-white">PPN Nursery Admin</h1>
          <p className="text-xs text-emerald-200">Management Panel Portal (Demo Mode)</p>
        </div>

        {/* Form Body */}
        <div className="p-8 space-y-6">
          
          {/* Demo Hint Banner */}
          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-950">Demo Credentials:</p>
              <p className="mt-0.5 font-mono text-[11px]">
                Username: <strong className="text-amber-900">admin</strong> • Password: <strong className="text-amber-900">admin123</strong>
              </p>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-rose-50 text-rose-700 rounded-xl text-xs font-semibold border border-rose-200 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Admin Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                  placeholder="admin"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-sm"
            >
              <Lock className="w-4 h-4 text-amber-300" />
              <span>Login to Admin Dashboard</span>
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
