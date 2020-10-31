import React from 'react';
import room from '../assets/img/imagedet.PNG'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propTypes from 'prop-types';

const Room = () => (
  <div className="Room">
    <div className="Room-circle"></div>
    <div className="Room-img"><img src={room} alt="room" /></div>
    <h5 className='title'>Deluxe Room With Balcony</h5>
    <p className='description'>view: city view</p>
    <div className='social-icons'>
      social media links here
    </div>
  </div>
);

Room.propTypes = {

};

export default Room;
