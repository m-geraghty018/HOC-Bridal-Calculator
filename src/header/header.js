import React from 'react';
import { Link } from 'gatsby';
import './header.css'; // Ensure to link the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">HOC Resources</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Bridal Calculator</Link>
          </li>
          <li className="nav-item">
            <Link to="/textTemplate" className="nav-link">Text Template</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

