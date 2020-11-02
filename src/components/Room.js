import React from 'react';
import { Link } from 'react-router-dom'
import image1 from '../assets/img/image1.jpg'
import image2 from '../assets/img/image2.jpg'
import image3 from '../assets/img/image3.jpg'
import image4 from '../assets/img/image4.jpg'
import image5 from '../assets/img/image5.jpg'

import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propTypes from 'prop-types';

const Room = ({ result }) => (
  <div className="Room">
    <div className="Room-img"><img src={image1} alt="room" /></div>
    <h5 className='title'>{result.title}</h5>
    <p className='description'>{result.bed}</p>
    <Link to={{ pathname: `/details/${result.id}`, state: { result },}}>details</Link>
    <div className='social-icons'>
      social media links here
    </div>
  </div>
);

Room.propTypes = {

};

export default Room;
