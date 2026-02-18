import { motion } from 'framer-motion';
import { Users, UserPlus, IndianRupee, TrendingUp, TrendingDown, ArrowRight, Calendar, Image as ImageIcon } from 'lucide-react';

const DashboardOverview = () => {
  const farmerCount = JSON.parse(localStorage.getItem('puja_farmers') || '[]').length || 2;
  
  const stats = [
    { title: 'Total Farmers', value: farmerCount.toLocaleString(), change: '+12%', isUp: true, icon: <UserPlus className="text-blue-500" /> },
    { title: 'Active Distributors', value: '458', change: '+5%', isUp: true, icon: <Users className="text-purple-500" /> },
    { title: 'Monthly Revenue', value: '₹45,20,000', change: '+18%', isUp: true, icon: <IndianRupee className="text-emerald-500" /> },
    { title: 'Total Expenses', value: '₹12,40,000', change: '-2%', isUp: false, icon: <TrendingDown className="text-red-500" /> },
  ];

  const recentFarmers = JSON.parse(localStorage.getItem('puja_farmers') || '[]').slice(0, 4);
  const recentActivities = recentFarmers.length > 0 ? recentFarmers.map((f: any, idx: number) => ({
    id: idx + 1,
    type: 'Farmer Added',
    name: f.name,
    location: `${f.village}, ${f.district}`,
    date: 'Recent'
  })) : [
    { id: 1, type: 'Farmer Added', name: 'Rajesh Kumar', location: 'Ramnagar, Ranchi', date: '2 mins ago' },
    { id: 2, type: 'Stock Dispatched', name: 'Seeds (Batch #45)', location: 'Patna Warehouse', date: '1 hour ago' },
    { id: 3, type: 'Payment Received', name: 'Vikram Singh', amount: '₹15,000', date: '3 hours ago' },
    { id: 4, type: 'New Distributor', name: 'Kishan Seva Kendra', location: 'Gaya', date: 'Yesterday' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500">Welcome back, Mr. Vikash Kumar Rana. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <div className="p-2 bg-slate-100 rounded-lg">
            <Calendar size={18} className="text-slate-600" />
          </div>
          <span className="text-sm font-bold text-slate-700 pr-2">Oct 24, 2024 - Oct 30, 2024</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-slate-50 rounded-2xl">
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {stat.isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {stat.change}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">{stat.title}</p>
            <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Recent Activity</h3>
            <button className="text-emerald-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <th className="px-8 py-4">Activity Type</th>
                  <th className="px-8 py-4">Entity Name</th>
                  <th className="px-8 py-4">Location/Details</th>
                  <th className="px-8 py-4">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentActivities.map((activity: any) => (
                  <tr key={activity.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        activity.type === 'Farmer Added' ? 'bg-blue-50 text-blue-600' :
                        activity.type === 'Stock Dispatched' ? 'bg-amber-50 text-amber-600' :
                        activity.type === 'Payment Received' ? 'bg-emerald-50 text-emerald-600' :
                        'bg-purple-50 text-purple-600'
                      }`}>
                        {activity.type}
                      </span>
                    </td>
                    <td className="px-8 py-5 font-bold text-slate-900">{activity.name}</td>
                    <td className="px-8 py-5 text-slate-500">{activity.location || activity.amount}</td>
                    <td className="px-8 py-5 text-slate-400 text-sm">{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-emerald-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-emerald-950/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
          <div className="space-y-4 relative z-10">
            <button className="w-full bg-emerald-800/50 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center gap-3 border border-emerald-700/50 text-left">
              <div className="p-2 bg-emerald-700 rounded-lg"><UserPlus size={18} /></div>
              Add New Farmer
            </button>
            <button className="w-full bg-emerald-800/50 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center gap-3 border border-emerald-700/50 text-left">
              <div className="p-2 bg-emerald-700 rounded-lg"><IndianRupee size={18} /></div>
              New Transaction
            </button>
            <button className="w-full bg-emerald-800/50 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center gap-3 border border-emerald-700/50 text-left">
              <div className="p-2 bg-emerald-700 rounded-lg"><ImageIcon size={18} /></div>
              Upload Moments
            </button>
            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-6 rounded-2xl transition-all mt-4 shadow-lg shadow-emerald-500/20">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
