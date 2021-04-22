import React from 'react';
import { connect } from 'react-redux';
import img_avatar2 from '../../assets/img/img_avatar2.png';
import { signupAction } from '../../utils/api';
import { close } from '../../actions/index';

class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isValid) {
      alert('Account created. Please login');
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
    const { signupAction, close } = this.props;
    e.preventDefault();
    // get our form data out of state
    const {
      username, email, password, confirmPassword,
    } = this.state;
    const data = {
      username,
      email,
      password,
      confirmPassword,
    };
    signupAction(data);
    close();
  }

  render() {
    return (
      <form className="modal-content animate" onSubmit={this.handleSubmit}>
        <div className="imgcontainer">
          <span className="close" title="Close Modal" onClick={this.props.handleClose}>&times;</span>
          <img src={img_avatar2} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" onChange={this.changeHandler} required />

          <label htmlFor="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" onChange={this.changeHandler} required />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" onChange={this.changeHandler} required />
          <br />

          <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
          <input type="password" placeholder="Enter Password" name="confirmPassword" onChange={this.changeHandler} required />
          <br />

          <button type="submit">Signup</button>

        </div>
        <div className="container" style={{ background: '#f1f1f1' }} />
      </form>
    );
  }
}

export const mapStateToProps = state => {
  const { isSigningUp, isValid } = state.register;
  return {
    isSigningUp,
    isValid,
  };
};

export default connect(mapStateToProps, { signupAction, close })(SignupForm);
