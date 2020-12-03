import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { fetchRooms } from '../utils/api'
import Room from '../components/Room'
import propTypes from 'prop-types';

const RoomList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const allRooms = useSelector(state => state.rooms.rooms);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="RoomList">
      <div className="RoomList-text">
        <h2>Available Rooms</h2>
        <p>Please Select a Room</p>
      </div>
      <div className="RoomList-content">
        <Slider {...settings}>
          {
            allRooms
            .map((result, key) => (
                <Room result={result} key={key} />
              ))
          }
        </Slider>
      </div>
    </div>
  );
};



RoomList.propTypes = {
  
};

export default RoomList;
