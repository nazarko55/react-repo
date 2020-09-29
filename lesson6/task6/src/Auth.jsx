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

  // algo
  //1. hide login
  //2. show spinner for 2 sec
  //3.hide spinner && show logout
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
    const { isLoggedIn, isLoading } = this.state;
    if (isLoading) {
      return <Spinner size={60} />
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />
    }
    return <Login onLogin={this.loginHandler} />;
    // return (
    //   <>
    //     { !isLoggedIn && !isLoading && <Login onLogin={this.loginHandler} />}
    //     { isLoggedIn && <Logout onLogout={this.logoutHandler} />}
    //     { isLoading && <Spinner />}
    //   </>
    // )
  }
}
export default Auth;