import { Users, Search, Plus, Filter, MoreVertical, MapPin, Phone, Mail } from 'lucide-react';

const AddDistributor = () => {
  const distributors = [
    { id: 1, name: 'Kishan Seva Kendra', owner: 'Ramesh Singh', location: 'Gaya, Bihar', phone: '+91 99887 76655', email: 'kishan@example.com', status: 'Active' },
    { id: 2, name: 'Agri World', owner: 'Suresh Kumar', location: 'Patna, Bihar', phone: '+91 88776 65544', email: 'agri@example.com', status: 'Active' },
    { id: 3, name: 'Farmers Friend', owner: 'Amit Yadav', location: 'Muzaffarpur, Bihar', phone: '+91 77665 54433', email: 'friend@example.com', status: 'Inactive' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <Users className="text-emerald-600" /> Manage Distributors
          </h1>
          <p className="text-slate-500">Add and manage your regional distributor network.</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
          <Plus size={20} /> Add New Distributor
        </button>
      </div>

      {/* Stats Cards for Distributors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Total Partners</p>
          <p className="text-3xl font-black text-slate-900">458</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Active Regions</p>
          <p className="text-3xl font-black text-emerald-600">12 Districts</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Pending Approvals</p>
          <p className="text-3xl font-black text-amber-500">15 Applications</p>
        </div>
      </div>

      {/* Distributors Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative group w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, owner or location..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors">
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <th className="px-8 py-4">Distributor</th>
                <th className="px-8 py-4">Contact Person</th>
                <th className="px-8 py-4">Location</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {distributors.map((dist) => (
                <tr key={dist.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5">
                    <div>
                      <p className="font-bold text-slate-900">{dist.name}</p>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                        <Mail size={12} /> {dist.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-slate-600">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">{dist.owner}</span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Phone size={12} /> {dist.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={16} className="text-emerald-500" />
                      {dist.location}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      dist.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {dist.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddDistributor;
