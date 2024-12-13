import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleRouteCalculation = () => {
    navigate('/karte');
  };

  const handleTickets = () => {
    navigate('/tickets');
  };

  const handleFavorites = () => {
    navigate('/favorites');
  };

  const handlePopularPlaces = () => {
    navigate('/popular-places');
  };

  const handleRecommendedRoutes = () => {
    navigate('/recommended-routes');
  };

  const handleEnvironment = () => {
    navigate('/environment');
  };

  const handleMobility = () => {
    navigate('/mobility');
  };

  const handleRewards = () => {
    navigate('/rewards');
  };

  const handleMobilityStats = () => {
    navigate('/mobility-stats');
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Entdecken Sie nachhaltige Mobilität</h1>
          <p>Planen Sie Ihre Reisen umweltbewusst und effizient</p>
          <button className="button-primary" onClick={handleRouteCalculation}>
            Route berechnen
          </button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-card" onClick={handleTickets} style={{ cursor: 'pointer' }}>
            <i className="fas fa-ticket-alt fa-2x"></i>
            <h2>Billets und Abos</h2>
          </div>
          <div className="feature-card" onClick={handleFavorites} style={{ cursor: 'pointer' }}>
            <i className="fas fa-star fa-2x"></i>
            <h2>Favoriten</h2>
          </div>
          <div className="feature-card" onClick={handlePopularPlaces} style={{ cursor: 'pointer' }}>
            <i className="fas fa-map-marker-alt fa-2x"></i>
            <h2>Beliebte Orte</h2>
          </div>
          <div className="feature-card" onClick={handleRecommendedRoutes} style={{ cursor: 'pointer' }}>
            <i className="fas fa-route fa-2x"></i>
            <h2>Empfohlene Route</h2>
          </div>
          <div className="feature-card" onClick={handleEnvironment} style={{ cursor: 'pointer' }}>
            <i className="fas fa-leaf fa-2x"></i>
            <h2>Umwelt</h2>
          </div>
          <div className="feature-card" onClick={handleMobility} style={{ cursor: 'pointer' }}>
            <i className="fas fa-car fa-2x"></i>
            <h2>Mobilität</h2>
          </div>
          <div className="feature-card" onClick={handleRewards} style={{ cursor: 'pointer' }}>
            <i className="fas fa-gift fa-2x"></i>
            <h2>Belohnungen</h2>
          </div>
          <div className="feature-card" onClick={handleMobilityStats} style={{ cursor: 'pointer' }}>
            <i className="fas fa-chart-line fa-2x"></i>
            <h2>Mobilitätsstatistik</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
