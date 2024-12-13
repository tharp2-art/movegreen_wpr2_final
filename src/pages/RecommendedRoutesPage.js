import React, { useState } from 'react';
import '../styles/RecommendedRoutesPage.css';

const RecommendedRoutesPage = () => {
  const [recommendedRoutes] = useState([
    {
      id: 1,
      title: 'Scenic Route durch die Alpen',
      from: 'Zürich HB',
      to: 'Luzern',
      duration: '2h 15min',
      highlights: ['Panoramaaussicht', 'Historische Strecke'],
      type: 'Zug',
      co2Savings: '75%'
    },
    {
      id: 2,
      title: 'Kulturroute durch die Altstadt',
      from: 'Bern',
      to: 'Basel',
      duration: '1h 45min',
      highlights: ['Historische Altstadt', 'Rheinufer'],
      type: 'Zug + Bus',
      co2Savings: '65%'
    },
    {
      id: 3,
      title: 'Bergpanorama Route',
      from: 'Interlaken',
      to: 'Zermatt',
      duration: '3h 30min',
      highlights: ['Matterhorn Aussicht', 'Bergdörfer'],
      type: 'Panoramazug',
      co2Savings: '80%'
    }
  ]);

  return (
    <div className="recommended-routes-page">
      <h1>Empfohlene Routen</h1>
      <div className="routes-container">
        {recommendedRoutes.map(route => (
          <div key={route.id} className="route-card">
            <div className="route-header">
              <h3>{route.title}</h3>
              <span className="eco-badge">
                <i className="fas fa-leaf"></i> {route.co2Savings} CO₂-Einsparung
              </span>
            </div>
            <div className="route-details">
              <div className="route-points">
                <p><strong>Von:</strong> {route.from}</p>
                <p><strong>Nach:</strong> {route.to}</p>
              </div>
              <div className="route-info">
                <p><i className="fas fa-clock"></i> {route.duration}</p>
                <p><i className="fas fa-train"></i> {route.type}</p>
              </div>
              <div className="route-highlights">
                <h4>Highlights:</h4>
                <ul>
                  {route.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="select-route-button">
              Route auswählen <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedRoutesPage;