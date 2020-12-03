import React from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode'
import { close } from '../../actions/index'
import { startCreate } from '../../utils/api'
import img_avatar2 from '../../assets/img/img_avatar2.png';

export class ReservationForm extends React.Component {

  constructor() {
    super();
    this.state = {
      date: '',
      city: '',
      room_id: '',
      user_id: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isReserved) {
      alert('Booking created done')
      window.location.reload()
    }
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    const decoded_token = jwt_decode(localStorage.token)
    const { startCreate , close, room_id} = this.props;
    e.preventDefault();
    // get our form data out of state
    const {
      date, city,
    } = this.state;
    
    let data = {
      date,
      city,
      room_id,
      user_id: decoded_token.user_id,
    };

    startCreate(data);
    close()
  }

  render() {
    return (
      <form className="modal-content animate" onSubmit={this.handleSubmit}>
        <div className="imgcontainer">
          <span className="close" title="Close Modal" onClick={this.props.handleClose}>&times;</span>
          <img src={img_avatar2} alt="Avatar" className="avatar"/>
        </div>

        <div className="container">
          <label htmlFor="date"><b>Date</b></label>
          <input type="date" placeholder="Enter Date" name="date" className="date" onChange={this.changeHandler} required /><br/>

          <label htmlFor="city"><b>city</b></label>
          <input type="text" placeholder="Enter city" name="city" onChange={this.changeHandler} required /><br/>
            
          <button type="submit">Book</button>
          
        </div>
      <div className="container" style={{background:"#f1f1f1"}}>
        <button type="button" onClick={this.props.handleClose} className="cancelbtn">Cancel</button>
      </div>
    </form>
  );
  }
}

export const mapStateToProps = (state) => {
  const { isReserved, isReserving } = state.reservationReducer;
  return {
    isReserving,
    isReserved,
  };
};

export default connect(mapStateToProps, { startCreate, close })(ReservationForm);
