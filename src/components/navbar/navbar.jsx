import React from 'react';
import './navbar.css';
import { FaSpotify, FaHome, FaSearch, FaBox } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="spotify-navbar">
      <div className="left-section">
        <FaSpotify className="spotify-icon" />
        <FaHome className="home-icon" />

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="What do you want to play?" />
          <FaBox className="box-icon" />
        </div>
      </div>

      <div className="right-section">
        <span className='right-Text'>Premium</span>
        <span className='right-Text'>Support</span>
        <span className='right-Text'>Download</span>
        <div className="divider" />
        <span className="install-app text">
          <FiDownload className="download-icon" /> Install App
        </span>
        <span className='text'>Sign up</span>
        <button className="login-button">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
