import React, { useState } from 'react';
import '../styles/MobilityPage.css';

const MobilityPage = () => {
  const [trafficIncidents] = useState([
    {
      id: 1,
      type: 'Unfall',
      location: 'A1 Zürich-Bern',
      status: 'Aktiv',
      impact: 'Stau, 20 Minuten Verzögerung',
      time: '10:30',
      severity: 'hoch',
      icon: 'fa-car-crash'
    },
    {
      id: 2,
      type: 'Baustelle',
      location: 'Hauptbahnhof Bern',
      status: 'Geplant',
      impact: 'Gleis 3-5 gesperrt',
      time: '08:00-17:00',
      severity: 'mittel',
      icon: 'fa-hard-hat'
    }
  ]);

  const [transportNews] = useState([
    {
      id: 1,
      title: 'Neue S-Bahn-Linie eröffnet',
      description: 'Die neue S-Bahn-Linie S42 verbindet ab sofort den Flughafen mit der Innenstadt',
      date: '10.12.2024',
      category: 'Öffentlicher Verkehr',
      icon: 'fa-train'
    },
    {
      id: 2,
      title: 'E-Bike Sharing erweitert',
      description: 'Das E-Bike Sharing Angebot wird um 50 neue Stationen erweitert',
      date: '09.12.2024',
      category: 'Mikromobilität',
      icon: 'fa-bicycle'
    }
  ]);

  const [serviceDisruptions] = useState([
    {
      id: 1,
      line: 'IC 1',
      route: 'Zürich HB - Bern',
      issue: 'Technische Störung',
      status: 'Verspätungen',
      expectedResolution: '12:00',
      icon: 'fa-exclamation-triangle'
    },
    {
      id: 2,
      line: 'Bus 10',
      route: 'Hauptbahnhof - Flughafen',
      issue: 'Umleitung',
      status: 'Alternative Route',
      expectedResolution: '18:00',
      icon: 'fa-route'
    }
  ]);

  const [mobilityTips] = useState([
    {
      id: 1,
      title: 'Hauptverkehrszeiten',
      description: 'Beste Reisezeiten zwischen 10-15 Uhr',
      icon: 'fa-clock'
    },
    {
      id: 2,
      title: 'Alternative Routen',
      description: 'Nutzen Sie die S-Bahn statt IC während Stoßzeiten',
      icon: 'fa-random'
    },
    {
      id: 3,
      title: 'Mobile Tickets',
      description: 'Kaufen Sie Tickets vorab in der App',
      icon: 'fa-ticket-alt'
    }
  ]);

  return (
    <div className="mobility-page">
      <section className="mobility-hero">
        <h1>Mobilität & Verkehr</h1>
        <p>Aktuelle Verkehrslage und wichtige Informationen für Ihre Reise</p>
      </section>

      {/* Aktuelle Vorfälle */}
      <section className="traffic-incidents">
        <h2>Aktuelle Verkehrsmeldungen</h2>
        <div className="incidents-container">
          {trafficIncidents.map(incident => (
            <div key={incident.id} className={`incident-card severity-${incident.severity}`}>
              <div className="incident-icon">
                <i className={`fas ${incident.icon}`}></i>
              </div>
              <div className="incident-content">
                <h3>{incident.type}</h3>
                <p className="location">{incident.location}</p>
                <p className="impact">{incident.impact}</p>
                <p className="time">Zeit: {incident.time}</p>
                <span className="status-badge">{incident.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verkehrsnachrichten */}
      <section className="transport-news">
        <h2>Aktuelle Nachrichten</h2>
        <div className="news-container">
          {transportNews.map(news => (
            <div key={news.id} className="news-card">
              <div className="news-icon">
                <i className={`fas ${news.icon}`}></i>
              </div>
              <div className="news-content">
                <span className="news-category">{news.category}</span>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <span className="news-date">{news.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Betriebsstörungen */}
      <section className="service-disruptions">
        <h2>Aktuelle Betriebsstörungen</h2>
        <div className="disruptions-container">
          {serviceDisruptions.map(disruption => (
            <div key={disruption.id} className="disruption-card">
              <div className="disruption-header">
                <div className="disruption-icon">
                  <i className={`fas ${disruption.icon}`}></i>
                </div>
                <h3>{disruption.line}</h3>
              </div>
              <div className="disruption-content">
                <p className="route">{disruption.route}</p>
                <p className="issue">{disruption.issue}</p>
                <p className="status">{disruption.status}</p>
                <p className="resolution">Erwartete Behebung: {disruption.expectedResolution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobilitäts-Tipps */}
      <section className="mobility-tips">
        <h2>Tipps für Ihre Reise</h2>
        <div className="tips-container">
          {mobilityTips.map(tip => (
            <div key={tip.id} className="tip-card">
              <div className="tip-icon">
                <i className={`fas ${tip.icon}`}></i>
              </div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobilityPage;