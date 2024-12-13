import React from 'react';
import '../styles/Profile.css';

const userStats = {
  co2Saved: 125,
  routesPlanned: 45,
  achievements: [
    { id: 1, name: 'Klimaschützer', description: '100kg CO₂ eingespart', icon: '🌍' },
    { id: 2, name: 'Routenmeister', description: '30 Routen geplant', icon: '🗺️' },
    { id: 3, name: 'Fahrradfahrer', description: '200km mit dem Fahrrad zurückgelegt', icon: '🚲' }
  ]
};

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <img src="/assets/avatars/profile.jpg" alt="Profilbild" className="profile-avatar" />
          <div className="profile-details">
            <h1>Max Mustermann</h1>
            <p>Mitglied seit Januar 2023</p>
          </div>
        </div>
        <button className="button-primary">Profil bearbeiten</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>CO₂ Einsparung</h3>
          <div className="stat-value">{userStats.co2Saved}kg</div>
          <p>Gesamt eingespartes CO₂</p>
        </div>
        <div className="stat-card">
          <h3>Geplante Routen</h3>
          <div className="stat-value">{userStats.routesPlanned}</div>
          <p>Nachhaltige Routen geplant</p>
        </div>
      </div>

      <section className="achievements-section">
        <h2>Errungenschaften</h2>
        <div className="achievements-grid">
          {userStats.achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              <span className="achievement-icon">{achievement.icon}</span>
              <h3>{achievement.name}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="settings-section">
        <h2>Einstellungen</h2>
        <div className="settings-grid">
          <div className="setting-item">
            <h3>Benachrichtigungen</h3>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item">
            <h3>Datenschutz</h3>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
