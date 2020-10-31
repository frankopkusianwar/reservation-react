import React from 'react';
import { Link } from 'react-router-dom';

const SideBarContent = () => {
  return (
    <div className="SideBar">
      <h3>HOTEL ELDIMA</h3>
      <ul>
        <li className="active"><Link to="/rooms">ROOMS</Link></li>
        <li><Link to="#">LIFESTYLE</Link></li>
        <li><Link to="#">SHOP</Link></li>
      </ul>
      <div className="SideBar-social"><p>social media</p></div>
    </div>
  );
}

export default SideBarContent;
