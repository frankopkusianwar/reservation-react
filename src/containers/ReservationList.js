import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchReservations } from '../utils/api';
import Reservation from '../components/Reservation';

const ReservationList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const allReservations = useSelector(state => state.reservations.reservations);
  console.log(allReservations);
  if (localStorage.getItem('token')) {
    return (
      <div className="List-content">
        <h2>Reservations</h2>
        <div className="ReservationList-content">

          {
              ['one', 'two']
                .map((result, key) => (
                  <Reservation result={result} key={key} />
                ))
            }
        </div>
      </div>
    );
  }
  return (
    <div className="List-content">
      <h2>Reservations</h2>
      <div className="ReservationList-content">
        <h5>
          Please
          <Link to="/">Login</Link>
          {' '}
          to view reservations
        </h5>
      </div>
    </div>
  );
};

ReservationList.propTypes = {

};

export default ReservationList;
