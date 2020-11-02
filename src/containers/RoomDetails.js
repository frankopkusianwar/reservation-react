import React from 'react';
import { Link } from 'react-router-dom'
import image2 from '../assets/img/image2.jpg'
import circle from '../assets/img/circle.PNG'
import propTypes from 'prop-types';

const RoomLDetails = (props) => {

  const roomData = props.location.state.result;

  return (
    <div>
      <div className="RoomLDetails ">
        <div className="Room-details-img">
          <img src={image2} alt="room" />
        </div>
        <div>
          <h1>{ roomData.title }</h1>
          <div className="details-p">
            <p><b>Fee:</b> { roomData.fee }</p>
            <p><b>Bed:</b> { roomData.bed }</p>
            <p><b>View:</b> city view</p>
            <p><b>Size:</b>{roomData.size }</p>
            <p><b>Duration:</b> 72 hrs</p>
          </div>
          <div className='details-last'>
            <p>DISCOVER MORE ROOMS</p>
            <img src={circle} alt="circle" />
            <div className="book"><button>Book Room</button></div>
          </div>
        </div>
      </div>
      <div className="book back"><Link to="/rooms"><button className="bck">back</button></Link></div>
    </div>
  );
};



RoomLDetails.propTypes = {
  
};

export default RoomLDetails;
