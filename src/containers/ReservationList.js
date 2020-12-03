import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchReservations } from '../utils/api'
import Reservation from '../components/Reservation'
import propTypes from 'prop-types';

const ReservationList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const allReservations = useSelector(state => state.reservations.reservations);

  return (
    <div className="RoomList">
      <div className="RoomList-text">
        <h2>Available Rooms</h2>
        <p>Please Select a Room</p>
      </div>
      <div className="RoomList-content">

          {
            allReservations
            .map((result, key) => (
                <Reservation result={result} key={key} />
              ))
          }
      </div>
    </div>
  );
};



ReservationList.propTypes = {
  
};

export default ReservationList;
