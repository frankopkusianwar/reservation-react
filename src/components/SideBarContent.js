import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const SideBarContent = () => {
  return (
    <div className="SideBar">
      <h3>HOTEL ELDIMA</h3>
      <ul>
        <li className="active"><Link to="/">HOME</Link></li>
        <li><Link to="/rooms">ROOMS</Link></li>
        <li><Link to="#">LIFESTYLE</Link></li>
        <li><Link to="#">SHOP</Link></li>
      </ul>
      <div className="SideBar-social">
      <FaFacebookF style={{ fill: '#d1cfd0' }} className="icon"/>
      <FaTwitter style={{ fill: '#d1cfd0' }} className="icon"/>
      <FaInstagram style={{ fill: '#d1cfd0' }} className="icon"/>
      </div>
      <p className="side-last">2015 HOTEL ELDIMA</p>
    </div>
  );
}

export default SideBarContent;
