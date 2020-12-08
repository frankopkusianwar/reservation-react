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
  console.log(allReservations)

  return (
    <div className="List-content">
      <h2>Reservations</h2>
      <div className="ReservationList-content">

          {
            ["one","two"]
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
