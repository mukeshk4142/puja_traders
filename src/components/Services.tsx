

import { motion } from 'framer-motion';
import { Sprout, Tractor, Shovel, Droplets, Warehouse, Microscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Premium Seeds",
      desc: "High-yield, climate-resistant seeds for every crop type, from grains to vegetables.",
      icon: <Sprout className="h-10 w-10 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Modern Equipment",
      desc: "Latest agricultural machinery and tools for efficient farming and reduced manual labor.",
      icon: <Tractor className="h-10 w-10 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1594132176046-16017a020be8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fertilizers & Pesticides",
      desc: "Scientifically tested nutrients and crop protection solutions to ensure healthy growth.",
      icon: <Shovel className="h-10 w-10 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Irrigation Systems",
      desc: "Smart water management solutions to maximize crop health while conserving water.",
      icon: <Droplets className="h-10 w-10 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Storage Solutions",
      desc: "Safe and secure storage facilities to preserve your harvest's quality for longer periods.",
      icon: <Warehouse className="h-10 w-10 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Soil Testing & Advice",
      desc: "Expert soil analysis and personalized farming advice from our experienced team.",
      icon: <Microscope className="h-10 w-10 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Comprehensive <span className="text-emerald-600">Farming Solutions</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Puja Traders provides everything a modern farmer needs to succeed. From seed to harvest, we're with you at every step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 left-8 bg-white p-4 rounded-2xl shadow-lg shadow-emerald-500/10 group-hover:bg-emerald-600 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3 group-hover:text-emerald-600 transition-colors">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700">{service.desc}</p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm cursor-pointer hover:gap-3 transition-all">
                  Learn More <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
