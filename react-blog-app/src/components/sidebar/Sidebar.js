import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link to="/category/technology">
              <button className="categoryButton">Technology</button>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/category/education">
              <button className="categoryButton">Education</button>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/category/health">
              <button className="categoryButton">Health</button>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/category/food">
              <button className="categoryButton">Food</button>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/category/sports">
              <button className="categoryButton">Sports</button>
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="sidebarItem">
        <span className="sidebarTitle">FILTER</span>
        <div className="sidebarfilter">
          <ul className="dropdown">
            <li>
              <Link  to="/filter/2024">
                <button className="filterButton">2024</button>
              </Link>
            </li>
            <li>
              <Link to="/category/food">
                <button className="filterButton">2023</button>
              </Link>
            </li>
            <li>
              <Link to="/category/sports">
                <button className="filterButton">2022</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
