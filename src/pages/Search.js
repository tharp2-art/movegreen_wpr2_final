import React, { useState } from 'react';
import '../styles/Search.css';

const searchCategories = [
  { id: 'routes', name: 'Routen', icon: '🗺️' },
  { id: 'places', name: 'Orte', icon: '📍' },
  { id: 'community', name: 'Community', icon: '👥' }
];

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('routes');

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Suchen Sie nach Routen, Orten oder Beiträgen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
        
        <div className="search-categories">
          {searchCategories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="search-results">
        {!searchTerm ? (
          <div className="empty-state">
            <i className="fas fa-search fa-3x"></i>
            <p>Geben Sie einen Suchbegriff ein, um loszulegen</p>
          </div>
        ) : (
          <div className="results-list">
            {/* Hier werden die Suchergebnisse angezeigt */}
            <p>Suchergebnisse für "{searchTerm}" in {
              searchCategories.find(cat => cat.id === activeCategory).name
            }</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
