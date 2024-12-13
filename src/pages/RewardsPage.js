import React, { useState } from 'react';
import '../styles/RewardsPage.css';

const RewardsPage = () => {
  const [userPoints] = useState({
    total: 2850,
    level: 'Gold',
    nextLevel: 'Platinum',
    pointsToNext: 150,
    co2Saved: 125
  });

  const [partnerRewards] = useState([
    {
      id: 1,
      partner: 'SBB',
      title: '1. Klasse Upgrade',
      description: 'Einmaliges Upgrade auf die 1. Klasse',
      points: 500,
      category: 'Transport',
      icon: 'fa-train',
      available: true
    },
    {
      id: 2,
      partner: 'PubliBike',
      title: 'Gratis Tagespass',
      description: '24 Stunden kostenlose Fahrradnutzung',
      points: 300,
      category: 'Bike-Sharing',
      icon: 'fa-bicycle',
      available: true
    },
    {
      id: 3,
      partner: 'TIER',
      title: '30 Freiminuten',
      description: '30 Minuten kostenloses E-Scooter fahren',
      points: 200,
      category: 'Mikromobilität',
      icon: 'fa-charging-station',
      available: true
    }
  ]);

  const [achievements] = useState([
    {
      id: 1,
      title: 'Grüner Pendler',
      description: '30 Tage CO₂-neutral gependelt',
      points: 500,
      progress: 80,
      icon: 'fa-leaf'
    },
    {
      id: 2,
      title: 'Bike Master',
      description: '100km mit dem Fahrrad zurückgelegt',
      points: 300,
      progress: 65,
      icon: 'fa-bicycle'
    },
    {
      id: 3,
      title: 'ÖV Champion',
      description: '50 Fahrten mit öffentlichen Verkehrsmitteln',
      points: 400,
      progress: 90,
      icon: 'fa-bus'
    }
  ]);

  const [pointsHistory] = useState([
    {
      id: 1,
      activity: 'Fahrrad statt Auto',
      points: 50,
      date: '10.12.2024',
      icon: 'fa-bicycle'
    },
    {
      id: 2,
      activity: 'Öffentliche Verkehrsmittel genutzt',
      points: 30,
      date: '09.12.2024',
      icon: 'fa-train'
    },
    {
      id: 3,
      activity: 'CO₂-Einsparung Milestone erreicht',
      points: 100,
      date: '08.12.2024',
      icon: 'fa-leaf'
    }
  ]);

  return (
    <div className="rewards-page">
      {/* User Status */}
      <section className="user-status">
        <div className="status-card">
          <div className="points-circle">
            <h2>{userPoints.total}</h2>
            <p>Punkte</p>
          </div>
          <div className="status-info">
            <h3>Level: {userPoints.level}</h3>
            <p>Noch {userPoints.pointsToNext} Punkte bis {userPoints.nextLevel}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(userPoints.total % 1000) / 10}%` }}
              ></div>
            </div>
          </div>
          <div className="eco-impact">
            <i className="fas fa-leaf"></i>
            <p>{userPoints.co2Saved}kg CO₂ eingespart</p>
          </div>
        </div>
      </section>

      {/* Partner Rewards */}
      <section className="partner-rewards">
        <h2>Belohnungen einlösen</h2>
        <div className="rewards-container">
          {partnerRewards.map(reward => (
            <div key={reward.id} className="reward-card">
              <div className="reward-header">
                <div className="partner-icon">
                  <i className={`fas ${reward.icon}`}></i>
                </div>
                <span className="partner-name">{reward.partner}</span>
              </div>
              <h3>{reward.title}</h3>
              <p>{reward.description}</p>
              <div className="reward-footer">
                <span className="points-cost">{reward.points} Punkte</span>
                <button 
                  className={`redeem-button ${userPoints.total >= reward.points ? '' : 'disabled'}`}
                  disabled={userPoints.total < reward.points}
                >
                  Einlösen
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <h2>Aktuelle Herausforderungen</h2>
        <div className="achievements-container">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                <i className={`fas ${achievement.icon}`}></i>
              </div>
              <div className="achievement-info">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <div className="achievement-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                  <span>{achievement.progress}%</span>
                </div>
                <span className="points-badge">+{achievement.points} Punkte</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Points History */}
      <section className="points-history">
        <h2>Punkteverlauf</h2>
        <div className="history-container">
          {pointsHistory.map(item => (
            <div key={item.id} className="history-card">
              <div className="history-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <div className="history-info">
                <h3>{item.activity}</h3>
                <p>{item.date}</p>
              </div>
              <span className="points-earned">+{item.points}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RewardsPage;