import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, 
  Upload, 
  ChevronLeft, 
  Save, 
  CreditCard, 
  MapPin, 
  User, 
  IndianRupee, 
  Camera,
  FileText,
  CheckCircle2,
  Search,
  Filter
} from 'lucide-react';

const banks = [
  "Axis Bank", "Bank of India", "Canara Bank", "Cooperative Bank of Jharkhand", 
  "Gramin Bank", "HDFC Bank", "ICICI Bank", "IDBI Bank", "Punjab National Bank", 
  "State Bank of India", "Ujjivan Small Finance Bank", "Union Bank of India"
].sort();

const jharkhandDistricts = [
  "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", 
  "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", 
  "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", 
  "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"
].sort();

const AddFarmer = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All'); 
  const [sortOrder, setSortOrder] = useState('none'); 
  
  // Persistence logic: Load initial farmers from localStorage or use defaults
  const [farmers, setFarmers] = useState(() => {
    const saved = localStorage.getItem('puja_farmers');
    return saved ? JSON.parse(saved) : [
      { id: 1, sNo: '01', name: 'Rajesh Kumar', village: 'Ramnagar', district: 'Ranchi', bank: 'State Bank of India', mobile: '9876543210', aadhar: '1234-5678-9012', total: 50000, balance: 0 },
      { id: 2, sNo: '02', name: 'Sanjay Prasad', village: 'Belaganj', district: 'Hazaribagh', bank: 'Bank of India', mobile: '8877665544', aadhar: '9876-5432-1098', total: 75000, balance: 15000 },
    ];
  });

  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    mobile: '',
    bank: '',
    ifsc: '',
    aadharNumber: '',
    state: 'Jharkhand',
    district: '',
    city: '',
    village: '',
    pincode: '',
    bankTransferAmount: 0,
    date: new Date().toISOString().split('T')[0],
    quantity: 0,
    rate: 0
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => ({ ...prev, [fieldId]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let { name, value } = e.target;

    // Mobile Number Validation: Max 10 digits, numeric only
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length > 10) return;
      value = numericValue;
    }

    // Aadhar Number Validation: Format XXXX-XXXX-XXXX, Max 12 digits
    if (name === 'aadharNumber') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length > 12) return;
      
      // Add hyphens every 4 digits
      const matched = numericValue.match(/.{1,4}/g);
      value = matched ? matched.join('-') : numericValue;
    }

    // Pincode validation: max 6 digits
    if (name === 'pincode') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length > 6) return;
      value = numericValue;
    }

    // Handle financial inputs to avoid leading zeros
    if (['bankTransferAmount', 'quantity', 'rate'].includes(name)) {
      const numValue = value === '' ? 0 : Number(value);
      setFormData(prev => ({ ...prev, [name]: numValue }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fullAddress = useMemo(() => {
    const { name, village, city, district, state, pincode } = formData;
    let addressStr = "";
    
    if (name) addressStr += name;
    
    const details = [village, city, district, state].filter(Boolean).join(', ');
    if (details) {
      addressStr += (addressStr ? ", " : "") + details;
    }
    
    if (pincode) {
      addressStr += " - " + pincode;
    }
    
    return addressStr;
  }, [formData]);

  const farmerPayment = formData.quantity * formData.rate;
  const yourRevenue = formData.bankTransferAmount - farmerPayment;

  const handleSave = () => {
    if (!formData.name) {
      alert("Please enter at least the farmer's name.");
      return;
    }

    const nextSNo = (farmers.length + 1).toString().padStart(2, '0');
    const farmerPayment = formData.quantity * formData.rate;
    const yourRevenue = formData.bankTransferAmount - farmerPayment;
    const balance = yourRevenue < 0 ? Math.abs(yourRevenue) : 0;

    const newFarmer = {
      id: Date.now(),
      sNo: nextSNo,
      name: formData.name,
      mobile: formData.mobile || 'N/A',
      aadhar: formData.aadharNumber || 'N/A',
      village: formData.village || 'N/A',
      district: formData.district || 'N/A',
      bank: formData.bank || 'N/A',
      total: formData.bankTransferAmount,
      balance: balance,
      status: balance === 0 ? 'Paid' : `Due: ₹${balance.toLocaleString()}`
    };

    const updatedFarmers = [newFarmer, ...farmers];
    setFarmers(updatedFarmers);
    localStorage.setItem('puja_farmers', JSON.stringify(updatedFarmers));
    
    setShowSuccessModal(true);
    
    // Reset form after a delay and close modal
    setTimeout(() => {
      setShowSuccessModal(false);
      setShowForm(false);
      // Reset form
      setFormData({
        name: '',
        fathersName: '',
        mobile: '',
        bank: '',
        ifsc: '',
        aadharNumber: '',
        state: 'Jharkhand',
        district: '',
        city: '',
        village: '',
        pincode: '',
        bankTransferAmount: 0,
        date: new Date().toISOString().split('T')[0],
        quantity: 0,
        rate: 0
      });
      setPreviews({});
    }, 2500);
  };

  const filteredAndSortedFarmers = useMemo(() => {
    let result = [...farmers];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(f => 
        f.name.toLowerCase().includes(query) ||
        (f.mobile && f.mobile.includes(query)) ||
        (f.aadhar && f.aadhar.includes(query)) ||
        f.total.toString().includes(query)
      );
    }

    // Status filter
    if (filterType === 'Payable') {
      result = result.filter(f => f.balance > 0);
    } else if (filterType === 'Cleared') {
      result = result.filter(f => f.balance === 0);
    }

    // Sorting
    if (sortOrder === 'low-high') {
      result.sort((a, b) => a.balance - b.balance);
    } else if (sortOrder === 'high-low') {
      result.sort((a, b) => b.balance - a.balance);
    }

    return result;
  }, [farmers, searchQuery, filterType, sortOrder]);

  if (!showForm) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <UserPlus className="text-emerald-600" /> Farmer Management
            </h1>
            <p className="text-slate-500">View registered farmers or add a new entry to the database.</p>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
          >
            <UserPlus size={20} /> Register New Farmer
          </button>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h3 className="text-xl font-bold text-slate-900">Registered Farmers</h3>
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl">
                <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Total Count:</span>
                <span className="bg-emerald-600 text-white px-3 py-0.5 rounded-lg font-black text-sm">{filteredAndSortedFarmers.length}</span>
              </div>
            </div>

            {/* Powerful Search & Filters */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-5 relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Search by name, aadhar, mobile or amount..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                />
              </div>

              <div className="lg:col-span-4 flex p-1 bg-slate-100 rounded-2xl">
                {['All', 'Payable', 'Cleared'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                      filterType === type 
                      ? 'bg-white text-emerald-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="lg:col-span-3 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <Filter size={18} />
                </div>
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-600 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer"
                >
                  <option value="none">Sort: Select</option>
                  <option value="low-high">Balance: Low to High</option>
                  <option value="high-low">Balance: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <th className="px-8 py-4">S. No</th>
                  <th className="px-8 py-4">Farmer Name</th>
                  <th className="px-8 py-4">Contact & Aadhar</th>
                  <th className="px-8 py-4">Location</th>
                  <th className="px-8 py-4">Total Amount</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredAndSortedFarmers.map((farmer: any) => (
                  <tr key={farmer.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 text-sm font-bold text-slate-400">{farmer.sNo}</td>
                    <td className="px-8 py-5">
                      <p className="font-bold text-slate-900">{farmer.name}</p>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-xs space-y-1">
                        <p className="text-slate-600 font-medium">Mob: {farmer.mobile}</p>
                        <p className="text-slate-400">UID: {farmer.aadhar}</p>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-slate-600 text-sm">
                      {farmer.village}, {farmer.district}
                    </td>
                    <td className="px-8 py-5">
                      <span className="font-black text-slate-900">₹{farmer.total.toLocaleString()}</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        farmer.balance > 0 ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                      }`}>
                        {farmer.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <button className="text-emerald-600 font-bold text-sm hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredAndSortedFarmers.length === 0 && (
              <div className="p-20 text-center">
                <div className="inline-flex p-6 bg-slate-50 rounded-full text-slate-300 mb-4">
                  <Search size={48} />
                </div>
                <p className="text-slate-500 font-medium italic">No farmers found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => setShowForm(false)}
          className="p-3 bg-white hover:bg-slate-50 rounded-2xl border border-slate-200 text-slate-600 transition-all shadow-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <div>
          <h1 className="text-3xl font-black text-slate-900">New Farmer Registration</h1>
          <p className="text-slate-500">Fill in the details to add a new farmer to the system.</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Success Modal Overlay */}
        <AnimatePresence>
          {showSuccessModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-white rounded-[2.5rem] p-10 shadow-2xl max-w-sm w-full text-center border border-emerald-100"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-emerald-600 w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Success!</h2>
                <p className="text-slate-600 font-medium">Farmer registered successfully in Puja Traders database.</p>
                <div className="mt-8">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.5 }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Personal & Bank Details */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><User size={20} /></div>
            <h2 className="text-xl font-bold text-slate-900">Personal & Bank Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Farmer's Name" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Father's Name</label>
              <input type="text" name="fathersName" value={formData.fathersName} onChange={handleInputChange} placeholder="Father's Name" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Mobile Number</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Select Bank</label>
              <select name="bank" value={formData.bank} onChange={handleInputChange} className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer">
                <option value="">Choose Bank</option>
                {banks.map(bank => <option key={bank} value={bank}>{bank}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">IFSC Code</label>
              <input type="text" name="ifsc" value={formData.ifsc} onChange={handleInputChange} placeholder="IFSC Code" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Aadhar Number</label>
              <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleInputChange} placeholder="12 Digit Number" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>
        </section>

        {/* Address Details */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><MapPin size={20} /></div>
            <h2 className="text-xl font-bold text-slate-900">Location & Address</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">State</label>
              <input type="text" name="state" value={formData.state} readOnly className="w-full px-5 py-3.5 bg-slate-100 border-none rounded-2xl outline-none text-slate-500 cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">District</label>
              <select name="district" value={formData.district} onChange={handleInputChange} className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer">
                <option value="">Select District</option>
                {jharkhandDistricts.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Village</label>
              <input type="text" name="village" value={formData.village} onChange={handleInputChange} placeholder="Village Name" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Pincode</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="6 Digit Code" className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Auto-Generated Address</label>
            <div className="w-full px-5 py-4 bg-slate-100 text-slate-600 rounded-2xl italic text-sm select-none">
              {fullAddress || "Enter address details to generate..."}
            </div>
          </div>
        </section>

        {/* Image Upload Section */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Upload size={20} /></div>
            <h2 className="text-xl font-bold text-slate-900">Upload Documents</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { id: 'profile', label: 'Profile Photo', icon: <Camera size={24} /> },
              { id: 'aadhar', label: 'Aadhar Card', icon: <FileText size={24} /> },
              { id: 'passbook', label: 'Passbook', icon: <CreditCard size={24} /> },
              { id: 'checkbook', label: 'Checkbook', icon: <FileText size={24} /> },
              { id: 'signature', label: 'Signature', icon: <FileText size={24} /> },
            ].map(item => (
              <div key={item.id} className="relative group">
                <label className={`flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-2xl cursor-pointer transition-all text-center h-40 overflow-hidden ${previews[item.id] ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50'}`}>
                  {previews[item.id] ? (
                    <div className="relative w-full h-full">
                      <img src={previews[item.id]} alt={item.label} className="w-full h-full object-cover rounded-xl" />
                      <div className="absolute top-1 right-1 bg-emerald-600 text-white p-1 rounded-full shadow-lg">
                        <CheckCircle2 size={12} />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white uppercase bg-emerald-600 px-2 py-1 rounded-lg">Change</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="text-slate-400 group-hover:text-emerald-500 mb-2">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 group-hover:text-emerald-700">{item.label}</span>
                      <div className="mt-2 text-[8px] uppercase tracking-widest text-slate-400">Click to Upload</div>
                    </>
                  )}
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => handleFileChange(e, item.id)}
                  />
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Section */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><IndianRupee size={20} /></div>
            <h2 className="text-xl font-bold text-slate-900">Financial & Transaction Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Bank Transfer Amount (₹)</label>
              <input 
                type="number" 
                name="bankTransferAmount" 
                value={formData.bankTransferAmount === 0 ? '' : formData.bankTransferAmount} 
                onChange={handleInputChange} 
                placeholder="0"
                className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-900 focus:ring-2 focus:ring-emerald-500" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Transaction Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Quantity (Numbers)</label>
              <input 
                type="number" 
                name="quantity" 
                value={formData.quantity === 0 ? '' : formData.quantity} 
                onChange={handleInputChange} 
                placeholder="0"
                className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Rate (Per Unit ₹)</label>
              <input 
                type="number" 
                name="rate" 
                value={formData.rate === 0 ? '' : formData.rate} 
                onChange={handleInputChange} 
                placeholder="0"
                className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-50">
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Farmer Payment (Auto)</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">₹{farmerPayment.toLocaleString()}</span>
                <span className="text-xs text-slate-400 font-bold">(Qty x Rate)</span>
              </div>
            </div>
            <div className={`p-6 rounded-[2rem] border ${yourRevenue >= 0 ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Your Revenue / Balance (Auto)</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-black ${yourRevenue >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>₹{Math.abs(yourRevenue).toLocaleString()}</span>
                <span className="text-xs text-slate-400 font-bold">{yourRevenue >= 0 ? '(Profit/Owed to You)' : '(Balance Remaining)'}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-end gap-4 pt-8">
          <button 
            onClick={() => {
              setShowForm(false);
              setPreviews({});
            }}
            className="px-10 py-5 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-12 py-5 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-3 transform hover:scale-105 active:scale-95"
          >
            <Save size={20} /> Save Farmer Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFarmer;
