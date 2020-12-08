import React from 'react';

const LoginModal = ({ show, children }) => {
  const showHideClassName = show ? 'block' : 'none';
  return (
    <div className="modal" style={{ display: showHideClassName }}>
      {children}
    </div>
  );
};

export default LoginModal;
