import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Mail, Lock, ArrowRight, UserCircle2, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase import
import { auth } from '../firebase'; // Aapki firebase.ts file

const LoginPage = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(''); // Isme email daalna hoga
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Firebase real login
      await signInWithEmailAndPassword(auth, identifier, password);
      setError('');
      navigate('/dashboard'); // Ya jo bhi aapka admin route hai
    } catch (err: any) {
      console.error(err);
      setError('Invalid Email or Security PIN. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="bg-emerald-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <Leaf className="text-white h-6 w-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              PUJA <span className="text-emerald-500">TRADERS</span>
            </span>
          </Link>
          <h2 className="text-3xl font-extrabold text-slate-900">Welcome Back</h2>
          <p className="mt-2 text-slate-600">Farmer & Partner Portal</p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">

          <form onSubmit={handleLogin} className="space-y-6">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold text-center flex items-center justify-center gap-2"
                >
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Account Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="px-4 py-3 bg-emerald-50 border-2 border-emerald-600 text-emerald-700 rounded-2xl font-bold text-sm flex items-center justify-center gap-2">
                  <UserCircle2 className="h-4 w-4" /> Farmer
                </button>
                <button type="button" className="px-4 py-3 bg-slate-50 border-2 border-transparent text-slate-500 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
                  <Leaf className="h-4 w-4" /> Partner
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Registered Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  type="email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="admin@pujatraders.com"
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Security PIN</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••"
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">Remember me</label>
              </div>
              <a href="#" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Forgot PIN?</a>
            </div>

            <button
              disabled={loading}
              className={`w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Verifying...' : 'Sign In'}
              {!loading && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-600 text-sm">
              Don't have an account? <br />
              <a href="#" className="text-emerald-600 font-bold hover:underline">Contact Puja Traders to Register</a>
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-400 text-xs">
          © 2024 Puja Traders Agriculture Solution Pvt. Ltd. <br />
          Managed by Mr. Vikash Kumar Rana
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;