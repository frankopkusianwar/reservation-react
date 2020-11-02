import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Modal from "./Modal"
import { submitClose, close, show } from '../actions/index' 

const App = () => {

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
    <div className="App">
      <div className="App-content">
        <h3>MAKE A ROOM RESERVATION WITH US</h3>
        <p>
          We have 500 different rooms at our main branch. Today 200 rooms are available. 
          We also have branches all over the country. If you want to find out and book from
          our different branches. Please use the selector below.
        </p>
        <div className="form">
          <select>
            <option>--select--</option>
            <option>Kampala</option>
            <option>Mbale</option>
            <option>Jinja</option>
          </select>
          <button className="button">Book Now</button>
          <p>Already have an account? <Link to="#">Login</Link></p>
          <Modal show={modal}>
            <SignupForm handleClose={modalClose}/>
          </Modal>
          <h4>OR</h4>
          <p>Sign up <Link to="#" onClick={modalOpen}>Here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default App;
