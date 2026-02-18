

import { motion } from 'framer-motion';
import { ArrowRight, Sprout, Tractor, IndianRupee } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 transform scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-sm font-semibold tracking-wider uppercase py-1 px-4 rounded-full">
              Leading Agriculture Partner Since 2010
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
          >
            Empowering <span className="text-green-500">Farmers</span>, <br />
            Cultivating <span className="text-green-400">Futures</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            At Puja Traders, we bridge the gap between traditional farming and modern innovation. Providing high-quality seeds, fertilizers, and expert consultation to enhance crop yields.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="contact" smooth={true} duration={500}>
              <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2 cursor-pointer group">
                Contact Us <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
                View Services
              </button>
            </Link>
          </motion.div>

          {/* Floating Stats/Features */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4 text-white"
            >
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Sprout className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">10k+</p>
                <p className="text-sm text-gray-400">Farmers Helped</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 text-white"
            >
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Tractor className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">100+</p>
                <p className="text-sm text-gray-400">Modern Equipment</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="hidden md:flex items-center gap-4 text-white"
            >
              <div className="p-3 bg-green-500/20 rounded-lg">
                <IndianRupee className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">Affordable</p>
                <p className="text-sm text-gray-400">Pricing Plans</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-10 right-10 hidden lg:block opacity-50"
      >
        <div className="w-32 h-32 rounded-full border-4 border-green-500/30 border-dashed animate-spin-slow" />
      </motion.div>
    </section>
  );
};

export default Hero;
