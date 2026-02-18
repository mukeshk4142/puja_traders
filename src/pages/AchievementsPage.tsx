
import { motion } from 'framer-motion';
import { Trophy, Star, Users, Award, ShieldCheck, TrendingUp, Handshake, Globe } from 'lucide-react';

const achievementData = [
  {
    year: "2024",
    title: "Regional Innovation Leader",
    desc: "Puja Traders was recognized for introducing smart irrigation technologies to over 50 villages, significantly reducing water wastage.",
    icon: <Globe className="h-8 w-8 text-blue-500" />
  },
  {
    year: "2023",
    title: "Best Agri-Business of the Year",
    desc: "Awarded by the State Agriculture Department for excellence in seed distribution and farmer advisory services.",
    icon: <Trophy className="h-8 w-8 text-amber-500" />
  },
  {
    year: "2022",
    title: "Community Impact Award",
    desc: "Honored for our direct support programs that helped marginal farmers increase their annual income by 40%.",
    icon: <Handshake className="h-8 w-8 text-emerald-500" />
  },
  {
    year: "2021",
    title: "10,000+ Active Kishans",
    desc: "A major milestone reached - over 10,000 farmers now trust Puja Traders for their complete agricultural needs.",
    icon: <Users className="h-8 w-8 text-indigo-500" />
  },
  {
    year: "2020",
    title: "Seed Quality Excellence",
    desc: "Achieved the highest rating in independent quality testing for wheat and paddy seeds in the region.",
    icon: <ShieldCheck className="h-8 w-8 text-red-500" />
  },
  {
    year: "2018",
    title: "Agricultural Expansion",
    desc: "Successfully expanded our services to 5 neighboring districts, bringing modern tools to more farming communities.",
    icon: <TrendingUp className="h-8 w-8 text-orange-500" />
  },
  {
    year: "2015",
    title: "Pioneer in Modern Machinery",
    desc: "First trader in the district to introduce affordable lease programs for high-tech harvesters and tractors.",
    icon: <Star className="h-8 w-8 text-yellow-500" />
  },
  {
    year: "2010",
    title: "The Visionary Beginning",
    desc: "Founded by Mr. Vikash Kumar Rana with a single mission: to empower the Indian farmer with quality and trust.",
    icon: <Award className="h-8 w-8 text-purple-500" />
  }
];

const AchievementsPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
          >
            Our Journey of <span className="text-emerald-600">Excellence</span>
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every year at Puja Traders is a step toward a brighter, more sustainable agricultural future. Here are our proudest milestones.
          </p>
        </div>

        <div className="relative border-l-2 border-emerald-100 ml-4 md:ml-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:bg-emerald-100 md:border-l-0">
          {achievementData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
            >
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-xl hover:shadow-emerald-500/5 group">
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-50 z-10 hidden md:block ${idx % 2 === 0 ? '-right-2' : '-left-2'}`} />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-emerald-600/20">{item.year}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-emerald-950 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">And the journey continues...</h2>
          <p className="text-emerald-200/80 max-w-xl mx-auto relative z-10">
            We are just getting started. Under the leadership of Mr. Vikash Kumar Rana, we aim to reach 50,000+ farmers by 2030.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
