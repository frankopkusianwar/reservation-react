import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/app.css';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
import Modal from './modals/Modal';
import LoginModal from './modals/LoginModal';
import {
  close, show, closeLogin, showLogin,
} from '../actions/index';

const App = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal.modal);
  const logModal = useSelector(state => state.loginModal.loginmodal);

  const modalOpen = () => {
    dispatch(show());
  };

  const modalClose = () => {
    dispatch(close());
  };

  const loginOpen = () => {
    dispatch(showLogin());
  };

  const loginClose = () => {
    dispatch(closeLogin());
  };

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
          <button className="button" type="submit">Book Now</button>
          <p>
            Already have an account?
            <button type="submit" className="logLinks" onClick={loginOpen}>Login</button>
          </p>
          <Modal show={modal}>
            <SignupForm handleClose={modalClose} />
          </Modal>
          <LoginModal show={logModal}>
            <LoginForm handleClose={loginClose} />
          </LoginModal>
          <h4>OR</h4>
          <p>
            <button className="logLinks" type="submit" onClick={modalOpen}>Signup Here</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
