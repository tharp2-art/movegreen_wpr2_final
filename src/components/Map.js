import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'mapbox-gl/dist/mapbox-gl.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom icons
const createIcon = (color) => new L.Icon({
  iconUrl: `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="36px" height="36px">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `)}`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

const icons = {
  current: createIcon('#4CAF50'),
  start: createIcon('#2196F3'),
  end: createIcon('#F44336'),
  selected: createIcon('#FF9800')
};

// Bern coordinates
const DEFAULT_CENTER = [46.9480, 7.4474];
const DEFAULT_ZOOM = 13;

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icons.current}>
      <Popup>
        <div className="current-location-popup">
          <h3>Sie sind hier</h3>
          <p>Lat: {position.lat.toFixed(4)}</p>
          <p>Lng: {position.lng.toFixed(4)}</p>
        </div>
      </Popup>
    </Marker>
  );
}

function MapControls() {
  const map = useMap();
  
  useEffect(() => {
    map.zoomControl.setPosition('topright');
    
    // Add scale control
    L.control.scale({
      metric: true,
      imperial: false,
      position: 'bottomright'
    }).addTo(map);
  }, [map]);

  return null;
}

const Map = ({ onLocationSelect, startPoint, endPoint }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setSelectedLocation({ lat, lng });
    if (onLocationSelect) {
      onLocationSelect({ lat, lng });
    }
  };

  // Calculate route path (dummy data for now)
  const routePath = startPoint && endPoint ? [
    [startPoint.lat, startPoint.lng],
    [endPoint.lat, endPoint.lng]
  ] : null;

  return (
    <MapContainer 
      center={DEFAULT_CENTER} 
      zoom={DEFAULT_ZOOM} 
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
      onClick={handleMapClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="topright" />
      <Marker position={DEFAULT_CENTER} icon={icons.start}>
        <Popup>
          Bern<br/>
          Bundesstadt der Schweiz
        </Popup>
      </Marker>
      <LocationMarker />
      <MapControls />
      
      {selectedLocation && (
        <Marker position={[selectedLocation.lat, selectedLocation.lng]} icon={icons.selected}>
          <Popup>
            <div className="selected-location-popup">
              <h3>Ausgewählter Standort</h3>
              <p>Lat: {selectedLocation.lat.toFixed(4)}</p>
              <p>Lng: {selectedLocation.lng.toFixed(4)}</p>
            </div>
          </Popup>
        </Marker>
      )}

      {startPoint && (
        <Marker position={[startPoint.lat, startPoint.lng]} icon={icons.start}>
          <Popup>
            <div className="selected-location-popup">
              <h3>Startpunkt</h3>
              <p>Lat: {startPoint.lat.toFixed(4)}</p>
              <p>Lng: {startPoint.lng.toFixed(4)}</p>
            </div>
          </Popup>
        </Marker>
      )}

      {endPoint && (
        <Marker position={[endPoint.lat, endPoint.lng]} icon={icons.end}>
          <Popup>
            <div className="selected-location-popup">
              <h3>Zielpunkt</h3>
              <p>Lat: {endPoint.lat.toFixed(4)}</p>
              <p>Lng: {endPoint.lng.toFixed(4)}</p>
            </div>
          </Popup>
        </Marker>
      )}

      {routePath && (
        <Polyline 
          positions={routePath}
          color="#2196F3"
          weight={4}
          opacity={0.7}
          dashArray="10, 10"
        />
      )}
    </MapContainer>
  );
};

export default Map;
