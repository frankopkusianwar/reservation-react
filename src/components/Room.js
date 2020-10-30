import React from 'react';
import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propTypes from 'prop-types';

const Room = () => (
  <div className="Room">
    <h6 className='title'>Deluxe Room With Balcony</h6>
    <p className='description'>view: city view</p>
    <div className='social-icons'>
      social media links here
    </div>
  </div>
);

Room.propTypes = {

};

export default Room;
