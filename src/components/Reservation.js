import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import image1 from '../assets/img/image1.jpg';

const Reservation = ({ result }) => (
  <div className="Reservation">
    <div className="Reservation-img"><img src={image1} alt="reservation" /></div>
    <div className="text-content">
      <h5 className="title">25-8-2020</h5>
      <p className="description">Kampala</p>
      <div className="">
        <FaFacebookF style={{ fill: '#d1cfd0' }} className="icon-rsv" />
        <FaTwitter style={{ fill: '#d1cfd0' }} className="icon-rsv" />
        <FaInstagram style={{ fill: '#d1cfd0' }} className="icon-rsv" />
      </div>
    </div>
  </div>
);

Reservation.propTypes = {

};

export default Reservation;
