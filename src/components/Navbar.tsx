import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GGJ Pro Social
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Feed</Link>
          <Link to="/profile" className="navbar-link">Profile</Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/register" className="navbar-link">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
