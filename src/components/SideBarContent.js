import React from 'react';
import { Link } from 'react-router-dom';

const SideBarContent = () => {
  return (
    <div className="SideBar">
      <ul>
        <li><Link to="/rooms">ROOMS</Link></li>
        <li>LIFESTYLE</li>
        <li>SHOP</li>
      </ul>
    </div>
  );
}

export default SideBarContent;
