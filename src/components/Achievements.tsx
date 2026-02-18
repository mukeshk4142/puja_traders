import { motion } from 'framer-motion';
import { Award, Star, Trophy, Users } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8" />,
    year: "2023",
    title: "Best Agri-Business Award",
    desc: "Recognized for outstanding contribution to regional farming innovation."
  },
  {
    icon: <Users className="h-8 w-8" />,
    year: "2021",
    title: "10,000+ Farmers Impact",
    desc: "Successfully crossed the milestone of helping over 10,000 Kishans."
  },
  {
    icon: <Award className="h-8 w-8" />,
    year: "2018",
    title: "Excellence in Seed Quality",
    desc: "Certified for providing the highest germination rate seeds in the district."
  },
  {
    icon: <Star className="h-8 w-8" />,
    year: "2010",
    title: "Puja Traders Founded",
    desc: "The journey began with a vision to revolutionize agriculture by Vikash Kumar Rana."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              Our Milestones
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
            >
              Celebrating Years of <span className="text-emerald-600">Agricultural Success</span>
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="bg-emerald-100 p-6 rounded-full border-4 border-emerald-50 text-emerald-600">
              <Trophy className="h-12 w-12" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all group"
            >
              <div className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4">
                {item.year}
              </span>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
