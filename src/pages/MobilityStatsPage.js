import React, { useState } from 'react';
import '../styles/MobilityStatsPage.css';

function MobilityStatsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  const mobilityStats = {
    totalTrips: 157,
    totalDistance: 1250,
    co2Saved: 45.2,
    preferredMode: 'Train',
    weeklyComparison: '+12%',
    transportModeShare: {
      train: 45,
      bus: 25,
      bike: 20,
      walking: 10
    },
    peakHours: {
      morning: '08:00',
      evening: '17:30'
    },
    monthlyTrends: [
      { month: 'Jan', trips: 140 },
      { month: 'Feb', trips: 155 },
      { month: 'Mar', trips: 165 }
    ]
  };

  return (
    <div className="mobility-stats-page">
      <header className="stats-header">
        <h1>Mobilitätsstatistik</h1>
        <div className="period-selector">
          <button 
            className={selectedPeriod === 'week' ? 'active' : ''} 
            onClick={() => setSelectedPeriod('week')}
          >
            Woche
          </button>
          <button 
            className={selectedPeriod === 'month' ? 'active' : ''} 
            onClick={() => setSelectedPeriod('month')}
          >
            Monat
          </button>
          <button 
            className={selectedPeriod === 'year' ? 'active' : ''} 
            onClick={() => setSelectedPeriod('year')}
          >
            Jahr
          </button>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stats-card">
          <h3>Gesamtfahrten</h3>
          <div className="stat-value">{mobilityStats.totalTrips}</div>
          <div className="stat-comparison">
            <i className="fas fa-arrow-up"></i> {mobilityStats.weeklyComparison}
          </div>
        </div>

        <div className="stats-card">
          <h3>Zurückgelegte Distanz</h3>
          <div className="stat-value">{mobilityStats.totalDistance} km</div>
        </div>

        <div className="stats-card">
          <h3>CO₂ Einsparung</h3>
          <div className="stat-value">{mobilityStats.co2Saved} kg</div>
        </div>

        <div className="stats-card">
          <h3>Bevorzugtes Verkehrsmittel</h3>
          <div className="stat-value">{mobilityStats.preferredMode}</div>
        </div>

        <div className="stats-card wide">
          <h3>Verkehrsmittelverteilung</h3>
          <div className="mode-distribution">
            {Object.entries(mobilityStats.transportModeShare).map(([mode, percentage]) => (
              <div key={mode} className="mode-bar">
                <div className="mode-label">{mode}</div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${percentage}%` }}></div>
                </div>
                <div className="percentage">{percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-card">
          <h3>Hauptverkehrszeiten</h3>
          <div className="peak-hours">
            <div>
              <span>Morgens:</span> {mobilityStats.peakHours.morning}
            </div>
            <div>
              <span>Abends:</span> {mobilityStats.peakHours.evening}
            </div>
          </div>
        </div>

        <div className="stats-card wide">
          <h3>Monatliche Trends</h3>
          <div className="trends-chart">
            {mobilityStats.monthlyTrends.map((data) => (
              <div key={data.month} className="trend-bar">
                <div 
                  className="bar" 
                  style={{ height: `${(data.trips / 200) * 100}%` }}
                ></div>
                <div className="month">{data.month}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilityStatsPage;