import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import Explorer from './pages/Explorer';
// import Community from './pages/Community'; // Entfernt, weil nicht verwendet
import Profile from './pages/Profile';
import Search from './pages/Search';
import CommunityPage from './pages/CommunityPage';
import TicketsPage from './pages/TicketsPage';
import FavoritesPage from './pages/FavoritesPage';
import PopularPlacesPage from './pages/PopularPlacesPage';
import RecommendedRoutesPage from './pages/RecommendedRoutesPage';
import EnvironmentPage from './pages/EnvironmentPage';
import MobilityPage from './pages/MobilityPage';
import RewardsPage from './pages/RewardsPage';
import MobilityStatsPage from './pages/MobilityStatsPage';
import PricingPage from './pages/PricingPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/karte" element={<MapPage />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/suche" element={<Search />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/popular-places" element={<PopularPlacesPage />} />
            <Route path="/recommended-routes" element={<RecommendedRoutesPage />} />
            <Route path="/environment" element={<EnvironmentPage />} />
            <Route path="/mobility" element={<MobilityPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/mobility-stats" element={<MobilityStatsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
