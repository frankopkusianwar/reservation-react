import React from 'react';
import img_avatar2 from '../../assets/img/img_avatar2.png';

const ReservationForm = ({ handleClose }) => {

    return (
      <form className="modal-content animate" action="" method="post">
        <div className="imgcontainer">
          <span className="close" title="Close Modal" onClick={handleClose}>&times;</span>
          <img src={img_avatar2} alt="Avatar" className="avatar"/>
        </div>

        <div className="container">
          <label htmlFor="date"><b>Date</b></label>
          <input type="date" placeholder="Enter Date" name="date" className="date" required /><br/>

          <label htmlFor="loc"><b>Location</b></label>
          <input type="text" placeholder="Enter Location" name="loc" required /><br/>
            
          <button type="submit">Login</button>
          
        </div>
      <div className="container" style={{background:"#f1f1f1"}}>
        <button type="button" onClick={handleClose} className="cancelbtn">Cancel</button>
      </div>
    </form>
  );
}

export default ReservationForm;
