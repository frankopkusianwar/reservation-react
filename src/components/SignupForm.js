import React from 'react';
import img_avatar2 from '../assets/img/img_avatar2.png';


const SignupForm = ({ handleClose }) => {
  return (
    <form className="modal-content animate" action="" method="post">
        <div className="imgcontainer">
          <span className="close" title="Close Modal" onClick={handleClose}>&times;</span>
          <img src={img_avatar2} alt="Avatar" className="avatar"/>
        </div>

        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required /><br/>

          <label htmlFor="pswcnf"><b>Confirm Password</b></label>
          <input type="password" placeholder="Enter Password" name="pswcnf" required /><br/>
            
          <button type="submit">Signup</button>
          
        </div>
      <div class="container" style={{background:"#f1f1f1"}}>
      </div>
    </form>
  );
}

export default SignupForm;
