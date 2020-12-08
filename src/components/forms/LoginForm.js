import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import { signinAction } from '../../utils/api';
import imgAvatar2 from '../../assets/img/img_avatar2.png';
import { closeLogin } from '../../actions/index';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem('token')) {
      const { history } = this.props;
      history.push('/rooms');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      const { history } = this.props;
      history.push('/rooms');
    }
  }

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = e => {
    const { signinAction } = this.props;
    e.preventDefault();
    // get our form data out of state
    const {
      email, password,
    } = this.state;
    const data = {
      email,
      password,
    };
    signinAction(data);
    closeLogin();
  }

  render() {
    const { handleClose } = this.props;
    return (
      <form className="modal-content animate" onSubmit={this.handleSubmit}>
        <div className="imgcontainer">
          <span className="close" title="Close Modal" onClick={handleClose}>&times;</span>
          <img src={imgAvatar2} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="email">
            <b>Email</b>
            <input type="email" placeholder="Enter Email" name="email" onChange={this.changeHandler} required />
          </label>
          <label htmlFor="password">
            <b>Password</b>
            <input type="password" placeholder="Enter Password" name="password" onChange={this.changeHandler} required />
          </label>
          <br />

          <button type="submit">Login</button>

        </div>
        <div className="container" style={{ background: '#f1f1f1' }} />
      </form>
    );
  }
}

export const mapStateToProps = state => {
  const { loggedIn } = state.login;
  return {
    loggedIn,
  };
};

LoginForm.propTypes = {
  history: propTypes.objectOf(propTypes.object).isRequired,
  loggedIn: propTypes.string.isRequired,
  signinAction: propTypes.func.isRequired,
  handleClose: propTypes.func.isRequired,
};

export default connect(mapStateToProps, { signinAction })(withRouter(LoginForm));
