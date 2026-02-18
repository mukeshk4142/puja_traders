

import { motion } from 'framer-motion';
import { Users, LandPlot, TrendingUp, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, count: "10,000+", label: "Happy Kishans", color: "text-blue-500" },
    { icon: <LandPlot className="h-8 w-8" />, count: "50,000+", label: "Acres Impacted", color: "text-green-500" },
    { icon: <TrendingUp className="h-8 w-8" />, count: "40%", label: "Yield Increase", color: "text-emerald-500" },
    { icon: <Award className="h-8 w-8" />, count: "15+", label: "Years Experience", color: "text-amber-500" }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-white/5 mb-6 ${stat.color}`}>
                  {stat.icon}
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.count}</h4>
                <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 relative z-10 text-center border-t border-white/10 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Making a Difference in Every Acre.</h3>
            <p className="text-slate-400 max-w-2xl mx-auto italic">
              "Our success is measured by the prosperity of our farmers. Every seed we sell and every advice we give is a step towards a stronger agricultural economy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
