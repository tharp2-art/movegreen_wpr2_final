import React, { useState } from 'react';
import '../styles/MapSidebar.css';

const MapSidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const sidebarIcons = [
    { id: 'settings', icon: '⚙️', label: 'Einstellungen' },
    { id: 'notifications', icon: '🔔', label: 'Benachrichtigungen' },
    { id: 'explorer', icon: '🧭', label: 'Explorer' },
    { id: 'navigation', icon: '🧭', label: 'Navigation' },
    { id: 'route', icon: '↗️', label: 'Route' },
    { id: 'favorites', icon: '❤️', label: 'Favoriten' }
  ];

  const handleIconClick = (id) => {
    setActiveIcon(id === activeIcon ? null : id);
  };

  return (
    <div className="map-sidebar">
      {sidebarIcons.map(({ id, icon, label }) => (
        <div
          key={id}
          className={`sidebar-icon ${activeIcon === id ? 'active' : ''}`}
          onClick={() => handleIconClick(id)}
          title={label}
        >
          <span className="icon">{icon}</span>
          <span className="tooltip">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default MapSidebar;
