import React from 'react';
import { Link } from 'react-router-dom'
import image1 from '../assets/img/image1.jpg'
import propTypes from 'prop-types';

const Reservation = ({ result }) => (
  <div className="Reservation">
    <div className="Reservation-img"><img src={image1} alt="reservation" /></div>
    <h5 className='title'>title</h5>
    <p className='description'>Kampala</p>
    <div className='social-icons'>
      social media links here
    </div>
  </div>
);

Reservation.propTypes = {

};

export default Reservation;
