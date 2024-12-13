import React, { useState } from 'react';
import '../styles/FavoritesPage.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      type: 'route',
      from: 'Bern',
      to: 'Zürich',
      via: 'Olten'
    },
    {
      id: 2,
      type: 'ticket',
      name: 'GA Travelcard',
      validUntil: '2024-12-31'
    }
  ]);

  return (
    <div className="favorites-page">
      <h1>Meine Favoriten</h1>
      <div className="favorites-container">
        {favorites.map(favorite => (
          <div key={favorite.id} className="favorite-card">
            {favorite.type === 'route' ? (
              <>
                <h3>Favorisierte Route</h3>
                <p>Von: {favorite.from}</p>
                <p>Nach: {favorite.to}</p>
                <p>Via: {favorite.via}</p>
              </>
            ) : (
              <>
                <h3>Favorisiertes Ticket</h3>
                <p>{favorite.name}</p>
                <p>Gültig bis: {favorite.validUntil}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;