import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { close } from '../../actions/index';
import { startCreate } from '../../utils/api';

export class ReservationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      date: '',
      city: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isReserved) {
      alert('Booking successfully done');
      const { history } = this.props;
      history.push('/reservations');
      window.location.reload();
    }
  }

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = e => {
    const decodedToken = jwtDecode(localStorage.token);
    const { startCreate, close, room_id } = this.props;
    e.preventDefault();
    // get our form data out of state
    const {
      date, city,
    } = this.state;

    const data = {
      date,
      city,
      room_id,
      user_id: decodedToken.user_id,
    };

    startCreate(data);
    close();
  }

  render() {
    return (
      <form className="modal-content animate" onSubmit={this.handleSubmit}>
        <div className="imgcontainer">
          <span className="close" title="Close Modal" onClick={this.props.handleClose}>&times;</span>
          <h3>Make Your Reservation</h3>
        </div>

        <div className="container">
          <label htmlFor="date"><b>Date</b></label>
          <input type="date" placeholder="Enter Date" name="date" className="date" onChange={this.changeHandler} required />
          <br />

          <label htmlFor="city"><b>city</b></label>
          <input type="text" placeholder="Enter city" name="city" onChange={this.changeHandler} required />
          <br />

          <button type="submit">Book</button>

        </div>
        <div className="container" style={{ background: '#f1f1f1' }}>
          <button type="button" onClick={this.props.handleClose} className="cancelbtn">Cancel</button>
        </div>
      </form>
    );
  }
}

export const mapStateToProps = state => {
  const { isReserved, isReserving } = state.reservations;
  return {
    isReserving,
    isReserved,
  };
};

export default connect(mapStateToProps, { startCreate, close })(withRouter(ReservationForm));
