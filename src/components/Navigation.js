import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <img src="/logo.png" alt="MoveGreen Logo" />
      </NavLink>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/karte">
              Karte
            </NavLink>
          </li>
          <li>
            <NavLink to="/explorer">
              Explorer
            </NavLink>
          </li>
          <li>
            <NavLink to="/community">
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing">
              Preismodelle
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil">
              Profil
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="search-icon">
        <NavLink to="/suche">
          <i className="fas fa-search"></i>
        </NavLink>
      </div>
    </header>
  );
}

export default Navigation;
