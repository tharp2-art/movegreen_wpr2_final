import React from 'react';
import ReactDOM from 'react-dom/client';
import '/node_modules/mapbox-gl/dist/mapbox-gl.css';
 // Wichtig: Mapbox CSS importieren
import 'leaflet/dist/leaflet.css'; // Falls Leaflet ebenfalls verwendet wird
import './styles/index.css'; // Dein eigenes CSS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
