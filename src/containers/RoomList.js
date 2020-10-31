import React from 'react';
import Room from '../components/Room'
import propTypes from 'prop-types';

const RoomList = () => {
  return (
    <div className="RoomList">
      <h2>Available Rooms</h2>
      <p>Please Select a Room</p>
      {
        ['room1', 'room2', 'room3']
          .map((result, key) => (
            <Room result={result} key={key} />
          ))
      }
    </div>
  );
};



RoomList.propTypes = {
  
};

export default RoomList;
