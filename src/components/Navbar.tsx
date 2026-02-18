import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', type: 'scroll' },
    { name: 'About', to: 'about', type: 'scroll' },
    { name: 'Services', to: 'services', type: 'scroll' },
    { name: 'Gallery', to: '/gallery', type: 'route' },
    { name: 'Achievements', to: '/achievements', type: 'route' },
    { name: 'Contact', to: 'contact', type: 'scroll' },
  ];

  const handleNavClick = (to: string, type: string) => {
    setIsOpen(false);
    if (type === 'scroll' && !isHomePage) {
      navigate('/');
      // Timeout to allow navigation before scrolling
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'bg-white/90 backdrop-blur-xl shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <RouterLink to="/" className="flex items-center gap-2">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-green-500 to-emerald-700 p-2 rounded-xl shadow-lg"
            >
              <Leaf className="text-white h-6 w-6" />
            </motion.div>
            <span className={`text-2xl font-black tracking-tighter ${scrolled || !isHomePage ? 'text-slate-900' : 'text-white'}`}>
              PUJA <span className="text-emerald-500">TRADERS</span>
            </span>
          </RouterLink>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                link.type === 'scroll' && isHomePage ? (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className={`relative group cursor-pointer px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all ${scrolled || !isHomePage ? 'text-slate-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'}`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={link.name}
                    to={link.type === 'scroll' ? '/' : link.to}
                    onClick={() => handleNavClick(link.to, link.type)}
                    className={`relative group cursor-pointer px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all ${scrolled || !isHomePage ? 'text-slate-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'}`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                  </RouterLink>
                )
              ))}
              <div className="pl-4">
                <RouterLink to="/login">
                  <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-7 py-2.5 rounded-full font-bold uppercase text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/40">
                    <User className="h-4 w-4" />
                    Login
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-green-500 focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                link.type === 'scroll' && isHomePage ? (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="block px-3 py-2 rounded-xl text-base font-bold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={link.name}
                    to={link.type === 'scroll' ? '/' : link.to}
                    onClick={() => handleNavClick(link.to, link.type)}
                    className="block px-3 py-2 rounded-xl text-base font-bold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </RouterLink>
                )
              ))}
              <div className="px-3 py-4">
                <RouterLink to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold uppercase text-sm tracking-widest shadow-lg">
                    <User className="h-4 w-4" />
                    Login
                  </button>
                </RouterLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
