import React, { useState } from 'react';
import '../styles/TicketsPage.css';

const TicketsPage = () => {
  const [activeTab, setActiveTab] = useState('tickets');

  const transportProviders = {
    publicTransport: [
      {
        id: 'sbb',
        name: 'SBB',
        logo: 'sbb-logo.png',
        singleTickets: [
          {
            type: 'City-Ticket Bern',
            price: '4.60',
            duration: '60 Min',
            zones: ['Bern City'],
            class: '2. Klasse'
          },
          {
            type: 'Kurzstrecke',
            price: '2.40',
            duration: '30 Min',
            zones: ['Innerhalb einer Zone'],
            class: '2. Klasse'
          },
          {
            type: 'Nachtzuschlag',
            price: '5.00',
            duration: 'Einmalig',
            validTime: '1:00 - 5:00 Uhr'
          }
        ],
        tickets: [
          {
            type: 'GA Travelcard',
            price: '3860',
            duration: 'Jahr',
            features: ['Unbegrenzte Fahrten', 'Alle Strecken', '1. oder 2. Klasse', 'Internationale Vergünstigungen']
          },
          {
            type: 'Halbtax',
            price: '185',
            duration: 'Jahr',
            features: ['50% Rabatt', 'Alle Strecken', 'Kombinierbar mit anderen Abos']
          }
        ]
      },
      {
        id: 'bernmobil',
        name: 'BERNMOBIL',
        logo: 'bernmobil-logo.png',
        singleTickets: [
          {
            type: 'Einzelfahrt City',
            price: '3.80',
            duration: '60 Min',
            zones: ['Bern City']
          },
          {
            type: 'Kurzstrecke',
            price: '2.30',
            duration: '30 Min',
            zones: ['3 Haltestellen']
          },
          {
            type: 'Tageskarte City',
            price: '13.60',
            duration: '24h',
            zones: ['Bern City']
          }
        ],
        tickets: [
          {
            type: 'Libero-Abo',
            price: '79',
            duration: 'Monat',
            features: ['Alle Zonen Bern', 'Bus und Tram', 'Übertragbar']
          }
        ]
      }
    ],
    sharingServices: [
      {
        id: 'publibike',
        name: 'PubliBike',
        logo: 'publibike-logo.png',
        singleRides: [
          {
            type: 'Einzelfahrt E-Bike',
            price: '3.50',
            duration: '30 Min',
            additional: '0.10/Min danach'
          },
          {
            type: 'Einzelfahrt Bike',
            price: '2.50',
            duration: '30 Min',
            additional: '0.05/Min danach'
          }
        ],
        subscriptions: [
          {
            type: 'Jahres-Abo',
            price: '290',
            features: ['Unbegrenzte 30-Min-Fahrten', 'Alle Stationen', 'E-Bikes inklusive']
          }
        ]
      },
      {
        id: 'tier',
        name: 'TIER',
        logo: 'tier-logo.png',
        singleRides: [
          {
            type: 'E-Scooter Fahrt',
            basePrice: '1.00',
            pricePerMin: '0.35',
            unlockFee: '1.00'
          },
          {
            type: 'E-Bike Fahrt',
            basePrice: '1.00',
            pricePerMin: '0.40',
            unlockFee: '1.00'
          }
        ],
        subscriptions: [
          {
            type: 'TIER Pass',
            price: '39.99',
            duration: 'Monat',
            features: ['Keine Entsperrgebühr', '50% Rabatt pro Minute', 'Reservierungsfunktion']
          }
        ]
      }
    ],
    rideHailing: [
      {
        id: 'uber',
        name: 'Uber',
        logo: 'uber-logo.png',
        singleRides: [
          {
            type: 'UberX',
            basePrice: '4.00',
            pricePerKm: '1.80',
            pricePerMin: '0.50',
            minPrice: '7.00'
          },
          {
            type: 'Uber Green',
            basePrice: '4.50',
            pricePerKm: '2.00',
            pricePerMin: '0.55',
            minPrice: '8.00'
          },
          {
            type: 'Uber Van',
            basePrice: '6.00',
            pricePerKm: '2.50',
            pricePerMin: '0.60',
            minPrice: '12.00'
          }
        ],
        subscriptions: [
          {
            type: 'Uber Pass',
            price: '14.99',
            duration: 'Monat',
            features: ['10% Rabatt auf Fahrten', 'Keine Surge-Preise', 'Prioritäts-Support']
          }
        ]
      }
    ]
  };

  const combiAbos = [
    {
      id: 1,
      name: 'Urban Mobility Basic',
      price: '129.00',
      duration: 'Monat',
      included: ['BERNMOBIL Libero-Abo', 'PubliBike Basic', 'TIER Basic'],
      features: [
        'Öffentlicher Verkehr in Bern',
        '60 Min PubliBike pro Tag',
        '2 kostenlose TIER Entsperrungen pro Tag'
      ],
      savings: '25%'
    },
    {
      id: 2,
      name: 'Swiss Mobility Premium',
      price: '389.00',
      duration: 'Monat',
      included: ['GA 2. Klasse', 'PubliBike Premium', 'TIER Premium', 'Uber Pass'],
      features: [
        'Schweizweiter ÖV',
        'Unbegrenzte PubliBike Nutzung',
        'TIER Flatrate (120 Min/Tag)',
        'Uber Rabatte schweizweit'
      ],
      savings: '35%'
    }
  ];

  return (
    <div className="tickets-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Integrierte Mobilität</h1>
          <p>Ein Abo. Alle Transportmittel. Maximale Flexibilität.</p>
        </div>
      </section>

      <section className="tabs-section">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'tickets' ? 'active' : ''}`}
            onClick={() => setActiveTab('tickets')}
          >
            Kombi-Abos
          </button>
          <button 
            className={`tab ${activeTab === 'single' ? 'active' : ''}`}
            onClick={() => setActiveTab('single')}
          >
            Einzelfahrten
          </button>
          <button 
            className={`tab ${activeTab === 'public' ? 'active' : ''}`}
            onClick={() => setActiveTab('public')}
          >
            Öffentlicher Verkehr
          </button>
          <button 
            className={`tab ${activeTab === 'sharing' ? 'active' : ''}`}
            onClick={() => setActiveTab('sharing')}
          >
            Sharing Services
          </button>
          <button 
            className={`tab ${activeTab === 'ride' ? 'active' : ''}`}
            onClick={() => setActiveTab('ride')}
          >
            Ride-Hailing
          </button>
        </div>

        {activeTab === 'tickets' && (
          <div className="combi-abos">
            <h2>Kombinierte Mobilitäts-Abos</h2>
            <div className="abo-grid">
              {combiAbos.map(abo => (
                <div key={abo.id} className="abo-card premium">
                  <div className="abo-header">
                    <h3>{abo.name}</h3>
                    <div className="savings-badge">Sparen Sie {abo.savings}</div>
                  </div>
                  <div className="price">
                    <span className="amount">CHF {abo.price}</span>
                    <span className="duration">/{abo.duration}</span>
                  </div>
                  <div className="included-services">
                    <h4>Enthaltene Services:</h4>
                    <ul>
                      {abo.included.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="features">
                    <h4>Features:</h4>
                    <ul>
                      {abo.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="subscribe-button">Jetzt abonnieren</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'single' && (
          <div className="single-tickets">
            <div className="section-group">
              <h2>Öffentlicher Verkehr - Einzeltickets</h2>
              {transportProviders.publicTransport.map(provider => (
                <div key={provider.id} className="provider-card">
                  <div className="provider-header">
                    <img src={provider.logo} alt={provider.name} className="provider-logo" />
                    <h3>{provider.name}</h3>
                  </div>
                  <div className="tickets-grid">
                    {provider.singleTickets?.map((ticket, index) => (
                      <div key={index} className="single-ticket-card">
                        <h4>{ticket.type}</h4>
                        <div className="price">
                          <span className="amount">CHF {ticket.price}</span>
                          <span className="duration">/{ticket.duration}</span>
                        </div>
                        {ticket.zones && (
                          <div className="zones">
                            Gültig in: {ticket.zones.join(', ')}
                          </div>
                        )}
                        {ticket.class && (
                          <div className="class">
                            Klasse: {ticket.class}
                          </div>
                        )}
                        {ticket.validTime && (
                          <div className="valid-time">
                            Gültig: {ticket.validTime}
                          </div>
                        )}
                        <button className="buy-button">Jetzt kaufen</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="section-group">
              <h2>Sharing Services - Einzelfahrten</h2>
              {transportProviders.sharingServices.map(provider => (
                <div key={provider.id} className="provider-card">
                  <div className="provider-header">
                    <img src={provider.logo} alt={provider.name} className="provider-logo" />
                    <h3>{provider.name}</h3>
                  </div>
                  <div className="tickets-grid">
                    {provider.singleRides?.map((ride, index) => (
                      <div key={index} className="single-ticket-card">
                        <h4>{ride.type}</h4>
                        {ride.basePrice && (
                          <div className="price-breakdown">
                            <div>Grundpreis: CHF {ride.basePrice}</div>
                            <div>Pro Minute: CHF {ride.pricePerMin}</div>
                            {ride.unlockFee && <div>Entsperrgebühr: CHF {ride.unlockFee}</div>}
                            {ride.pricePerKm && <div>Pro Kilometer: CHF {ride.pricePerKm}</div>}
                            {ride.minPrice && <div>Mindestpreis: CHF {ride.minPrice}</div>}
                          </div>
                        )}
                        {ride.price && (
                          <div className="price">
                            <span className="amount">CHF {ride.price}</span>
                            <span className="duration">/{ride.duration}</span>
                          </div>
                        )}
                        {ride.additional && (
                          <div className="additional">
                            Zusätzlich: {ride.additional}
                          </div>
                        )}
                        <button className="buy-button">Jetzt buchen</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="section-group">
              <h2>Ride-Hailing - Fahrpreise</h2>
              {transportProviders.rideHailing.map(provider => (
                <div key={provider.id} className="provider-card">
                  <div className="provider-header">
                    <img src={provider.logo} alt={provider.name} className="provider-logo" />
                    <h3>{provider.name}</h3>
                  </div>
                  <div className="tickets-grid">
                    {provider.singleRides?.map((ride, index) => (
                      <div key={index} className="single-ticket-card">
                        <h4>{ride.type}</h4>
                        <div className="price-breakdown">
                          <div>Grundpreis: CHF {ride.basePrice}</div>
                          <div>Pro Kilometer: CHF {ride.pricePerKm}</div>
                          <div>Pro Minute: CHF {ride.pricePerMin}</div>
                          <div>Mindestpreis: CHF {ride.minPrice}</div>
                        </div>
                        <button className="buy-button">App öffnen</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'public' && (
          <div className="provider-section">
            {transportProviders.publicTransport.map(provider => (
              <div key={provider.id} className="provider-card">
                <div className="provider-header">
                  <img src={provider.logo} alt={provider.name} className="provider-logo" />
                  <h3>{provider.name}</h3>
                </div>
                <div className="tickets-grid">
                  {provider.tickets.map((ticket, index) => (
                    <div key={index} className="ticket-card">
                      <h4>{ticket.type}</h4>
                      <div className="price">
                        <span className="amount">CHF {ticket.price}</span>
                        <span className="duration">/{ticket.duration}</span>
                      </div>
                      <ul className="features-list">
                        {ticket.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <button className="buy-button">Kaufen</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sharing' && (
          <div className="provider-section">
            {transportProviders.sharingServices.map(provider => (
              <div key={provider.id} className="provider-card">
                <div className="provider-header">
                  <img src={provider.logo} alt={provider.name} className="provider-logo" />
                  <h3>{provider.name}</h3>
                </div>
                <div className="subscriptions-grid">
                  {provider.subscriptions.map((sub, index) => (
                    <div key={index} className="subscription-card">
                      <h4>{sub.type}</h4>
                      <div className="price">
                        <span className="amount">CHF {sub.price}</span>
                        {sub.duration && <span className="duration">/{sub.duration}</span>}
                      </div>
                      <ul className="features-list">
                        {sub.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <button className="subscribe-button">Abonnieren</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ride' && (
          <div className="provider-section">
            {transportProviders.rideHailing.map(provider => (
              <div key={provider.id} className="provider-card">
                <div className="provider-header">
                  <img src={provider.logo} alt={provider.name} className="provider-logo" />
                  <h3>{provider.name}</h3>
                </div>
                <div className="subscriptions-grid">
                  {provider.subscriptions.map((sub, index) => (
                    <div key={index} className="subscription-card">
                      <h4>{sub.type}</h4>
                      <div className="price">
                        <span className="amount">CHF {sub.price}</span>
                        <span className="duration">/{sub.duration}</span>
                      </div>
                      <ul className="features-list">
                        {sub.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <button className="subscribe-button">Abonnieren</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TicketsPage;