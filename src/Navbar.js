import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Weather">Weather</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Traffic Data</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
