import React, { useState } from 'react';
import '../styles/EnvironmentPage.css';

const EnvironmentPage = () => {
  const [environmentStats] = useState({
    totalCO2Saved: 1250,
    treesEquivalent: 58,
    greenTrips: 324,
    carbonFootprint: 75
  });

  const [weatherAlerts] = useState([
    {
      id: 1,
      type: 'Starker Schneefall',
      region: 'Alpenregion',
      impact: 'Verzögerungen im Zugverkehr möglich',
      severity: 'mittel',
      icon: 'fa-snowflake'
    },
    {
      id: 2,
      type: 'Sturm',
      region: 'Nordschweiz',
      impact: 'Einschränkungen im öffentlichen Verkehr',
      severity: 'hoch',
      icon: 'fa-wind'
    }
  ]);

  const [naturalDisasters] = useState([
    {
      id: 1,
      type: 'Hochwasser',
      locations: ['Rhein', 'Aare'],
      status: 'Aktiv',
      affectedRoutes: ['Basel-Zürich', 'Bern-Thun'],
      icon: 'fa-water'
    },
    {
      id: 2,
      type: 'Erdrutsch',
      locations: ['Gotthard-Region'],
      status: 'Überwachung',
      affectedRoutes: ['Gotthard-Basistunnel'],
      icon: 'fa-mountain'
    }
  ]);

  const [environmentalImpacts] = useState([
    {
      id: 1,
      category: 'Luftqualität',
      status: 'Gut',
      recommendation: 'Ideal für Outdoor-Aktivitäten',
      icon: 'fa-cloud'
    },
    {
      id: 2,
      category: 'UV-Index',
      status: 'Mittel',
      recommendation: 'Sonnenschutz empfohlen',
      icon: 'fa-sun'
    },
    {
      id: 3,
      category: 'Pollenbelastung',
      status: 'Hoch',
      recommendation: 'Vorsicht für Allergiker',
      icon: 'fa-flower'
    }
  ]);

  const [environmentTips] = useState([
    {
      id: 1,
      title: 'Öffentliche Verkehrsmittel',
      description: 'Nutzen Sie Bahn und Bus für Ihre täglichen Wege',
      impact: 'Reduziert CO₂-Emissionen um bis zu 75%',
      icon: 'fa-train'
    },
    {
      id: 2,
      title: 'Fahrgemeinschaften',
      description: 'Teilen Sie Ihre Fahrten mit anderen',
      impact: 'Verringert den individuellen CO₂-Fußabdruck',
      icon: 'fa-users'
    },
    {
      id: 3,
      title: 'Fahrrad fahren',
      description: 'Nutzen Sie das Fahrrad für kurze Strecken',
      impact: 'Null Emissionen und gesund',
      icon: 'fa-bicycle'
    }
  ]);

  return (
    <div className="environment-page">
      <section className="environment-hero">
        <h1>Umwelt & Mobilität</h1>
        <p>Aktuelle Umweltbedingungen und deren Einfluss auf Ihre Mobilität</p>
      </section>

      {/* Umweltstatistiken */}
      <section className="environment-stats">
        <div className="stat-card">
          <i className="fas fa-leaf"></i>
          <h3>{environmentStats.totalCO2Saved} kg</h3>
          <p>CO₂ eingespart</p>
        </div>
        <div className="stat-card">
          <i className="fas fa-tree"></i>
          <h3>{environmentStats.treesEquivalent}</h3>
          <p>Bäume gepflanzt equivalent</p>
        </div>
        <div className="stat-card">
          <i className="fas fa-route"></i>
          <h3>{environmentStats.greenTrips}</h3>
          <p>Grüne Reisen</p>
        </div>
        <div className="stat-card">
          <i className="fas fa-percentage"></i>
          <h3>{environmentStats.carbonFootprint}%</h3>
          <p>Reduzierter CO₂-Fußabdruck</p>
        </div>
      </section>

      {/* Wetteralarme */}
      <section className="weather-alerts">
        <h2>Aktuelle Wetterwarnungen</h2>
        <div className="alerts-container">
          {weatherAlerts.map(alert => (
            <div key={alert.id} className={`alert-card severity-${alert.severity}`}>
              <div className="alert-icon">
                <i className={`fas ${alert.icon}`}></i>
              </div>
              <div className="alert-content">
                <h3>{alert.type}</h3>
                <p className="alert-region">{alert.region}</p>
                <p className="alert-impact">{alert.impact}</p>
                <span className="severity-badge">{alert.severity}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Naturkatastrophen */}
      <section className="natural-disasters">
        <h2>Naturereignisse & Verkehrsbeeinträchtigungen</h2>
        <div className="disasters-container">
          {naturalDisasters.map(disaster => (
            <div key={disaster.id} className="disaster-card">
              <div className="disaster-icon">
                <i className={`fas ${disaster.icon}`}></i>
              </div>
              <div className="disaster-content">
                <h3>{disaster.type}</h3>
                <p className="locations">Betroffene Gebiete: {disaster.locations.join(', ')}</p>
                <p className="status">Status: {disaster.status}</p>
                <div className="affected-routes">
                  <p>Betroffene Strecken:</p>
                  <ul>
                    {disaster.affectedRoutes.map((route, index) => (
                      <li key={index}>{route}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Umwelteinflüsse */}
      <section className="environmental-impacts">
        <h2>Umwelteinflüsse auf Mobilität</h2>
        <div className="impacts-container">
          {environmentalImpacts.map(impact => (
            <div key={impact.id} className="impact-card">
              <div className="impact-icon">
                <i className={`fas ${impact.icon}`}></i>
              </div>
              <h3>{impact.category}</h3>
              <p className="status">Status: {impact.status}</p>
              <p className="recommendation">{impact.recommendation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Umwelt-Tipps */}
      <section className="eco-tips">
        <h2>Tipps für umweltfreundliches Reisen</h2>
        <div className="tips-container">
          {environmentTips.map(tip => (
            <div key={tip.id} className="tip-card">
              <div className="tip-icon">
                <i className={`fas ${tip.icon}`}></i>
              </div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
              <span className="impact-badge">{tip.impact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Umwelt-Challenge */}
      <section className="eco-challenge">
        <div className="challenge-content">
          <h2>Umwelt-Challenge</h2>
          <p>Nehmen Sie an unserer monatlichen Umwelt-Challenge teil und gewinnen Sie Preise!</p>
          <button className="challenge-button">
            Challenge annehmen <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentPage;