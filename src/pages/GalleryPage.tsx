
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';

const categories = [
  "All",
  "Meeting with SDO",
  "Meet with Farmer",
  "Seed Distribution",
  "Field Training",
  "New Machinery",
  "Award Ceremony",
  "Success Stories"
];

const galleryItems = [
  { id: 1, category: "Meeting with SDO", title: "Government Consultation", image: "https://images.unsplash.com/photo-1573161158362-597e779f729a?auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Meet with Farmer", title: "Community Support", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Seed Distribution", title: "Empowering Growth", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Field Training", title: "Modern Techniques", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "New Machinery", title: "Efficiency First", image: "https://images.unsplash.com/photo-1594132176046-16017a020be8?auto=format&fit=crop&w=800&q=80" },
  { id: 6, category: "Award Ceremony", title: "Excellence Recognized", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
  { id: 7, category: "Success Stories", title: "Harvesting Success", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80" },
  { id: 8, category: "Meeting with SDO", title: "Policy Discussion", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" },
  { id: 9, category: "Seed Distribution", title: "Village Outreach", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-2xl mb-4"
          >
            <Camera className="h-6 w-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
          >
            Puja Traders <span className="text-emerald-600">Moments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            A visual documentation of our journey in empowering farmers and revolutionizing agriculture across the region.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' 
                : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>
                <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl italic">No moments found in this category yet. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
