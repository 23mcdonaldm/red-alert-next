import React from 'react';
import './GlobalHeader.css';

const GlobalHeader = ({ isLoggedIn = false }) => {
  const menuItems = [
    { label: 'Dashboard', active: true },
    { label: 'Subscriptions', active: false },
    { label: 'Discussion Board', active: false },
    { label: 'About Us', active: false }
  ];

  return (
    <header className="global-header">
      <div className="header-container">
        <div className="logo-nav">
          <div className="logo">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4iZRq44F0YMkTKS" alt="Logo" width="75" height="64" />
          </div>
          <nav className="menu">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className={`menu-item ${item.active ? 'active' : ''}`}
              >
                {item.label}
                {item.active && <div className="active-indicator" />}
              </div>
            ))}
          </nav>
        </div>
        <div className="auth-buttons">
          <button className="register-btn">Register</button>
          <button className="register-btn">Log in</button>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;