import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import image1 from '../assets/img/image1.jpg'

import propTypes from 'prop-types';

const Room = ({ result }) => (
  <div className="Room">
    <div className="Room-img"><img src={image1} alt="room" /></div>
    <h5 className='title'>{result.title}</h5>
    <p className='description'>{result.bed}</p>
    <Link to={{ pathname: `/details/${result.id}`, state: { result },}}>details</Link>
    <div className=''>
      <FaFacebookF style={{ fill: '#d1cfd0' }} className="icon-rm"/>
      <FaTwitter style={{ fill: '#d1cfd0' }} className="icon-rm"/>
      <FaInstagram style={{ fill: '#d1cfd0' }} className="icon-rm"/>
    </div>
  </div>
);

Room.propTypes = {

};

export default Room;
