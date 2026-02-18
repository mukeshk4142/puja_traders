import { motion } from 'framer-motion';
import { Image as ImageIcon, Plus, Trash2, Edit2, ExternalLink, Filter, Search } from 'lucide-react';

const ManageGallery = () => {
  const galleryImages = [
    { id: 1, title: 'Meeting with SDO', category: 'Events', image: 'https://images.unsplash.com/photo-1573161158362-597e779f729a?auto=format&fit=crop&w=400&q=80', date: '25 Oct 2024' },
    { id: 2, title: 'Seed Distribution', category: 'Activities', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=400&q=80', date: '20 Oct 2024' },
    { id: 3, title: 'Modern Tractor Demo', category: 'Machinery', image: 'https://images.unsplash.com/photo-1594132176046-16017a020be8?auto=format&fit=crop&w=400&q=80', date: '15 Oct 2024' },
    { id: 4, title: 'Farmer Training', category: 'Training', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80', date: '10 Oct 2024' },
    { id: 5, title: 'Organic Growth', category: 'Crops', image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=400&q=80', date: '05 Oct 2024' },
    { id: 6, title: 'Award Ceremony', category: 'Events', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80', date: '01 Oct 2024' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <ImageIcon className="text-emerald-600" /> Manage Gallery
          </h1>
          <p className="text-slate-500">Upload and organize company moments and achievements.</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
          <Plus size={20} /> Upload New Photo
        </button>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="relative group w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search images..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors">
              <Filter size={18} /> Categories
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={img.image} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="p-3 bg-white rounded-xl text-slate-900 hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-110">
                    <Edit2 size={18} />
                  </button>
                  <button className="p-3 bg-white rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all transform hover:scale-110">
                    <Trash2 size={18} />
                  </button>
                  <button className="p-3 bg-white rounded-xl text-slate-900 hover:bg-slate-900 hover:text-white transition-all transform hover:scale-110">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{img.category}</span>
                <h4 className="mt-3 font-bold text-slate-900 truncate">{img.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{img.date}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Upload Placeholder */}
          <div className="border-2 border-dashed border-slate-200 rounded-[2rem] aspect-square flex flex-col items-center justify-center p-8 text-center hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer group">
            <div className="p-4 bg-slate-100 rounded-2xl group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors mb-4">
              <Plus size={32} className="text-slate-400 group-hover:text-emerald-600" />
            </div>
            <p className="font-bold text-slate-500 group-hover:text-emerald-700">Add New Image</p>
            <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGallery;
