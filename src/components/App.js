import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/app.css'
import LoginForm from './forms/LoginForm'
import SignupForm from './forms/SignupForm'
import Modal from "./modals/Modal"
import LoginModal from './modals/LoginModal'
import { close, show, close_login, show_login } from '../actions/index' 

const App = () => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal.modal);
  const logModal = useSelector(state => state.loginModal.loginmodal);


  let modalOpen = () => {
    dispatch(show());
  }

  let modalClose = () => {
    dispatch(close());
  }

  let loginOpen = () => {
    dispatch(show_login());
  }

  let loginClose = () => {
    dispatch(close_login());
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
          <p>Already have an account? <Link to="#" onClick={loginOpen}>Login</Link></p>
          <Modal show={modal}>
            <SignupForm handleClose={modalClose}/>
          </Modal>
          <LoginModal show={logModal}>
            <LoginForm handleClose={loginClose}/>
          </LoginModal>
          <h4>OR</h4>
          <p>Sign up <Link to="#" onClick={modalOpen}>Here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default App;
