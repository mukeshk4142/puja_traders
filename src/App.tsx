import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import AchievementsPage from './pages/AchievementsPage';
import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/ScrollToTop';
import DashboardLayout from './components/DashboardLayout';
import DashboardOverview from './pages/dashboard/DashboardOverview';
import AddDistributor from './pages/dashboard/AddDistributor';
import AddFarmer from './pages/dashboard/AddFarmer';
import CashInflow from './pages/dashboard/CashInflow';
import ManageGallery from './pages/dashboard/ManageGallery';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/gallery" element={<><Navbar /><GalleryPage /><Footer /></>} />
          <Route path="/achievements" element={<><Navbar /><AchievementsPage /><Footer /></>} />
          <Route path="/login" element={<><Navbar /><LoginPage /><Footer /></>} />

          {/* Admin Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="add-distributor" element={<AddDistributor />} />
            <Route path="add-farmer" element={<AddFarmer />} />
            <Route path="cash-inflow" element={<CashInflow />} />
            <Route path="manage-gallery" element={<ManageGallery />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}
