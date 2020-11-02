import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../actions/index'
import Room from '../components/Room'
import propTypes from 'prop-types';

const RoomList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const allRooms = useSelector(state => state.rooms.rooms);
  return (
    <div className="RoomList">
      <div className="RoomList-text">
        <h2>Available Rooms</h2>
        <p>Please Select a Room</p>
      </div>
      <div className="RoomList-content">
        {
          allRooms
          .map((result, key) => (
              <Room result={result} key={key} />
            ))
        }
      </div>
    </div>
  );
};



RoomList.propTypes = {
  
};

export default RoomList;
