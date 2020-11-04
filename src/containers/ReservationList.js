import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReservations } from '../actions/index'
import Reservation from '../components/Reservation'
import propTypes from 'prop-types';

const ReservationList = () => {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchRooms());
  // }, [dispatch]);

  // const allRooms = useSelector(state => state.rooms.rooms);
  return (
    <div className="ReservationList">
      <div className="ReservationList-text">
        <h2>Reservations</h2>
      </div>
      <div className="ReservationList-content">
        {
          ['abc','def','abc','def','abc','def']
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