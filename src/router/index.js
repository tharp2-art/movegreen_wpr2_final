import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MapPage from '../pages/MapPage';
import CommunityPage from '../pages/CommunityPage';
import FavoritesPage from '../pages/FavoritesPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
