import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';  // Make sure to import the updated CSS file

const Navbar = () => {
  const navigate = useNavigate();

  // Handle logout and redirect to login page
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>PG Listing Portal</h2>
      </div>

      <ul className="navbar-links">
        <li><Link to="/room-listings">Room Listings</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
