import { IndianRupee, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Calendar, Download, Filter } from 'lucide-react';

const CashInflow = () => {
  const transactions = [
    { id: 'TXN-1024', name: 'Seeds Sale #88', type: 'Credit', amount: '₹12,450', status: 'Completed', date: '30 Oct 2024' },
    { id: 'TXN-1023', name: 'Distributor Commission', type: 'Debit', amount: '₹2,100', status: 'Completed', date: '29 Oct 2024' },
    { id: 'TXN-1022', name: 'Fertilizer Stock Purchase', type: 'Debit', amount: '₹85,000', status: 'Pending', date: '29 Oct 2024' },
    { id: 'TXN-1021', name: 'Equipment Rental - Rajesh K.', type: 'Credit', amount: '₹5,000', status: 'Completed', date: '28 Oct 2024' },
    { id: 'TXN-1020', name: 'Consultation Fee', type: 'Credit', amount: '₹1,200', status: 'Completed', date: '28 Oct 2024' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <IndianRupee className="text-emerald-600" /> Cash Inflow Details
          </h1>
          <p className="text-slate-500">Track all financial transactions and business revenue.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 font-bold py-3 px-6 rounded-2xl transition-all hover:bg-slate-50 flex items-center gap-2 shadow-sm">
            <Calendar size={20} /> Select Period
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
            <Download size={20} /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
          <div className="relative z-10">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Total Revenue</p>
            <div className="flex items-end gap-3">
              <h3 className="text-4xl font-black text-slate-900">₹45.2L</h3>
              <span className="mb-1 text-emerald-600 font-bold flex items-center gap-1 text-sm bg-emerald-50 px-2 py-1 rounded-lg">
                <TrendingUp size={14} /> +18.5%
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-4">Compared to last month (₹38.1L)</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
          <div className="relative z-10">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Total Outflow</p>
            <div className="flex items-end gap-3">
              <h3 className="text-4xl font-black text-slate-900">₹12.4L</h3>
              <span className="mb-1 text-red-600 font-bold flex items-center gap-1 text-sm bg-red-50 px-2 py-1 rounded-lg">
                <TrendingDown size={14} /> +2.1%
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-4">Includes salaries, stock & maintenance</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
          <div className="relative z-10">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Net Profit</p>
            <div className="flex items-end gap-3">
              <h3 className="text-4xl font-black text-slate-900">₹32.8L</h3>
              <span className="mb-1 text-blue-600 font-bold flex items-center gap-1 text-sm bg-blue-50 px-2 py-1 rounded-lg">
                <TrendingUp size={14} /> +24.3%
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-4">Projected for end of Oct 2024</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">Transaction History</h3>
          <button className="flex items-center gap-2 px-6 py-2 bg-slate-50 rounded-2xl text-slate-600 font-bold text-xs hover:bg-slate-100 transition-colors uppercase tracking-widest">
            <Filter size={14} /> Filter List
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <th className="px-8 py-4">Transaction ID</th>
                <th className="px-8 py-4">Details</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4 text-center">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 text-sm font-bold text-slate-500">{txn.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${txn.type === 'Credit' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                        {txn.type === 'Credit' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                      </div>
                      <span className="font-bold text-slate-900">{txn.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`font-black ${txn.type === 'Credit' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {txn.type === 'Credit' ? '+' : '-'} {txn.amount}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      txn.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-slate-400 text-sm">{txn.date}</td>
                  <td className="px-8 py-5 text-center">
                    <button className="text-emerald-600 hover:text-emerald-700 font-bold text-xs underline underline-offset-4">Download</button>
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

export default CashInflow;
