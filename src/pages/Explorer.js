import React, { useState } from 'react';
import '../styles/Explorer.css';

const places = [
  { id: 1, name: 'Englischer Garten', category: 'park', rating: 4.8 },
  { id: 2, name: 'Deutsches Museum', category: 'museum', rating: 4.7 },
  { id: 3, name: 'Viktualienmarkt', category: 'market', rating: 4.6 },
  { id: 4, name: 'Olympiapark', category: 'park', rating: 4.5 },
  { id: 5, name: 'Pinakothek der Moderne', category: 'museum', rating: 4.6 },
  { id: 6, name: 'Marienplatz', category: 'landmark', rating: 4.7 }
];

function Explorer() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('popular');

  const filteredPlaces = places.filter(place => {
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="explorer-page">
      <div className="explorer-header">
        <h1>Entdecken Sie interessante Orte</h1>
        <div className="explorer-controls">
          <input
            type="text"
            placeholder="Nach Orten suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Alle Kategorien</option>
            <option value="park">Parks</option>
            <option value="museum">Museen</option>
            <option value="market">Märkte</option>
            <option value="landmark">Sehenswürdigkeiten</option>
          </select>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="popular">Beliebteste Orte</option>
            <option value="new">Neu hinzugefügt</option>
            <option value="nearby">In meiner Nähe</option>
          </select>
        </div>
      </div>
      <div className="explorer-sections">
        <section className="section-places">
          <h2>Orte Entdecken</h2>
          <div className="places-grid">
            {filteredPlaces.slice(0, 4).map(place => (
              <div key={place.id} className="place-card">
                <div className="place-image">
                  <img src={`/assets/places/${place.category}.jpg`} alt={place.name} />
                </div>
                <div className="place-info">
                  <h3>{place.name}</h3>
                  <p className="category">{place.category}</p>
                  <p className="description">Kurzbeschreibung des Ortes...</p>
                  <div className="rating">
                    <span className="stars">{'★'.repeat(Math.floor(place.rating))}</span>
                    <span className="rating-number">{place.rating}</span>
                  </div>
                  <button className="button-primary">Route planen</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section-activities">
          <h2>Aktivitäten & Events</h2>
          <div className="activities-grid">
            {[1, 2, 3, 4].map(event => (
              <div key={event} className="event-card">
                <div className="event-image">
                  <img src={`/assets/events/event${event}.jpg`} alt={`Event ${event}`} />
                </div>
                <div className="event-info">
                  <h3>Event Titel {event}</h3>
                  <p className="description">Kurzbeschreibung des Events...</p>
                  <p>Datum: 2024-12-0{event}</p>
                  <p>Zeit: 18:00</p>
                  <p>Ort: Veranstaltungsort {event}</p>
                  <button className="button-primary">Mehr erfahren</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section-groups">
          <h2>Gruppen & Meetups</h2>
          <div className="groups-grid">
            {[1, 2, 3, 4].map(group => (
              <div key={group} className="group-card">
                <div className="group-image">
                  <img src={`/assets/groups/group${group}.jpg`} alt={`Gruppe ${group}`} />
                </div>
                <div className="group-info">
                  <h3>Gruppe {group}</h3>
                  <p className="description">Kurzbeschreibung der Gruppe {group}...</p>
                  <button className="button-secondary">Mitmachen</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section-wishlist">
          <h2>Wunschliste</h2>
          <div className="wishlist-grid">
            {[1, 2, 3, 4].map(item => (
              <div key={item} className="wishlist-card">
                <div className="wishlist-image">
                  <img src={`/assets/wishlist/item${item}.jpg`} alt={`Wunsch ${item}`} />
                </div>
                <div className="wishlist-info">
                  <h3>Wunschlisten-Element {item}</h3>
                  <p className="description">Beschreibung des Wunschlisten-Elements...</p>
                  <button className="button-danger">Entfernen</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Explorer;
