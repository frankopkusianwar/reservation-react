import React from 'react';
import Room from '../components/Room'
import propTypes from 'prop-types';

const RoomList = () => {

  return (
    <div className="RoomList">
      <h2>Available Rooms</h2>
      <p>Please Select a Room</p>
      <Room />
    </div>
  );
};



RoomList.propTypes = {
  
};

export default RoomList;
