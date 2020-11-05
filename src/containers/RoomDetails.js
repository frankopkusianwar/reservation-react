import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import image2 from '../assets/img/image2.jpg'
import circle from '../assets/img/circle.PNG'
import ReservationForm from '../components/forms/reservationForm'
import ReservationModal from '../components/modals/reservationModal'
import { submitClose, close, show } from '../actions/index' 

import propTypes from 'prop-types';

const RoomLDetails = (props) => {

  const roomData = props.location.state.result;
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modalReducer.modal);

  let handleSubmit = (e) => {
    dispatch(submitClose());
  }

  let modalOpen = () => {
    dispatch(show());
  }

  let modalClose = () => {
    dispatch(close());
  }

  return (
    <div>
      <div className="RoomLDetails ">
        <div className="Room-details-img">
          <img src={image2} alt="room" />
        </div>
        <div className="details-text">
          <h2>{ roomData.title }</h2>
          <div className="details-p">
            <p><b>Fee:</b> <span>{ roomData.fee }</span></p>
            <p><b>Bed:</b> { roomData.bed }</p>
            <p><b>View:</b> city view</p>
            <p><b>Size:</b>{roomData.size }</p>
            <p><b>Duration:</b> 72 hrs</p>
          </div>
          <div className='details-last'>
            <p>DISCOVER MORE ROOMS</p>
            <img src={circle} alt="circle" />
            <ReservationModal show={modal}>
              <ReservationForm handleClose={modalClose} room_id={roomData.id} />
            </ReservationModal>
            <div className="book">
              { sessionStorage.getItem('token') ? <button onClick={modalOpen}>Book Room</button>:<Link to="/"><button>Login to Book</button></Link>}
            </div>
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
