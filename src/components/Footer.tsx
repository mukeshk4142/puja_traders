

import { Leaf, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Puja <span className="text-green-500">Traders</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Dedicated to the prosperity of every farmer. Providing excellence in agricultural solutions since 2010.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Youtube className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><RouterLink to="/" className="hover:text-emerald-500 transition-colors">Home</RouterLink></li>
              <li><RouterLink to="/" onClick={() => setTimeout(() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}), 100)} className="hover:text-emerald-500 transition-colors">About Us</RouterLink></li>
              <li><RouterLink to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}), 100)} className="hover:text-emerald-500 transition-colors">Services</RouterLink></li>
              <li><RouterLink to="/gallery" className="hover:text-emerald-500 transition-colors">Gallery</RouterLink></li>
              <li><RouterLink to="/achievements" className="hover:text-emerald-500 transition-colors">Achievements</RouterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-green-500 transition-colors">High Quality Seeds</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Modern Machinery</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Crop Consulting</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Fertilizer Supply</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">Subscribe to get the latest agricultural tips and product updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-slate-800 border-none rounded-l-lg px-4 py-3 w-full focus:ring-1 focus:ring-green-500 outline-none"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-r-lg transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Puja Traders. All rights reserved. Designed with ❤️ for Kishans.</p>
          <p className="mt-2 font-medium text-slate-400">Owner: Mr. Vikash Kumar Rana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
