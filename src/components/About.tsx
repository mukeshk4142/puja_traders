
import visionaryImg from '../assets/owner.jpg'; // Apni file ka sahi naam likhein
import { motion } from 'framer-motion';
import { User, Award, ShieldCheck, HeartPulse } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Award className="h-6 w-6" />, title: "Quality First", desc: "Premium seeds and tools for better harvests." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Trusted Partner", desc: "Decades of trust among regional farmers." },
    { icon: <HeartPulse className="h-6 w-6" />, title: "Farmer Centric", desc: "Every solution designed for farmers' ease." }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={visionaryImg} 
                alt="Mr. Vikash Kumar Rana" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 p-8 rounded-2xl shadow-xl z-20 text-white max-w-[280px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl uppercase tracking-wider">The Visionary</span>
              </div>
              <p className="text-green-50 font-medium italic">"Empowering the hands that feed the nation is our ultimate goal."</p>
              <p className="mt-4 font-bold text-lg">- Mr. Vikash Kumar Rana</p>
              <p className="text-green-200 text-sm italic">Owner & Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4">About Puja Traders</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Leading the Way in Modern <span className="text-green-600">Agriculture</span>.
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Founded by <span className="font-bold text-slate-900">Mr. Vikash Kumar Rana</span>, Puja Traders has been at the forefront of the agricultural revolution. We are more than just a business; we are a support system for farmers (Kishans) across the region.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-10">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all group">
                  <div className="p-3 bg-green-100 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{val.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-green-600">
              <p className="text-slate-800 font-medium">
                Our mission is to provide sustainable, efficient, and profitable farming solutions that improve the lives of our hard-working Kishans.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
