import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

export default function Topbar() {
  const [searchInput, setSearchInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // State variable to control dropdown visibility
  const user = localStorage.getItem('user') === 'true'; // Get user authentication status from local storage

  const handleSearch = () => {
    // Implement your search logic here
    // For simplicity, let's assume a basic search that echoes back the input
    console.log('Searching for:', searchInput);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // Redirect the user to the home page or any other appropriate action
    window.location.href = '/'; // Redirect to the home page
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <div className="top">
      <div className="topLeft">
        {/* Add any content you want on the left side of the Topbar */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="topSearchIcon" onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {user ? (
          // If user is authenticated, render the profile dropdown menu
          <div className="profileDropdown" onClick={toggleDropdown}>
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Profile"
            />
            {/* Render dropdown content based on state */}
            {showDropdown && (
              <div className="dropdownContent">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          // If user is not authenticated, render login/register links
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
