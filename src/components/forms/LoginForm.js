import React from 'react';
import img_avatar2 from '../../assets/img/img_avatar2.png';

const LoginForm = ({ handleClose }) => {

    return (
      <form className="modal-content animate" action="" method="post">
        <div className="imgcontainer">
          <span className="close" title="Close Modal" onClick={handleClose}>&times;</span>
          <img src={img_avatar2} alt="Avatar" className="avatar"/>
        </div>

        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required /><br/>
            
          <button type="submit">Login</button>
          
        </div>
      <div className="container" style={{background:"#f1f1f1"}}>
        <button type="button" onClick={handleClose} className="cancelbtn">Cancel</button>
      </div>
    </form>
  );
}

export default LoginForm;
