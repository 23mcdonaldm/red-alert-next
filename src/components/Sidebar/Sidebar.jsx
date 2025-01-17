import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Users</h2>
      <div className="sort-by">
        <label htmlFor="sort">Sort By:</label>
        <select id="sort">
          <option value="most-recent">Most Recent</option>
        </select>
      </div>
      <ul className="user-list">
        <li className="user safe">trent - Status: Safe Trent Whigham 2024-09-20</li>
        <li className="user safe">milesm - Status: Safe Miles McDonald 2024-10-17</li>
        <li className="user danger">logan - Status: In Danger logan 2024-10-01</li>
        <li className="user danger">milesm - Status: In Danger Miles McDonald 2024-10-02</li>
        <li className="user safe">milesm - Status: Safe Miles McDonald 2024-12-17</li>
      </ul>
    </div>
  );
};

export default Sidebar;

