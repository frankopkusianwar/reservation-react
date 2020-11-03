import React from "react";
import SignupForm from './LoginForm'

const Modal = ({ show, children }) => {
  const showHideClassName = show ? "block" : "none";
  return (
    <div className="modal" style={{display: showHideClassName}}>
        {children}
    </div>
  );
};

export default Modal;
