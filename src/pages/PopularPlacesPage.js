import React, { useState } from 'react';
import '../styles/PopularPlacesPage.css';

const PopularPlacesPage = () => {
  const [popularPlaces] = useState([
    {
      id: 1,
      name: 'Bundeshaus Bern',
      description: 'Sitz der Schweizer Regierung',
      address: 'Bundesplatz 3, 3005 Bern',
      category: 'Sehenswürdigkeit'
    },
    {
      id: 2,
      name: 'Zürich Hauptbahnhof',
      description: 'Grösster Bahnhof der Schweiz',
      address: 'Bahnhofplatz, 8001 Zürich',
      category: 'Transport'
    },
    {
      id: 3,
      name: 'Luzerner Kapellbrücke',
      description: 'Historische Holzbrücke aus dem 14. Jahrhundert',
      address: 'Kapellbrücke, 6002 Luzern',
      category: 'Sehenswürdigkeit'
    },
    {
      id: 4,
      name: 'Berner Münster',
      description: 'Gotische Kathedrale mit höchstem Kirchturm der Schweiz',
      address: 'Münsterplatz 1, 3011 Bern',
      category: 'Sehenswürdigkeit'
    }
  ]);

  return (
    <div className="popular-places-page">
      <h1>Beliebte Orte</h1>
      <div className="places-container">
        {popularPlaces.map(place => (
          <div key={place.id} className="place-card">
            <h3>{place.name}</h3>
            <p className="description">{place.description}</p>
            <p className="address">
              <i className="fas fa-map-marker-alt"></i> {place.address}
            </p>
            <span className="category-badge">{place.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPlacesPage;