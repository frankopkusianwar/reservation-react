import React from 'react';
import room from '../assets/img/imagedet.PNG'
import circle from '../assets/img/circle.PNG'
import propTypes from 'prop-types';

const RoomLDetails = () => {
  return (
    <div>
      <div className="RoomLDetails ">
        <div>
          <img src={room} alt="room" />
        </div>
        <div>
          <h1>room title</h1>
          <div className="details-p">
            <p>Fee: $100</p>
            <p>Bed: 1 single bed</p>
            <p>View: city view</p>
            <p>Duration: 72 hrs</p>
          </div>
          <div className='details-last'>
            <p>DISCOVER MORE ROOMS</p>
            <img src={circle} alt="circle" />
            <div className="book"><button>Book Room</button></div>
          </div>
        </div>
      </div>
      <div className="book back"><button>back</button></div>
    </div>
  );
};



RoomLDetails.propTypes = {
  
};

export default RoomLDetails;
