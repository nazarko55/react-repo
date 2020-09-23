import React, { Component } from 'react';
import Logout from './Logout';
import Login from './Login';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      infoSpinner: false
    }
  }

  handleLogin = () => {
    this.setState({
      infoSpinner: true
    })

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        infoSpinner: false
      })
    }, 2000);
  }

  handleLogout = () => {

    this.setState({
      isLoggedIn: false
    })

  }

  render() {
    const loginBtn = !this.state.infoSpinner && <Login onLogin={this.handleLogin} />;

    const button = this.state.isLoggedIn ? <Logout onLogout={this.handleLogout} /> : loginBtn;

    const spinner = this.state.infoSpinner && <Spinner size={50} />;

    return (
      <>
        {button}
        {spinner}
      </>
    );
  }

}
export default Auth;