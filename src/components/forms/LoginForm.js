import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinAction } from '../../utils/api';
import img_avatar2 from '../../assets/img/img_avatar2.png';
import { close_login } from '../../actions/index';

export class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
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
    close_login();
  }

  render() {
    return (
      <form className="modal-content animate" onSubmit={this.handleSubmit}>
        <div className="imgcontainer">
          <span className="close" title="Close Modal" onClick={this.props.handleClose}>&times;</span>
          <img src={img_avatar2} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" onChange={this.changeHandler} required />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" onChange={this.changeHandler} required />
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

export default connect(mapStateToProps, { signinAction })(withRouter(LoginForm));
